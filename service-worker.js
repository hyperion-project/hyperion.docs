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
    "revision": "410bfdfbbf94f1d33325da70862feceb"
  },
  {
    "url": "assets/css/0.styles.da2f1f5f.css",
    "revision": "64b1e94a74099826a2be6725711ec961"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.85425ed0.js",
    "revision": "eeec2bd11c6f04e9c01d02588f92e826"
  },
  {
    "url": "assets/js/11.47598c68.js",
    "revision": "a8e1b9dfc9f8a5789600765b51c8adbd"
  },
  {
    "url": "assets/js/12.f98e64b1.js",
    "revision": "565b8dad9aa3581f4167638861334dfa"
  },
  {
    "url": "assets/js/13.ebf65655.js",
    "revision": "734579acb2dcfd80452b87e0f265217f"
  },
  {
    "url": "assets/js/14.188e9f95.js",
    "revision": "dade8dcd14b9f836c1638ef7ffbdf41c"
  },
  {
    "url": "assets/js/15.db79cb37.js",
    "revision": "a2d4673b928a356fafc8ae8e8e9e2f87"
  },
  {
    "url": "assets/js/16.3adc48dc.js",
    "revision": "2d09ee6b096206a94eacf1b6452b56a5"
  },
  {
    "url": "assets/js/17.9afbdb39.js",
    "revision": "02430c01f03814e1f2bcacb0f8341c96"
  },
  {
    "url": "assets/js/18.afc24cb3.js",
    "revision": "e6e36c31dfa9137a43062832081d01f8"
  },
  {
    "url": "assets/js/19.d493e8f7.js",
    "revision": "15e3ffdaf1b1cf19667df7e666e3cf4c"
  },
  {
    "url": "assets/js/2.24bdcdba.js",
    "revision": "02f5e6802ac0d69c1a009645c61f8440"
  },
  {
    "url": "assets/js/20.f6f814db.js",
    "revision": "ecc3c5cd5c6e164ce9bf85fe69557cc8"
  },
  {
    "url": "assets/js/21.35aa7269.js",
    "revision": "22ae5e3ce66cd6c540636018dc4e75e9"
  },
  {
    "url": "assets/js/22.760e6117.js",
    "revision": "d794b3c13817aa60564b9ef27866a59f"
  },
  {
    "url": "assets/js/23.ee874480.js",
    "revision": "c71e79ed93320cf298ffdf6655ead1bf"
  },
  {
    "url": "assets/js/24.854896ca.js",
    "revision": "fd9208ecce157ae9a3d9b7dc05e473a8"
  },
  {
    "url": "assets/js/25.554ec9e1.js",
    "revision": "1ae86c20a1e4b003723f74869f339915"
  },
  {
    "url": "assets/js/26.3c8ee705.js",
    "revision": "f098ac104f89af54ea0851ad66d92fa6"
  },
  {
    "url": "assets/js/27.c92c9740.js",
    "revision": "8b38c75aee17aded5d035220e3e835a8"
  },
  {
    "url": "assets/js/28.768b7765.js",
    "revision": "f1cbb81cac8d970d2f5f1ceba9802e6a"
  },
  {
    "url": "assets/js/29.28984a53.js",
    "revision": "fa15f89df5969a9de341f3bee45d0cbe"
  },
  {
    "url": "assets/js/3.59dc7cea.js",
    "revision": "7ce20487595548288b28e4fc94fa91b5"
  },
  {
    "url": "assets/js/30.a33f2f57.js",
    "revision": "75a74c92f26caafa884a656638b53444"
  },
  {
    "url": "assets/js/31.625d7315.js",
    "revision": "9add238575a0590a7a14757ea7abc0f2"
  },
  {
    "url": "assets/js/32.e78bfdf4.js",
    "revision": "ae2a51d552abf44405f1b4d767bd4522"
  },
  {
    "url": "assets/js/33.c6e6bccd.js",
    "revision": "0e417e70ca1150197fb922b18920a242"
  },
  {
    "url": "assets/js/34.1bd5a700.js",
    "revision": "a22229ceb3e1161a2a859f029cca4239"
  },
  {
    "url": "assets/js/35.03850c3f.js",
    "revision": "d0e744952c55b84008ff21d2e3787b2e"
  },
  {
    "url": "assets/js/4.cbe5c83a.js",
    "revision": "deb3bab0c44b1646b7c5b773e64312dd"
  },
  {
    "url": "assets/js/5.a3e733a8.js",
    "revision": "7095003753d86165591b774fad950266"
  },
  {
    "url": "assets/js/6.ae743b7e.js",
    "revision": "5316260ab1c9628ace229137fb5a8573"
  },
  {
    "url": "assets/js/7.d2810184.js",
    "revision": "76b74a5b7f1a2825e7e1a7cfaebe830c"
  },
  {
    "url": "assets/js/8.a1eeec8c.js",
    "revision": "c6205089ca7a7bee548137a080d97528"
  },
  {
    "url": "assets/js/9.6b9f57cb.js",
    "revision": "7516e1f4af32358b32f8be9659e1dab5"
  },
  {
    "url": "assets/js/app.e47f24d6.js",
    "revision": "536ffec1b6af132139490f933ac15d05"
  },
  {
    "url": "de/index.html",
    "revision": "e8f44aa3dc0a4fc89d737d04d4b585fe"
  },
  {
    "url": "de/user/index.html",
    "revision": "c282ff35eec98135210ec121cfb5b722"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "d6b56e737b1104131e8ff7fa74b1d33c"
  },
  {
    "url": "en/addons/API.html",
    "revision": "d8d87f204bd8ce418356ad3d74ee5358"
  },
  {
    "url": "en/addons/index.html",
    "revision": "92bcb535f71d0ebd43340b132c7452ef"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "4c2ab3f1e30c085afe0b20fd8c8310bc"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "d24e40dad779362e94a1daaace4c24cc"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "11fd0d4459102ea10ce3f7f68a8f72c7"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "866cb972e2571e00d395b523000a62bd"
  },
  {
    "url": "en/effects/API.html",
    "revision": "b5a8d668a10f8099568d458506758cc8"
  },
  {
    "url": "en/effects/index.html",
    "revision": "472ee25c8e521134a68bd2caa8488f77"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "232634597182d5c90b7deb166e87d874"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "b017753e14953322151df490a1bd2bf9"
  },
  {
    "url": "en/json/Control.html",
    "revision": "71e5127422adeb11c335a0e55448d099"
  },
  {
    "url": "en/json/index.html",
    "revision": "55dbe077750657fad3667e7a517ec6eb"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "6dd5653290c662611d494e291b218978"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "860f7de9f217e4a32b8288dd248a7557"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "0b543f6ad9b40f1f6160d2712ead1558"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "ba85ff0c63aa44706df49ce9d2d04c5c"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "e79097f9bf95b58c7e9f75aa874364c1"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "21e208c12f2a397e894847b0592b0ea5"
  },
  {
    "url": "en/user/index.html",
    "revision": "184fca483be3291f48570978846737df"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "92343c3c68641cb92de79eb0ab65a9d7"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "12d2d0b065268d86566004ccd26e9318"
  },
  {
    "url": "hyperion-logo.png",
    "revision": "cae91ea6fd2043e14e7b420dcc2e354d"
  },
  {
    "url": "icons/apple-icon-120x120.png",
    "revision": "63f00e195c64cda121c7d2330c99a5d9"
  },
  {
    "url": "icons/apple-icon-152x152.png",
    "revision": "b3f85243493b66283e9b211f77f71a07"
  },
  {
    "url": "icons/apple-icon-167x167.png",
    "revision": "4ea88cc5726dd7315e5a473e56687228"
  },
  {
    "url": "icons/apple-icon-180x180.png",
    "revision": "f8bba7d61a5cab951fe066623c02741c"
  },
  {
    "url": "icons/apple-launch-1125x2436.png",
    "revision": "ffb1e20b518568ed59261a42f87e4f99"
  },
  {
    "url": "icons/apple-launch-1242x2208.png",
    "revision": "9738032cfb23a0c736e6b5fccc9da1b0"
  },
  {
    "url": "icons/apple-launch-1242x2688.png",
    "revision": "0193da5b17e7c3d57b19f3e08f9d359f"
  },
  {
    "url": "icons/apple-launch-1536x2048.png",
    "revision": "8f778d6bdbc67ff34a353ae9e3756447"
  },
  {
    "url": "icons/apple-launch-1668x2224.png",
    "revision": "4be8be4f5c91fbbadcc9a7a9fe637c67"
  },
  {
    "url": "icons/apple-launch-1668x2388.png",
    "revision": "c6efb8bc9dc6730e43279465694fb52e"
  },
  {
    "url": "icons/apple-launch-2048x2732.png",
    "revision": "84da7f152d3da667016e3d249b5c98f6"
  },
  {
    "url": "icons/apple-launch-640x1136.png",
    "revision": "ca0fa8f49e407353d74fdc385e626e51"
  },
  {
    "url": "icons/apple-launch-750x1334.png",
    "revision": "b8c5a50ec54f7c5cfec32526caaec2d7"
  },
  {
    "url": "icons/apple-launch-828x1792.png",
    "revision": "d3a480406c6d8dc0434bc2b902f08743"
  },
  {
    "url": "icons/favicon-128x128.png",
    "revision": "0b314f289997f6f5489c646b6237daf2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "167d760fcaaab2e1721103ea5f870d20"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "2e72cabfbdb490eb07e9e495c44e7864"
  },
  {
    "url": "icons/favicon-96x96.png",
    "revision": "e3dffb3e2a42e995586ecaf06028cf1c"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "0b314f289997f6f5489c646b6237daf2"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "07073a715397b8b990a943eb33787bc4"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "8927ae62b9fd820ce2a2ddbc45bef300"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "15e8f17118fc38ea636003eb6588ace1"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "e22610c473148f53d8237252cd333e98"
  },
  {
    "url": "icons/ms-icon-144x144.png",
    "revision": "bd3afe00b914d0768c7a398bc0062eb7"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "146f0e1ea346388f72176e58d5f68177"
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
    "revision": "9d54b660b2a931dee215ef7bee9fe73b"
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
