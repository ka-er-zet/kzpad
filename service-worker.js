const CACHE_NAME = 'eaa-audit-v15';
const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './manifest.json',
    './favicon.ico',
    './favicon.svg',
    './icon-180.png',
    './icon-192.png',
    './icon-256.png',
    './icon-512.png',
    './css/pico.min.css',
    './css/wizard.css',
    './js/lucide.min.js',
    './js/exceljs.min.js',
    './js/jszip.min.js',
    './js/utils.js',
    './js/exporter.js',
    './js/wizard.js',
    './clauses_json/clauses.json',
    './clauses_json/mapping.json',
    './clauses_json/summaries.json',
    './img/eaa.svg',
    './img/EU1.svg',
    './img/EU2.svg',
    './img/EU3.svg',
    './img/pfron.svg',
    './img/uke.svg',
    './img/5_1_4.png',
    './img/8_3_2_2.png',
    './img/8_3_2_3_3.png',
    './img/8_3_2_5.png',
    './img/8_3_2_6.png',
    './img/8_3_3_2.png',
    './img/8_3_3_3_2.png',
    './img/8_3_4_1a.png',
    './img/8_3_4_1b.png',
    './img/8_3_4_2.png',
    './img/8_3_4_3_2.png',
    './img/8_3_4_3_3.png'
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
    // Skip service worker for the editor tool - it should not be part of the PWA
    if (event.request.url.includes('editor.html') || event.request.url.includes('js/editor.js')) {
        return;
    }

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
