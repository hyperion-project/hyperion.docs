import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { linksCheckPlugin } from '@vuepress/plugin-links-check'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { sidebar_EN, sidebar_DE } from "./configs";

import { getDirname, path } from 'vuepress/utils'
const __dirname = getDirname(import.meta.url)

export function hyperionTheme(options) {
  return {
    name: "hyperionTheme",
    extends: defaultTheme(options),
    alias: {
      "@theme/Page.vue": path.resolve(__dirname, "components/PageCustom.vue"),
      "@theme/Navbar.vue": path.resolve(__dirname, "components/NavbarCustom.vue")
    }
  };
}

export default defineUserConfig ({
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/icons/favicon-16x16.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/icons/favicon-96x96.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '128x128', href: '/icons/favicon-128x128.png' }],
    ['link', { rel: 'icon', type: 'image/ico', href: '/icons/favicon.ico' }],
    // iPhone XR
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-828x1792.png" }],
    // iPhone X, XS
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)", href: "/icons/apple-launch-1125x2436.png" }],
    // iPhone XS Max
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)", href: "/icons/apple-launch-1242x2688.png" }],
    // iPhone 8, 7, 6s, 6
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-750x1334.png" }],
    // iPhone 8 Plus, 7 Plus, 6s Plus, 6 Plus
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3)", href: "/icons/apple-launch-1242x2208.png" }],
    // iPhone 5
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-640x1136.png" }],
    // iPad Mini, Air, 9.7
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-1536x2048.png" }],
    // iPad Pro 10.5
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-1668x2224.png" }],
    // iPad Pro 11
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-1668x2388.png" }],
    // iPad Pro 12.9"
    ['link', { rel: "apple-touch-startup-image", media: "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)", href: "/icons/apple-launch-2048x2732.png" }],

    // PWA
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#2b81a0' }], // ???
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'Hyperion Documentation' }],
    ['link', { rel: 'apple-touch-icon', sizes: '120x120', href: '/icons/apple-icon-120x120.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '152x152', href: '/icons/apple-icon-152x152.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '167x167', href: '/icons/apple-icon-167x167.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/icons/apple-icon-180x180.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#fff' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/ms-icon-144x144.png' }], // probably invert
    ['meta', { name: 'msapplication-TileColor', content: '#2b81a0' }] // might not match with icon
  ],
  dest: "./dist",
  title: "Hyperion",
  description: "Node.js SDK for LINE Messaging API",
  locales: {
    "/": {
      lang: 'en-US',
      description: 'Hyperion Ambient Light documentation'
    },
    "/de/": {
      lang: 'de-DE',
      description: 'Hyperion Ambient Light Dokumentation'
    }
  },
  theme: hyperionTheme({
    docsDir: 'docs',
    docsBranch: 'main',
    docsRepo: 'hyperion-project/hyperion.docs',
    repo: 'https://hyperion-project.org/forum/',
    repoLabel: 'Forum',
    contributors: false,
    logo: '/hyperion_logo_light_static.png',
    logoDark: '/hyperion_logo_dark_static.png',
    logo_Dynamic: '/hyperion_logo_light_dynamic.png',
    logoDark_Dynamic: '/hyperion_logo_dark_dynamic.png',
    notFoundLight: '/not_found_light.png',
    notFoundDark: '/not_found_dark.png',
    sidebarDepth: 0,
    locales: {
      '/': {
        label: 'English',
        selectLanguageText: 'Languages',
        selectLanguageName: 'English',
        editLinkText: 'Edit this page on GitHub',
        editLink: false,
        lastUpdatedText: 'Last Updated',
        rightMenuText: "Content",
        navbar: [
          { text: 'User', link: '/user/' },
          { text: 'Effects', link: '/effects/' },
          { text: 'Json API', link: '/json/' }
        ],
        sidebar: sidebar_EN
      },
      '/de/': {
        label: 'Deutsch',
        selectLanguageText: 'Sprachen',
        selectLanguageName: 'Deutsch',
        editLinkText: 'Diese Seite auf Github bearbeiten',
        editLink: false,
        lastUpdatedText: 'Zuletzt aktualisiert',
        rightMenuText: "Inhalt",
        navbar: [
          { text: 'Benutzer', link: '/de/user/' },
          { text: 'Effekte', link: '/de/effects/' },
          { text: 'Json API', link: '/de/json/' }
        ],
        sidebar: sidebar_DE
      }
    }
  }),
  plugins: [
    mediumZoomPlugin({
      selector: '.zoomable',
    }),
    linksCheckPlugin({
      dev: true,
      build: false
    }),
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components')
    }),
    searchPlugin({
      locales: {
        '/': {
          placeholder: 'Search...',
        },
        '/de/': {
          placeholder: 'Suche...',
        }
      }
    })
  ],
  bundler: viteBundler({
    viteOptions: {
      base: '/hyperion.docs/'
    }
  })
})