const CACHE_NAME = 'baymak-portfolio-v1'

const assetsToCache = [
  './',
  './index.html',
  './css/main.css',
  './js/main.js',
  './assets/images/my-photo.webp',
  './assets/images/clouds/cloud-01.avif',
  './assets/images/clouds/cloud-02.avif',
  './assets/icons/favicon.svg',
  './assets/icons/apple-touch-icon.png',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Montserrat:wght@400;700&display=swap',
]

self.addEventListener('install', event => {
  self.skipWaiting()
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache)
    }),
  )
})

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      caches.keys().then(keys => {
        return Promise.all(
          keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)),
        )
      }),
    ]),
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request)
    }),
  )
})
