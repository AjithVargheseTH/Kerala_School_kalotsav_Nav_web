// data.js
const eventData = {
    stages: [
        { id: 1, name: "Stage 1: Sooryakanthi", location: "Thekkinkadu Maidan  [Exhibition Ground]", mapUrl: "https://www.google.com/maps/search/?api=1&query=Thekkinkadu+Maidan+Pooram+Exhbition+Ground+Thrissur" },
        { id: 2, name: "Stage 2: Paarijaatham", location: "Thekkinkadu Maidan  [Opposite to CMS]", mapUrl: "https://www.google.com/maps/search/?api=1&query=Thekkinkadu+Maidan+Thrissur" },
        { id: 3, name: "Stage 3: Neelakurinji", location: "Thekkinkadu Maidan  [Opposite to Banerjee Club]", mapUrl: "https://www.google.com/maps/search/?api=1&query=Thekkinkadu+Maidan+Thrissur" },
        { id: 4, name: "Stage 4: Pavizhamalli", location: "Town Hall", mapUrl: "https://www.google.com/maps/search/?api=1&query=Town+Hall+Thrissur" },
        { id: 5, name: "Stage 5: Shankhupushpam", location: "Vivekodayam Boys HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Vivekodayam+Boys+Higher+Secondary+School+Thrissur" },
        { id: 6, name: "Stage 6: Chempakam", location: "Kerala Bank Hall", mapUrl: "https://www.google.com/maps/search/?api=1&query=Kerala+Bank+Auditorium+Thrissur" },
        { id: 7, name: "Stage 7: Mandaram", location: "Sahithya Academy Open Stage", mapUrl: "https://www.google.com/maps/search/?api=1&query=Kerala+Sahitya+Akademi+Thrissur" },
        { id: 8, name: "Stage 8: Kanakambaram", location: "St. Joseph CGHSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=St+Joseph's+Convent+GHSS+Thrissur" },
        { id: 9, name: "Stage 9: Gulmohar", location: "Sahithya Academy Hall", mapUrl: "https://www.google.com/maps/search/?api=1&query=Kerala+Sahitya+Akademi+Thrissur" },
        { id: 10, name: "Stage 10: Chembarathi", location: "MT HSS Chelakkottukara", mapUrl: "https://www.google.com/maps/search/?api=1&query=MT+Higher+Secondary+School+Thrissur" },
        { id: 11, name: "Stage 11: Karnikaram", location: "Chaldean Syrian HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Chaldean+Syrian+Higher+Secondary+School+Thrissur" },
        { id: 12, name: "Stage 12: Nithyakalyani", location: "Sacred Heart CGHSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Sacred+Heart+C.G.H.S.S+Thrissur" },
        { id: 13, name: "Stage 13: Panineerpoo", location: "Jawahar Balabhavan", mapUrl: "https://www.google.com/maps/search/?api=1&query=Jawahar+Balabhavan+Thrissur" },
        { id: 14, name: "Stage 14: Nanthyarvattom", location: "Holy Family CG HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Holy+Family+C.G.H.S.S+Thrissur" },
        { id: 15, name: "Stage 15: Thamara", location: "Holy Family CG HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Holy+Family+C.G.H.S.S+Thrissur" },
        { id: 16, name: "Stage 16: Vadamalli", location: "CMS HSS (Open Stage)", mapUrl: "https://www.google.com/maps/search/?api=1&query=CMS+Higher+Secondary+School+Thrissur" },
        { id: 17, name: "Stage 17: Mullappoo", location: "CMS HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=CMS+Higher+Secondary+School+Thrissur" },
        { id: 18, name: "Stage 18: Aambalpoov", location: "Govt. Model Boys HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Govt+Model+Boys+Higher+Secondary+School+Thrissur" },
        { id: 19, name: "Stage 19: Thumbappoo", location: "Govt. Model Boys HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=Govt+Model+Boys+Higher+Secondary+School+Thrissur" },
        { id: 20, name: "Stage 20: Kannanthali", location: "St. Clares Convent GHSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Clare's+CGHSS+Thrissur" },
        { id: 21, name: "Stage 21: Pichakappoo", location: "St. Thomas College HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Thomas+College+Higher+Secondary+School+Thrissur" },
        { id: 22, name: "Stage 22: Jamanthi", location: "St. Thomas College HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Thomas+College+Higher+Secondary+School+Thrissur" },
        { id: 23, name: "Stage 23: Thechippoo", location: "St. Thomas College HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Thomas+College+Higher+Secondary+School+Thrissur" },
        { id: 24, name: "Stage 24: Thazhampoo", location: "St. Thomas College HSS", mapUrl: "https://www.google.com/maps/search/?api=1&query=St.+Thomas+College+Higher+Secondary+School+Thrissur" },
        { id: 25, name: "Stage 25: Chendumalli", location: "IM Vijayan Sports Complex", mapUrl: "https://www.google.com/maps/search/?api=1&query=I+M+Vijayan+Indoor+Stadium+Lalur" }
    ],
    schedule: [
        // --- DAY 1: JAN 14 (WEDNESDAY) ---
        { stageId: 1, day: 1, program: "Inaugural Ceremony", time: "10:00 AM" },
        { stageId: 1, day: 1, program: "Mohiniyattam (HS Girls)", time: "11:30 AM" },
        { stageId: 1, day: 1, program: "Group Dance (HS)", time: "03:00 PM" },
        
        { stageId: 2, day: 1, program: "Bharatanatyam (HS Boys)", time: "11:00 AM" },
        { stageId: 2, day: 1, program: "Oppana (HSS)", time: "02:00 PM" },
        
        { stageId: 3, day: 1, program: "Paniya Nritham (HSS)", time: "11:00 AM" },
        { stageId: 3, day: 1, program: "Paniya Nritham (HS)", time: "02:00 PM" },

        { stageId: 4, day: 1, program: "Mimicry (HSS Boys)", time: "11:00 AM" },
        { stageId: 4, day: 1, program: "Mimicry (HSS Girls)", time: "01:00 PM" },
        { stageId: 4, day: 1, program: "Patriotic Song (HS)", time: "03:00 PM" },
        { stageId: 4, day: 1, program: "Patriotic Song (HS)", time: "05:00 PM" },

        { stageId: 5, day: 1, program: "Light Music (HS Boys)", time: "11:00 AM" },
        { stageId: 5, day: 1, program: "Light Music (HS Girls)", time: "03:00 PM" },
        { stageId: 5, day: 1, program: "Group Song (HSS)", time: "04:00 PM" },

        { stageId: 6, day: 1, program: "Arabanamuttu (HS)", time: "11:00 AM" },
        { stageId: 6, day: 1, program: "Arabanamuttu (HSS)", time: "02:00 PM" },

        { stageId: 7, day: 1, program: "Chakyarkoothu (HS)", time: "11:00 AM" },
        { stageId: 7, day: 1, program: "Chakyarkoothu (HSS)", time: "03:00 PM" },

        { stageId: 8, day: 1, program: "Thullal (HS Girls)", time: "11:00 AM" },
        { stageId: 8, day: 1, program: "Thullal (HSS Boys)", time: "03:00 PM" },

        { stageId: 9, day: 1, program: "Urdu Gazal (HSS)", time: "11:00 AM" },
        { stageId: 9, day: 1, program: "Urdu Gazal (HS)", time: "03:00 PM" },

        { stageId: 10, day: 1, program: "Guitar (HS)", time: "11:00 AM" },
        { stageId: 10, day: 1, program: "Guitar(HSS)", time: "02:00 PM" },
        { stageId: 10, day: 1, program: "Kadhaprasangam (HS)", time: "04:00 PM" },

        { stageId: 11, day: 1, program: "Sanskrit Drama (HS)", time: "11:00 AM" },

        { stageId: 12, day: 1, program: "Panchavadhyam (HS)", time: "11:00 AM" },
        { stageId: 12, day: 1, program: "Panchavadhyam (HSS)", time: "03:00 PM" },

        { stageId: 13, day: 1, program: "Ashtapadhi (HS Boys)", time: "11:00 AM" },
        { stageId: 13, day: 1, program: "Ashtapadhi (HS Girls)", time: "03:00 PM" },
        { stageId: 13, day: 1, program: "Sanskrit Poem Recitation (HS)", time: "04:00 PM" },
        { stageId: 13, day: 1, program: "Sanskrit Poem Recitation (HSS General)", time: "06:00 PM" },
        
        { stageId: 14, day: 1, program: "Kerala Nadanam (HS Boys)", time: "11:00 AM" },
        { stageId: 14, day: 1, program: "Dhuffmuttu (HSS)", time: "03:00 PM" },

        { stageId: 15, day: 1, program: "Mappila Pattu (HSS Boys)", time: "11:00 AM" },
        { stageId: 15, day: 1, program: "Mappila Pattu (HSS Girls)", time: "01:30 PM" },
        { stageId: 15, day: 1, program: "Mappila Pattu (HS Boys)", time: "03:00 PM" },
        { stageId: 15, day: 1, program: "Mappila Pattu (HS Girls)", time: "05:00 PM" },

        { stageId: 16, day: 1, program: "Arabic Song (HS Boys)", time: "11:00 AM" },
        { stageId: 16, day: 1, program: "Arabic Song (HS Girls)", time: "01:00 PM" },
        { stageId: 16, day: 1, program: "Mono Act (HS)", time: "04:00 PM" },

        { stageId: 17, day: 1, program: "Quran Recitation (HS)", time: "11:00 AM" },
        { stageId: 17, day: 1, program: "Musha'Ara (HS)", time: "01:00 PM" },
        { stageId: 17, day: 1, program: "Sambashanam (HS)", time: "03:00 PM" },

        { stageId: 18, day: 1, program: "Veena (HS)", time: "11:00 AM" },
        { stageId: 18, day: 1, program: "Veena/Vichithra Veena (HSS)", time: "01:00 PM" },
        { stageId: 18, day: 1, program: "Clarnet/Beugle (HSS)", time: "04:00 PM" },

        { stageId: 19, day: 1, program: "Kannada Poem Recitation (HSS)", time: "11:00 AM" },
        { stageId: 19, day: 1, program: "Kannada Poem Recitation (HS)", time: "01:00 PM" },
        { stageId: 19, day: 1, program: "Kannada Speech (HS)", time: "04:00 PM" },

        { stageId: 20, day: 1, program: "English Poem Recitation (HS)", time: "11:00 AM" },
        { stageId: 20, day: 1, program: "English Poem Recitation (HSS)", time: "01:00 PM" },
        { stageId: 20, day: 1, program: "English Speech (HS)", time: "03:00 PM" },
        { stageId: 20, day: 1, program: "English Speech (HSS)", time: "05:00 PM" },

        { stageId: 21, day: 1, program: "Cartoon (HSS)", time: "11:00 AM" },
        { stageId: 21, day: 1, program: "Cartoon (HS)", time: "01:30 PM" },
        { stageId: 21, day: 1, program: "Collage (HS)", time: "03:30 PM" },

        { stageId: 22, day: 1, program: "Story Writing Malayalam (HS)", time: "11:00 AM" },
        { stageId: 22, day: 1, program: "Poem Writing Malayalam (HS)", time: "01:30 PM" },
        { stageId: 22, day: 1, program: "Story Writing Malayalam (HSS)", time: "03:30 PM" },

        { stageId: 23, day: 1, program: "Sanskrit Essay Writing (HSS General)", time: "11:00 AM" },
        { stageId: 23, day: 1, program: "Sanskrit Essay Writing (HS)", time: "02:00 PM" },

        { stageId: 24, day: 1, program: "Samasyaroopanam (HS)", time: "11:00 AM" },
        { stageId: 24, day: 1, program: "Prasnothari (HS)", time: "02:00 PM" },

        // --- DAY 2: JAN 15 (THURSDAY) ---

        { stageId: 1, day: 2, program: "Bharatanatyam (HSS Boys)", time: "09:30 AM" },
        { stageId: 1, day: 2, program: "Tiruvatira (HSS)", time: "02:00 PM" },
        
        { stageId: 2, day: 2, program: "Folk Dance (HSS Girls)", time: "09:30 AM" },
        { stageId: 2, day: 2, program: "Oppana (HS)", time: "02:00 PM" },
        
        { stageId: 3, day: 2, program: "Mangalam Kali (HS)", time: "09:30 AM" },
        { stageId: 3, day: 2, program: "Mangalam Kali (HSS)", time: "01:30 PM" },

        { stageId: 4, day: 2, program: "Mimicry (HS Girls)", time: "09:30 AM" },
        { stageId: 4, day: 2, program: "Mimicry (HS Boys)", time: "11:30 PM" },
        { stageId: 4, day: 2, program: "Mohiniyattam (HSS Girls)", time: "02:00 PM" },
        { stageId: 5, day: 2, program: "Vattappatt (HS)", time: "09:30 AM" },
        { stageId: 5, day: 2, program: "English Skit (HSS)", time: "11:30 AM" },

        { stageId: 6, day: 2, program: "Light Music (HSS Girls)", time: "09:30 AM" },
        { stageId: 6, day: 2, program: "Light Music (HSS Boys)", time: "11:30 AM" },
        { stageId: 6, day: 2, program: "Dhuffmuttu (HS)", time: "02:00 PM" },

        { stageId: 7, day: 2, program: "Kerala Nadanam (HS Girls)", time: "09:30 AM" },
        { stageId: 7, day: 2, program: "Poorakkali (HS)", time: "01:30 PM" },

        { stageId: 8, day: 2, program: "Thullal (HS Boys)", time: "09:30 AM" },
        { stageId: 8, day: 2, program: "Thullal (HSS Girls)", time: "01:30 PM" },

        { stageId: 9, day: 2, program: "Koodiyattam (HS)", time: "09:30 AM" },

        { stageId: 10, day: 2, program: "Kadhaprasangam (HSS)", time: "09:30 AM" },
        { stageId: 10, day: 2, program: "Kuchippudi (HS Girls)", time: "02:00 PM" },

        { stageId: 11, day: 2, program: "Drama (HS)", time: "09:30 AM" },

        { stageId: 12, day: 2, program: "Kadhakali Single (HS Boys)", time: "09:30 AM" },
        { stageId: 12, day: 2, program: "Kadhakali Group (HSS)", time: "02:00 PM" },

        { stageId: 13, day: 2, program: "Chambu Prabhashanam (HS)", time: "09:30 AM" },
        { stageId: 13, day: 2, program: "Elocution (HS)", time: "02:00 PM" },
        { stageId: 13, day: 2, program: "Sanskrit Speech (HSS General)", time: "04:00 PM" },

        { stageId: 14, day: 2, program: "Margamkali (HSS)", time: "09:30 AM" },
        { stageId: 14, day: 2, program: "Margamkali (HS)", time: "02:00 PM" },

        { stageId: 15, day: 2, program: "Chenda Melam (HSS)", time: "09:30 AM" },
        { stageId: 15, day: 2, program: "Chenda - Thayambaka (HS)", time: "02:00 PM" },

        { stageId: 16, day: 2, program: "Arabic Seminar", time: "09:30 AM" },
        { stageId: 16, day: 2, program: "Group Song (HS)", time: "02:00 PM" },
        { stageId: 16, day: 2, program: "Kadhaprasangam (HS)", time: "04:00 PM" },

        { stageId: 17, day: 2, program: "Essay Writing (HS)", time: "02:00 PM" },
        { stageId: 17, day: 2, program: "Story Writing (HS)", time: "04:00 PM" },

        { stageId: 18, day: 2, program: "Madhalam (HS)", time: "09:30 AM" },
        { stageId: 18, day: 2, program: "Mrudhangam (HSS)", time: "12:00 PM" },
        { stageId: 18, day: 2, program: "Mrudhangam/Ghanchira/Ghadam (HS)", time: "03:00 PM" },

        { stageId: 19, day: 2, program: "Hindi Speech (HS)", time: "09:30 AM" },
        { stageId: 19, day: 2, program: "Hindi Speech (HSS)", time: "12:30 PM" },
        { stageId: 19, day: 2, program: "Hindi Poem Recitation (HS)", time: "04:00 PM" },

        { stageId: 20, day: 2, program: "Malayalam Speech (HS)", time: "09:30 AM" },
        { stageId: 20, day: 2, program: "Malayalam Speech (HSS)", time: "11:30 AM" },
        { stageId: 20, day: 2, program: "Malayalam Poem Recitation (HS)", time: "02:00 PM" },
        { stageId: 20, day: 2, program: "Malayalam Poem Recitation (HSS)", time: "04:00 PM" },

        { stageId: 21, day: 2, program: "Pencil Drawing (HS)", time: "09:30 AM" },
        { stageId: 21, day: 2, program: "Water Colouring (HS)", time: "12:00 PM" },
        { stageId: 21, day: 2, program: "Oil Painting (HS)", time: "03:00 PM" },

        { stageId: 22, day: 2, program: "Malayalam Poem Writing (HSS)", time: "09:30 AM" },
        { stageId: 22, day: 2, program: "Malayalam Essay Writing (HS)", time: "12:00 PM" },
        { stageId: 22, day: 2, program: "Malayalam Essay Writing (HSS)", time: "03:00 PM" },

        { stageId: 23, day: 2, program: "English Story Writing (HS)", time: "09:30 AM" },
        { stageId: 23, day: 2, program: "English Story Writing (HSS)", time: "12:00 PM" },
        { stageId: 23, day: 2, program: "English Essay Writing (HS)", time: "03:00 PM" },

        { stageId: 24, day: 2, program: "Sanskrit Story Writing (HS)", time: "09:30 AM" },
        { stageId: 24, day: 2, program: "Sanskrit Poem Writing (HS)", time: "12:00 PM" },
        { stageId: 24, day: 2, program: "Kannada Poem Writing (HS)", time: "03:00 PM" },

        { stageId: 25, day: 2, program: "Band Melam (HS)", time: "09:30 AM" },

        // --- DAY 3: JAN 16 (FRIDAY) ---
        { stageId: 1, day: 3, program: "Kuchipudi (HSS Girls)", time: "09:30 AM" },
        { stageId: 1, day: 3, program: "Thiruvathirakali (HS)", time: "02:00 PM" },
        
        { stageId: 2, day: 3, program: "Parichamuttu (HS)", time: "09:30 AM" },
        { stageId: 2, day: 3, program: "Vrindavadyam (HSS)", time: "02:00 PM" },
        
        { stageId: 3, day: 3, program: "Malapulaya Attam (HSS)", time: "09:30 AM" },
        { stageId: 3, day: 3, program: "Malapulaya Attam  (HS)", time: "02:00 PM" },

        { stageId: 4, day: 3, program: "Chavittunadakam (HSS)", time: "09:30 AM" },
        

        { stageId: 5, day: 3, program: "Bharatanatyam (HS Girls)", time: "09:30 AM" },
        { stageId: 5, day: 3, program: "Mookabhinayam (HSS)", time: "02:00 PM" },
        

        { stageId: 6, day: 3, program: "Nadan Pattu (HS)", time: "09:30 AM" },
        { stageId: 6, day: 3, program: "Nadan Pattu(HSS)", time: "02:00 PM" },

        { stageId: 7, day: 3, program: "Poorakali (HSS)", time: "09:30 AM" },
        { stageId: 7, day: 3, program: "Group Song (HS)", time: "02:00 PM" },

        { stageId: 8, day: 3, program: "Nangyarkut (HS)", time: "09:30 AM" },
        { stageId: 8, day: 3, program: "Nangyarkut (HSS)", time: "02:00 PM" },

        { stageId: 9, day: 3, program: "Yakshaganam (HS)", time: "09:30 AM" },
        

        { stageId: 10, day: 3, program: "Keralanadanam (HSS Boys)", time: "09:30 AM" },
        { stageId: 10, day: 3, program: "Folk Dance (HS Boys)", time: "02:00 PM" },
       

        { stageId: 11, day: 3, program: "Skit English (HS)", time: "09:30 AM" },
        { stageId: 11, day: 3, program: "Kolkali (HS)", time: "02:30 PM" },

        { stageId: 12, day: 3, program: "Kathakali Single (HSS Girls)", time: "09:30 AM" },
        { stageId: 12, day: 3, program: "Kathakali Group (HS)", time: "02:00 PM" },

        { stageId: 13, day: 3, program: "Poem Recitation Hindi (HSS)", time: "09:30 AM" },
        { stageId: 13, day: 3, program: "Vande Mataram (HS)", time: "02:00 PM" },
        { stageId: 13, day: 3, program: "Group Song (HS)", time: "03:00 PM" },
        { stageId: 13, day: 3, program: "Akshara Shlokam (HSS)", time: "05:30 PM" },
        
        { stageId: 14, day: 3, program: "Mono Act (HS Boys)", time: "09:30 AM" },
        { stageId: 14, day: 3, program: "Mono Act (HSS Girls)", time: "11:30 AM" },
        { stageId: 14, day: 3, program: "Vattapattu (HSS)", time: "02:00 PM" },

        { stageId: 15, day: 3, program: "Chenda Thayambaka (HSS )", time: "09:30 AM" },
        { stageId: 15, day: 3, program: "Chendamelam (HS)", time: "02:00 PM" },
        

        { stageId: 16, day: 3, program: "Sanskrit Seminar ", time: "09:30 AM" },
        { stageId: 16, day: 3, program: "Poem Recitation (HS Girls)", time: "02:30 PM" },
        { stageId: 16, day: 3, program: "Poem Recitation (HS Boys)", time: "03:30 PM" },
        { stageId: 16, day: 3, program: "Speech (HS)", time: "05:00 PM" },

        { stageId: 17, day: 3, program: "Dictionary Making (HS)", time: "09:30 AM" },
        { stageId: 17, day: 3, program: "Prashnothari (HS)", time: "11:30 AM" },
        { stageId: 17, day: 3, program: "Adikurippu (HS)", time: "02:00 PM" },

        { stageId: 18, day: 3, program: "Madalam (HSS)", time: "09:30 AM" },
        { stageId: 18, day: 3, program: "Thabala (HSS)", time: "12:00 PM" },
        { stageId: 18, day: 3, program: "Thabala (HS)", time: "03:00 PM" },

        { stageId: 19, day: 3, program: "Speech Arabic (HSS General)", time: "09:30 AM" },
        { stageId: 19, day: 3, program: "Arabic Poem Recitation (HSS General)", time: "11:30 AM" },
        { stageId: 19, day: 3, program: "Arabic Poem Recitation (HS General)", time: "03:00 PM" },

        { stageId: 20, day: 3, program: "Tamil Poem Recitation (HS)", time: "09:30 AM" },
        { stageId: 20, day: 3, program: "Tamil Poem Recitation (HSS)", time: "11:00 AM" },
        { stageId: 20, day: 3, program: "Tamil Speech (HS)", time: "02:00 PM" },
        

        { stageId: 21, day: 3, program: "Pencil Drawing (HSS)", time: "09:30 AM" },
        { stageId: 21, day: 3, program: "Water Colouring (HSS)", time: "12:00 PM" },
        { stageId: 21, day: 3, program: "Oil Painting (HSS)", time: "03:00 PM" },

        { stageId: 22, day: 3, program: "Story Writing Hindi (HSS)", time: "12:00 PM" },
        { stageId: 22, day: 3, program: "Poem Writing Hindi (HSS)", time: "01:30 PM" },
        { stageId: 22, day: 3, program: "Essay Writing (HSS)", time: "03:00 PM" },

        { stageId: 23, day: 3, program: "Quiz Urdu (HSS)", time: "09:30 AM" },
        { stageId: 23, day: 3, program: "Urdu Essay Writing (HS)", time: "12:00 PM" },
        { stageId: 23, day: 3, program: "Urdu Essay Writing (HSS)", time: "03:00 PM" },

        { stageId: 24, day: 3, program: "Tamil Poem Writing (HS)", time: "09:30 AM" },
        { stageId: 24, day: 3, program: "English Poem Writing (HS)", time: "12:00 PM" },
        { stageId: 24, day: 3, program: "English Poem Writing (HSS)", time: "02:30 PM" },
        { stageId: 24, day: 3, program: "English Essay Writing (HSS)", time: "04:30 PM" },

        { stageId: 25, day: 3, program: "Band Melam (HSS)", time: "09:30 AM" },


        // --- DAY 4: JAN 17 (SATURDAY) ---
        { stageId: 1, day: 4, program: "Bharathanatyam (HSS Girls)", time: "09:30 AM" },
        { stageId: 1, day: 4, program: "Group Dance (HSS)", time: "02:00 PM" },
        
        { stageId: 2, day: 4, program: "Parichamuttu (HSS)", time: "09:30 AM" },
        { stageId: 2, day: 4, program: "Vrinda Vadyam (HS)", time: "02:00 PM" },

        { stageId: 3, day: 4, program: "Irula Dance (HSS)", time: "09:30 AM" },
        { stageId: 3, day: 4, program: "Irula Dance (HS)", time: "02:00 PM" },

        { stageId: 4, day: 4, program: "Chavittu Nadakam (HS)", time: "09:30 AM" },

        { stageId: 5, day: 4, program: "Paliya Dance (HS)", time: "09:30 AM" },  
        { stageId: 5, day: 4, program: "Paliya Dance (HSS)", time: "02:00 PM" },        

        { stageId: 6, day: 4, program: "Mono Act (HS Girls)", time: "09:30 AM" },
        { stageId: 6, day: 4, program: "Mono Act (HSS Boys)", time: "11:30 AM" },
        { stageId: 6, day: 4, program: "Folk Dance (HS Girls)", time: "03:00 PM" },

        { stageId: 7, day: 4, program: "Keralanadanam (HSS Girls)", time: "09:30 AM" },
        { stageId: 7, day: 4, program: "Kolkali (HSS)", time: "02:00 PM" },

        { stageId: 8, day: 4, program: "Kathakali Sangeetham (HS Girls)", time: "09:30 AM" },
        { stageId: 8, day: 4, program: "Kathakali Sangeetham (HS Boys)", time: "12:30 PM" },
        { stageId: 8, day: 4, program: "Kathakali Sangeetham (HSS Boys)", time: "03:30 PM" },

        { stageId: 9, day: 4, program: "Koodiyattam (HSS)", time: "09:30 AM" },

        { stageId: 10, day: 4, program: "Vanchipattu (HS)", time: "09:30 PM" },
        { stageId: 10, day: 4, program: "Kuchupudi (HSS Boys)", time: "02:00 PM" },

        { stageId: 11, day: 4, program: "Skit (HSS)", time: "09:30 AM" },

        { stageId: 12, day: 4, program: "Kathakali Single (HS Girls)", time: "09:30 AM" },
        { stageId: 12, day: 4, program: "Kathakali Single (HSS Boys)", time: "02:00 PM" },

        { stageId: 13, day: 4, program: "Paadakam (HS Boys)", time: "09:30 AM" },
        { stageId: 13, day: 4, program: "Paadakam (HS Girls)", time: "12:00 PM" },
        { stageId: 13, day: 4, program: "Ganalapanam (HS Girs)", time: "02:00 PM" },
        { stageId: 13, day: 4, program: "Ganalapanam (HS Boys)", time: "04:00 PM" },

        { stageId: 14, day: 4, program: "Classical Music (HSS Girls)", time: "09:30 AM" },
        { stageId: 14, day: 4, program: "Classical Music (HSS Boys)", time: "12:00 PM" },
        { stageId: 14, day: 4, program: "Classical Music (HS Girls)", time: "03:00 PM" },

        { stageId: 15, day: 4, program: "Odakuzhal (HS)", time: "09:30 AM" },
        { stageId: 15, day: 4, program: "Odakuzhal (HSS)", time: "12:00 PM" },
        { stageId: 15, day: 4, program: "Nadaswaram (HS)", time: "02:00 PM" },
        { stageId: 15, day: 4, program: "Tripple/Jazz (HSS)", time: "04:00 PM" },

        { stageId: 16, day: 4, program: "Arabic Skit (HS)", time: "09:30 AM" },

        { stageId: 17, day: 4, program: "Vivarthanam (HS)", time: "09:30 AM" },
        { stageId: 17, day: 4, program: "Poster Making (HS)", time: "11:00 AM" },

        { stageId: 18, day: 4, program: "Violin Western (HS)", time: "09:30 AM" },
        { stageId: 18, day: 4, program: "Violin Western (HSS)", time: "11:00 AM" },
        { stageId: 18, day: 4, program: "Violin Western (HS)", time: "02:00 PM" },

        { stageId: 19, day: 4, program: "Urdu  Poem Recitation  (HSS)", time: "09:30 AM" },
        { stageId: 19, day: 4, program: "Urdu  Poem Recitation  (HS)", time: "12:00 PM" },
        { stageId: 19, day: 4, program: "Urdu  Speech (HSS)", time: "03:00 PM" },
        { stageId: 19, day: 4, program: "Urdu  Speech (HS)", time: "05:00 PM" },

        { stageId: 20, day: 4, program: "KavyaKeli (HS)", time: "09:30 AM" },  
        { stageId: 20, day: 4, program: "KavyaKeli (HSS)", time: "12:00 PM" },  
        { stageId: 20, day: 4, program: "Akshara Slokam(HS)", time: "02:00 PM" }, 
        { stageId: 20, day: 4, program: "Akshara Slokam(HSS)", time: "04:00 PM" },  

        { stageId: 21, day: 4, program: "Urdu Story Writing (HS)", time: "09:30 AM" },  
        { stageId: 21, day: 4, program: "Urdu Story Writing (HSS)", time: "12:00 PM" },
        { stageId: 21, day: 4, program: "Urdu Poem Writing (HS)", time: "02:30 PM" },
        { stageId: 21, day: 4, program: "Urdu Poem Writing (HS)", time: "04:30 PM" },

        { stageId: 22, day: 4, program: "Hindi Poem Writing (HS)", time: "09:30 AM" },  
        { stageId: 22, day: 4, program: "Hindi Story Writing (HS)", time: "12:00 PM" },
        { stageId: 22, day: 4, program: "Hindi Essay Writing (HS)", time: "03:00 PM" },

        { stageId: 23, day: 4, program: "Arabic Story Writing (HSS)", time: "09:30 AM" },
        { stageId: 23, day: 4, program: "Arabic Poem Writing (HSS)", time: "12:00 PM" },
        { stageId: 23, day: 4, program: "Arabic Essay Writing (HSS)", time: "03:00 PM" },

        { stageId: 24, day: 4, program: "Sanskrit Story Writing General (HSS)", time: "09:00 AM" },
        { stageId: 24, day: 4, program: "Sanskrit Poem Writing General (HSS)", time: "12:00 PM" },


        // --- DAY 5: JAN 18 (SUNDAY) ---
        { stageId: 1, day: 5, program: "Nadodi Nirtham (HSS Boys)", time: "09:00 AM" },
        { stageId: 1, day: 5, program: "Closing Ceremony (Samapana Sammelanam)", time: "04:00 PM" },

        { stageId: 2, day: 5, program: "Kuchupudi (HS Boys)", time: "09:00 AM" },

        { stageId: 3, day: 5, program: "Vanchipattu (HSS)", time: "09:00 AM" },

        { stageId: 5, day: 5, program: "Urdu Group Song (HS)", time: "09:00 AM" },

        { stageId: 8, day: 5, program: "Kathakali Music (HSS Girls)", time: "09:00 AM" },
        
        { stageId: 13, day: 5, program: "Classical Music (HS Boys)", time: "09:00 AM" },

        { stageId: 14, day: 5, program: "Nadaswaram (HSS)", time: "09:00 AM" },
        
        { stageId: 17, day: 5, program: "Violin (Oriental HS)", time: "09:00 AM" }
    ]
};