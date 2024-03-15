import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom'
import { linksCheckPlugin } from '@vuepress/plugin-links-check'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { searchPlugin } from '@vuepress/plugin-search'
import { head, sidebar_EN, sidebar_DE } from "./configs"
const baseDIR = (process.env.BASE_DIR ?? '/')

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
  }
}

export default defineUserConfig ({
  head: head,
  base: baseDIR,
  dest: "./dist",
  title: "Hyperion",
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
  bundler: viteBundler(),
  theme: hyperionTheme({
    docsDir: 'docs',
    docsBranch: 'main',
    docsRepo: 'hyperion-project/hyperion.docs',
    repo: 'https://hyperion-project.org/forum/',
    repoLabel: 'Forum',
    contributors: false,
    logo: 'hyperion_logo_light_static.png',
    logoDark: 'hyperion_logo_dark_static.png',
    logo_Dynamic: 'hyperion_logo_light_dynamic.png',
    logoDark_Dynamic: 'hyperion_logo_dark_dynamic.png',
    notFoundLight: 'not_found_light.png',
    notFoundDark: 'not_found_dark.png',
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
      components: {
        HyperionLogoDynamic: path.resolve(__dirname, "components/HyperionLogoDynamic.vue"),
        ImageWrap: path.resolve(__dirname, "components/ImageWrap.vue"),
        MainSection: path.resolve(__dirname, "components/MainSection.vue")
      }
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
  ]
})