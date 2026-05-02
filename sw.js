const CACHE_NAME="arin-app-v1";

const FILES=[
"./",
"./index.html",
"./icon.png",
"./sarki.mp3",
"./foto1.jpg",
"./foto2.jpg",
"./foto3.jpg",
"./foto4.jpg",
"./foto5.jpg",
"./foto6.jpg",
"./foto7.jpg",
"./foto8.jpg",
"./foto9.jpg",
"./foto10.jpg"
];

self.addEventListener("install",e=>{
e.waitUntil(
caches.open(CACHE_NAME).then(c=>c.addAll(FILES))
);
});

self.addEventListener("fetch",e=>{
e.respondWith(
caches.match(e.request).then(r=>r||fetch(e.request))
);
});
