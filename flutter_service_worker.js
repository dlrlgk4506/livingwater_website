'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "d8fec751e0d93f621823291b5d34ad33",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"assets/AssetManifest.bin": "838bd70ca5081a1ea0b16e29c2579470",
"assets/AssetManifest.bin.json": "4dd3150e578f33fbe95ce8e99e4808e5",
"assets/assets/1.5x/back_nor_btn.png": "76215e08bdc4cd32ab0f03a9d5146e3e",
"assets/assets/1.5x/comment_background.png": "43c1eb6c57546218a89d76098317b650",
"assets/assets/1.5x/icon.jpg": "b55435902668ad4578dcaf1489320a45",
"assets/assets/1.5x/ic_menu_download.png": "93370eacf9d6c4c4f9afa3c7491fc884",
"assets/assets/1.5x/ic_menu_home.png": "8c915a2081c78eddf378cbb2b28ceee5",
"assets/assets/1.5x/ic_menu_message.png": "c6eefedf49803c15803eef60ee93a6fc",
"assets/assets/1.5x/ic_menu_setting.png": "5c9b2d154a36d3fcdafbfc789931dd82",
"assets/assets/1.5x/message.png": "6e3652a19b83fd6184664af3e8d1ebf6",
"assets/assets/1.5x/n_heart.png": "4091749eccf6754d6ed88de34658665f",
"assets/assets/1.5x/player_background.png": "773b6d4aa5036ed17d1e156fad7e2a5e",
"assets/assets/1.5x/player_background_bar.png": "ba5e8832563f6f9d3f6f3fd7883a4adb",
"assets/assets/1.5x/player_bottom_background.png": "570de1f9662aa936196a773172bc6aa9",
"assets/assets/1.5x/p_comment.png": "562e4cc9ff20d4ad1a48772adcecc299",
"assets/assets/1.5x/p_download.png": "3536507d2fba947881d95402e1938672",
"assets/assets/1.5x/p_forward_move.png": "7223dc894b0d6189c0ded769784f28bb",
"assets/assets/1.5x/p_heart.png": "a555e85337b5f6ada17267fa89e052bc",
"assets/assets/1.5x/p_next.png": "5aae2f1f907dd24e3bc4ba917e0020ad",
"assets/assets/1.5x/p_pause.png": "8670b61ae5458e58f2132800a49098dd",
"assets/assets/1.5x/p_play.png": "0d0e811549f64bf028d370c15430ae57",
"assets/assets/1.5x/p_prev.png": "42b76b2f99411446f4b2e2305e7351f5",
"assets/assets/1.5x/p_prev_move.png": "cc901ee8a8e667e67b16ee8e7ee27881",
"assets/assets/1.5x/p_share.png": "8ab49898e92df1d38725efa0f69cf28e",
"assets/assets/1.5x/p_timer.png": "bb5593964a64df7a1b47399b0264155c",
"assets/assets/1.5x/stop.png": "1142379a8c2eb0318651691a285f1372",
"assets/assets/1.5x/symbol.png": "035eb366e0bfe51cc1d0e7ecf99bbbd4",
"assets/assets/1.5x/tree.png": "0271feb26569d10de59917dd0ebd45b3",
"assets/assets/1.5x/turntable.png": "eb894785c3a6ca324d5a74a4ed975387",
"assets/assets/2.0x/back_nor_btn.png": "d60bcdc2e3c2b5b4e108ffd61cb787bf",
"assets/assets/2.0x/comment_background.png": "8fda78af6d49405c32435e4d17bfe8ad",
"assets/assets/2.0x/icon.jpg": "48ca23e3a0ccc8ca644420aee54b42ba",
"assets/assets/2.0x/ic_menu_download.png": "7c497a043792e78da714aeccceed7562",
"assets/assets/2.0x/ic_menu_home.png": "351499a7ce57b4b55fe785b1d7889c6a",
"assets/assets/2.0x/ic_menu_message.png": "ac6b6753baaefe6250108fc9183abae0",
"assets/assets/2.0x/ic_menu_setting.png": "2231d9cac334712d0dbdcdef499f0e15",
"assets/assets/2.0x/message.png": "a3919c3e0c06d36bdb73463849ce7a46",
"assets/assets/2.0x/n_heart.png": "48be9305d1f4bd07afb6c4464a1054b6",
"assets/assets/2.0x/player_background.png": "31858e2d07845e2a8a854e8828690736",
"assets/assets/2.0x/player_background_bar.png": "c9338a5bc33d0b3aab17338dffa4fac7",
"assets/assets/2.0x/player_bottom_background.png": "dc890a30c8863d93cd3c31b72c2fbcf3",
"assets/assets/2.0x/p_comment.png": "44573a9eefdeaffc3d67327806d7588b",
"assets/assets/2.0x/p_download.png": "c680636e1d3e9c9a6a77e8b53d26dfd0",
"assets/assets/2.0x/p_forward_move.png": "f7b25e54e2c25774fe2cdc1c592f8028",
"assets/assets/2.0x/p_heart.png": "c671532f232253b7d38e6766a358a62b",
"assets/assets/2.0x/p_next.png": "f55b85956d35b988669e060456e54ddb",
"assets/assets/2.0x/p_pause.png": "6f5b1ea862fc8c5d92324c61e205e51f",
"assets/assets/2.0x/p_play.png": "6d3269e83399dfcd73fdb416f6391e65",
"assets/assets/2.0x/p_prev.png": "e82eb58d7124b4f1851b5073b46c78f5",
"assets/assets/2.0x/p_prev_move.png": "9bd7d8b550335870328ecb3f1867762b",
"assets/assets/2.0x/p_share.png": "2a3b6de7c46088e87e9943ccf468c983",
"assets/assets/2.0x/p_timer.png": "063f5082fb08c7906830e61cf9161351",
"assets/assets/2.0x/stop.png": "d212aac87b92dcb3be567905c62b407f",
"assets/assets/2.0x/symbol.png": "efd2d7801873efb2f928f054a7908944",
"assets/assets/2.0x/tree.png": "eef9bfc3e9774969b0b96229bc9e9ea6",
"assets/assets/2.0x/turntable.png": "e9fc778a15aebaeb8154277b46a93fad",
"assets/assets/3.0x/back_nor_btn.png": "fcd7e314eb1c2314739d2be69d0fa4eb",
"assets/assets/3.0x/comment_background.png": "9cb6a7c2bbbbd61bc59144522cb5646f",
"assets/assets/3.0x/icon.jpg": "d6e56baa777fae6c83973d9d6ec97ba1",
"assets/assets/3.0x/ic_menu_download.png": "057510fe9904aa2902c222c82b5d384f",
"assets/assets/3.0x/ic_menu_home.png": "b324d29a3c75ed065b57987af544a4f4",
"assets/assets/3.0x/ic_menu_message.png": "153a128d157e1d5bf8a563c268bb8700",
"assets/assets/3.0x/ic_menu_setting.png": "5cf40ba74cfbc657f1f0fafbb22199c1",
"assets/assets/3.0x/message.png": "5aa4a7c7100f693e51115b1d6083103a",
"assets/assets/3.0x/n_heart.png": "d155809c807d477e8be3904364ba005e",
"assets/assets/3.0x/player_background.png": "bd249d70170e46507cd4e6db668422d3",
"assets/assets/3.0x/player_background_bar.png": "5bcd89f915cbb0ed8f0cc8ef03eaea92",
"assets/assets/3.0x/p_comment.png": "c874a4297efd55be31177d7096a2635d",
"assets/assets/3.0x/p_download.png": "9651a75350dbd6f3ddecc4dc1d80d3c9",
"assets/assets/3.0x/p_forward_move.png": "cd4bb74005adb6b170b222e74b217fe5",
"assets/assets/3.0x/p_heart.png": "62c0bcaf5d81d07f3381710d42befe4a",
"assets/assets/3.0x/p_next.png": "e77de97ffa3af1f237caae3094f416c4",
"assets/assets/3.0x/p_pause.png": "1933dab8fd169c17d9a856de62897f64",
"assets/assets/3.0x/p_play.png": "2f774779b8847fb6ee6c00b503d39d60",
"assets/assets/3.0x/p_prev.png": "5ead736700580748cd5ebcb22e3f297b",
"assets/assets/3.0x/p_prev_move.png": "1487afd565e87bc764f9d79eaa721cdc",
"assets/assets/3.0x/p_share.png": "780f6087f615f89857675e6f123815de",
"assets/assets/3.0x/p_timer.png": "98bec14f8a154a9215adc855a9312ed4",
"assets/assets/3.0x/stop.png": "828011b7f1ae7e6f434c66bc8dbaf9ea",
"assets/assets/3.0x/symbol.png": "ceff92a989ca36c884cf03f38375d951",
"assets/assets/3.0x/tree.png": "de9e33c631851878a68966fe173c7b10",
"assets/assets/3.0x/turntable.png": "7fd013094a7abd644dc4949e71c8cb98",
"assets/assets/4.0x/back_nor_btn.png": "10ca150a02d039a568614d01648d02ba",
"assets/assets/4.0x/comment_background.png": "c1ae8e5ff3e64b57a97b3832dba9642b",
"assets/assets/4.0x/icon.jpg": "1e8258b922c41a0370c4902cef1796e0",
"assets/assets/4.0x/ic_menu_download.png": "79859d408ad90c37950ce3bb762a2e58",
"assets/assets/4.0x/ic_menu_home.png": "cf33ea68b8ec0d0c72b1f4e7a04ccad5",
"assets/assets/4.0x/ic_menu_message.png": "4f8169744078f337634a085733b5271c",
"assets/assets/4.0x/ic_menu_setting.png": "c29421d792b632be2896d756bc0a634e",
"assets/assets/4.0x/message.png": "22ecbedb74448607d22333ede7352d0c",
"assets/assets/4.0x/n_heart.png": "67ba5e99a7de98c1703a28c1850ae869",
"assets/assets/4.0x/player_background.png": "eb3f28ff38c5cafb98d9f49184ab6b03",
"assets/assets/4.0x/player_background_bar.png": "3c9cc04be29ffdb239c285b26621fe43",
"assets/assets/4.0x/player_bottom_background.png": "9608c90f199b547f300c37f9397f09bc",
"assets/assets/4.0x/p_comment.png": "88e6b076b4fef553a6cf150d8c7ce0e7",
"assets/assets/4.0x/p_download.png": "a777578a66b72baa01205fcf797d60ac",
"assets/assets/4.0x/p_forward_move.png": "c1f29634c0d284c3ff44f1c2afa29439",
"assets/assets/4.0x/p_heart.png": "6660a2a84fbfca639cafcd8ebe69354f",
"assets/assets/4.0x/p_next.png": "dc4c8b4f1575818e6d6944482c9811e9",
"assets/assets/4.0x/p_pause.png": "f0d7a3e9a293b6cd5d31563050bb762a",
"assets/assets/4.0x/p_play.png": "81a92d67f80cbc5fef607b3faebb694c",
"assets/assets/4.0x/p_prev.png": "b138033c4bf4bff819c4d89a314efe05",
"assets/assets/4.0x/p_prev_move.png": "0064ffd47713d3911d5a2e7d3dd43f2b",
"assets/assets/4.0x/p_share.png": "edf633c75fbb8e59f3226ac1b6d173b9",
"assets/assets/4.0x/p_stop.png": "6721def0d0166bc121daf7ff63f1cd1a",
"assets/assets/4.0x/p_timer.png": "e633b26cc7f12e59f9f7077fa8ebc458",
"assets/assets/4.0x/symbol.png": "feda508b1adcd108d2a2f98d177ca438",
"assets/assets/4.0x/tree.png": "a0f6ec12984972383ba5f99e1fb15527",
"assets/assets/4.0x/turntable.png": "d99bfbd621ab171e709086b7328a7075",
"assets/assets/back_nor_btn.png": "6d57e072d6582b64aed83abddc1d1f5f",
"assets/assets/comment_background.png": "e9017eb0d0369f847cc6e79e40091125",
"assets/assets/fonts/spoqa_han_sans_neo_bold.ttf": "4db68f99b1aa69d92a0366c31c384383",
"assets/assets/fonts/spoqa_han_sans_neo_light.ttf": "10959d83c4a36caa81a804df6d9c0400",
"assets/assets/fonts/spoqa_han_sans_neo_medium.ttf": "1c177bbda2f670a03abce8f15bbad484",
"assets/assets/fonts/spoqa_han_sans_neo_regular.ttf": "2118fb0c3ef472cc03c7fd589c59ae05",
"assets/assets/fonts/spoqa_han_sans_neo_thin.ttf": "4cb52f730d1f6281fac53066012c509c",
"assets/assets/icon.jpg": "b1c0b1c66ccbff20cc33f2ff9783e686",
"assets/assets/ic_baseline_circle_70.svg": "8703916dccb15f53c3686b4213c510d8",
"assets/assets/ic_baseline_delete_24.svg": "d430f8b323265a361096ae32a1789de9",
"assets/assets/ic_baseline_mail_50.svg": "b36857bdbdb42b0b4d24c1b44d8d9979",
"assets/assets/ic_baseline_play_circle_filled.svg": "15081c3a6c8d101ede1a6d12327de695",
"assets/assets/ic_menu_download.png": "79859d408ad90c37950ce3bb762a2e58",
"assets/assets/ic_menu_home.png": "cf33ea68b8ec0d0c72b1f4e7a04ccad5",
"assets/assets/ic_menu_message.png": "4f8169744078f337634a085733b5271c",
"assets/assets/ic_menu_setting.png": "c29421d792b632be2896d756bc0a634e",
"assets/assets/ic_music_player_next.svg": "9341fffd3a69d6542b68065f312df6ac",
"assets/assets/ic_music_player_pause.svg": "2ec666f6fe4e33fa797d2920c59cc1d9",
"assets/assets/ic_music_player_play.svg": "562329930489946b200ef65076b7fc6f",
"assets/assets/ic_music_player_prev.svg": "bbf65b69b09ad60ea096954f2651a07c",
"assets/assets/logo.png": "dd2b14b321d01b87bf36954c8157e67d",
"assets/assets/message.png": "9a6524bffee00a2e2735282a85c53700",
"assets/assets/n_heart.png": "67ba5e99a7de98c1703a28c1850ae869",
"assets/assets/n_symbol.png": "cef8350223f7d3f45ca695ef99934fe3",
"assets/assets/player_background.png": "ad3e88363612f22635b2f9bfdc35faf6",
"assets/assets/player_background_bar.png": "3c9cc04be29ffdb239c285b26621fe43",
"assets/assets/player_bottom_background.png": "9608c90f199b547f300c37f9397f09bc",
"assets/assets/p_comment.png": "88e6b076b4fef553a6cf150d8c7ce0e7",
"assets/assets/p_download.png": "a777578a66b72baa01205fcf797d60ac",
"assets/assets/p_forward_move.png": "c1f29634c0d284c3ff44f1c2afa29439",
"assets/assets/p_heart.png": "6660a2a84fbfca639cafcd8ebe69354f",
"assets/assets/p_next.png": "dc4c8b4f1575818e6d6944482c9811e9",
"assets/assets/p_pause.png": "f0d7a3e9a293b6cd5d31563050bb762a",
"assets/assets/p_play.png": "81a92d67f80cbc5fef607b3faebb694c",
"assets/assets/p_prev.png": "b138033c4bf4bff819c4d89a314efe05",
"assets/assets/p_prev_move.png": "0064ffd47713d3911d5a2e7d3dd43f2b",
"assets/assets/p_share.png": "edf633c75fbb8e59f3226ac1b6d173b9",
"assets/assets/p_stop.png": "6721def0d0166bc121daf7ff63f1cd1a",
"assets/assets/p_timer.png": "e633b26cc7f12e59f9f7077fa8ebc458",
"assets/assets/question.png": "d629e866cebe0d5a9e00a65835f7d7f3",
"assets/assets/radio.jpg": "1b46d449e7af6e34dcbe79d4f3055c00",
"assets/assets/Silent.wav": "8793cb2d3b37ac58575915148a88731e",
"assets/assets/stop.png": "4aa8c019a708d589e1cb6a4a79bee312",
"assets/assets/symbol.png": "268c53653bb8fd41cef39927e9ec1c00",
"assets/assets/tree.png": "97be47e37331660146de0b57f2d83ca0",
"assets/assets/turntable.png": "20395c21aaafe7c059776a83c2549d74",
"assets/assets/typewriter.jpg": "7064aaf1aa3d6ef7ebfd5dd16f14d0f5",
"assets/assets/water.jpg": "4cd8038a33c1fe6088105733389ded8b",
"assets/FontManifest.json": "3b905f4b0ae6f865f8f6a8775f503955",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/NOTICES": "953d2b1ea104651677e3838429b23e4e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "65298834518c5d1895b6821f9f8618d3",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "53006e09d38d6a0669a787f99e805f77",
"icons/Icon-192.png": "73c031f6523d8d2fce8ab23328a497df",
"icons/Icon-512.png": "fda1cbc4d5a0f37e38c31ae5bc0c568c",
"icons/Icon-maskable-192.png": "73c031f6523d8d2fce8ab23328a497df",
"icons/Icon-maskable-512.png": "fda1cbc4d5a0f37e38c31ae5bc0c568c",
"index.html": "b7c57fc81017ff3e51b2cd8c18fa4753",
"/": "b7c57fc81017ff3e51b2cd8c18fa4753",
"main.dart.js": "3c8270e970d60d850d2250bc649253f6",
"manifest.json": "1b76de46a1640df2163e0acf7154882a",
"version.json": "27dea6ed35cb77fadfa4647356cacf69"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
