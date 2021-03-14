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
    "revision": "426bf356e2ce68036332e20ab1c8da0b"
  },
  {
    "url": "assets/css/0.styles.83e9b54b.css",
    "revision": "7e79518fc38022b193001d03e78fb6af"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4a1dbe7a.js",
    "revision": "7cf34b4048477449a5c84acb3f4dd64e"
  },
  {
    "url": "assets/js/11.4559cf9d.js",
    "revision": "5ea4e23422655463422ad31805078f3d"
  },
  {
    "url": "assets/js/12.97a7b669.js",
    "revision": "6f36ddd70e83a3df3f2e68db40a19d76"
  },
  {
    "url": "assets/js/13.afe140e9.js",
    "revision": "56f57236fcdaa931754c5cadb2e4fad6"
  },
  {
    "url": "assets/js/14.192fcb3a.js",
    "revision": "4302364b50fe71e55e104157d9a09776"
  },
  {
    "url": "assets/js/15.5eaa5c1c.js",
    "revision": "f2d2c83acb223ec064e2470b19234d7b"
  },
  {
    "url": "assets/js/16.cfd82024.js",
    "revision": "0839f42d267e8789c89549cc6b6eb891"
  },
  {
    "url": "assets/js/17.5dc9ce81.js",
    "revision": "04409ba36db5819f19d02f487e3076cf"
  },
  {
    "url": "assets/js/18.87e66407.js",
    "revision": "60165d8f6198655608b8b2fa211bf894"
  },
  {
    "url": "assets/js/19.6e59291e.js",
    "revision": "cfe0ec1ab2f16e224b124e1b5c2967ef"
  },
  {
    "url": "assets/js/2.cac1c242.js",
    "revision": "a504f9f01bc0d3179efde3b3981f4aad"
  },
  {
    "url": "assets/js/20.b7f7f580.js",
    "revision": "0307ce0867d07903499ef9e77cd064ca"
  },
  {
    "url": "assets/js/21.3a99a723.js",
    "revision": "e90d3b8eb0cf1c0076d66c1e2d737b38"
  },
  {
    "url": "assets/js/22.b3391e6c.js",
    "revision": "744324f5d3d26db7ff37a2be74f89afa"
  },
  {
    "url": "assets/js/23.5acbbab8.js",
    "revision": "0c5d334ef6ac744c25ddb692b1eb14cc"
  },
  {
    "url": "assets/js/24.584db8ee.js",
    "revision": "13b685d2daaed5715852c03f61b7d098"
  },
  {
    "url": "assets/js/25.1b7a7335.js",
    "revision": "aa3f03d3fa2434fa6fef253198b80dad"
  },
  {
    "url": "assets/js/26.295b31ef.js",
    "revision": "3120bca82905ddcf5b51bd6dc258b7a4"
  },
  {
    "url": "assets/js/27.cd57c357.js",
    "revision": "907c69d9daf1f9e3fbbeaab71cdd7407"
  },
  {
    "url": "assets/js/28.6d0a449e.js",
    "revision": "348c5b2c801d8da58681b68da346acf7"
  },
  {
    "url": "assets/js/29.271a296b.js",
    "revision": "8e30f82deab230706e4753a3bf0e0e61"
  },
  {
    "url": "assets/js/3.c0876c00.js",
    "revision": "ea74496abc2f6e3640be769782209858"
  },
  {
    "url": "assets/js/30.f43fe74c.js",
    "revision": "62a697fbd3ae8bf4af38e41c6e6afb3f"
  },
  {
    "url": "assets/js/31.1068e058.js",
    "revision": "4734cdab912b9e602549af90621dbeeb"
  },
  {
    "url": "assets/js/32.c98f22f0.js",
    "revision": "048f579a1f74de8c33e3a91774ec2e1a"
  },
  {
    "url": "assets/js/33.7ba66383.js",
    "revision": "99f3b7c97c7b28069e75af8cc0fb42d3"
  },
  {
    "url": "assets/js/34.d3080621.js",
    "revision": "378a7fa0b0d1b1a7f918cf4833a4c44a"
  },
  {
    "url": "assets/js/4.9a0d1848.js",
    "revision": "6bf122109838f9683def7ffb6a706035"
  },
  {
    "url": "assets/js/5.9cb1349f.js",
    "revision": "5f68044f94624302f15b1e0f6e17f34b"
  },
  {
    "url": "assets/js/6.9367514b.js",
    "revision": "8a995a5da7354f5f14e80fefd9f13cf1"
  },
  {
    "url": "assets/js/7.b7ccec3b.js",
    "revision": "b3b28897d718335993b9c941ef122c30"
  },
  {
    "url": "assets/js/8.6eec5314.js",
    "revision": "e504574c6e49443492a34bb1e06b5829"
  },
  {
    "url": "assets/js/9.55276dc3.js",
    "revision": "73a3644d4faf57c3e5fb6f53eed83942"
  },
  {
    "url": "assets/js/app.ec154c37.js",
    "revision": "b15a4e537f24658c658e08aaa0f44381"
  },
  {
    "url": "de/index.html",
    "revision": "78c10fd0189cf82c5bc2b6e46a1fe8b7"
  },
  {
    "url": "de/user/index.html",
    "revision": "dc742804bdae3be38ef5a8f637b82fd6"
  },
  {
    "url": "de/user/Installation.html",
    "revision": "6e9a27b2f7a9c509ed38d1347ded35e0"
  },
  {
    "url": "en/addons/API.html",
    "revision": "7b8d6c95d6ffc63abbc975552924d1fd"
  },
  {
    "url": "en/addons/index.html",
    "revision": "12661acf326fb00e6b1cc4be6bab8535"
  },
  {
    "url": "en/addons/OurFirstAddon.html",
    "revision": "8c8f1be6d3abbbbe6699b7a965899018"
  },
  {
    "url": "en/api/Detect.html",
    "revision": "ab59c153a008a7a8239662493213a7a7"
  },
  {
    "url": "en/api/Guidelines.html",
    "revision": "9777007d5f5d5b942b388f3657e4823f"
  },
  {
    "url": "en/api/Ui.html",
    "revision": "7c3b40fb6647e954ba4948680ae3d91e"
  },
  {
    "url": "en/effects/API.html",
    "revision": "b830fe63f31f98696db664ef99ad4095"
  },
  {
    "url": "en/effects/index.html",
    "revision": "b7636bf18895dd80a08f2e8972f27ae0"
  },
  {
    "url": "en/effects/OurFirstEffect.html",
    "revision": "f46b7c2f0995bd25a4bc1002941ecaab"
  },
  {
    "url": "en/json/Authorization.html",
    "revision": "7f8f07b2dc03196eea75ca15379eea53"
  },
  {
    "url": "en/json/Control.html",
    "revision": "f8064a788f4f694d41fa49db6f506cf4"
  },
  {
    "url": "en/json/index.html",
    "revision": "a07a5419f4fb0c8bc719b5e61f84b459"
  },
  {
    "url": "en/json/ServerInfo.html",
    "revision": "39d870a2f2085f2945e9e574a8a8fb01"
  },
  {
    "url": "en/json/Subscribe.html",
    "revision": "af628f8b136c03cfe57aefd948a81a6d"
  },
  {
    "url": "en/user/advanced/Advanced.html",
    "revision": "439dc6ea70ce4bd62ebe47bf38228338"
  },
  {
    "url": "en/user/advanced/Support.html",
    "revision": "b3109ac6899dff17c269a88219bea6a4"
  },
  {
    "url": "en/user/Configuration.html",
    "revision": "a4d4118ef9eda63b0ef05228f38b3ed9"
  },
  {
    "url": "en/user/HyperBian.html",
    "revision": "8276c9fbbea3ca1c53dec606ce10f913"
  },
  {
    "url": "en/user/index.html",
    "revision": "0e44fdde2a2d44c488ef4017c46ff6ab"
  },
  {
    "url": "en/user/Installation.html",
    "revision": "7213a3e2fd449c95c7ef747a6773cf07"
  },
  {
    "url": "en/user/LedDevices.html",
    "revision": "d6b6da05a84806c4ade16fcba77fa732"
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
    "revision": "49637f685ea9ace5201f5e1ace53f82a"
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
