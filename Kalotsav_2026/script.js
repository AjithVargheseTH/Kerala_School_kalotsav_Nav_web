// ==========================================================================
// Kerala School Kalotsavam 2026 - Minimalist Fast Engine
// ==========================================================================

const state = {
  activeTab: 'stages',
  activeDay: 1,
  activeFilter: 'all',
  searchQuery: '',
  bookmarkedEvents: new Set(JSON.parse(localStorage.getItem('kalotsav_bookmarks_2026') || '[]')),
  selectedStageId: null
};

// Festival Days
const FESTIVAL_DAYS = [
  { day: 1, date: "Jan 14", weekday: "Wed", title: "Day 1" },
  { day: 2, date: "Jan 15", weekday: "Thu", title: "Day 2" },
  { day: 3, date: "Jan 16", weekday: "Fri", title: "Day 3" },
  { day: 4, date: "Jan 17", weekday: "Sat", title: "Day 4" },
  { day: 5, date: "Jan 18", weekday: "Sun", title: "Day 5" }
];

// Categorization helper
function getProgramCategory(title) {
  const t = title.toLowerCase();
  if (t.includes('dance') || t.includes('nritham') || t.includes('nirtham') || t.includes('mohiniyattam') || 
      t.includes('bharatanatyam') || t.includes('bharathanatyam') || t.includes('kuchipudi') || 
      t.includes('kuchippudi') || t.includes('oppana') || t.includes('margamkali') || 
      t.includes('tiruvatira') || t.includes('thiruvathira') || t.includes('attam') || 
      t.includes('poorakkali') || t.includes('poorakali') || t.includes('parichamuttu') || 
      t.includes('kolkali') || t.includes('chavittu') || t.includes('keralanadanam') || t.includes('kerala nadanam')) {
    return 'dance';
  }
  if (t.includes('chenda') || t.includes('thayambaka') || t.includes('melam') || t.includes('madhalam') || 
      t.includes('madalam') || t.includes('mrudhangam') || t.includes('thabala') || t.includes('veena') || 
      t.includes('violin') || t.includes('guitar') || t.includes('odakuzhal') || t.includes('nadaswaram') || 
      t.includes('panchavadhyam') || t.includes('vrinda') || t.includes('jazz') || t.includes('clarnet') || t.includes('band')) {
    return 'instruments';
  }
  if (t.includes('song') || t.includes('music') || t.includes('pattu') || t.includes('gazal') || 
      t.includes('ashtapadhi') || t.includes('ganalapanam') || t.includes('sangeetham') || t.includes('vanchipattu') || 
      t.includes('vrindavadyam') || t.includes('arabana') || t.includes('vande')) {
    return 'music';
  }
  if (t.includes('drama') || t.includes('skit') || t.includes('mono act') || t.includes('mimicry') || 
      t.includes('kadhakali') || t.includes('kathakali') || t.includes('koodiyattam') || 
      t.includes('chakyarkoothu') || t.includes('thullal') || t.includes('nangyarkut') || 
      t.includes('yakshaganam') || t.includes('mookabhinayam')) {
    return 'drama';
  }
  if (t.includes('writing') || t.includes('drawing') || t.includes('painting') || t.includes('cartoon') || 
      t.includes('collage') || t.includes('poster') || t.includes('quiz') || t.includes('prasnothari') || 
      t.includes('dictionary') || t.includes('samasyaroopanam')) {
    return 'literary';
  }
  if (t.includes('recitation') || t.includes('speech') || t.includes('kavyakeli') || t.includes('akshara') || 
      t.includes('musha\'ara') || t.includes('sambashanam') || t.includes('seminar') || t.includes('kadhaprasangam') || 
      t.includes('prabhashanam') || t.includes('elocution')) {
    return 'recitation';
  }
  return 'general';
}

