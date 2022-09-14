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
    "revision": "8df7cf2406c8c45afa689b1ad77f95a0"
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
    "url": "assets/js/100.60c9d15f.js",
    "revision": "d208ace4e7248e31976adee75e801577"
  },
  {
    "url": "assets/js/101.0c672eb1.js",
    "revision": "960f5547b6fe3efd79d9075509dce138"
  },
  {
    "url": "assets/js/102.38710e1b.js",
    "revision": "b951aa1fc11317c3d056a45c85c66860"
  },
  {
    "url": "assets/js/103.dbad1c14.js",
    "revision": "c106d0f26d6e0bc0fd74157767e825d9"
  },
  {
    "url": "assets/js/104.abd0269c.js",
    "revision": "8a342fd5abbb61efb723f3dfa26ab5c5"
  },
  {
    "url": "assets/js/105.62f16824.js",
    "revision": "962928edadd37b5e78fdcad67961f948"
  },
  {
    "url": "assets/js/106.1f4996b2.js",
    "revision": "c5bb5ab72bfcfd65c16a46f4658d84e1"
  },
  {
    "url": "assets/js/107.72d3781b.js",
    "revision": "363dab05468521721f8b66375297b80d"
  },
  {
    "url": "assets/js/108.10348ae2.js",
    "revision": "c529a711e62002ef2f53b96e2e96e558"
  },
  {
    "url": "assets/js/109.8f1802e7.js",
    "revision": "750cf815a5e111d7483d89c65b5b880e"
  },
  {
    "url": "assets/js/11.db09fb26.js",
    "revision": "2cc75d48b21b871d926664534cd9a8ca"
  },
  {
    "url": "assets/js/110.23876369.js",
    "revision": "e4547a50d0ada57282d7f85d7dbe50d5"
  },
  {
    "url": "assets/js/111.ce4a3486.js",
    "revision": "f348d18d84557bd9fb46c662321fc9e1"
  },
  {
    "url": "assets/js/112.448eb6b0.js",
    "revision": "182fa3887cbbc3713b50fa9d654b38d3"
  },
  {
    "url": "assets/js/113.e8161da6.js",
    "revision": "6f3a52ee50a2550028dae062bd56f853"
  },
  {
    "url": "assets/js/114.d236304f.js",
    "revision": "242e114f4986d2b0612e420e6d1a877a"
  },
  {
    "url": "assets/js/115.1cd3ef9d.js",
    "revision": "ba3a177ed18a2c2bf2b3fcd9d283a0f2"
  },
  {
    "url": "assets/js/116.c2f3d97e.js",
    "revision": "9fafc5b26bef11d750014077ace71fca"
  },
  {
    "url": "assets/js/117.71995129.js",
    "revision": "a856d746f9373bb38ec5fa4a84650f24"
  },
  {
    "url": "assets/js/118.f3b41cb9.js",
    "revision": "7a4b1842f04ec4c4d83a80df4d026326"
  },
  {
    "url": "assets/js/119.ae70f1f2.js",
    "revision": "a85e8a10546c0916c9577a9cb5d4ae9e"
  },
  {
    "url": "assets/js/12.dc5dc007.js",
    "revision": "30f6bb86e89e8df5e180bcc7c22efa15"
  },
  {
    "url": "assets/js/120.a466c499.js",
    "revision": "7f96a5c4933ae8db849de4ea3ce3a1d5"
  },
  {
    "url": "assets/js/121.913a61fb.js",
    "revision": "286fda0c7bba7b2ba84aced1cb938c6c"
  },
  {
    "url": "assets/js/122.a9c2615a.js",
    "revision": "3c93e99cb60d5544c02a948013324160"
  },
  {
    "url": "assets/js/123.d3e24a9d.js",
    "revision": "52267f77305e7f295053eed447c9cbae"
  },
  {
    "url": "assets/js/124.cefcc91d.js",
    "revision": "a0ece128a201d08b1f52dd732bf79953"
  },
  {
    "url": "assets/js/125.dbbf0183.js",
    "revision": "4ff5b5b0d6bc8b8368075e47fe01c6c8"
  },
  {
    "url": "assets/js/126.763927e6.js",
    "revision": "90f704f52b0f9e94a990c51648be6699"
  },
  {
    "url": "assets/js/127.0fa95653.js",
    "revision": "6620125bff1c0d810b7fe5397b5691a2"
  },
  {
    "url": "assets/js/128.06bccff3.js",
    "revision": "68fd687b1b1fa4b1c8b6c43ee73587d6"
  },
  {
    "url": "assets/js/129.fbf03c12.js",
    "revision": "6b76798f6334023d0831d2a3791d4b5b"
  },
  {
    "url": "assets/js/13.0e8367f9.js",
    "revision": "dd0f01c4e643e4fba24702fdde087b03"
  },
  {
    "url": "assets/js/14.2edf758f.js",
    "revision": "73b09aafbd975f171ff62c6c06b2bc6f"
  },
  {
    "url": "assets/js/15.d1988112.js",
    "revision": "71a40194e12eca0fa0fd46bbd0618702"
  },
  {
    "url": "assets/js/16.14d40504.js",
    "revision": "b15ea8264bc6c1c42584a449de4f6c59"
  },
  {
    "url": "assets/js/17.0d15cb81.js",
    "revision": "05b24af1930ed89fcfcd13b8a32451dd"
  },
  {
    "url": "assets/js/18.159c1a26.js",
    "revision": "e19f85ab7a1c90c49c47a232e86dac36"
  },
  {
    "url": "assets/js/19.a740ea48.js",
    "revision": "1365c5e82ee6cced8db9fc5ff77ef3e8"
  },
  {
    "url": "assets/js/20.88075cd3.js",
    "revision": "09bb5d6a6ca470bf5ecb4cf01a61d68b"
  },
  {
    "url": "assets/js/21.adde35ce.js",
    "revision": "fbf9d68b69ec2fff4e011e94d658364f"
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
    "url": "assets/js/34.c0b1ebb5.js",
    "revision": "ed41acccca090f99cbccfea0edbffb03"
  },
  {
    "url": "assets/js/35.58d31eba.js",
    "revision": "7c2146c3060ba73d2e491c6597d506bf"
  },
  {
    "url": "assets/js/36.c7b206d7.js",
    "revision": "42a3754de1fecbab99b25076a5c2135d"
  },
  {
    "url": "assets/js/37.a7f45589.js",
    "revision": "1a106a04f224af3af5a4561d2a2d6c6d"
  },
  {
    "url": "assets/js/38.fb85f403.js",
    "revision": "db82937d3d73cace05f6f1342cd6c522"
  },
  {
    "url": "assets/js/39.6cd2829c.js",
    "revision": "c8f86bd81dd197c9a3859740acafce2e"
  },
  {
    "url": "assets/js/4.556ccc02.js",
    "revision": "89f04d30dd5c5b3322b740f2b0cd051a"
  },
  {
    "url": "assets/js/40.a3f23011.js",
    "revision": "fde8bac9af6e594a0e321fa75cf6dfe1"
  },
  {
    "url": "assets/js/41.ccbd8e26.js",
    "revision": "8ffd05e2cfd5d4071e02d582cd9ccc79"
  },
  {
    "url": "assets/js/42.09233d44.js",
    "revision": "4025c4626ec94d76515d3f682588c2a4"
  },
  {
    "url": "assets/js/43.3bc13f32.js",
    "revision": "3eea5238e538652d84c9044db992e8be"
  },
  {
    "url": "assets/js/44.61dce75e.js",
    "revision": "84d958b47dcffb034ef31cb700ecc9a7"
  },
  {
    "url": "assets/js/45.4e2be728.js",
    "revision": "a964f7f2cbb99444c2fa3016c23e6610"
  },
  {
    "url": "assets/js/46.a3d3a1cb.js",
    "revision": "d29dca94040dd8adff7dbc4ee0f54465"
  },
  {
    "url": "assets/js/47.2872a978.js",
    "revision": "6e71a640b66fefc183474cfdd8f3918f"
  },
  {
    "url": "assets/js/48.3b6e3366.js",
    "revision": "0856830692974e43c01d41f82444995c"
  },
  {
    "url": "assets/js/49.b0a02e5d.js",
    "revision": "937a8f880a4f8a68e294bee333c63661"
  },
  {
    "url": "assets/js/5.c6e1ab60.js",
    "revision": "0533c842e617b58df2a209118c7ae085"
  },
  {
    "url": "assets/js/50.7db27074.js",
    "revision": "06054ad3fa1c8e790204c7c69af1f5d5"
  },
  {
    "url": "assets/js/51.1e3e5b70.js",
    "revision": "0a3916b1c4371c8dbc5fcbf4f5676218"
  },
  {
    "url": "assets/js/52.0f44d273.js",
    "revision": "f066ed32b8508d96e6298a61bbc1cf27"
  },
  {
    "url": "assets/js/53.284f45ed.js",
    "revision": "0ba54eb28466b257fe69d8aed7ae673f"
  },
  {
    "url": "assets/js/54.354af039.js",
    "revision": "43617919be51345f4e25521f71dcb1cc"
  },
  {
    "url": "assets/js/55.e6913342.js",
    "revision": "928100f6d434b40ecdaca6293bcbc2e4"
  },
  {
    "url": "assets/js/56.f8075bbb.js",
    "revision": "a4e4ecbcdeebcf061f09be5026d3866f"
  },
  {
    "url": "assets/js/57.bfb8874d.js",
    "revision": "9f84cac91937bfac10a14e4015c849a0"
  },
  {
    "url": "assets/js/58.e478ea36.js",
    "revision": "c29b5980edce2f410b2ff792f307944d"
  },
  {
    "url": "assets/js/59.9fe6f107.js",
    "revision": "5bb6450e716f354e0aca6dbe674504da"
  },
  {
    "url": "assets/js/6.332a6e02.js",
    "revision": "3da4c81a387d04293d54a5af912b5b90"
  },
  {
    "url": "assets/js/60.b7b84b36.js",
    "revision": "b806940be633f196db607f4d1ed30520"
  },
  {
    "url": "assets/js/61.7c5254a4.js",
    "revision": "b1e93690e563996a5642c4271385ca17"
  },
  {
    "url": "assets/js/62.3533190f.js",
    "revision": "9231a488a557dadfdb7751d6907a7304"
  },
  {
    "url": "assets/js/63.df96bb5e.js",
    "revision": "ad37bb58f2e6a9a6b84ccd85e7df5ef2"
  },
  {
    "url": "assets/js/64.1403aeef.js",
    "revision": "d73d44333ba19a2d636e1378d5faa1b5"
  },
  {
    "url": "assets/js/65.a3a1ce7d.js",
    "revision": "4f9209840aa833ab7b87544cb28783b3"
  },
  {
    "url": "assets/js/66.68cc5e62.js",
    "revision": "4023a87d7f168c24d01b2b9886b5e81a"
  },
  {
    "url": "assets/js/67.55f15d30.js",
    "revision": "c140c2de408272c6ec6d41d870a32828"
  },
  {
    "url": "assets/js/68.619228b9.js",
    "revision": "a05b871e93b8414dab20d938265aca07"
  },
  {
    "url": "assets/js/69.05bceade.js",
    "revision": "f10a4059e184061ce37185096d5e6474"
  },
  {
    "url": "assets/js/7.954748d5.js",
    "revision": "94432a74b038aed624a2bd901d815055"
  },
  {
    "url": "assets/js/70.093c61d3.js",
    "revision": "23519c0475202e0ecb69114d2820a4a0"
  },
  {
    "url": "assets/js/71.f2ad602b.js",
    "revision": "dc205901c9056fffbbbe659f605f15ad"
  },
  {
    "url": "assets/js/72.b8ab0cdc.js",
    "revision": "ac76c46fdb4271df5235617c35bf3d6f"
  },
  {
    "url": "assets/js/73.2be6e55d.js",
    "revision": "9c70a52c705e9763022ad0f6713cc01b"
  },
  {
    "url": "assets/js/74.5ef03e61.js",
    "revision": "395d77228cc7c198b29be21f043b4336"
  },
  {
    "url": "assets/js/75.2f926608.js",
    "revision": "622ab9ada75338c09f4bf4e5b41e421a"
  },
  {
    "url": "assets/js/76.e6b72d22.js",
    "revision": "2e4539cb361f8d38fee0f1ed48a23560"
  },
  {
    "url": "assets/js/77.c7c9143a.js",
    "revision": "495d1815417dbdf2883dad6d34de50df"
  },
  {
    "url": "assets/js/78.a92d55c4.js",
    "revision": "eafe813584a2b3231811fe7e78fb2ab2"
  },
  {
    "url": "assets/js/79.2f76352f.js",
    "revision": "adc979b46913955bb8e0517bf1315244"
  },
  {
    "url": "assets/js/8.227446b4.js",
    "revision": "8711f73b9724cbbce6f085f571468cdb"
  },
  {
    "url": "assets/js/80.dda30fb8.js",
    "revision": "5caa1cbf3bbad68d713f9c2d5308068b"
  },
  {
    "url": "assets/js/81.617e6260.js",
    "revision": "4d569fb06a7fcb4f707292c3c4243908"
  },
  {
    "url": "assets/js/82.003a33af.js",
    "revision": "4d6d458c9f6d0035e8282718a8535c48"
  },
  {
    "url": "assets/js/83.db950824.js",
    "revision": "c2c73f816cb66bc34631492d5c88b930"
  },
  {
    "url": "assets/js/84.4aef7ef7.js",
    "revision": "0480475419ef9a36b194cf1c2f5e0574"
  },
  {
    "url": "assets/js/85.29cbaf7f.js",
    "revision": "79bf654d761f24d42eda859515702bd7"
  },
  {
    "url": "assets/js/86.56b4d16e.js",
    "revision": "9cb233c3be153a0fbec30daa7b00d1d6"
  },
  {
    "url": "assets/js/87.1015182c.js",
    "revision": "d440df66e606c0079c2090e4343595fd"
  },
  {
    "url": "assets/js/88.e9a005a0.js",
    "revision": "5e51ab4f84650d9fb97679face07f2f6"
  },
  {
    "url": "assets/js/89.faba0be7.js",
    "revision": "fd8dd9aa00cd22450cc452022eb89f9e"
  },
  {
    "url": "assets/js/9.979535f8.js",
    "revision": "12c9cc7f638f53604f45f2d1f7c9e16b"
  },
  {
    "url": "assets/js/90.a583f57c.js",
    "revision": "32c1f31651653d963d1f742425d74c5c"
  },
  {
    "url": "assets/js/91.896b68b9.js",
    "revision": "625c92199b62f449bee455aef697a697"
  },
  {
    "url": "assets/js/92.2ad22edb.js",
    "revision": "e6898b47df332e880e01b9b34c548aac"
  },
  {
    "url": "assets/js/93.b1bfe0a8.js",
    "revision": "b36e9a5860c242394f410a240036b518"
  },
  {
    "url": "assets/js/94.2d1ce104.js",
    "revision": "33c51c39fdfc97214beaed50588229ab"
  },
  {
    "url": "assets/js/95.2e141b38.js",
    "revision": "8d99a4bfda24da19ad44b9c141a5d929"
  },
  {
    "url": "assets/js/96.fdef2b4e.js",
    "revision": "c994d6cc312ac227602a5140a9358b21"
  },
  {
    "url": "assets/js/97.fade0908.js",
    "revision": "abf3b9702cc111ef06363439e79248b4"
  },
  {
    "url": "assets/js/98.b3e4d700.js",
    "revision": "ce40fc91d6ecc55e026606e27b83751d"
  },
  {
    "url": "assets/js/99.bcaa726f.js",
    "revision": "8064bc55fa693d1240e343526d2210f5"
  },
  {
    "url": "assets/js/app.29503b78.js",
    "revision": "1c519bae336128d0d6e185700033217c"
  },
  {
    "url": "de/api/Detect.html",
    "revision": "f6716c3e62cd83d9daf4e93d492f9230"
  },
  {
    "url": "de/api/Guidelines.html",
    "revision": "05b4ccef15bc4d8e2ca0e6a5e983f9f6"
  },
  {
    "url": "de/api/Ui.html",
    "revision": "e099ed0c2df267ec119883c59cb6c206"
  },
  {
    "url": "de/effects/API.html",
    "revision": "75ba9a2dbc67f4f917dc57d762d3cc87"
  },
  {
    "url": "de/effects/index.html",
    "revision": "83002365f1ad6d1b5de29b20e1f66d77"
  },
  {
    "url": "de/effects/OurFirstEffect.html",
    "revision": "ca8ce4722d199049966c4accb7571a81"
  },
  {
    "url": "de/index.html",
    "revision": "892c7a77333597637e5a87ce22f65182"
  },
  {
    "url": "de/json/Authorization.html",
    "revision": "becada024e9a084d32c86f4177aa28f2"
  },
  {
    "url": "de/json/Control.html",
    "revision": "aec41cf06f57e816d88283626331ba74"
  },
  {
    "url": "de/json/index.html",
    "revision": "f2842a74a5788bdd84736b224909b54e"
  },
  {
    "url": "de/json/ServerInfo.html",
    "revision": "83fb69dc4488a76c168e6f5220dbd91d"
  },
  {
    "url": "de/json/Subscribe.html",
    "revision": "c015f947f520ec224892c4c860c447fc"
  },
  {
    "url": "de/user/advanced/Advanced.html",
    "revision": "33c5e8a67ea9d839e551e9501acb8872"
  },
  {
    "url": "de/user/advanced/Support.html",
    "revision": "43506178103e0e1d9242e832597b3a28"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "441b44a64a888e0c10f2fa73d6e38ef4"
  },
  {
    "url": "de/user/index.html",
    "revision": "9f0b326623ca4b1330be954d8970febd"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "066a6058e493dd6ffc97af59af9343d0"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "50ad280cb7e151181081c29f305d2629"
  },
  {
    "url": "de/user/leddevices/index.html",
    "revision": "97e820f7815db173303133885e73b7e3"
  },
  {
    "url": "de/user/leddevices/network/atmoorb.html",
    "revision": "6a0e566eafd160a7cd2b2fb67f0952c2"
  },
  {
    "url": "de/user/leddevices/network/cololight.html",
    "revision": "5c6515a36547c80aa2a0fb04f8729d40"
  },
  {
    "url": "de/user/leddevices/network/fadecandy.html",
    "revision": "0be4908d0a675e107272c577a6f7ce49"
  },
  {
    "url": "de/user/leddevices/network/nanoleaf.html",
    "revision": "0cd27b3c80db9d8703af77afe9d6f549"
  },
  {
    "url": "de/user/leddevices/network/philipshue.html",
    "revision": "d2c9313214053100a1b6ff135ff15133"
  },
  {
    "url": "de/user/leddevices/network/tinkerforge.html",
    "revision": "dabd0d5c9a5661dddd645122805d3e95"
  },
  {
    "url": "de/user/leddevices/network/tpm2net.html",
    "revision": "1b58f9a66b1b51a7278835b1c821d5fc"
  },
  {
    "url": "de/user/leddevices/network/udpartnet.html",
    "revision": "182f441d8aa0e35780dd9122ce5cd905"
  },
  {
    "url": "de/user/leddevices/network/udpddp.html",
    "revision": "51bd175a812bbf0cf44d3ed2ecb24594"
  },
  {
    "url": "de/user/leddevices/network/udpe131.html",
    "revision": "862f3ad7ca69443dc85164f02f08562a"
  },
  {
    "url": "de/user/leddevices/network/udph801.html",
    "revision": "fe8f480016795ac920bd050a2441dc36"
  },
  {
    "url": "de/user/leddevices/network/udpraw.html",
    "revision": "b6e719620ec06d7640fe2a90e48ede62"
  },
  {
    "url": "de/user/leddevices/network/wled.html",
    "revision": "ac4dedd2e492f124ea734a8636b4fcbd"
  },
  {
    "url": "de/user/leddevices/network/yeelight.html",
    "revision": "956111bfe06e9c3889edf68d5a4c8724"
  },
  {
    "url": "de/user/leddevices/others/debug.html",
    "revision": "4ae85b1bbc4c5f3abf178bc181083ade"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa102.html",
    "revision": "72435d19192bec8021e629f8a2fea4d1"
  },
  {
    "url": "de/user/leddevices/spi_pwm/apa104.html",
    "revision": "0dcb711f7da57b8027eb21ef33510ce6"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "af657b8a6ea7abbbb60f8e52d8b6d015"
  },
  {
    "url": "de/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "b46078d29cd147284c7453e81740e30e"
  },
  {
    "url": "de/user/leddevices/spi_pwm/p9813.html",
    "revision": "cef20eb12ec4fc0482b35aa7fa46a761"
  },
  {
    "url": "de/user/leddevices/spi_pwm/piblaster.html",
    "revision": "d1f862037449575481b9c5e435f380b4"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6812.html",
    "revision": "a15ab08a5c6c1a01a0035831a06be449"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk6822.html",
    "revision": "030557d5f0572bc395504175b81db237"
  },
  {
    "url": "de/user/leddevices/spi_pwm/sk9822.html",
    "revision": "68a332e7288a55a8e8e91720136af981"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2801.html",
    "revision": "a27877ee23c346035c22afb321b1a619"
  },
  {
    "url": "de/user/leddevices/spi_pwm/ws2812.html",
    "revision": "0c2e25e42cef4e36ed6932d8a1befda6"
  },
  {
    "url": "de/user/leddevices/usb/adalight.html",
    "revision": "b85aba0990c8464697ec3c263081447c"
  },
  {
    "url": "de/user/leddevices/usb/atmo.html",
    "revision": "c6acad3d45ff72debd2845f2e3987a70"
  },
  {
    "url": "de/user/leddevices/usb/dmx.html",
    "revision": "3e94a4f530240ceb507863aad157cf62"
  },
  {
    "url": "de/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "ae3e67e2d960b8bd1f5207cefdc03dc8"
  },
  {
    "url": "de/user/leddevices/usb/karate.html",
    "revision": "604e7b5772c471a17de7c9b0f147e6aa"
  },
  {
    "url": "de/user/leddevices/usb/lightpack.html",
    "revision": "87fcd34b9a5d08334a92066d40d6be0a"
  },
  {
    "url": "de/user/leddevices/usb/multilightpack.html",
    "revision": "be6bc265e8848d8f7c26fafbcdc366c9"
  },
  {
    "url": "de/user/leddevices/usb/paintpack.html",
    "revision": "e2e08f12ac3972e73f65bef05327fee9"
  },
  {
    "url": "de/user/leddevices/usb/rawhid.html",
    "revision": "83e3dae46005a4ecf8133fc943df9c7f"
  },
  {
    "url": "de/user/leddevices/usb/sedu.html",
    "revision": "7346e9a6bbdfea3414811b6aa74e0020"
  },
  {
    "url": "de/user/leddevices/usb/tpm2.html",
    "revision": "09adb25e80fe9ea86083c54ee7dc58d8"
  },
  {
    "url": "en/addons/API.html",
    "revision": "45ddd15c2f55a8cbea4a1d05f52a13c4"
  },
  {
    "url": "en/addons/index.html",
    "revision": "984cc6f455453200c16ef6890297ce98"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "f5c2db0ae7ffbc324faeaf73bddc787e"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "7e3ae893b6f19258d9624d5511eec4ec"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "90538341d6c0cb7a36d670aeca28dac0"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "186906d33351826f5b7fe2c71afa7029"
  },
  {
    "url": "en/effects/API.html",
    "revision": "3d35ede344f8444ff61e6da750d85028"
  },
  {
    "url": "en/effects/index.html",
    "revision": "2bc36a2aa1a8b32c791ea3000ebf03c8"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "d48428d29ef011cbfcb053eb45cd0d02"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "46e45778e0d62bac41e46208263c7920"
  },
  {
    "url": "en/json/Control.html",
    "revision": "b3bf66573cffbba8e6fc870df408eb1a"
  },
  {
    "url": "en/json/index.html",
    "revision": "cf01f32ffa373150f1da89ae54c6bf80"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "7d523022ff2fa8021b4f399c478ccb7c"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "e24d6626c0e75f5f543c1cb3561ca32b"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "5e6a36f7993669887a2218c133e1c05d"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "6adc7662050a8336c03c6a0154c796ab"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "9ba1018345acd035773fdba0f6d6dcf2"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "c9e8562b4a20d70baa6b55f529d6c512"
  },
  {
    "url": "en/user/index.html",
    "revision": "73ef6c8f4326c57d74feb4916ab4b96d"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "f0d3e4f9ed19fbd0f975393e63f349a1"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "dc20721f680330d29d3cd9aa6c706a3b"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "d40c9baef5bf5005cb65ae59a92861c5"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "8fb7c2d596a8b07114b7a34777c33ac6"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "0b0c6081d3125b7029c9a27a4e7b1894"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "590f2c3c355d06c4a16d4a41b05c99cb"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "1015136e1a82d244eb3603c45e84ef95"
  },
  {
    "url": "en/user/leddevices/network/razer.html",
    "revision": "707b564431ef8e9f7433388e7df9c462"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "fb77b0149372fe1c0c05078a063d11de"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "556caa3f8bba6b16fa320a9194866539"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "cf4123a6cb524d24cf8363e6993a12aa"
  },
  {
    "url": "en/user/leddevices/network/udpddp.html",
    "revision": "eb776c92a8a9879be32300c61deaac45"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "2572fdd108bd4cf8d769e3f786e872c0"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "f7c45bf037526ee7fdce0b77b3f74a93"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "916ad64a6958eee023a38dc11c5cb5cf"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "8906f182eff2d14f740539086335d9fe"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "778bf47644a4c948610fcbad1d8d8ad4"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "36657156fe2456d95d46bb92928213eb"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa102.html",
    "revision": "6f4073ebea9cfeeb43f031171a379b9d"
  },
  {
    "url": "en/user/leddevices/spi_pwm/apa104.html",
    "revision": "a0aa06c8b4ab87666589e3ee08129467"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd6803.html",
    "revision": "3536ebe824fc0c57452c087b69330def"
  },
  {
    "url": "en/user/leddevices/spi_pwm/lpd8806.html",
    "revision": "d3c7106134e11180d51b1767f7088a7e"
  },
  {
    "url": "en/user/leddevices/spi_pwm/p9813.html",
    "revision": "d0fcd167e3515b94d021cfd249b5fcbd"
  },
  {
    "url": "en/user/leddevices/spi_pwm/piblaster.html",
    "revision": "5d60a622ebae01e02270406ae43a55f5"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6812.html",
    "revision": "72f6e820dca521ef9438bf8f5818237f"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk6822.html",
    "revision": "21d3cece6aa642de0f017b9efd826cab"
  },
  {
    "url": "en/user/leddevices/spi_pwm/sk9822.html",
    "revision": "bcf4126d55c137f7c136107f3fd45694"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2801.html",
    "revision": "0bad488a685169d898e95aad668abdfe"
  },
  {
    "url": "en/user/leddevices/spi_pwm/ws2812.html",
    "revision": "de13219363a9734e74bf315a347abf2d"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "e1346ecffcc26a4962e63321a7ce20a5"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "cbcc4259ffc314a2af504f164c9f1104"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "851b2d4027392db3cfc6913c7a977532"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "2d25bab947f0c07bb5fff18ef360d57b"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "d6f0710c8453f5eed7f54213a59f9a32"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "16fd664104e65733a1d3cbe5b2dffb96"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "3483199f9110ac7879f4da3c6d31381d"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "86dbfbed7319b62a777d16fb02aa9392"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "e87d58149664d2e98aee805c0f2148a0"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "4ef97fbe32489e887cd7154ae79b51a1"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "b1607e41d513c7808e7d145eb0239c02"
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
    "revision": "3df5413f62b9f3b8ababa365c1cb2803"
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
