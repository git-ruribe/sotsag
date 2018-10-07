console.log('Hello from sw.js v0.1.1');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

workbox.precaching.precacheAndRoute([
  {
    "url": "detail.html",
    "revision": "5d1af1d82eae4a949513929cb1165639"
  },
  {
    "url": "images/favicon.ico",
    "revision": "3780c065cd18576cbad009fc6ca35c13"
  },
  {
    "url": "images/icons-144.png",
    "revision": "177955fac0886396b725c007c9d3f581"
  },
  {
    "url": "images/icons-192.png",
    "revision": "86d3aba1704e2d4ca88efaaee9335f2a"
  },
  {
    "url": "images/icons-48.png",
    "revision": "d73540fd798e8836ae56bd57bf50bcda"
  },
  {
    "url": "images/icons-512.png",
    "revision": "ed057b95b93b1648f0a7faefe7a23c39"
  },
  {
    "url": "images/icons-72.png",
    "revision": "ca36888c5dcdbeaaa176d35e71a05952"
  },
  {
    "url": "images/icons-96.png",
    "revision": "ae15779acc418bc277a7b72b4573a18d"
  },
  {
    "url": "index.html",
    "revision": "eaf55742159dac49ef6698a5bff8aa5d"
  },
  {
    "url": "js/detail.js",
    "revision": "660c8a77dc8bd0db6b7e1b6a060c7356"
  },
  {
    "url": "js/my-app.js",
    "revision": "8599a509e8891b2312e6f5c241133dd7"
  },
  {
    "url": "js/routes.js",
    "revision": "5f2de53ee1bb407cdd2c80de6f589172"
  },
  {
    "url": "js/transfer.js",
    "revision": "2fd3e062fd24dc540bc0b23fe805e385"
  },
  {
    "url": "libs/framework7.css",
    "revision": "aedcbb2482cd5c0b62a1aa5257ceb28f"
  },
  {
    "url": "libs/framework7.js",
    "revision": "a9700cc57ac53ebfa01dc4aba7fd3454"
  },
  {
    "url": "libs/normalize.css",
    "revision": "3e883482cfcbb1d88865a04d796c7768"
  },
  {
    "url": "libs/pouchdb-7.0.0.min.js",
    "revision": "12d23e3295590b71657939cdb7aba451"
  },
  {
    "url": "my-app.css",
    "revision": "c812747f9d841a840e7c3c06e7d67af4"
  },
  {
    "url": "my-app.js",
    "revision": "61db15241e4c69e833e85893fa856704"
  },
  {
    "url": "serviceworker.js",
    "revision": "cd74988d833feaa20d9ce0c8c0b09c85"
  },
  {
    "url": "sw_source.js",
    "revision": "329385c16f9455a450a80f42231cec13"
  },
  {
    "url": "transfer.html",
    "revision": "c54b000e6c7c8143a32976cacae21dcf"
  },
  {
    "url": "workbox-config.js",
    "revision": "721e18bea15aca290c446ca4c5b7bcb8"
  }
])