// Stage Venue Clusters
const VENUE_CLUSTERS = [
  {
    hubName: "Thekkinkadu Maidan",
    description: "Main central festival ground, Swaraj Round",
    stages: [1, 2, 3],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Thekkinkadu+Maidan+Thrissur"
  },
  {
    hubName: "Town Hall & Kerala Sahitya Akademi",
    description: "Palace Road cultural hub",
    stages: [4, 7, 9],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Kerala+Sahitya+Akademi+Thrissur"
  },
  {
    hubName: "St. Thomas College Hub",
    description: "St. Thomas College Higher Secondary campus",
    stages: [21, 22, 23, 24],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Thomas+College+Higher+Secondary+School+Thrissur"
  },
  {
    hubName: "CMS & Vivekodayam School Hub",
    description: "Near Swaraj Round / CMS High School Grounds",
    stages: [5, 16, 17],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=CMS+Higher+Secondary+School+Thrissur"
  },
  {
    hubName: "Holy Family & St. Joseph Hub",
    description: "Holy Family & St. Joseph Convent schools",
    stages: [8, 14, 15],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Holy+Family+C.G.H.S.S+Thrissur"
  },
  {
    hubName: "Govt Model Boys HSS Hub",
    description: "Model Boys Higher Secondary School campus",
    stages: [18, 19],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Govt+Model+Boys+Higher+Secondary+School+Thrissur"
  },
  {
    hubName: "Other City Venues",
    description: "Various auditoriums across Thrissur town",
    stages: [6, 10, 11, 12, 13, 20, 25],
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Thrissur+Kerala"
  }
];

function getEventKey(event) {
  return `${event.stageId}_${event.day}_${event.time}_${event.program}`.replace(/\s+/g, '_');
}

function persistBookmarks() {
  localStorage.setItem('kalotsav_bookmarks_2026', JSON.stringify(Array.from(state.bookmarkedEvents)));
  updateBookmarkBadges();
}

function updateBookmarkBadges() {
  const count = state.bookmarkedEvents.size;
  const desktopBadge = document.getElementById('itineraryBadgeDesktop');
  const mobileBadge = document.getElementById('itineraryBadgeMobile');
  
  if (desktopBadge) {
    desktopBadge.textContent = count;
    desktopBadge.style.display = count > 0 ? 'inline-block' : 'none';
  }
  if (mobileBadge) {
    mobileBadge.textContent = count;
    mobileBadge.style.display = count > 0 ? 'flex' : 'none';
  }
}

function showToast(message) {
  const container = document.getElementById('toastWrap');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast-msg';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(-6px)';
    toast.style.transition = 'all 0.2s ease';
    setTimeout(() => toast.remove(), 200);
  }, 2200);
}

function switchTab(tabId) {
  state.activeTab = tabId;

  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.toggle('active', panel.id === `tab-${tabId}`);
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (tabId === 'itinerary') renderItineraryTab();
  if (tabId === 'schedule') renderScheduleTab();
  if (tabId === 'venues') renderVenuesTab();
}

