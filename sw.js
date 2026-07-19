/**
 * Alba Docs — Service Worker
 * Strategy:
 *   - App shell (index.html): network-first with cache fallback (always get latest)
 *   - Template .md files: cache-first with network update (fast offline, refresh in background)
 *   - Everything else: network only
 */

const CACHE_VERSION = 'alba-docs-v1';
const SHELL_CACHE   = CACHE_VERSION + '-shell';
const TPL_CACHE     = CACHE_VERSION + '-templates';

// Precache the app shell on install
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(SHELL_CACHE)
      .then(cache => cache.add('./index.html'))
      .then(() => self.skipWaiting())
  );
});

// Clean up old caches on activate
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys
          .filter(k => k !== SHELL_CACHE && k !== TPL_CACHE)
          .map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const url = new URL(event.request.url);

  // Only handle same-origin GET requests
  if (event.request.method !== 'GET' || url.origin !== self.location.origin) return;

  const path = url.pathname;

  // Template .md files — cache-first, stale-while-revalidate
  if (path.startsWith('/templates/') && path.endsWith('.md')) {
    event.respondWith(
      caches.open(TPL_CACHE).then(cache =>
        cache.match(event.request).then(cached => {
          const fetchPromise = fetch(event.request).then(resp => {
            if (resp.ok) cache.put(event.request, resp.clone());
            return resp;
          }).catch(() => cached); // network error → serve stale
          return cached || fetchPromise;
        })
      )
    );
    return;
  }

  // App shell — network-first, cache fallback
  if (path === '/' || path === '/index.html' || path.endsWith('.html')) {
    event.respondWith(
      fetch(event.request)
        .then(resp => {
          if (resp.ok) {
            caches.open(SHELL_CACHE).then(cache => cache.put(event.request, resp.clone()));
          }
          return resp;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }
});
