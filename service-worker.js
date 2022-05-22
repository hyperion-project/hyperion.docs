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
    "revision": "3e1e3015b34c2e678b45ce5360bd4e03"
  },
  {
    "url": "assets/css/0.styles.95e09991.css",
    "revision": "abd0de4369a1dee07b7b7714b1bbadff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.3e6d837c.js",
    "revision": "148230d5abaf7e6b215975bfe6021d97"
  },
  {
    "url": "assets/js/10.f6a47d3b.js",
    "revision": "808d21a99b6bfc2164e364830743f385"
  },
  {
    "url": "assets/js/100.a4216ee7.js",
    "revision": "698e0aad4b468ed3c93df8890d6917b5"
  },
  {
    "url": "assets/js/101.c7e939eb.js",
    "revision": "f83e09378e770b41af741705e8bf989d"
  },
  {
    "url": "assets/js/102.93a5118d.js",
    "revision": "6bbcee1d7fc8d81b4bef083885dff5a7"
  },
  {
    "url": "assets/js/103.0cb01197.js",
    "revision": "c11f771208eaf24a9aed370dfb823b7b"
  },
  {
    "url": "assets/js/104.e02e1c37.js",
    "revision": "ddda778468331b545c28716009892111"
  },
  {
    "url": "assets/js/105.9e1d8748.js",
    "revision": "060b1a725c6015e5eb31384d2505fb84"
  },
  {
    "url": "assets/js/106.ca0bb79e.js",
    "revision": "7dcee72d34e7e2f0419d5bec650fe0b6"
  },
  {
    "url": "assets/js/107.4af98b3c.js",
    "revision": "e44312a1f0d35b123e80dd712c8314d4"
  },
  {
    "url": "assets/js/108.f67241ca.js",
    "revision": "867dd43220fdd0751cc2f83ec79d646c"
  },
  {
    "url": "assets/js/109.3cc38ed2.js",
    "revision": "1a724e1a4df826bee246f8c52274e38b"
  },
  {
    "url": "assets/js/11.3819474a.js",
    "revision": "340dacd005536bc341f32f0aa7b011ea"
  },
  {
    "url": "assets/js/110.4b0b2309.js",
    "revision": "8aeef2ad7774d1bea30a8de3ac0fe083"
  },
  {
    "url": "assets/js/111.92dc868f.js",
    "revision": "141ca9ca8854fd6077f9f61474ba485f"
  },
  {
    "url": "assets/js/112.a7e02e6b.js",
    "revision": "e0a5aedc28c08d63b91a8a53f4f8c47a"
  },
  {
    "url": "assets/js/113.78af6040.js",
    "revision": "cd648f77c943c8af99eeb63c5a3d49e7"
  },
  {
    "url": "assets/js/114.e316e38a.js",
    "revision": "a70338060b40a8265a741ff8981da34f"
  },
  {
    "url": "assets/js/115.7b4dac11.js",
    "revision": "cd6ea240d2450dd4453d76f7a0b7a5b0"
  },
  {
    "url": "assets/js/116.aa6ce8ac.js",
    "revision": "a66c45a2480193b03bbccd2e47d62091"
  },
  {
    "url": "assets/js/117.6af98eef.js",
    "revision": "39ecc8cf1bc914651afd6b0b2552e4e1"
  },
  {
    "url": "assets/js/118.c71782f3.js",
    "revision": "92591f82c9fcb72eac04362b760416e7"
  },
  {
    "url": "assets/js/119.d1ce9072.js",
    "revision": "0dcc6ffd53f18a90f7937d5078d55343"
  },
  {
    "url": "assets/js/12.34557d1f.js",
    "revision": "cc38d33bd46f90e251a356f8e6c5ab1c"
  },
  {
    "url": "assets/js/120.235b92ad.js",
    "revision": "af6a7758d3da8c6e39c159cfffdd5d8c"
  },
  {
    "url": "assets/js/121.11029d7a.js",
    "revision": "c7f28fdb3e98dae1cd46493be25a1619"
  },
  {
    "url": "assets/js/122.aacfb04e.js",
    "revision": "acffffecf434ec85e12946acd2053854"
  },
  {
    "url": "assets/js/123.ff07bdf9.js",
    "revision": "02d7ce2a17cf7b60b648ff5474c2fa35"
  },
  {
    "url": "assets/js/124.38cf2934.js",
    "revision": "a80406b2bd3847e2d100bf3680afb7d4"
  },
  {
    "url": "assets/js/125.2b8e6e0c.js",
    "revision": "42cf6a4c6199699abaffddb7d5dbe66b"
  },
  {
    "url": "assets/js/126.d5e7d9ac.js",
    "revision": "113eb31ee18245923d6912f94c36d10e"
  },
  {
    "url": "assets/js/127.e1d8c34e.js",
    "revision": "203e9da626e361c45a65017d7ffa88af"
  },
  {
    "url": "assets/js/128.4a1c37fd.js",
    "revision": "167416e130488d71efb540cce2de05a8"
  },
  {
    "url": "assets/js/13.a86d3909.js",
    "revision": "8c116f10554be6212ca79a1827df978b"
  },
  {
    "url": "assets/js/14.96d141aa.js",
    "revision": "2f82bf552dfa910c61a9ef8480116bc2"
  },
  {
    "url": "assets/js/15.5441e64c.js",
    "revision": "304d5caceac12ef74847ac6882b58c97"
  },
  {
    "url": "assets/js/16.fc85ec0d.js",
    "revision": "f9c061fc0f33b0e2d16830bd2d51da22"
  },
  {
    "url": "assets/js/17.cd973cd0.js",
    "revision": "685a0f4524bbed2bfe0242b1c9a2f668"
  },
  {
    "url": "assets/js/18.40829b8c.js",
    "revision": "276091b1c28de1db6a73f522d6f4993c"
  },
  {
    "url": "assets/js/19.346149ad.js",
    "revision": "1b445d426fc50bfc8009f07fc93e8429"
  },
  {
    "url": "assets/js/20.8beb1f71.js",
    "revision": "022a053d147c164c587fc43066717c53"
  },
  {
    "url": "assets/js/21.325337e0.js",
    "revision": "081e9b9b56b1edfc761c59083999fb48"
  },
  {
    "url": "assets/js/22.d924fee8.js",
    "revision": "dc7163e8d766ad227ea9e1cc5c9dd498"
  },
  {
    "url": "assets/js/23.d541d6e1.js",
    "revision": "b89a3e18e8727b66fc522a77e752d2b2"
  },
  {
    "url": "assets/js/24.cd3f74a9.js",
    "revision": "3b39f3fefcddc3beb77288970f4abedc"
  },
  {
    "url": "assets/js/25.1122f5ad.js",
    "revision": "cb226290e18eaadb9d56185b6ecd6d57"
  },
  {
    "url": "assets/js/26.cf27cd5b.js",
    "revision": "28def9db6ba98bf2c16850981e31aa85"
  },
  {
    "url": "assets/js/27.5fd69925.js",
    "revision": "e78cfea780baed2b42faff011880ab1d"
  },
  {
    "url": "assets/js/28.f7f28a9c.js",
    "revision": "23c5d37d0d54c36ce1f50138ec33bc34"
  },
  {
    "url": "assets/js/29.efda609c.js",
    "revision": "5046b41c264289174df899b294ed07d2"
  },
  {
    "url": "assets/js/3.e0f52078.js",
    "revision": "9668db8a070b267f28e8cc06815b3286"
  },
  {
    "url": "assets/js/30.815f706a.js",
    "revision": "75e2960ca7f948f00304a0e46d3717d5"
  },
  {
    "url": "assets/js/31.90d41123.js",
    "revision": "b0b2ed99f375fe4aa19551eb661893a9"
  },
  {
    "url": "assets/js/32.4a4f8a5f.js",
    "revision": "7e20f888980ea83c61410df4d07e4dc5"
  },
  {
    "url": "assets/js/33.a8d6cd4a.js",
    "revision": "1dbd02f3e9892dd095149fe7db428cdc"
  },
  {
    "url": "assets/js/34.c2945674.js",
    "revision": "c8a030d68d5fcfba235e0a6b5039e5fa"
  },
  {
    "url": "assets/js/35.6e53255e.js",
    "revision": "2e39474a019c5ab55a1ef211e402085d"
  },
  {
    "url": "assets/js/36.5a074feb.js",
    "revision": "f66d0b8fbf5ab61dc53d7369cc1c01c7"
  },
  {
    "url": "assets/js/37.6e00fa5c.js",
    "revision": "69314868a0d2e2413bb417587b6a62ec"
  },
  {
    "url": "assets/js/38.c4ff9091.js",
    "revision": "ada5908541819f8062d7cc6850e1e4a6"
  },
  {
    "url": "assets/js/39.be28a52c.js",
    "revision": "d75e87491031871734ff6acadb0053f2"
  },
  {
    "url": "assets/js/4.33805f6c.js",
    "revision": "63c1b82aac16d36f2e648640c915beae"
  },
  {
    "url": "assets/js/40.d356f1b9.js",
    "revision": "0df28ea57809fbe1ac0fdf4a5116e434"
  },
  {
    "url": "assets/js/41.2ebf629b.js",
    "revision": "b3cad14c16d3b1f5de2cc4375b41f2ef"
  },
  {
    "url": "assets/js/42.448ed057.js",
    "revision": "9365b24d4ae6573e7ec977fab79252b2"
  },
  {
    "url": "assets/js/43.7d781eb0.js",
    "revision": "9d47bdcb7c0ac7f946f9ad2d3c145752"
  },
  {
    "url": "assets/js/44.cd75f0d0.js",
    "revision": "1a686fb9fe2568ebcd6b824a9eb4a34b"
  },
  {
    "url": "assets/js/45.03755ff5.js",
    "revision": "ce4dede4ee9e682132842732762f8a45"
  },
  {
    "url": "assets/js/46.b9693721.js",
    "revision": "641ab91085c0a5f29506918524357ae4"
  },
  {
    "url": "assets/js/47.4d4ec1c0.js",
    "revision": "f5ddcf3f394b1f56269fbb34e939f398"
  },
  {
    "url": "assets/js/48.85394f82.js",
    "revision": "713ee217847720c14e0d28b68ec7b109"
  },
  {
    "url": "assets/js/49.68ea6901.js",
    "revision": "312d98eee0bef11ec7e67ca7ed7f1d40"
  },
  {
    "url": "assets/js/5.eea23437.js",
    "revision": "d696979eed5e5690546f8a599d88abb3"
  },
  {
    "url": "assets/js/50.7dad9779.js",
    "revision": "1b387d317dab8ddf90e14e4600a798ab"
  },
  {
    "url": "assets/js/51.13994ab2.js",
    "revision": "a7c9174d73631d6accb0c681a78345bb"
  },
  {
    "url": "assets/js/52.3005628d.js",
    "revision": "f2734d4d36f0e4640e255e14afd231d8"
  },
  {
    "url": "assets/js/53.caa812ca.js",
    "revision": "ad156ef978dbd508ca3c23eab6e9b2aa"
  },
  {
    "url": "assets/js/54.d031509b.js",
    "revision": "72443da5b86665356cae8a281239ca6b"
  },
  {
    "url": "assets/js/55.95fe1238.js",
    "revision": "4766d3b6f5a8332060b190f013ae4986"
  },
  {
    "url": "assets/js/56.6900aaa8.js",
    "revision": "0821c4d27649d98a0311861e97af5ad8"
  },
  {
    "url": "assets/js/57.9a068bc8.js",
    "revision": "67a7500a63d2b37076d300100909f1bd"
  },
  {
    "url": "assets/js/58.57c68676.js",
    "revision": "41a68439ffcee98c10c0375034d5229b"
  },
  {
    "url": "assets/js/59.260c411e.js",
    "revision": "634e80662a988f3dafbfa001e0c29ce2"
  },
  {
    "url": "assets/js/6.4045dde8.js",
    "revision": "ab80f1b759229485915a6ecbae788b2f"
  },
  {
    "url": "assets/js/60.bc8af10e.js",
    "revision": "2dfc3dc5148a6360c66bca55ad4f83e5"
  },
  {
    "url": "assets/js/61.c114e9f4.js",
    "revision": "262cf333b64031a8d63282b6485b164c"
  },
  {
    "url": "assets/js/62.ac0d8326.js",
    "revision": "27160095d84ccfe3fa0feb0e9283eda2"
  },
  {
    "url": "assets/js/63.763b441b.js",
    "revision": "ea25275c30fdb7319ae6bd69fcfc08f6"
  },
  {
    "url": "assets/js/64.743d3ff9.js",
    "revision": "654730bfc465a65bf080b2d6a82b68e2"
  },
  {
    "url": "assets/js/65.12d6d1da.js",
    "revision": "97955d69518c122b1e416b3b6135e9a7"
  },
  {
    "url": "assets/js/66.c4caadd2.js",
    "revision": "9dc01499437097ffe5ff485290ec3bb7"
  },
  {
    "url": "assets/js/67.c4bae8f7.js",
    "revision": "3e9d476467259336e9c60105cc3d0ce1"
  },
  {
    "url": "assets/js/68.f5ce41df.js",
    "revision": "2f58b62af4590635ae04743de1e919c5"
  },
  {
    "url": "assets/js/69.3304ae75.js",
    "revision": "9bc2d3cb9865c9063049a1d4f3644b49"
  },
  {
    "url": "assets/js/7.5fe056a8.js",
    "revision": "578559c4e4bc9bc0b22691b10a6da87a"
  },
  {
    "url": "assets/js/70.4255a761.js",
    "revision": "2bfe1c205e1147ee8af720527f7ea5c6"
  },
  {
    "url": "assets/js/71.5ae96b0c.js",
    "revision": "99e905e6d7941ec1b147bf2021c49d58"
  },
  {
    "url": "assets/js/72.5ac52262.js",
    "revision": "4fd6ece218408a7172f28c317300f123"
  },
  {
    "url": "assets/js/73.afa0a42d.js",
    "revision": "b014e5e97c4c8050cf9c92fe67de8c91"
  },
  {
    "url": "assets/js/74.41093c39.js",
    "revision": "bf4102ad66e7a443911dc3ff7ccc63b8"
  },
  {
    "url": "assets/js/75.5c0c6382.js",
    "revision": "46c75ea1a5922f1b98822d825b1d7df7"
  },
  {
    "url": "assets/js/76.463beda8.js",
    "revision": "2a0e3cd64e81e512c6d8c84eb87e80eb"
  },
  {
    "url": "assets/js/77.b7786627.js",
    "revision": "bc554eee1bf08837eb91c8a195a19419"
  },
  {
    "url": "assets/js/78.901e542b.js",
    "revision": "63ffef6c876e4bdaf87ecf4afcb11004"
  },
  {
    "url": "assets/js/79.1a91c0d7.js",
    "revision": "546232f0838e8b606f865157985ccf60"
  },
  {
    "url": "assets/js/8.47651549.js",
    "revision": "cc5041811b654b9e08f112c64e7f0407"
  },
  {
    "url": "assets/js/80.ae124f6c.js",
    "revision": "e1367484d91a1bd0ba0d3f14aff28c77"
  },
  {
    "url": "assets/js/81.b7824832.js",
    "revision": "6f3fb97b02f875ca046e54bcdc63fe3b"
  },
  {
    "url": "assets/js/82.d4033b0a.js",
    "revision": "5413111dcb2429de925d82436c5fe7d8"
  },
  {
    "url": "assets/js/83.df4a57a8.js",
    "revision": "4a9f9770bfdb623930219fbec0e6ea5f"
  },
  {
    "url": "assets/js/84.2ef788b9.js",
    "revision": "c075602ac1632cc3280f9c50f242d26e"
  },
  {
    "url": "assets/js/85.8618bddd.js",
    "revision": "c46e14f7fb2aa72bd1860349d8dfb9d9"
  },
  {
    "url": "assets/js/86.aa62f68e.js",
    "revision": "9952b6dc0fcbb6f8e96060ab2b56c873"
  },
  {
    "url": "assets/js/87.dfb96c71.js",
    "revision": "3fa0234ccd30562c6e5013128a5af96a"
  },
  {
    "url": "assets/js/88.0b516721.js",
    "revision": "0206d92fbc5002d75ac18c95ebcedeeb"
  },
  {
    "url": "assets/js/89.f41ae373.js",
    "revision": "8d0b41ce9a0fbd05289f0e3aa38119d4"
  },
  {
    "url": "assets/js/9.90486955.js",
    "revision": "2d720a2a7cd107cc34b432e0aad3c93f"
  },
  {
    "url": "assets/js/90.1b76d2a6.js",
    "revision": "693910d4c0c556329bbb2c24c86e688d"
  },
  {
    "url": "assets/js/91.ed87c7e4.js",
    "revision": "ac63e52381a2821a6027479e71b61f3d"
  },
  {
    "url": "assets/js/92.4926d150.js",
    "revision": "f9fbe2ca62796fb9222c0d1304657afd"
  },
  {
    "url": "assets/js/93.c1075b7c.js",
    "revision": "6ec4ba658a903f3f6975b541e7d97d84"
  },
  {
    "url": "assets/js/94.c17019f2.js",
    "revision": "c11f2f2be3d11e71e2a31574a2f7224d"
  },
  {
    "url": "assets/js/95.fd702279.js",
    "revision": "bda1437bed0816c33682c8a87fbc355a"
  },
  {
    "url": "assets/js/96.4862b953.js",
    "revision": "04aa67ba11d9eac4e9b2dd918ce7c168"
  },
  {
    "url": "assets/js/97.3e728b79.js",
    "revision": "28198c87a1892cb2628103a748b581a7"
  },
  {
    "url": "assets/js/98.1eaf201e.js",
    "revision": "6fdff7b0fea01916c74d4c6bc3d44257"
  },
  {
    "url": "assets/js/99.749076f5.js",
    "revision": "1ab8a54382b27a0985a5db7c6ae30a29"
  },
  {
    "url": "assets/js/app.333fefef.js",
    "revision": "a3295811cf07dde7b415656568be10a8"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "018841cc94ff916c324927eece1ffb7b"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "ac729b54e460837adc0fe704007e2478"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "2350213c944d3de344d5ae96f1f4552d"
  },
  {
    "url": "de/effects/API.html",
    "revision": "e5e0d3c7052d06a9ae94b64e5fbc159e"
  },
  {
    "url": "de/effects/index.html",
    "revision": "4472245c17fac0d482360f40bd9b0e8c"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "5bb0f6d49e3df58569d6a7ddab5b3ccb"
  },
  {
    "url": "de/index.html",
    "revision": "5fc0e4027986d63254ac11bb2664b3ba"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "c1fd26b1f09de4af225b68f7eb66d21c"
  },
  {
    "url": "de/json/Control.html",
    "revision": "20a51017c747bbed9297b5e106536266"
  },
  {
    "url": "de/json/index.html",
    "revision": "49ab60873b14549046bf62ac9c5d4902"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "b29df3fc8a6937de6f5dc6d7b81f8e21"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "0f8b23cbfcbaa4e7bd8c8252ac83c68b"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "ba0a2711e2402c94a49d24323eb36cf9"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "c448ba3a3f9f0f9c0ce1f95a2a14799f"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "af6bc61ebba6fff5acb9f6b037609987"
  },
  {
    "url": "de/user/index.html",
    "revision": "cf8577108193588790a4b86587fe0304"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "4d6095957ffe502fbc5c42683791c89b"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "f0e8e341c43ca91cccb731c6cbd00b92"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "9cdbdb95aebc483df1a098e3a82f0863"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "20755129be191958e3e9bceef929fd2f"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "ece4e1e76c9f9ca4351e5f9d063037ac"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "47da2566aacd1e3cbd7c4bd9eb151c1b"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "4ca186eab546caba159087077a215775"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "27af0231db00a2bb1960e2d583183720"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "b9b4aa3ad27f63f1ddfa12558f514878"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "a16ce191ef59a188666fecc562a4211d"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "f88e10f146819c75d088dacdd935c47e"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "00951e76e698911c7d0d1d0f96118a3d"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "f482e8a9cfc0e39f2bd8e934a3bf7621"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "685658f95e37354e971c668e29ddb9b6"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "0fc4a580fb9830640881eeaeb7b7b8ba"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "c17ad1f9a4e5d72bd655c4de3e40da42"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "369f758e5e8ac15fd003e81ba76083b9"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "1b36292cdcde834d37175f11c5635d02"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "0d8d8a83f13b0466645119c3b68a84c8"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "dba740682c446684f26ec1c45e9891dc"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "3a93895d99905ca2e39b61c4ce898eaa"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "11dfa3872f91bbadace64d1ef88e90f1"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "52f4fbded255fcef2b480e73058496b8"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "27ae703b0d0e868425683998f7fac099"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "b5ee463c9cd8c8bd222f58439bacab60"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "50040f41001bca5dbbd9ed40a51f947a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "d123df4d2a9add10ba9099351c3a4666"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "cfaed4d645b612ad9139b1515ca2a2a0"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "f29e7f37cf838a298ded1313e2a46bab"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "ac506d6891e84bd6fbc293a65034c0fe"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "5f307e096d356898933c408dc6c42309"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "5523b00e44428a4f458bf301adb16ffa"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "6c92d102fc9f7175cc71837d715af704"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "85b24ef88ca8a52fc4b169785f3e11e3"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "e726ec9a272ac8ef887d85bc26a0d750"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "dfab49cc577e7c341375ab56f4ae9090"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "5218fe990dbe13768407358a70e342a9"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "0edcc70f3bc5439d61ffaeb04c78f74a"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "f92e1c64fdc6033ce142f5e09bc26176"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "793a60a4218e5e97daedb173a4a5928a"
  },
  {
    "url": "en/addons/API.html",
    "revision": "3e091d7c98650bacd943ffa2d58208f6"
  },
  {
    "url": "en/addons/index.html",
    "revision": "d77336c8d345fb00e05f6a5ca41d3c48"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "93b3b2b73bc5e3cea1d40ccf3068c9bd"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "c25eafe57a1b6813cf590f9db46e4db5"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "9ec05293c7b131c08e53fa7f71a39a10"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "a05ed5b346ca107e946bf17ced3b4da1"
  },
  {
    "url": "en/effects/API.html",
    "revision": "341c5af127af202116ebc9f326d3a4d9"
  },
  {
    "url": "en/effects/index.html",
    "revision": "e1576c5db5a1656026de8c00b28a3094"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "fbc317ce3a0bdde77ea63ac610740695"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "18deed9b2e5f558ac85fb0e642a9efb8"
  },
  {
    "url": "en/json/Control.html",
    "revision": "51f04ce4bd462e11a014face44917c19"
  },
  {
    "url": "en/json/index.html",
    "revision": "b1a9400614faf7d9a160ad094f67f861"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "f464b2a51066312d29e2545562e48d61"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "5bda3af2615acd4e1bf9ee0f54fffd68"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "e09a7fa6a9ca5b30b94ba4d6b3208b2d"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "a7f3d3e34acc05e9c22b3d2a222ffcb1"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "f3ee5cb0573ea08a73778d5e7782fae8"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "de3e49ed8be2c1acfc5c03f4c77cd0d2"
  },
  {
    "url": "en/user/index.html",
    "revision": "4beae146c793b96adca25e82290c534b"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "a12c7f1fbe50ba323d4c53af07cf22a2"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "2db1af479e73c84dd4d0a3947f3b57ad"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "41f5034ec5c25c293835655242109cca"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "74c762467c74471001129553554d1b62"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "a67276ff16592ba2154b7176f98f9f47"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "a229f552daccd11d489071811c3fdaee"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "5d4842b11cc182578c9623d4d461977e"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "a7910196039165e4a3f4041daa190433"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "c37226d9b687e4eb64bfe8160a34bb05"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "232b9e738f9a6784e702b04308deb222"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "f09d6713c6b589c4ba0c2bb0d1c45217"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "1df33dc55a0b61c276e54e01892f4720"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "3a69be6490acabbe35fb28114323d943"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "ce7837cd37b0296b10f4fca9476a26cd"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "a8417dc5e48d7e1e8277897144373fc0"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "f2e6c54e849371e0f932fd74cebbdb79"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "0135ec2e9cba0f7b354023a5e7548e76"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "d001d269f36fd77fefb4704afa35b4dc"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "8b16fe87791cb0181787b8b67529bbcf"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "471ac7fac6c7232b36062c2c68303312"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "cf8a698a700c1c4cefedcdded7b96dae"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "de53098b0c70ea3d74a7b27925b5c870"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "e70ba2cb780d211ac8abdb403ed4dbe9"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "0775a39657b4b8c00509578b85b6ec6a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "872a93d5a439a7bfad38a661c05eb4bc"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "ab051377cd7157fcc81e82b4fe5aaceb"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "f28205b0f91f57e38d2e7f1a88dec61a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "342fb430db30d8284eb48419844a1d37"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "eaef94489678c5ac2c2ee37a3968553a"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "f570cdae8fb6b5a8ab9e7f3192b847fb"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "f16cc4c159f5dc784eb9aa836f959fb1"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "a1df9c90c9f5c6406fd4a33b55a4f10b"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "efea1d009bada1b8ea4ff946ce8ed371"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "c64046c97bacc808f7e801c7aaef82c2"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "c0bb17e0f3d1493596e4e3a3b43a5814"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "9620b73d3f977c0b70826689d9a9cbc7"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "fc8b2f6c0eea06047f4e97f8fb9956e1"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "89ce2bb31639c175f70e5da646b5a1fd"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "2649b4228fff62b0e50bd418991143ba"
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
    "revision": "1af490c90d30e54ec9f3c28c73bcc52b"
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
