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
    "url": "_next/static/chunks/commons.d675ee4f652c22bd6754.js",
    "revision": "0d0b44e723e789d6cde669820e22e4e7"
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
    "url": "_next/static/runtime/main-2ed23c4a96b6f9aa22fc.js",
    "revision": "3dfc50b050143e5ad8de37e8a3b1b1ec"
  },
  {
    "url": "_next/static/runtime/webpack-42652fa8b82c329c0559.js",
    "revision": "2678b70926bdf0f2081ca40f4e674090"
  },
  {
    "url": "_next/static/S75A5Sm8VT2ui0fd~KnQI/pages/_app.js",
    "revision": "217c2d27ca83f525dbfa0a05c10566b8"
  },
  {
    "url": "_next/static/S75A5Sm8VT2ui0fd~KnQI/pages/_error.js",
    "revision": "685df109dad43e8dc6e13549e41e26e7"
  },
  {
    "url": "_next/static/S75A5Sm8VT2ui0fd~KnQI/pages/index.js",
    "revision": "d6f0d774e61adffc784d5101dd46e0f5"
  },
  {
    "url": "index.html",
    "revision": "50f801ba0cf51110234789e0bbfd627f"
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
    "revision": "f11576ce04eae38ca1ce0c1cb502488f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
