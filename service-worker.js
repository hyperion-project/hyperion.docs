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
    "revision": "42cedca19950995c9920732a121209ef"
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
    "url": "assets/js/101.06e9bdd1.js",
    "revision": "6d535d21204ba5d25359634c48611b49"
  },
  {
    "url": "assets/js/102.9192cedc.js",
    "revision": "6632fe7d77d0020ea2238c1b5a99f193"
  },
  {
    "url": "assets/js/103.22628983.js",
    "revision": "6025440f25bad28a58d7b278eb050826"
  },
  {
    "url": "assets/js/104.816615f9.js",
    "revision": "5ec429dd292f0da6973153c66a7f6300"
  },
  {
    "url": "assets/js/105.c7cfde74.js",
    "revision": "d5e5acae0e0c6218b1387fd76e1dccaa"
  },
  {
    "url": "assets/js/106.aea7fff4.js",
    "revision": "a9dde7f80072ca91c5ff3c0670d4d0dd"
  },
  {
    "url": "assets/js/107.268ae2d2.js",
    "revision": "d04874a94e71334e2f4aa92b033776f4"
  },
  {
    "url": "assets/js/108.8b4cdd2f.js",
    "revision": "2db9326943584ddd872152d735c92435"
  },
  {
    "url": "assets/js/109.ed7d46e4.js",
    "revision": "9088881ce576d23db829b688b6af71bd"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.73f285c3.js",
    "revision": "5fe77c72d1058621e5bf8c794db324af"
  },
  {
    "url": "assets/js/111.b38d07d0.js",
    "revision": "adaaa12ef2944a8a6bd826c3ee33b755"
  },
  {
    "url": "assets/js/112.b72b1d07.js",
    "revision": "acb75d37384ecb73da7dd484720446fa"
  },
  {
    "url": "assets/js/113.0fe5e3a9.js",
    "revision": "063ed4637d8161451eb7b1422163f22b"
  },
  {
    "url": "assets/js/114.38e6ab41.js",
    "revision": "46bd1454bafee6ae2350d5eac4e8f896"
  },
  {
    "url": "assets/js/115.fbe3323a.js",
    "revision": "a470b4145afb2f7e5f7dd53259ab13db"
  },
  {
    "url": "assets/js/116.cc393ac3.js",
    "revision": "1b6984e315679896f44bb8ee5a1360ef"
  },
  {
    "url": "assets/js/117.a89592b5.js",
    "revision": "04657a141c8425ccc52e3461e1fdef3c"
  },
  {
    "url": "assets/js/118.0d4b0d21.js",
    "revision": "86e7d46b2b00b72a6371d3e1b93f3c69"
  },
  {
    "url": "assets/js/119.ff9f5dee.js",
    "revision": "c9ed11f635b16093ba1c6edfe02a6b86"
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
    "url": "assets/js/121.74907739.js",
    "revision": "e9b42eaf07c8dc780ce72352cf3a30e0"
  },
  {
    "url": "assets/js/122.2dccde92.js",
    "revision": "47d77f74673ea1eb830107710899ae60"
  },
  {
    "url": "assets/js/123.2b5b7be2.js",
    "revision": "c33be7311fdd612a6f5e560fab7fefff"
  },
  {
    "url": "assets/js/124.abdb5474.js",
    "revision": "68a825c70e1d3e655f196a1cefd11cb2"
  },
  {
    "url": "assets/js/125.0fa6bd58.js",
    "revision": "3cb345cd14ebd5e7aa8ca43467581c47"
  },
  {
    "url": "assets/js/126.3c959c2c.js",
    "revision": "0ea48a91668c2232baab705ee0f419fc"
  },
  {
    "url": "assets/js/127.cd9a2660.js",
    "revision": "117202849f8c1267fdc1f4a26b182ba8"
  },
  {
    "url": "assets/js/128.047b2809.js",
    "revision": "c19d04321aaf86df5469a97f4a907725"
  },
  {
    "url": "assets/js/129.dea057c0.js",
    "revision": "852587c61a664d2e0d98161211a7bd93"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.ea65951f.js",
    "revision": "08c69d8643ad9d4649a4356e92f86e0d"
  },
  {
    "url": "assets/js/131.45fe135d.js",
    "revision": "3fa03e7a52cd8314c3687582d7989112"
  },
  {
    "url": "assets/js/132.46979ae0.js",
    "revision": "2a86f91adcde81fa8592b73be0854b7e"
  },
  {
    "url": "assets/js/133.724b98af.js",
    "revision": "32b143ddd29b8590a89ca2e6fbfdd336"
  },
  {
    "url": "assets/js/134.8840b914.js",
    "revision": "af26b037e9a3a29b5ebe625b87dd4b37"
  },
  {
    "url": "assets/js/135.3422ffcf.js",
    "revision": "6c401529167d697af781cd766517145b"
  },
  {
    "url": "assets/js/136.2e27392f.js",
    "revision": "21edc468c5d7e6c4f3b66ef4099fa62e"
  },
  {
    "url": "assets/js/137.f5a908a7.js",
    "revision": "c97242114a0e75b19c96ace65df81e3b"
  },
  {
    "url": "assets/js/138.8074d205.js",
    "revision": "b1feece61af954d9e6e81fac51a76961"
  },
  {
    "url": "assets/js/139.71072b95.js",
    "revision": "dc40cf770114a25f9fd47c01b4ee3a7e"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.a3b14b33.js",
    "revision": "41e151a4f7f8c7f7b647f0dc5854592f"
  },
  {
    "url": "assets/js/141.fe9581e1.js",
    "revision": "be45c13b29666235502183ba9f602488"
  },
  {
    "url": "assets/js/142.53ef0211.js",
    "revision": "74e254323d3a9adb00dd30630e81bc94"
  },
  {
    "url": "assets/js/143.fc64e149.js",
    "revision": "6113b882748c49aa147d5137b84b26c8"
  },
  {
    "url": "assets/js/144.dee4f986.js",
    "revision": "46ddf7905ddaa48104804c3daf8a1452"
  },
  {
    "url": "assets/js/145.af02c463.js",
    "revision": "a36e0083e46a7c6e8a3d53ae4fa8f2ce"
  },
  {
    "url": "assets/js/146.bf97fe43.js",
    "revision": "e9bd7abde9787367604b50b17fb9dcec"
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
    "url": "assets/js/32.35de30a6.js",
    "revision": "66d6ecb2cfcf81aac36fe886fd2e78b9"
  },
  {
    "url": "assets/js/33.bfa937e0.js",
    "revision": "54ebf78f5de12959a0d7159f4def4f70"
  },
  {
    "url": "assets/js/34.6013a376.js",
    "revision": "d5955fea46c955bebb6e4ebe83bf27b8"
  },
  {
    "url": "assets/js/35.c43a4cf4.js",
    "revision": "e93f3bf29a30e25374396d6929916c38"
  },
  {
    "url": "assets/js/36.53a553c6.js",
    "revision": "1a3d4c451794b16f5623c9d3d35e29a3"
  },
  {
    "url": "assets/js/37.47513132.js",
    "revision": "c2c618c8d3869d5bd190c6e5fd79946b"
  },
  {
    "url": "assets/js/38.067e1456.js",
    "revision": "e3cbd793362fead9526c4fba1ece052e"
  },
  {
    "url": "assets/js/39.35134f9e.js",
    "revision": "9ef5789704d4cc44432df8700ffa8d99"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.9dafd58e.js",
    "revision": "ba38c1d63b5bb1e9e2ed7d35e57219b3"
  },
  {
    "url": "assets/js/41.3f0c8648.js",
    "revision": "86cdf38feaf906928df815d19f11f7c7"
  },
  {
    "url": "assets/js/42.1839f0aa.js",
    "revision": "effdf9de00c9350bd0780d85c32cad0b"
  },
  {
    "url": "assets/js/43.7ea816b0.js",
    "revision": "74db6c36c324e10f2ce3d440fb1095c8"
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
    "url": "assets/js/46.a5089001.js",
    "revision": "1e8a4361fa5af9f46ed3fa9cea6d7555"
  },
  {
    "url": "assets/js/47.f15e549b.js",
    "revision": "ff38771b99089f926f3211fcc3f08cad"
  },
  {
    "url": "assets/js/48.b926c920.js",
    "revision": "eb9d120f18c524f7a8ecbc9c46684c82"
  },
  {
    "url": "assets/js/49.67e7fb71.js",
    "revision": "a47c86ceb0977ca46657fe477612232b"
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
    "url": "assets/js/51.78f20732.js",
    "revision": "2e1e45f1c254dcdc90351213e2743f33"
  },
  {
    "url": "assets/js/52.49df76bb.js",
    "revision": "1db9bbd62fca5099e9c60b125349450f"
  },
  {
    "url": "assets/js/53.8232009e.js",
    "revision": "8b8369ed953524934412b6097ad9253a"
  },
  {
    "url": "assets/js/54.bbd8b488.js",
    "revision": "49634f70fc79d740846a02859bd8e00e"
  },
  {
    "url": "assets/js/55.cffc546e.js",
    "revision": "3eb7975a521a62386081a256bcbb0f98"
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
    "url": "assets/js/59.453ea88f.js",
    "revision": "70278d0d58e9ebec1de18c6346faa75c"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.3dfb5a31.js",
    "revision": "e00f9f1556e2fdc64d918215deb5b43e"
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
    "url": "assets/js/64.0f457075.js",
    "revision": "594444684562ecd0bdddddc77d9aeccf"
  },
  {
    "url": "assets/js/65.5a7896a2.js",
    "revision": "90c861be69825990b4090b3952aa820d"
  },
  {
    "url": "assets/js/66.3ee408f5.js",
    "revision": "6e3bb66257a246b85e91ca6c6639ed01"
  },
  {
    "url": "assets/js/67.fd62607d.js",
    "revision": "c362c16cbe0b2be38c0b02e7ed868044"
  },
  {
    "url": "assets/js/68.94c6d92b.js",
    "revision": "43fb38402ffda4ac06320f26205f47c8"
  },
  {
    "url": "assets/js/69.6ff43b79.js",
    "revision": "2acb2562684291b95344fbd4060daca4"
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
    "url": "assets/js/72.d47c5b60.js",
    "revision": "d4c7972cb03f26b16e074c0345e19448"
  },
  {
    "url": "assets/js/73.afbf8e82.js",
    "revision": "ac01d9929fe765f4f3efba818b8e4745"
  },
  {
    "url": "assets/js/74.6e5968aa.js",
    "revision": "22a82d13671c895761c1685b21f9d554"
  },
  {
    "url": "assets/js/75.1055cdea.js",
    "revision": "82a9eda187ddf8921420c39792d3ab5f"
  },
  {
    "url": "assets/js/76.f67f3f78.js",
    "revision": "032dbd14b968035262a1a5d007c2ad1d"
  },
  {
    "url": "assets/js/77.d8e99dc8.js",
    "revision": "787b49e23dd6690aa911f0f9846507fd"
  },
  {
    "url": "assets/js/78.aba1a528.js",
    "revision": "420d70e5eb1943294398420aa3bcb7f0"
  },
  {
    "url": "assets/js/79.b6e99d0e.js",
    "revision": "5f98355959d060cdf268524964e09749"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.8e979664.js",
    "revision": "5b00ed8b2b802713a6c736439513b0e8"
  },
  {
    "url": "assets/js/81.f955e84d.js",
    "revision": "5b19d98336c300cfb76af5190b2b3564"
  },
  {
    "url": "assets/js/82.2b7d39cd.js",
    "revision": "736f3c613c435d153a02c308e5c1d538"
  },
  {
    "url": "assets/js/83.ab189789.js",
    "revision": "af7e4868a886423bfe2fc16cdb9a7529"
  },
  {
    "url": "assets/js/84.c37b65d7.js",
    "revision": "5f7540a3a987cf4e69a9b85d9f2d1a4e"
  },
  {
    "url": "assets/js/85.ad514727.js",
    "revision": "5de70974b08663f0deb8cef5505ddc4e"
  },
  {
    "url": "assets/js/86.c92e3a23.js",
    "revision": "1de6d0a46620d439dafc1cd6ff631753"
  },
  {
    "url": "assets/js/87.ed2b0817.js",
    "revision": "97cedbb61a016b9f9368970a2c4faff4"
  },
  {
    "url": "assets/js/88.ed7903f8.js",
    "revision": "af45567539bebb48e31413edcb92b324"
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
    "url": "assets/js/91.6fb5d1e9.js",
    "revision": "72b9e7c56b9dcc66dcd0d62c3dbfc8b8"
  },
  {
    "url": "assets/js/92.7a3068c0.js",
    "revision": "55b2de3c899509af6582cfaa209434c7"
  },
  {
    "url": "assets/js/93.3ec5ed0f.js",
    "revision": "0d2e82778c7283950c229657e3357bf5"
  },
  {
    "url": "assets/js/94.0e7fdf33.js",
    "revision": "079b96907f255094c634b669e72b4609"
  },
  {
    "url": "assets/js/95.76190186.js",
    "revision": "7fb716a42e44a63e382504c4dd42d888"
  },
  {
    "url": "assets/js/96.861938de.js",
    "revision": "0403e56cb2eb1a1e9fbcdce1dff1e59c"
  },
  {
    "url": "assets/js/97.87819e6e.js",
    "revision": "9302b81698bdc75dfcebcae13dd5af62"
  },
  {
    "url": "assets/js/98.1434768a.js",
    "revision": "adbb8863d58e2afd8a9410e38c0d6b6b"
  },
  {
    "url": "assets/js/99.7a369825.js",
    "revision": "661a2a24cbc2ce24d552f0fca950bde5"
  },
  {
    "url": "assets/js/app.47e54c45.js",
    "revision": "edb8bb68c5c2b55b53ede67a089770ba"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "7c92294958788826040d3542e0b762a4"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "6a6fc27e2f6c02421d53442fa99fa3cd"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "dbc249d95988313c521476f09a781b08"
  },
  {
    "url": "de/effects/API.html",
    "revision": "6c17cb46378b64967fa6d4c8d044126c"
  },
  {
    "url": "de/effects/index.html",
    "revision": "29f7fd98a7dd6c980f11d83791f85c00"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "6bff3ca538551aff48e1539395a73483"
  },
  {
    "url": "de/index.html",
    "revision": "2521f10065ad6515ff87343c65f4d5bc"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "ccb4a850c604609e2f20dba17c6f6eeb"
  },
  {
    "url": "de/json/Control.html",
    "revision": "f2c1f20700d184a181fafce34710aab0"
  },
  {
    "url": "de/json/index.html",
    "revision": "aaaba547c457eb0c2fc4b061edd1b7a3"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "edb7789a5b8aa0dea59369686f341107"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "14402d27dc0b4bec51256677163f5a41"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "58e9cdc2bac8f375a6e89f015d227c0c"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "1d3a01ac9794327bac6e60814013cff1"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "eebdc19ec0acfbe1e9d84673f388b378"
  },
  {
    "url": "de/user/index.html",
    "revision": "3093b06fed0c0352e165d3f1ff17a960"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "fdb300d4c08888b79059354365f94147"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "a2662e256b572175b754fa0abf8f8129"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "0260fbb06688155cf0d26a0e7b72aa57"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "59a164e6694430a0495959b2b088084f"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "365ed2beacc9de582e27752e330f74b9"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "b7eb12b7673474fac67f51ddadeaad97"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "ef8a361154a9ba3cedde48c0af4ab427"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "f88c4ddec0015f74a7ed7b469d73ee1f"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "7196bd2a49acd74d98c7cb62c3e59f70"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "460df42fc642e6d548d5e5271b6503e8"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "6b39d3c8974ac6423e013555fc968c1d"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "09573f24e27ad09b7434ab971813ff80"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "75e34baf752df0c8af5fb90d46c42a38"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "fa8244937d24bd71144a5b2deb1fd31b"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "e660c0f66c17042a639a4480c25b3e68"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "cb32d28b4a5737048cdcf5602186b9fe"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "03e515d91cc4fa5085fc25a3f59fcb33"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "bc1791ab77afa106b62380018da1bb06"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "4ab1912f4aa0e4f2f58d54298a5fccf5"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "11171487d7a51fd6e791df6b544c660b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "e3c82ef32fee8b6b29a021d42614f5d7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "6140c247d6f4d403b031cfbba7927a38"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "4b135c80df7e0c009cb80b0ee0ca1369"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "f7d9ca768c8a1ee88ce13585d6d4a458"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "0f8485a22f6692036d2a0da6a2015351"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "a89f280af5bef06a3ad3596a927f2e80"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "02b29c6c713bf05d6b68ce0ec4246c04"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "5b2a131ce1afa4f4a84c52efd66a6869"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "32ac535ef812948f46e116d7a771eb9d"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "ee878733fe3021397f0f0fce99edae4a"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "aa2bbc9e391e65534a6a2837038cc8d9"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "89134ce65866eabfe4644ad8af57a704"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "1e3e8932dd6c073277d564ea99444918"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "aadabe6519b62da9dba1101c627f90fa"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "d904b2393a952c5d2f742dd0c7b8dad8"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "60f2a14a8eb07f73357451b57c95a50e"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "c0461530acee9807a12bb8252ffd5da4"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "540bb6a9d8d0bda9ce02a55d1c71c321"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "cb4648eb58b0881ceee4fb0ae19a88fb"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "8e4ac7e6ef9a6322840adddd184dec1b"
  },
  {
    "url": "en/addons/API.html",
    "revision": "a79b0832f4d0aef4974f27649330e89c"
  },
  {
    "url": "en/addons/index.html",
    "revision": "7b17ff83e31ce6c16f89ebaa21f6569a"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "a1929c534d24a0a3b5f4a47ebec0ad5f"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "00dcadaadd8e2689a8c46d4c6d2b6e0a"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "c620f46e8f5523ad1c17149c1d3ba50a"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "6b25f08b85847976b264b000b397837b"
  },
  {
    "url": "en/effects/API.html",
    "revision": "1ce86aaf5e80d20b8df14ae5d935129d"
  },
  {
    "url": "en/effects/index.html",
    "revision": "8de2f24fc29503927911e76733d4fa60"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "f7bd3f9e1601057952cd963567800e52"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "cf12b99423fd659e45e7c5250ac9658a"
  },
  {
    "url": "en/json/Control.html",
    "revision": "0e4f4816b02bc3bfcce5dc4cee58526a"
  },
  {
    "url": "en/json/index.html",
    "revision": "20c049534d3f919996391940f0f67959"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "147e54a7b243e8530ff4278bc37be960"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "df207821b0bc8d3acaddfa92c7a74e38"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "4937bc91adab3d10a2cb2adc1202bf7d"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "87be52c1e3c957a670e332ea2700d7ce"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "c532a5124b905ea3c2bdd5adea6b94d2"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "5939117c85a67b5567424e115c2aa02a"
  },
  {
    "url": "en/user/index.html",
    "revision": "b6701349601b245cf389bf0426d9fe2f"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "93723ef069f77453130c8462fb8a5fe0"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "f0e9c0786b205a4fc4b5e95c1d0553fa"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "419608ee6ca7242b3232efc18b2f05ac"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "4b53a8256346deb733e9805ddee9e46e"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "a608f6dae9504815247a2d3b017adc82"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "62d710800b50b22d5a63cb183903860a"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "b6de65c23191ec6cf8d9544e8be7e00c"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "4d03524532132335d92df2cdcf11b44e"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "50288ae7fc8c4c542f2eb8b22f31ea87"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "1343f754f977895f24b5cde58e926375"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "b56a86d216349bffb8772ff3d215585c"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "91cf88eb730ae5b14f354f88bcb677ef"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "f806dfb40111d5b115e3cfb2d6ff9944"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "9500858d5881eeda236ba726eab5d5f8"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "a2811b76490cad96f0d2bd773446ab56"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "cebd744c79fda9ea1e37a86c0e6f7f3c"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "78671071f4925673b1885f73a6dbcb76"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "27ecdb815f437b43100ed93af80816c2"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "3f43b1d15d818065450fcd684ec7347a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "7f36f1a4bde58baa580dff0c1afebb66"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "e55b1f894ae364f4707be29fcaa50fb0"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "16d6ac9e6b27551343cce156ca1b5898"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "92d1260e196710a211877b138d194f77"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "dbc5a8b1bd9a83def8528b58d45a4b35"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "c83c40cf5b2e87d31e481c27163aa525"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "d1ed3962cb7f6591e23db70efd0cdf41"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "6926fe85dafa11c93b62af5c6e02afeb"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "0f6c2aeb6b8c479dba302c818e6c9af9"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "2e570df120fbb95b997d881044e2cb27"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "59f5dd9016e061d1ed082db08376f3d7"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "0a9c6af6a5df5d5a9219ab94860a9fc0"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "7c9cadd9e97d38cf0db37b12ce9d8eee"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "37c962e9017c83986da109815e2682fd"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "a0f15a6e3682f701cf92153332d56ca9"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "5cc1e113c5ec1b52ea658dcac24b9b8b"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "fd283006c96613d0278bb7c17e10a083"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "860579e24dec3d56f2cd9d63bcbbc525"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "2c9258db2d4bd0908c5e46c82a1f8545"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "f625a6e7b6b8adb5a499c764b4bdd07e"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "5ecfff156322e28b6e5680134f9176da"
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
    "revision": "3f87dee6c1f64e74b8e8cb29d53ace97"
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
