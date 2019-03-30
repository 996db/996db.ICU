/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "6fa4ce590c2975f9a4acc16529773962"
  },
  {
    "url": "assets/css/0.styles.b9272a5b.css",
    "revision": "dc3112c10236b50a3a3b47386e680197"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f7d50c6e.js",
    "revision": "b6e9f6b5d5c476ee64e94059f608e377"
  },
  {
    "url": "assets/js/11.3ea388eb.js",
    "revision": "91a4dfcd7fcbfaaa4c616cb52a3b924d"
  },
  {
    "url": "assets/js/12.fc378c65.js",
    "revision": "9d45333a627ac28769f8245b6f948cfa"
  },
  {
    "url": "assets/js/13.1306012a.js",
    "revision": "daa2a62e686cf7de2c81d95d8c6d47a5"
  },
  {
    "url": "assets/js/14.06768615.js",
    "revision": "cddec11400f66be91af22d46a3217632"
  },
  {
    "url": "assets/js/15.3f202c72.js",
    "revision": "69cba63e14283347fbd4bf039665816b"
  },
  {
    "url": "assets/js/16.0d775bf0.js",
    "revision": "15f0fc1aab1579144b7cee8209d89ef6"
  },
  {
    "url": "assets/js/17.64ab92f8.js",
    "revision": "da8c32b92afa0d3bedc4c9d890e253f3"
  },
  {
    "url": "assets/js/18.40477d59.js",
    "revision": "f2fdf1be56a66ae771040169e5438d3e"
  },
  {
    "url": "assets/js/19.12d33e97.js",
    "revision": "f28f3a74949d60552a3d87aef2e6b27f"
  },
  {
    "url": "assets/js/3.28a68c3b.js",
    "revision": "941b9ee97af837a98ddcecd0e1d140dc"
  },
  {
    "url": "assets/js/4.86d1417a.js",
    "revision": "deeb34f7d41b797f242d405b22fc6316"
  },
  {
    "url": "assets/js/5.ff00f590.js",
    "revision": "29d8bb019281136218c84a6b1c15790e"
  },
  {
    "url": "assets/js/6.a6bd40ec.js",
    "revision": "a681072bdfcd29790f1740d43ee21a8a"
  },
  {
    "url": "assets/js/7.38c9d866.js",
    "revision": "eacce5b3cdd83d4c57bb389746e5683e"
  },
  {
    "url": "assets/js/8.4eab8ec2.js",
    "revision": "4e2e68fc3695d4836a8fa839606ae193"
  },
  {
    "url": "assets/js/9.4f62ff0c.js",
    "revision": "547c707e7b23d904b0b5cb1b4f1a62dc"
  },
  {
    "url": "assets/js/app.dc46babb.js",
    "revision": "6483ceb8af71ce62cb1916696d1540fe"
  },
  {
    "url": "assets/js/vendors~flowchart.d5613a2b.js",
    "revision": "0ae42421838a6212f85c97f8c44ed6ef"
  },
  {
    "url": "dbs/companys/1/1.html",
    "revision": "5732f3dd080c48d24e24bfb5ec494753"
  },
  {
    "url": "dbs/companys/1/2.html",
    "revision": "9506df9c8d37d65baee11b637281d43e"
  },
  {
    "url": "dbs/guides/1/1.html",
    "revision": "65437196f322782526fbee06b4cfd9d8"
  },
  {
    "url": "dbs/storys/1/1.html",
    "revision": "af8e60afe5052e8f4d131974ba1bd3b0"
  },
  {
    "url": "dbs/toutiao/1/1.html",
    "revision": "6a7c907f794e0bcb74767a065ccb6b2c"
  },
  {
    "url": "docs/index.html",
    "revision": "7707c743c27c667249e86a54d006e94d"
  },
  {
    "url": "guide/index.html",
    "revision": "41af1bfe71c5fefc6a999af4a5decc77"
  },
  {
    "url": "hero.png",
    "revision": "7282010a46b18e87f34f32daf8e2c1ca"
  },
  {
    "url": "index.html",
    "revision": "49ecdf999580c1d9debc16d1a91e89e3"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "link/hzwg.png",
    "revision": "7ee4d00c7604c950a93458a2d53c0e25"
  },
  {
    "url": "link/leevel.png",
    "revision": "5ebd90ee632f216fa0ea842e934dc49f"
  },
  {
    "url": "link/queryphp-use-leevel.png",
    "revision": "f15d477af0c6973065617a35875194f5"
  },
  {
    "url": "logo.png",
    "revision": "7282010a46b18e87f34f32daf8e2c1ca"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
