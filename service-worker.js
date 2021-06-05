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
    "revision": "945a87235341c3807275095e0bda2c1b"
  },
  {
    "url": "assets/css/0.styles.a7880592.css",
    "revision": "5bde3b3b162fee7d8aecf564f799cab8"
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
    "url": "assets/js/10.0277ffd4.js",
    "revision": "e8904011a5b2482470f942ab17891ed3"
  },
  {
    "url": "assets/js/100.df2d018c.js",
    "revision": "5ec628ccbff6b19f302394252da27b93"
  },
  {
    "url": "assets/js/101.31889bde.js",
    "revision": "45822f4edcf633e9a969f49edb590ecc"
  },
  {
    "url": "assets/js/102.3705978c.js",
    "revision": "77d120053dcd3fed494cca2d51407590"
  },
  {
    "url": "assets/js/103.93853dcc.js",
    "revision": "38336a60500d79977ce1519274bb5362"
  },
  {
    "url": "assets/js/104.35256f42.js",
    "revision": "c1f806374dee9373f41f78e5f4546310"
  },
  {
    "url": "assets/js/105.09bab73b.js",
    "revision": "53d2df17383dd0b81dec24f1b55aeb74"
  },
  {
    "url": "assets/js/106.1ad7a30d.js",
    "revision": "e0d14adc14f7db3746d697deaf082845"
  },
  {
    "url": "assets/js/107.482abc97.js",
    "revision": "8811c7b585ff3c23fd83b6c1c9e86922"
  },
  {
    "url": "assets/js/108.8c409228.js",
    "revision": "6787fdbd0b7a2f8798c67274c7bc7efd"
  },
  {
    "url": "assets/js/109.372c6ec4.js",
    "revision": "3b467ff08ef2bc57e343c142b85589ec"
  },
  {
    "url": "assets/js/11.d4d2d97c.js",
    "revision": "f5a8003c2a6bb60faa4e7a267877170c"
  },
  {
    "url": "assets/js/110.1a8b8f53.js",
    "revision": "913c1b31c84123dfafacb8482bcf9c47"
  },
  {
    "url": "assets/js/111.4e833890.js",
    "revision": "b2c777fd34aa6540e1e6bbfbe241bb4e"
  },
  {
    "url": "assets/js/112.e3909aa0.js",
    "revision": "4890e96d2c8475097eedc162fb74318e"
  },
  {
    "url": "assets/js/113.83b61b9d.js",
    "revision": "024399e699d75823e1f2705bd212fffd"
  },
  {
    "url": "assets/js/114.9370e5d2.js",
    "revision": "c17dae329f0b7f4739265e8d6520c1cf"
  },
  {
    "url": "assets/js/115.cdcb7d41.js",
    "revision": "c4a0534a03c0c900e0d8bbac3f92573d"
  },
  {
    "url": "assets/js/116.b56c0def.js",
    "revision": "a17caf9b49e378b6463039e36230597d"
  },
  {
    "url": "assets/js/117.6d259aec.js",
    "revision": "34bcce1476a60ce10ac1cab3b0630b4b"
  },
  {
    "url": "assets/js/118.fa575b08.js",
    "revision": "e46c13511aa26cc913badc300f922cde"
  },
  {
    "url": "assets/js/119.ae4f06d9.js",
    "revision": "3bef80c066ba3257bb0f9ce18f51c305"
  },
  {
    "url": "assets/js/12.f04acebe.js",
    "revision": "90251245b979056700e635137c1b5176"
  },
  {
    "url": "assets/js/120.cab210ea.js",
    "revision": "0952217da037f1baa346075500bad9e9"
  },
  {
    "url": "assets/js/121.7254c99a.js",
    "revision": "6bf059de3472fa4b93806d28716b94f5"
  },
  {
    "url": "assets/js/122.4c9a6ed6.js",
    "revision": "d9de177dd0bf12d29bd9a67d642d60df"
  },
  {
    "url": "assets/js/123.e7545053.js",
    "revision": "a581c3ce16e6d46c774445b5d94fc99b"
  },
  {
    "url": "assets/js/124.29273208.js",
    "revision": "e3862b0fa583d28fcd89a4fc8dc552de"
  },
  {
    "url": "assets/js/125.3fc91cd4.js",
    "revision": "e03754b727e19ffe348fbb6d381663ac"
  },
  {
    "url": "assets/js/13.482a47f2.js",
    "revision": "9b596d02f19e229baa8b421a40774188"
  },
  {
    "url": "assets/js/14.6b127884.js",
    "revision": "217384ee0d893f1e563f99c59e944aab"
  },
  {
    "url": "assets/js/15.0c34cf49.js",
    "revision": "fc7711b7094bb0d330db21d028b944a0"
  },
  {
    "url": "assets/js/16.09542060.js",
    "revision": "eb848e7f3f55af8cd08d1668645a29da"
  },
  {
    "url": "assets/js/17.529f2bd2.js",
    "revision": "50099a95ccb51eaf61e4fa71a547d85a"
  },
  {
    "url": "assets/js/18.986f7fa2.js",
    "revision": "fdc87798b6a3fb50d51e14c47becd082"
  },
  {
    "url": "assets/js/19.c3be8c32.js",
    "revision": "688e46b3ad1149396f5a78a603b8feaa"
  },
  {
    "url": "assets/js/20.2286ce32.js",
    "revision": "b71c6bf4b09056e2673c9e01b903ef44"
  },
  {
    "url": "assets/js/21.ca0f63b8.js",
    "revision": "160418c015ce9ae7e4d063d4668bc2ec"
  },
  {
    "url": "assets/js/22.08972e24.js",
    "revision": "0c9c912ac99e2ea2af8746126d909c89"
  },
  {
    "url": "assets/js/23.915b6ece.js",
    "revision": "344aba7c984a653c3536029b82a41c1c"
  },
  {
    "url": "assets/js/24.e5d515b2.js",
    "revision": "f7f78036303b6acb23f23bdc9fdd5698"
  },
  {
    "url": "assets/js/25.7b6adb43.js",
    "revision": "2ff4348d79d66dfaba87fe5af4e7e8c0"
  },
  {
    "url": "assets/js/26.aec48c55.js",
    "revision": "0df0b19d12fd1d56a77e4cedb214aa6c"
  },
  {
    "url": "assets/js/27.934432ef.js",
    "revision": "c66293a3985a905e57c4a7e6d0ca128d"
  },
  {
    "url": "assets/js/28.3bce605a.js",
    "revision": "026f73b92f27a967b4cfb0ac3e362e1f"
  },
  {
    "url": "assets/js/29.e3dea7b4.js",
    "revision": "0e4b6e5cd5927220501a1a03a756d36c"
  },
  {
    "url": "assets/js/3.b8e8312a.js",
    "revision": "7b783085c30ae1013d07ff60c07afa8e"
  },
  {
    "url": "assets/js/30.3c038624.js",
    "revision": "71946026f6896e758b9734c8cff90992"
  },
  {
    "url": "assets/js/31.b3c40768.js",
    "revision": "227e9b6d2ddc6890ed0f5575748cf78e"
  },
  {
    "url": "assets/js/32.1a9c3f73.js",
    "revision": "0fedd11af4aa1150abb221927db75d80"
  },
  {
    "url": "assets/js/33.803ac61c.js",
    "revision": "9b423c3dd16dfffd36aa117b6baf5d0d"
  },
  {
    "url": "assets/js/34.7d5cc4f8.js",
    "revision": "185941b5e2b1f33c39f53f15d1783d13"
  },
  {
    "url": "assets/js/35.dd549d57.js",
    "revision": "cfc922fc91ae3004851672b38311536c"
  },
  {
    "url": "assets/js/36.19dde78f.js",
    "revision": "23a1431cb214819db7ab815e1283ec81"
  },
  {
    "url": "assets/js/37.64bb624d.js",
    "revision": "b1ec7b6f3ae67e1fc36a48a150297857"
  },
  {
    "url": "assets/js/38.ae4d7893.js",
    "revision": "a1471009a6dca3a78d9d34c7d0de3f48"
  },
  {
    "url": "assets/js/39.ed0be2f8.js",
    "revision": "67d1b50ebc0b6591ca64c58deca528cd"
  },
  {
    "url": "assets/js/4.21b6e6f3.js",
    "revision": "db46cf49dbdb4ab474f5a632bacb4942"
  },
  {
    "url": "assets/js/40.4ec66cc0.js",
    "revision": "fab050c5849195be57eb5321519ab19a"
  },
  {
    "url": "assets/js/41.887f9078.js",
    "revision": "9bec050268398b7ec5324ee450782ee2"
  },
  {
    "url": "assets/js/42.0fe9d13e.js",
    "revision": "2dc8f9c88993d8bd306bc4ef43a60ea8"
  },
  {
    "url": "assets/js/43.b95a6aa9.js",
    "revision": "f95815632a999f1efd44564de1c79a5c"
  },
  {
    "url": "assets/js/44.42d7938e.js",
    "revision": "dd13318d1e43c9f1d4025de64b571234"
  },
  {
    "url": "assets/js/45.68f514c1.js",
    "revision": "86f20cc6fe99b3aafdb56db08e7b2d47"
  },
  {
    "url": "assets/js/46.24c2a1c0.js",
    "revision": "a0026e3399916ff4c726d9588e0c362f"
  },
  {
    "url": "assets/js/47.b98f3e40.js",
    "revision": "bb5124a29b21eca107428ff11cd3f849"
  },
  {
    "url": "assets/js/48.81f06c0a.js",
    "revision": "6b9b48c78faa45b42c98dfd932d0b09a"
  },
  {
    "url": "assets/js/49.77a03327.js",
    "revision": "d538093dfb97563284932e6b0535e365"
  },
  {
    "url": "assets/js/5.9bdec314.js",
    "revision": "435f915ccdfd0c7159ead4816b932292"
  },
  {
    "url": "assets/js/50.f2e7985b.js",
    "revision": "3daaef2f0401a93aba513e93b6017a57"
  },
  {
    "url": "assets/js/51.43936b2b.js",
    "revision": "d88ecf8331cee77ef715387b037e1698"
  },
  {
    "url": "assets/js/52.63d07ad3.js",
    "revision": "b521252a5eb1b5c4ca9ae779d101988a"
  },
  {
    "url": "assets/js/53.9c855fb5.js",
    "revision": "4107b82d81ad9a2cc1bfebac7d3ecfac"
  },
  {
    "url": "assets/js/54.e616d1e2.js",
    "revision": "0819cfc5013efef134fca597df7ed999"
  },
  {
    "url": "assets/js/55.48db8c74.js",
    "revision": "75971ebdc3a13512115db75a17ac10a7"
  },
  {
    "url": "assets/js/56.eaa7bd43.js",
    "revision": "f333031dc5c07664814144de642932e3"
  },
  {
    "url": "assets/js/57.2608b2d6.js",
    "revision": "1086497f5a98553110e4d53b34e76444"
  },
  {
    "url": "assets/js/58.32e5b2fc.js",
    "revision": "7433dc428fa95f69c4da8c28e87126c5"
  },
  {
    "url": "assets/js/59.d0d8d369.js",
    "revision": "007ee3fb76945ae5b3c6e879d718410f"
  },
  {
    "url": "assets/js/6.e2f6bf4c.js",
    "revision": "c7a4d7a2dfd3cf4efe864d99a7feb9b1"
  },
  {
    "url": "assets/js/60.2897ddec.js",
    "revision": "083650a93da52618e744fa10965c78a9"
  },
  {
    "url": "assets/js/61.7adf6382.js",
    "revision": "7681235515117b07d71c5ac400e18bb7"
  },
  {
    "url": "assets/js/62.270114cc.js",
    "revision": "261151749f4525e1bb1614d2937482e7"
  },
  {
    "url": "assets/js/63.6b2f27b1.js",
    "revision": "880be6df3fe2bbd1be6958268d179dbe"
  },
  {
    "url": "assets/js/64.63182289.js",
    "revision": "bb8623852fa57250ba2a1d9bd1bbba84"
  },
  {
    "url": "assets/js/65.76db3be2.js",
    "revision": "e02efbdfa95c91dffa409918b6a0aa3f"
  },
  {
    "url": "assets/js/66.9dc7626f.js",
    "revision": "2ba01a6d32527b265235d9d78f5853d2"
  },
  {
    "url": "assets/js/67.6cb9cc89.js",
    "revision": "010c27b3b71b9ebc8e4214653082f634"
  },
  {
    "url": "assets/js/68.16929219.js",
    "revision": "07625705fc067bb171c827e4d610b94a"
  },
  {
    "url": "assets/js/69.93d7dab7.js",
    "revision": "cef8ee3103b5123d7a23046e896f26d4"
  },
  {
    "url": "assets/js/7.97feefa4.js",
    "revision": "e061ef8c149f97765d1fc4624fe1909d"
  },
  {
    "url": "assets/js/70.cc1fca2c.js",
    "revision": "5fefa60833461fa2bae1d8bbfa43807e"
  },
  {
    "url": "assets/js/71.d32cd886.js",
    "revision": "c5a0ea6dea13c2aa3a5a31056f63ab4c"
  },
  {
    "url": "assets/js/72.a25f47db.js",
    "revision": "e4e919a8ccb9b02c3f30928cea805f8c"
  },
  {
    "url": "assets/js/73.36c0bacd.js",
    "revision": "fe35a43984d97bb5df1a97a55e4b9a0f"
  },
  {
    "url": "assets/js/74.204b7ae0.js",
    "revision": "b598a8661fe696138af0ca746acdf86a"
  },
  {
    "url": "assets/js/75.15dcad64.js",
    "revision": "6ed5981c568ec84811fd6ce7b477e2e1"
  },
  {
    "url": "assets/js/76.914e34dd.js",
    "revision": "303195e732e02f1d77c6b82e7ab02583"
  },
  {
    "url": "assets/js/77.076c646d.js",
    "revision": "815b46705c05a0b069b4de12c793f907"
  },
  {
    "url": "assets/js/78.c529113b.js",
    "revision": "bf793dc641dc09c38e177bbddaa3cc17"
  },
  {
    "url": "assets/js/79.9447981e.js",
    "revision": "0d5f67ea8b5cbc6693fc72063ca30667"
  },
  {
    "url": "assets/js/8.d5feeda5.js",
    "revision": "648b88bac27d55a7883596a8ea9a7dbc"
  },
  {
    "url": "assets/js/80.93e38996.js",
    "revision": "6787fa76ef9630d63645f8191b4604a7"
  },
  {
    "url": "assets/js/81.e9bb139e.js",
    "revision": "adf03b5d97da82204d36bfc044b88485"
  },
  {
    "url": "assets/js/82.f28e2fb5.js",
    "revision": "d97599339559a9daa2b430711350a6c1"
  },
  {
    "url": "assets/js/83.9f3ada5d.js",
    "revision": "e2b47760214477273cb7343167d5333f"
  },
  {
    "url": "assets/js/84.758e993b.js",
    "revision": "61128a9d6dbc588e2954005707ebd48e"
  },
  {
    "url": "assets/js/85.7ed11393.js",
    "revision": "2b5219baa11986e0a8d66a7db1d56422"
  },
  {
    "url": "assets/js/86.0ecb012f.js",
    "revision": "b858255e191ffa765fdcfb6659a0adc3"
  },
  {
    "url": "assets/js/87.252b098a.js",
    "revision": "9915b3ea2e8e9db3152329ed9d510023"
  },
  {
    "url": "assets/js/88.1f1dfd94.js",
    "revision": "dd5091e6b4a99f7533be37daca27a998"
  },
  {
    "url": "assets/js/89.9844ece8.js",
    "revision": "f39b85d69e9df4c407648c8ddffb9127"
  },
  {
    "url": "assets/js/9.129d32eb.js",
    "revision": "65a9632301b87595a17cd46d45bc42c5"
  },
  {
    "url": "assets/js/90.7c9128c1.js",
    "revision": "aedc682c997da0d8b2e2a78e5aaf5bc2"
  },
  {
    "url": "assets/js/91.04b4754c.js",
    "revision": "1b565ec7133e46897ae038069b6f1b51"
  },
  {
    "url": "assets/js/92.ced3b971.js",
    "revision": "b467310842ffb8bf6ecebb18ab415d86"
  },
  {
    "url": "assets/js/93.7f14ad99.js",
    "revision": "d43260960aa3c6d969e1428e0eaa7982"
  },
  {
    "url": "assets/js/94.b9cce96a.js",
    "revision": "734a9cb0093ee3231af7ae5d7439e7ae"
  },
  {
    "url": "assets/js/95.67cddfe3.js",
    "revision": "8f09289a68376e98ad9fd71175bb4815"
  },
  {
    "url": "assets/js/96.a2289574.js",
    "revision": "96f84e27d1fd6ab362a972746a18749a"
  },
  {
    "url": "assets/js/97.b24b3766.js",
    "revision": "3aad4572993600f6e5b5bfe60909223f"
  },
  {
    "url": "assets/js/98.b40aa3fd.js",
    "revision": "5182c3564587ac0a7b7647e2a20afb35"
  },
  {
    "url": "assets/js/99.0c1269c0.js",
    "revision": "c8ccac6283512440050a991aee31b7bb"
  },
  {
    "url": "assets/js/app.644154b7.js",
    "revision": "60f40166130e04c8570bd55fbfafa261"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "57debc3b049d8c182d45a40269ab8e6c"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "33875e7d0a71edf0acabe5683daf8603"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "1050c84de223c297f8b38ef594709c50"
  },
  {
    "url": "de/effects/API.html",
    "revision": "04368e063865b9416af955fa7b39f1d3"
  },
  {
    "url": "de/effects/index.html",
    "revision": "2978bead6eda5640ce3b4a94032dc7d3"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "4e34b4ff37b77438d2784d1cfffb6755"
  },
  {
    "url": "de/index.html",
    "revision": "d55283d47d63ba277dbd9c866f4cff72"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "49bb537244d5b15e48b5be0681f34079"
  },
  {
    "url": "de/json/Control.html",
    "revision": "f68f6e208a72437dbe27dc15b27d88d2"
  },
  {
    "url": "de/json/index.html",
    "revision": "b850edfcb4e8f5c69e6bad511ab7c4cc"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "918cf48658c852d4d8574a8b912445a1"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "c607d550e082e6d76feb854f5cd78a94"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "95207d6afe2370dabbeba34976b86d95"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "4a3e89df192463ffd213c7e693eac94d"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "c0965bb63aa73baa333b3d613cd53321"
  },
  {
    "url": "de/user/index.html",
    "revision": "65cfaa7ebb9333ba5de2d17bb0fdd688"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "06f49efc0310b0ebc8ccfea2dc52f940"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "18fb238f8ec68fa532d45ac785ceaac1"
  },
  {
    "url": "de/user/leddevices/gpio/piblaster.html",
    "revision": "2ef7ed6f8988ea6c38579952eb1e06ce"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "472fb042225f84df620c3cabf9248ff9"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "57dbb5905605782e0707d4b81957f4dc"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "d553d6615b196dfc521796fdf5402eee"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "f5c9ab62733cb6dd08743625a1744d7c"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "bb0cff39f480be31faa6eb6a97b64286"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "edf0f21fb46eaa80a1a6802694e6372c"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "e0a27e7f100584eb035d1b2f5a168480"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "5c3751e184863d7dfa52a401e3105afb"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "e17721fbef7663c1bc78f79d0fe51f29"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "0b6d799b0aba853c06a5c9190bc65659"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "0cef83a2e2ee42558a9b23cdf263b180"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "23e3fd740c0dd5696c9126494de13f99"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "6648ce442b7b7b263b206b18e11b449d"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "7c86a322f37465cc2d8d0950fd03ac87"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "56fba5e082884674e080e87f2313ec8d"
  },
  {
    "url": "de/user/leddevices/spi/apa102.html",
    "revision": "865e76759ced3911f74a502053b2400d"
  },
  {
    "url": "de/user/leddevices/spi/apa104.html",
    "revision": "48e37c8db4d191ff25862e78463df194"
  },
  {
    "url": "de/user/leddevices/spi/lpd6803.html",
    "revision": "f371156b809abea8137ad5277f29f15f"
  },
  {
    "url": "de/user/leddevices/spi/lpd8806.html",
    "revision": "6a90e5b0464ff57fcccc8730a0656bfa"
  },
  {
    "url": "de/user/leddevices/spi/p9813.html",
    "revision": "df7a19ab2df723133e2f6461e671345d"
  },
  {
    "url": "de/user/leddevices/spi/sk6812.html",
    "revision": "c186865aec17c0ae416b09e4b0cb8ffb"
  },
  {
    "url": "de/user/leddevices/spi/sk6822.html",
    "revision": "0a3a91f99f01fff750f378879a51fdb3"
  },
  {
    "url": "de/user/leddevices/spi/sk9822.html",
    "revision": "578e82f5c735fe93b61b52aadfa3913d"
  },
  {
    "url": "de/user/leddevices/spi/ws2801.html",
    "revision": "c84a916057b770f1d98f268709495449"
  },
  {
    "url": "de/user/leddevices/spi/ws2812.html",
    "revision": "2d228db09ae50f0bd48044371ee60bb9"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "335144f809ad8e08968930298e1401e3"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "4647621ac0fe7678af7bb785102a0f5d"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "3af80ebcdc9122831d25fc7613d4ea85"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "dd9c4fc35db9392309f22220c61a95e6"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "dc54e43a274cc2c3416537b91462a403"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "4d45ed9c9f91ab9923a1dc3b223033d1"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "12d53d3850c24b79b6bd9fc6571e3841"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "064dd31daa6122a77e77dbbd09294926"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "21875a59def4236782365caf4c886bcb"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "cd03fe9642c325860a5a53981ab7794c"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "c6cd40d8c4151f20079e8b110875911d"
  },
  {
    "url": "en/addons/API.html",
    "revision": "2b12e0a0e85ca510cdd8ffc2599c2425"
  },
  {
    "url": "en/addons/index.html",
    "revision": "2f807fe87f6643ef077ba0c52c3c29f1"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "71fc87a848ea7fbaa7204971fd032222"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "1a409b363f1aabb5bc4a53f796cbfd09"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "758afbaddd8fc6571396dff04c9fb856"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "c8d9428dacaf1dc24e32a665bf6eb4e0"
  },
  {
    "url": "en/effects/API.html",
    "revision": "477a054bf4bf2d5c3dc8493e2c3c6022"
  },
  {
    "url": "en/effects/index.html",
    "revision": "d68b10da06b4873880ffd1ebc8a1cc09"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "cef5c406c03b4fc8b30e98bb9a3900f9"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "2c8fca95d62a545f97d1fc0beb767f1d"
  },
  {
    "url": "en/json/Control.html",
    "revision": "90e1f796361e26262a691b6ecbec415e"
  },
  {
    "url": "en/json/index.html",
    "revision": "2946b2fe5b5d6a02765f8740d515a1c1"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "2f95bec3f8c04d37c4eeaa2080cfb7b4"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "bf592cb6f5d9966867f3494fb692109b"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "cb69d6d4858ad4afcd64ef40aeaf44a0"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "8dd9c74567ede9376b1a26b5355c0df1"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "aa538d556d5aee9cabb25cbb28c29701"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "311cfb03ea1928d8188515dde9a1938e"
  },
  {
    "url": "en/user/index.html",
    "revision": "cbbf86ad06f0b6c00503832b7c49b354"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "0f062917bf350569dd797ff7a12c0c6a"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "a015b17719661e0a3205ab733f158718"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "e81168450215efec274217b7a22c5c22"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "92d7a866e694a74147d363d158d144f6"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "71e7c9ce6e84a348cbcc90b98dfa09dd"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "58bd75dad3bf6c1e5d5327611dab625d"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "be34447aa7fc8022da129666736aaded"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "1c6c1213dd6c8a6156623c472275891c"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "6e1e96f42bde8188e1a04ae836be9487"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "6235b54cbeb73607d020564e78c8e9c7"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "82fff9641b5809d82371be347a60e234"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "2e8af9da42ca2b2c3ff3720562e8ae84"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "e41ca78445af1cbb39af442a692b0133"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "9dca2cf6d73eaee8c235e8a1cd3c673a"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "98a8cc060af00f24880dc59729eb1175"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "bca08839ecbdf14cc2004403641643ea"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "1a230d3ca6e74b400778d8959973b8af"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "3e0985908ae5717a66644983ccaf83ca"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "84259a435de2824eaf6cd6ab4166a914"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "42464ffba3564e096d3b6cc3adaf9596"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "02c0e51281310bc69b193ac65b121813"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "5f2d91a7208ddc1147204f94b1c7011f"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "bf1d11d33d94f5f115c176ca51051b8b"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "ad1efca7b7b142a9cfbe035565a4b797"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "eaff8a606a58aac4e7b268ad5881ee24"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "80bf5ed2675d1d4e0b6880918c9c4a01"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "cbf74ef53552c86af7feb0ffcaf4da75"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "d55ad9e7149b99b2a44871d562d2f97e"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "dc7b537a24a8aa38260f94d162115ff9"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "a5e573010bc7d781bb06e459164c0f2b"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "9e02eb3b8e6abdec46a5ab8e52e44ffc"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "ebc73a37970d96c5fd11dcc01fc77413"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "d4483dd29f7cf7dc0b4cec82813a9d24"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "ebb90e6ff277fdf6f130a0e93060ed57"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "772f2804494bdeef90831b3daff463cb"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "e371141ac8fe1232a158073f9d139234"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "5413ab1e1fc502cb6118532d4577b339"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "8873bde8c2c161dae3d296bec9262c00"
  },
  {
    "url": "hyperion_logo_dark.png",
    "revision": "002fd7f8af81855feddb69dc92febb0c"
  },
  {
    "url": "hyperion_logo_light.png",
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
    "url": "images/de/user_config_access.png",
    "revision": "b7d15b87a18e88ef43b37d95bd499e3a"
  },
  {
    "url": "images/de/user_config_dash.png",
    "revision": "a7a06a394f91d302733135d15eaf69d3"
  },
  {
    "url": "images/de/user_config_lang.png",
    "revision": "fe2d68fa190a603bfa51c0b337ba4a74"
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
    "url": "images/en/avahi-browse.jpg",
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
  },
  {
    "url": "images/en/http_jsonrpc.jpg",
    "revision": "62d9e3005e7459a2ec04cb21d8b53b78"
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
    "url": "images/en/user_config_access.png",
    "revision": "277bdad757e277cb3d4eff789e6cf4bf"
  },
  {
    "url": "images/en/user_config_dash.png",
    "revision": "3fb0621492ef0a608122d95ddf0c9d7b"
  },
  {
    "url": "images/en/user_config_lang.png",
    "revision": "c0a82b37d3d40f422acf51dc0700aa33"
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
    "revision": "dcbaae37bc6bf1c23cf57a43d3bef19c"
  },
  {
    "url": "index.html",
    "revision": "5054d4e5b8111ce88050a5a1daf0e045"
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
