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
    "revision": "2a95bd60900a55543d29fbfbb02d639c"
  },
  {
    "url": "assets/css/0.styles.3ddb3bd4.css",
    "revision": "fd39ddc483a2051c3804233d7f26ee0a"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.f5dba32e.js",
    "revision": "9a6d88dfd036502cca41a550e294f09e"
  },
  {
    "url": "assets/js/10.0a2bd55b.js",
    "revision": "4d4ff0fc713428b7e613b78b9c9617cc"
  },
  {
    "url": "assets/js/11.75dd2ae5.js",
    "revision": "78ac8e629d3ca31eab56e3ec7fc2d036"
  },
  {
    "url": "assets/js/12.5bc0c62a.js",
    "revision": "9bd647a001205ce10802ef0aae6dd20c"
  },
  {
    "url": "assets/js/13.6ecd0397.js",
    "revision": "35e17d3fefc7825f6772faab32ce5313"
  },
  {
    "url": "assets/js/14.8c0e1577.js",
    "revision": "8237fe76805093363efe8ac6e6f12b35"
  },
  {
    "url": "assets/js/15.5d042bf1.js",
    "revision": "9259bf6eb88ee1dfe14e1fae1ba18af4"
  },
  {
    "url": "assets/js/16.8a62f3b6.js",
    "revision": "8b783c661e26fe269e8261874131a049"
  },
  {
    "url": "assets/js/17.40c4ec2c.js",
    "revision": "a243c2f2d27b7a80996f951f82861e79"
  },
  {
    "url": "assets/js/18.7b635bb2.js",
    "revision": "420e8ed934f803212c16bb2fc08ad29c"
  },
  {
    "url": "assets/js/19.d6279a43.js",
    "revision": "56cd97ca012911f303108ac29ab32350"
  },
  {
    "url": "assets/js/20.0963349d.js",
    "revision": "36c83f44fc60bd4c10db41cbd2e2f916"
  },
  {
    "url": "assets/js/21.02a63d2f.js",
    "revision": "6afd8663d8c92b0be45466ba83002d40"
  },
  {
    "url": "assets/js/22.cc86bc86.js",
    "revision": "c78fcacd4ecd3cde07dbebc1ec6cdd9c"
  },
  {
    "url": "assets/js/23.01ba2a74.js",
    "revision": "54c9b4e928047d415f539205fa7bda99"
  },
  {
    "url": "assets/js/24.a8ae85df.js",
    "revision": "6de6060939714d8cceef96dbfc2d2f95"
  },
  {
    "url": "assets/js/25.ab6dbb63.js",
    "revision": "2ee2d98b6e07066e21cfeff9247c62c5"
  },
  {
    "url": "assets/js/26.cd43be55.js",
    "revision": "c6da5330ecc0a914091bdb08d8695afa"
  },
  {
    "url": "assets/js/27.6cb80009.js",
    "revision": "50e96e312941cbd6e74e274a00ee08ab"
  },
  {
    "url": "assets/js/28.a900a97a.js",
    "revision": "7c815ee7bec03d9a764abcfe986f0122"
  },
  {
    "url": "assets/js/29.3cd1fc77.js",
    "revision": "37e5dff6c208c2a11e754823086314ca"
  },
  {
    "url": "assets/js/3.0ac31980.js",
    "revision": "43499356fd4f65dd20df81958916bb4a"
  },
  {
    "url": "assets/js/30.a3abc186.js",
    "revision": "5f34ff743c48a0c54738bf518c8df71b"
  },
  {
    "url": "assets/js/31.566be66b.js",
    "revision": "6a7c17bde81ebb893877bd674801dc44"
  },
  {
    "url": "assets/js/32.edaadfce.js",
    "revision": "fdb2ea9d926e9e5d9862cd62d8e19300"
  },
  {
    "url": "assets/js/33.9aaee7aa.js",
    "revision": "72d108d3b02237a5ca9b9a9499c7b4fc"
  },
  {
    "url": "assets/js/34.15d2ac32.js",
    "revision": "8817abc55e538f7e264ed3ac58566428"
  },
  {
    "url": "assets/js/35.ba8332a3.js",
    "revision": "b6a6554161f70e64b290336eb6da5f25"
  },
  {
    "url": "assets/js/36.e77e052d.js",
    "revision": "2420631ea9d1a00ac6a084616becd25a"
  },
  {
    "url": "assets/js/37.f49d1edc.js",
    "revision": "8d025e4a2b423ee18a551e22b0d9792e"
  },
  {
    "url": "assets/js/38.61d3acfd.js",
    "revision": "28d8da435c4f66fd65bbef7180f01aeb"
  },
  {
    "url": "assets/js/39.113f9665.js",
    "revision": "c23d7b55750fa1b59747c9faf80afb29"
  },
  {
    "url": "assets/js/4.54a9a56e.js",
    "revision": "0e5e52d678ed4ab5da49cb642d1c7504"
  },
  {
    "url": "assets/js/40.e2f05e82.js",
    "revision": "7cebc23f5fe67e16ae999cb46cdfbc62"
  },
  {
    "url": "assets/js/41.c5179a13.js",
    "revision": "12db1cb03cc8139e1b0822fc0b10b3d1"
  },
  {
    "url": "assets/js/42.945a11f3.js",
    "revision": "8cc88b8e9c16bb71fdfb2f9e262facf1"
  },
  {
    "url": "assets/js/43.b2d42213.js",
    "revision": "7d5a080bd3b451d45e783615f4c1a1e7"
  },
  {
    "url": "assets/js/44.96f7ba88.js",
    "revision": "e5ec728fcdb35598d08b88e26b834f09"
  },
  {
    "url": "assets/js/45.78061eab.js",
    "revision": "993a1a0f53c35c57f0347dec9c89a84c"
  },
  {
    "url": "assets/js/46.0e2b50be.js",
    "revision": "2988e5e8d6f9c28d7d24179102d5a468"
  },
  {
    "url": "assets/js/47.35f8a693.js",
    "revision": "1c578dfc8e0689b2c4e01c53f51129b7"
  },
  {
    "url": "assets/js/48.c4d7c445.js",
    "revision": "c4a9c7b85ec856082e92fe2f64118b9a"
  },
  {
    "url": "assets/js/49.04ea5c92.js",
    "revision": "25d4e6457a73d1d9ea2f7ab02aa5bb09"
  },
  {
    "url": "assets/js/5.594babaf.js",
    "revision": "850614f258e94ada96ed2dd850310bde"
  },
  {
    "url": "assets/js/50.4605d7a7.js",
    "revision": "3053c361f6f0283191a65fe8f02a9c83"
  },
  {
    "url": "assets/js/51.d2b716c0.js",
    "revision": "d03c54fb6e58b0a93bc87088b8f195de"
  },
  {
    "url": "assets/js/52.f6d03f74.js",
    "revision": "00b3ef3f611b4287e0d029bbce194cca"
  },
  {
    "url": "assets/js/53.0158d13b.js",
    "revision": "237d5018c99bbffa61db46909f9fbb0a"
  },
  {
    "url": "assets/js/54.f6befefc.js",
    "revision": "fd2c93856d0f8d6ee8a2b2ceb7c6e7c0"
  },
  {
    "url": "assets/js/55.b2f79fd2.js",
    "revision": "b5b8fb98ad1b54a991c0c6ded7a3b44a"
  },
  {
    "url": "assets/js/56.3969e71f.js",
    "revision": "abe971b12bdc4ae4997d204c8016ee22"
  },
  {
    "url": "assets/js/57.325fa59b.js",
    "revision": "36dc14c77510df85675a04395f60fd60"
  },
  {
    "url": "assets/js/58.8707d6c0.js",
    "revision": "a5d45684ed9c2aaf869dced6dcdeedf2"
  },
  {
    "url": "assets/js/59.d0b0ac38.js",
    "revision": "d1f171a1e230527f16bb8c91de13a887"
  },
  {
    "url": "assets/js/6.cf85cf0b.js",
    "revision": "d7d459956449620f291fe51931a19175"
  },
  {
    "url": "assets/js/60.b9ffb2c5.js",
    "revision": "94bca3a8d93ac3630d0a46d08bf1eb48"
  },
  {
    "url": "assets/js/61.2c4ec4bf.js",
    "revision": "f071c24230b7ac8362c8ea9b0f4e7f1e"
  },
  {
    "url": "assets/js/62.6fd4f822.js",
    "revision": "eb1ab85fc3faaa9f9659c4562f72c259"
  },
  {
    "url": "assets/js/63.1d9b4462.js",
    "revision": "a67a05b182fd6a314eb68f46e528410a"
  },
  {
    "url": "assets/js/64.31f6b3e1.js",
    "revision": "2473fc1f04ee0bc62fafb07dfbbf0a67"
  },
  {
    "url": "assets/js/65.7789b7fc.js",
    "revision": "5c2b061d7db1a9cec8e1816e3e263ac1"
  },
  {
    "url": "assets/js/66.64c8734e.js",
    "revision": "a33c52865f14afb1367b742289b81222"
  },
  {
    "url": "assets/js/67.f7442d38.js",
    "revision": "2784560bb3aaecd175edcaed677f8814"
  },
  {
    "url": "assets/js/68.b8478e5b.js",
    "revision": "67f284bcda067c08fce5ab657aa1e33d"
  },
  {
    "url": "assets/js/69.2f30028f.js",
    "revision": "f3e86f2d5ffb45f3b73ec03894125a83"
  },
  {
    "url": "assets/js/7.335903c7.js",
    "revision": "5ac575129c0c79f5ec1e53690c4a39a7"
  },
  {
    "url": "assets/js/70.bac01f8a.js",
    "revision": "6dade3881db8d44305dc44d1c7a9b894"
  },
  {
    "url": "assets/js/71.6f14c26c.js",
    "revision": "aa759e1ab45848c026701c3c77247e09"
  },
  {
    "url": "assets/js/72.695f072b.js",
    "revision": "4720b6720a1de2570b63fcbc198acd52"
  },
  {
    "url": "assets/js/73.0a73952e.js",
    "revision": "151e3e5488e52a2220f899e8e3e31f25"
  },
  {
    "url": "assets/js/74.29e3a91d.js",
    "revision": "a851a1e8f17c773784fb906024464be1"
  },
  {
    "url": "assets/js/8.92cddac7.js",
    "revision": "86ae478bfd0ec18691d6687317eb9441"
  },
  {
    "url": "assets/js/9.dfd98fa8.js",
    "revision": "db58654dc7068bdc1178ef34a3c4667e"
  },
  {
    "url": "assets/js/app.9030b2f3.js",
    "revision": "895841d9c795044d4aa454c9921846dc"
  },
  {
    "url": "de/index.html",
    "revision": "39ce6a2f5ac545baac2cf7d532bc7ee5"
  },
  {
    "url": "de/user/index.html",
    "revision": "34e432a986f63f54e64f409cf3ab3dab"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "c3f362f8e85608f9ce16dad4e1052d18"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "27e2888fc3a5ca7e8ff51cde1bf0943e"
  },
  {
    "url": "en/addons/API.html",
    "revision": "b64142e5fb24fef8be2692ef40625d93"
  },
  {
    "url": "en/addons/index.html",
    "revision": "bffa286b742e534cd6257bf5e3b673df"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "fca442b3a471a2e0925dd471d92e993e"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "fef17590c4a610d7d5010773064f21e1"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "5c8d053da03bf218ddada60b47a3e82c"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "0533e3cfa2cfa9c443ab3b33740b9c59"
  },
  {
    "url": "en/effects/API.html",
    "revision": "0117f85f16382845b6b0f2f3bd97f36d"
  },
  {
    "url": "en/effects/index.html",
    "revision": "9124d8dfc68264ee6e8200b6e00ce372"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "046775a839aef7bc17e91f79064b816d"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "e3fef8aa3f2cd7169213788fa08dd9a4"
  },
  {
    "url": "en/json/Control.html",
    "revision": "0d98950ab9c4da57c30118aab174cae4"
  },
  {
    "url": "en/json/index.html",
    "revision": "9e6637285f5e5561eaf7f4290b7b77f6"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "8dd662aad45e5bf71752713e27774288"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "102537dbbc21b680dc645018d2b91c9b"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "86a27458dbf5b9101da967b99ce87e30"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "1c45164b8245cd3d305e3a2f1ddb025a"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "2fbcd1295d6655358c34188ffd15d1cc"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "5dd6c05b41e714c51f347696e18d2045"
  },
  {
    "url": "en/user/index.html",
    "revision": "cc2687ae2de8a9d40328cf1bcfa67315"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "456f0dde0132f3a64407a8e3d422ed98"
  },
  {
    "url": "en/user/leddevices/debug.html",
    "revision": "77af006014d0a33866cc914c61cb109a"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "d55a088554c6b26387fbb582a8e13538"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "df0bb3f69f45805894b0214647726eff"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "96395d63087bda911573d2a5be7f24af"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "1e81b17449b4d195628d367f48f7ed47"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "c0f7801b69198737b1ec198ae5f20890"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "7a252209006aadd2794c4e05ab3b111b"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "de0a63464b147db133b9632c262e56a8"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "7fb8dfcf2114b2257267e1505b977f4a"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "aa277672018abc0018ed2ad9460f9e51"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "c4201b5307d39937f71389b191731244"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "63d33caa815495f4849b29434c0f27c6"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "40a3563a10b05f368e002e77405ef526"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "3e00d0fd46ec4ede8781f3bccb30ad56"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "0320470b858b78bfdf333b2088d7d048"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "08ea64549de71908399e6020479763c7"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "3ff14ee2ffb6b75607f887681e294e1e"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "8f7eca790facfc60d6b842da3a797383"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "61cd22e41b85236204d21615fff4f208"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "c8f969c8880cbe040dea4082d49b184c"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "dc3f362fdf7c543566d41fe05a28de28"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "5906d880d7df1aa2d6cfaf8866b4300b"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "275a1d89bb1f0c1062090522eed89667"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "cf83408b1bd271fedf74da62051d0dc1"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "914ad377289398eb2c46f99c6f4f2c0b"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "222c119bfaf8fcfddcb00d5a50ed7c3b"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "2f30c43f35300fdff31a18e9fc3d2972"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "1e94eb645f9ac756a42eb7f733435fc6"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "9288283dad57ba00b642e1446a06bc8c"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "b453d4fa950575bcc9ff210996d07e23"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "36d13a400617877d16e9d36e472f7716"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "eb9414724227fb8f403519cd48b93575"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "c7cee6b4304479a8183031cc1cf844b2"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "e69b1aca6ae266938acafd575e9b0660"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "9513ca9976d2fb2a33018e7b9ed0ca67"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "b9c2d96fea31b1c024afa8bbbf929df9"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "86e0ec619a969fe01148dd76725f25b7"
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
    "url": "images/en/user_config_access.jpg",
    "revision": "9eb2bcea2c51f1096998341c10cd82ca"
  },
  {
    "url": "images/en/user_config_dash.jpg",
    "revision": "caa761bb871f030e674b6e8122bf3449"
  },
  {
    "url": "images/en/user_config_lang.jpg",
    "revision": "daadcaae67af7419fb737ecbd558408d"
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
    "revision": "55579a5e4427fddd9492e75316fc44a7"
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
