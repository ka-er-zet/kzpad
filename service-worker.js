const CACHE_NAME = 'eaa-audit-v14';
const ASSETS_TO_CACHE = [
    '/kzpad/',
    '/kzpad/index.html',
    '/kzpad/manifest.json',
    '/kzpad/favicon.ico',
    '/kzpad/favicon.svg',
    '/kzpad/icon-180.png',
    '/kzpad/icon-192.png',
    '/kzpad/icon-256.png',
    '/kzpad/icon-512.png',
    '/kzpad/css/pico.min.css',
    '/kzpad/css/wizard.css',
    '/kzpad/js/lucide.min.js',
    '/kzpad/js/exceljs.min.js',
    '/kzpad/js/jszip.min.js',
    '/kzpad/js/utils.js',
    '/kzpad/js/exporter.js',
    '/kzpad/js/wizard.js',
    '/kzpad/clauses_json/clauses.json',
    '/kzpad/clauses_json/mapping.json',
    '/kzpad/clauses_json/summaries.json',
    '/kzpad/img/eaa.svg',
    '/kzpad/img/EU1.svg',
    '/kzpad/img/EU2.svg',
    '/kzpad/img/EU3.svg',
    '/kzpad/img/pfron.svg',
    '/kzpad/img/uke.svg',
    '/kzpad/img/5_1_4.png',
    '/kzpad/img/8_3_2_2.png',
    '/kzpad/img/8_3_2_3_3.png',
    '/kzpad/img/8_3_2_5.png',
    '/kzpad/img/8_3_2_6.png',
    '/kzpad/img/8_3_3_2.png',
    '/kzpad/img/8_3_3_3_2.png',
    '/kzpad/img/8_3_4_1a.png',
    '/kzpad/img/8_3_4_1b.png',
    '/kzpad/img/8_3_4_2.png',
    '/kzpad/img/8_3_4_3_2.png',
    '/kzpad/img/8_3_4_3_3.png'
];

// Install Event - Pre-cache critical assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('[Service Worker] Caching all: app shell and content');
                return cache.addAll(ASSETS_TO_CACHE);
            })
            .then(() => self.skipWaiting())
    );
});

// Activate Event - Clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[Service Worker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    // Immediately take control of clients
    self.clients.claim();
});

// Listen for messages from the page (e.g., SKIP_WAITING to activate immediately)
self.addEventListener('message', (event) => {
    if (!event.data) return;
    if (event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Fetch Event - Network First with Cache Fallback for JSON data, Cache First for assets
self.addEventListener('fetch', (event) => {
    // For navigation requests (loading index.html), use Network First to always get latest version if available
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                    return caches.match('./index.html');
                })
        );
        return;
    }

    // For everything else, Stale-While-Revalidate or Cache First
    // Here we use a generic Cache First strategy for files that don't change often (images, libs)
    // and Network First for JSON data if we want updates. 
    // BUT since static versioning is used, Cache First usually safest + fastest for PWA.
    
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
