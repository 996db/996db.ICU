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
    "revision": "1b0f1abdebcaec57e3da8ddf72951f62"
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
    "url": "assets/js/11.2edeac3e.js",
    "revision": "cdd7daf68268ae99dabb74a0e3134cdf"
  },
  {
    "url": "assets/js/12.fc378c65.js",
    "revision": "9d45333a627ac28769f8245b6f948cfa"
  },
  {
    "url": "assets/js/13.b462e5e3.js",
    "revision": "072a5fcbe63b5a66e6ed09a6236320ed"
  },
  {
    "url": "assets/js/14.06768615.js",
    "revision": "cddec11400f66be91af22d46a3217632"
  },
  {
    "url": "assets/js/15.93c63357.js",
    "revision": "de7c3733a4f8dcdde8ad90935c1b0cfa"
  },
  {
    "url": "assets/js/16.ac38f153.js",
    "revision": "0e0f7f7ef5ebb7848c078da5ef2d0aaf"
  },
  {
    "url": "assets/js/17.07f7988e.js",
    "revision": "d5d2c526e35f27ad3a3c93e2e0106bcf"
  },
  {
    "url": "assets/js/18.7a8b1045.js",
    "revision": "c6597ee6aa83b66fa9e82e125d1a5039"
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
    "url": "assets/js/app.f7e12b91.js",
    "revision": "adcd80750ee5eab67c5732d3347dc56c"
  },
  {
    "url": "assets/js/vendors~flowchart.d5613a2b.js",
    "revision": "0ae42421838a6212f85c97f8c44ed6ef"
  },
  {
    "url": "dbs/companys/1/1.html",
    "revision": "5618aaf185e1ddb8bd1a1b9ceaeec52e"
  },
  {
    "url": "dbs/companys/1/2.html",
    "revision": "54621c6cad1ea8a680375a7e04271d9a"
  },
  {
    "url": "dbs/guides/1/1.html",
    "revision": "e8ff6062a734b3afa29cd49ba75342ed"
  },
  {
    "url": "dbs/storys/1/1.html",
    "revision": "fffd7323b73b5b2516bebef6bc030352"
  },
  {
    "url": "dbs/toutiao/1/1.html",
    "revision": "e370ef8627b0b6024024c0a54886abe1"
  },
  {
    "url": "docs/index.html",
    "revision": "5aa54e8fa9af435db97a8212b4ebf146"
  },
  {
    "url": "guide/index.html",
    "revision": "06b0490b4d66d3e16e56a6d369bcf128"
  },
  {
    "url": "hero.png",
    "revision": "7282010a46b18e87f34f32daf8e2c1ca"
  },
  {
    "url": "index.html",
    "revision": "b9b3e4f9e48155de3176313b08025a4c"
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
