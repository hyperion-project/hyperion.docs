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
    "revision": "19498388d4600f417ac8da1a92917de8"
  },
  {
    "url": "assets/css/0.styles.d4d497ab.css",
    "revision": "0ac09c495807651e64f875d83dafd49a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.de7077af.js",
    "revision": "440615792ebc1c98297a1bbfb47f4b5c"
  },
  {
    "url": "assets/js/10.7f8fa4dc.js",
    "revision": "83957d40c81f3d7e9e73abc85723c79c"
  },
  {
    "url": "assets/js/100.941c60f0.js",
    "revision": "ca2676af3f82c9cddac56d738d6d9d6d"
  },
  {
    "url": "assets/js/101.6f731226.js",
    "revision": "b5879b6461e990b41ccf350b7f40b734"
  },
  {
    "url": "assets/js/102.164220ef.js",
    "revision": "3df569454cf542a9d44738d0fceeb07f"
  },
  {
    "url": "assets/js/103.c7a6193d.js",
    "revision": "9b65691d8429ddf65406f6a817aa7c50"
  },
  {
    "url": "assets/js/104.50def3f6.js",
    "revision": "760eadf92b878713e7aab08049cd2979"
  },
  {
    "url": "assets/js/105.c3edab26.js",
    "revision": "225f49ee85d288ae00c6a6df0b570128"
  },
  {
    "url": "assets/js/106.b5703433.js",
    "revision": "a0244315d4c898b1f41aea8b696996d8"
  },
  {
    "url": "assets/js/107.f8fedae4.js",
    "revision": "deb55c140762758d0ec7f11a312d6025"
  },
  {
    "url": "assets/js/108.fde8a8fa.js",
    "revision": "91dc6c97017f27a3245adde87b49f44b"
  },
  {
    "url": "assets/js/109.c36eccc7.js",
    "revision": "5a3038440e87ad0c0bcb360c4f9c72fb"
  },
  {
    "url": "assets/js/11.fcab886c.js",
    "revision": "dd747abaf7d33f82935bb16f3f929471"
  },
  {
    "url": "assets/js/110.95470a97.js",
    "revision": "da9f453c23556a0b1c832c29132ca319"
  },
  {
    "url": "assets/js/111.80718a15.js",
    "revision": "22b045ef89b089c2ce1eda81fb789121"
  },
  {
    "url": "assets/js/112.4e59f103.js",
    "revision": "986d7f8ac6411900944d36b0d145b28b"
  },
  {
    "url": "assets/js/113.d9d21da7.js",
    "revision": "b3e4d9e43c26cf7c53ba0ec2f4d5904f"
  },
  {
    "url": "assets/js/114.dbde5e9b.js",
    "revision": "8fa4a27bfe8b077edded877f9870efc8"
  },
  {
    "url": "assets/js/115.3c83d1bb.js",
    "revision": "cb4313195a2037fbaf49604f4d2b10d6"
  },
  {
    "url": "assets/js/116.0d61a50d.js",
    "revision": "ffb5fe4006cde5d29a21166bf0a6bf45"
  },
  {
    "url": "assets/js/117.7dd1a200.js",
    "revision": "f4f8ee42dc42748f97db361bd59f3830"
  },
  {
    "url": "assets/js/118.ecec3fb2.js",
    "revision": "65579e6962ac6b07e68ffb9bd8b48ba9"
  },
  {
    "url": "assets/js/119.821302cf.js",
    "revision": "b626625645953df18d1fee8ab380c839"
  },
  {
    "url": "assets/js/12.89cfd90a.js",
    "revision": "40e69cb766efc5335c87c11fc87b9cc6"
  },
  {
    "url": "assets/js/120.7cc8566d.js",
    "revision": "757b017790714d36ed8a4a7949d1a3a0"
  },
  {
    "url": "assets/js/121.4e340726.js",
    "revision": "8a04175f7f8f52c6e11255a6a79a1346"
  },
  {
    "url": "assets/js/122.97a13852.js",
    "revision": "79dee29b19faf97299515d017bf8f555"
  },
  {
    "url": "assets/js/123.d47192f1.js",
    "revision": "d806e358d5b40fa8826419e13fd5aaa5"
  },
  {
    "url": "assets/js/124.83eb6249.js",
    "revision": "f127d70c2bad5c36b1927645a906f4ae"
  },
  {
    "url": "assets/js/125.0f4068f6.js",
    "revision": "6aabc4233444ed1e32f35f794fa7a170"
  },
  {
    "url": "assets/js/126.5bd7c688.js",
    "revision": "bee470d2dc4f814ce838c4edadd8cf6d"
  },
  {
    "url": "assets/js/127.5cf0e894.js",
    "revision": "b8c59e5bb1189e3c857853e2253ef522"
  },
  {
    "url": "assets/js/128.2cd74f02.js",
    "revision": "06ae68c83baae26da6c4850828d29a3a"
  },
  {
    "url": "assets/js/13.1164fc7e.js",
    "revision": "5eac64113ffa695862acd187ae8c4d2b"
  },
  {
    "url": "assets/js/14.a67cbbc7.js",
    "revision": "3e74d59a5041bb5b7c083505a65ed158"
  },
  {
    "url": "assets/js/15.fbed229e.js",
    "revision": "dc11f286104a59a073ab6418b00ac73b"
  },
  {
    "url": "assets/js/16.e05a3241.js",
    "revision": "4a2e1d6baf7a74e6bae96365c6c0c6b6"
  },
  {
    "url": "assets/js/17.d58fa2c9.js",
    "revision": "9520e3b241c2e0f482019d8083a40eaf"
  },
  {
    "url": "assets/js/18.22b427e1.js",
    "revision": "9cfe46b281ae552a6d2f0ca07ff279b2"
  },
  {
    "url": "assets/js/19.8af99093.js",
    "revision": "18a7fb7cde424d49d2c5bfac90d94c77"
  },
  {
    "url": "assets/js/20.ef9d74b7.js",
    "revision": "1795808721e10927299f084a79002d03"
  },
  {
    "url": "assets/js/21.9199f983.js",
    "revision": "39d6a00c485edcf235a9daf1648076e3"
  },
  {
    "url": "assets/js/22.92b55d65.js",
    "revision": "e414dd5aa50d758eb3297c94ebdecbde"
  },
  {
    "url": "assets/js/23.ade03426.js",
    "revision": "c19718f9f8ce9068af3dee950ba6dc1a"
  },
  {
    "url": "assets/js/24.1b55321f.js",
    "revision": "933db8b32deddce3f78049f83ded326c"
  },
  {
    "url": "assets/js/25.02015586.js",
    "revision": "a31dd6077b7f4164c735931a50d90ec6"
  },
  {
    "url": "assets/js/26.11aee966.js",
    "revision": "db7ca124e5896c4c9fb559330e90d8aa"
  },
  {
    "url": "assets/js/27.b947ee50.js",
    "revision": "e097a53635ab7b16f05aa6835fe99591"
  },
  {
    "url": "assets/js/28.54f3e4cf.js",
    "revision": "7f89a5662c240717a61c43d9bd24c199"
  },
  {
    "url": "assets/js/29.4ec33d98.js",
    "revision": "df427fbcbbbcfb9e8b8dbedd75dc5c07"
  },
  {
    "url": "assets/js/3.6810838d.js",
    "revision": "6f9ae4259cf41b3ebd9345ac1a784d28"
  },
  {
    "url": "assets/js/30.d045ea2d.js",
    "revision": "97b1916ebd9ca9165d7bf4820b81d436"
  },
  {
    "url": "assets/js/31.b0698465.js",
    "revision": "ae877fb262a72b334cee08c27570eb8d"
  },
  {
    "url": "assets/js/32.2bb7829f.js",
    "revision": "005c329b2d433fa686ad213bbbdb762d"
  },
  {
    "url": "assets/js/33.5f21a4db.js",
    "revision": "22c6a854b945f8723e2b773673fd0a34"
  },
  {
    "url": "assets/js/34.73bc2d38.js",
    "revision": "89561096903d963b5689f8d95d4c8015"
  },
  {
    "url": "assets/js/35.2f87a8d0.js",
    "revision": "b443ceeaf4d388b7cd35928643f4ff72"
  },
  {
    "url": "assets/js/36.3ed93b14.js",
    "revision": "2216bc61d75904347c5cf5656301440e"
  },
  {
    "url": "assets/js/37.0e83bb8c.js",
    "revision": "9b355987cfe7661f44bbadc4e6472849"
  },
  {
    "url": "assets/js/38.d77762fe.js",
    "revision": "357dde60ff8190699bbeb36e13d13be1"
  },
  {
    "url": "assets/js/39.0ef50118.js",
    "revision": "bde12fbdc8830dac58015f15259de378"
  },
  {
    "url": "assets/js/4.b77eda08.js",
    "revision": "7995612f5d73b6cd41aac889b20e0375"
  },
  {
    "url": "assets/js/40.21c37da6.js",
    "revision": "2f077b726fccc96789161323f256b90d"
  },
  {
    "url": "assets/js/41.b5a356e2.js",
    "revision": "49cc3bb2312f08e7461566aff8defce8"
  },
  {
    "url": "assets/js/42.5c754534.js",
    "revision": "1ce21dbe470a0c4d37665dd0219ab5fb"
  },
  {
    "url": "assets/js/43.68e79d32.js",
    "revision": "1e1c521bc4f852f9022380c78181a62e"
  },
  {
    "url": "assets/js/44.a6c6d7d1.js",
    "revision": "1a01a3bceb4983c232361b927d63d795"
  },
  {
    "url": "assets/js/45.4d91b6fe.js",
    "revision": "35fb45b0dae641f4a7035b6367c66d13"
  },
  {
    "url": "assets/js/46.3e95db59.js",
    "revision": "74faffb4ce14cc8d896e8e71e9f52c71"
  },
  {
    "url": "assets/js/47.155c77a4.js",
    "revision": "38722beff5f0955b45644e2385f6bc99"
  },
  {
    "url": "assets/js/48.2b67615a.js",
    "revision": "3990dcf12c71d26e351bdca55e06f2a2"
  },
  {
    "url": "assets/js/49.494f50db.js",
    "revision": "7b9cbd38378862ede0c8f44cbec5572a"
  },
  {
    "url": "assets/js/5.6b04b0fe.js",
    "revision": "8db6af1295d38da9305b9c82c7f8257b"
  },
  {
    "url": "assets/js/50.f7093e18.js",
    "revision": "ccc8b5c10270f426202ccaf38701a3f1"
  },
  {
    "url": "assets/js/51.564ffc17.js",
    "revision": "13ad608308af56f9ad9f7bc2886c78f6"
  },
  {
    "url": "assets/js/52.70ccb573.js",
    "revision": "cf07ec7740c1ef424087e0fc9d7f5451"
  },
  {
    "url": "assets/js/53.b1914bb5.js",
    "revision": "302c47ca38d1c83d2b5091aad42b05b0"
  },
  {
    "url": "assets/js/54.230cca52.js",
    "revision": "32c270baaaedeb83262cd9934b267c31"
  },
  {
    "url": "assets/js/55.846398f5.js",
    "revision": "7d7e1f4fafafb4debb8d76d63e75fb77"
  },
  {
    "url": "assets/js/56.17b855f8.js",
    "revision": "1e8fc74328e149501f8ea1d27f5aa135"
  },
  {
    "url": "assets/js/57.12caf9a6.js",
    "revision": "c6105851f4f8595f91096b427969ed52"
  },
  {
    "url": "assets/js/58.fddf8985.js",
    "revision": "baebe36c41d1c5772d7fba6feef71757"
  },
  {
    "url": "assets/js/59.f355e180.js",
    "revision": "e400df2b0531d4fac5a5841a443cab26"
  },
  {
    "url": "assets/js/6.b71325fb.js",
    "revision": "ba5b1a73fe2b1c33fc97e4a860afa9e7"
  },
  {
    "url": "assets/js/60.718a4fb2.js",
    "revision": "60166329f231ecb961f62253f597db74"
  },
  {
    "url": "assets/js/61.9337e7c4.js",
    "revision": "ad25c78d7f2fe41dc3d5354b05bd49f1"
  },
  {
    "url": "assets/js/62.441e245f.js",
    "revision": "38c32d4e73ebbff87fcdc3d8d565444f"
  },
  {
    "url": "assets/js/63.c2aa4dd6.js",
    "revision": "0d6e10cb7bcd34dedbfa4538c6a95f2e"
  },
  {
    "url": "assets/js/64.afadbad8.js",
    "revision": "c55e37b9d306d9bee9f3ec9bc2e3def8"
  },
  {
    "url": "assets/js/65.703fa400.js",
    "revision": "013010eb2ddf931c2df4636dd0dbc88a"
  },
  {
    "url": "assets/js/66.aee7a1c5.js",
    "revision": "1406b26843d7eae883c369148d996a47"
  },
  {
    "url": "assets/js/67.7a6b68c7.js",
    "revision": "18e160c8d300a2ad2521650ad6d7fcf7"
  },
  {
    "url": "assets/js/68.bd4a4d01.js",
    "revision": "1abe5079a2289ce31f77db65c393da70"
  },
  {
    "url": "assets/js/69.3d6616ed.js",
    "revision": "7ff8be062f8edc8ff21efd47ff619edd"
  },
  {
    "url": "assets/js/7.d7fd4d8c.js",
    "revision": "fa96c4ec5c514104cd68abce7ec9816d"
  },
  {
    "url": "assets/js/70.f25e3e1c.js",
    "revision": "42f115f70dcb293e7651777c00a80979"
  },
  {
    "url": "assets/js/71.032d2109.js",
    "revision": "010a2123b02e7c672a1306ad6352a3fe"
  },
  {
    "url": "assets/js/72.0cd65c84.js",
    "revision": "c740e2d630788ee80ffc50d9e263d35b"
  },
  {
    "url": "assets/js/73.6ea70761.js",
    "revision": "9c83ab26a1c897e482ed1902fe4df15f"
  },
  {
    "url": "assets/js/74.0af5f831.js",
    "revision": "af5bdf423725d42dea2ba4f71fef96bd"
  },
  {
    "url": "assets/js/75.33dc2ae2.js",
    "revision": "56be13f631ab8a12a0941d54fa3841f9"
  },
  {
    "url": "assets/js/76.9838bd67.js",
    "revision": "72fab8ea1f5d646567b2f6491c780e1d"
  },
  {
    "url": "assets/js/77.1d935256.js",
    "revision": "cd96cb161082018ae3a9383da61aab21"
  },
  {
    "url": "assets/js/78.37239642.js",
    "revision": "79c7fc0c0152b4c5ca5cf2f7f6c90143"
  },
  {
    "url": "assets/js/79.a5605c5d.js",
    "revision": "168fb633bc936c1a1cc7c43aa59462a8"
  },
  {
    "url": "assets/js/8.a6b85ce6.js",
    "revision": "db26ee77bf4e9f0c9c2b1cfe318f1e09"
  },
  {
    "url": "assets/js/80.53aca9eb.js",
    "revision": "84fbaa8a9d28305bfed01edec4416711"
  },
  {
    "url": "assets/js/81.64f18782.js",
    "revision": "a47dbc6e13c4c4cefdc8ba7dc74117cb"
  },
  {
    "url": "assets/js/82.2be98c28.js",
    "revision": "43140fcd89b1e6a53fac0d4996461009"
  },
  {
    "url": "assets/js/83.8b4d1620.js",
    "revision": "9730735a53754758c3919edd4505ce67"
  },
  {
    "url": "assets/js/84.ec642bda.js",
    "revision": "4b1d604e0c3ed1ce52555c302ebeb091"
  },
  {
    "url": "assets/js/85.b3f6d75f.js",
    "revision": "dfef569a563e6c9089817614b61dfa10"
  },
  {
    "url": "assets/js/86.3b4680cc.js",
    "revision": "8bd14a41c808af6bc39ff0c8713b1315"
  },
  {
    "url": "assets/js/87.45acb737.js",
    "revision": "c7a37b3300144b933f3ce15323a5a04f"
  },
  {
    "url": "assets/js/88.f409d4a7.js",
    "revision": "9529596371e9d2dd6e9c2ebdd3249b11"
  },
  {
    "url": "assets/js/89.71f193d8.js",
    "revision": "0638a8d09f572d2617a1dca4bc2c10a2"
  },
  {
    "url": "assets/js/9.46bc2597.js",
    "revision": "15159d9f5bd05c676a9399dfd545711f"
  },
  {
    "url": "assets/js/90.d64d8750.js",
    "revision": "d73e1744659dca0b440b94d7321718ed"
  },
  {
    "url": "assets/js/91.f2bc22c9.js",
    "revision": "8a2b0535139a014bf2a3ffb82dcc3b1f"
  },
  {
    "url": "assets/js/92.a2e54a5e.js",
    "revision": "3ce8f7ad7562319fc5e4e3224b311d12"
  },
  {
    "url": "assets/js/93.a7e5ae95.js",
    "revision": "62bf8df84c421df628a17d5e1516b53c"
  },
  {
    "url": "assets/js/94.179d3f63.js",
    "revision": "dfefc857178e51d8984794e5863dd6d9"
  },
  {
    "url": "assets/js/95.7f250699.js",
    "revision": "b49b82ad6ac854381cbc073d9804135a"
  },
  {
    "url": "assets/js/96.ac5be67f.js",
    "revision": "384657a601e73864ec71e82d398c8889"
  },
  {
    "url": "assets/js/97.45bd5bb7.js",
    "revision": "e32d8b80712dcab81367b3f2cbd1d808"
  },
  {
    "url": "assets/js/98.506d3a68.js",
    "revision": "d7e2b73d96edc99f16c6ebe592bb470f"
  },
  {
    "url": "assets/js/99.fb128e65.js",
    "revision": "d885e80a21b3686380c24ecc9c4e648a"
  },
  {
    "url": "assets/js/app.8239a717.js",
    "revision": "4bb3bf6af19f5ae3eb127c8760a4bbda"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "01d91f1cde9b16f759187b28f23fe36c"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "cd9db21abf617729bb35c04e20c3eb29"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "3766673f5fdfbbc887735807f69f60ca"
  },
  {
    "url": "de/effects/API.html",
    "revision": "1471fb1ee982b99daaa4c0163c545ad7"
  },
  {
    "url": "de/effects/index.html",
    "revision": "0f6c6bea86072d3a641d266fb2ef1615"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "567aa86e88aaa7a24f40770b30cfb872"
  },
  {
    "url": "de/index.html",
    "revision": "48c54d67cf241cc64edf2645756949f1"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "873751fd9bbe34bd39e33cdc5231987b"
  },
  {
    "url": "de/json/Control.html",
    "revision": "cc82eac23afaf7ed38ffac9487ca259a"
  },
  {
    "url": "de/json/index.html",
    "revision": "8782afc71f65471aa5f15043ba91d6cd"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "e7fa38662aa16fc4a0e98b17d0dda130"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "03c527c214e0e9ff7bdfeb7b92dd0f80"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "2bff691440461f7cb482a41c9fbddb42"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "7348b9e33200b58565e3d3f08250c9ab"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "17886dc1c57a16488e1e422f1cffc807"
  },
  {
    "url": "de/user/index.html",
    "revision": "e9f6615fec034a3bd4ed92f71701b385"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "41c21c7a65d48ca8e3dcc352450796d0"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "ee30dab3454a498ea7ed7a689f4ea7ac"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "d518eb53ae6a28800b74ea5d5ec87ca3"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "cc4445f3a6b1edea0addf8612e7cf13f"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "c47c45dcf3f7731eb1690896247cc6da"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "623d9531680afc0a308e3ed0e1a9e2d8"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "3ab65d94d69548b30d63cd2e64a9aaa1"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "46e6c322203e103e3f591b80b5496765"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "378a455916081f6075b1b5b791f8160e"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "9cf085e533ca7ad9589f2f27ffe6cb90"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "8f5afe9c565a8056ea8fde5ced581bca"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "37568340330218683c51b7ea13e77a47"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "16eda627eb526c7250eee289d9606419"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "27029bb264ef72db891de0a957816315"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "04343e44ee517d53d19dcda395f66741"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "73f7dee5f1a58773ca5ef6c1fee2c599"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "9e741cd9397871f4e16758ce75ee2abb"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "34367d370cfc8f00b634c058eb751ad9"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "d1846b0091f3a686f14ea1a24b2bb71e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "2f9c3fe3c7eac1adc7a68da9ece10655"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "0e84850ec2b928cef4046db30bd4fc32"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "ad6dd16eca57ff39e4638dd18a2e8744"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "2d3c021d6a35b0c88a83b13b6baa75b7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "1d13f07d72995933c1df0146dea593b8"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "a058c855dc1cef924fbdc88e9bddab40"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "c88bdceec748e7236b27127fcd842574"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "8dfff9e9c1d91988c9b28c4b165862bf"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "0648b2bb43eb86416944ef0bfa7de124"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "9871c8072ce8a03f26608497e81a0c61"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "6025da4d519bc5cceefb6b515e49eb2a"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "7ddcfc706cb144fe5fd3f9bbc943e3e8"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "2d82d11b533e47a52bb1d67ed7981d73"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "5d8308b2f14d1551bf76fd1baaaef089"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "3ee514f9e986e9e99b01f3922afaf718"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "0c4228b3a7d5caeedfdb12660254d7cd"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "4261c26bc07b92fa60f137c630405376"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "df848d3bc5b9936c272ad7207fe9da84"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "01269ba1be5113f2174055d45b21e31a"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "2dd9deac40eb19e12e1b337f2243ba39"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "06960cfc12acdef89e8c7cd13584e5f9"
  },
  {
    "url": "en/addons/API.html",
    "revision": "f01498cccc7a181afe31d5464cb4f17b"
  },
  {
    "url": "en/addons/index.html",
    "revision": "0ad078b974d3caeaede1aaaadf2d42f6"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "fa68cd99d5745ae9193397f5e72c50e0"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "77be058676af4d5abc2490161e7c642d"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "0a90f8aa6b1eeb54d94aa649d5e678e0"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "e7188b10669e1f30eec801e4973b889b"
  },
  {
    "url": "en/effects/API.html",
    "revision": "7c80350507ff92e09eb7b83ee1025446"
  },
  {
    "url": "en/effects/index.html",
    "revision": "e12e00be93665ca79e04f0256fc3308e"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "7a83d51002d5d40558e0141c174ef6fe"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "89243c7249e9b2d4fffc63ffc2e9a8ca"
  },
  {
    "url": "en/json/Control.html",
    "revision": "f663a2b40947de8085422a21ad15ed17"
  },
  {
    "url": "en/json/index.html",
    "revision": "9f02c764151bfcb122b07cef18f02504"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "1571995753f4110e707c04c0e05b41bc"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "35d9e90b7321305f351527834bb773ff"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "6319841257c5492aeb8cc1a448c481c4"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "36321cb5cd3ab495fe2e729a39db9921"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "cd87678c15a7a4b74994901c08593ed6"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "2bc300e675a2344e072cf383311bcd92"
  },
  {
    "url": "en/user/index.html",
    "revision": "3e8effcfa603ce84564e844934cc1e45"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "74b5100e1b8079a3f620519c983ddc8b"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "44851102899e1238ed0b359fb3413a4c"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "bd743ee73a959ba01b832c7221b54a2c"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "7f49b92c3b9f66c4d0965535b1e1ec4d"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "83566746f2f490fa1c4ef64941ce25bc"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "23fffe90148edc6b79eec9b8b5e747ca"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "0d1d0ebf9c1e3abd1ef36df826a1f128"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "7d7d9e180f9ce4ce916e05018b47ebc9"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "6dd275cdecaf1ecc2eca3cb4c5873ab0"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "4e94f878940ef9362e9840e730bde34d"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "e9f3179ea29fa0b2616da4cf8eac8c61"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "1a679e1afe10fd3820d1540a78c4692b"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "9c4fd98a1ce39b2a9a3d4ada7a25fb7e"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "cd0d67890c9cbc6b0fa958000901e37b"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "e4fd475b93c934607e16b137a0ab2d77"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "663f9385c8036d1c73dd7692a4ba0b4f"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "3d5ee1d6f8ba8885189cd0c121db5961"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "f57246717749aedb92cfcf83e319dbe1"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "7db6da8f45ebfae432ce606da9d0f0a1"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "4ae9b27d04fdb51abec24b4ade895dec"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "561b845f02d6da14e59c6d9e912439d3"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "bf8cb8285c7fb0fbda82e6d47322c96a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "b7ccf43bf3952610a700741022c29749"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "0f3673348126d57d1527de98b3012d46"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "4b5be3f5880cffd03908e2fd8c892e1a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "69ebaf4adc001fc274087d54dd139283"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "bbfcfd34efa4d564737686292fee34d1"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "92dbe656d4fea7d9e97b8e19ffcc3b5b"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "8ddca1c2e01d67536f80f8b537c9db7a"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "2224fe85bb88a0e6bb90edfe206427de"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "d07af36e7a1eb3341cccfafed59d1c78"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "efc9d9fdf35f4fd9f17b376d7a6fb85e"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "a767b1b0fb5d6557255c996145f3408a"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "7920a18db152dcbf8f76a19212923f77"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "fb69ff7ddbbc12f5e9ff8f1e249214a3"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "f77f588a7b729cd9452cd818fbaf9396"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "d4979981c178cf16d9936865166e750b"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "383947d8f321d28f393b9f24be86b55e"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "1e56130377ce0a8f8b730f4b0894fe20"
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
    "revision": "eadb3c7bc42c665a7ec83ecb460f685b"
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
