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
    "revision": "e57328df00ef1ca716e90dbe2a4bc05d"
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
    "url": "assets/js/1.041e9fcf.js",
    "revision": "3d16ddf33927dd4133f1d00cccf8c753"
  },
  {
    "url": "assets/js/10.0fb98341.js",
    "revision": "c663d8845ed135dc17c97bdf34b3b833"
  },
  {
    "url": "assets/js/100.2ae16a19.js",
    "revision": "91feeaa56c6989f027d7a825828f9aab"
  },
  {
    "url": "assets/js/101.04a3e60f.js",
    "revision": "c72a69808963edbcbbed31c7d3e1f055"
  },
  {
    "url": "assets/js/102.837a0807.js",
    "revision": "ac96c68ae9907ba839dd938a9710d8de"
  },
  {
    "url": "assets/js/103.d7ca52e5.js",
    "revision": "5bcd9da673642797bcd3ba9f5f19acce"
  },
  {
    "url": "assets/js/104.b05c5134.js",
    "revision": "b34f8e7c21f725cf2be77ae714d5e451"
  },
  {
    "url": "assets/js/105.a8ae851a.js",
    "revision": "fd054610c37db81d55f11d9dfad6ceb6"
  },
  {
    "url": "assets/js/106.91eebda2.js",
    "revision": "c553ca5429158458b91fad9c1fc1ed6a"
  },
  {
    "url": "assets/js/107.2c231598.js",
    "revision": "ee20538de098e959ffd9778550d57dfb"
  },
  {
    "url": "assets/js/108.8f35b876.js",
    "revision": "de11dd2581a0e65126eea3bf7e27af35"
  },
  {
    "url": "assets/js/109.6c762b99.js",
    "revision": "c01d302bc48a8861068a7cae3434bc47"
  },
  {
    "url": "assets/js/11.acd59ba3.js",
    "revision": "207acec367b8d087ddfb94081a87ec42"
  },
  {
    "url": "assets/js/110.facd2f98.js",
    "revision": "69ff6459978c57e6254cac3358d6045c"
  },
  {
    "url": "assets/js/111.66e4e551.js",
    "revision": "b6748474c29e7ed6e1ceb9a2ba538fef"
  },
  {
    "url": "assets/js/112.26a12d53.js",
    "revision": "e7d6284d6889669db0a1457f019f9ba6"
  },
  {
    "url": "assets/js/113.61a09bb5.js",
    "revision": "fbdc0b9d01d3e2ce9488f99c50e29102"
  },
  {
    "url": "assets/js/114.3a3fcf8f.js",
    "revision": "b278ef6c2ac3ec8c681792cdc6eeb5b9"
  },
  {
    "url": "assets/js/115.9e066fc1.js",
    "revision": "d13124bedc9e018419543b23f2a03543"
  },
  {
    "url": "assets/js/116.210ec370.js",
    "revision": "0a3954e1fe4a122b65ff29499da6ed7e"
  },
  {
    "url": "assets/js/117.ab4dabc0.js",
    "revision": "2d1ee8c4a70961c3be1f993f9a21eea3"
  },
  {
    "url": "assets/js/118.169677d4.js",
    "revision": "0ac7f43cfd6cb5a4aa6990962dcd98df"
  },
  {
    "url": "assets/js/119.c2afc77d.js",
    "revision": "b140fcc3024481dedbc8084d77add396"
  },
  {
    "url": "assets/js/12.50402629.js",
    "revision": "22d264f5373b24d8c7bd2a45b95b4032"
  },
  {
    "url": "assets/js/120.d66f60f0.js",
    "revision": "0679a3946cb94413d14c159b99039ba4"
  },
  {
    "url": "assets/js/121.2d65adde.js",
    "revision": "cdf3d270ef3f871448ed57efbd6bf143"
  },
  {
    "url": "assets/js/122.a7331bef.js",
    "revision": "f94b403eaad547943ea1f5398accfaba"
  },
  {
    "url": "assets/js/123.b0893a4b.js",
    "revision": "b8f0de8077bb9bd86be7d7e96b3243d1"
  },
  {
    "url": "assets/js/124.f8c86cf9.js",
    "revision": "126176a700e0aed206d530a1fc2b96a3"
  },
  {
    "url": "assets/js/125.c3d36e82.js",
    "revision": "b925d6303dc9112bf18f4161d337a542"
  },
  {
    "url": "assets/js/126.9102fd0c.js",
    "revision": "e122855d8fa7c26e55b1c2f33309ad46"
  },
  {
    "url": "assets/js/13.40a11efe.js",
    "revision": "c2e4dcb13d1fef1d8a6f47dbfd5ec8db"
  },
  {
    "url": "assets/js/14.0058aa46.js",
    "revision": "df836c3fce759d6f2878791dd36c0c9e"
  },
  {
    "url": "assets/js/15.2454a85c.js",
    "revision": "f83846efc13809cfef6b3d23f32eab57"
  },
  {
    "url": "assets/js/16.99b96c68.js",
    "revision": "b774043a55031a877854ad062333bb74"
  },
  {
    "url": "assets/js/17.97df7293.js",
    "revision": "26ad8d7c746350e791ed17f40faae009"
  },
  {
    "url": "assets/js/18.0f3206ce.js",
    "revision": "cb25d062f7a9639f38e7033dfbe6521f"
  },
  {
    "url": "assets/js/19.b1e6193c.js",
    "revision": "8898db132e03bf44d4171700efb3b780"
  },
  {
    "url": "assets/js/20.5fbf3e6b.js",
    "revision": "b9771c966566ea2eb9cac596ca4c4543"
  },
  {
    "url": "assets/js/21.afba6e66.js",
    "revision": "9f0dee4ae3acc1f9f8a9f84475a310ec"
  },
  {
    "url": "assets/js/22.6f7f3d5f.js",
    "revision": "ea7e8beff2569778ce932cb7a0e07c1f"
  },
  {
    "url": "assets/js/23.01781d27.js",
    "revision": "30d8ae972daeaa8a6250462ee22967df"
  },
  {
    "url": "assets/js/24.03b76396.js",
    "revision": "158f336d5316bb6d1e001e13e5ca9032"
  },
  {
    "url": "assets/js/25.1b53d044.js",
    "revision": "84e2e928129facf3cb761bcdf5150822"
  },
  {
    "url": "assets/js/26.cfc057fa.js",
    "revision": "b63ddf1e3ee79795e4ccce7ed13f351a"
  },
  {
    "url": "assets/js/27.59b46265.js",
    "revision": "b50fc391d517cfb905dd84a1f4c75659"
  },
  {
    "url": "assets/js/28.8653ca52.js",
    "revision": "6b9f0146cb923e78612488e52342ba25"
  },
  {
    "url": "assets/js/29.8fce155c.js",
    "revision": "872889b943d84eadc8524c8b00496e6d"
  },
  {
    "url": "assets/js/3.d8bfee48.js",
    "revision": "e3b7ae9ade63c638a036ac6ec1576846"
  },
  {
    "url": "assets/js/30.05562fa0.js",
    "revision": "e2e27809d2f00412a2a1636464d64a98"
  },
  {
    "url": "assets/js/31.96f8fecb.js",
    "revision": "bf69f153b49d4a788d910c7c7c890427"
  },
  {
    "url": "assets/js/32.7d86cbf1.js",
    "revision": "91b824c23e50b728dfca92f594facc43"
  },
  {
    "url": "assets/js/33.9be9a18e.js",
    "revision": "27b7a8f8f1907148f1ac5b2ca83ba5d4"
  },
  {
    "url": "assets/js/34.90ba129a.js",
    "revision": "3bde55f15f429d0350d778408f9c827f"
  },
  {
    "url": "assets/js/35.081a5a55.js",
    "revision": "a15a98627942586438468da8c99d990e"
  },
  {
    "url": "assets/js/36.36b33f5a.js",
    "revision": "fc56f10fbaa9c37f90b9254bfd9daf0b"
  },
  {
    "url": "assets/js/37.4e970757.js",
    "revision": "42d20b0b0d1650eae7c26d862158ec96"
  },
  {
    "url": "assets/js/38.daedfb74.js",
    "revision": "502e3f9534773f27b76c85142775db1a"
  },
  {
    "url": "assets/js/39.a280f691.js",
    "revision": "2d3ba4c827ed77aaf464c4c2ab3aefda"
  },
  {
    "url": "assets/js/4.10c46e7e.js",
    "revision": "cc4531b63f30a9e9a8389ab6d63f4541"
  },
  {
    "url": "assets/js/40.0c0f5845.js",
    "revision": "97573fdee92ef53977fa17a1b3fadc9c"
  },
  {
    "url": "assets/js/41.fa8ee6bc.js",
    "revision": "a1193ddc6e675d0bf426868ec7735cb8"
  },
  {
    "url": "assets/js/42.3da44603.js",
    "revision": "1157b84c8161c68908afa72c96491944"
  },
  {
    "url": "assets/js/43.4d7d3027.js",
    "revision": "2bc0299161bae3b4d9a7533ae6b8d577"
  },
  {
    "url": "assets/js/44.ade4714f.js",
    "revision": "2a60f894042284364445f910f5622a0c"
  },
  {
    "url": "assets/js/45.7f2077de.js",
    "revision": "32cee92377f0d06cbb78df0b31f76dd6"
  },
  {
    "url": "assets/js/46.0183bc06.js",
    "revision": "97d0fc3eb5d11b4f3e0cd09e47229ec9"
  },
  {
    "url": "assets/js/47.257e5a46.js",
    "revision": "c3760a4a8eed8e7f92fd3477993d9c24"
  },
  {
    "url": "assets/js/48.72a349d1.js",
    "revision": "bf97442fec823fcbc0cee57b2bf6a56c"
  },
  {
    "url": "assets/js/49.b5612eda.js",
    "revision": "2b25aa9b71de25b1bc70bfc79fb94c71"
  },
  {
    "url": "assets/js/5.228fb4c9.js",
    "revision": "a29c13bd067a65a37463fba8d8895b6e"
  },
  {
    "url": "assets/js/50.2eba8ef1.js",
    "revision": "8150bd2fc119525fde644c6df6e9386c"
  },
  {
    "url": "assets/js/51.6acab99e.js",
    "revision": "a7e797e7b4882456c5dca90997a7fe01"
  },
  {
    "url": "assets/js/52.c5bf55e3.js",
    "revision": "2537b8be1f2f746845f30d49e18952bd"
  },
  {
    "url": "assets/js/53.8a54fd09.js",
    "revision": "6304a3cce076c07cdf746ff66dcddfef"
  },
  {
    "url": "assets/js/54.a84c7a05.js",
    "revision": "b26a82fed0d92a421d3fd51737b075f0"
  },
  {
    "url": "assets/js/55.3c479825.js",
    "revision": "b9f4c62e602efc2561919382a023369f"
  },
  {
    "url": "assets/js/56.ad21b884.js",
    "revision": "84f53b00cdf1ec48d55865dac609387c"
  },
  {
    "url": "assets/js/57.9dccebeb.js",
    "revision": "33fbef9f1441b7e4cf5c1933de447904"
  },
  {
    "url": "assets/js/58.3f355ffd.js",
    "revision": "8ee2e4f2c1ea8a18a50848d3e35b0dd5"
  },
  {
    "url": "assets/js/59.36aac2de.js",
    "revision": "6de4e86572b80497e4595181f3c5addb"
  },
  {
    "url": "assets/js/6.c13c1935.js",
    "revision": "cc0c25c8c631a8973cce6ba404ec3d1b"
  },
  {
    "url": "assets/js/60.9e00c3e5.js",
    "revision": "8b797529d4b5c631d527b2cf522957b5"
  },
  {
    "url": "assets/js/61.9b7d60be.js",
    "revision": "bb1a650c89289b2d767a942656977011"
  },
  {
    "url": "assets/js/62.fa28b756.js",
    "revision": "bcaa6f51803e4fe0e35d00475eb873ca"
  },
  {
    "url": "assets/js/63.cf056671.js",
    "revision": "9f17bd29a1048fa3a5afbcf1ef31ca69"
  },
  {
    "url": "assets/js/64.13d0403e.js",
    "revision": "491524838c887f2e3cb2f67ab9a9a753"
  },
  {
    "url": "assets/js/65.67f6701a.js",
    "revision": "d2458eaa40aa4e90f4ba0c9f01424e72"
  },
  {
    "url": "assets/js/66.c4e092de.js",
    "revision": "24a285bfcd54b178be9f43e71f5f6f9b"
  },
  {
    "url": "assets/js/67.268af15c.js",
    "revision": "0e0076718b806d7613d9d9f7a68cd31a"
  },
  {
    "url": "assets/js/68.d4e548da.js",
    "revision": "cbb630df0235be02cddb5a1062817b2e"
  },
  {
    "url": "assets/js/69.50237185.js",
    "revision": "278f5016064a64dff1040b1cb1f67076"
  },
  {
    "url": "assets/js/7.3f5ec163.js",
    "revision": "f39619e282d98ba0f90d2b14e0be59bb"
  },
  {
    "url": "assets/js/70.03d14ecc.js",
    "revision": "6094513aead4720792c10fec98a293ee"
  },
  {
    "url": "assets/js/71.474b044d.js",
    "revision": "b6b0ff852b1f34e8660bc4eb0c18136b"
  },
  {
    "url": "assets/js/72.26535bff.js",
    "revision": "a3f24caaa5edf4b88530782e8420f539"
  },
  {
    "url": "assets/js/73.bdda924c.js",
    "revision": "a59b627235390d85006dec982a0c5f3e"
  },
  {
    "url": "assets/js/74.ee623fb6.js",
    "revision": "784a23469b23b5e681827c2d33d2236a"
  },
  {
    "url": "assets/js/75.d93b754a.js",
    "revision": "15a8aa59aca60ab49f9845c62d9bbc2f"
  },
  {
    "url": "assets/js/76.5bf1342d.js",
    "revision": "a180cd032db99de0b438fe481e3f2e22"
  },
  {
    "url": "assets/js/77.e6136a84.js",
    "revision": "110e434098385963d4cafb74ac30d5b8"
  },
  {
    "url": "assets/js/78.11de9322.js",
    "revision": "d9df52eaa5f514946148d9637ebb540a"
  },
  {
    "url": "assets/js/79.c2ef0baa.js",
    "revision": "d494c43accf0f75d7d83ca06d9202ea9"
  },
  {
    "url": "assets/js/8.5a245271.js",
    "revision": "59cca1703f58b042f7606fc40b4ab6dd"
  },
  {
    "url": "assets/js/80.b45d5edb.js",
    "revision": "6153542bb3b7357247b3643ff8271501"
  },
  {
    "url": "assets/js/81.2cecbb14.js",
    "revision": "c44c96bdac49f73a3a20a0bc35533727"
  },
  {
    "url": "assets/js/82.dc796a8c.js",
    "revision": "d4f1d3eb84dd563b077c630ebaa70381"
  },
  {
    "url": "assets/js/83.f7307b7e.js",
    "revision": "c9360e8664e2df742c2c95c59d50b304"
  },
  {
    "url": "assets/js/84.8c570c1a.js",
    "revision": "56f3fd218498498eb0e107b1b5607b41"
  },
  {
    "url": "assets/js/85.f76ab4fe.js",
    "revision": "186f1fc27ac1600fe6dce5574829f3b5"
  },
  {
    "url": "assets/js/86.01bd9019.js",
    "revision": "9efea234d2a8519709d16ed486ad2ac3"
  },
  {
    "url": "assets/js/87.c9b37732.js",
    "revision": "e701d431c1862b259c0401845bb629c3"
  },
  {
    "url": "assets/js/88.6ddfa655.js",
    "revision": "319812e5430a1eecbfc947c54fd92f43"
  },
  {
    "url": "assets/js/89.6453e193.js",
    "revision": "8e640f6a853cfde572706d1225bf874e"
  },
  {
    "url": "assets/js/9.9e1c62c3.js",
    "revision": "6133b02caeb30924a707fd5d9581b04f"
  },
  {
    "url": "assets/js/90.ea20c26b.js",
    "revision": "a9554493d32ef65bfd5c095501d2daf7"
  },
  {
    "url": "assets/js/91.5e48ad77.js",
    "revision": "6f6264b5d2e0cccb437c9e7fdad44a48"
  },
  {
    "url": "assets/js/92.2b92c3c7.js",
    "revision": "27174e9c3a8e24f3384ca4dd09386cf6"
  },
  {
    "url": "assets/js/93.cb0d61e6.js",
    "revision": "448bf9138153462fff46a8d360919035"
  },
  {
    "url": "assets/js/94.1884e5a6.js",
    "revision": "563e8635d39540a307dc92843b830075"
  },
  {
    "url": "assets/js/95.3511b9f4.js",
    "revision": "eb83e124a2eb534f943823d22c41d2fe"
  },
  {
    "url": "assets/js/96.f0915b95.js",
    "revision": "179588065acd07c2b78f0c9e83cc425a"
  },
  {
    "url": "assets/js/97.501e363d.js",
    "revision": "2d8fc5323a24d1c9b1b85df28a37da89"
  },
  {
    "url": "assets/js/98.fde9bb30.js",
    "revision": "6d5c32a62d7f0dc685e1b6c01822057b"
  },
  {
    "url": "assets/js/99.64cda85e.js",
    "revision": "3acdf9910c6e567e5f11d66b7402ec31"
  },
  {
    "url": "assets/js/app.922b7649.js",
    "revision": "9f2d1868406ea7dd643a1788ef32f560"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "c1426c99b4cf13bca936a28754f9d81d"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "b26df3d501f8dcb44a1547baee3dc022"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "bebc7e8b2284be8cb17c6c7bf208bdbf"
  },
  {
    "url": "de/effects/API.html",
    "revision": "31e0d571d5992ffd80b1939a6e0d7296"
  },
  {
    "url": "de/effects/index.html",
    "revision": "0be4c950f84e03d4e69d7a8c6a4a8bc1"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "303aabb8f878bad19047e64584515dda"
  },
  {
    "url": "de/index.html",
    "revision": "b2936ba5616c5e7e0eba611c1ee19820"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "d135776b9adf685bb76b7e57a34e723f"
  },
  {
    "url": "de/json/Control.html",
    "revision": "18066503a5edcac037c6c4fb1e243265"
  },
  {
    "url": "de/json/index.html",
    "revision": "10a9297292c83e92b3a6927d4a4740a7"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "e8b79d4ba28acf7ca9e7d29de4a858d8"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "7cb7cb46c95bc349f109820c0682b1c7"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "8bdb39d64d06624b97ef3f3dcdb2e70d"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "f8a9acb4a517ed5851e4356cfa9bff0b"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "7a8295beed2ea2a389b42595d6e7f442"
  },
  {
    "url": "de/user/index.html",
    "revision": "c7995dbad839e237385ea3ba3a3eaf78"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "ff8ea2bb65109111376596660d11e722"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "11267049777f60c5544782f513092fca"
  },
  {
    "url": "de/user/leddevices/gpio/piblaster.html",
    "revision": "b15d0d63f25e39b7c2d28d1c0fe928ba"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "9bc67f4db1deec9e4fc14588e8e4bb5b"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "7fde1a3bda1d5a6c87abef1e1c667944"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "00c76fca9be70152ea0db2601852a0d1"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "ee7e285935d83847a62f46a66839449a"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "5e069e1e82a24c4e52d552ebc9475d69"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "ff0ac0874d24b6063c62981cbfbd69e0"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "1568ff594d05381bfc3a2a4d74bbd915"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "b1cc71e5dc94331d31b4d87ef2b27270"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "d8d230c1360df3da1f3b142504602672"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "2afd35590f51c2adb9522464a0b04a28"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "f722fc665abe46a4be8a68e3b3a3555e"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "f9066f030e5a610c96304082e22fb748"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "f5cb9dbc395cdb8b0ef6d46ecaea48a7"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "7a82b2cd5bd31d677a100203478214e6"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "616fe0670a6604f742f25510d6ec85c2"
  },
  {
    "url": "de/user/leddevices/spi/apa102.html",
    "revision": "96aa7fc87fbb45eb08d39709b69ee1d7"
  },
  {
    "url": "de/user/leddevices/spi/apa104.html",
    "revision": "9f285a002c0d93eba3a1e6487cea777a"
  },
  {
    "url": "de/user/leddevices/spi/lpd6803.html",
    "revision": "b9d01506780b158f3b06a9aafea4d5fe"
  },
  {
    "url": "de/user/leddevices/spi/lpd8806.html",
    "revision": "8ed9533ae5c82f283fce964d4367fa01"
  },
  {
    "url": "de/user/leddevices/spi/p9813.html",
    "revision": "304f951c0a50b457eded6252a4daa343"
  },
  {
    "url": "de/user/leddevices/spi/sk6812.html",
    "revision": "072b442c5b4128c529a8d8f501c4d99e"
  },
  {
    "url": "de/user/leddevices/spi/sk6822.html",
    "revision": "a8360569305928be9a2a7dcf1d8942f7"
  },
  {
    "url": "de/user/leddevices/spi/sk9822.html",
    "revision": "4f7578156fca57ccdcc6f8ed1b07c65b"
  },
  {
    "url": "de/user/leddevices/spi/ws2801.html",
    "revision": "90422a84a3a1e38d3deb6f83d5325455"
  },
  {
    "url": "de/user/leddevices/spi/ws2812.html",
    "revision": "bba00aae3ded45358c613bd90d923e6b"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "d9ac4286e50de771d0cf2ab7d35415cf"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "ab4ee1c242f84f611abf63a0fd56b2b9"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "f1d414ef8b5417cc31bc93b67bb87aae"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "1966ee13fff4736aca5dc38ea6743ad0"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "8b1a035217a26b82102c12bdce800264"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "1233c8652eee61a162c660e360b17db0"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "0ede8f27515ea91c0007f39da7fc16f6"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "d2967b3951603442c747cc0a6802488a"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "5a28f0cc0cf47d50c709901a23b103c5"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "0987ec58cbe1db83c62c62c8c6f49fef"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "af45e1d5263e1f44976e8653f67dd042"
  },
  {
    "url": "en/addons/API.html",
    "revision": "a034de0cc059ac9a961c4653f8b5e1a8"
  },
  {
    "url": "en/addons/index.html",
    "revision": "b0841c0ed76ae72d3073950c544332c1"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "73b1e363f0067ceb3f0c2625f86ff213"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "ae2c098cba08f72c643de678da1d4b79"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "d9b39152f3201729ec250c8c4b91899b"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "3a91ad7e83b6820e71054882c1c305c8"
  },
  {
    "url": "en/effects/API.html",
    "revision": "3e765cc310ebbf2acb11cd902a9f5226"
  },
  {
    "url": "en/effects/index.html",
    "revision": "11591373c4e44a01b0d2002fa58e5f7b"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "17deb969411355ec6ed75107d71dd7f6"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "88d9bf8a52348a5f6b0cede54320a39e"
  },
  {
    "url": "en/json/Control.html",
    "revision": "2f67f720df8a48831cfecff6a0efeb74"
  },
  {
    "url": "en/json/index.html",
    "revision": "8bc9bd55421009f4fa9e6bea219274c3"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "00d19c0ba947355cf2120ffa5847c00f"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "14513c8b49f183c5a979fdcb5516bf1b"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "dbbeae3f691701ff60cd7794ff1be856"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "78e4cd342b9aa14f9dfafdfd20a4fad0"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "75e0ef7cc6551184aa15d0f3fc8cc0e7"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "80b01ede8771e18513f81e52872c4627"
  },
  {
    "url": "en/user/index.html",
    "revision": "260493b37c09dfd457531b30892ae0f3"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "be7b8f2f315ea685a816e04a09929cd3"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "f59b928146d8493c8583787ccf934348"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "f79cd6cd320f7b109166f2288d500e15"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "38802672ffdfab33686cc8173c5964ba"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "f0fe903263b631623d26b1fb9033cd0d"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "9ad055c9c03a33d9515d67b9a58a7edb"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "d63cdaf7f1474517b31e01368cf69a0c"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "fd019c519f182bc2502114fcd3bdcb3d"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "036d30f406e6bbe020ba5d9c73d07ef6"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "8319b8c7292303437cb44fdbf3e7382a"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "c658ebb25183a1d2bbd2610b5a9c8a0f"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "0cdbcd30789238aa26df01c70e9402e9"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "7a77cee59bae26adf5c0099957c1bf1c"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "9dba8f037764063f1b37554df83ad667"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "c68f534c2915f1723eb81d1d74c2ffd5"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "f9c9f3e060bd1066df751a33a7d4dcb8"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "49821218fe9767b54708cfc3ff81e9d1"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "dc91c4ef35338caf0709476eea03e9e8"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "d292b4e3171dd6989efc91f98c057287"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "3d1500598e1ddb4ffe507ffd93ff8716"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "77000034b32f9a835358dcc7579fd837"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "5b6c16492f24cc7773f6fd9dc452a331"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "eb17889d982362c1a03ab743228aa676"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "9b92eb9d88384fbe8b1769919f19b515"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "16327ec29296da887646f5539d871b21"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "fe38488c21525356662aeff031268911"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "8b6e56ef8cdc3bda8b992c995f607dcd"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "6ee2b60a78caa506e6aa7001f326b6cb"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "d865cadfcfc97462703e8dc8103fa9b0"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "b58ec7186ff39ff4d8a908dcc5b587bc"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "dfcba0ae55723984eba54f7760105826"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "c58997235a63bd7d6f9aa32242d7fbbd"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "4643ec619ccea122e10375a870f8efa0"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "cc3df061eb5aef2e8d83e9c513899f64"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "d7b951b85807546316702fab41be9698"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "c30d104a01282f345173a07f94111f1e"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "2ede9b5d13fa08be9ead21905ffa602b"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "03d57f321852dcdbb21ce99b496875f8"
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
    "revision": "468c185add1eb90989e1f749009b5be5"
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
    "revision": "17a5d14a7fdc7ac22f0d0932763b1ecc"
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
    "revision": "a7cc7eab24985ec1ff9eed4039e7d7c0"
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
    "revision": "17697ecdf990093cf31d713a0c8a5eff"
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
