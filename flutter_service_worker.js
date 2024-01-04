'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "66f0192af698e964001f67861ed42f64",
"assets/AssetManifest.bin.json": "04de0532fde6452d9c96861c888c997c",
"assets/AssetManifest.json": "bea4e24ff379a8f491cb9fd7d1533ac0",
"assets/assets/animation/splash.json": "0b77138b084a99b04ebf15945e928ab5",
"assets/assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/arm.png": "c84b43cd1a8bc1818669e505f974e657",
"assets/assets/images/box.png": "15c587f4802355f86a08a82d678db8cf",
"assets/assets/images/box1.png": "053c0c30be4dc55d948ab30eec63148e",
"assets/assets/images/customer.png": "9393b6337188c52ccb2307c1ff478ad0",
"assets/assets/images/demo.png": "5b545c5f57aada1f2ab09d4447636db9",
"assets/assets/images/demo1.png": "86078d2aee9beaacefacf5da8899cabe",
"assets/assets/images/image2.png": "97d1ea5b33a0661ec72eca1253ca3b78",
"assets/assets/images/info.png": "4dcfb47436a0c71132741520f7192953",
"assets/assets/images/info1.png": "621bad9ae4d440883a46ade037cb3077",
"assets/assets/images/intro.png": "7ee93995a7766b7432d1cbb80a1211e5",
"assets/assets/images/intro1.png": "4928b29cf9f9eef184048ff5888a470f",
"assets/assets/images/intro2.png": "79528440b3becc55e8ad641c43a60832",
"assets/assets/images/intro3.png": "5e605615f4b27a9fb36bad9f7d01c724",
"assets/assets/images/intro4.png": "eba10e5ad174cefae7b63dddb3095896",
"assets/assets/images/logo.png": "ea5db806be6b422de5d17a1b443f971e",
"assets/assets/images/machine.png": "a110c46e9c19781f3e8300e4ad1939b8",
"assets/assets/images/motor.jpg": "92c485500e14404829d73f3129fdbc66",
"assets/assets/images/motor.png": "25c10ed789ecd0d73e827b4a3dd3d4c4",
"assets/assets/images/motor1.png": "ff14a597bafaeb8ecdfe91ceaa6d5786",
"assets/assets/images/motor2.png": "e6e998d5f9e0607002141d8d1e026719",
"assets/assets/images/motor3.png": "5c5a95140ae82aa209191e8b20be9407",
"assets/assets/images/motor4.png": "a8a3be5880b2578fbc91fcfef1500d3e",
"assets/assets/images/newlogo1.png": "b66ba8da267e379c98a9ef741696033e",
"assets/assets/images/newlogo2.png": "9fc0fdc17b9ca7062f07490d2e1795c2",
"assets/assets/images/oil.png": "b9994831f0219788c0bcd7b9ac022ed9",
"assets/assets/images/oil1.png": "1cfbf9d9bd613789220db9e8aaf9ea1e",
"assets/assets/images/oil2.png": "18b98b76a49b3c2cb2e0165afe63d4d3",
"assets/assets/images/oil3.png": "d418bcd205159adab2c3a5e741df72a6",
"assets/assets/images/pairavmachine.png": "394a5a68445893a0757505e1a1528a8e",
"assets/assets/images/quality.png": "bcd3c0c5f5b80e21baaa0c44fc360afa",
"assets/assets/images/satisfaction.png": "f184c91bb73be4887b13c97d7bf03c69",
"assets/assets/images/sewing-machine.png": "cf263a1e759388933b304ed236c76709",
"assets/assets/images/support.png": "9857a62968dc57830f7d65a8daa7b937",
"assets/assets/images/thread.png": "183f4f49998ed54312649802ae055c96",
"assets/assets/images/tools.png": "3c950437e5e9667fd4af26925df1459f",
"assets/assets/model/motor.glb": "bede19a25343011c490b9692086b73d8",
"assets/assets/model/PAIRAV.glb": "99f68676a784f8f4667047b58e5faac1",
"assets/FontManifest.json": "548b3d90298346ebf54d629d6b18560d",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "88dabb56631f13cdf1416f6ccbdce7c3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/model_viewer_plus/assets/model-viewer.min.js": "4226392bee9372f20a688343e51e7b54",
"assets/packages/model_viewer_plus/assets/template.html": "8de94ff19fee64be3edffddb412ab63c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "6a3fb463aaa14e828f18208fbe4de3dd",
"canvaskit/canvaskit.wasm": "59e28a41f90b0a21591740228fd7cfca",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "7a10dbd8194e99a0d17ca1bc8b6360cf",
"canvaskit/chromium/canvaskit.wasm": "4ae14fcabc4c54b818265c10de8468eb",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "e4af4616ae8c8e4dccb1325abd7f7858",
"canvaskit/skwasm.wasm": "dc8a17529f7c10296d7c6f139fd65669",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "82d16067b12f135392d0b91d86bd54d9",
"favicon.png": "5f5fbfc13f634bb1fde5c186152a1905",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-icon-144x144.png": "4e87af72f6a1c4f1fdeb01f4e02c0809",
"icons/android-icon-192x192.png": "a52825e852156ccfc101e20c26a138d3",
"icons/android-icon-36x36.png": "8dbda27db73fe2b881b1a35b0f23fb4e",
"icons/android-icon-48x48.png": "b92ea1cd8264869d484d9119289e1a50",
"icons/android-icon-72x72.png": "a9344a6d5f1ad1d91922371b59715313",
"icons/android-icon-96x96.png": "c6c26537b1e7094f26f31a33b56ee067",
"icons/apple-icon-114x114.png": "bc4cdfd6a59f0f743422577a9c501f97",
"icons/apple-icon-120x120.png": "403ffe86c3fa7f476d78d430380dfd29",
"icons/apple-icon-144x144.png": "4e87af72f6a1c4f1fdeb01f4e02c0809",
"icons/apple-icon-152x152.png": "789d8b9fc687375239c0d9bf31384092",
"icons/apple-icon-180x180.png": "285df812903f7c5cd9f8d296bf5425cd",
"icons/apple-icon-57x57.png": "b44bc2db0dca24d53020c71b4612e5fc",
"icons/apple-icon-60x60.png": "fb32e67900ad64628aa6a3a870cd94a3",
"icons/apple-icon-72x72.png": "a9344a6d5f1ad1d91922371b59715313",
"icons/apple-icon-76x76.png": "d2d34465f9e17cfe6955b59181d02ce4",
"icons/apple-icon-precomposed.png": "8e291e2536613ef6ef7e097dc7d3eb47",
"icons/apple-icon.png": "8e291e2536613ef6ef7e097dc7d3eb47",
"icons/browserconfig.xml": "653d077300a12f09a69caeea7a8947f8",
"icons/favicon-16x16.png": "c161b89d75d6983ffaa7e6bde8f42a30",
"icons/favicon-32x32.png": "38d2146af0d7c40f4427de4d2dcbf8fd",
"icons/favicon-96x96.png": "c6c26537b1e7094f26f31a33b56ee067",
"icons/favicon.ico": "e71adfebbea4c5990ad76d54b5763520",
"icons/manifest.json": "b58fcfa7628c9205cb11a1b2c3e8f99a",
"icons/ms-icon-144x144.png": "4e87af72f6a1c4f1fdeb01f4e02c0809",
"icons/ms-icon-150x150.png": "25a4fb9545067ff9825bbe52809f5696",
"icons/ms-icon-310x310.png": "244ddc0cf98037ca70ab360c695253a0",
"icons/ms-icon-70x70.png": "46abb76f15f7d3664ca779dd122b3c7a",
"index.html": "25620f65fe2baa4311adff063b6744c3",
"/": "25620f65fe2baa4311adff063b6744c3",
"main.dart.js": "e0492093dfa00beb2fc119190497c1a9",
"manifest.json": "e358dcb4234659dac48dd07230e22f8f",
"version.json": "1ddaf98606d2cb7d0da08d3b70053df3",
"web/FontManifest.json": "9ea0424096be27d86306246aebdf067d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
