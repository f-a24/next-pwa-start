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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "_next/811823da-7021-4682-94d4-ad0807d3dde2/page/_app.js",
    "revision": "6ec708c18fbcafb136b6df165cd8c491"
  },
  {
    "url": "_next/811823da-7021-4682-94d4-ad0807d3dde2/page/_error.js",
    "revision": "3ccd49dd1cc4c0eef79c6bbc162bcd04"
  },
  {
    "url": "_next/811823da-7021-4682-94d4-ad0807d3dde2/page/index.js",
    "revision": "0859d6be7e66b1254ea3dd9ee4c3258d"
  },
  {
    "url": "_next/static/commons/main-9ab0a075d4701ae949b9.js",
    "revision": "9a4c31593d90291fd1c74317b8c692ed"
  },
  {
    "url": "_next/static/commons/main.js",
    "revision": "720facd4c8cb2e008c784d85ac7bc228"
  },
  {
    "url": "_next/static/commons/manifest.js",
    "revision": "dc27473c379eaa54770f769a409355ef"
  },
  {
    "url": "index.html",
    "revision": "96dce8b71bd4e54efc97d78c52c7fd74"
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
    "url": "static/icon-72.png",
    "revision": "afb071d434e0d822a882d11180f13119"
  },
  {
    "url": "static/icon-96.png",
    "revision": "b9944b99263be37dbca5da2714997a72"
  },
  {
    "url": "static/manifest.json",
    "revision": "e262ab3dad686c169e873cd5467ca29e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
