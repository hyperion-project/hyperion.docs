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
    "url": "404.html",
    "revision": "58f62be1bc96c9b811a7cdbc0a66469e"
  },
  {
    "url": "assets/css/0.styles.d344bc5f.css",
    "revision": "d5ed60473868fa97630b333cdb592a07"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cf2cfa44.js",
    "revision": "69a4b5a3ef216254c657b86fe1fbfb42"
  },
  {
    "url": "assets/js/10.d1b4ec40.js",
    "revision": "4e0ffc6a54afdff082b7532f9e7a83ec"
  },
  {
    "url": "assets/js/100.8acf16f5.js",
    "revision": "6ef4f479532dcadc34ddb07e031dab07"
  },
  {
    "url": "assets/js/101.f1c0c2f0.js",
    "revision": "93cf4a6c12d581025b4a9404287088b2"
  },
  {
    "url": "assets/js/102.a5c8f8d6.js",
    "revision": "b8a3775533a13eafc2bfbd07ebce7278"
  },
  {
    "url": "assets/js/103.fd7579fb.js",
    "revision": "1012b9e464e9584c24dfea9626eb3495"
  },
  {
    "url": "assets/js/104.67f4cc23.js",
    "revision": "1f19f335b5df42601a3cb0b4b2143d8c"
  },
  {
    "url": "assets/js/105.a92b6d8a.js",
    "revision": "717b9edd2403f7da1c2f76c0b0617163"
  },
  {
    "url": "assets/js/106.1890acaa.js",
    "revision": "bae53f6e471f89b83a8b94394a18d992"
  },
  {
    "url": "assets/js/107.2bb77964.js",
    "revision": "76c1ce117283e84aa45a92d1e30b161a"
  },
  {
    "url": "assets/js/108.96b8f399.js",
    "revision": "c4e3045c7917924e73b08a6815c7eec8"
  },
  {
    "url": "assets/js/109.20b02303.js",
    "revision": "26d64bf31e0ecdd321906abdda05461d"
  },
  {
    "url": "assets/js/11.96460a75.js",
    "revision": "7acd606d5b138ede6bd8995740cc8ff0"
  },
  {
    "url": "assets/js/110.75b451eb.js",
    "revision": "fed1a190cde1de59824aafa106e23171"
  },
  {
    "url": "assets/js/111.4bdfac87.js",
    "revision": "349150efb56074b9e7e1e2f8b4a6459e"
  },
  {
    "url": "assets/js/112.c0504179.js",
    "revision": "6cac3bd77706191256300244a2d813f8"
  },
  {
    "url": "assets/js/113.963f386a.js",
    "revision": "747f2d200d93cd41465fcffd2dd5fd05"
  },
  {
    "url": "assets/js/114.27389a5a.js",
    "revision": "31175cf5e1003f40424429e884c9150a"
  },
  {
    "url": "assets/js/115.a2726fa5.js",
    "revision": "60c06dfd5f6254b05cb9c0f96f191629"
  },
  {
    "url": "assets/js/116.0236954c.js",
    "revision": "d016d9fd7077c12952d8d97636029317"
  },
  {
    "url": "assets/js/117.ae0e55ef.js",
    "revision": "7c4b079289468fc5fca70db3664f77f2"
  },
  {
    "url": "assets/js/118.9a5169d5.js",
    "revision": "e17f99f5f4c15ba2f00ec70ea9d89a99"
  },
  {
    "url": "assets/js/119.e1d422a5.js",
    "revision": "6ee3b3fffeba7300d06f76d3db43eee8"
  },
  {
    "url": "assets/js/12.0c6a787a.js",
    "revision": "b33f1f69ff68d54cc118a36955865e46"
  },
  {
    "url": "assets/js/120.7b7f5902.js",
    "revision": "dc31648159af5cc3f33d9ea839740577"
  },
  {
    "url": "assets/js/121.0d6dfe3f.js",
    "revision": "98966b4ed736871d2cab22c90991b581"
  },
  {
    "url": "assets/js/122.e1bbe976.js",
    "revision": "3af2020c4877c580da9810436076a584"
  },
  {
    "url": "assets/js/123.b4d06396.js",
    "revision": "18591b360def7822f176248072a2953d"
  },
  {
    "url": "assets/js/124.9be19df3.js",
    "revision": "4cf8e365e39d93144cbc51fef728f8b6"
  },
  {
    "url": "assets/js/125.ef9fe330.js",
    "revision": "f87a9f0ffb7a3d383f81c7041712db9a"
  },
  {
    "url": "assets/js/126.58119339.js",
    "revision": "7a8fbe4458be8c45791f5a3645b7fecb"
  },
  {
    "url": "assets/js/13.98d2b54d.js",
    "revision": "3e132dfec9e772536dd0c3a64497a863"
  },
  {
    "url": "assets/js/14.eae276b3.js",
    "revision": "ce3f59e0b1eff87b50153bc8d0dd087d"
  },
  {
    "url": "assets/js/15.492fa0bb.js",
    "revision": "8415f19308acfb9a5330726f1b33fe45"
  },
  {
    "url": "assets/js/16.668b0a46.js",
    "revision": "8cd99ea74e45ff9a9e7e0810472aeedb"
  },
  {
    "url": "assets/js/17.d8054109.js",
    "revision": "786ba9050785f5db4458daec99e832f3"
  },
  {
    "url": "assets/js/18.b6d4f54a.js",
    "revision": "f144af30f13447909ce73b257d68325a"
  },
  {
    "url": "assets/js/19.569d54d6.js",
    "revision": "373009520f36595321c361a7158ad34d"
  },
  {
    "url": "assets/js/20.745b68e9.js",
    "revision": "430441952c13ebe376b2ab856406f225"
  },
  {
    "url": "assets/js/21.3057ba6c.js",
    "revision": "0c195fe9c76e7c1dc9206110729951eb"
  },
  {
    "url": "assets/js/22.742c859b.js",
    "revision": "a8a7172934d26719c0fe7d4aebe5d14e"
  },
  {
    "url": "assets/js/23.d3c70ac6.js",
    "revision": "a6f33ce5c57c2fb6b5b7d5d84bb44e62"
  },
  {
    "url": "assets/js/24.4900486d.js",
    "revision": "2e051f2a70a11c3bcfec9c6c58089eb0"
  },
  {
    "url": "assets/js/25.8adfba91.js",
    "revision": "f324f016909b3880cfa49bf3763e1fb1"
  },
  {
    "url": "assets/js/26.7d9de2e8.js",
    "revision": "6b20f705004784bbdd1932073413048d"
  },
  {
    "url": "assets/js/27.b85fe3f0.js",
    "revision": "fa6b5b12eb1f557ef8424c6e5a377bb3"
  },
  {
    "url": "assets/js/28.958acd70.js",
    "revision": "490e0093fabfd7488895844dda179e7c"
  },
  {
    "url": "assets/js/29.149e4358.js",
    "revision": "f077e9cd398774c1aa8a0cb0c927aa2a"
  },
  {
    "url": "assets/js/3.9e3f8a03.js",
    "revision": "121e617983b5e9fb647ae182b77c59ac"
  },
  {
    "url": "assets/js/30.d95da59c.js",
    "revision": "4a041fae89e9e8792f1d5acaa6c21440"
  },
  {
    "url": "assets/js/31.f303259a.js",
    "revision": "29327adc94c3f141f038deee7921aa7d"
  },
  {
    "url": "assets/js/32.64e2e55c.js",
    "revision": "35114003b36d2c8aaba1c99af06f0783"
  },
  {
    "url": "assets/js/33.82340cb3.js",
    "revision": "bf355e3416fb06f4ac9459639245cb0e"
  },
  {
    "url": "assets/js/34.5f53e034.js",
    "revision": "c7f27a4e5b74e15f0673ecfd2274cc5f"
  },
  {
    "url": "assets/js/35.837845d1.js",
    "revision": "eaee43eaa1134ae48769d292b3e49b0f"
  },
  {
    "url": "assets/js/36.6d7383b3.js",
    "revision": "9d1c71958f736fd456684b0ed8796c4b"
  },
  {
    "url": "assets/js/37.ba3e6c0c.js",
    "revision": "dad597a28fce8c314b4c17e9c83614ee"
  },
  {
    "url": "assets/js/38.371eea4a.js",
    "revision": "4f4e54cc4108500c52d0371930ca2e72"
  },
  {
    "url": "assets/js/39.8400a615.js",
    "revision": "7f669b45679b1c74a37ce820d1fb0144"
  },
  {
    "url": "assets/js/4.c6fede29.js",
    "revision": "eb03b23e670e3dbd2deca33f521b8fa4"
  },
  {
    "url": "assets/js/40.29f556c1.js",
    "revision": "58867af7cf3bbea9ef04f1361b30c174"
  },
  {
    "url": "assets/js/41.6b19cebe.js",
    "revision": "65fc8c36f8c50dd76dcdf381096df1d9"
  },
  {
    "url": "assets/js/42.a8861550.js",
    "revision": "e14330018c16c0cd746d8e2b781eea27"
  },
  {
    "url": "assets/js/43.f624b609.js",
    "revision": "042efe06fd754664749f3dfc8eb11e45"
  },
  {
    "url": "assets/js/44.dcf18fbd.js",
    "revision": "79b948ee6d3c577bae09f4fb5aa75f24"
  },
  {
    "url": "assets/js/45.91db682c.js",
    "revision": "95a837795b4d28639152f2fd8fa3adfc"
  },
  {
    "url": "assets/js/46.05926b30.js",
    "revision": "b98f217577c3a5ba153ff985810ee900"
  },
  {
    "url": "assets/js/47.a16d9ce7.js",
    "revision": "37494abe409c0d7adce33770b72cb76d"
  },
  {
    "url": "assets/js/48.77216f71.js",
    "revision": "881bdf0b01bbe6bce704b7b80309e6dd"
  },
  {
    "url": "assets/js/49.3aa9a27b.js",
    "revision": "c7aeb9e71d2f0bf4f1f63cfc29a90a9c"
  },
  {
    "url": "assets/js/5.ca43668d.js",
    "revision": "def00f6fd90c28c4cc6121f9ceb3f990"
  },
  {
    "url": "assets/js/50.be90d66d.js",
    "revision": "e11aad7439fd821627dc652edbaea795"
  },
  {
    "url": "assets/js/51.a074d933.js",
    "revision": "33b335c50327c39c07f42a92c9ae33ef"
  },
  {
    "url": "assets/js/52.d7d214b4.js",
    "revision": "4f90a0a5d4664562c25517b7c078c408"
  },
  {
    "url": "assets/js/53.2868cca4.js",
    "revision": "dd48e17340a44ed245197e5e7952a340"
  },
  {
    "url": "assets/js/54.390d0b12.js",
    "revision": "674feff79c99f9242fcad6179434301f"
  },
  {
    "url": "assets/js/55.8e2b92b7.js",
    "revision": "b3b3df6b6928134d4c67b3f47608e677"
  },
  {
    "url": "assets/js/56.974b2aa3.js",
    "revision": "75cca3ebf33679eda1da4e0b3ec2b2aa"
  },
  {
    "url": "assets/js/57.d44f5815.js",
    "revision": "3b841dcf95ebf99cc464dc736ca202d4"
  },
  {
    "url": "assets/js/58.cc7eaa70.js",
    "revision": "f5d02e0b5f03625ead8a66c618668454"
  },
  {
    "url": "assets/js/59.754567c8.js",
    "revision": "01230e4f5c6a4c341387763edd92feff"
  },
  {
    "url": "assets/js/6.9533f68a.js",
    "revision": "ee0df390b169f414cd5aca994507c7f3"
  },
  {
    "url": "assets/js/60.0c2d81e0.js",
    "revision": "b45003ca4cf6dd167a869322c33bf228"
  },
  {
    "url": "assets/js/61.8b38697e.js",
    "revision": "37803b6908f3d0315586e5d267b5cd7c"
  },
  {
    "url": "assets/js/62.60d77761.js",
    "revision": "370afb53b6d21a7f54e9cfeb2acd47af"
  },
  {
    "url": "assets/js/63.3cfd5f05.js",
    "revision": "41530ff34c12b674de44bc851bf02933"
  },
  {
    "url": "assets/js/64.58c87bd6.js",
    "revision": "1faef45425031fa513e88ec5c442b6cc"
  },
  {
    "url": "assets/js/65.a9621c03.js",
    "revision": "fb917b8fc994cddc5013ee6a7d639672"
  },
  {
    "url": "assets/js/66.726a84f9.js",
    "revision": "09e4cab24c1861ed408d2053ee631a5e"
  },
  {
    "url": "assets/js/67.05a71d87.js",
    "revision": "5e602f1f149b0736a23f805dfdbe5bb3"
  },
  {
    "url": "assets/js/68.3dd4aed0.js",
    "revision": "d6e5c6200f4264346adf1a527d5be390"
  },
  {
    "url": "assets/js/69.1c0a6b69.js",
    "revision": "3f6dab00e22802e4b2dd77fa0d9533d3"
  },
  {
    "url": "assets/js/7.0592d7c8.js",
    "revision": "f2182d5819125a7cb8f3bf0e3bc2e5ac"
  },
  {
    "url": "assets/js/70.c359df4e.js",
    "revision": "bfd5c2bbbae1ccd9c01e91b664119ac1"
  },
  {
    "url": "assets/js/71.9e962e40.js",
    "revision": "2bd81c37998e03bf8d8b38d576670481"
  },
  {
    "url": "assets/js/72.99671044.js",
    "revision": "b990623c51ef1297cb43d08c12547f9d"
  },
  {
    "url": "assets/js/73.cf40c4f9.js",
    "revision": "79378370de70696f4f3a2ae35db60e83"
  },
  {
    "url": "assets/js/74.281bca61.js",
    "revision": "318b01d7eb95f81d5c39c5ed213aa46d"
  },
  {
    "url": "assets/js/75.1df6307c.js",
    "revision": "8df90b3cf01edb3859f72a970aed6a17"
  },
  {
    "url": "assets/js/76.87c59293.js",
    "revision": "7372572a8702e59be0e3ce6e5be505c1"
  },
  {
    "url": "assets/js/77.23484f75.js",
    "revision": "0b59c7b5339fb1044a7731ef08ed511f"
  },
  {
    "url": "assets/js/78.7f6ee3e5.js",
    "revision": "73bbb0c17cbdf11bf53d45d7d7c38dd9"
  },
  {
    "url": "assets/js/79.5067b881.js",
    "revision": "3eb690a3b8198f3b2002ce89ae926943"
  },
  {
    "url": "assets/js/8.502455a4.js",
    "revision": "cb8469e7ed338f58104d85703a6e386e"
  },
  {
    "url": "assets/js/80.ea48d64e.js",
    "revision": "10d5750db70b857b0c36f6299f8ae518"
  },
  {
    "url": "assets/js/81.5555a146.js",
    "revision": "fc448380b7a1bdc6d29229bb5a7b967c"
  },
  {
    "url": "assets/js/82.6139b055.js",
    "revision": "ea095d6aeb1bd57d07c94b0cd93997ca"
  },
  {
    "url": "assets/js/83.d0df7530.js",
    "revision": "a7369b25b957a51af3899dbd81f3e210"
  },
  {
    "url": "assets/js/84.9f7fe12a.js",
    "revision": "ee46f4bade70205c22fceb71dab3bb30"
  },
  {
    "url": "assets/js/85.e056b440.js",
    "revision": "880b0a63384235a3300183469f764db3"
  },
  {
    "url": "assets/js/86.bd60ad86.js",
    "revision": "853c8f1d1a8f03548b1bc976a30f67c3"
  },
  {
    "url": "assets/js/87.49cc33e0.js",
    "revision": "21b8147b5f4de3bdb857ffa781eb8877"
  },
  {
    "url": "assets/js/88.ca02ceb7.js",
    "revision": "d7f39af79d99acc68ada47682ace0798"
  },
  {
    "url": "assets/js/89.686751a9.js",
    "revision": "e089d94d3066b89003cab7fa00507121"
  },
  {
    "url": "assets/js/9.da32c103.js",
    "revision": "d9a0d0a170200759578917f5c55b1e15"
  },
  {
    "url": "assets/js/90.e1ca375a.js",
    "revision": "2dd072f365a55175b594ad0bc26ea595"
  },
  {
    "url": "assets/js/91.decec9c9.js",
    "revision": "dcccc60dc3f39a4a5da1323be7e0c4af"
  },
  {
    "url": "assets/js/92.ccdae856.js",
    "revision": "90ba645a3a519622a006858e5c3aa84b"
  },
  {
    "url": "assets/js/93.b411f081.js",
    "revision": "bee54c0f28cc671a74b138df48c0a33d"
  },
  {
    "url": "assets/js/94.db1878ce.js",
    "revision": "ed72cbcff31bcfa6f0a72ce56f70d652"
  },
  {
    "url": "assets/js/95.31d511a7.js",
    "revision": "d667025e69fe56db6c9730b48dc0663a"
  },
  {
    "url": "assets/js/96.057e62b3.js",
    "revision": "3dbb50edd9fa74a15a4788f00e53dcb3"
  },
  {
    "url": "assets/js/97.f8beb2ea.js",
    "revision": "3f55c3c0f303d459f240b96c05933e60"
  },
  {
    "url": "assets/js/98.3917990e.js",
    "revision": "9462751ea1b0f514d6560538de6a7d55"
  },
  {
    "url": "assets/js/99.60d74d2f.js",
    "revision": "b0e9f394df4671c438808420ca5b0139"
  },
  {
    "url": "assets/js/app.8c897fb6.js",
    "revision": "5cca3b56b0b12a32cf12dfa46e4e05ad"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "67bac3617ca10cc6f540d71c6cad548d"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "64d8720df8b9886b7f2536036bad0521"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "141d7c634823224608117c1ce705f640"
  },
  {
    "url": "de/effects/API.html",
    "revision": "bdde61d8b4c559bdf0d966ffd69949d8"
  },
  {
    "url": "de/effects/index.html",
    "revision": "3300dfe207e1c54853bb3d2808b4426a"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "b83a8b2ce688da9b2a0a2e9b27b742ca"
  },
  {
    "url": "de/index.html",
    "revision": "bcf4ef46fc5da0604e65d40d3d669293"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "e221bdcfe45d287fa2bf77df65c36d6f"
  },
  {
    "url": "de/json/Control.html",
    "revision": "8fe0380420e6630842a2ec627fe8be17"
  },
  {
    "url": "de/json/index.html",
    "revision": "a9e38b38f2dc5698354e11d82eaaa928"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "80a158ccb0f3a5ccafc8ce2122882ac1"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "a5f60dcd2e9774f97ed8a5b780a45c84"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "39846fae9498925331460e8672e1d54a"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "fea22454290a8e45fb9036719d5f164e"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "8900749257b2139bf40847de97f4e8d5"
  },
  {
    "url": "de/user/index.html",
    "revision": "7b6fccf0249e02c331bb72e41960b0b6"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "a7f1135b8a04ffa7be1a872b4902d660"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "e1baa6c7e627761a5d8f62a56636b75f"
  },
  {
    "url": "de/user/leddevices/gpio/piblaster.html",
    "revision": "625c2d1d5ecd645ed7e2b8ea16874913"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "957dfdb8d9a92e42caffa03c85c2970c"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "14ebe0e9c1adb13b1caef10e08078c36"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "e727e26bfbbcb8b23f6637a713254cad"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "e1062a871bb98921e192cd3feaafc320"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "bced7855798cfa5146f7b3845b5b7589"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "8cbac00d5b3140de43280d9e69932f0c"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "5f9565000716a76a71622e5065805fd4"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "3e1c2bb04c5dee030debb6e0518017ab"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "2c38778ae8f2ec743070ea0c3028124f"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "3655f38f84072e715a4a69a156bc342f"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "7994953fff913ea0f2c45a6008a021e9"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "b212c36c5d0cfd2cfc25634b79177aa1"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "5d52a84a884f3316046c98dd43858ac9"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "1768f72a24dedd4234e1c5e15c3ac76b"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "64d7d71a3aaa9b6fea9d8728043c184a"
  },
  {
    "url": "de/user/leddevices/spi/apa102.html",
    "revision": "6adc1cea940fdc7f05f512e6703c1a1d"
  },
  {
    "url": "de/user/leddevices/spi/apa104.html",
    "revision": "78bd1b5f6acd846e25a17b27e9613d2e"
  },
  {
    "url": "de/user/leddevices/spi/lpd6803.html",
    "revision": "eb88bcdcada116a42cbc8faf2623f29f"
  },
  {
    "url": "de/user/leddevices/spi/lpd8806.html",
    "revision": "ae88e1750f680043851e705fecafb40e"
  },
  {
    "url": "de/user/leddevices/spi/p9813.html",
    "revision": "f8bed53a88341b9272c76e72e191d628"
  },
  {
    "url": "de/user/leddevices/spi/sk6812.html",
    "revision": "1291387592ceb45455704f74b999402a"
  },
  {
    "url": "de/user/leddevices/spi/sk6822.html",
    "revision": "0175b13a68fd30ed86bda547dce8be6b"
  },
  {
    "url": "de/user/leddevices/spi/sk9822.html",
    "revision": "af6ad43b55861b679bffaea4a4566ff3"
  },
  {
    "url": "de/user/leddevices/spi/ws2801.html",
    "revision": "4498b6e5a87fb038ce105e6b62521adb"
  },
  {
    "url": "de/user/leddevices/spi/ws2812.html",
    "revision": "02e729421c7aa062218838972a167cc2"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "df09948656f53e257233a99e2f9589f9"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "3507ce5cad4c6bb87304833a71687377"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "94d90303025c66d03661dedd908723bd"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "f6a8809618f48666c4fcd120037e42cd"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "f887b6dc211ced35318a3db9f6b8621c"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "e910bc3920806e0f41c8a17a6a38f823"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "5dac05726b83a5a29e57675b8bd96290"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "57699b4a81f2afe64b30fc46efb54933"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "3c410cc9212cb7dc438011b55cbafb0f"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "80a9feacf47154e812a109009327a7db"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "639df3ca1aabfe36fc354bfe13804014"
  },
  {
    "url": "en/addons/API.html",
    "revision": "37beb1380f8c15e5a0850a5762f93148"
  },
  {
    "url": "en/addons/index.html",
    "revision": "759d63e6e057daa1e64d1b6d1924af77"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "b6de2e83690c82096bfa0ea423a32de7"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "5282ca8cfc4106258438af043bcfdbdb"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "d2ea08393843f8c6532db15a18167a2b"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "b63bf1630359a7540894ed72c54e79fc"
  },
  {
    "url": "en/effects/API.html",
    "revision": "a9017a2c418e31d3799d788b65a81d71"
  },
  {
    "url": "en/effects/index.html",
    "revision": "2c4b22d159bfd000b0b654c4bda95000"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "5691f7a5c7f352e7bb50a9a3f994cb66"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "500f0ec4a6c52cf214446f8a9a22daea"
  },
  {
    "url": "en/json/Control.html",
    "revision": "574485664e32b1357597a22472ec2449"
  },
  {
    "url": "en/json/index.html",
    "revision": "b328dd6f08e82ae72f40389d98bb8c83"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "551993c771bded61e0159333a7000e63"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "1725f79220fc4cde77bdc29a90756220"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "7658d04cec45929d64696eba2938e99d"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "6de80202e5a3f162abc9d0b548ecb1c5"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "dd8da446ef113dcf6b50152369ec3d33"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "aa967d1a9cb2b09efc87431135cd1608"
  },
  {
    "url": "en/user/index.html",
    "revision": "f3b25d3e4d7603ed226727cd0af7cd29"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "abd2f68c40893f7ad7325ef662536c9a"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "34e16e9c2bcdb975211dce6825ff88b1"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "a47f3b5ac1b61d8b1e4f33a1b7b9c393"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "d19bcf0dd9aad69bc1d9b23e4c259332"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "d9dd8d6ebd76719629f16b2de76273d8"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "9d0c8da4d3539a0540e218d30a8ee07a"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "b264b1823a1457913112f615cc774a7a"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "a2c5f74f574187765eca6ee0586648d1"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "f62036a9061ff9bb8335b91a24985de6"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "b2054f1902cc559f1d93bc6c78208305"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "b43a3bde1f809ff84e6070f492df65bb"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "c11da10b798685c323336baa02625465"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "bef4aee1a91ff06df3ba61c1505dc4e9"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "12e44128ed04d3494b8c9379c5fd8446"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "72b153c3df840e45b86a66022bb21b22"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "a59e74c5eae6057fdde3d63cb3646249"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "f4c2edb3b0c197aa0361939b3df18e09"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "586e561bbd758e2c4c173fe56128ce3c"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "e295e56af5bf6e5f97c3a483ec39384e"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "ea26dd263bc9e1279daf36a68b3f7049"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "9e11be0bba801b654de2c6096cce52b1"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "3c23ec68c3710630d0b67d36ca8e773f"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "f19a9795daeb53e9458131555d204b18"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "053f73d980724b15beb368c027e3b4d1"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "2ffb12f1b708edc7f0b6151ac6b89004"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "3c140b42dea4cee91edb247c2fb84d37"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "873acabda80002c8027683efd1d97df7"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "8f34ebf30b8089acbb225318035fbef5"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "95b11f2848e0e3e5688767a78f7eead0"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "97a24f5364a43bae3734cd6e4ce8ad16"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "d4dce8996126e35e9772446dd0ddf456"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "c51426938b0669e279b82b044d144c25"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "d5b6b2175dce640beecc45c4ce0e745a"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "c5820d5bac3cfbf7eebcbf7612e8b871"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "292472d08076608ccb9b9e4177b2682a"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "906cec792a291a0471fbcb713dca7f03"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "c740471cf675b92fdf3fc6baaec2b02e"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "110724ee02d3f69d39b21248ce65a6d8"
  },
  {
    "url": "hyperion_logo_dark_dynamic.png",
    "revision": "5144c189e57bc6ebcc2e9c242a6d88cd"
  },
  {
    "url": "hyperion_logo_dark_static.png",
    "revision": "002fd7f8af81855feddb69dc92febb0c"
  },
  {
    "url": "hyperion_logo_light_dynamic.png",
    "revision": "a1d006af8975d2f83de583d8f779b34d"
  },
  {
    "url": "hyperion_logo_light_static.png",
    "revision": "2812c09870a7a84dea88b57776bdfa70"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "5e1e9bb3baacce6670406f1d42bb7177"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "2a78e0cc6a0296e2f453358d2c4d86ca"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "4537db323d098e6ec9186345c62bc594"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "65e328eb3ac563c40fff352eac1ebe31"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "7c76bb2da1bf063068e4c73459b614cd"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "61d0bb9cde264e1b1dd963971df55bd2"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "a4415665e9bd2bfef4c81a56f7253e9b"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "e5f187adff88099d65cda39d4d370d6c"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "98e31d8ccaab2bd0376f9e66dd0c781b"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "62f2562ec45458d562cfbdc7ce49b83b"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "59cf420a057b00ffbc4299c902e30297"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "06935b9d3118d6a165bee1b28b3e9944"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "65ddce5962aebe47ff1fafabced21b4e"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "fd9d1e7433a0d6a243504f84bf528760"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "1f67931e9f8f5859f0a326de9695f996"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "41d819752d98a5e8f8ca8a79a20ea095"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "a0d026eea3e0e0236872028561624c86"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e85956a895cea454c0361a867df96b2a"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "d024af605d3ba562f86c5c6c29720a4d"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "4310df837ffb78ac982eb4151309d70a"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "c8e09f3c73e3a914bae1a3d00ad2c090"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "203f32e2af95629ffe0e4afb07638326"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "43cb3b7a8ba9e081827c249e969692f0"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "cffb030240897a3ffe9df38694205c23"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "a87900de9189b99f164b409015f24d05"
  },
  {
    "url": "images/de/http_jsonrpc.jpg",
    "revision": "2d708be5aad53591bc698927dc05b07f"
  },
  {
    "url": "images/de/user_config_access.jpg",
    "revision": "27c7d7dba632794776545806cf9d7e9b"
  },
  {
    "url": "images/de/user_config_dash.jpg",
    "revision": "468c185add1eb90989e1f749009b5be5"
  },
  {
    "url": "images/de/user_config_lang.jpg",
    "revision": "e96abe0016d26e8c156969a5161b57fa"
  },
  {
    "url": "images/de/user_hyperbian_new_text_file.png",
    "revision": "4e52ac429ed7637e17d677090e0e76a1"
  },
  {
    "url": "images/de/user_hyperbian_rename_to_wpa_supplicant.png",
    "revision": "c8149ed94b1dad896d56f42423d13753"
  },
  {
    "url": "images/de/user_hyperbian_ssh_file.png",
    "revision": "1ffe78064787a7c8837d7ae9047f420e"
  },
  {
    "url": "images/de/user_hyperbian_wpa_supplicant_content.png",
    "revision": "2cd80d00ffba45334089956da663c74e"
  },
  {
    "url": "images/de/user_ledlayout3.jpg",
    "revision": "74ed7256f5679c12c068ff5135758bf0"
  },
  {
    "url": "images/en/avahi-browse.jpg",
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "7cf6e7293af8779f6bcf12f86e34bb6b"
  },
  {
    "url": "images/en/owneff_1.jpg",
    "revision": "42df0877dec353c8928386585e8b29b5"
  },
  {
    "url": "images/en/owneff_2.jpg",
    "revision": "95b8085101c2786b888e4ed29482dac5"
  },
  {
    "url": "images/en/owneff_3.gif",
    "revision": "94cd6cf07479827a49482b8c66fb66d8"
  },
  {
    "url": "images/en/owneff_4.gif",
    "revision": "86b86b1d3c2fb754c6c9b2ead9ea43a0"
  },
  {
    "url": "images/en/user_bbmodes.jpg",
    "revision": "e9c2447c1192cb239ba701ae90144624"
  },
  {
    "url": "images/en/user_config_access.jpg",
    "revision": "97deff23547985f04788bb02002ff21c"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "a7cc7eab24985ec1ff9eed4039e7d7c0"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "a2e03ebed148ab935371059e38925326"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
  },
  {
    "url": "images/en/user_hyperbian_ssh.jpg",
    "revision": "294a39092c04a7880011cfd796e3b194"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli1.jpg",
    "revision": "0c8f576283244a8e8eb5ec01d9b4c3ae"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli2.jpg",
    "revision": "928f049e2b9e69a159be4a9bd54d4bc4"
  },
  {
    "url": "images/en/user_hyperbian_wpa_suppli3.jpg",
    "revision": "4dfa192aac47e5fc899d5b47434ed036"
  },
  {
    "url": "images/en/user_ledlayout.jpg",
    "revision": "2815e5ab254a09a7c24af33d169c0e66"
  },
  {
    "url": "images/en/user_ledlayout1.jpg",
    "revision": "6da17c4ff33ca70b66709f4d924ae865"
  },
  {
    "url": "images/en/user_ledlayout2.jpg",
    "revision": "fa9d66601d016ac2ed520b93eff35bee"
  },
  {
    "url": "images/en/user_ledlayout3.jpg",
    "revision": "c5f22ed1186b14a06b3aa1ce17420f86"
  },
  {
    "url": "index.html",
    "revision": "413f607c3fcf1e1be4dd2146d508375e"
  },
  {
    "url": "not_found_dark.png",
    "revision": "b3c830790f3ca0106f3abf45ce34f5bb"
  },
  {
    "url": "not_found_light.png",
    "revision": "b7ff198048be214b3c0dcc864a215ebd"
  }
].concat(self.__precacheManifest || []);
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