// --------------------------------------------------------------------------
// 1. STAGES DIRECTORY
// --------------------------------------------------------------------------
function renderStages() {
  const container = document.getElementById('stageGrid');
  if (!container) return;

  container.innerHTML = '';

  eventData.stages.forEach(stage => {
    const stageEvents = eventData.schedule.filter(s => s.stageId === stage.id);
    const card = document.createElement('div');
    card.className = 'stage-card';

    const stageNumStr = stage.id < 10 ? `0${stage.id}` : `${stage.id}`;

    card.innerHTML = `
      <div class="stage-card-cover" onclick="openStageModal(${stage.id})">
        <img src="images/${stage.id}.jpeg" alt="${stage.name}" class="stage-card-img" onerror="this.src='images/home.jpeg'">
        <div class="stage-id-pill">Stage ${stageNumStr}</div>
        <div class="stage-event-tag">${stageEvents.length} events</div>
      </div>
      <div class="stage-card-content">
        <div>
          <h3 class="stage-name">${stage.name}</h3>
          <p class="stage-venue-text">${stage.location}</p>
        </div>
        <div class="stage-actions-row">
          <button class="btn-open-stage" onclick="openStageModal(${stage.id})">
            <span>View Schedule</span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <a href="${stage.mapUrl}" target="_blank" rel="noopener" class="btn-nav-map" title="Google Maps Navigation">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </a>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 2. SCHEDULE TIMELINE
// --------------------------------------------------------------------------
function renderScheduleTab() {
  const dayTabsContainer = document.getElementById('daySelectorPills');
  const listContainer = document.getElementById('programTimelineList');
  if (!dayTabsContainer || !listContainer) return;

  dayTabsContainer.innerHTML = '';
  FESTIVAL_DAYS.forEach(d => {
    const count = eventData.schedule.filter(s => s.day === d.day).length;
    const btn = document.createElement('button');
    btn.className = `day-tab-item ${state.activeDay === d.day ? 'active' : ''}`;
    btn.innerHTML = `
      <span class="day-title">${d.title}</span>
      <span class="day-sub">${d.date} (${count})</span>
    `;
    btn.onclick = () => {
      state.activeDay = d.day;
      renderScheduleTab();
    };
    dayTabsContainer.appendChild(btn);
  });

  let events = eventData.schedule.filter(s => s.day === state.activeDay);

  if (state.activeFilter !== 'all') {
    if (state.activeFilter === 'hs') {
      events = events.filter(s => s.program.includes('(HS)') || s.program.includes('(HS '));
    } else if (state.activeFilter === 'hss') {
      events = events.filter(s => s.program.includes('(HSS)') || s.program.includes('(HSS '));
    } else {
      events = events.filter(s => getProgramCategory(s.program) === state.activeFilter);
    }
  }

  listContainer.innerHTML = '';

  if (events.length === 0) {
    listContainer.innerHTML = `
      <div class="empty-box">
        <h3>No programs found</h3>
        <p>Try selecting a different filter category or day.</p>
      </div>
    `;
    return;
  }

  events.forEach(item => {
    const stage = eventData.stages.find(st => st.id === item.stageId) || { name: `Stage ${item.stageId}`, location: '' };
    const key = getEventKey(item);
    const isSaved = state.bookmarkedEvents.has(key);

    const row = document.createElement('div');
    row.className = 'prog-item';
    row.innerHTML = `
      <div class="prog-info-col">
        <span class="prog-time-chip">${item.time}</span>
        <div class="prog-title-text">${item.program}</div>
        <div class="prog-stage-subtitle" onclick="openStageModal(${item.stageId})">
          <span>${stage.name}</span>
          <span style="color: var(--text-muted); font-size: 0.72rem;">• ${stage.location}</span>
        </div>
      </div>
      <button class="btn-star ${isSaved ? 'saved' : ''}" onclick="toggleBookmark('${key}', this)" title="${isSaved ? 'Remove from saved' : 'Save program'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
      </button>
    `;
    listContainer.appendChild(row);
  });
}

function toggleBookmark(key, btnElem) {
  if (state.bookmarkedEvents.has(key)) {
    state.bookmarkedEvents.delete(key);
    showToast("Program removed from saved list");
  } else {
    state.bookmarkedEvents.add(key);
    showToast("Program saved to your list");
  }

  persistBookmarks();

  if (btnElem) {
    const isSaved = state.bookmarkedEvents.has(key);
    btnElem.classList.toggle('saved', isSaved);
    const svg = btnElem.querySelector('svg');
    if (svg) svg.setAttribute('fill', isSaved ? 'currentColor' : 'none');
  }

  if (state.activeTab === 'itinerary') {
    renderItineraryTab();
  }
}

// --------------------------------------------------------------------------
// 3. SAVED ITINERARY
// --------------------------------------------------------------------------
function renderItineraryTab() {
  const container = document.getElementById('itineraryListContainer');
  if (!container) return;

  const keys = Array.from(state.bookmarkedEvents);

  if (keys.length === 0) {
    container.innerHTML = `
      <div class="empty-box">
        <h3>No saved programs yet</h3>
        <p>Bookmark any performance in Stages or Schedule to build your personal festival timetable.</p>
        <button class="btn-modal-primary" style="display:inline-flex; width:auto; margin-top:1rem; padding: 0.5rem 1rem;" onclick="switchTab('schedule')">Browse Schedule</button>
      </div>
    `;
    return;
  }

  const savedEvents = [];
  eventData.schedule.forEach(item => {
    const key = getEventKey(item);
    if (state.bookmarkedEvents.has(key)) {
      savedEvents.push(item);
    }
  });

  container.innerHTML = `
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem;">
      <span style="font-size: 0.8rem; color: var(--text-secondary);">${savedEvents.length} saved performances</span>
      <div style="display: flex; gap: 0.4rem;">
        <button class="btn-modal-primary" style="width: auto; padding: 0.35rem 0.75rem;" onclick="exportCalendarICS()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
          <span>Export .ics</span>
        </button>
        <button class="btn-modal-secondary" style="padding: 0.35rem 0.75rem;" onclick="shareItinerary()">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  `;

  for (let d = 1; d <= 5; d++) {
    const dayEvents = savedEvents.filter(s => s.day === d);
    if (dayEvents.length === 0) continue;

    const dayMeta = FESTIVAL_DAYS.find(f => f.day === d);

    const section = document.createElement('div');
    section.style.marginBottom = '1.25rem';
    section.innerHTML = `
      <div style="font-size: 0.85rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.5rem; padding-bottom: 0.25rem; border-bottom: 1px solid var(--border-subtle);">
        ${dayMeta.title} • ${dayMeta.date}
      </div>
      <div class="prog-list" id="itinerary-day-${d}"></div>
    `;

    container.appendChild(section);
    const dayList = section.querySelector(`#itinerary-day-${d}`);

    dayEvents.forEach(item => {
      const stage = eventData.stages.find(st => st.id === item.stageId) || { name: `Stage ${item.stageId}`, location: '' };
      const key = getEventKey(item);

      const row = document.createElement('div');
      row.className = 'prog-item';
      row.innerHTML = `
        <div class="prog-info-col">
          <span class="prog-time-chip">${item.time}</span>
          <div class="prog-title-text">${item.program}</div>
          <div class="prog-stage-subtitle" onclick="openStageModal(${item.stageId})">
            <span>${stage.name}</span>
            <span style="color: var(--text-muted); font-size: 0.72rem;">• ${stage.location}</span>
          </div>
        </div>
        <div style="display:flex; align-items:center; gap:0.25rem;">
          <a href="${stage.mapUrl}" target="_blank" rel="noopener" class="btn-nav-map" title="Directions">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          </a>
          <button class="btn-star saved" onclick="toggleBookmark('${key}')" title="Remove">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
          </button>
        </div>
      `;
      dayList.appendChild(row);
    });
  }
}

function exportCalendarICS() {
  const keys = Array.from(state.bookmarkedEvents);
  if (keys.length === 0) {
    showToast("No saved events to export");
    return;
  }

  let ics = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Kerala School Kalotsavam 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH"
  ];

  const dayDateMap = { 1: "20260114", 2: "20260115", 3: "20260116", 4: "20260117", 5: "20260118" };

  eventData.schedule.forEach((item, index) => {
    const key = getEventKey(item);
    if (!state.bookmarkedEvents.has(key)) return;

    const stage = eventData.stages.find(st => st.id === item.stageId) || { name: `Stage ${item.stageId}`, location: 'Thrissur' };
    const dateStr = dayDateMap[item.day] || "20260114";

    let hour = 10, min = 0;
    if (item.time.includes(':')) {
      const parts = item.time.split(':');
      hour = parseInt(parts[0]);
      const rest = parts[1].split(' ');
      min = parseInt(rest[0]) || 0;
      if (rest[1] && rest[1].toUpperCase() === 'PM' && hour < 12) hour += 12;
      if (rest[1] && rest[1].toUpperCase() === 'AM' && hour === 12) hour = 0;
    }

    const startHourStr = hour < 10 ? `0${hour}` : `${hour}`;
    const startMinStr = min < 10 ? `0${min}` : `${min}`;
    const endHour = (hour + 2) % 24;
    const endHourStr = endHour < 10 ? `0${endHour}` : `${endHour}`;

    ics.push("BEGIN:VEVENT");
    ics.push(`UID:kalotsav2026-${item.day}-${item.stageId}-${index}@kalotsav.kerala`);
    ics.push(`DTSTAMP:${dateStr}T000000Z`);
    ics.push(`DTSTART;TZID=Asia/Kolkata:${dateStr}T${startHourStr}${startMinStr}00`);
    ics.push(`DTEND;TZID=Asia/Kolkata:${dateStr}T${endHourStr}${startMinStr}00`);
    ics.push(`SUMMARY:${item.program}`);
    ics.push(`LOCATION:${stage.name}, ${stage.location}, Thrissur`);
    ics.push(`DESCRIPTION:Scheduled at ${stage.name} on Day ${item.day} - 64th Kerala School Kalotsavam 2026.`);
    ics.push("END:VEVENT");
  });

  ics.push("END:VCALENDAR");

  const blob = new Blob([ics.join("\r\n")], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'Kalotsavam_2026_Schedule.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast("Calendar file (.ics) downloaded");
}

function shareItinerary() {
  const count = state.bookmarkedEvents.size;
  const shareText = `My schedule for 64th Kerala School Kalotsavam 2026 (${count} events):`;
  if (navigator.share) {
    navigator.share({ title: 'My Kalotsavam Schedule', text: shareText, url: window.location.href }).catch(() => {});
  } else {
    navigator.clipboard.writeText(`${shareText} ${window.location.href}`);
    showToast("Schedule link copied");
  }
}

// --------------------------------------------------------------------------
// 4. VENUES DIRECTORY
// --------------------------------------------------------------------------
function renderVenuesTab() {
  const container = document.getElementById('venuesListContainer');
  if (!container) return;

  container.innerHTML = '';

  VENUE_CLUSTERS.forEach(cluster => {
    const card = document.createElement('div');
    card.className = 'venue-cluster';

    let stagesPillsHtml = '';
    cluster.stages.forEach(sId => {
      const stage = eventData.stages.find(st => st.id === sId);
      if (stage) {
        stagesPillsHtml += `
          <div class="venue-stage-pill" onclick="openStageModal(${stage.id})">
            ${stage.name}
          </div>
        `;
      }
    });

    card.innerHTML = `
      <div class="venue-cluster-top">
        <div>
          <div class="venue-cluster-name">${cluster.hubName}</div>
          <div class="venue-cluster-desc">${cluster.description}</div>
        </div>
        <a href="${cluster.mapUrl}" target="_blank" rel="noopener" class="btn-nav-map" title="Navigate to Zone">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
      <div class="venue-stages-list">
        ${stagesPillsHtml}
      </div>
    `;

    container.appendChild(card);
  });
}

// --------------------------------------------------------------------------
// 5. STAGE DETAIL MODAL
// --------------------------------------------------------------------------
let currentModalStageId = null;
let currentModalDay = 1;

function openStageModal(stageId, day = 1) {
  const stage = eventData.stages.find(s => s.id === stageId);
  if (!stage) return;

  currentModalStageId = stageId;
  currentModalDay = day;

  const modal = document.getElementById('stageDetailModal');
  const nameElem = document.getElementById('modalStageName');
  const locElem = document.getElementById('modalStageLocation');
  const mapLink = document.getElementById('modalMapLink');
  const shareBtn = document.getElementById('modalShareBtn');

  if (nameElem) nameElem.textContent = stage.name;
  if (locElem) locElem.textContent = stage.location;
  if (mapLink) mapLink.href = stage.mapUrl;

  if (shareBtn) {
    shareBtn.onclick = () => {
      const shareUrl = `${window.location.origin}${window.location.pathname}?stage=${stage.id}`;
      if (navigator.share) {
        navigator.share({ title: `${stage.name} - Kalotsavam 2026`, text: `${stage.name} (${stage.location}), Thrissur:`, url: shareUrl }).catch(() => {});
      } else {
        navigator.clipboard.writeText(shareUrl);
        showToast("Stage link copied");
      }
    };
  }

  renderModalDayTabs(stageId);
  renderModalPrograms(stageId, currentModalDay);

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeStageModal() {
  const modal = document.getElementById('stageDetailModal');
  if (modal) modal.classList.remove('active');
  document.body.style.overflow = '';
}

function renderModalDayTabs(stageId) {
  const container = document.getElementById('modalDayTabs');
  if (!container) return;

  container.innerHTML = '';
  FESTIVAL_DAYS.forEach(d => {
    const count = eventData.schedule.filter(s => s.stageId === stageId && s.day === d.day).length;
    const btn = document.createElement('button');
    btn.className = `filter-chip ${currentModalDay === d.day ? 'active' : ''}`;
    btn.textContent = `${d.title} (${count})`;
    btn.onclick = () => {
      currentModalDay = d.day;
      renderModalDayTabs(stageId);
      renderModalPrograms(stageId, d.day);
    };
    container.appendChild(btn);
  });
}

function renderModalPrograms(stageId, day) {
  const container = document.getElementById('modalProgramList');
  if (!container) return;

  const programs = eventData.schedule.filter(s => s.stageId === stageId && s.day === day);
  container.innerHTML = '';

  if (programs.length === 0) {
    container.innerHTML = `
      <div class="empty-box" style="padding: 1.5rem 1rem;">
        <h3>No programs on this day</h3>
        <p>Select another day to see scheduled performances.</p>
      </div>
    `;
    return;
  }

  programs.forEach(item => {
    const key = getEventKey(item);
    const isSaved = state.bookmarkedEvents.has(key);

    const row = document.createElement('div');
    row.className = 'prog-item';
    row.innerHTML = `
      <div class="prog-info-col">
        <span class="prog-time-chip">${item.time}</span>
        <div class="prog-title-text">${item.program}</div>
      </div>
      <button class="btn-star ${isSaved ? 'saved' : ''}" onclick="toggleBookmark('${key}', this)" title="${isSaved ? 'Remove' : 'Save'}">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="${isSaved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
      </button>
    `;
    container.appendChild(row);
  });
}

// --------------------------------------------------------------------------
// 6. SEARCH ENGINE
// --------------------------------------------------------------------------
function setupSearch() {
  const input = document.getElementById('searchInput');
  const dropdown = document.getElementById('searchResultsDropdown');
  const clearBtn = document.getElementById('searchClearBtn');
  if (!input || !dropdown) return;

  function performSearch() {
    const query = input.value.trim().toLowerCase();
    state.searchQuery = query;

    if (clearBtn) clearBtn.style.display = query.length > 0 ? 'inline-block' : 'none';

    if (query.length < 2) {
      dropdown.style.display = 'none';
      return;
    }

    const matches = [];
    eventData.schedule.forEach(item => {
      const stage = eventData.stages.find(st => st.id === item.stageId) || { name: `Stage ${item.stageId}`, location: '' };
      const combined = `${item.program} ${stage.name} ${stage.location}`.toLowerCase();
      if (combined.includes(query)) {
        matches.push({ item, stage });
      }
    });

    dropdown.innerHTML = '';

    if (matches.length === 0) {
      dropdown.innerHTML = `
        <div style="padding: 1rem; text-align: center; color: var(--text-muted); font-size: 0.8rem;">
          No events found matching "${escapeHtml(query)}"
        </div>
      `;
      dropdown.style.display = 'block';
      return;
    }

    const header = document.createElement('div');
    header.className = 'search-dropdown-header';
    header.textContent = `${matches.length} Results`;
    dropdown.appendChild(header);

    matches.slice(0, 25).forEach(({ item, stage }) => {
      const row = document.createElement('div');
      row.className = 'search-dropdown-item';

      const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
      const highlighted = escapeHtml(item.program).replace(regex, '<mark>$1</mark>');
      const dayMeta = FESTIVAL_DAYS.find(f => f.day === item.day) || { title: `Day ${item.day}` };

      row.innerHTML = `
        <div>
          <div class="item-prog-title">${highlighted}</div>
          <div class="item-meta-row">
            <span>${stage.name}</span>
            <span>•</span>
            <span>${dayMeta.title}</span>
            <span>•</span>
            <span style="color: var(--accent);">${item.time}</span>
          </div>
        </div>
      `;

      row.onclick = () => {
        dropdown.style.display = 'none';
        openStageModal(item.stageId, item.day);
      };

      dropdown.appendChild(row);
    });

    dropdown.style.display = 'block';
  }

  input.addEventListener('input', performSearch);
  input.addEventListener('focus', () => {
    if (input.value.trim().length >= 2) dropdown.style.display = 'block';
  });

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      input.value = '';
      dropdown.style.display = 'none';
      clearBtn.style.display = 'none';
      input.focus();
    });
  }

  document.addEventListener('click', (e) => {
    if (!dropdown.contains(e.target) && e.target !== input) {
      dropdown.style.display = 'none';
    }
  });
}

