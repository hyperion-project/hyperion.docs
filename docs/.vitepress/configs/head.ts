import type { HeadConfig } from 'vitepress'
const BASE_DIR = process.env.BASE_DIR ?? '/'

export const head: HeadConfig[] = [
  ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: BASE_DIR + 'icons/favicon-16x16.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: BASE_DIR + 'icons/favicon-32x32.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: BASE_DIR + 'icons/favicon-96x96.png' }],
  ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: BASE_DIR + 'icons/favicon-128x128.png' }],
  ['link', { rel: 'icon', type: 'image/ico', href: BASE_DIR + 'icons/favicon.ico' }],

  // iPhone XR
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-828x1792.png" }],
  // iPhone X, XS
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", href: BASE_DIR + "icons/apple-launch-1125x2436.png" }],
  // iPhone XS Max
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)", href: BASE_DIR + "icons/apple-launch-1242x2688.png" }],
  // iPhone 8, 7, 6s, 6
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-750x1334.png" }],
  // iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)", href: BASE_DIR + "icons/apple-launch-1242x2208.png" }],
  // iPhone 5
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-640x1136.png" }],
  // iPad Mini, Air, 9.7
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-1536x2048.png" }],
  // iPad Pro 10.5
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-1668x2224.png" }],
  // iPad Pro 11
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-1668x2388.png" }],
  // iPad Pro 12.9"
  ['link', { rel: "apple-touch-startup-image", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)", href: BASE_DIR + "icons/apple-launch-2048x2732.png" }],

  // PWA
  ['link', { rel: 'manifest', href: BASE_DIR + 'manifest.json' }],
  ['meta', { name: 'theme-color', content: 'white' }],
  ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
  ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
  ['meta', { name: 'apple-mobile-web-app-title', content: 'Hyperion Documentation' }],
  ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: BASE_DIR + 'icons/apple-icon-120x120.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: BASE_DIR + 'icons/apple-icon-152x152.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '167x167', href: BASE_DIR + 'icons/apple-icon-167x167.png' }],
  ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: BASE_DIR + 'icons/apple-icon-180x180.png' }],
  ['link', { rel: 'mask-icon', href: BASE_DIR + 'icons/safari-pinned-tab.svg', color: '#fff' }],
  ['meta', { name: 'msapplication-TileImage', content: BASE_DIR + 'icons/ms-icon-144x144.png' }], // probably invert
  ['meta', { name: 'msapplication-TileColor', content: 'white' }] // might not match with icon
]
