const CACHE_NAME = "bhajanmarg-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/quotes.html",
  "/gallery.html",
  "/links.html",
  "/jaap.html",
  "/quotes.json",
  "/links.json",
  "/gurudev.png"
];

self.addEventListener("install", event => {

  event.waitUntil(
    caches.open(CACHE_NAME)
    .then(cache => cache.addAll(urlsToCache))
  );

});

self.addEventListener("fetch", event => {

  event.respondWith(

    caches.match(event.request)
    .then(response => {

      return response || fetch(event.request);

    })

  );

});
