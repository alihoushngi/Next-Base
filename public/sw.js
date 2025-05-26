if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, i) => {
    const t =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[t]) return;
    let c = {};
    const o = (e) => n(e, t),
      r = { module: { uri: t }, exports: c, require: o };
    s[t] = Promise.all(a.map((e) => r[e] || o(e))).then((e) => (i(...e), c));
  };
}
define(["./workbox-1bb06f5e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/471-9b095cca3923086b.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/4bd1b696-9b1f400e3f703828.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/684-f7c28e0ad6daab10.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-fceae72444bd9bf4.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/about/page-b38ad15fcb89fccd.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/contact/page-c443bd3a7dba83d1.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/dashboard/layout-6fe111665437f7f9.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/dashboard/page-cfafca098d0aa9bd.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/dashboard/settings/error-e0a47a7cedfe89af.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/dashboard/settings/not-found-18af17ec11d40272.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/dashboard/settings/page-34f5da3a50bff638.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/layout-4fdc4e05fe196a8f.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/app/page-abc04bbba07f1f28.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/framework-f593a28cde54158e.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/main-5a7edae921c47820.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/main-app-393eabc7c61d5c02.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/pages/_app-da15c11dea942c36.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/pages/_error-cc3f077a18ea1793.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-41326cdcaf341755.js",
          revision: "sbc0G5XiUoSB0NUNREjFG",
        },
        {
          url: "/_next/static/css/c1e2154f48126d72.css",
          revision: "c1e2154f48126d72",
        },
        {
          url: "/_next/static/sbc0G5XiUoSB0NUNREjFG/_buildManifest.js",
          revision: "2543cb810331d05ffa26fa5de00754c4",
        },
        {
          url: "/_next/static/sbc0G5XiUoSB0NUNREjFG/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/icons/icon-192x192.png",
          revision: "648a5f0c10a3ca66e36a70f2e80975d2",
        },
        {
          url: "/icons/icon-512x512.png",
          revision: "0b49387f29e6a4dbd15e464bd20973b1",
        },
        {
          url: "/manifest.webmanifest",
          revision: "0c835291c842f6626e9815932c0aade5",
        },
        { url: "/robots.txt", revision: "4a5220ec2b0930aa5024b76b06624d72" },
        {
          url: "/screenshots/homepage-mobile.png",
          revision: "0518217df1178bb4a364c132a8e58ff7",
        },
        {
          url: "/screenshots/homepage.png",
          revision: "1db33fb2953fc0e04fbd1f07419634d4",
        },
        { url: "/sitemap-0.xml", revision: "a47cda8b012a422f6fe39a9bd2757d4e" },
        { url: "/sitemap.xml", revision: "880e0e3be822f9d355784501ef509b92" },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
