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
    "revision": "a27430352701086ad62e49b97fc7009d"
  },
  {
    "url": "assets/css/0.styles.c7474ca7.css",
    "revision": "7074b97bc1e70f6c41d3f7b132dccdce"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.cfc5c01c.js",
    "revision": "8adaddb981f84907ba7cae9e31fa59a0"
  },
  {
    "url": "assets/js/100.50a9eb64.js",
    "revision": "85b8d9b7c612d79cf1b501a5b0b88675"
  },
  {
    "url": "assets/js/101.10696b5d.js",
    "revision": "68bbc20a828146d88feefd54255c50cb"
  },
  {
    "url": "assets/js/102.b581a184.js",
    "revision": "02a17c3180113300f5ea19c6fe456670"
  },
  {
    "url": "assets/js/103.51e6ee0b.js",
    "revision": "6025440f25bad28a58d7b278eb050826"
  },
  {
    "url": "assets/js/104.ce757c08.js",
    "revision": "eac0b0251b3d62746f619e3b34667215"
  },
  {
    "url": "assets/js/105.86d4cc6b.js",
    "revision": "d5e5acae0e0c6218b1387fd76e1dccaa"
  },
  {
    "url": "assets/js/106.95473262.js",
    "revision": "46df59a4c1b10177425434be65c30227"
  },
  {
    "url": "assets/js/107.5fb70b12.js",
    "revision": "49e63c769496474fab37ea80c9b5e620"
  },
  {
    "url": "assets/js/108.36a87dad.js",
    "revision": "b2b9ff9e91bb3df10d60f9b100ec4659"
  },
  {
    "url": "assets/js/109.03dcb4c1.js",
    "revision": "0dc0458d3b6d50f1e8ce15a0cde22e67"
  },
  {
    "url": "assets/js/11.8087f219.js",
    "revision": "cea704f93886bf5b9f1bb83ce9be92fc"
  },
  {
    "url": "assets/js/110.2bcc41e5.js",
    "revision": "5fe77c72d1058621e5bf8c794db324af"
  },
  {
    "url": "assets/js/111.de50284b.js",
    "revision": "059617ecddbef799c2b49c43ea585116"
  },
  {
    "url": "assets/js/112.db84d02f.js",
    "revision": "a660f8ace37c5a535cf94b990994297c"
  },
  {
    "url": "assets/js/113.e80be345.js",
    "revision": "2703d210d1383978c53b2ae72c1824c2"
  },
  {
    "url": "assets/js/114.a9cb424a.js",
    "revision": "b395fe58021906e234ddf4abdf4b17a1"
  },
  {
    "url": "assets/js/115.339d0cbd.js",
    "revision": "b9af6e65cead75ff13e6148296d74fce"
  },
  {
    "url": "assets/js/116.7ca4f27f.js",
    "revision": "1b6984e315679896f44bb8ee5a1360ef"
  },
  {
    "url": "assets/js/117.64dcb0bc.js",
    "revision": "9b014b2bdc6a99ec5719d55960e1eaa3"
  },
  {
    "url": "assets/js/118.d3635441.js",
    "revision": "b7fe77d166c0725d27bda5ea257d8220"
  },
  {
    "url": "assets/js/119.eea41568.js",
    "revision": "2b761cddb3cf14c1b2fe5b7ff441eb93"
  },
  {
    "url": "assets/js/12.9b4a49da.js",
    "revision": "78ea8fea2bec953b25f7fbe76667473f"
  },
  {
    "url": "assets/js/120.ee4d8edb.js",
    "revision": "007904fe59f2666636d3f1efe1fe8b4d"
  },
  {
    "url": "assets/js/121.d358e4ef.js",
    "revision": "5f8039bf959dd050514bd1a54f639072"
  },
  {
    "url": "assets/js/122.b6fd0e43.js",
    "revision": "570b5eb21458c37861610c2b001f4bbd"
  },
  {
    "url": "assets/js/123.d1a0c831.js",
    "revision": "3f43c5b4a727d7f80c522a7bd33a3637"
  },
  {
    "url": "assets/js/124.32f8e609.js",
    "revision": "1d145367bdc0dad977cabc3faf561811"
  },
  {
    "url": "assets/js/125.1ae4517f.js",
    "revision": "ff70dd68099f2ecfc222d1210ef3c824"
  },
  {
    "url": "assets/js/126.4813d879.js",
    "revision": "31ae65e2bb104753597e82a88f8cb55d"
  },
  {
    "url": "assets/js/127.8d98bcd0.js",
    "revision": "e6c50806c354def685e6cda40bd35343"
  },
  {
    "url": "assets/js/128.557a8520.js",
    "revision": "ffaf4c38f8516b249b95315bf4b7fe52"
  },
  {
    "url": "assets/js/129.436be4df.js",
    "revision": "3c546b3cd48a399e4947072c881d87b2"
  },
  {
    "url": "assets/js/13.23e982f1.js",
    "revision": "7983f447f886c23405cbf4a43e52ed41"
  },
  {
    "url": "assets/js/130.c5761099.js",
    "revision": "08c69d8643ad9d4649a4356e92f86e0d"
  },
  {
    "url": "assets/js/131.1e8cb887.js",
    "revision": "3fa03e7a52cd8314c3687582d7989112"
  },
  {
    "url": "assets/js/132.a1cad786.js",
    "revision": "a4aadbb7d5257e1550e2fafe8de0cbf8"
  },
  {
    "url": "assets/js/133.7b7cddb5.js",
    "revision": "32b143ddd29b8590a89ca2e6fbfdd336"
  },
  {
    "url": "assets/js/134.0d0e797a.js",
    "revision": "5e568d7190219cd983a1a042113fea45"
  },
  {
    "url": "assets/js/135.87adf793.js",
    "revision": "98f5920b71014aef3bf214dfc5c0dd9c"
  },
  {
    "url": "assets/js/136.f331b593.js",
    "revision": "e6f133738f2283f63052b024309a62ed"
  },
  {
    "url": "assets/js/137.5fc0ccb6.js",
    "revision": "7cdbeccb04c7785dd09ec1a3345a711f"
  },
  {
    "url": "assets/js/138.2fc5bd15.js",
    "revision": "6015315186a390bb09868d998e350d5e"
  },
  {
    "url": "assets/js/139.1e3a6903.js",
    "revision": "489ef5de07f624685d74075acce71087"
  },
  {
    "url": "assets/js/14.86995f59.js",
    "revision": "e80d0d3abef4e2192e0b448042c7a6b8"
  },
  {
    "url": "assets/js/140.2451abe9.js",
    "revision": "a34a2ea5deac4036e88580a5c2924e6b"
  },
  {
    "url": "assets/js/141.db07219b.js",
    "revision": "8f298e2db66a06810650659cedc5cdbd"
  },
  {
    "url": "assets/js/142.7c2f2833.js",
    "revision": "b7454f5cd3b4deb1f3da9dba3e3ff7a6"
  },
  {
    "url": "assets/js/143.15e62bc1.js",
    "revision": "45d3767f4711a6abc12ba31c93ccd968"
  },
  {
    "url": "assets/js/144.10a438dc.js",
    "revision": "e62991fee8883e18eab5bf8a9ec72f05"
  },
  {
    "url": "assets/js/145.20f51517.js",
    "revision": "8b3f3f2667ecc5aa46fb10da29a7997c"
  },
  {
    "url": "assets/js/146.c6319a85.js",
    "revision": "3f26f02ce8fbda2c00087be3a4e0197f"
  },
  {
    "url": "assets/js/147.ec43a175.js",
    "revision": "bdda07a84c7bccf339eadf2f20ac9bc6"
  },
  {
    "url": "assets/js/15.2cc2b87c.js",
    "revision": "13cc27cebcbc2cfd20c2dc7d332da710"
  },
  {
    "url": "assets/js/16.5d912a27.js",
    "revision": "4e86f262e5fc39ded341cc2cb0378a88"
  },
  {
    "url": "assets/js/17.efebde5d.js",
    "revision": "64dfde339d397b30ff80d8dfa66d65d8"
  },
  {
    "url": "assets/js/18.3bda0046.js",
    "revision": "df5e1375744bca02742f8415b8b71adf"
  },
  {
    "url": "assets/js/19.67f816ae.js",
    "revision": "8b7dd96433627c339d96b70e2cd43cb3"
  },
  {
    "url": "assets/js/2.aac1d94d.js",
    "revision": "02b302a91a1d3aa289616fc5235ccf1a"
  },
  {
    "url": "assets/js/20.a691e774.js",
    "revision": "6cff35e907109f3521737af4c94431bb"
  },
  {
    "url": "assets/js/21.fba6aba9.js",
    "revision": "f31a14e0ad3d1b889ed29bb4b4c634b5"
  },
  {
    "url": "assets/js/22.569c9589.js",
    "revision": "fc44d1bcc9da025f3d9f57cdc948137b"
  },
  {
    "url": "assets/js/23.3c432a48.js",
    "revision": "d3bbc7749c4d0a8debb40baa0ae56ec7"
  },
  {
    "url": "assets/js/24.69782bee.js",
    "revision": "a31b765dff7392fe65d6f234a1954d01"
  },
  {
    "url": "assets/js/25.0e54de1f.js",
    "revision": "5bed89367233b7aaf0cc78f1d9eff06b"
  },
  {
    "url": "assets/js/26.08465b0c.js",
    "revision": "47a76888d627d9281e40b77782bcb790"
  },
  {
    "url": "assets/js/27.79f91f77.js",
    "revision": "b8ef80513f0cdf53f8099d34e6c77a5a"
  },
  {
    "url": "assets/js/28.cfe926f6.js",
    "revision": "95187dc12011fe2f103671a02d868b05"
  },
  {
    "url": "assets/js/29.ceae528e.js",
    "revision": "6735aae932896bba168fc6f0e7df2ee1"
  },
  {
    "url": "assets/js/3.06269e14.js",
    "revision": "33046f8a23f72d55f6176f6c5a0ea2cb"
  },
  {
    "url": "assets/js/30.4cc6c6f6.js",
    "revision": "347542cfe826ed473dc84ce1b20d6e63"
  },
  {
    "url": "assets/js/31.e498678f.js",
    "revision": "ccc36f74415f88805edd33aa08d16b47"
  },
  {
    "url": "assets/js/32.566e2cc7.js",
    "revision": "a29ec65c39cd456de2b131c40a470411"
  },
  {
    "url": "assets/js/33.5e120247.js",
    "revision": "54ebf78f5de12959a0d7159f4def4f70"
  },
  {
    "url": "assets/js/34.0bd27ddc.js",
    "revision": "1037914e415d905c2f62e3ddc1b78812"
  },
  {
    "url": "assets/js/35.9db28f45.js",
    "revision": "e93f3bf29a30e25374396d6929916c38"
  },
  {
    "url": "assets/js/36.f6954627.js",
    "revision": "1a3d4c451794b16f5623c9d3d35e29a3"
  },
  {
    "url": "assets/js/37.2173dfbb.js",
    "revision": "97d2321ae6d7fbd8a1ebe71985dcfa78"
  },
  {
    "url": "assets/js/38.11db3c85.js",
    "revision": "a126189eb421cbc42ba880affcbd29fd"
  },
  {
    "url": "assets/js/39.3d651d20.js",
    "revision": "e1261ed93fc92de3ba179b77ee217fec"
  },
  {
    "url": "assets/js/4.f07365e5.js",
    "revision": "63d69ef3205ae4b9a56a5298d97c85d4"
  },
  {
    "url": "assets/js/40.332a3472.js",
    "revision": "570e0178919c13eb19fa2d9996450de3"
  },
  {
    "url": "assets/js/41.3e428635.js",
    "revision": "86cdf38feaf906928df815d19f11f7c7"
  },
  {
    "url": "assets/js/42.427552bb.js",
    "revision": "b65a1f700c355688730b392e9d7711c7"
  },
  {
    "url": "assets/js/43.dce36ba8.js",
    "revision": "0bb2d0a7e1f21a76abbffcb0fbdf13fa"
  },
  {
    "url": "assets/js/44.ef1e937a.js",
    "revision": "0df1bd9f295559d16b152a899bb443ef"
  },
  {
    "url": "assets/js/45.84886464.js",
    "revision": "3e3a9e1d30dd08c95b4d9aaa965a6f41"
  },
  {
    "url": "assets/js/46.f2266161.js",
    "revision": "1e8a4361fa5af9f46ed3fa9cea6d7555"
  },
  {
    "url": "assets/js/47.b8197841.js",
    "revision": "ff38771b99089f926f3211fcc3f08cad"
  },
  {
    "url": "assets/js/48.13a86562.js",
    "revision": "92513f31fb4b3fe7ce2e2ab7bc76e72f"
  },
  {
    "url": "assets/js/49.4f38c576.js",
    "revision": "ef82bc0a2de2dd0294b47b442f704ccd"
  },
  {
    "url": "assets/js/5.8ce2b14b.js",
    "revision": "5a70f64b1be40d698b75b73c322455f8"
  },
  {
    "url": "assets/js/50.d6757c61.js",
    "revision": "3efab6a47dddb7994cfa571b8db9b33b"
  },
  {
    "url": "assets/js/51.50e0f51a.js",
    "revision": "736d04353ac9df0a2da9229ace088d8a"
  },
  {
    "url": "assets/js/52.674d7b3d.js",
    "revision": "294003a395ff57f54df95fa746a46c7d"
  },
  {
    "url": "assets/js/53.f95811dc.js",
    "revision": "b1d55e4493c1d90f0d87d1127fbdfc65"
  },
  {
    "url": "assets/js/54.d8801247.js",
    "revision": "a96b56ed0180964f60d50cbafff7c510"
  },
  {
    "url": "assets/js/55.2145019d.js",
    "revision": "5c7fb6843c25aefa08b3fa62705555c8"
  },
  {
    "url": "assets/js/56.d5746a5c.js",
    "revision": "4129c671247d930d9c0ea7a0f5d52616"
  },
  {
    "url": "assets/js/57.d28b4776.js",
    "revision": "58cc3d145e2bb7c8768d25beb2502049"
  },
  {
    "url": "assets/js/58.649fa9c8.js",
    "revision": "44f1fc5237011c9a4c2bd51b4d72139c"
  },
  {
    "url": "assets/js/59.02f0976e.js",
    "revision": "70278d0d58e9ebec1de18c6346faa75c"
  },
  {
    "url": "assets/js/6.0950caab.js",
    "revision": "7ac5f95d9ae03e6169216c178496ab92"
  },
  {
    "url": "assets/js/60.9c6aa62d.js",
    "revision": "e00f9f1556e2fdc64d918215deb5b43e"
  },
  {
    "url": "assets/js/61.12c537fe.js",
    "revision": "183274c3e67b9024066ee86552d79ee4"
  },
  {
    "url": "assets/js/62.0e339b9b.js",
    "revision": "59565be15d9d06a02816b0be97ed7e0b"
  },
  {
    "url": "assets/js/63.1467f236.js",
    "revision": "36e9512cc2b05895ef2e0dbcca31739d"
  },
  {
    "url": "assets/js/64.f527ffac.js",
    "revision": "013e46696578c75a0f0eca3bf72946d8"
  },
  {
    "url": "assets/js/65.4a72d684.js",
    "revision": "90c861be69825990b4090b3952aa820d"
  },
  {
    "url": "assets/js/66.739de4a6.js",
    "revision": "09ff528272b17ac4dba80f46d70cf401"
  },
  {
    "url": "assets/js/67.cb914524.js",
    "revision": "c362c16cbe0b2be38c0b02e7ed868044"
  },
  {
    "url": "assets/js/68.26d2e22f.js",
    "revision": "6bb4ec1a81d34521c072cf8e6a584813"
  },
  {
    "url": "assets/js/69.d97df5af.js",
    "revision": "d6d2a8049eef89e52d5d1ebe5ae4bec1"
  },
  {
    "url": "assets/js/7.04fb3c89.js",
    "revision": "ae0cc3284283658bcf538f97fe923664"
  },
  {
    "url": "assets/js/70.805cb36b.js",
    "revision": "6245b2775327015d1262c423be428428"
  },
  {
    "url": "assets/js/71.1e387ced.js",
    "revision": "efa6c96811d65afa0d291b292fe2157d"
  },
  {
    "url": "assets/js/72.eebec475.js",
    "revision": "14c83e6f95060137b6af66c443ced4a9"
  },
  {
    "url": "assets/js/73.c74d1475.js",
    "revision": "1fdc8092cf900c25644c35b0421959a2"
  },
  {
    "url": "assets/js/74.495a5381.js",
    "revision": "c0863d9769f014a874a4ad2711fdb959"
  },
  {
    "url": "assets/js/75.556aaedf.js",
    "revision": "50998964a4a4c103d40734b63531831e"
  },
  {
    "url": "assets/js/76.6dbf7466.js",
    "revision": "97eed3a9f1735ee4aa1ce41f05c97d78"
  },
  {
    "url": "assets/js/77.5ef49901.js",
    "revision": "f497a8730a215853d40ecbf493930808"
  },
  {
    "url": "assets/js/78.0a72284b.js",
    "revision": "420d70e5eb1943294398420aa3bcb7f0"
  },
  {
    "url": "assets/js/79.d0709960.js",
    "revision": "cd2df621b872b3d40471e3560d19d00f"
  },
  {
    "url": "assets/js/8.4c8e9ca8.js",
    "revision": "fdd7fb1776ff7617a01b08b024a1878f"
  },
  {
    "url": "assets/js/80.2302394c.js",
    "revision": "2d4b7e54222c9b41ef0f128e3a8837f4"
  },
  {
    "url": "assets/js/81.236fb197.js",
    "revision": "5b19d98336c300cfb76af5190b2b3564"
  },
  {
    "url": "assets/js/82.9c93ffb9.js",
    "revision": "4aa7963adcecc44375e59518a9fb67ec"
  },
  {
    "url": "assets/js/83.e1d1ff49.js",
    "revision": "2afab5b750a12fcd59e6e3bf20f66c83"
  },
  {
    "url": "assets/js/84.41e9f0d5.js",
    "revision": "5f7540a3a987cf4e69a9b85d9f2d1a4e"
  },
  {
    "url": "assets/js/85.1c44bac2.js",
    "revision": "6055081aae0ad17a28f8579bdf6a80b7"
  },
  {
    "url": "assets/js/86.1922c8dd.js",
    "revision": "69c4d2eecb9b819496c72a311d9ab6d0"
  },
  {
    "url": "assets/js/87.f7399242.js",
    "revision": "97cedbb61a016b9f9368970a2c4faff4"
  },
  {
    "url": "assets/js/88.ff698010.js",
    "revision": "af45567539bebb48e31413edcb92b324"
  },
  {
    "url": "assets/js/89.c71ae70e.js",
    "revision": "2ca63db7e40489a221062fbd6c6cdd3f"
  },
  {
    "url": "assets/js/90.38fe0e18.js",
    "revision": "bfbc91261a04c050a2eb88adff9aff27"
  },
  {
    "url": "assets/js/91.037116fa.js",
    "revision": "fe5e088e0c1679abc4406f5397c02f5c"
  },
  {
    "url": "assets/js/92.a5ff7b74.js",
    "revision": "3cda01bc2c64087dfa8bba3c3bc2f669"
  },
  {
    "url": "assets/js/93.9e469ea6.js",
    "revision": "0d2e82778c7283950c229657e3357bf5"
  },
  {
    "url": "assets/js/94.4be06272.js",
    "revision": "079b96907f255094c634b669e72b4609"
  },
  {
    "url": "assets/js/95.66b9a12a.js",
    "revision": "7fb716a42e44a63e382504c4dd42d888"
  },
  {
    "url": "assets/js/96.f7dac8c1.js",
    "revision": "1e7d144237500c6dc65ef57257ef3b26"
  },
  {
    "url": "assets/js/97.4bbd40e7.js",
    "revision": "fd34b73df8e04ec9a6d23030df763742"
  },
  {
    "url": "assets/js/98.871a7b16.js",
    "revision": "f4f64503546334fc3b025eb9ddb03567"
  },
  {
    "url": "assets/js/99.e19ce186.js",
    "revision": "049d37c4f5ba42ad3cdefa442739e86b"
  },
  {
    "url": "assets/js/app.9e6da145.js",
    "revision": "fe901a4205840c83438ed62be5408d31"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "508bf503f7b321d940a5b332bbf03bae"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "9b958d3648e1c64e424263c0339f03fc"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "b8f3d818c2f2147d0f36128ad95222b4"
  },
  {
    "url": "de/effects/API.html",
    "revision": "28f0c5a40fa342bc530df99326908283"
  },
  {
    "url": "de/effects/index.html",
    "revision": "9a451491cfcb4d9ee1ab37d6cefa3182"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "bfa056d665365f77a746bebf45095c3b"
  },
  {
    "url": "de/index.html",
    "revision": "43f38f648feeb741edb83b6dacd2e198"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "6014a024fb2657e3601047f994beff83"
  },
  {
    "url": "de/json/Control.html",
    "revision": "e70b14d19544a39f61f4547704a4e68f"
  },
  {
    "url": "de/json/index.html",
    "revision": "eeaad7f742633763a5a03a60f5c99875"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "9d7600a7543be0ed8af6aea19095cc8b"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "c9e28de466554ffa2cec00bf7db42ba2"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "ed798175b0a6ff33a79b81337b374430"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "2d648717f03f20677dc42eafc7f26e59"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "4c989e2b1b944cc130dbff700868de58"
  },
  {
    "url": "de/user/index.html",
    "revision": "48e6dd693fed6fa7a23b40678cee272a"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "700b2655c959633a62f7e7553779838c"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "8723861dc956a9f05caebe6603732cd1"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "d79e5da0ab31085820b47fb93749a78f"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "5c409b16dda5546081c8524c686d76a8"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "03fe935f91ccd004f8c15b3b7fd6ea00"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "cd4d51733429e89271d45ba590b37ee5"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "9b538ddb87881ea315d5412c2f343aff"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "574d0ce775aab3b16f3c41994caf9500"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "6a75e42709137963586c6be03138bd1f"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "daceb5e65fb5dfebd9769a3a95c5e401"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "f37d2f95deea2472e64f805b632ae9f5"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "873e6f273c4b6248d61bb1bd8d06767f"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "c5589e42783a8bb9f260da559ce0e893"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "6fadb98d23ff8e0ecaaf794912ceafc5"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "2c3d87f5a9009750104e6fc3912551f5"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "ad9b672fb51b99e35bd65fa51a15ed6f"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "c132dbc32695322453b04dd764f8724f"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "e3a648fb7d5fb06cf481f0e090058cdb"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "dffe9a13b1b36bad24ca0b22732cda45"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "3ff974fa5f3c2c5b12fa953a97f15e5a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "b1219db12bfbaab5d810b613d4605770"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "c9abcd10a84b494d1b3d771ec6d8315b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "4c1fc566383769a02afdc34cd6fe872a"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "c2ff4881669ea76f71793455d74f102e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "4895b7be7fd44bbd1b2a7a448d8c1002"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "b13e1651121f56042caa8af629c145fd"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "1c7f2508f2d617287a40b6624d350d69"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "3c7f163151dcc478ea3b568cd06c4fd9"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "2481d99d714f21b4a3873ba0f40a4f08"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "40034318e1d48702f466f19541801cd6"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "53f1a97ec1c870ee9afa42da12e38907"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "23b2ed900ef28f2524d0c652b850c5ad"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "acc18dd6c66e76349257b7e57f68c707"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "528bef8cb1c3f09605f6a65a1729e1d3"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "634906243c929a04ab03f4facb1ca699"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "21eeaaba06ca6fbee164e06b86c4975f"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "5e960e0f9a69ea19a23d3ac37c41876d"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "87f49281d1ff7a3c087c9fcc9a6ba094"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "e337a8f4252de2420da0f0919103da6f"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "3aa8f65848945794ad44dce2a7597046"
  },
  {
    "url": "en/addons/API.html",
    "revision": "cd3a1abdd69c40fe60a10d4fd488b6da"
  },
  {
    "url": "en/addons/index.html",
    "revision": "9589f52f9313771612f59442eb11f08f"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "27bab6517207a8aba3ec1b14101a2bdd"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "68f2ebad6f9bf44a6b09a89a4dc3b4d5"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "f90d5d248305e3cf1a4bdaa840e04b93"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "6dbd5a06230fa123ff03f15b6606f363"
  },
  {
    "url": "en/effects/API.html",
    "revision": "26231ce9853d17ffefdc188cc8b4bf73"
  },
  {
    "url": "en/effects/index.html",
    "revision": "3b895985753ac12ffac43ada194200bf"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "9d1705dbf5512e53ade76a3b460d1c56"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "a154a95fa7c616023d76b10c20a924b9"
  },
  {
    "url": "en/json/Control.html",
    "revision": "807f5f19b2c75836dcf7ca7f5b544d1e"
  },
  {
    "url": "en/json/index.html",
    "revision": "d071861d214fd49e8abfbb19d1ed9275"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "cfe22c6a6ae0f624cf2745a44cf5dabd"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "f62be11ec2dcb2e2ff03da874638f271"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "efa8cbb45342bd4f158bd6cc074a510b"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "08ad4b75cadca24ffb2ab5496e38b7ed"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "468f3c03d833cee9a7e0192d196297ae"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "4ab3f86bdc1861556d8b8bc055ad1a2f"
  },
  {
    "url": "en/user/index.html",
    "revision": "88445ce0bc0a8bd4331a7f4a121a60ff"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "9c8454ad71b426ea7374a07db3711ad5"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "9f7a2df6265af6837f7e81719073b09c"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "1c834385e1399286eca8e35527f0047e"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "ede4e5e47c6fa83b197c8449f85104c4"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "c07e4cdad5e266e54975261fb97f8a82"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "cecd044b9da42e30ca95f14518bed37f"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "d3b796bbf742d317be66fb6192bee595"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "701805259533ebb668f2f5c73b0e0b55"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "46f2db7d7355ca9943635aa132e10bb2"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "db0a1026a6df648e88e84dadc20086d4"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "816c0382e550cac15bb3c32c769cb43e"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "9ba3c993841b656cd29d8fd43581473e"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "02f9b6b7ab640ed4794fee2ace81f26f"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "c64bdf4b7f804406e1087130d63a0eb7"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "b759aa223e8bf7b73abcf6c44dff5d19"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "fe42738c0e1429e5d994024c08752a9d"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "2512636fe105cdcaaceef51f957e390f"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "ad1c5f943530a22a9e976f60b7a5c702"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "f3cafe8282551bbe87f1435fb01c14d3"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "d71fb720e3dd3a955f1cc7ef261fe70a"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "f8bb4891e1f6fff041045975da070887"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "0d4f8f23ea82181e7759202774399716"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "1196c3665e5faedd4bc5b4097c9cbcf3"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "287e4e862ea293e9317979a460e02210"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "edc62cb6ed3d3e684c09e9363ee3548b"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "fc6e8e4d6e74a6ebaec22c8da5fb8176"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "5304aee7dcc4e182a075f35edb5b8cd4"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "18b622dc50072ec56507701d1418470d"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "68b97630b0193d1a10e5d64bd3b981a7"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "52bd7d26faa3328cf3f939a876a36321"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "e5359ea21d8520af08e6698fa186652b"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "283b111a480c448e3581609aa0f88f01"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "1f343caff3a14d82cf8bd530b6ca2358"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "63eb2d8cf7a3b5d795c2d34e356bd962"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "333d95e0405a0da074af6b328ad4dfe5"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "1467d666f04064dff4d967e20de0ce03"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "ebb118a90e8cfd3436e00eb8d2a30bd9"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "22efdfdefe0dc1b63e3c9a3235136257"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "18f1831e2cc85ba9f0af225cbcd9222a"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "dee623c55202e110accc18338aefdbf0"
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
    "revision": "28323e76b65dcfa1b345c80562318c53"
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
