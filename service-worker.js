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
    "revision": "4b30d275b018b2442b8e463bc7785d6e"
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
    "url": "assets/js/100.add34758.js",
    "revision": "fb6eb7cba80076b5c87205896bcdb602"
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
    "url": "assets/js/109.e439cccc.js",
    "revision": "487d210b85b1e9c8c882c6cd78338d51"
  },
  {
    "url": "assets/js/11.f7d259a7.js",
    "revision": "d328fd8604187bded640989913379265"
  },
  {
    "url": "assets/js/110.15a75869.js",
    "revision": "2482f53995b221c3bb192110744214e2"
  },
  {
    "url": "assets/js/111.ab0669f6.js",
    "revision": "f921145147cfdd58052e543f0a709c12"
  },
  {
    "url": "assets/js/112.45275985.js",
    "revision": "cb8da9cc62d7496c96749221af29915c"
  },
  {
    "url": "assets/js/113.0961a197.js",
    "revision": "e0ca0a7c1c791c87cc40aefeacb9f4e4"
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
    "url": "assets/js/121.6008c893.js",
    "revision": "dbaa3050569ba877f6df43b9e39e4d5c"
  },
  {
    "url": "assets/js/122.d81783e1.js",
    "revision": "c28722d5988afff71bdc29fd6081d929"
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
    "url": "assets/js/125.ab9d678c.js",
    "revision": "b1c5eb1ebb46fbeb34e87c0c03508576"
  },
  {
    "url": "assets/js/126.746fa7e6.js",
    "revision": "83abaf2015c7fd0dcf29255234c70487"
  },
  {
    "url": "assets/js/127.d1018768.js",
    "revision": "c90cf27df6f0d79be7c1b0dcb8a2c21f"
  },
  {
    "url": "assets/js/128.e1e2f9f1.js",
    "revision": "7ebf820235552a6c53f5654b005da37c"
  },
  {
    "url": "assets/js/129.85e54a94.js",
    "revision": "dc0b244a411252821981cc7c3d738a5e"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.d01f7bc5.js",
    "revision": "6d8fe425e7c68a4eab25e5db2a78b746"
  },
  {
    "url": "assets/js/131.0b24fb2d.js",
    "revision": "5b276f2648d8f6f7ed1c89762f75a822"
  },
  {
    "url": "assets/js/132.fbaea41b.js",
    "revision": "ada93b42800d075b798d8786dd78d631"
  },
  {
    "url": "assets/js/133.acbca18d.js",
    "revision": "fe4d5c564633d79bfba7e6bba6fd9cf1"
  },
  {
    "url": "assets/js/134.4b3ccde0.js",
    "revision": "82bfca1b60595b240bce402fd11f4b46"
  },
  {
    "url": "assets/js/135.3dea51b7.js",
    "revision": "dc9ee04238edc755ae5c1d9d29352083"
  },
  {
    "url": "assets/js/136.b6245bc4.js",
    "revision": "126fcbf89e301abe6faaa0048654f95f"
  },
  {
    "url": "assets/js/137.c31ff5ae.js",
    "revision": "3b26383f867a4985c0d57d45369874ed"
  },
  {
    "url": "assets/js/138.71a26cae.js",
    "revision": "208bac5d75c7801fcaa4928452a0214d"
  },
  {
    "url": "assets/js/139.23dae650.js",
    "revision": "a58d06204aae9cdb3e49a9eda9169829"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.ff60ffa5.js",
    "revision": "11f37e1599223e71feac35a53119f855"
  },
  {
    "url": "assets/js/141.03df52e3.js",
    "revision": "81ef84fe099461fec4a6781a89ae88a6"
  },
  {
    "url": "assets/js/142.079a9f16.js",
    "revision": "8677b8132912af3711500d725dd2f2df"
  },
  {
    "url": "assets/js/143.912eb496.js",
    "revision": "d058729a8716dbb9000ea7820d170104"
  },
  {
    "url": "assets/js/144.8b7fedb8.js",
    "revision": "aa242f2d45d0b86bed7d3a40f6e8d0a8"
  },
  {
    "url": "assets/js/145.6f9e1138.js",
    "revision": "98c436228e1e198ae0e9023ac11324c7"
  },
  {
    "url": "assets/js/146.4b2a62dd.js",
    "revision": "4ced5304014e9541149363b5cda1bd3d"
  },
  {
    "url": "assets/js/147.40024692.js",
    "revision": "88a4ad2f0dcc2f3589166ded2a51213f"
  },
  {
    "url": "assets/js/148.eb01b9e1.js",
    "revision": "9ff5a3f0e7ce2c3a6c3401fcd69f127c"
  },
  {
    "url": "assets/js/149.5107b5d2.js",
    "revision": "7573d1c88d424d4ff83994321a8b8490"
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
    "url": "assets/js/34.c3381bbf.js",
    "revision": "1037914e415d905c2f62e3ddc1b78812"
  },
  {
    "url": "assets/js/35.c43a4cf4.js",
    "revision": "e93f3bf29a30e25374396d6929916c38"
  },
  {
    "url": "assets/js/36.0b1d7308.js",
    "revision": "b077445bf456bfd3a424e74510b28d56"
  },
  {
    "url": "assets/js/37.47513132.js",
    "revision": "c2c618c8d3869d5bd190c6e5fd79946b"
  },
  {
    "url": "assets/js/38.a784c48c.js",
    "revision": "9e1d4292cfdce501b91d7472ea9e127d"
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
    "url": "assets/js/44.e61b1699.js",
    "revision": "87ef9fc99515a7857bdd7541b66126c5"
  },
  {
    "url": "assets/js/45.834fd86b.js",
    "revision": "aa73c2642985e158d70b5a1c529dc170"
  },
  {
    "url": "assets/js/46.ca0f031b.js",
    "revision": "4f4254874a2a521db1768e5fa0c3a0ef"
  },
  {
    "url": "assets/js/47.56d1a295.js",
    "revision": "a49f715a5048f606b6580e0e800688fe"
  },
  {
    "url": "assets/js/48.05227816.js",
    "revision": "d3c2aaf6d9b736ab93eb08b312a4588f"
  },
  {
    "url": "assets/js/49.2d7ac872.js",
    "revision": "3af29756bd976d2311efd27ad6b8c24d"
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
    "url": "assets/js/51.162c2fcf.js",
    "revision": "79d0aaa6793a78ee102405353d9ae15b"
  },
  {
    "url": "assets/js/52.718d3485.js",
    "revision": "831ad88843cd1796c980cdaeb7225230"
  },
  {
    "url": "assets/js/53.33bcc69e.js",
    "revision": "e377d98d761268f3ddc9604752c5ff76"
  },
  {
    "url": "assets/js/54.8ff75211.js",
    "revision": "d91817a7294f645b72b950ef4da7a6bb"
  },
  {
    "url": "assets/js/55.0c0c70fe.js",
    "revision": "be30ff1b66f0a728a08565c547e6db63"
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
    "url": "assets/js/58.79cdbcde.js",
    "revision": "05c34f1be73aa80f3c9556eab7f69007"
  },
  {
    "url": "assets/js/59.3ea8b86f.js",
    "revision": "ee819cd07d83a7bf28e3fba753023ffc"
  },
  {
    "url": "assets/js/6.f1fe53c9.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.45bc8f2f.js",
    "revision": "d9cc6b6070280b8a25b2c1d4f80b5f86"
  },
  {
    "url": "assets/js/61.fef26baf.js",
    "revision": "d3a3b335039b0e3755f1fbb9c7428eff"
  },
  {
    "url": "assets/js/62.8e9cfd8d.js",
    "revision": "3f913fe876f6de77aa777289d045006f"
  },
  {
    "url": "assets/js/63.5c396cfb.js",
    "revision": "0ac321342257aa8b90f2ca744d988717"
  },
  {
    "url": "assets/js/64.58f0ccf1.js",
    "revision": "ad440f61d96b6380f3ef3ac77b5d45e5"
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
    "url": "assets/js/68.d8167adc.js",
    "revision": "00c072626f6cade6bc19cd7634865a86"
  },
  {
    "url": "assets/js/69.17568d5f.js",
    "revision": "76de1e6da4e347aa082e1bde1a5be779"
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
    "url": "assets/js/71.657336e4.js",
    "revision": "8ac612a510a4b0e19b1627593c856ab9"
  },
  {
    "url": "assets/js/72.48bdb34f.js",
    "revision": "6966b94b606d703107c5e0b75309bfff"
  },
  {
    "url": "assets/js/73.1447641a.js",
    "revision": "a665edb8a77cf7d5c2872c67ca468963"
  },
  {
    "url": "assets/js/74.fbfff468.js",
    "revision": "2180b94aa82bb5fffef64d9646af3702"
  },
  {
    "url": "assets/js/75.a8205c9c.js",
    "revision": "7504af051319f5a410be6d651713bf68"
  },
  {
    "url": "assets/js/76.b6171c33.js",
    "revision": "d54cca0589abd96faa7f4a43ee6224bf"
  },
  {
    "url": "assets/js/77.5f418501.js",
    "revision": "ac254667e204f2dafb6300fc519e6958"
  },
  {
    "url": "assets/js/78.e0395e68.js",
    "revision": "737a55b7fe0766602a25eaf4580564ef"
  },
  {
    "url": "assets/js/79.ed493416.js",
    "revision": "e5050f17feed6c28236eb0a9e98a7b55"
  },
  {
    "url": "assets/js/8.c5bd91eb.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.2ef41c26.js",
    "revision": "03051f038386a02f1b94a0c4e65dd81d"
  },
  {
    "url": "assets/js/81.fac646e0.js",
    "revision": "14fbaeee1fc57b77fa77f03f5a7f46e4"
  },
  {
    "url": "assets/js/82.e4ee8418.js",
    "revision": "3934279e6215b8e4b42058437ae6d777"
  },
  {
    "url": "assets/js/83.413d8567.js",
    "revision": "a1051f72e6423a85ff894184f6e2f915"
  },
  {
    "url": "assets/js/84.51510680.js",
    "revision": "be9911955a1862610c1a9831620f64e3"
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
    "url": "assets/js/87.877b1084.js",
    "revision": "d8b51b36af7899c1f74a663599654ea1"
  },
  {
    "url": "assets/js/88.ab9b531c.js",
    "revision": "a5edcb563ba86b57e92d5abcf0844124"
  },
  {
    "url": "assets/js/89.29b0b6ee.js",
    "revision": "28e1c7d309712f34ba0cdfdcb9e98679"
  },
  {
    "url": "assets/js/90.429ecaa4.js",
    "revision": "063eeee417e343e514a4ad0015e1fc44"
  },
  {
    "url": "assets/js/91.e8d3d517.js",
    "revision": "477fc6e9876c91e5706c654238292a21"
  },
  {
    "url": "assets/js/92.da056c2d.js",
    "revision": "a63bbd350135cd8bc6ab77903a4a02c6"
  },
  {
    "url": "assets/js/93.0dcbaf46.js",
    "revision": "19bf0e05afa10b972764c137a53be857"
  },
  {
    "url": "assets/js/94.a80c6578.js",
    "revision": "69de57562b6ab85f0d8d031ef68a6e86"
  },
  {
    "url": "assets/js/95.c7cb1509.js",
    "revision": "2c713b3f49ab91bcf26b990300e60608"
  },
  {
    "url": "assets/js/96.672d68d4.js",
    "revision": "f9bf9e27225fcf6094e45cd719e50a5d"
  },
  {
    "url": "assets/js/97.444d7db6.js",
    "revision": "991d056d7162a701be81bb1743aacc78"
  },
  {
    "url": "assets/js/98.e281f68a.js",
    "revision": "08b22254ca12804dcd5e1458e802caea"
  },
  {
    "url": "assets/js/99.c9e1ebd0.js",
    "revision": "724491c61a741462748044b89db44777"
  },
  {
    "url": "assets/js/app.75ff66d0.js",
    "revision": "3d61148c91397a7cc21b110a4dcd25ee"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "bd71c1fdedc0e2d002d7b803cb69cb30"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "86e9824abd6ca4df77a8e9e93ea24ec9"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "60bb4b756aa58f682a94b1d79976ef2a"
  },
  {
    "url": "de/effects/API.html",
    "revision": "b2583e18a82d2fd0123e1b0eeb59590a"
  },
  {
    "url": "de/effects/index.html",
    "revision": "1487527bc05222b808760cdf1439bd47"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "cdc115e4df483549f2165d9e6bd9e349"
  },
  {
    "url": "de/index.html",
    "revision": "f37fd14fd1e1970b28329a7092406374"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "f7dc812cde8d51fbec2a2ac81034fb27"
  },
  {
    "url": "de/json/Control.html",
    "revision": "6ab95cdab72135404b30c6acf942713f"
  },
  {
    "url": "de/json/index.html",
    "revision": "4d3e347870d691a24406c6aa80671db0"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "4310b365c89c1b967461fb9b4f87b41a"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "12cf1485ff746399b2335f94fcb40530"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "eb1c076e423355bee304f6b6c1d5153c"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "9ac202c06741aa01ed57e388eaf8c27c"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "3bf8d21b62e8c4129697bf49d4f72c8b"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "2eba5b8a6cc576835c2a2724abb5ac20"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "e01d05725bab8b5f2618746355ffb763"
  },
  {
    "url": "de/user/index.html",
    "revision": "c57e9766d1bdcf6677fd9f7b073d6b43"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "2e0cb8d470f7779ee905b2308f078d36"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "c76c94461491c2bf4c39f97ab992f603"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "7b0a2235f5d50501b6099f46985e6ad2"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "0546ae74c11a854dabfbe75a0d762d87"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "a54ae6f6258a012e7f1215ffc9c83ece"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "14e8c3f9f484dc9fe903209cd2fc6e00"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "cef296ff41387ac0a4fe549861aa3783"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "3c6111c558b1caebe4be0fc6bd362d5d"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "4fb94bec6bd98d11201620db3ecd349c"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "52f5e0430007a06361ce93ea46c8d078"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "053fc1dd9acf62f1405f8f5073ec4448"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "a55b86df210410261b48318391286b14"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "eb46e04c28cb3df50edb69823497c80e"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "b17bf4a16a0e999c7aa0d7d45479bc22"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "286c67f41d3aeb0461cb8df7f2eeaf04"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "b341be088fbd14ec66569b213ea21783"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "a991b604f922e641c7b5b7d1ceb79b69"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "8cb218d16aae7a307b468ae5ef2ab155"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "2602765df4e293d0a6836fd562d2e28a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "5507fdb75b8d6a7eb27119a95ce6e599"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "88ea6434161aa55afc5c7c5b783db815"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "939560e4849d495cf78f3f9ad13a3569"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "0fb1b20aa2038470e86ba1a1b58317c9"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "27d3389caa241a443f09f434f9c39591"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "f086ff4545360d16c41e1b20d1d3741b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "8c3d91ec8b18e1195d1b034eb1a461c7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "9f89bfbbdbfa960839877450d2269fa7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "a4ff28ecb24aa173d4badc9e85694437"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "9ad63124c149ad991a3633460e1af6bc"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "562bc10564e49100b1c1c63f4216aedd"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "93113bcf90fc3c1b895480d22d1e0384"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "ccc24854dfd719f296d638fc3f846b9a"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "3f0b5ba13e9186d02e0c8769febc68da"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "3831cfe4572f4ab937d173d983b5937b"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "48caa4aeabab0341c10c217b2ed1faa8"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "5224e83ebc7f1851aed9eeb0bc348548"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "80cfa61ce8333a7078290235f19a759d"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "4b73ac174df1327932dd1d7a1ace8f06"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "bbe92783cb4ba29412fef9f3ee1651a2"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "a3b6289f200fc1bef75688b7dfdfc648"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "0058010b0fc7505a87c753800ee8ec43"
  },
  {
    "url": "en/addons/API.html",
    "revision": "26b6ef1218159d0611eb0e246ddd27a6"
  },
  {
    "url": "en/addons/index.html",
    "revision": "c4e77b56e2aa92dbc55b3e614dae8ccb"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "daf8961a6fd863a2a4a8ef06cb9076e6"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "136913d9b4062b77474f91c4b4243ae8"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "bf7e23f8de93329f48287668b0cb3ebf"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "2428ad43415799bc91ed38059d67e9cb"
  },
  {
    "url": "en/effects/API.html",
    "revision": "574004de943505d7e587d508b382c631"
  },
  {
    "url": "en/effects/index.html",
    "revision": "92f51c473f404e028c36b86d67af4ef4"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "76fc7d4e35578c0c5566f010e3c7e7e4"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "72a5c900aa43fb76d319a67e80340e0e"
  },
  {
    "url": "en/json/Control.html",
    "revision": "5695fd6906546f232d63112926f23512"
  },
  {
    "url": "en/json/index.html",
    "revision": "156513816a508a9eae9077987b3bd9da"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "7d94053016afb164973c3c24772ebb52"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "fd8216a6522e926d8498453623d72f97"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "077f1f2f9a60e45848cb4baf523bc041"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "0863959d3daeb324428da5961bf0d8fb"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "17ded025f23e2fc6416640032a6de9e0"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "a26239a76c369fbf80b7e2c534b667e7"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "c4ab3c627fecd7a1fc8b48ef5f3d36d0"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "1fae0a9c48390a91db096ecc12c1b73c"
  },
  {
    "url": "en/user/index.html",
    "revision": "0e9558163b9c9f1f18f99d6d83c215a1"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "03f58234e94d8469ca70f1906192cc9f"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "5d750ee268c1f9366680d0f2c6afe67e"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "be682fd8e3a294bf112ff1e054f40b21"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "0ae5e54e4038305ac8e96aa36bceeb9c"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "b09ae1649c7f9567449f9e03a4538843"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "d709798f828fe8aa8cfec664ae412010"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "047f661f612364f87ab4a4933d2beb18"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "aa8237196231d93e813d25349dcb6fb6"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "9c9e97975243b97b14d0f31808c40e76"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "6d7702804b5fde9b1880f3f6154bb670"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "8d9cc2b9095d676345bba065c5e1fc4e"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "dec61f036eac053097634d7b2f3e5b96"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "2becd9395835d9324c357cecc774094f"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "cf00d584973c5957e03c4664f7800f52"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "2c87156ee39821f583228a241e5e27a6"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "321b0afaa7b75317676e9f364de05c1e"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "21ffb170fdefc792c2e8372b3093f241"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "b684e5d11cf1b76369d39731bf590c2d"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "fcec85107c98ab4a8ca4d13ed17a785c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "121e72a244984043257fc88e6b1a4e67"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "e4adfab8f224e395d4c0e8cbfc319c39"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "09ee8476af44f7e8702523685846dd79"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "8f3ad1d0a493c2b0dd2f1c1fe6aa9626"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "6b9baf64caa89f3d10fbb876f01783b9"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "a1e769998eac7fbab61b1d9e72d36628"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "9fbaa723ee84c7e4caab71b9aa82e444"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "90b64b181bcc1d6717790c24e8c599a8"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "d3b97da5a05f733d3b282f9c3081f480"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "a4b2f873710339812c6171fa90cc57da"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "0ca42da2e69e43c9e28089baf1782aab"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "c88d26264f0e0f62ed77d9d4c787bf3d"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "1a551d5a58678b61727a879fbe6a950d"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "fbd0fed5e4b1f9ac01ca9cc174f4194c"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "d2f1e5c52f9e5179f5d2ea71295915f0"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "88ce7adf48e4888e48a5274c4f2a7e83"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "6afe975c5b53f0f45bd67ef7b663e677"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "c708f9e85b1a869384ea202201e07992"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "b81fda5cb784104a95b557a37c984458"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "b4e95c88cc538587933a3ad56653f580"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "1400892e06fbb8a77d9e8849153878ca"
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
    "revision": "fafff355817acf5453cacdc1398176d6"
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
