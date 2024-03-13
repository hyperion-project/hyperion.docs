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
    "revision": "ec549339ea98ad59c39d8660eb567846"
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
    "url": "assets/js/100.983d8f49.js",
    "revision": "470bcf6ebacc4f4ab759ae3a83d068f2"
  },
  {
    "url": "assets/js/101.735db2a0.js",
    "revision": "cdc43e46b3e1c4991101391c52fa935f"
  },
  {
    "url": "assets/js/102.40950cb0.js",
    "revision": "bc6c94112d2aef1de546a42aa5c9929b"
  },
  {
    "url": "assets/js/103.c3d20604.js",
    "revision": "88fbb92de623c3f0e164c8a4a93d3fbe"
  },
  {
    "url": "assets/js/104.af746b6e.js",
    "revision": "1160b094d93c13aa1eb216116bfdda18"
  },
  {
    "url": "assets/js/105.76fbc51f.js",
    "revision": "04286bdfd3b32e12cd2d79e6acc9fb9c"
  },
  {
    "url": "assets/js/106.0dd2682e.js",
    "revision": "bf2aa6f90d267148de17f94bf33bc87e"
  },
  {
    "url": "assets/js/107.a0c0fe12.js",
    "revision": "6ab66a455b57109938330f3b6dc064d7"
  },
  {
    "url": "assets/js/108.d974b850.js",
    "revision": "2a70f7b62af1062153377b12cedb100f"
  },
  {
    "url": "assets/js/109.fa3645db.js",
    "revision": "b5480193d90bf984992ca846038a6882"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.e749435b.js",
    "revision": "82f8e5d3f451708ff4c7d1c22a439518"
  },
  {
    "url": "assets/js/111.5f9d57a0.js",
    "revision": "f869aedc2545b45cf5abccd13da138ba"
  },
  {
    "url": "assets/js/112.45275985.js",
    "revision": "cb8da9cc62d7496c96749221af29915c"
  },
  {
    "url": "assets/js/113.230593c3.js",
    "revision": "3e6b29ed8333ce5527896508137a5b2b"
  },
  {
    "url": "assets/js/114.b82454b1.js",
    "revision": "7486deb89b58cb628800d05a185164b4"
  },
  {
    "url": "assets/js/115.03f218d5.js",
    "revision": "b937c31aa90be2307c6a9512c5c71b61"
  },
  {
    "url": "assets/js/116.d511c33b.js",
    "revision": "01d5de705d16e4379c081852ac2813b6"
  },
  {
    "url": "assets/js/117.eb613fc3.js",
    "revision": "303f01417fa9fa0d41748333ba36a4a4"
  },
  {
    "url": "assets/js/118.85d1e112.js",
    "revision": "6c6f5aab8593d0ef69e1c9779e2fb924"
  },
  {
    "url": "assets/js/119.a9c15e20.js",
    "revision": "d35d1597647806d75d76b963cf8d2f88"
  },
  {
    "url": "assets/js/12.a1977597.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.25b63811.js",
    "revision": "22de905adfd0179348dcdc4e4f855bab"
  },
  {
    "url": "assets/js/121.423996f3.js",
    "revision": "1a6cb40478702f40bb0b67656edd1e43"
  },
  {
    "url": "assets/js/122.0d655c4c.js",
    "revision": "a052667f4a25ca418841650675bd705d"
  },
  {
    "url": "assets/js/123.792f8b61.js",
    "revision": "74c68844818005d7d5b7b9a4c35def27"
  },
  {
    "url": "assets/js/124.4c83fc5d.js",
    "revision": "581fe898a395c745700965fece57e2e6"
  },
  {
    "url": "assets/js/125.1b4f0f53.js",
    "revision": "5d1aa6ac377c993807f50bac4de4e8e8"
  },
  {
    "url": "assets/js/126.9bd0cb03.js",
    "revision": "4bff4d2d4fdfa0087fe6e334dd9e6b60"
  },
  {
    "url": "assets/js/127.d1018768.js",
    "revision": "c90cf27df6f0d79be7c1b0dcb8a2c21f"
  },
  {
    "url": "assets/js/128.79198460.js",
    "revision": "cf2f4815d364247d6be220d1783be65f"
  },
  {
    "url": "assets/js/129.ae63a8e3.js",
    "revision": "3f8af4a70729a07e4158956c859f6f61"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.20b6e507.js",
    "revision": "dd170596173c535846d2a323e4ba552e"
  },
  {
    "url": "assets/js/131.068c6fbf.js",
    "revision": "71f0342a4f2853daca1b3e0b571a3cd3"
  },
  {
    "url": "assets/js/132.fbaea41b.js",
    "revision": "ada93b42800d075b798d8786dd78d631"
  },
  {
    "url": "assets/js/133.44c98246.js",
    "revision": "d0ec329a4c378e78a309a888b6945b0f"
  },
  {
    "url": "assets/js/134.4b3ccde0.js",
    "revision": "82bfca1b60595b240bce402fd11f4b46"
  },
  {
    "url": "assets/js/135.6f01b3ab.js",
    "revision": "c31dafe6d1cf5814212b9b21b1b0aca7"
  },
  {
    "url": "assets/js/136.99f04cb0.js",
    "revision": "f8294f99bb682a9554a96ef639b76bda"
  },
  {
    "url": "assets/js/137.52ea411e.js",
    "revision": "046b143fa9033d2dc89be5f915257e6a"
  },
  {
    "url": "assets/js/138.1aa3b534.js",
    "revision": "b1a20d66f026d6ec075f281349b5c035"
  },
  {
    "url": "assets/js/139.c159563f.js",
    "revision": "b2205d1a0254a443026a61eeddae08e2"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.07b9c002.js",
    "revision": "4082de4e377f56876f8181410e24b9f2"
  },
  {
    "url": "assets/js/141.f88681b9.js",
    "revision": "765be7f9d61d2d498539456f2d139604"
  },
  {
    "url": "assets/js/142.3c06ba09.js",
    "revision": "3c0dade344971e17f0441a2901a33c4a"
  },
  {
    "url": "assets/js/143.b8899f41.js",
    "revision": "800de14f6bd04a1de593da2ce668a379"
  },
  {
    "url": "assets/js/144.c147d808.js",
    "revision": "73b0d072def487d82e8b5415beff3735"
  },
  {
    "url": "assets/js/145.35b4eaca.js",
    "revision": "5aa5f23bbe3fb282182ebaa875c2752d"
  },
  {
    "url": "assets/js/146.cd18beb2.js",
    "revision": "76d7719abd5fe6d6f6af499d3c9c7f92"
  },
  {
    "url": "assets/js/147.621e9232.js",
    "revision": "713ff403c0a232b013683a63d6333741"
  },
  {
    "url": "assets/js/148.90c1d38c.js",
    "revision": "b63b5a87871e12488d1b158d195189fa"
  },
  {
    "url": "assets/js/149.126ba505.js",
    "revision": "7ada91760b8262e2f9dde3e51b1eb0eb"
  },
  {
    "url": "assets/js/15.78b0158a.js",
    "revision": "0e209a38a007fa0e21a66d23dacb9627"
  },
  {
    "url": "assets/js/150.8d615ed0.js",
    "revision": "615cedd42090d9951c9b681c4540e8c5"
  },
  {
    "url": "assets/js/151.fa49e9b5.js",
    "revision": "7cc1e211ba9ab3baa011958e81d2b10c"
  },
  {
    "url": "assets/js/152.2409840a.js",
    "revision": "d598b6924fa05f47f2bb4a408dd06d53"
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
    "url": "assets/js/31.f99269c5.js",
    "revision": "7357c9a805da5d0376be4ecaf6c2682d"
  },
  {
    "url": "assets/js/32.2257b181.js",
    "revision": "a29ec65c39cd456de2b131c40a470411"
  },
  {
    "url": "assets/js/33.59960dde.js",
    "revision": "5d54da3372835d5b38824c84dcc4a90d"
  },
  {
    "url": "assets/js/34.c3381bbf.js",
    "revision": "1037914e415d905c2f62e3ddc1b78812"
  },
  {
    "url": "assets/js/35.c87faed9.js",
    "revision": "f93b859781e635a888561c92d2a79a50"
  },
  {
    "url": "assets/js/36.fa78c013.js",
    "revision": "ca48ce9d8fc77c566ad176d33c02dc20"
  },
  {
    "url": "assets/js/37.411390b6.js",
    "revision": "97d2321ae6d7fbd8a1ebe71985dcfa78"
  },
  {
    "url": "assets/js/38.965fd0cc.js",
    "revision": "e5d953bd971027ee2dfde3bc6120664d"
  },
  {
    "url": "assets/js/39.53f53ea6.js",
    "revision": "3cf5db8b97a1e67452da6a79f44745fd"
  },
  {
    "url": "assets/js/4.0892267b.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.7901af8e.js",
    "revision": "df72f19f5ed7a15d01b381667381f17d"
  },
  {
    "url": "assets/js/41.196ba948.js",
    "revision": "95763fed78257afc010def58868f3a75"
  },
  {
    "url": "assets/js/42.c0002978.js",
    "revision": "9b81626481ca02e1ef4bcd8ab95c1b58"
  },
  {
    "url": "assets/js/43.5f29aca1.js",
    "revision": "2c718fdb5de6de5db809bf5dc919d1e8"
  },
  {
    "url": "assets/js/44.71df3572.js",
    "revision": "4c4275b4c59e098a87b8472b4eae2c0a"
  },
  {
    "url": "assets/js/45.0461d5fd.js",
    "revision": "770ab6bf8bfff75851374a56d56edc6b"
  },
  {
    "url": "assets/js/46.fef05857.js",
    "revision": "ce47f639846eed9f7107bdcf3f5b0fc7"
  },
  {
    "url": "assets/js/47.6d93cfac.js",
    "revision": "b1c5778bab3286b263068f48ef13f113"
  },
  {
    "url": "assets/js/48.05227816.js",
    "revision": "d3c2aaf6d9b736ab93eb08b312a4588f"
  },
  {
    "url": "assets/js/49.77ad194e.js",
    "revision": "efa0c62787a0989c54499dd5b6334ba7"
  },
  {
    "url": "assets/js/5.c5dd80f4.js",
    "revision": "984ac949fd48b7c93ad012b421291789"
  },
  {
    "url": "assets/js/50.22388880.js",
    "revision": "fe84823483ea10cb7310d46b745395ba"
  },
  {
    "url": "assets/js/51.02733a98.js",
    "revision": "521be22f7ad0672d7cca2d02d4e3afdb"
  },
  {
    "url": "assets/js/52.386a073c.js",
    "revision": "4625f756353c7943b1bf238cfaac55dd"
  },
  {
    "url": "assets/js/53.2553db05.js",
    "revision": "4ad1747597fa2ff1ff26df96a7cc2137"
  },
  {
    "url": "assets/js/54.8ff75211.js",
    "revision": "d91817a7294f645b72b950ef4da7a6bb"
  },
  {
    "url": "assets/js/55.4ad5c2a4.js",
    "revision": "bb33180860c0a72023f39bb44c33b4ed"
  },
  {
    "url": "assets/js/56.9a64c96a.js",
    "revision": "b1e67ffde69cfa99e42747d58ced040f"
  },
  {
    "url": "assets/js/57.2bd16517.js",
    "revision": "70bdb48e56afc1d51fa82436c8f3ecf7"
  },
  {
    "url": "assets/js/58.7a46c727.js",
    "revision": "2f70ddb1ce76f8c73eddc78dee0ea5a6"
  },
  {
    "url": "assets/js/59.fcdc27c7.js",
    "revision": "4a49e30f94e471982da9b63a383e7624"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.1c082c1f.js",
    "revision": "319aa2c4bf1065545ee339897fd90a45"
  },
  {
    "url": "assets/js/61.fef26baf.js",
    "revision": "d3a3b335039b0e3755f1fbb9c7428eff"
  },
  {
    "url": "assets/js/62.4879fad8.js",
    "revision": "3930a2a3e2238b5634bcb41d21f253c4"
  },
  {
    "url": "assets/js/63.635923f0.js",
    "revision": "b8c2ae9833fc8c3051a037833c1041c4"
  },
  {
    "url": "assets/js/64.97be79e8.js",
    "revision": "be8bfcef3956ad739691d2933cf7163c"
  },
  {
    "url": "assets/js/65.d115b53e.js",
    "revision": "783aca350c31ca0d3b950f38e8c3466d"
  },
  {
    "url": "assets/js/66.6f685412.js",
    "revision": "9daccc8fc003dba0607a2ebf1d925333"
  },
  {
    "url": "assets/js/67.b1349e61.js",
    "revision": "04ea72293b923204aa025f6376169756"
  },
  {
    "url": "assets/js/68.8f207a3f.js",
    "revision": "cb2746c52405f804c7e93e828adff01e"
  },
  {
    "url": "assets/js/69.0174bc15.js",
    "revision": "d88e94ee6f5e300401a968a14f8ab7a4"
  },
  {
    "url": "assets/js/7.561e4e5b.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.2e18f000.js",
    "revision": "899e511750332d8a89c6a71209fc0806"
  },
  {
    "url": "assets/js/71.3775f8d0.js",
    "revision": "72715f71c24e000fe6fd29226cda3d06"
  },
  {
    "url": "assets/js/72.22fc370b.js",
    "revision": "e62227c2863c52940aa144a6ee988f88"
  },
  {
    "url": "assets/js/73.dd7977bc.js",
    "revision": "e42a6ffab23662df9ba5f4fab7da6d5a"
  },
  {
    "url": "assets/js/74.ffcca984.js",
    "revision": "75effc60985e392e04447d977c17a4af"
  },
  {
    "url": "assets/js/75.3ba4a54e.js",
    "revision": "1f0c33bee4505c41bb01f19f42a42d06"
  },
  {
    "url": "assets/js/76.beb1ca7f.js",
    "revision": "b834b1604a0d4bff28fe16173057c5e4"
  },
  {
    "url": "assets/js/77.c4eeacc8.js",
    "revision": "2364e06dae95bb531333add649b97b0e"
  },
  {
    "url": "assets/js/78.93d53d6b.js",
    "revision": "2be77b51b1f26c113b5cc9ce9c0d4199"
  },
  {
    "url": "assets/js/79.d3f71ba4.js",
    "revision": "55ed93a57859c1cb2439f1167be2d2c0"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.c72e3f13.js",
    "revision": "5f85b86f6de7a642ddf9970c29c310d6"
  },
  {
    "url": "assets/js/81.fac646e0.js",
    "revision": "14fbaeee1fc57b77fa77f03f5a7f46e4"
  },
  {
    "url": "assets/js/82.96abee6c.js",
    "revision": "5b08c2ea5d673a8ce8a40a2cc4bcef14"
  },
  {
    "url": "assets/js/83.7c20f834.js",
    "revision": "ff0ab2462c0c9dbc4394dd47bdb155cd"
  },
  {
    "url": "assets/js/84.f242af02.js",
    "revision": "e2062c35db5f41436214a6f9dd870cac"
  },
  {
    "url": "assets/js/85.e595d648.js",
    "revision": "7c952bc9e7f68ee7a41878db27d0f0ea"
  },
  {
    "url": "assets/js/86.cdcaaab2.js",
    "revision": "cdc15bfd6e725a15e9c6f7c5742f8185"
  },
  {
    "url": "assets/js/87.3c4779c0.js",
    "revision": "e8abba1feca9677c77a46854455a3675"
  },
  {
    "url": "assets/js/88.5b9305ae.js",
    "revision": "b8f52143861f0efd047a42a9d35978c0"
  },
  {
    "url": "assets/js/89.e5127931.js",
    "revision": "e398bd683468f0128bf35bd79c248e4a"
  },
  {
    "url": "assets/js/90.2b4aad28.js",
    "revision": "d2ab0571fc744d273a27ce203379360b"
  },
  {
    "url": "assets/js/91.e8d3d517.js",
    "revision": "477fc6e9876c91e5706c654238292a21"
  },
  {
    "url": "assets/js/92.d0975834.js",
    "revision": "fe0385f09ccdbe44800ffb4f3565c07b"
  },
  {
    "url": "assets/js/93.368ccf9d.js",
    "revision": "b967d76aa6406133e5326d906838e7ef"
  },
  {
    "url": "assets/js/94.6252ca25.js",
    "revision": "906241861fc7e92d71476c13f395aa0d"
  },
  {
    "url": "assets/js/95.c7cb1509.js",
    "revision": "2c713b3f49ab91bcf26b990300e60608"
  },
  {
    "url": "assets/js/96.4b48bffa.js",
    "revision": "6da4d62f146730b5167234dd5efbd69f"
  },
  {
    "url": "assets/js/97.05b912d4.js",
    "revision": "b3bbb7fdf976a6da393ba0596b145afd"
  },
  {
    "url": "assets/js/98.4a5b4b9f.js",
    "revision": "3c652b6f97655d13477039e6fe68e614"
  },
  {
    "url": "assets/js/99.3f704aba.js",
    "revision": "60944e1ef122af9818b194626bea6446"
  },
  {
    "url": "assets/js/app.1b7abb07.js",
    "revision": "0c6223cc11d3c4e4f183c364a8b07c96"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "071b2a2127b69f78da8a2332685d1ec9"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "511a0b8afdf438a7876ac957352eb9b0"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "68b5bac0507e02995eced51e158e3476"
  },
  {
    "url": "de/effects/API.html",
    "revision": "6b9b03d76c30799314b98a4bbcf6dce4"
  },
  {
    "url": "de/effects/index.html",
    "revision": "216159908d92567f606ad2df66d21fe1"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "3a5c75ae649f59c83803c9f28db4e337"
  },
  {
    "url": "de/index.html",
    "revision": "3aeaa005c920e278c76b6340a2e95ce8"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "418ab7c213ad732ced0fac50c00f257a"
  },
  {
    "url": "de/json/Control.html",
    "revision": "2fddc2fa0df4bcc7cd0cf8af768c5c27"
  },
  {
    "url": "de/json/index.html",
    "revision": "a03f700f06b4bbef8edd6096f39a02b7"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "951d0e0bb0b9ec464c7e7d470e91a85f"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "ee726afe36b8b95f31d041173dd8201a"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "a05228160a8bea8a8cfe352292b34ff9"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "365484c3c6c252f15df13a2af4881a09"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "2313010d9ccc5c6f1d1029cdd02f54e2"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "b59d2bf614c1231b175875ce151904f7"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "e9f2fdc24192bb9c442e6eca582a2a78"
  },
  {
    "url": "de/user/index.html",
    "revision": "b4002b274c4efc04b912c27982715c1f"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "de21e36284b166e2f372fd79de7ed3fe"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "5c4f6b637676e921ca6fe01857e97f6b"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "9a306f1979b09a6c88cbac3887abe9d6"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "5ca1f75c412e2d3358e64dde72a5cdbb"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "a5e679b6953f7e4d2ea367e613521862"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "abd39c8253decc43410f6d8f0a28975b"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "5bd5af013092fe31788fbf5d42464d1a"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "758321fee33fd47f3b32151e1aa41b43"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "ece391551583932d1a50f2886fc7f72d"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "571a69a71dbb69f53a5a010c645b932d"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "69d85e6a851c18997c36080502241bea"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "d9300017dfd06a59fef0d493dc3d3f57"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "c1d6b872a8f069c60c4122c8eb8e99ee"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "b02c85519c83739502302a13c746ae12"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "f840efbdbbbb20bcde31dd8b599aa064"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "b54f19ba4a1fd550d0714013ec83f3cf"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "7227c38485f9157924df54b6b1b47dc8"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "213dfd9da2b96cf2aff5ed1176b5b7db"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "9dbbcee5229157422a6c3248f79ed0b5"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "1cfd76bf2cd0dfe45aff0a24b5883afb"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "1b35594728093fee7c73634a1b60515e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "7d793b39d95ef40b37c4b08d41c4cd4a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "f95be9382ef7eefec463a90d2cbcc33e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "0afac33bdc4bf52d27296e2b8a0da0fd"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "13b6ccbfc11cbc82c6531cbf2044e454"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "fd9e0d973e8d7c7e3e65f164641b783e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "9ee76de7898c24074a6cbec38173ef2d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "7f372544b923f8a43ada513087c7c550"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "29c8418446843b9877c01d8aff741085"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "14e21ffbc28f4c2f3ce033833bee126f"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "2168c6c56b56f07fde084269c166f2eb"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "21f8a7631a2f8368dc6845f6641cb4e0"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "33e436bbbd8059be9cbd31cac606b86b"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "35ab876f1e878be6b4e65515f277153d"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "eb1523b6129806911cdf0c071a76eeec"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "450aa8aef36a9486b6ea174c448f2bbd"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "b01194d2835677753d62f2bb849d0277"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "c92fb7ba313973478bba116380198dfc"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "5b38bc6a6a961fcb881339b2e134f9a4"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "3fedebd21d8b674110ef5a155b5704b8"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "4f2bfd3b933f011076abcefcfe1747a4"
  },
  {
    "url": "en/addons/API.html",
    "revision": "a9fe749d4cb0f8449991ba902caef55e"
  },
  {
    "url": "en/addons/index.html",
    "revision": "52e96f823b5b1302582559e5d7499c65"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "9a3f12d1b9c9c0cb00e5bb7f2f0f7d3f"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "1506f4aaefb67cede077f6c338b97842"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "d6bfa81684722234be9c364a46929607"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "f1127c73fd667edf6816e748ba7cd2d4"
  },
  {
    "url": "en/effects/API.html",
    "revision": "d8b398b56039dc9a003fb763dbb3e0b2"
  },
  {
    "url": "en/effects/index.html",
    "revision": "9f55dda2cc32d8c45f93aae7a6795697"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "9f04a2e653b97677453c16f28d9bbbe9"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "88ac1f65d3d4cd6ec04b40cb21ada02a"
  },
  {
    "url": "en/json/Control.html",
    "revision": "26dabb1787ccbcfe1e93ccee7ea2b4d6"
  },
  {
    "url": "en/json/index.html",
    "revision": "a5ebee3850f45366c35d4883a1a53cb4"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "72c426da6c1863709d511f79224c7ba9"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "8b1be9f5d31fa2bc055eb1871a37b952"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "460475f58ad38b1d495cd88ca8fbd182"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "77992aca4572bb6130dfa9af0705f154"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "19c680f9af7f9837896389641e6d5510"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "221a539f73d3711ae7e9a989d7c12f7f"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "f744f087085f32bdbf2329a9e37a6389"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "872a008953d57b7f42d91a1877bb18c0"
  },
  {
    "url": "en/user/index.html",
    "revision": "49e0718dde6a0e26679a7f9dd669895a"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "b2084331eeffe161e6afeae818ecd4e3"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "9b7edda351c213c3466a971f51465c76"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "ce7ea8ce3f7c0639d63ec46e8c67dd56"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "9d80c976621cb4bf089e5d5a0db14b27"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "e66892506d5f0c21fe0b10cb7eb58d75"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "5586370892faed82c42c7a8ffe5975b6"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "317ae80fd16e0f6dabdcf21a336ea7a9"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "9586f6347a61ee844800a9938832bb48"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "4865ba1a192e18294ff8bc23940c8054"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "84fbee67d49ee30c10f19589f144452c"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "95e5e88e5def2218c76c4c0b370ecdb5"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "773ea1ff575495dd310a1e0b393c4967"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "2b463a7c0672005ca592994d10789b3c"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "1d3faf4ab6346e685a76f20d9be774fe"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "cc41e0114bafc62b156ad242a3298d16"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "5c0bbec342e48a4341076103fbb0f170"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "15613d97f851bf054bc2c5f8c23793b1"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "474fbe9d487825fc8be5ac5a0ddcdd65"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "70af796e4926ce0864835be4aee25041"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "4844421be673eda1a161386dbc17c12c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "45f5401ffe964a4edce3b75759b783b0"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "0a86e4202c6355ee014e22bd51414ea4"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "b229fa2c3416c04cad7157db990060dc"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "5c7d9f029a638f323154274c5a0e4a75"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "584ae4a0fef49f9b4d073d598a73c6e4"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "1eed08e1d8d2cd2f3bdd1a35d361014c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "1b63a575c8f5bb56c7f3212848449114"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "9c967ce084d608583ee130b40065d2b4"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "a493b9cbb773bdab7185ef64158ee7d6"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "cf6161e6ca99f5726e26d2ca3dbbe5c8"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "a7995141959789340ae51613b78d5036"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "8cb04a11d696330c17e91b937be6e680"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "d3bd097753629a36c4e6ebe9a8cf126b"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "6952e8d8b4bf0721007b4da2fa4aa43f"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "cea7dd85932386e253f4a5ff8fc1d357"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "eb50f2277963d9e54f616bbee2541229"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "aa2ada4d21cbb5571cc39a3e943fa3b2"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "0fdecc589132352c7da7741561eb58b1"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "eb1a8064b3d6580be1c8930f4ad5b9f1"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "49a4a5798a9b7ba64c1b8828cd13b2ba"
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
    "revision": "059ac4a0371f77c252c24f55f150f647"
  },
  {
    "url": "images/de/user_config_lang.jpg",
    "revision": "e96abe0016d26e8c156969a5161b57fa"
  },
  {
    "url": "images/de/user_events_cec.png",
    "revision": "ef45e959a80f8eec10cbb006b2234376"
  },
  {
    "url": "images/de/user_events_scheduled.png",
    "revision": "c01f385004e90630ee18a734d943e544"
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
    "revision": "040c1fa6da9d630755663abeeb67e96c"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "a2e03ebed148ab935371059e38925326"
  },
  {
    "url": "images/en/user_events_cec.png",
    "revision": "13f81bcbb18d0b5220ab7325b2b19a05"
  },
  {
    "url": "images/en/user_events_scheduled.png",
    "revision": "dceff86ef3509fc2af3f4b330b802cef"
  },
  {
    "url": "images/en/user_gammacurve.png",
    "revision": "1bc6325ef5dd3cafa09d40d0e4f65d8b"
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
    "revision": "9ee6f0aef55ecfc3e22499ba610aa74b"
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
