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
    "revision": "3916c265cd872acbb95ea1ee59b3ccb4"
  },
  {
    "url": "assets/css/0.styles.dc8d652a.css",
    "revision": "413f24e6128c52e6cb5d20b4e9e400cc"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.0d3d5260.js",
    "revision": "bda9049b5237f6f27680829aab6485fd"
  },
  {
    "url": "assets/js/100.38a3ba89.js",
    "revision": "f9cb7ea98c6cf347ea519a923c760044"
  },
  {
    "url": "assets/js/101.0477a630.js",
    "revision": "68bbc20a828146d88feefd54255c50cb"
  },
  {
    "url": "assets/js/102.531e2760.js",
    "revision": "02a17c3180113300f5ea19c6fe456670"
  },
  {
    "url": "assets/js/103.22628983.js",
    "revision": "6025440f25bad28a58d7b278eb050826"
  },
  {
    "url": "assets/js/104.eaba3516.js",
    "revision": "b5d0807be79b40698e5236108588746a"
  },
  {
    "url": "assets/js/105.5e503717.js",
    "revision": "e05eff2d3a1388f34c73c85354133515"
  },
  {
    "url": "assets/js/106.664b35aa.js",
    "revision": "46df59a4c1b10177425434be65c30227"
  },
  {
    "url": "assets/js/107.e35d797e.js",
    "revision": "9ca728ec57d3f23554c6f4614a37e397"
  },
  {
    "url": "assets/js/108.dca9e049.js",
    "revision": "c6a2256ef765b1070f16be0aef494f6d"
  },
  {
    "url": "assets/js/109.1af9b7df.js",
    "revision": "9cfe11f1236644d34492f39d1eae1bd5"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.b9114ce0.js",
    "revision": "c0e62f0970ec23cedaff68526faa3dee"
  },
  {
    "url": "assets/js/111.861388f3.js",
    "revision": "059617ecddbef799c2b49c43ea585116"
  },
  {
    "url": "assets/js/112.32e56e1b.js",
    "revision": "a660f8ace37c5a535cf94b990994297c"
  },
  {
    "url": "assets/js/113.93a83603.js",
    "revision": "2703d210d1383978c53b2ae72c1824c2"
  },
  {
    "url": "assets/js/114.e465e64c.js",
    "revision": "b395fe58021906e234ddf4abdf4b17a1"
  },
  {
    "url": "assets/js/115.dba8ebf9.js",
    "revision": "b9af6e65cead75ff13e6148296d74fce"
  },
  {
    "url": "assets/js/116.cc393ac3.js",
    "revision": "1b6984e315679896f44bb8ee5a1360ef"
  },
  {
    "url": "assets/js/117.a528cd3f.js",
    "revision": "9b014b2bdc6a99ec5719d55960e1eaa3"
  },
  {
    "url": "assets/js/118.cf7e7c10.js",
    "revision": "7a21631df5c6cc56e49f97b20537bd6b"
  },
  {
    "url": "assets/js/119.70b10f1e.js",
    "revision": "dd4d733c0da0a0c09e8135fb52239dc8"
  },
  {
    "url": "assets/js/12.a1977597.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.4e927361.js",
    "revision": "b6f509b8f3594c4563bfffaf8dbdc624"
  },
  {
    "url": "assets/js/121.1b173c9b.js",
    "revision": "43dfaded90b0889dcd3040799a0583be"
  },
  {
    "url": "assets/js/122.e79b78c4.js",
    "revision": "78aa57b035c744c187421fd80e492325"
  },
  {
    "url": "assets/js/123.cec04655.js",
    "revision": "3f43c5b4a727d7f80c522a7bd33a3637"
  },
  {
    "url": "assets/js/124.e843dd6a.js",
    "revision": "1d145367bdc0dad977cabc3faf561811"
  },
  {
    "url": "assets/js/125.de28805e.js",
    "revision": "c289326463f91a9192f6b7283292ec53"
  },
  {
    "url": "assets/js/126.aaa8c1a7.js",
    "revision": "aefcb3f135647f77353a8e0f89e5ffcd"
  },
  {
    "url": "assets/js/127.38be77bd.js",
    "revision": "084812f4973aa65fe11d76ded409bf05"
  },
  {
    "url": "assets/js/128.48054a37.js",
    "revision": "b3d00a2c682d49474dc37510d9a73cb7"
  },
  {
    "url": "assets/js/129.d5701ca1.js",
    "revision": "d74a9335276a2bbc40b1c0467443918f"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.eb007bce.js",
    "revision": "8ab3e13c0d54c3a73632a1dd84c35979"
  },
  {
    "url": "assets/js/131.b8910f04.js",
    "revision": "de7bf6bb8b3cc8a633b62c2865b629d0"
  },
  {
    "url": "assets/js/132.e16621e8.js",
    "revision": "62da42cf73f6771f0a2821a4da1739ff"
  },
  {
    "url": "assets/js/133.c61a8585.js",
    "revision": "0583d407b13d85cdd805f2f1d751d7b7"
  },
  {
    "url": "assets/js/134.9ef0b17b.js",
    "revision": "5e568d7190219cd983a1a042113fea45"
  },
  {
    "url": "assets/js/135.2401e302.js",
    "revision": "41620ef526f27a7ed76ed71f2735696c"
  },
  {
    "url": "assets/js/136.25d6a060.js",
    "revision": "4dbfd981da371f38e6bf44eb6f31a304"
  },
  {
    "url": "assets/js/137.2b40ac03.js",
    "revision": "6449222f0d07a780c4b9be7b83b3853b"
  },
  {
    "url": "assets/js/138.8074d205.js",
    "revision": "b1feece61af954d9e6e81fac51a76961"
  },
  {
    "url": "assets/js/139.63145d62.js",
    "revision": "05d0beb1ebbb09279c886342115115e9"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.e121669d.js",
    "revision": "24f0097094f3f91109a2c9f6b7a88ecf"
  },
  {
    "url": "assets/js/141.fe9581e1.js",
    "revision": "be45c13b29666235502183ba9f602488"
  },
  {
    "url": "assets/js/142.ed6f5f0c.js",
    "revision": "d04f21b88472e774cc3e094f3ff3c106"
  },
  {
    "url": "assets/js/143.88b2643d.js",
    "revision": "ade0886e7cf0b2a5edebc818fc3c8d46"
  },
  {
    "url": "assets/js/144.7599212f.js",
    "revision": "2d576ac14a3740af9a72749a7c78c5a6"
  },
  {
    "url": "assets/js/145.162f3ea3.js",
    "revision": "dce400792260ff8ffdc5984023939067"
  },
  {
    "url": "assets/js/146.41171260.js",
    "revision": "3904b023c83f49a5bb33490fa24e50ce"
  },
  {
    "url": "assets/js/147.ec43a175.js",
    "revision": "bdda07a84c7bccf339eadf2f20ac9bc6"
  },
  {
    "url": "assets/js/15.4c6dab87.js",
    "revision": "42e5ce7d06d84f7c85989bb84bca278a"
  },
  {
    "url": "assets/js/16.d689d1cb.js",
    "revision": "4e86f262e5fc39ded341cc2cb0378a88"
  },
  {
    "url": "assets/js/17.454e9eb6.js",
    "revision": "b33f02408d4d88dbbc861273a7374892"
  },
  {
    "url": "assets/js/18.6eb75d69.js",
    "revision": "175a508f8e06f3cbb9c0432a470d46f6"
  },
  {
    "url": "assets/js/19.535f1364.js",
    "revision": "aef9ec991977f0bca74565fb9af55a90"
  },
  {
    "url": "assets/js/2.891cdfc8.js",
    "revision": "5a79306a00f6ca5ca89a01aa3fd20e25"
  },
  {
    "url": "assets/js/20.8788c91c.js",
    "revision": "6cff35e907109f3521737af4c94431bb"
  },
  {
    "url": "assets/js/21.b5d953da.js",
    "revision": "25634b02eae0dd123d18c58151a202d3"
  },
  {
    "url": "assets/js/22.2011f33a.js",
    "revision": "fc44d1bcc9da025f3d9f57cdc948137b"
  },
  {
    "url": "assets/js/23.c7b9dc15.js",
    "revision": "d3bbc7749c4d0a8debb40baa0ae56ec7"
  },
  {
    "url": "assets/js/24.a3adf2bb.js",
    "revision": "a31b765dff7392fe65d6f234a1954d01"
  },
  {
    "url": "assets/js/25.d5aae36b.js",
    "revision": "5bed89367233b7aaf0cc78f1d9eff06b"
  },
  {
    "url": "assets/js/26.633988bf.js",
    "revision": "47a76888d627d9281e40b77782bcb790"
  },
  {
    "url": "assets/js/27.3abe878d.js",
    "revision": "b8ef80513f0cdf53f8099d34e6c77a5a"
  },
  {
    "url": "assets/js/28.434a15a9.js",
    "revision": "837272e4be072b367c882fbeeefd4bd1"
  },
  {
    "url": "assets/js/29.e038ad80.js",
    "revision": "6735aae932896bba168fc6f0e7df2ee1"
  },
  {
    "url": "assets/js/3.2e6760cf.js",
    "revision": "33046f8a23f72d55f6176f6c5a0ea2cb"
  },
  {
    "url": "assets/js/30.d59b8d76.js",
    "revision": "347542cfe826ed473dc84ce1b20d6e63"
  },
  {
    "url": "assets/js/31.4957c686.js",
    "revision": "ccc36f74415f88805edd33aa08d16b47"
  },
  {
    "url": "assets/js/32.2257b181.js",
    "revision": "a29ec65c39cd456de2b131c40a470411"
  },
  {
    "url": "assets/js/33.bfa937e0.js",
    "revision": "54ebf78f5de12959a0d7159f4def4f70"
  },
  {
    "url": "assets/js/34.82f9add0.js",
    "revision": "f92e11f1ce674c12a051d59c1d8db65f"
  },
  {
    "url": "assets/js/35.fe3369a4.js",
    "revision": "3579f85f9541d07aba6062165e5081fa"
  },
  {
    "url": "assets/js/36.53a553c6.js",
    "revision": "1a3d4c451794b16f5623c9d3d35e29a3"
  },
  {
    "url": "assets/js/37.411390b6.js",
    "revision": "97d2321ae6d7fbd8a1ebe71985dcfa78"
  },
  {
    "url": "assets/js/38.7287fbc6.js",
    "revision": "a126189eb421cbc42ba880affcbd29fd"
  },
  {
    "url": "assets/js/39.4f663b93.js",
    "revision": "e1261ed93fc92de3ba179b77ee217fec"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.751a776e.js",
    "revision": "570e0178919c13eb19fa2d9996450de3"
  },
  {
    "url": "assets/js/41.3f0c8648.js",
    "revision": "86cdf38feaf906928df815d19f11f7c7"
  },
  {
    "url": "assets/js/42.e6c200b8.js",
    "revision": "2a2836c987f49dd71f18ad1b5d1b2079"
  },
  {
    "url": "assets/js/43.5bbeae75.js",
    "revision": "0bb2d0a7e1f21a76abbffcb0fbdf13fa"
  },
  {
    "url": "assets/js/44.6afb74f3.js",
    "revision": "de0d89dd0860a18690ac9206bc3cafbd"
  },
  {
    "url": "assets/js/45.9d591a9d.js",
    "revision": "3e3a9e1d30dd08c95b4d9aaa965a6f41"
  },
  {
    "url": "assets/js/46.7729bef4.js",
    "revision": "6ea87152c50c3d14b455889c8e31dd9c"
  },
  {
    "url": "assets/js/47.6d93cfac.js",
    "revision": "b1c5778bab3286b263068f48ef13f113"
  },
  {
    "url": "assets/js/48.6c2349a4.js",
    "revision": "92513f31fb4b3fe7ce2e2ab7bc76e72f"
  },
  {
    "url": "assets/js/49.bfa02339.js",
    "revision": "ef82bc0a2de2dd0294b47b442f704ccd"
  },
  {
    "url": "assets/js/5.c5dd80f4.js",
    "revision": "984ac949fd48b7c93ad012b421291789"
  },
  {
    "url": "assets/js/50.23aebe8f.js",
    "revision": "3efab6a47dddb7994cfa571b8db9b33b"
  },
  {
    "url": "assets/js/51.606ec088.js",
    "revision": "32157950d20f8c4c2bd47433c4d0ce19"
  },
  {
    "url": "assets/js/52.49df76bb.js",
    "revision": "1db9bbd62fca5099e9c60b125349450f"
  },
  {
    "url": "assets/js/53.bd4f7f46.js",
    "revision": "b1d55e4493c1d90f0d87d1127fbdfc65"
  },
  {
    "url": "assets/js/54.81564ccc.js",
    "revision": "a96b56ed0180964f60d50cbafff7c510"
  },
  {
    "url": "assets/js/55.449d5e08.js",
    "revision": "5c7fb6843c25aefa08b3fa62705555c8"
  },
  {
    "url": "assets/js/56.725f03ab.js",
    "revision": "4129c671247d930d9c0ea7a0f5d52616"
  },
  {
    "url": "assets/js/57.7ad968dd.js",
    "revision": "58cc3d145e2bb7c8768d25beb2502049"
  },
  {
    "url": "assets/js/58.71ae5d77.js",
    "revision": "44f1fc5237011c9a4c2bd51b4d72139c"
  },
  {
    "url": "assets/js/59.ba81af7e.js",
    "revision": "5b64474efdfd491cd7d08571dcc3e41c"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.03942a7d.js",
    "revision": "ff01469f2e89eca6fe42d7613fdf747a"
  },
  {
    "url": "assets/js/61.78610fce.js",
    "revision": "183274c3e67b9024066ee86552d79ee4"
  },
  {
    "url": "assets/js/62.3bdbcbb8.js",
    "revision": "59565be15d9d06a02816b0be97ed7e0b"
  },
  {
    "url": "assets/js/63.508681ca.js",
    "revision": "36e9512cc2b05895ef2e0dbcca31739d"
  },
  {
    "url": "assets/js/64.a92dd8f2.js",
    "revision": "8d1a9be1112adbaf246f04624e7cb34b"
  },
  {
    "url": "assets/js/65.e28aacdc.js",
    "revision": "0465f1f3b068989aac84aab7e21485db"
  },
  {
    "url": "assets/js/66.99e53137.js",
    "revision": "09ff528272b17ac4dba80f46d70cf401"
  },
  {
    "url": "assets/js/67.827ca58c.js",
    "revision": "505ff2ea974324de79fa57afee51f0b1"
  },
  {
    "url": "assets/js/68.90077299.js",
    "revision": "d11ff39fef1fe61e6f6e6adb130280ef"
  },
  {
    "url": "assets/js/69.94a7f1d4.js",
    "revision": "d6d2a8049eef89e52d5d1ebe5ae4bec1"
  },
  {
    "url": "assets/js/7.561e4e5b.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.5839f8e3.js",
    "revision": "c25f7b6739ef950929ca4fc86f96beab"
  },
  {
    "url": "assets/js/71.e2197679.js",
    "revision": "afc96f7bd2d79b8cafc0ab6c316b01b9"
  },
  {
    "url": "assets/js/72.3351ed46.js",
    "revision": "2d35de8d0c2741414c33ebf223fc14c3"
  },
  {
    "url": "assets/js/73.afbf8e82.js",
    "revision": "ac01d9929fe765f4f3efba818b8e4745"
  },
  {
    "url": "assets/js/74.50ffe9ce.js",
    "revision": "5869c72a81db97ab8ef6d3a5c070593e"
  },
  {
    "url": "assets/js/75.1055cdea.js",
    "revision": "82a9eda187ddf8921420c39792d3ab5f"
  },
  {
    "url": "assets/js/76.db9dd105.js",
    "revision": "97eed3a9f1735ee4aa1ce41f05c97d78"
  },
  {
    "url": "assets/js/77.8a7b9e15.js",
    "revision": "f497a8730a215853d40ecbf493930808"
  },
  {
    "url": "assets/js/78.0db10b1c.js",
    "revision": "c032a8d37dc11da5724fbb97be077276"
  },
  {
    "url": "assets/js/79.3b08a7b0.js",
    "revision": "38d4aca6ff68126aecc44cfa36bdac84"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.ac4aae56.js",
    "revision": "3575b9375080525b0f9c2ceb93b45910"
  },
  {
    "url": "assets/js/81.f85a0341.js",
    "revision": "0ffd856f03fdd9647fb4ab9ceea572b4"
  },
  {
    "url": "assets/js/82.beac0184.js",
    "revision": "bb8fad7d03bbe556b70610acce3b9f3f"
  },
  {
    "url": "assets/js/83.7d8e5978.js",
    "revision": "2afab5b750a12fcd59e6e3bf20f66c83"
  },
  {
    "url": "assets/js/84.c37b65d7.js",
    "revision": "5f7540a3a987cf4e69a9b85d9f2d1a4e"
  },
  {
    "url": "assets/js/85.8eee712e.js",
    "revision": "6055081aae0ad17a28f8579bdf6a80b7"
  },
  {
    "url": "assets/js/86.b156343d.js",
    "revision": "69c4d2eecb9b819496c72a311d9ab6d0"
  },
  {
    "url": "assets/js/87.71c9fbec.js",
    "revision": "8a3793cfb19d7532da3a18d6655b2774"
  },
  {
    "url": "assets/js/88.6ba78190.js",
    "revision": "2425aeefcf81d951a4fecdf11f349db1"
  },
  {
    "url": "assets/js/89.f3ec3592.js",
    "revision": "2ca63db7e40489a221062fbd6c6cdd3f"
  },
  {
    "url": "assets/js/90.0b52c511.js",
    "revision": "bfbc91261a04c050a2eb88adff9aff27"
  },
  {
    "url": "assets/js/91.a833bff8.js",
    "revision": "fe5e088e0c1679abc4406f5397c02f5c"
  },
  {
    "url": "assets/js/92.cce41bbc.js",
    "revision": "97c9ae777dab47666674252c8b123d5c"
  },
  {
    "url": "assets/js/93.a62abc4f.js",
    "revision": "8cf39e3ef7cba688264148f45047e48e"
  },
  {
    "url": "assets/js/94.1e15c3b2.js",
    "revision": "a281814262b0296c058089d25da809db"
  },
  {
    "url": "assets/js/95.03f8f036.js",
    "revision": "5d903a00fd10f5ea30ada4635e0fa3cc"
  },
  {
    "url": "assets/js/96.6b547598.js",
    "revision": "1e7d144237500c6dc65ef57257ef3b26"
  },
  {
    "url": "assets/js/97.86ed0f8f.js",
    "revision": "fe77aa6d9bac9884e82588734195fb8d"
  },
  {
    "url": "assets/js/98.077a14f4.js",
    "revision": "94674ad03eacb595f7e79e6db89b6231"
  },
  {
    "url": "assets/js/99.1ccc8f1a.js",
    "revision": "e6058e1ce29be59dd393f549edcc2c7d"
  },
  {
    "url": "assets/js/app.238a6f57.js",
    "revision": "7867c3d440b95c29e1b825890030f3f1"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "b895c8417f226a9405f05d2fac66a11b"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "74ae7472ddf34bc262d3b47ffe06f24e"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "f75f5ad2f40e37728155555387575037"
  },
  {
    "url": "de/effects/API.html",
    "revision": "4019b9746c4021173f617dfb10aaf4c7"
  },
  {
    "url": "de/effects/index.html",
    "revision": "04d0ffa600466aec6ab92b844a47c377"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "0754036abdd9dce337f766b7181f2eeb"
  },
  {
    "url": "de/index.html",
    "revision": "6ce3176082a5f51ad27a9026dab5c34b"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "cc4b322af82810191a10f787c1baec8e"
  },
  {
    "url": "de/json/Control.html",
    "revision": "170df51fcf991754733fd87d6c8eb34b"
  },
  {
    "url": "de/json/index.html",
    "revision": "bf890d29dd8c22f284d02407ba64f9e1"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "8afa673fd202582f26e9f5887b306a80"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "6c9d075bf453035e4c63ac2c444f21ae"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "313d21384a5c3cf1e6d077947d740352"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "f4320d0a52f5084db495c073991461ad"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "59fdccf8b92c6952dc13d92ecaad10ae"
  },
  {
    "url": "de/user/index.html",
    "revision": "5b68fefe5609b01ec918f26bda8560c8"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "0267c51a12ac137250f8641ec852662e"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "4a252821a44b9ce394347f9817354528"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "010e882047b27064f101c237ae1aa2dd"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "15bee0bc5cf6f9d43d17052397a47953"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "e236f2a87f04ca29713a3e9347404f64"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "661b41f1225a8a2685380d882ed18dd0"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "2c13982fdc68c395ab673db1a681ffbe"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "6ad9c83e4924cb16b4fb910a61ba80c1"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "ab5acc89841b2b87464a7a882d3891bf"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "44002b53585ecc85529fc8c027c39296"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "f92833d83957110dda33eb3b3bb853c0"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "4c617736ee6e711b02ad3a2c55a1ed80"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "784c1100851c427c63905d6b4b110246"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "4b8f443b6aafcb934046d99eddaa22fc"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "587cf2d55e26fb18b867639683702b6c"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "985ae343ef7c016f1c76011dba69e818"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "092e798395d7a9d7dde174d3ef09e75d"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "529edb38ca89892911ba0c2f534b1b32"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "afcfe728925ff53eb3d2d6955850130e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "424757f707ebe3cc25dc61ac166dcd44"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "fe957e31c2c5730f2dfabdab5d4c8b51"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "93245700166689c37b1d6a7a5377db62"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "eb474271b5d6308cdc5c63995a09b0ef"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "715ac76ceefe3cbb92103e69d4b0042b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "3d8e25c9a16b3cb1e3db7ce62ba26b49"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "5d894066721f966373f921dfa247fa3e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "43f98df9ac82857a2f18a0498eacf198"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "d2727bf714b7ab465e277b0ec21c3566"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "581cc01c51e2340b3d63490652ae19aa"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "4ad5968e80b9dff145373342ebec021d"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "d2bac37206664854a61d31b3eadce651"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "dbfbcfdb958b3468cfa5b08c737667e2"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "8e113fe2cf3978f18f9e958ed4d61c3a"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "66d1e86cc96a2753a9cc33387e7705cc"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "14d19f63376c6d05fd8bfacb2aaefcfc"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "1ec973a4e9b721b37e3b4aab531602ff"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "eac44de4eb8357db00cd586efdb17a19"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "d804810548d54d76fa5f1388a8c28fa4"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "c356ac923ffc20426256ad87c154c3c8"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "6a4c84cad0d2b534c3efffd7e20bfa69"
  },
  {
    "url": "en/addons/API.html",
    "revision": "80cdcf41bcb76dbbcde411e4b578ef63"
  },
  {
    "url": "en/addons/index.html",
    "revision": "7199258eebdc247d22af1e5e497fc57d"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "cec6607368d9ce03e247a611baf2a38b"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "eb6724118ac60b147cccf22f35c7ba0e"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "9ee3cde0ad313caf7608e2ad6eb5e6e0"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "d5d8fd9d2ad75f07e75f2b21265c946f"
  },
  {
    "url": "en/effects/API.html",
    "revision": "bc97074b5cf8eaf538ecfe086a4c174e"
  },
  {
    "url": "en/effects/index.html",
    "revision": "6025250da0d130729da66b109bf9d7fa"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "46120d4d8f39e07f19f6e7799ce268dd"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "da81ae5e3bc23f2f83ba265a4988f4cf"
  },
  {
    "url": "en/json/Control.html",
    "revision": "eee8e79f0164ffa0fe7cc2a6b86fc77f"
  },
  {
    "url": "en/json/index.html",
    "revision": "91e63c77fa053ba2279db7e6bd790538"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "5a53578971a457a3287f8d1637739eff"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "30298ab549278272933c67e7f445c8c5"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "83e9dae62ad709525ac64ad8f3ad10be"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "b330c6a6cd506b9f1534135772323656"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "1378e572c1f388601445d5372db0b608"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "79424e06fbe8a4fa23429134a8e5404a"
  },
  {
    "url": "en/user/index.html",
    "revision": "6c2e2efc2684e445217839259221c19a"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "3b4cdeb1e73adf010ac4fd3d2f5fde70"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "53c5ac0df166bf721a98548b9d3f7299"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "3b0afe22c3b61b152d9977e97faf6a08"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "0192bfae030fd1d9ba749541f42f15d5"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "3295e2dfca4e390daf64a83b7c0f99e6"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "ce00e0708ffc82ef600e609d7ec9d0ae"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "e549aef2a3308e76d935a8128843cbe4"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "79cb684696c821731178ea38a5d5c53c"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "85054766700f9aade54685c6ecb69156"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "cd40f7cbdbbb59f25dc681371b7d6320"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "028f99184b9538aebf9b8571c824a24a"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "55925ddfe0863245a6e74182ac2656e5"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "d324ba4c20949acf6be206e9d9917aac"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "3ef8d3145f53db0d97c5842df037a4e7"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "6e3962c37d084db7dbca16046e69d36a"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "c736dafbc88a62d6eedbf197a1663847"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "dc250c345167999403b373fffed4b4dd"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "47c571327f8539b7847df89c134d4774"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "610bec04f5466df608ef3dc4daf937d2"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "2650c1a452bef4e98ca1ab03281146ba"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "9d7c85cdf1a2a345892b8355c05ffa46"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "d88f7de1a3f2592ced1062063b713fde"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "8693dd19d9b2c79a1eb54ced3ddd2aa9"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "e0b09a5ffa811494b52031a354e81cea"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "01f897e26e6088836d9a8490b5345797"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "7d9bc9363b1cb8237d98795b4ff0ad9e"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "3459f74d3f9fadde4577d390045ebc91"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "0f522da14cbb53e47e83d2a98e2e5712"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "94b9ede7a7e72b8daa015b53e1cea1e6"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "799fc017357b38ecdd985ab5ac2da36e"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "179996507813cbb9abf1b303dabdfcfd"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "2cddd73b1478619a58388e8c571667e5"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "9c04dfed6675fcb639b122dd161f8b26"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "b7da9447b196d96baa42a99fef900312"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "72d0edd0d5616d0c93e54fcfacda640c"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "9fcaf2b56f805dfb1e835b45682c2548"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "2fad9cb2aff97e1d48efe136de4c0d50"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "4423c45366b34446bba1466dbfca0eac"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "a82a3b8e5d1470ef99192ec8243446d4"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "f537be2d5211244e922e6a133f5acd00"
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
    "revision": "033a1eff30e5858afef9138a2e1ae132"
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
    "revision": "92014da9d4fb709b5f0b619127260f50"
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
    "revision": "bf3c9d053cc73ced25d09920e3ad1f1b"
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
    "revision": "43b6b58f070609dc22c3bb1798170d38"
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
