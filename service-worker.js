self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
});

self.addEventListener("fetch", (e) => {
  console.log("Service Worker: Fetching");
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
