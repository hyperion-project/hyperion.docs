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
    "revision": "bfd36accbcf9e6ee0e0d199628deda46"
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
    "url": "assets/js/11.d4d2d97c.js",
    "revision": "f5a8003c2a6bb60faa4e7a267877170c"
  },
  {
    "url": "assets/js/12.f04acebe.js",
    "revision": "90251245b979056700e635137c1b5176"
  },
  {
    "url": "assets/js/13.b4935de5.js",
    "revision": "90fd55f7cb1e5909bafbbef7cbf0386d"
  },
  {
    "url": "assets/js/14.458b4d19.js",
    "revision": "fb2bb255eeb06e65c20d56e25a323972"
  },
  {
    "url": "assets/js/15.22932c6b.js",
    "revision": "bd03d317ba9de4ca191b8f9b49dcb583"
  },
  {
    "url": "assets/js/16.c14e4982.js",
    "revision": "3743fc1d161635871d1dc56e3d794e07"
  },
  {
    "url": "assets/js/17.596f9af7.js",
    "revision": "effa61ef3b902b2d85814078bdfb047b"
  },
  {
    "url": "assets/js/18.5ea94606.js",
    "revision": "ff7ca2bb584d431ff952027bb8c6d95a"
  },
  {
    "url": "assets/js/19.f3fe63b5.js",
    "revision": "5b1c9bc26da3e1c6c93724a57b21e6f0"
  },
  {
    "url": "assets/js/20.b7e7c1e7.js",
    "revision": "6e44b47af8c8681a7c0edbc46d939231"
  },
  {
    "url": "assets/js/21.80468ed8.js",
    "revision": "33e511feb4a5f9228f08e3cd24cfed9d"
  },
  {
    "url": "assets/js/22.9b16b588.js",
    "revision": "81627a55bc280809351514db9e0ee8e0"
  },
  {
    "url": "assets/js/23.8ddbe949.js",
    "revision": "1d687eddaae9b25353c0f82b4a577176"
  },
  {
    "url": "assets/js/24.1f08511a.js",
    "revision": "3b438d0199694f67ecbf246e88cc5d45"
  },
  {
    "url": "assets/js/25.fa621244.js",
    "revision": "9d086e1adbca58abc511d1479b59d225"
  },
  {
    "url": "assets/js/26.2cb24418.js",
    "revision": "a799af527fa0610e22eeaff834940852"
  },
  {
    "url": "assets/js/27.c323a700.js",
    "revision": "3091007e44cf15cdeb517c45c463e3c0"
  },
  {
    "url": "assets/js/28.af9aa3b1.js",
    "revision": "4eb0ab0e8c198ce7d6cd30c32b731d24"
  },
  {
    "url": "assets/js/29.111a6565.js",
    "revision": "e1c9a5e4215928b1600973ff45369a0c"
  },
  {
    "url": "assets/js/3.b8e8312a.js",
    "revision": "7b783085c30ae1013d07ff60c07afa8e"
  },
  {
    "url": "assets/js/30.3c4abd75.js",
    "revision": "5daba226b122b9874186c7aff8879d26"
  },
  {
    "url": "assets/js/31.9e64e783.js",
    "revision": "1f9f7a2cc1453af8b81d202118151b40"
  },
  {
    "url": "assets/js/32.ef94575e.js",
    "revision": "79ac6fc452a84c214b233e524cfbf012"
  },
  {
    "url": "assets/js/33.eb667471.js",
    "revision": "65288f396b500d17e240443c0ad1ceca"
  },
  {
    "url": "assets/js/34.981a3789.js",
    "revision": "a9516cd234c597b96628aa75ab6b55ef"
  },
  {
    "url": "assets/js/35.d1a5ad68.js",
    "revision": "2658ed9b6e90b9059a231ffb56ec2cb5"
  },
  {
    "url": "assets/js/36.ac148827.js",
    "revision": "00cd225c1cb670676e9cbfa46a05284d"
  },
  {
    "url": "assets/js/37.d61d00fd.js",
    "revision": "bcb110ccfab19761d233dbcb4b9198d5"
  },
  {
    "url": "assets/js/38.fe00e1a5.js",
    "revision": "dd90e20f07539f6f49387104059983ec"
  },
  {
    "url": "assets/js/39.315641cb.js",
    "revision": "5e05716fbd376039bbe79d6b33004f28"
  },
  {
    "url": "assets/js/4.21b6e6f3.js",
    "revision": "db46cf49dbdb4ab474f5a632bacb4942"
  },
  {
    "url": "assets/js/40.d9832f91.js",
    "revision": "973ea32c9207278e97bc56d2cbb29efa"
  },
  {
    "url": "assets/js/41.e3ff6d1d.js",
    "revision": "b2e3444cbbcc9c42c4b1301f6cba2594"
  },
  {
    "url": "assets/js/42.4bb96390.js",
    "revision": "102a9c2462f3ea36930cea885f668615"
  },
  {
    "url": "assets/js/43.fcda4c05.js",
    "revision": "ba199af0f14864aa4b0c1621d18587f7"
  },
  {
    "url": "assets/js/44.575838eb.js",
    "revision": "ca001c83be32e0482513004975f3f1ad"
  },
  {
    "url": "assets/js/45.122d2288.js",
    "revision": "ce81a14e9764baab315b467021db22d4"
  },
  {
    "url": "assets/js/46.a8bb67bb.js",
    "revision": "ccd78ce713b96d67b45c7307260eeec0"
  },
  {
    "url": "assets/js/47.0b01eb83.js",
    "revision": "33591966891f14ebedf36203330ad70a"
  },
  {
    "url": "assets/js/48.afa85a04.js",
    "revision": "de4f83f3d8b91f112b1ecfb4407d67b4"
  },
  {
    "url": "assets/js/49.4998a3af.js",
    "revision": "b919019df1290edf9161dc67f7bba3f7"
  },
  {
    "url": "assets/js/5.9bdec314.js",
    "revision": "435f915ccdfd0c7159ead4816b932292"
  },
  {
    "url": "assets/js/50.92ebe682.js",
    "revision": "13c85618750e9cc745e903890430ecc8"
  },
  {
    "url": "assets/js/51.69b54ceb.js",
    "revision": "6fbdf23ffa00b6fa2a89c1fa4ccde485"
  },
  {
    "url": "assets/js/52.6e430373.js",
    "revision": "70a237fd95bb8e93cb5075db7cb8a693"
  },
  {
    "url": "assets/js/53.6245a366.js",
    "revision": "cf1f1b91a6f645fc2f62cba82dc080d8"
  },
  {
    "url": "assets/js/54.a1925ed2.js",
    "revision": "ff3b9817f8f0d49e3e74772a9fa1efbc"
  },
  {
    "url": "assets/js/55.a7d4ab4f.js",
    "revision": "4cab79d0231c704741d7a4f6020b2bb2"
  },
  {
    "url": "assets/js/56.82f61ed8.js",
    "revision": "aed4b9fab61596138514ee6cce13b81f"
  },
  {
    "url": "assets/js/57.0c8a1a24.js",
    "revision": "e847d2be04c1cae6c58f13729330a43e"
  },
  {
    "url": "assets/js/58.b26918f4.js",
    "revision": "8e33d5a8f7d6dc00be1d841d628d542e"
  },
  {
    "url": "assets/js/59.64a4f965.js",
    "revision": "4ca3f53536d46b615e9cdbc75a310af3"
  },
  {
    "url": "assets/js/6.e2f6bf4c.js",
    "revision": "c7a4d7a2dfd3cf4efe864d99a7feb9b1"
  },
  {
    "url": "assets/js/60.bc0cc603.js",
    "revision": "c1ce5317ca08648056fea96c4007a3b4"
  },
  {
    "url": "assets/js/61.4f6c44d3.js",
    "revision": "3697bbfea2485c1cb0854961120adeed"
  },
  {
    "url": "assets/js/62.81eae578.js",
    "revision": "3e1eb6de1f10870127d8daad0e1ec9e3"
  },
  {
    "url": "assets/js/63.920015d5.js",
    "revision": "21238b9a514698604bf4e868baa0e2fd"
  },
  {
    "url": "assets/js/64.93c89d1c.js",
    "revision": "90b8f0b85f9ae4d3dd05d0fd2c0d7272"
  },
  {
    "url": "assets/js/65.91269108.js",
    "revision": "f0e1515cc6661feb03b41b6691a2b26a"
  },
  {
    "url": "assets/js/66.c6c6abe7.js",
    "revision": "9d9a6fbc5947d1e99b55df3f591ef4a8"
  },
  {
    "url": "assets/js/67.2ab28994.js",
    "revision": "64d8d2757b2c50d61b92941a6a7aa0b5"
  },
  {
    "url": "assets/js/68.dd290c3b.js",
    "revision": "abd44922ab7089b1f7ddb01f48632150"
  },
  {
    "url": "assets/js/69.1f8e97ee.js",
    "revision": "8db7fee67ecab41c4ee9f4590814946b"
  },
  {
    "url": "assets/js/7.f88b8472.js",
    "revision": "fb0b62669b8f82e77f0cbcdeb5815f14"
  },
  {
    "url": "assets/js/70.f4e15fdf.js",
    "revision": "392a17daa16afe4f3df353a77ff89b08"
  },
  {
    "url": "assets/js/71.89282a0a.js",
    "revision": "083858b43c88ec239728ab0c2ac988ae"
  },
  {
    "url": "assets/js/72.35fa0a53.js",
    "revision": "cfb94e1aedf2fa2d72d44cf75193b0a5"
  },
  {
    "url": "assets/js/73.bfc3a93c.js",
    "revision": "42d4b71de643fdc408caa625b68e19ac"
  },
  {
    "url": "assets/js/74.55189934.js",
    "revision": "8d065982bd0d1f3619671f622609d437"
  },
  {
    "url": "assets/js/75.33017680.js",
    "revision": "6ee71701185c29f67e50de41b6946fce"
  },
  {
    "url": "assets/js/8.d5feeda5.js",
    "revision": "648b88bac27d55a7883596a8ea9a7dbc"
  },
  {
    "url": "assets/js/9.129d32eb.js",
    "revision": "65a9632301b87595a17cd46d45bc42c5"
  },
  {
    "url": "assets/js/app.a263713b.js",
    "revision": "8e1189250a3fc865eef07fb807c67e49"
  },
  {
    "url": "de/index.html",
    "revision": "9dde9d02aee635ae09382474eaabb096"
  },
  {
    "url": "de/user/HyperBian.html",
    "revision": "72f90ce07e53c44a5ecdd9f034bf7eba"
  },
  {
    "url": "de/user/index.html",
    "revision": "f17c1da72fe73d1efbbd6d09249e9eb4"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "00c2ef27534a59272c50d7fe8d22ed78"
  },
  {
    "url": "de/user/Konfiguration.html",
    "revision": "75cf93f92e421e83998976b55a345611"
  },
  {
    "url": "en/addons/API.html",
    "revision": "61645b782a38bb20312ab8e8b327ff21"
  },
  {
    "url": "en/addons/index.html",
    "revision": "0a341d83d60994dfbe3ddaccedf36ac2"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "04e79c81b9e893ce3a2fc7a4aa0bc59d"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "dda4ee42b690a959dd648db7cc74975b"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "fd717e84a85cdc783d28432137b7cdf7"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "fb299ec227ae9204cd3ab1f9ae2ab989"
  },
  {
    "url": "en/effects/API.html",
    "revision": "f7103a24d6c8ca3fb90373eabd2ca3ea"
  },
  {
    "url": "en/effects/index.html",
    "revision": "bd7691cc6064920687fdc380cc95fc78"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "5ca65f366c04e5bc21a7720236723cbb"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "e1beb8138c500b407d8fc2811fde8887"
  },
  {
    "url": "en/json/Control.html",
    "revision": "8d9b8622bb8552f7e11fc67bed051c79"
  },
  {
    "url": "en/json/index.html",
    "revision": "ef1717499a4bb96672a34132585a47a6"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "e212fa337e91a17c578cb930edfda0fa"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "b44d181ef924d8fdc471853b7d18a97d"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "49087d463110ab5b3920ceaed5494131"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "fd48760273e4149af41f03741de7c53a"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "b3ebf1b290e3d7ad5b85d5ba04679070"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "0f2bdaf22360de0d7121ec1a2761d096"
  },
  {
    "url": "en/user/index.html",
    "revision": "dda64388de8dcc0feb0efa06daaf43a4"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "8661fc9e52e365050018602de235f7dc"
  },
  {
    "url": "en/user/leddevices/gpio/piblaster.html",
    "revision": "45c0fe683f3a0c4cf7fe3cf4d9782a72"
  },
  {
    "url": "en/user/leddevices/index.html",
    "revision": "a56ce790e22a0068ba6daee8b1754e01"
  },
  {
    "url": "en/user/leddevices/network/atmoorb.html",
    "revision": "e565de20e7f4ec7bb1fea9c11fc9a6be"
  },
  {
    "url": "en/user/leddevices/network/cololight.html",
    "revision": "edd63094dad6c5ea8f64a69569660354"
  },
  {
    "url": "en/user/leddevices/network/fadecandy.html",
    "revision": "9db5440cc413c5076ac13769f28aaae8"
  },
  {
    "url": "en/user/leddevices/network/nanoleaf.html",
    "revision": "df81abcc8c8ee883c648f85c4d6184c4"
  },
  {
    "url": "en/user/leddevices/network/philipshue.html",
    "revision": "b86bf750c660310f0b2557e9e932b8d0"
  },
  {
    "url": "en/user/leddevices/network/tinkerforge.html",
    "revision": "3d49b659a86e547af9b2e9a5d52da041"
  },
  {
    "url": "en/user/leddevices/network/tpm2net.html",
    "revision": "23f08e2392a439d75518c3d9147789db"
  },
  {
    "url": "en/user/leddevices/network/udpartnet.html",
    "revision": "fc3dcddae53f23561d2a2f81c2b584f1"
  },
  {
    "url": "en/user/leddevices/network/udpe131.html",
    "revision": "07a7bef92dd897543742d7637831fd99"
  },
  {
    "url": "en/user/leddevices/network/udph801.html",
    "revision": "d895750a27af7b6d8e6f4e169aa572cf"
  },
  {
    "url": "en/user/leddevices/network/udpraw.html",
    "revision": "2f681dcb7ad90c5a699df1ed23b1aae9"
  },
  {
    "url": "en/user/leddevices/network/wled.html",
    "revision": "3ec23f23195a938e805d259d7f3225a1"
  },
  {
    "url": "en/user/leddevices/network/yeelight.html",
    "revision": "f515feedb3ae4add58550718d0cf3c41"
  },
  {
    "url": "en/user/leddevices/others/debug.html",
    "revision": "71bcd143e036487a4dd25457211ef7aa"
  },
  {
    "url": "en/user/leddevices/spi/apa102.html",
    "revision": "dc464555f5e47629253c7610b1113ebe"
  },
  {
    "url": "en/user/leddevices/spi/apa104.html",
    "revision": "7f11bc68655fbd703ad29c835914bef9"
  },
  {
    "url": "en/user/leddevices/spi/lpd6803.html",
    "revision": "8e40572c80cacf8652c2b279cfaaae50"
  },
  {
    "url": "en/user/leddevices/spi/lpd8806.html",
    "revision": "70232e273909fd584a121cf5aedc4b9b"
  },
  {
    "url": "en/user/leddevices/spi/p9813.html",
    "revision": "e240c554a1111f1b4568bef808da0aeb"
  },
  {
    "url": "en/user/leddevices/spi/sk6812.html",
    "revision": "6210d52a8afed2fca69d1a1d322509db"
  },
  {
    "url": "en/user/leddevices/spi/sk6822.html",
    "revision": "020dd1db3768f3f39f6933d7df86afb7"
  },
  {
    "url": "en/user/leddevices/spi/sk9822.html",
    "revision": "9344805d5a494c0c3f1dc9acafd780e6"
  },
  {
    "url": "en/user/leddevices/spi/ws2801.html",
    "revision": "1c852e8302e08d43915817981da30fd5"
  },
  {
    "url": "en/user/leddevices/spi/ws2812.html",
    "revision": "e556f6e4342fc966194a99dcc2f94b16"
  },
  {
    "url": "en/user/leddevices/usb/adalight.html",
    "revision": "2e554af34542a2062e2eaefd334afa75"
  },
  {
    "url": "en/user/leddevices/usb/atmo.html",
    "revision": "8717a65ed12ac230a2f070005df35d92"
  },
  {
    "url": "en/user/leddevices/usb/dmx.html",
    "revision": "58208fce61798a3f8ca74ca3e90ffaf4"
  },
  {
    "url": "en/user/leddevices/usb/hyperion-usbasp.html",
    "revision": "5bb415afc4de2057eea5b6b83c5866f5"
  },
  {
    "url": "en/user/leddevices/usb/karate.html",
    "revision": "7e898c31010fd14c46d34800463bb73e"
  },
  {
    "url": "en/user/leddevices/usb/lightpack.html",
    "revision": "6ec39eedf076ab4e54b4c6eb24c03215"
  },
  {
    "url": "en/user/leddevices/usb/multilightpack.html",
    "revision": "844d4e7f2c5228110ce375bd6b12b5ae"
  },
  {
    "url": "en/user/leddevices/usb/paintpack.html",
    "revision": "c56efd1e5bed915090309b6720ff9327"
  },
  {
    "url": "en/user/leddevices/usb/rawhid.html",
    "revision": "741dac9dbee77a18d6ec61457578dba5"
  },
  {
    "url": "en/user/leddevices/usb/sedu.html",
    "revision": "c24ac7248a6d9feb631ef24fa776b20e"
  },
  {
    "url": "en/user/leddevices/usb/tpm2.html",
    "revision": "711440c9568c6e7573c6abcae7ea43af"
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
    "revision": "8bdf9941e148d12fb207f773fef14c8e"
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
