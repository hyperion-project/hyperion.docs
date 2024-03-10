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
    "revision": "a0a589c2e65a51d563a84208c0718d5e"
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
    "url": "assets/js/100.983d8f49.js",
    "revision": "470bcf6ebacc4f4ab759ae3a83d068f2"
  },
  {
    "url": "assets/js/101.917c4640.js",
    "revision": "c7a38b5bc9a26377fb48e823a789cc8f"
  },
  {
    "url": "assets/js/102.965171db.js",
    "revision": "09f0892285170de608e113676cbde0bd"
  },
  {
    "url": "assets/js/103.3140e5df.js",
    "revision": "ad2b663bd2e28313299c48a613514865"
  },
  {
    "url": "assets/js/104.cfb4f647.js",
    "revision": "0a788dacaa7d83b5e0936d6b2c7e6272"
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
    "url": "assets/js/107.cfd93cbb.js",
    "revision": "f62b4f83e6152487827d48fea60cd063"
  },
  {
    "url": "assets/js/108.e1952c3a.js",
    "revision": "0d060a470a56f2ac746b3603b7085134"
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
    "url": "assets/js/113.5c9e096d.js",
    "revision": "a89fc4ae44da1050b6fbb66445f287dd"
  },
  {
    "url": "assets/js/114.e6fe248b.js",
    "revision": "bb96f85b2d9ea361fea9f389ea68b74d"
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
    "url": "assets/js/117.972f3b17.js",
    "revision": "0545dbe0111667c1fba6763ee46ad6d7"
  },
  {
    "url": "assets/js/118.78dda816.js",
    "revision": "8ad8c7086febc7cd0adc1199b1377ce6"
  },
  {
    "url": "assets/js/119.d81699b4.js",
    "revision": "62a85a1d4cc642a3eeb19b4c45d8843a"
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
    "url": "assets/js/121.423996f3.js",
    "revision": "1a6cb40478702f40bb0b67656edd1e43"
  },
  {
    "url": "assets/js/122.0d655c4c.js",
    "revision": "a052667f4a25ca418841650675bd705d"
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
    "url": "assets/js/126.47b45e86.js",
    "revision": "6f799b1a956abd008cf413a59eaa42f7"
  },
  {
    "url": "assets/js/127.d1018768.js",
    "revision": "c90cf27df6f0d79be7c1b0dcb8a2c21f"
  },
  {
    "url": "assets/js/128.4d21a3ec.js",
    "revision": "0fff9c2a87618d1a1d39952799853a8d"
  },
  {
    "url": "assets/js/129.ae63a8e3.js",
    "revision": "3f8af4a70729a07e4158956c859f6f61"
  },
  {
    "url": "assets/js/13.2259ff62.js",
    "revision": "4aad864c6585c5a46e80a809b4e2718c"
  },
  {
    "url": "assets/js/130.bd636956.js",
    "revision": "08df4a14571e1706c043615485c879d8"
  },
  {
    "url": "assets/js/131.0b24fb2d.js",
    "revision": "5b276f2648d8f6f7ed1c89762f75a822"
  },
  {
    "url": "assets/js/132.df26b431.js",
    "revision": "37ffd65e520b67b1cba5d856a897429a"
  },
  {
    "url": "assets/js/133.6056a7e9.js",
    "revision": "c8c7d073e5b4f51327fc093dcf51cab1"
  },
  {
    "url": "assets/js/134.bd4e34f1.js",
    "revision": "d5c6589d49847283fda6452e484597ae"
  },
  {
    "url": "assets/js/135.62975472.js",
    "revision": "12ce3af01d1bade6f6ff1c2dbcc2e17e"
  },
  {
    "url": "assets/js/136.90200533.js",
    "revision": "67f9f0a7e1e72ef4b85fcf7d0665d4eb"
  },
  {
    "url": "assets/js/137.52ea411e.js",
    "revision": "046b143fa9033d2dc89be5f915257e6a"
  },
  {
    "url": "assets/js/138.1df31f9d.js",
    "revision": "54f19a776d901f757cc1c11b04ec5a2f"
  },
  {
    "url": "assets/js/139.ec8b408b.js",
    "revision": "7fb0c345dacaaa52115a27bbcf4d90bd"
  },
  {
    "url": "assets/js/14.b4f779f1.js",
    "revision": "864ffac0141aede7fe81cdf7b01dcd63"
  },
  {
    "url": "assets/js/140.15df38ac.js",
    "revision": "3dd6edf06846ff397934d9b7aedd5cc8"
  },
  {
    "url": "assets/js/141.77c00f24.js",
    "revision": "a2738705686c6fa26f0c25fce596f85f"
  },
  {
    "url": "assets/js/142.c80cc94b.js",
    "revision": "dcf8c3f72be8b35aed0070b8adf6b526"
  },
  {
    "url": "assets/js/143.a9b5ceb5.js",
    "revision": "fbfe253feba2ad022bf37afa7f9149e8"
  },
  {
    "url": "assets/js/144.d912fc67.js",
    "revision": "b04e922c65993dc8768caa336ba19b80"
  },
  {
    "url": "assets/js/145.6288b793.js",
    "revision": "981b6c82a76917bebf8371a7e1025797"
  },
  {
    "url": "assets/js/146.4b2a62dd.js",
    "revision": "4ced5304014e9541149363b5cda1bd3d"
  },
  {
    "url": "assets/js/147.621e9232.js",
    "revision": "713ff403c0a232b013683a63d6333741"
  },
  {
    "url": "assets/js/148.90c1d38c.js",
    "revision": "b63b5a87871e12488d1b158d195189fa"
  },
  {
    "url": "assets/js/149.8e2c2393.js",
    "revision": "ab633f25e1ab8cdab4f01f73a3e23039"
  },
  {
    "url": "assets/js/15.78b0158a.js",
    "revision": "0e209a38a007fa0e21a66d23dacb9627"
  },
  {
    "url": "assets/js/150.4887ed75.js",
    "revision": "63e175d55e7ef6be203d7ee864dd3e09"
  },
  {
    "url": "assets/js/151.bb1a8a3f.js",
    "revision": "586415308742059ce8f74f022be5817e"
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
    "url": "assets/js/33.972f4958.js",
    "revision": "d27a194124767a5fad35fa507602cac5"
  },
  {
    "url": "assets/js/34.9c516721.js",
    "revision": "84cd8d657b6db4df3226543f9037ce89"
  },
  {
    "url": "assets/js/35.f9415ec0.js",
    "revision": "2b72463e083d275bde3b453a5deba9c0"
  },
  {
    "url": "assets/js/36.0b1d7308.js",
    "revision": "b077445bf456bfd3a424e74510b28d56"
  },
  {
    "url": "assets/js/37.4ae8e8f0.js",
    "revision": "34d11ad61f254e57a54e8280e11efd6f"
  },
  {
    "url": "assets/js/38.965fd0cc.js",
    "revision": "e5d953bd971027ee2dfde3bc6120664d"
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
    "url": "assets/js/46.0558a3b8.js",
    "revision": "1505f67eb08e812342e1c72926f73125"
  },
  {
    "url": "assets/js/47.f15e549b.js",
    "revision": "ff38771b99089f926f3211fcc3f08cad"
  },
  {
    "url": "assets/js/48.c872b22b.js",
    "revision": "ab6b776898cbfb9889eaeccfbeab506f"
  },
  {
    "url": "assets/js/49.3270d92c.js",
    "revision": "3e4f9f14878a8dfb65167be0356d8b6b"
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
    "url": "assets/js/51.02733a98.js",
    "revision": "521be22f7ad0672d7cca2d02d4e3afdb"
  },
  {
    "url": "assets/js/52.386a073c.js",
    "revision": "4625f756353c7943b1bf238cfaac55dd"
  },
  {
    "url": "assets/js/53.e9159218.js",
    "revision": "d74550eb41dd5c7ff9a5ea4c539aee82"
  },
  {
    "url": "assets/js/54.3d0cac9f.js",
    "revision": "c29602cf93ef81004e48ef1f2ca301ca"
  },
  {
    "url": "assets/js/55.4ad5c2a4.js",
    "revision": "bb33180860c0a72023f39bb44c33b4ed"
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
    "url": "assets/js/63.26a7ae4c.js",
    "revision": "9ae807abf2d95721af05dd7435f2fe99"
  },
  {
    "url": "assets/js/64.9830f076.js",
    "revision": "d1e76b32e4fd1025f6c0290d500733b8"
  },
  {
    "url": "assets/js/65.9dcdba68.js",
    "revision": "604f837df2d4228e97eed83022a5d35b"
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
    "url": "assets/js/72.2c76092c.js",
    "revision": "a86dc3c1d7c37f96f3c4ef97a850606e"
  },
  {
    "url": "assets/js/73.dd7977bc.js",
    "revision": "e42a6ffab23662df9ba5f4fab7da6d5a"
  },
  {
    "url": "assets/js/74.accb3442.js",
    "revision": "b88ef90b11fa06c95aa39514f6c5b558"
  },
  {
    "url": "assets/js/75.a8205c9c.js",
    "revision": "7504af051319f5a410be6d651713bf68"
  },
  {
    "url": "assets/js/76.beb1ca7f.js",
    "revision": "b834b1604a0d4bff28fe16173057c5e4"
  },
  {
    "url": "assets/js/77.c010ed54.js",
    "revision": "a8c7cb3ea4475f06675219ffffe7dcfb"
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
    "url": "assets/js/81.77e8fc7b.js",
    "revision": "ca3fdbb58aae772ca96fff3934fbc481"
  },
  {
    "url": "assets/js/82.3697c764.js",
    "revision": "b8bf0c0fbf495ff9f1b6502ec010dc6a"
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
    "url": "assets/js/88.67a13ad5.js",
    "revision": "498a350bed1e4940d3cdb928cf40245b"
  },
  {
    "url": "assets/js/89.c815c848.js",
    "revision": "b970c94e1633d2da80499ee6b97677a6"
  },
  {
    "url": "assets/js/90.2b4aad28.js",
    "revision": "d2ab0571fc744d273a27ce203379360b"
  },
  {
    "url": "assets/js/91.cb94b16d.js",
    "revision": "8b1a0ad3f511655a69f3fd6c9d429c2f"
  },
  {
    "url": "assets/js/92.5f0e20ea.js",
    "revision": "1e21fd728df1a2386c3b2d34122962c2"
  },
  {
    "url": "assets/js/93.4ec384a5.js",
    "revision": "e09bcf03ca49e347ab03b0c6ddab426b"
  },
  {
    "url": "assets/js/94.6252ca25.js",
    "revision": "906241861fc7e92d71476c13f395aa0d"
  },
  {
    "url": "assets/js/95.c7cb1509.js",
    "revision": "2c713b3f49ab91bcf26b990300e60608"
  },
  {
    "url": "assets/js/96.4b48bffa.js",
    "revision": "6da4d62f146730b5167234dd5efbd69f"
  },
  {
    "url": "assets/js/97.05b912d4.js",
    "revision": "b3bbb7fdf976a6da393ba0596b145afd"
  },
  {
    "url": "assets/js/98.7c5ff381.js",
    "revision": "f51f576d11f657510cf4cae852f49c9b"
  },
  {
    "url": "assets/js/99.8dca9ffb.js",
    "revision": "646934467bd32ea05ac14fdfd6eec167"
  },
  {
    "url": "assets/js/app.e8d0c9da.js",
    "revision": "c54f3c9e71506c6856b825954426dbc0"
  },
  {
    "url": "assets/js/vendors~docsearch.d4d0a48a.js",
    "revision": "4cc0bd32b1bb6eaa9c9f3420bd6aba55"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "96a3a50d5b468fd89c4d8663d43d8895"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "2257bb926e5f25844924cc9e5a2d91a8"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "3125c8f641e633743b5c28fec8fdf54e"
  },
  {
    "url": "de/effects/API.html",
    "revision": "7a45e1a5092a3e41ca7af042cfb48a9d"
  },
  {
    "url": "de/effects/index.html",
    "revision": "5f0b987a2d0b126f30a853d471514a69"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "ea4d798852ad06413e2724ec36e1482c"
  },
  {
    "url": "de/index.html",
    "revision": "982853d81d3e89d3d1fe9ef37122c573"
  },
  {
    "url": "de/json/Authentication.html",
    "revision": "b2f9c46c7b0d824c4c06d02f7e52c2ca"
  },
  {
    "url": "de/json/Control.html",
    "revision": "964fd4f47a073cb8c60771e39d3ff2d6"
  },
  {
    "url": "de/json/index.html",
    "revision": "8a91f4c05ba9a544c2c73cddac86cb35"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "f9077d9a01fedaae0583ff24254604a9"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "d6774251e7276f2b8df552be0b738fb3"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "021bc83735a2ee198dc2b6fbd05a464d"
  },
  {
    "url": "de/user/advanced/CLI.html",
    "revision": "b280af82d06f0b861b32335eb654aa50"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "c41a161bcd87c2ff752d8c614a08b0a0"
  },
  {
    "url": "de/user/advanced/Testing.html",
    "revision": "f65a4a70a57f4664559b4c841290b778"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "ea4b962fb62a4aea50e3433367c0ad79"
  },
  {
    "url": "de/user/index.html",
    "revision": "c4eabc95a237ae9a645e936936a67894"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "826727c4133a0d6cef0ac27ed89ba9bd"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "67422f41a32cd0283ac91b2f027fe7a9"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "0b97f0262894ba50b8c4dd551c0e372b"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "43f6f797979e19eafd675151b6a61c6d"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "999ae9fedc036876d55ff82198f6db15"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "6f04559296c4d5273401c5781ea8fe7a"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "29a559697169bc5149bbb609f4a96784"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "2893c2ebf2bcca8f58efd88f7d06e00f"
  },
  {
    "url": "de/user/leddevices/network/razer.html",
    "revision": "560c4fcccd165445d27f2ab26320e74c"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "3cd5884e956fdf36c9e2edb8d2ccec35"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "a3ff302e1d9dde5597f969ed18c4823c"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "39efbab5180693b253e3662c8461f9b3"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "4e20faa4692cc63373b1a0bfd0aa5ee0"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "8c59e80a081c010b4d0c04b34ad7e899"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "ff01115cb3dd9f382066bc6bc950a840"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "1c1d34bff835828374966f81d2d27f64"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "c13b3e64d3bdc7fa8b58bbb7e60f9bb0"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "a6ca1425dbaa7679e5d84ec97075360c"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "3ea2b9e66416aa2cf2a73df1708f4794"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "e64e1ea96956e306eacfceb1733f7047"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "ebc441a8311e417e6712c6a35bb324af"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "928a141a2d6322b7dec185e94a48a6f5"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "18c2906ac7c6d306adf86eab1d5e854b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "05a012ea26ff56784c401c918c03ae41"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "68bd4810692ccbf4e7b8a8c440696e77"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "17c5781dcaa4c2f826a4b433ff521315"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "148746f76143717d9d4a01fce07bf16b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "81e2ebe6f4758566d6c7666e68a9c30b"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "dfcf3ffd86e8f03e77044871987beff7"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "65ba3b4402907ce167d8b68434ef354f"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "07ea398f5f6b93a362ba113859217d0d"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "ea0cc1700757adfd49cf0e773acfe042"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "89c9018b66dae6d74f0f635f7da79834"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "cb68b3d5041abd53dfb341f9be96431d"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "50cfbcfed19a94750f052367c829a3d4"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "d55e2201cf35cd0665ea13ff392d1e52"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "931d743401cb7dcd75b031307454dba9"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "34c986b23f1a88f3ad247562a4ba6097"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "0d5906b425eedea933be7f9956f4ee3b"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "e391932f9c49be474cc95869afbfd8ab"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "9e8cb212c852df6535b8ef924a74a49d"
  },
  {
    "url": "en/addons/API.html",
    "revision": "142fb64845fc87aea0735f3d2ff96e9a"
  },
  {
    "url": "en/addons/index.html",
    "revision": "d18f1ca2ff48ec452d53927af778739e"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "2673d9a7b0c2aafc6c61f030265fa80c"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "600eaa6d59c8f765444b60cf4270eba6"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "966d5d22c2528434ac536727b74648a2"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "93ffb738e4547896b7b78a00976cbe26"
  },
  {
    "url": "en/effects/API.html",
    "revision": "fcedcdda143205a5181e319393788a39"
  },
  {
    "url": "en/effects/index.html",
    "revision": "f1e3468f3efd1d16a438ffc11a94a108"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "9e085eeae6eccfff5583153698d52bad"
  },
  {
    "url": "en/json/Authentication.html",
    "revision": "9858f8ccce50c69ce9c96f689a2e9efa"
  },
  {
    "url": "en/json/Control.html",
    "revision": "3736d3cc4258ecfb1377ddc171a45fb9"
  },
  {
    "url": "en/json/index.html",
    "revision": "92c5e944004a11a7d8a97d7a0bce6248"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "8c5e43ccd5ad136b983d81248fcb8c76"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "965a131f5294ce25e526327306f72783"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "38e107173c498844657cb0bc80f3fbf1"
  },
  {
    "url": "en/user/advanced/CLI.html",
    "revision": "c1473e8ec00775c345d845d0d2c8afc7"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "10633a5ccf41aa3639fe18db2191ee2a"
  },
  {
    "url": "en/user/advanced/Testing.html",
    "revision": "a3a661bfa7f5e20f74724d41c997ec35"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "94443ac6d2bef955191ecac9cfb7e9c3"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "20f9f7bd6da945b035fb18be512c9dae"
  },
  {
    "url": "en/user/index.html",
    "revision": "24342eb31aeda5bb80873a0ad8951084"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "7889409209ddbeb55a34edee73710b47"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "3bcf630f45883c585c53482029f16760"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "000f7ef3f60db934413abb8e03e6dabf"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "6fffdbffd63624e7b8e831ea3df5e373"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "1424f3541b1a7bb818489e9b241093de"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "c48c21c95218143c71f31fc52e0efba1"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "1019dfcd2f9ca553d8d09bd2921ef54f"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "adca3dc08c1da1ff55046cc362e837c1"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "91d3dbb4b7010c2ab2bdf1c1bd5ec267"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "8acb61774941cf7656f19db8c6ca00c7"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "c69b981cb0c33ba1606623a8d8d37d24"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "13a91eca917794fc2f6304e2b76b38a5"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "83ced407e8b7c192039e69be767cefc5"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "5d9be5210ded00d6790492a7b8b84afa"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "8b4932b55b5682fffd307755cc56138d"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "2fb6b4dbc94e0f253d66535671ac2eb1"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "b1d0d047e3b51ecafa73b367183ed1b9"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "ad115a88288946cbe187e6b020bcf1ae"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "abf1ed1d4d21b2963ef30795ff1c8f71"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "30d2fb14d3b55126103363193ddab81f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "4b546379b673f162cc39edfb4f3a86e7"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "feac4c7be31e7d99bc3214818756f8aa"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "12954eec670c6bba7afc6616d7ecb34c"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "a0f243b0db97e43001bf02dc1212ffa6"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "8ea4b79ef44def06e0f2f549a26a224d"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "35eaa1a9016b7b3ab78b2dea43227302"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "f6f9e0a67f467dc021cce06d2aadc490"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "3d910d49413fd41b59f39c634019807d"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "02c54c62a60d5ab3fb0c4d7f8da395fb"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "1b625b95e067e4b53b2449934da0494e"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "4659e46e9493049289ae9acc9bb8da74"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "9df401086c9c752cb43509f6ea3a7076"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "cbc89d91f494dcc22b412dd3079f4c29"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "7e8146789512add80a19e3cd01ba7cd0"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "58ba9071af2dcd7729de028916d290da"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "c3b201947a50810a961bcf7ba0552f14"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "c353efa27f231659d7da1dbbab04be7f"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "3429ed179c98fd02147600fd6391148f"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "9a2621334e9e4b4f8815d2da94ddea02"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "856263f02fb6f2e3e519f30816d35d3a"
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
    "revision": "8c0890c22e83b1e64e1e748311029bdd"
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
