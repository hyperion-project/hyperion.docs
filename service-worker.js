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
    "revision": "8f1107c5645036ca0ee1b4edc11f6fba"
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
    "url": "assets/js/1.9eb8adcd.js",
    "revision": "381d6c3912bfd8964c0b9ae498a97837"
  },
  {
    "url": "assets/js/10.c8a2280c.js",
    "revision": "315047da961660439424825f5d908d88"
  },
  {
    "url": "assets/js/100.1eb80592.js",
    "revision": "0d362c37f876b8d24c08faef1f3338d0"
  },
  {
    "url": "assets/js/101.754c4bab.js",
    "revision": "5c09ebc28ece9efd530e9e423c4e847f"
  },
  {
    "url": "assets/js/102.d241a86d.js",
    "revision": "34ce9b6bdfc54bd54c509c94345c80c0"
  },
  {
    "url": "assets/js/103.7cc23b12.js",
    "revision": "f4458280d0427c3effc1f0b722450609"
  },
  {
    "url": "assets/js/104.90ceb6fe.js",
    "revision": "8ac2c7e06d1feb74713753ad3b306aec"
  },
  {
    "url": "assets/js/105.9007ca7e.js",
    "revision": "b03e7114247059e27580ce7726dc44c5"
  },
  {
    "url": "assets/js/106.a90eefda.js",
    "revision": "671c82ea8155ed7b2382baf30171d18c"
  },
  {
    "url": "assets/js/107.51d1a380.js",
    "revision": "c406a7e43e78dffc302fbf3938eb3823"
  },
  {
    "url": "assets/js/108.bb02e13f.js",
    "revision": "76dee15811ddee0db5c035b62743d958"
  },
  {
    "url": "assets/js/109.d80eb9bc.js",
    "revision": "0b9a3d856e8fe1adc4512bae7725031a"
  },
  {
    "url": "assets/js/11.db09fb26.js",
    "revision": "2cc75d48b21b871d926664534cd9a8ca"
  },
  {
    "url": "assets/js/110.fed107e7.js",
    "revision": "e9f79e0284d7bcdf2ff82846abec1c32"
  },
  {
    "url": "assets/js/111.5f982bcb.js",
    "revision": "5fb8222beb40c288fa8f624c977b7fa6"
  },
  {
    "url": "assets/js/112.2433fce7.js",
    "revision": "1e10e06fb6305f8d79e44f5a4a5e37c2"
  },
  {
    "url": "assets/js/113.05567853.js",
    "revision": "09d9d1c557430324e5a533c413285179"
  },
  {
    "url": "assets/js/114.809b1477.js",
    "revision": "5ceeb11816b843ecfd1b066f86839d05"
  },
  {
    "url": "assets/js/115.85520dc3.js",
    "revision": "1d571267e98eff96a0256124a9fb4ea3"
  },
  {
    "url": "assets/js/116.b280ef7f.js",
    "revision": "97555feab6b69d656adf9d74acaa6b4a"
  },
  {
    "url": "assets/js/117.3252e925.js",
    "revision": "63f17bbecf4ff0adaa0e144d9a7c606f"
  },
  {
    "url": "assets/js/118.0584e8cc.js",
    "revision": "e74d18bce43ebddf84488883dbaf866e"
  },
  {
    "url": "assets/js/119.471e6b44.js",
    "revision": "8aa3700297034ddd793ab65671affa0c"
  },
  {
    "url": "assets/js/12.dc5dc007.js",
    "revision": "30f6bb86e89e8df5e180bcc7c22efa15"
  },
  {
    "url": "assets/js/120.352663e6.js",
    "revision": "404b293c1e1b84ef023e809e40d9f710"
  },
  {
    "url": "assets/js/121.b882013b.js",
    "revision": "222468a0c71a67f589a1d747d219fcb8"
  },
  {
    "url": "assets/js/122.4d5ec4ee.js",
    "revision": "6009d4012af9a30f5efb8e18d327fd97"
  },
  {
    "url": "assets/js/123.301599fe.js",
    "revision": "5abf6262cc17bec71439a715f9df313d"
  },
  {
    "url": "assets/js/124.857c83a5.js",
    "revision": "f12066e6ba40cb5c3422064603f3ed19"
  },
  {
    "url": "assets/js/125.57adc335.js",
    "revision": "902df2e3a53873884014cfd5bd275f7a"
  },
  {
    "url": "assets/js/126.7b46b21a.js",
    "revision": "6253aca917972262936efed5d1dde5c3"
  },
  {
    "url": "assets/js/127.4ee3d595.js",
    "revision": "d54762f02eac62de724eb3a81c65d971"
  },
  {
    "url": "assets/js/128.3ab78d41.js",
    "revision": "208adde8a93c8b669b973db45ec95a23"
  },
  {
    "url": "assets/js/129.fbf03c12.js",
    "revision": "6b76798f6334023d0831d2a3791d4b5b"
  },
  {
    "url": "assets/js/13.b651cacc.js",
    "revision": "c59cc4251034c4bcb475d12080e10a93"
  },
  {
    "url": "assets/js/14.2d93caaa.js",
    "revision": "312468a65559bc31d3307e8fcd0346ee"
  },
  {
    "url": "assets/js/15.d1988112.js",
    "revision": "71a40194e12eca0fa0fd46bbd0618702"
  },
  {
    "url": "assets/js/16.3c9d8c99.js",
    "revision": "2609a955b3258d9a14c052d7d5ebd9d8"
  },
  {
    "url": "assets/js/17.a54445d0.js",
    "revision": "b0759dc51959b64a256a9e9e8b8aeb07"
  },
  {
    "url": "assets/js/18.50b12685.js",
    "revision": "769e55aa65b3a426476973c8c140a745"
  },
  {
    "url": "assets/js/19.e69c1589.js",
    "revision": "58237fd1d4bfef50461d4f695281e6a1"
  },
  {
    "url": "assets/js/20.476ed2ed.js",
    "revision": "83f5aa6d83d249cffb0a56d8cb8e59f1"
  },
  {
    "url": "assets/js/21.54831a0e.js",
    "revision": "2d8523db6b0e20102daf158f3104a09a"
  },
  {
    "url": "assets/js/22.ee4a7262.js",
    "revision": "d9ee79ec81c12a4412d00bdbebaad7d7"
  },
  {
    "url": "assets/js/23.1a1ca0f1.js",
    "revision": "40e72df84652286cfbcb8eb92a1cb553"
  },
  {
    "url": "assets/js/24.0fbacf4d.js",
    "revision": "81a0665ef49420b62d84064d1e8d142b"
  },
  {
    "url": "assets/js/25.eddccc51.js",
    "revision": "7690278759d1b71f7eb133693b9c0b82"
  },
  {
    "url": "assets/js/26.e2b7f434.js",
    "revision": "5824d7ed7ecb42b15e25954cd2385343"
  },
  {
    "url": "assets/js/27.cb034bdd.js",
    "revision": "4e178036ef13361c768c4a1a5cd8146a"
  },
  {
    "url": "assets/js/28.403a1b6e.js",
    "revision": "fe9e6bcd5854f25a1ad6bdf4dfede05c"
  },
  {
    "url": "assets/js/29.64c396eb.js",
    "revision": "d9ac6af9433dd95ddefc266db23f4000"
  },
  {
    "url": "assets/js/3.ed5cb24a.js",
    "revision": "0d2f0eba8ae74109e6a651bc8f5024a7"
  },
  {
    "url": "assets/js/30.3a1510ec.js",
    "revision": "67947f048c61eb0b849b51c294557889"
  },
  {
    "url": "assets/js/31.7fd840ea.js",
    "revision": "0c20cbfc20f96c332dc3897d99ddc56c"
  },
  {
    "url": "assets/js/32.504f8821.js",
    "revision": "42153fb541261505204ff2a513fa3f9c"
  },
  {
    "url": "assets/js/33.37c7cbfa.js",
    "revision": "6d7cde7075df8691bcd4338cff6a7c7e"
  },
  {
    "url": "assets/js/34.7a55d15a.js",
    "revision": "159dd38af853e73e2f067e215d78c58c"
  },
  {
    "url": "assets/js/35.6e8dd981.js",
    "revision": "5f3ca5ac7ea581f5333c548b3535d525"
  },
  {
    "url": "assets/js/36.5d29a1b4.js",
    "revision": "61aee9a5d0b96d377de894131b7c5408"
  },
  {
    "url": "assets/js/37.a7b14033.js",
    "revision": "1dee52f2f792e0e3609aa2dc966dba30"
  },
  {
    "url": "assets/js/38.967c8455.js",
    "revision": "1071996aac7b869f0a9a1a4a69569602"
  },
  {
    "url": "assets/js/39.4c3bb5ef.js",
    "revision": "9b7a34b4ee5f45dcb753a17383d446c0"
  },
  {
    "url": "assets/js/4.556ccc02.js",
    "revision": "89f04d30dd5c5b3322b740f2b0cd051a"
  },
  {
    "url": "assets/js/40.88df5987.js",
    "revision": "9fba2b8aa58469d7dc9d547cf88d8b47"
  },
  {
    "url": "assets/js/41.6df2007f.js",
    "revision": "903f17417fc3580941e5ae6787f29552"
  },
  {
    "url": "assets/js/42.d45587f9.js",
    "revision": "2026bd28dd67d1535cc7e141ac0c41db"
  },
  {
    "url": "assets/js/43.c874dbb3.js",
    "revision": "8f2c8215f2970d093d262aae6be17818"
  },
  {
    "url": "assets/js/44.5c88294f.js",
    "revision": "24dee1b3b7fde7a8d916661bd45f5e30"
  },
  {
    "url": "assets/js/45.4d6cf793.js",
    "revision": "a7cc1aa1ada6caba67491c6b4cb0a294"
  },
  {
    "url": "assets/js/46.edcf056c.js",
    "revision": "0b529fa98b25e306852e9bd0b9f52989"
  },
  {
    "url": "assets/js/47.42d4b33d.js",
    "revision": "dba197339789b20341d593374d7d3ea1"
  },
  {
    "url": "assets/js/48.2ff9569f.js",
    "revision": "4ffda9a77cbf5d646c5b037b8ecff9cd"
  },
  {
    "url": "assets/js/49.7d5487bd.js",
    "revision": "230d621ed51c84e1feee13a9b7426383"
  },
  {
    "url": "assets/js/5.c6e1ab60.js",
    "revision": "0533c842e617b58df2a209118c7ae085"
  },
  {
    "url": "assets/js/50.51e09b13.js",
    "revision": "7caa9bd500e27e54743f73849fa268eb"
  },
  {
    "url": "assets/js/51.de0bb0cb.js",
    "revision": "05ebcc76723daeaac73e5c42d119f6e0"
  },
  {
    "url": "assets/js/52.c9787200.js",
    "revision": "0140853ff05cdbb2d1de7fb3b53c4c1d"
  },
  {
    "url": "assets/js/53.0600e1d9.js",
    "revision": "47fb6a1fc63861659b2bba746658c25d"
  },
  {
    "url": "assets/js/54.7e8c1e63.js",
    "revision": "df285a1afa62383e7faf2b0fceadb874"
  },
  {
    "url": "assets/js/55.28f339ad.js",
    "revision": "75e22c6d75e2bfd13deb1d7e9ec8ffd3"
  },
  {
    "url": "assets/js/56.f8fc3df5.js",
    "revision": "3581c9e8ee3095627660ab9634163429"
  },
  {
    "url": "assets/js/57.8040a964.js",
    "revision": "408b394193be2dc48d9ae504e6ee4209"
  },
  {
    "url": "assets/js/58.fa1abc09.js",
    "revision": "99797ffc77094fce70f2e260f40a7512"
  },
  {
    "url": "assets/js/59.961e5d6f.js",
    "revision": "315dd68a77d0fc62840f620a03b91cf7"
  },
  {
    "url": "assets/js/6.332a6e02.js",
    "revision": "3da4c81a387d04293d54a5af912b5b90"
  },
  {
    "url": "assets/js/60.85d5a4f5.js",
    "revision": "8d99d82141c35a315fc546abd1a299ec"
  },
  {
    "url": "assets/js/61.b63f8496.js",
    "revision": "c3d1803290ad7327b384d170f3b81c80"
  },
  {
    "url": "assets/js/62.a7cac4a9.js",
    "revision": "548984ca9db06fdc7892697dc52b363f"
  },
  {
    "url": "assets/js/63.83d24de2.js",
    "revision": "464b94d34c2efc900241627152327b05"
  },
  {
    "url": "assets/js/64.385f5471.js",
    "revision": "da5b7d6ea85581e947884e5c411ecd8b"
  },
  {
    "url": "assets/js/65.d3dbe3f3.js",
    "revision": "3cce1ee29747f438ab18ebea1f3bdbfa"
  },
  {
    "url": "assets/js/66.d52679f5.js",
    "revision": "cc86bc82505337995967c07f067bf265"
  },
  {
    "url": "assets/js/67.6eecf233.js",
    "revision": "6e0cc09ee6d11b538c6e80c39302d5a3"
  },
  {
    "url": "assets/js/68.26b4066d.js",
    "revision": "eff031948394445716b133e0cff1e80c"
  },
  {
    "url": "assets/js/69.200af724.js",
    "revision": "5a692412e23d880a376ce2845211d950"
  },
  {
    "url": "assets/js/7.954748d5.js",
    "revision": "94432a74b038aed624a2bd901d815055"
  },
  {
    "url": "assets/js/70.55afd246.js",
    "revision": "9e0ab026ac62256a2014c20104436c19"
  },
  {
    "url": "assets/js/71.5a6d497c.js",
    "revision": "0a059fefab4ccb82b1720d3881930e72"
  },
  {
    "url": "assets/js/72.b4a9a413.js",
    "revision": "f4d17fe2f37006fdf5238bf35904448e"
  },
  {
    "url": "assets/js/73.2c193397.js",
    "revision": "6c30f4d1025d09c6d331705087c996e1"
  },
  {
    "url": "assets/js/74.5ef03e61.js",
    "revision": "395d77228cc7c198b29be21f043b4336"
  },
  {
    "url": "assets/js/75.6a240d73.js",
    "revision": "69e47ed4f4c619068ce05d3d9393afe2"
  },
  {
    "url": "assets/js/76.649baf25.js",
    "revision": "2dafe9a26a8394c48527b2173fc71387"
  },
  {
    "url": "assets/js/77.7de79513.js",
    "revision": "21017a84600311ce911f0af4c7a4bb9a"
  },
  {
    "url": "assets/js/78.0211a0b3.js",
    "revision": "3078fe389a08865def9c0f2c1e4f4efc"
  },
  {
    "url": "assets/js/79.f9a2288d.js",
    "revision": "1bfbbed4035eb18097096a5109c3c560"
  },
  {
    "url": "assets/js/8.227446b4.js",
    "revision": "8711f73b9724cbbce6f085f571468cdb"
  },
  {
    "url": "assets/js/80.04ce8224.js",
    "revision": "741f9b03d43bdd137f5a61b36e90628c"
  },
  {
    "url": "assets/js/81.7e59b0e4.js",
    "revision": "3f8e97e4390cb3a64d20d14f2700fc06"
  },
  {
    "url": "assets/js/82.753f8b89.js",
    "revision": "92f5157530cffd8e88edd1a277526e95"
  },
  {
    "url": "assets/js/83.29852c33.js",
    "revision": "e5cef31086eba6e2b1d6930a92105534"
  },
  {
    "url": "assets/js/84.08f0d276.js",
    "revision": "05dcfc14a63b32d2f5b34106b9cddd6d"
  },
  {
    "url": "assets/js/85.7d8c4fab.js",
    "revision": "6b71aa47aa8ad32be20189ff15ed33ec"
  },
  {
    "url": "assets/js/86.9cb2a598.js",
    "revision": "7d514f17c8b2dd488f144a2014399436"
  },
  {
    "url": "assets/js/87.a965931d.js",
    "revision": "9dee25fe94f7801dad477b195b457671"
  },
  {
    "url": "assets/js/88.ab690764.js",
    "revision": "f6ad76bcf68a16f553e330075f883e26"
  },
  {
    "url": "assets/js/89.172f1315.js",
    "revision": "f30b50a24b23ff81f1bce5a145d76297"
  },
  {
    "url": "assets/js/9.979535f8.js",
    "revision": "12c9cc7f638f53604f45f2d1f7c9e16b"
  },
  {
    "url": "assets/js/90.fbb66748.js",
    "revision": "946b010281de160e23df4f7fb21b7860"
  },
  {
    "url": "assets/js/91.b156b4b4.js",
    "revision": "4bb8d2594fcf6ec8efa40dfee0adedaa"
  },
  {
    "url": "assets/js/92.8b3199a6.js",
    "revision": "5d631aadb891a757714f3d807d2b5157"
  },
  {
    "url": "assets/js/93.5fe56a18.js",
    "revision": "706d098a339008a24a39dfff8d0f62bf"
  },
  {
    "url": "assets/js/94.8d689e7b.js",
    "revision": "9e585a89b14524d527ce44facc4f0aaa"
  },
  {
    "url": "assets/js/95.cc36e9ec.js",
    "revision": "d34ab89624a959d5c2805c3bf576dcb2"
  },
  {
    "url": "assets/js/96.0e0efd48.js",
    "revision": "43132cf1ea2b0adc48dd9609d98a02cc"
  },
  {
    "url": "assets/js/97.194e391f.js",
    "revision": "e604d58a4956e245b4325182fcf311ac"
  },
  {
    "url": "assets/js/98.07f9e1fe.js",
    "revision": "46ca8d3073a596d77f3341e368207ccd"
  },
  {
    "url": "assets/js/99.2608c99f.js",
    "revision": "8637884662dc88b9b8dcac92ea6bd0c8"
  },
  {
    "url": "assets/js/app.764b9f81.js",
    "revision": "e10dbe6eb98c3d6d30dff9c15389507e"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "d77ea32bd4e1700e6fc4a373b4a2b675"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "4dee0ebcd3d4205eba7ac15a4fedcef0"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "fe9d581ae182c3f0ac40dcc4ffafca89"
  },
  {
    "url": "de/effects/API.html",
    "revision": "109f3ace1ea70614a88141815a03f985"
  },
  {
    "url": "de/effects/index.html",
    "revision": "e5c1b2b00bbcce8651749a29c9ba7abf"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "a5621c5bca55e9cc82bb8780b14211b6"
  },
  {
    "url": "de/index.html",
    "revision": "d9c44a17074465c509a368a9ef54b4fd"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "bba92d2fbe70a5df4514c5f4368af3ac"
  },
  {
    "url": "de/json/Control.html",
    "revision": "e0407cf40304a70ed40b368e50d14718"
  },
  {
    "url": "de/json/index.html",
    "revision": "7492418426910416b9f3e79603470c65"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "fa3c838d29f40610fc246c6d519ad85e"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "868692c3555ccddc8374a97ad0265399"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "9fefbd3d3e92f8ac5209601ffd0ab10a"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "982b3d6740dd32c8b877c8a4435571fb"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "90f00734ac2f8d0f1540740e7824e4cf"
  },
  {
    "url": "de/user/index.html",
    "revision": "d489a61c616dc420ccf090ef593eaf21"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "3db61ff6ce4b1524f6ff82fe51977e34"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "09585f9f9672ddcce104ac018f21eec8"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "90ca974da302ea6774462e09ede23fb4"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "45812b8fd405dd4c800f6fc73aefb26b"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "6e2ddde10c0bf2d163d2d30a2b1736b9"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "d8d26d9f7c7ac63441de8d3831894104"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "a108430d13234480075ea7a0dec5ef3c"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "8b6368da2d7285669119eb0a808ce37d"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "f33bfbc192faefd7286fc311e6e26cd6"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "4eb9c7188b8ea01a943c5ea9766122b5"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "015a063f8403aa39ef9970192480dade"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "7e5c6cb93c12dc2e5ed2444da5c61985"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "094420061c2870f2484826b91ab8c591"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "e1a64e45dccb6eef09a79da02691bb0b"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "c75b192e74b915c2f2fdbb5be19b602c"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "3e3fdec986b0443e78faeaa7d22b5922"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "98cb4169f2625691b5e99f3ea2873d6a"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "f050f028c04ae9e1cb069494cb630a36"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "1cadbb8d56b6c5b8bc5fc98c925c681a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "bc62e620ec9f315083315a5511ffc07a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "5e4126f0dc5d3ed145f5712a83378ad4"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "9465be20ce9282e7f54d0558dcb04fce"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "6576210a43e24aca48640b3b3b129545"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "3ecc522783c1389754283902a7d3c80f"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "2caedfc59edbb9bbbcc71732710e858c"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "b2a685bcd087d7d9f101a79950b004d8"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "a7b9f3bde11762773d1c613d54073d0a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "940a6ee37ae4d2e9b5d542b8b539974e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "57bccacc071505b80cb258bfab0e96b7"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "3f524ae1bbd59df2c3b2f49ae384b5a7"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "602e49bb60164144358b86d0c1098da3"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "be3d41096aa6e6f3ed6e2f1aa19b5593"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "b69275fb3d499d96e00f37afc12d8d28"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "24090a660ec43a50a49197f125f2c0ec"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "a61076188c22ba83c82955bbcf66c15c"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "423ce113872251631a86002b008393b5"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "558ea4f1c24a87f415456e2809bca96d"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "aa13eb89c2bf289fc5062ed7f033428b"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "d117f4809b76e0fd129f17488f61caa0"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "c5940d4b0ca7a2995bc39b96d7ef37ca"
  },
  {
    "url": "en/addons/API.html",
    "revision": "5e59d3b491bb31dc5a2edda548381a9e"
  },
  {
    "url": "en/addons/index.html",
    "revision": "c65d8466c2cfe13032a5374a055bfda4"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "3fe41d64baacb02dc8e0c620954c07ec"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "b13e4a0d7000147023c2413a680fc312"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "da4dfb3122b42dfd0e5821f75897321d"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "8e0950db534f44e56c1fab1c5565998e"
  },
  {
    "url": "en/effects/API.html",
    "revision": "5eaf638be30fc9885be182fc602333e0"
  },
  {
    "url": "en/effects/index.html",
    "revision": "cb354f5b133e59126dbbc5489a92af6c"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "3a432a2ce8bf0108ba34ebbd59512ab4"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "30083cb513dfec75b4e6d60d8477ab0b"
  },
  {
    "url": "en/json/Control.html",
    "revision": "90c1d35f5c389c5848584cb63ccb5059"
  },
  {
    "url": "en/json/index.html",
    "revision": "c22a7a79bf5b908ffc48237d7ae1a77d"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "9079183e950b685ac57a9386371a2914"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "23bde4f87f62a4a640e90d0126ffb7b5"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "28e0ec22ffa86d3a831e5a06cd101a85"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "a51c95b0bf5db71c33ad51aed4602016"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "f5158476b8028cd50ef5dcc2b5efd1bc"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "0815606b3a0cb89f67c15fc5be6a6f25"
  },
  {
    "url": "en/user/index.html",
    "revision": "6e0fdd65ceb4f54fdfed0696204c0fdd"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "3a9ef04c9e007babc5ef7bf74fb7b05a"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "432910159d5f3d523ca548dd3bdcb937"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "3b572cd2d81a7ad3fbe3d47be25b1a25"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "15246495f53cb08642b64c0e7c49557d"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "18633d516389f6fb1127a1262f33c682"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "b27696e6d86852464ff772023c491a8a"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "40d49e0c393129b050a97b36b89b6921"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "11aac6891ef313e87cb3923912cd05c5"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "6ceb173b7bffc5cf859b938fa2653f11"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "d3a6c9cd16555c759651c2a373b8daa2"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "aaa5945d39e755ef0b00762337bd89f9"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "faee4d0dc0d7467f17b83d7e37106b8a"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "322fafdebae5d455b37031a0f360c82d"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "7707a57dfba92d13ceb16ae7432011ff"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "75c146917f8c5ae0e13bac4f8d4ba15e"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "e26fb50cabec34cc2c02bbe1faa34b61"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "5153c7c853a2b72ceb8c2185766b51b7"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "a0f4ccaf56f62c815c6ce3041b126eaa"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "5b5b51b9b429091ce82a46f310c4e1e6"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "bb3f1dc7cd5959e575567f13500e655c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "aed0f0851e4166db2b6c17f0013040ab"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "7b225ec54489222acd87d079e0560f57"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "5030e9b8351e1939bc2f9b311d372bb3"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "d8bc0e0da12f9669616f128c3cfde57f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "187458f7040fc779e82424bb724a3824"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "f60f440f767d18018343a9f32b837e7a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "95538c126d2d95ec65cf98a25eaf6b6b"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "3ce63cb2ca706d4afb2ba74d55a37dc8"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "16a5380b553d8d590a9c84d35f50fe7c"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "900f304042d9416a3da14f293408238f"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "ddf6bbfb03af2044632618e326687984"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "3eb266315f120c9443bc38fc31b88568"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "3221f01aca00957d6fa26f805cacaa9a"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "63edcb75297224e783f09ac432ef970b"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "a5ecc62f20d67239c18b150a4cfa83b5"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "d1279ee5f61eaf4b899909c9b82d80db"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "a6095d71134ddbe7bfe5324c9cfbf703"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "67ad159c20e9d1c18f6ac091240b3cac"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "2d610ca410a8350ea04b5cc2afe673c8"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "ca5de7f8315997c648661f52decc816e"
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
    "revision": "60f97ee14a0fce80e21f63243c0b5f14"
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
