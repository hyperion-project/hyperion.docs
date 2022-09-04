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
    "revision": "3cf68ac0e8c63e9fb3a96adedc2171a9"
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
    "url": "assets/js/117.be5ab30a.js",
    "revision": "1f06b5fb541ddd857a1cc29811b3b848"
  },
  {
    "url": "assets/js/118.72db79fa.js",
    "revision": "efa32d238aef232e772722c6e4a79fab"
  },
  {
    "url": "assets/js/119.a050077a.js",
    "revision": "8016bdf7a4c6207c516f152498d6d914"
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
    "url": "assets/js/121.d4bc8724.js",
    "revision": "0c19217a14a514788b09899b4a80af95"
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
    "url": "assets/js/124.17f322ee.js",
    "revision": "a3eea325adb515ac084571a581cc0211"
  },
  {
    "url": "assets/js/125.d3c095a5.js",
    "revision": "7e17af5775c89f4bf526d6d0b57e69b7"
  },
  {
    "url": "assets/js/126.afb18129.js",
    "revision": "4f1ab117225d05bfd1f69b5d6f52c862"
  },
  {
    "url": "assets/js/127.d8128e44.js",
    "revision": "9fa1f55a7b16bd43a6457430ab7361e2"
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
    "url": "assets/js/14.a8d6d9a7.js",
    "revision": "bbb98a897e2e18e252e77108216d9170"
  },
  {
    "url": "assets/js/15.da40c8f5.js",
    "revision": "6fc0754bd1a25d15f692525bb2b59876"
  },
  {
    "url": "assets/js/16.7f0000f0.js",
    "revision": "3fce8ce041d24567e4c1dc1d47d36852"
  },
  {
    "url": "assets/js/17.a54445d0.js",
    "revision": "b0759dc51959b64a256a9e9e8b8aeb07"
  },
  {
    "url": "assets/js/18.13a89d75.js",
    "revision": "098c0a783b8451fabce1bebf34a54b56"
  },
  {
    "url": "assets/js/19.0b1a1333.js",
    "revision": "0495a66967c5ad868d13801e7ba7a12b"
  },
  {
    "url": "assets/js/20.e5760397.js",
    "revision": "4e4343df586e7b5a1cf79b8bd1a4727d"
  },
  {
    "url": "assets/js/21.e924a447.js",
    "revision": "61e63990371647506176ebb3a4982ba1"
  },
  {
    "url": "assets/js/22.f9fbbb91.js",
    "revision": "fce639aa6b750c6491f92560cea65d75"
  },
  {
    "url": "assets/js/23.20ea0260.js",
    "revision": "d9ab7c69a725bd8d89d546e016085c2a"
  },
  {
    "url": "assets/js/24.cf3b7755.js",
    "revision": "cd9d25a6be4202e9cc1c14a472ef3cdd"
  },
  {
    "url": "assets/js/25.778dcaad.js",
    "revision": "f59943eb64128a9e65ef5239b3647bb4"
  },
  {
    "url": "assets/js/26.5345cb1b.js",
    "revision": "b0f396a7d2235cba80132387a1d44c07"
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
    "url": "assets/js/29.238013e6.js",
    "revision": "a32d0405960c91d929b267b6e689e384"
  },
  {
    "url": "assets/js/3.6810838d.js",
    "revision": "6f9ae4259cf41b3ebd9345ac1a784d28"
  },
  {
    "url": "assets/js/30.91ee2b3a.js",
    "revision": "bd9579f1dc41bc268680738903aa0241"
  },
  {
    "url": "assets/js/31.b0698465.js",
    "revision": "ae877fb262a72b334cee08c27570eb8d"
  },
  {
    "url": "assets/js/32.9970d4c2.js",
    "revision": "3b5bbe594e598c295665052e4af96e01"
  },
  {
    "url": "assets/js/33.257713d2.js",
    "revision": "720717f5107f30f9a400e323f2bbd3bc"
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
    "url": "assets/js/41.cffd3ec5.js",
    "revision": "46d6002aaee6b0da1aefeb91d085a934"
  },
  {
    "url": "assets/js/42.74e7cf07.js",
    "revision": "da2a3478cdb4335ded96addbae09928e"
  },
  {
    "url": "assets/js/43.8ee0dafb.js",
    "revision": "fc3ee6bc5e3b29e38f0ebadb243f7ecc"
  },
  {
    "url": "assets/js/44.a6c6d7d1.js",
    "revision": "1a01a3bceb4983c232361b927d63d795"
  },
  {
    "url": "assets/js/45.d5fb5cf5.js",
    "revision": "5d662f598a57c270aa55b6bc42f65d9c"
  },
  {
    "url": "assets/js/46.9d642399.js",
    "revision": "d6712ccf159c118c2bd158f461dff41a"
  },
  {
    "url": "assets/js/47.155c77a4.js",
    "revision": "38722beff5f0955b45644e2385f6bc99"
  },
  {
    "url": "assets/js/48.1d2715b5.js",
    "revision": "a663dfeb1ef0e14e3c4ce55baafebc89"
  },
  {
    "url": "assets/js/49.f2d4bad7.js",
    "revision": "92faaa52b4a5d5cfd2ec65024cbfa74d"
  },
  {
    "url": "assets/js/5.6b04b0fe.js",
    "revision": "8db6af1295d38da9305b9c82c7f8257b"
  },
  {
    "url": "assets/js/50.312e071b.js",
    "revision": "c8dcbe7ac45548e0f7d27124075b7e87"
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
    "url": "assets/js/55.2f69b3c7.js",
    "revision": "6bb0e705336f9314294fabfc183cbc4c"
  },
  {
    "url": "assets/js/56.1d9eccfe.js",
    "revision": "7e5a61f10ee9933c4dc4a5160cd3a281"
  },
  {
    "url": "assets/js/57.0dbbd968.js",
    "revision": "879e444df3b4762ee276f66fa91cb01f"
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
    "url": "assets/js/64.ffdacce4.js",
    "revision": "16c4b4564365a46ec6fb0891e15b308a"
  },
  {
    "url": "assets/js/65.6cd7664b.js",
    "revision": "07986d1221f6417aeb27b631f094a99d"
  },
  {
    "url": "assets/js/66.f084b541.js",
    "revision": "d5cef68edcb1e9932d3ec190eba48a70"
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
    "url": "assets/js/73.2c193397.js",
    "revision": "6c30f4d1025d09c6d331705087c996e1"
  },
  {
    "url": "assets/js/74.1095118c.js",
    "revision": "504151ccea86f7ce1b244f54e5228cab"
  },
  {
    "url": "assets/js/75.0ed8a291.js",
    "revision": "ff68c17afb9d9d5e2c52ace37db1a9c9"
  },
  {
    "url": "assets/js/76.346325a6.js",
    "revision": "0aeb8b2cbe7a4bf28de841f1c9d072b3"
  },
  {
    "url": "assets/js/77.1d935256.js",
    "revision": "cd96cb161082018ae3a9383da61aab21"
  },
  {
    "url": "assets/js/78.0211a0b3.js",
    "revision": "3078fe389a08865def9c0f2c1e4f4efc"
  },
  {
    "url": "assets/js/79.07bdf85c.js",
    "revision": "da586a437a455146374261c3c760da8e"
  },
  {
    "url": "assets/js/8.a6b85ce6.js",
    "revision": "db26ee77bf4e9f0c9c2b1cfe318f1e09"
  },
  {
    "url": "assets/js/80.7acd63ca.js",
    "revision": "348dd8307c9720b5a7699d7f0ef42351"
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
    "url": "assets/js/85.8d66e2d9.js",
    "revision": "4e402d72837aec5435a425cddf6d8fc6"
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
    "url": "assets/js/app.e09d7d55.js",
    "revision": "4338e0d91ff75ef3c74c62cd73ed0f80"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "5fa6acf9e3c160aa47d97d3b6eae40ff"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "92bd6f9fec2a78a0a867439437da72b9"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "e83f94ab54f232a2f7c34ef79f1cb776"
  },
  {
    "url": "de/effects/API.html",
    "revision": "7b42131275fd68bf7a812d64ce79cb7c"
  },
  {
    "url": "de/effects/index.html",
    "revision": "7e62156939a6df3c238f68be05da0cd0"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "1b6fca40d26eed6c0eb178cd03a540ca"
  },
  {
    "url": "de/index.html",
    "revision": "fb8592ca7632f5545bcee382a69afa8b"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "f38d7f96b8b499924c099a0557a31ecb"
  },
  {
    "url": "de/json/Control.html",
    "revision": "461f4e8449074fea8b32c03442374e60"
  },
  {
    "url": "de/json/index.html",
    "revision": "90c93376997779553711c0ab34866c4c"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "92533fa02aaacd6948b8f599c80c2118"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "c1254cd60116e8550e053e051322ded2"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "82f85b8baec33a9ad4994b42faf5e868"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "d7a6dc41e619b6b04754572c3721e6b0"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "dd8f7715fda47b69044edf7633898bd8"
  },
  {
    "url": "de/user/index.html",
    "revision": "388c1fc05e12bdf1b087c36116a73a8a"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "c3d2f7d49f4f91541008cdaf2167b21e"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "4c4274ca8ca6819693dccc91beb733ab"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "5ade717a7d0c71dde52beb988639496b"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "e8faaa2a5fa4719a13c405e316b2bc32"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "aab2c6915928972e7a518975e8ec98e4"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "1efd7d50bbd3dc5c335af459c08d3696"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "ef49b6b0eee38f1b7485af46b8e3d92f"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "62f17995b2cea6611d0ed069f70dc79f"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "e368f6b2a3952aa0dfde4a79f0e85b3c"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "f46351a3cb8080bafb01612688110f80"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "0a4d407eadc992b9cdc3ae0146639b13"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "6cb6a5a5f65b723d95dc2faad50ddf69"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "0636199cffeb42837ed672b04b84df87"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "21577e9f44fbc37687e65170b4d36bbd"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "5ab89ee0b813cce80b58e364bc8d492d"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "0f378238fd3ee9c777712adba16457df"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "1516e314eb8734d7b475c7a9101dc31c"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "018ea120374729e15b6e96c4ac605c52"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "67586e6f998a62f63e651dbcdcefd6a0"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "f57a9a21a7e70a42ae8fb980f1a5f7aa"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "bd9dcf810b16a675a35d32ea188a87ce"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "79a606bcee108f4fd21d99c5d21c8a4c"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "72f4e91da6047324de5dcbd33600acf1"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "2d53ce85d22a597443ed54341cf0dadd"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "b2fbd27d4c73b9697e910dc2139eb037"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "86c64b3ff82c725b9470760896a778d5"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "3f98ccac14b24fa969b78b9289ecbeed"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "3cd95c2ad5bd380e9ae26b283b47d1f5"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "50dc63fda8cdea460ef406929672db92"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "b0e791c6d2554d8478276c6b97fa725f"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "36a05e49c2fd5b24e5947cb76f83c55f"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "676cd01fcdb6bcc2474359992c410da8"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "a0e0c22a33ac88c6382ccf2da75320c9"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "a23f08a20419b2115216ebbafb828263"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "dfb9e17da7a49f72be25125c298fb1f6"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "3e3f386bce55364016ab7c2c719cf491"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "86ab6316a804a8d2c4c774f4afb1c291"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "ecd214d6de9cff5ce01ff4fa61ba4209"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "40d2104da8ebc6e658cb46a7d0bef051"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "fa152d48559c0de4627bd14c6c4dcb7b"
  },
  {
    "url": "en/addons/API.html",
    "revision": "179fabf31f459764d40a3502b77e3fd9"
  },
  {
    "url": "en/addons/index.html",
    "revision": "25869b411f130bd830b24d4677ef42a8"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "62a9314220989e0f82c2cc96ac6af2e3"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "a3a1a318e20230ce7194dd50baeed05e"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "06211f4db09a478255171737539bf59f"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "f8cc63df7885fb1be6f3d34e68f2c334"
  },
  {
    "url": "en/effects/API.html",
    "revision": "21106091376088a4db4bb9fbff07b04c"
  },
  {
    "url": "en/effects/index.html",
    "revision": "1e8a3a948f62815e1ea2e5dbbf37fe81"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "fef285238822b5dc60d93b3f903e4461"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "b0bbfd6dcaabd3c9dc4a55a2b9f5ecc1"
  },
  {
    "url": "en/json/Control.html",
    "revision": "1b69becf5d54fbb3361551af23325fd5"
  },
  {
    "url": "en/json/index.html",
    "revision": "59fa95feba4123f9b4890507a43ddbe4"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "b5dde52d84dd28fea51389e57e127c9d"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "e464e94b6577a9f9c46de6ee440dc361"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "16dfc073e06b2790cce5ef0dd8c59aba"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "19de1f2858b6e6fac893613a971de6a3"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "e7df94fd937a06d798be54c21114a2ea"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "49ffa933010d91fe963c80ec68b8ce99"
  },
  {
    "url": "en/user/index.html",
    "revision": "3fe34b062567aafd989d9a180f0ee727"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "8b6dae5cc7014a431d785c2d5e6ddc73"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "f0e55dba0399fcaccb01d3814348dabb"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "329899d922e22b67cbba74dcd1591759"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "4da69ae3c0e37f8be41994c1e0b276a1"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "6283056c2c2074dcdc8ec739b3b22c44"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "bd263472cbae260882eb2378227e2726"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "49a7a748c1081b8c868a8d61d787782e"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "7351a88c977d0f7d22df5ef8da502dcc"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "06825540585c3825f39e971ab0d70d5c"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "89b1e6a7fb2124590b053d3432c3daa6"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "3e9425bf9bfa154fd13fca5d03893610"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "723eeeb38202aec35968a9a3757c4e7b"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "e8718da165fb6d8c518c3e73e1c4a9d5"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "fb9cd1f8b3a26d6e03705bfb892f263d"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "a14e323e658a5707cb2f1fd94c9acd4f"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "7964633cdedd18d822cac1a07a8c81eb"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "1adb4dc5ff52ace000e812655739eccb"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "7f0150f0baa62868aff81ad35476ab5a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "98e7602db4cf85bbf8664f3ff8bf0278"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "97656ceb2037dbb696939d4b73c594ae"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "91fcfe32d59bb23af6b59059108c571a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "4007e80c96ecdd2cf3eae58b6573e010"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "28f98ba5667c717493ca4ff8855ddbd3"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "0a696e8db4817b59e6a9bbf1e26cbd20"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "89f25222d60fbb34c1792363e7b7fc9c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "d27411cc7280c39790e8d8581beba744"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "0c07e99361f106c2d50ea200daa7f8ea"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "1a301c6dddfdf3e8c7813f6c8ed5f202"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "0a5362472d8ee414dbe9db7be39c165a"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "58d68f5af5cfd5f95a411f6c5954d3fa"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "7f1a510588f72a980e46cc51a7a636b5"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "22b0d101649830f13650a598c59d9f7a"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "12cd1c31a54c62d064ef2f01289145b0"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "3158f6f6e54e62956efb77a1786005fb"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "c21da0e78829282ed7f9810b559bab33"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "dfd3a646258a9c52c43e93291fb4c04f"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "6dd6e06891bba93fb1e808602f2de130"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "4efd88d82a717ea1362781f4d943b3b0"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "8968508c93504e6d4f08a8630663a571"
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
    "revision": "7d310b18814753a6e52cc7ccec8e3a18"
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
