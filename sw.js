/* PHARMA • servizio offline e aggiornamenti delle versioni pubblicate */
const CACHE = 'pharma-alpha-0.3.2';
const FILES = ['./', './index.html', './styles.css', './app.js', './manifest.webmanifest', './assets/icon-192.png', './assets/icon-512.png'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('pharma-') && k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.pathname.startsWith(new URL(self.registration.scope).pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    try {
      // Network-first: una nuova pubblicazione prevale sulle copie precedenti,
      // mantenendo il funzionamento offline quando la rete non è disponibile.
      const response = await fetch(event.request, { cache: 'no-cache' });
      if (response.ok) cache.put(event.request, response.clone()).catch(() => {});
      return response;
    } catch (error) {
      const cached = await caches.match(event.request);
      if (cached) return cached;
      if (event.request.mode === 'navigate') {
        const shell = await caches.match('./index.html');
        if (shell) return shell;
      }
      throw error;
    }
  })());
});