function escapeHtml(str) {
  return str.replace(/[&<>'"]/g, tag => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    "'": '&#39;',
    '"': '&quot;'
  }[tag] || tag));
}

// --------------------------------------------------------------------------
// 7. FILTER CHIPS SETUP
// --------------------------------------------------------------------------
function setupFilterChips() {
  document.querySelectorAll('.filter-chip[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('.filter-chip[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.dataset.filter;

      if (state.activeTab !== 'schedule') {
        switchTab('schedule');
      } else {
        renderScheduleTab();
      }
    });
  });
}

// --------------------------------------------------------------------------
// 8. SERVICE WORKER
// --------------------------------------------------------------------------
function registerServiceWorker() {
  if ('serviceWorker' in navigator && (window.location.protocol === 'https:' || window.location.hostname === 'localhost')) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('sw.js').catch(() => {});
    });
  }
}

// --------------------------------------------------------------------------
// 9. BOOTSTRAP
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderStages();
  renderScheduleTab();
  updateBookmarkBadges();
  setupSearch();
  setupFilterChips();
  registerServiceWorker();

  document.querySelectorAll('.nav-tab-btn, .mobile-nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const tab = btn.dataset.tab;
      if (tab) switchTab(tab);
    });
  });

  const modal = document.getElementById('stageDetailModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeStageModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeStageModal();
      const dropdown = document.getElementById('searchResultsDropdown');
      if (dropdown) dropdown.style.display = 'none';
    }
  });

  const params = new URLSearchParams(window.location.search);
  const stageParam = params.get('stage') || params.get('id');
  const dayParam = params.get('day');
  const tabParam = params.get('tab');

  if (tabParam && ['stages', 'schedule', 'itinerary', 'venues', 'info'].includes(tabParam)) {
    switchTab(tabParam);
  }

  if (stageParam) {
    const sId = parseInt(stageParam);
    const dId = dayParam ? parseInt(dayParam) : 1;
    if (sId >= 1 && sId <= 25) {
      setTimeout(() => openStageModal(sId, dId), 150);
    }
  }
});