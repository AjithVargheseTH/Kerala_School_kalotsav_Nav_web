// Service Worker for Kerala School Kalotsav 2026 App
const CACHE_NAME = 'kalotsav-2026-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './stage.html',
  './style.css',
  './script.js',
  './data.js',
  './manifest.json',
  './images/logo.jpeg',
  './images/home.jpeg',
  './images/intro.jpeg',
  './images/1.jpeg',
  './images/2.jpeg',
  './images/3.jpeg',
  './images/4.jpeg',
  './images/5.jpeg',
  './images/6.jpeg',
  './images/7.jpeg',
  './images/8.jpeg',
  './images/9.jpeg',
  './images/10.jpeg',
  './images/11.jpeg',
  './images/12.jpeg',
  './images/13.jpeg',
  './images/14.jpeg',
  './images/15.jpeg',
  './images/16.jpeg',
  './images/17.jpeg',
  './images/18.jpeg',
  './images/19.jpeg',
  './images/20.jpeg',
  './images/21.jpeg',
  './images/22.jpeg',
  './images/23.jpeg',
  './images/24.jpeg',
  './images/25.jpeg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('Pre-cache error (some assets optional):', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests and http/https scheme
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Return cache first, but fetch in background to update
        fetch(event.request).then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
          }
        }).catch(() => {});
        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone));
        }
        return networkResponse;
      }).catch(() => {
        // Offline fallback for html navigation
        if (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html')) {
          return caches.match('./index.html');
        }
      });
    })
  );
});
