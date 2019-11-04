self.addEventListener('install', function(event) {
  console.log('[Service Worker] Installing Service Worker...', event)
})

self.addEventListener('activate', function(event) {
  console.log('[Service Worker] Activating Service Worker...', self)
  return self.clients.claim();
})

self.addEventListener('fetch', function(event) {
 console.log('[SW] Fetching something...', event)
 event.respondWith(fetch(event.request));
})