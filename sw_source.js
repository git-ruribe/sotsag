console.log('Hello from sw.js v0.1.1');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);

  workbox.googleAnalytics.initialize({
    parameterOverrides: {
      cd1: 'offline',
    },
  });

  workbox.precaching.precacheAndRoute([]);

} else {
  console.log(`Boo! Workbox didn't load 😬`);
}

