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
    "revision": "57ff1d710ffad027dbd047210319734d"
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
    "url": "assets/js/1.6fcdf271.js",
    "revision": "31c7a648f81323741445c1322268fb58"
  },
  {
    "url": "assets/js/10.f037b8b9.js",
    "revision": "16596090d2379dd905dd7e80a5773c8b"
  },
  {
    "url": "assets/js/100.f88e7be2.js",
    "revision": "3ff6308c66f15a0b4d9bd62ac9907d68"
  },
  {
    "url": "assets/js/101.8ee77e60.js",
    "revision": "a683e8f28d4dc1798e1018cb19f63063"
  },
  {
    "url": "assets/js/102.43640d90.js",
    "revision": "fe9bc48403fd83b3787a99b077e244f3"
  },
  {
    "url": "assets/js/103.61f34f57.js",
    "revision": "63acf86d3baf82736ed6ab3d5a315e3f"
  },
  {
    "url": "assets/js/104.08bdc21c.js",
    "revision": "0ade5af8c7440e94a29b4d99a8a3429d"
  },
  {
    "url": "assets/js/105.5c3e7526.js",
    "revision": "1b54f5239716ac17db1e19ffb335fabe"
  },
  {
    "url": "assets/js/106.f247cdd5.js",
    "revision": "ae8649567fbd4d2121ddc185e34d24f4"
  },
  {
    "url": "assets/js/107.25017d29.js",
    "revision": "8d2615fe5b8642dbd4f8504839a08471"
  },
  {
    "url": "assets/js/108.d8cb89c8.js",
    "revision": "1d44d0d61a4dc470042bc92e7591d820"
  },
  {
    "url": "assets/js/109.9ce75c11.js",
    "revision": "26b7c481f29ab8e81e628266f74ca1e7"
  },
  {
    "url": "assets/js/11.88045515.js",
    "revision": "fa034bf9fc6e3826c04fe753c34bb974"
  },
  {
    "url": "assets/js/110.176cc49e.js",
    "revision": "ae6763f48daad1bdf6fc3c1b7c51a9b0"
  },
  {
    "url": "assets/js/111.563c5d72.js",
    "revision": "79bcddf2b9858900e627edce5a750172"
  },
  {
    "url": "assets/js/112.12c4916e.js",
    "revision": "445dc3749347f7d35202387d65ab776b"
  },
  {
    "url": "assets/js/113.81d732c0.js",
    "revision": "25c55ebb43f2ad302af65af98388a0da"
  },
  {
    "url": "assets/js/114.e5742b34.js",
    "revision": "ebfe0016687d25e7e37ab088d2a6a55d"
  },
  {
    "url": "assets/js/115.9a6ceccf.js",
    "revision": "bf417f195c650dfe02501a0518d249dc"
  },
  {
    "url": "assets/js/116.315b9482.js",
    "revision": "60ccfb52393a8d7d5b2cb16d1c1bc458"
  },
  {
    "url": "assets/js/117.715e2907.js",
    "revision": "abb9b44f7b7ce8b51f97d1c6b00271fc"
  },
  {
    "url": "assets/js/118.0dc74c49.js",
    "revision": "79f9ee54f91b68f3074a0ee1789c3394"
  },
  {
    "url": "assets/js/119.9fc05fc0.js",
    "revision": "2f99fc5a4ae46345d0b503221ed5c5c4"
  },
  {
    "url": "assets/js/12.60565fa2.js",
    "revision": "6d2036a7c789328ded7d5c8a020c7998"
  },
  {
    "url": "assets/js/120.3b765c12.js",
    "revision": "cc8dcf16526034e072dc9204567a72c9"
  },
  {
    "url": "assets/js/121.542e8fe7.js",
    "revision": "2136b596e7ef5cd4ef6105f74a0e3a00"
  },
  {
    "url": "assets/js/122.9aee6f1f.js",
    "revision": "e117e8ee0dea942afdaa19ec527b4ec8"
  },
  {
    "url": "assets/js/123.867e5865.js",
    "revision": "6af54f077e1e6307e6383ed301b50e50"
  },
  {
    "url": "assets/js/124.8a12202f.js",
    "revision": "8dc81ae9192977f0077703278285ffb8"
  },
  {
    "url": "assets/js/125.e4503257.js",
    "revision": "2f5d5921cb74c6949fd5f98ad6a1ac78"
  },
  {
    "url": "assets/js/126.5d4038bc.js",
    "revision": "d3c7e2f9de409aabc518f90a0df62094"
  },
  {
    "url": "assets/js/13.ac2c7d00.js",
    "revision": "3701975a8b2b7e88f15c9505e03e5918"
  },
  {
    "url": "assets/js/14.e1331b78.js",
    "revision": "707600dc3c6e5afb981003b446f723a9"
  },
  {
    "url": "assets/js/15.295ea854.js",
    "revision": "eae0c20be95fe9367580b677392b4075"
  },
  {
    "url": "assets/js/16.70723077.js",
    "revision": "aaa185c4419e873b8bc9eb833afb10f3"
  },
  {
    "url": "assets/js/17.5f00e681.js",
    "revision": "4b55a2a60f1090969563147b0f5c342b"
  },
  {
    "url": "assets/js/18.b33fe559.js",
    "revision": "04608e56504337cc3e29ecbfc8530d33"
  },
  {
    "url": "assets/js/19.cc576c3d.js",
    "revision": "7c790611d29ace54a256f62949a980c9"
  },
  {
    "url": "assets/js/20.a08d9049.js",
    "revision": "f869aa7cb75db448c2665b525023337a"
  },
  {
    "url": "assets/js/21.16d534a5.js",
    "revision": "87de28b4f2b0fdf052e9d5bdd04ee3b4"
  },
  {
    "url": "assets/js/22.4f2be281.js",
    "revision": "e8916c81b4308a4c5b01034b6d50d9fa"
  },
  {
    "url": "assets/js/23.491e7f6b.js",
    "revision": "a4f8ea7a6458b8a2d18293e662ea9648"
  },
  {
    "url": "assets/js/24.2017bc0d.js",
    "revision": "6cf8f5cbd0728703f3eccf5083bdb2a4"
  },
  {
    "url": "assets/js/25.d52f1c03.js",
    "revision": "8f47e224691a73716b53acd8ad34fedf"
  },
  {
    "url": "assets/js/26.781b65c3.js",
    "revision": "d26bba768e36fdb05dc29df67a57854b"
  },
  {
    "url": "assets/js/27.1b6a4895.js",
    "revision": "d9318a6a686c09170cd871dee4b5d50d"
  },
  {
    "url": "assets/js/28.badd0f81.js",
    "revision": "4fea5697d5f60f019ede352d89397a06"
  },
  {
    "url": "assets/js/29.b613ba4b.js",
    "revision": "06eb2f05a1782dc6f0598c9567aabfdd"
  },
  {
    "url": "assets/js/3.a5278702.js",
    "revision": "210878e6cc935e2277f070224a78abaa"
  },
  {
    "url": "assets/js/30.87bfb5f7.js",
    "revision": "c19d0925d2af9e3d4c10fe313aaa12d7"
  },
  {
    "url": "assets/js/31.54d0effd.js",
    "revision": "170b4681cbb8d0f26a177a76ab638030"
  },
  {
    "url": "assets/js/32.8808b4e1.js",
    "revision": "b746e1e364733849cb97c3a77cc9f0bf"
  },
  {
    "url": "assets/js/33.faf9c1e8.js",
    "revision": "267cf4db297b89b0299305e352988f94"
  },
  {
    "url": "assets/js/34.9fc73523.js",
    "revision": "56b26f47f8414b09bd2a1e276141e031"
  },
  {
    "url": "assets/js/35.81e2079e.js",
    "revision": "32d5af720327c0263979027e4044071e"
  },
  {
    "url": "assets/js/36.6938a8fe.js",
    "revision": "fccdbc1f642291582b5cddcde7b4430c"
  },
  {
    "url": "assets/js/37.5474ffed.js",
    "revision": "abbd6814f7893e0c30ce025dde634706"
  },
  {
    "url": "assets/js/38.a4fb078a.js",
    "revision": "6c1c58ee2e02740d75be6059a475216d"
  },
  {
    "url": "assets/js/39.6a8415e3.js",
    "revision": "49d698af005b89ad1b00cc653a46eac1"
  },
  {
    "url": "assets/js/4.f819faba.js",
    "revision": "8e2267225e7fb24ccecebd22e5ba5145"
  },
  {
    "url": "assets/js/40.2ab894df.js",
    "revision": "5f1e0846b95d18e639df9a6f9dc79710"
  },
  {
    "url": "assets/js/41.58ed9ebb.js",
    "revision": "a1732b0267077a5781065e13bed67a68"
  },
  {
    "url": "assets/js/42.da22bbfc.js",
    "revision": "6d6cb6721bd01769fa48487d2a607efa"
  },
  {
    "url": "assets/js/43.035e22ce.js",
    "revision": "4c13af29564ffe3c69d31b31edd85667"
  },
  {
    "url": "assets/js/44.32a63630.js",
    "revision": "e7308effc1916ac180961390af27222a"
  },
  {
    "url": "assets/js/45.fd9e3084.js",
    "revision": "df95c7c013310b918c848ecc560c5c07"
  },
  {
    "url": "assets/js/46.5cbdbc16.js",
    "revision": "63c39ee846407a93f2f89f3b58ecfd14"
  },
  {
    "url": "assets/js/47.5d3fdff3.js",
    "revision": "dafdf5a3fd5e2b4917fbe4be86cdf2f8"
  },
  {
    "url": "assets/js/48.b2c28ee9.js",
    "revision": "67991ab3245145f40f8fa061ce1ed399"
  },
  {
    "url": "assets/js/49.4e7a8b9c.js",
    "revision": "63a6571552e0fb74c80f342f45e30da5"
  },
  {
    "url": "assets/js/5.fbd548ab.js",
    "revision": "f3e4f4a440f7bf3d33436a29f78187ae"
  },
  {
    "url": "assets/js/50.ec2c2bcc.js",
    "revision": "4109f8703596ed08c509b438e478172e"
  },
  {
    "url": "assets/js/51.eafc896c.js",
    "revision": "92ae126fa6bae0c82c905d57a127a9b8"
  },
  {
    "url": "assets/js/52.0221493c.js",
    "revision": "53e170af12c20a47053d7a887f0444e3"
  },
  {
    "url": "assets/js/53.0b65a9fe.js",
    "revision": "4bb6166ad85ed58e7c4ba980efcfbd27"
  },
  {
    "url": "assets/js/54.59032464.js",
    "revision": "ef3ac49fb3cbdfd80bff6c9a156864f2"
  },
  {
    "url": "assets/js/55.1a9881a4.js",
    "revision": "74f5e07bc50773d2582448dcff713d51"
  },
  {
    "url": "assets/js/56.246fa6a3.js",
    "revision": "b16393f7e462e853061d85c277d86ffb"
  },
  {
    "url": "assets/js/57.0e10ada6.js",
    "revision": "a5132dc9772c60f518a0997222722a3c"
  },
  {
    "url": "assets/js/58.6c0a0620.js",
    "revision": "e2a07898e1704963bb2c96b2e06bc66d"
  },
  {
    "url": "assets/js/59.e55e4315.js",
    "revision": "0a6ff2fbbbb63205a87a0ba4048fee7e"
  },
  {
    "url": "assets/js/6.13adfc28.js",
    "revision": "6c48576b0e59f66d64d763eb750a41a2"
  },
  {
    "url": "assets/js/60.05cf95e1.js",
    "revision": "ae10aab7ddc08f80d67667d5cc2a8a30"
  },
  {
    "url": "assets/js/61.a826e8dd.js",
    "revision": "cba0bc2cbf2705226bb5b197c65b0279"
  },
  {
    "url": "assets/js/62.85a61ad7.js",
    "revision": "7753029fedd3fd7173ad51845c06c2e3"
  },
  {
    "url": "assets/js/63.a0036674.js",
    "revision": "73db41084ed00644e4ca33e37d4bdc55"
  },
  {
    "url": "assets/js/64.62c97059.js",
    "revision": "1303a69ccddc6672337ebb512e73c884"
  },
  {
    "url": "assets/js/65.93c66295.js",
    "revision": "41b82b8d3c1a3f55849bc53ab83d3803"
  },
  {
    "url": "assets/js/66.4c07cc7c.js",
    "revision": "e17a8af2050cffe7f1a77406ca81773e"
  },
  {
    "url": "assets/js/67.2e98d7c0.js",
    "revision": "01b108ed442700714e807221be247f80"
  },
  {
    "url": "assets/js/68.f9ee91c8.js",
    "revision": "da4a26122c4d666ef02c5ec13622aa98"
  },
  {
    "url": "assets/js/69.34992710.js",
    "revision": "520eddc3e9d2bd2631dd18cbae7afe8a"
  },
  {
    "url": "assets/js/7.08390ed8.js",
    "revision": "66d55b6bbda2cc7726f894f0c8b9681f"
  },
  {
    "url": "assets/js/70.d27f017b.js",
    "revision": "bf33babcaf295625b6acd51356b7b75d"
  },
  {
    "url": "assets/js/71.56fbed1e.js",
    "revision": "c1371e980569e0ccc0d1567929dcc23a"
  },
  {
    "url": "assets/js/72.89687a8d.js",
    "revision": "2d761c0e8001e9f4b46f46ec367b93c6"
  },
  {
    "url": "assets/js/73.6d8734f6.js",
    "revision": "8a37673b98008ec5ab67c813cbb1d16a"
  },
  {
    "url": "assets/js/74.1dbab24e.js",
    "revision": "4a3240f288642da9017ad37ab15141cc"
  },
  {
    "url": "assets/js/75.a14e6fca.js",
    "revision": "24eedd5ce388e868a1b89b2c232b8d27"
  },
  {
    "url": "assets/js/76.d2c9151a.js",
    "revision": "0fc03bb98731e41ddd4ebe278bd0f878"
  },
  {
    "url": "assets/js/77.ebf221d9.js",
    "revision": "bca0da0d5e5953b2e4489fd7e5f96188"
  },
  {
    "url": "assets/js/78.933243d9.js",
    "revision": "ae0a7310cf6808931166bcea0d85e7fb"
  },
  {
    "url": "assets/js/79.195771e6.js",
    "revision": "9acbd9317de95269ab2ee7091b949680"
  },
  {
    "url": "assets/js/8.07d4de81.js",
    "revision": "4e2d7c85676f7ff4f69a488dc08ab70c"
  },
  {
    "url": "assets/js/80.d1dfec88.js",
    "revision": "90c1bf15a25bf33a3bf5271605db80f3"
  },
  {
    "url": "assets/js/81.896bc673.js",
    "revision": "4db9182aa0d59995b972f093ee1ca35b"
  },
  {
    "url": "assets/js/82.af15dc34.js",
    "revision": "a8244386bf400de9cd56c29e44ec8470"
  },
  {
    "url": "assets/js/83.8c71f652.js",
    "revision": "d06227c3ba67e524d3af12c7a4e61dab"
  },
  {
    "url": "assets/js/84.dd9cbf72.js",
    "revision": "d8ba2675edf6584877ae7b9c432783b1"
  },
  {
    "url": "assets/js/85.fd0720fe.js",
    "revision": "57fd1a2922ddee0b1f3052e1b001eb01"
  },
  {
    "url": "assets/js/86.136f9217.js",
    "revision": "d82063e0d37a45b3a45cd7127dee48f6"
  },
  {
    "url": "assets/js/87.2ee0e75d.js",
    "revision": "0b17cafe8744796fd6bbb3fe6534d42e"
  },
  {
    "url": "assets/js/88.ef4d3b4b.js",
    "revision": "972b7fe99f8dffd0b3a6eb947faec67c"
  },
  {
    "url": "assets/js/89.6a08d9b1.js",
    "revision": "ab6acd5e4e9bf820cb7d30b719371629"
  },
  {
    "url": "assets/js/9.b27d826b.js",
    "revision": "55ef6f6eefb5692cf6846d1fbafaf074"
  },
  {
    "url": "assets/js/90.51f1f5ef.js",
    "revision": "433af0c59336faaf03b91dcda2896a8d"
  },
  {
    "url": "assets/js/91.01ff15d2.js",
    "revision": "4d6ae25edd6007b102a45cb9a8ddfabb"
  },
  {
    "url": "assets/js/92.f97105b5.js",
    "revision": "e174bde05aa23e4fca928cc7c7766438"
  },
  {
    "url": "assets/js/93.d230ea21.js",
    "revision": "73634b91fcd5f3626f955699fd0e5849"
  },
  {
    "url": "assets/js/94.0abc2331.js",
    "revision": "390886c7e1ce32dd3a19cda088106408"
  },
  {
    "url": "assets/js/95.ab8b37d2.js",
    "revision": "e5c71bed6ef8cdf3bacb1ade4092d68c"
  },
  {
    "url": "assets/js/96.0e2d01bd.js",
    "revision": "e09e9dd060d2381285ad5ceb49630ba6"
  },
  {
    "url": "assets/js/97.f5dfa474.js",
    "revision": "d6b63ab839badac18d86a6ae0f02ff68"
  },
  {
    "url": "assets/js/98.302a715e.js",
    "revision": "f9b82be71900b19f95c4b664aafd9ffa"
  },
  {
    "url": "assets/js/99.af7bd15b.js",
    "revision": "948f09fb98834b1371a24e7a867a2df5"
  },
  {
    "url": "assets/js/app.56928af4.js",
    "revision": "a200148fb38c04f50df31f6f98c62aca"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "96a00577ae2251974cf309cc55ec1aaa"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "4e1fa2a369723405148fdd504a250fab"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "65be0de3841aa0d713f7b9c2b133e120"
  },
  {
    "url": "de/effects/API.html",
    "revision": "be1e3d5cd5b34b0e6a74d7f404a69fb3"
  },
  {
    "url": "de/effects/index.html",
    "revision": "a445f86a6fcf1a633778c719e07effa0"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "d5b2adea2359931baa2a4a97eaade51d"
  },
  {
    "url": "de/index.html",
    "revision": "9db7f3fed9918806330f4dcf8c46ec14"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "9c45888f8928de9cb86c40ab8ecd25ff"
  },
  {
    "url": "de/json/Control.html",
    "revision": "491542e2a280b66bc484950025eae71d"
  },
  {
    "url": "de/json/index.html",
    "revision": "3699f5c6398e7e06ef266ff4abdf27fc"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "d0ab3844a06a17fae1b930d36500346e"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "0523469edf19305f43b756e359f5b82d"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "7dd992fb2f19a01c95f475191dc21f3b"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "e2d39a6de6e52b362378e8ad19ca897d"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "a9f04de1c6c20fd0d2e231cc37c17f97"
  },
  {
    "url": "de/user/index.html",
    "revision": "ffa675c806d1105bdff2a8f477453ef0"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "6a774979822ffef9c1558fcfd8d66e76"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "f744784406118a87f2df77aae2bd1635"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "16d11823f2cd228d832dee795790ab18"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "08ebc6d83e6be8e126cde914f4e38e14"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "7f66df089dfe5f00ad256c86a6d8efb2"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "c1b7b6ee4103bec2944935950c2129ac"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "a743d253fa2f5fd744369e5fce016aba"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "e80726677759b6eff12843cf1717c318"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "54ccc0aa3c32fb2c23eb2dc737679803"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "c5b48d4aa57612c7c10ee893c35e6299"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "6d6c4bf2c921c9f6fd5ae860e5d32ef7"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "fe52e218e8def13bc4c88c5912e13426"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "0128bdfb7bdddc3c9469095dc4b0385d"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "fccc5b81d06bb9c581224362ff089308"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "bd1613b8414c0c57d1050c8e73fe5f98"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "d480dc03ef5684c7ce584f721c051809"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "7820156633b87159b6199b7caafe54e2"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "ac3e3b9fea6e4c713e311ba40b40f5e7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "ba46e6435eed5316010db8096e59ea5d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "d513e5347453a3f1d10f355b98e80850"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "f176e9bf8a1f406c1d3188f460cb79da"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "14eeb295fcdecd2e17a8bf257959a6a1"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "9e82a65b24bbd1184557e62205b2a36d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "6ebbb6b51383e46dd0f53a2e8aef6592"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "91cdaacbdb8d3c3a9bb89bc356d89a5d"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "ebcc008d33b58544a25d3f9b91b677fe"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "6f88f8a8978f8954312fe700cb6d1a0e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "16e1c2833cf4e9a35c715abd5f0af408"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "147d65f0b2606c33def0002338b7ab7d"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "68a9f68cbe5979af63e7e02b6d996245"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "011fad7adf802f82832bf109a95636f8"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "543049c6ff1a9a8c406130bbee6fdeed"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "938e5cc40d96c981110f67afdc959db2"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "7fc5105e96ac7b1dcd4431b7c5b45f36"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "a67dfafee25729496c9ac07c18c43d69"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "e3cd072895dcdaba591b5435b6572d42"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "c23b34cfa85be8aa54050f3e72c96384"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "78fb1af9581f8b0d9798be1de8ece1a5"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "8744635e7ce8c7c8b2c4bf1530ce21f8"
  },
  {
    "url": "en/addons/API.html",
    "revision": "1545eeccf62d0c439e38aa78e06eda7a"
  },
  {
    "url": "en/addons/index.html",
    "revision": "2c4abdb2228bbcb336240fdef75df73b"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "5bd987113b6f097d0c77af5143cb7df9"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "a4eb68bc891ceb8690e82cc7c544fb85"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "e7e6538fed02f8a89897efe0f96e04b6"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "5dbbeb79229d5ea2e82b81ee5ffeadad"
  },
  {
    "url": "en/effects/API.html",
    "revision": "c6b0269de693beb5f10a39d0e5ec6b12"
  },
  {
    "url": "en/effects/index.html",
    "revision": "9a934f6aeaf84570f373ea667aab20b8"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "fcdf0e3959f17c7be527221caad70fb1"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "60320b9c08dbc543dcafb2123497a28c"
  },
  {
    "url": "en/json/Control.html",
    "revision": "b9020029bcec9c67f5798c8c58859ca7"
  },
  {
    "url": "en/json/index.html",
    "revision": "9c42889b54901bb2cf66ded458bc6e80"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "980a16892bd6fc3d2d7663ab14f0c1dd"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "ebe0ab734ecea65b83a1bbb6bc3b5d11"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "7eafd2affd03f251e5dccb74826af866"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "fd48ce79d50f099032cf5bcc0b95d004"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "6216711b67e106d0f8fc86fdeaf49145"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "674f6a4c992bfb9534f3695a61ae30a3"
  },
  {
    "url": "en/user/index.html",
    "revision": "2269c4c8b3c3c6ae5821d65e6c73afad"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "9976110bd65c3b7eca4ee2bf46c4e719"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "377e9ed6af7de11e71da2d49e501f748"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "4704ea57dc812324d372ee7f742ad6e9"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "41e668fd8cf35d309571a06dd6271231"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "1f4ba5cfcc072bec4423c9351eee6bd1"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "456d958f60af6b06962b7e1ff2d84632"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "29d97e84504ce322583a154f0273f6f3"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "54746e2fd6e1cdc4c3b7e2f1993e17ba"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "0e164b584c1292579840dfb844c41ff5"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "a9da0456cb21af5730149b588e8e42ea"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "b8d799a7bec08f7a1de561f1fd927bb8"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "f79d820c1db6fcea5daba1ef560cf28d"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "506a4ed8ea94a3d8f5549dfd900aa991"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "3cf20d2a7e531bc2bb70b8ff38ff0344"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "116085b69ff71352503dea451a2c840f"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "b8763132ab390b8a0e9c08c0b8ad403e"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "53b47e171f919a6ceac759b872ffbadc"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "5a6a48c066df2d818e2641e57dabe38e"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "0cf55bfcaefa9c8e57917556df324329"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "0190d85d702616e2fe89e5a41ec9e132"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "1d0eb6ffae54bbbf31c0c4da271313b0"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "02618a29a03f254b32e0e9461fa29daf"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "5468d8f4d35620da4321fca8c6f333b8"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "bb40ee05b1e79e0d9b08ab7637c66c20"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "3d2b50bba460a4db253e08e06717ea66"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "e49b960479531a7dc097b7b3bb79ce39"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "6c8100853de1bdf2a10e21f9e367be12"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "4e976b30e2005cbca477fb294db1427b"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "d6c551f117c228c34d0bd70bf8c4930b"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "7cadc6b112de85b56db66e49250c67ba"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "f95452f50001168a548bdec453960cf6"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "0c84186761db6d6b0d6ca450d88475bc"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "e297a81de16f81db8999c947b047fee7"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "38fe557f9de4108e1d4305953a7bb830"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "657c2ffd7d4fa6b7c8a84604f2929dec"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "d864d8a3c4a5e4d462fcffec41fca449"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "49a98acc2348f05b6898aa2c4d43ef9d"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "96fe623ef9761f741f4ccf6966a6f219"
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
    "revision": "cce2e49fd2311daa0ec533d5065ae405"
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
