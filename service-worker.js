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
    "revision": "4ad3ecece22d5f3fb63b2f97a0040467"
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
    "url": "assets/js/11.fe02ea52.js",
    "revision": "2b3ef8cea7f6d2d226b1bb8171d5dec9"
  },
  {
    "url": "assets/js/12.c1f2b420.js",
    "revision": "a66f33bf7dc507dfdcded5a3accd3eec"
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
    "url": "assets/js/17.82de2ce0.js",
    "revision": "ccbe21fe5b488c2645480212588a831e"
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
    "url": "assets/js/app.74ccc3da.js",
    "revision": "91cd0e623a40992a2813ce449a2b4004"
  },
  {
    "url": "assets/js/vendors~flowchart.d5613a2b.js",
    "revision": "0ae42421838a6212f85c97f8c44ed6ef"
  },
  {
    "url": "dbs/companys/1/1.html",
    "revision": "9f7e9faf9bffd7c254017cc09630b0b3"
  },
  {
    "url": "dbs/companys/1/2.html",
    "revision": "7fcbbd1fbf630b7a04945b93a48e8520"
  },
  {
    "url": "dbs/guides/1/1.html",
    "revision": "3843ee40c020faa5a6ea4658cf3c2cab"
  },
  {
    "url": "dbs/storys/1/1.html",
    "revision": "b1ead8816e7aaffaa77c09e6e7abdde9"
  },
  {
    "url": "dbs/toutiao/1/1.html",
    "revision": "dd1e5102388a8ed5f349fbc49b31e30e"
  },
  {
    "url": "docs/index.html",
    "revision": "4c138bb9e8cb2fc7bb54e13bc6ed4ba7"
  },
  {
    "url": "guide/index.html",
    "revision": "15ff2a7fd199d416c11768fe9d21a0eb"
  },
  {
    "url": "hero.png",
    "revision": "7282010a46b18e87f34f32daf8e2c1ca"
  },
  {
    "url": "index.html",
    "revision": "73882287c4bc48c4867a170d2f5b4648"
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
