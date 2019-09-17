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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/static/AsS-Sc6AcdgZ39ieQYkGY/pages/_app.js",
    "revision": "f8d87764cfb9f5598e4083d2100bae96"
  },
  {
    "url": "_next/static/AsS-Sc6AcdgZ39ieQYkGY/pages/_error.js",
    "revision": "140d6e7e2b12707217c99bb1fcdbc1c1"
  },
  {
    "url": "_next/static/AsS-Sc6AcdgZ39ieQYkGY/pages/index.js",
    "revision": "6878584a048a9b354c0c598479e6822a"
  },
  {
    "url": "_next/static/chunks/0.js",
    "revision": "019e8d55926f7fee330ac1dcd87009dc"
  },
  {
    "url": "_next/static/chunks/commons.d29e574086cff0a5f691.js",
    "revision": "f73a17e492773cd64f47c1e0de4726cc"
  },
  {
    "url": "_next/static/development/dll/dll_397dc449097af0b4e992.js",
    "revision": "8115e840b6ecdc2d1e4a1e703e257f63"
  },
  {
    "url": "_next/static/development/pages/_app.js",
    "revision": "c29c5ff0e0c4a6a78e4978d96004bd84"
  },
  {
    "url": "_next/static/development/pages/_error.js",
    "revision": "5bc20d20b215bb6f00f00ed608e74d09"
  },
  {
    "url": "_next/static/development/pages/index.js",
    "revision": "3cdfabba3171a21d40f057a45f93ef35"
  },
  {
    "url": "_next/static/development/pages/next/dist/pages/_error.js",
    "revision": "c718e136ac83ee17efec88895660ecc1"
  },
  {
    "url": "_next/static/runtime/amp.js",
    "revision": "16f9288176dd918a8e7061d685b62ac1"
  },
  {
    "url": "_next/static/runtime/main-1e726092661327a6e0eb.js",
    "revision": "6dd4cdde154e5d8bbe67bb3a1a661742"
  },
  {
    "url": "_next/static/runtime/main.js",
    "revision": "f0b7b67048cb53eb9c4696a69881a917"
  },
  {
    "url": "_next/static/runtime/webpack-035ac2b14bde147cb4a8.js",
    "revision": "40b4095b5b68a142c856f388ccb756f2"
  },
  {
    "url": "_next/static/runtime/webpack.js",
    "revision": "afd169dece90c74ccee13e77da48d00c"
  },
  {
    "url": "_next/static/webpack/8bb18e96b2aff3008b77.hot-update.json",
    "revision": "ce62086049dcc80149e673ba96bb868f"
  },
  {
    "url": "_next/static/webpack/92fbd8460e202004c453.hot-update.json",
    "revision": "116d4f50a17cd3d9977dccc0f409a3c2"
  },
  {
    "url": "_next/static/webpack/cd70b6ed5fc046e53151.hot-update.json",
    "revision": "f5fe5640eb23d40bbed2f6ad0922d900"
  },
  {
    "url": "_next/static/webpack/d0aae388b257a4b0ccfc.hot-update.json",
    "revision": "18ab01236940d44aae053fc6995ffd6b"
  },
  {
    "url": "_next/static/webpack/eb8d094c48da309eb6f3.hot-update.json",
    "revision": "c37c91b3879b5a0ae036ff4dea68d567"
  },
  {
    "url": "404.html",
    "revision": "5d16ce48d19b968645da848a70d39576"
  },
  {
    "url": "index.html",
    "revision": "517ce93237d2a81affa3d9d1d58f7f89"
  },
  {
    "url": "static/favicon.ico",
    "revision": "3b22ca0b8566790715b245c864d791d2"
  },
  {
    "url": "static/icon-144.png",
    "revision": "9e1fea20737e7320dc85e3d0c59e574a"
  },
  {
    "url": "static/icon-192.png",
    "revision": "d6d6a195f22c3389cf7f345bf01730f3"
  },
  {
    "url": "static/icon-36.png",
    "revision": "8b233ce058a145ffa68552d02a9caa71"
  },
  {
    "url": "static/icon-48.png",
    "revision": "57eee0547aeca3422e8d31f9eeaaebe6"
  },
  {
    "url": "static/icon-512.png",
    "revision": "f3e205c0f5830c4941d785f3d75bc3de"
  },
  {
    "url": "static/icon-72.png",
    "revision": "afb071d434e0d822a882d11180f13119"
  },
  {
    "url": "static/icon-96.png",
    "revision": "b9944b99263be37dbca5da2714997a72"
  },
  {
    "url": "static/manifest.json",
    "revision": "61c7bae0de1f003609d9174413b65201"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
