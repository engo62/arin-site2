self.addEventListener("install", e => {
e.waitUntil(
caches.open("arin-site").then(cache => {
return cache.addAll([
"./",
"./index.html",
"./sarki.mp3",
"./icon.png"
]);
})
);
});

self.addEventListener("fetch", e => {
e.respondWith(
caches.match(e.request).then(res => res || fetch(e.request))
);
});
