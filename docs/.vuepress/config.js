module.exports = {
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
  serviceWorker: true,
  dest: "./dist",
  title: "Hyperion",
  // removing this sections disables lang selector. But everything else works. Featue Request to merge with themeConfig.locales?
  locales: {
    "/": {
      lang: 'en-US',
      // Description of page does not work inside themeConfig
      description: 'Hyperion Ambient Light documentation'
    },
    "/de/": {
      lang: 'de-DE',
      description: 'Hyperion Ambient Light Dokumentation'
    }
  },
  themeConfig: {
    sidebarDepth: 3,
    smoothScroll: true,
    logoLightStatic: '/hyperion_logo_light_static.png',
    logoDarkStatic: '/hyperion_logo_dark_static.png',
    logoLightDynamic: '/hyperion_logo_light_dynamic.png',
    logoDarkDynamic: '/hyperion_logo_dark_dynamic.png',
    notFoundLight: '/not_found_light.png',
    notFoundDark: '/not_found_dark.png',
    searchPlaceholder: 'Search...',
    locales: {
      '/': {
        // text for the language dropdown
        selectText: 'Languages',
        // label for this locale in the language dropdown
        label: 'English',
        // Aria Label for locale in the dropdown
        ariaLabel: 'Languages',
        // text for last updated
        lastUpdated: 'Last Updated',
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Edit this page on GitHub',
        // config for Service Worker
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        // The top navbar
        nav: [
          // { text: 'Home', link: '/' },
          { text: 'User', link: '/en/user/' },
          { text: 'Effects', link: '/en/effects/' },
          { text: 'Json API', link: '/en/json/' }
          // { text: 'Addons API', link: '/en/addons/' }
        ],
        sidebar: {
          '/en/user/': getUserSidebar('General', 'Advanced', 'EN'),
          '/en/effects/': getEffectsSidebar('Effects', 'Effects UI'),
          '/en/json/': getJsonSidebar('JSON', 'Misc'),
          '/en/api/': getApiSidebar('Go back to')
          // '/en/addons/': getAddonsSidebar('Addons', 'Addons UI')
        }
      },
      '/de/': {
        selectText: 'Sprachen',
        label: 'Deutsch',
        lastUpdated: 'Zuletzt Aktualisiert',
        editLinkText: 'Editiere diese Seite auf Github',
        serviceWorker: {
          updatePopup: {
            message: "Neuer Inhalt ist verfügbar.",
            buttonText: "Aktualisieren"
          }
        },
        nav: [
          // { text: 'Startseite', link: '/de/' },
          { text: 'Benutzer', link: '/de/user/' },
          { text: 'Effekte', link: '/de/effects/' },
          { text: 'Json API', link: '/de/json/' }
          // { text: 'Addons API', link: '/de/addons/' }
        ],
				sidebar: {
        	'/de/user/': getUserSidebar('Allgemein', 'Erweitert', 'DE'),
          '/de/effects/': getEffectsSidebar('Effekte', 'Effekt UI'),
          '/de/json/': getJsonSidebar('JSON', 'Misc'),
          '/de/api/': getApiSidebar('Gehe zurück zu')
          // '/de/addons/': getAddonsSidebar('Addons', 'Addons UI')
				}
      }
    },
    // Assumes GitHub. Can also be a full GitLab url.
    repo: 'https://hyperion-project.org/forum/',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    repoLabel: 'Forum',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    docsRepo: 'hyperion-project/hyperion.docs',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'main',
    // defaults to false, set to true to enable
    editLinks: false,
    // default value is true. Allows to hide next page links on all pages
    nextLinks: true,
    // default value is true. Allows to hide prev page links on all pages
    prevLinks: true,
    // custom text for edit link. Defaults to "Edit this page"
    //editLinkText: 'Edit this page on GitHub'
  },
  plugins: [

    // https://vuepress.github.io/en/plugins/medium-zoom/
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.zoomable',
        delay: 1000,
        options: {
          margin: 24,
          background: '#000000bf',
          scrollOffset: 0,
        }
      }
    ],
    // https://vuepress.github.io/en/plugins/redirect
    [
      'vuepress-plugin-redirect',
      {
        locales: true
      }
    ],
    // https://vuepress.vuejs.org/plugin/official/plugin-pwa.html#install
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true
      }
    ],
    // https://v1.vuepress.vuejs.org/plugin/official/plugin-back-to-top.html
    [
      '@vuepress/back-to-top'
    ],
    [
      'vuepress-plugin-serve'
    ]
  ]
}

function getUserSidebar (groupA, groupB, Language) {
  if (Language === 'EN') {
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          '',
          'Installation',
          'Configuration',
          {
            title: 'LED Hardware',
            collapsable: true,
            children: [
              'leddevices/',
              {
                title: 'SPI/PWM',
                collapsable: true,
                children: [
                  'leddevices/spi_pwm/apa102',
                  'leddevices/spi_pwm/apa104',
                  'leddevices/spi_pwm/lpd6803',
                  'leddevices/spi_pwm/lpd8806',
                  'leddevices/spi_pwm/p9813',
                  'leddevices/spi_pwm/sk6812',
                  'leddevices/spi_pwm/sk6822',
                  'leddevices/spi_pwm/sk9822',
                  'leddevices/spi_pwm/ws2801',
                  'leddevices/spi_pwm/ws2812',
				  'leddevices/spi_pwm/piblaster'
                ]
              },
              {
                title: 'USB/Serial',
                collapsable: true,
                children: [
                  'leddevices/usb/adalight',
                  'leddevices/usb/atmo',
                  'leddevices/usb/dmx',
                  'leddevices/usb/hyperion-usbasp',
                  'leddevices/usb/karate',
                  'leddevices/usb/lightpack',
                  'leddevices/usb/multilightpack',
                  'leddevices/usb/paintpack',
                  'leddevices/usb/rawhid',
                  'leddevices/usb/sedu',
                  'leddevices/usb/tpm2',
                ]
              },
              {
                title: 'Network',
                collapsable: true,
                children: [
                  'leddevices/network/atmoorb',
                  'leddevices/network/cololight',
                  'leddevices/network/fadecandy',
                  'leddevices/network/nanoleaf',
                  'leddevices/network/philipshue',
                  'leddevices/network/tinkerforge',
                  'leddevices/network/tpm2net',
                  'leddevices/network/udpartnet',
                  'leddevices/network/udpe131',
                  'leddevices/network/udph801',
                  'leddevices/network/udpraw',
                  'leddevices/network/wled',
                  'leddevices/network/yeelight'
                ]
              },
              {
                title: 'Others',
                collapsable: true,
                children: [
                  'leddevices/others/debug'
                ]
              }
            ]
          },
          'HyperBian',
        ]
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'advanced/Advanced',
          'advanced/Support',
        ]
      }
    ]
  } else if (Language === 'DE') {
    return [
      {
        title: groupA,
        collapsable: false,
        children: [
          '',
          'Installation',
          'Konfiguration',
          {
            title: 'LED Hardware',
            collapsable: true,
            children: [
              'leddevices/',
              {
                title: 'SPI/PWM',
                collapsable: true,
                children: [
                  'leddevices/spi_pwm/apa102',
                  'leddevices/spi_pwm/apa104',
                  'leddevices/spi_pwm/lpd6803',
                  'leddevices/spi_pwm/lpd8806',
                  'leddevices/spi_pwm/p9813',
                  'leddevices/spi_pwm/sk6812',
                  'leddevices/spi_pwm/sk6822',
                  'leddevices/spi_pwm/sk9822',
                  'leddevices/spi_pwm/ws2801',
                  'leddevices/spi_pwm/ws2812',
				  'leddevices/spi_pwm/piblaster'
                ]
              },
              {
                title: 'USB/Serial',
                collapsable: true,
                children: [
                  'leddevices/usb/adalight',
                  'leddevices/usb/atmo',
                  'leddevices/usb/dmx',
                  'leddevices/usb/hyperion-usbasp',
                  'leddevices/usb/karate',
                  'leddevices/usb/lightpack',
                  'leddevices/usb/multilightpack',
                  'leddevices/usb/paintpack',
                  'leddevices/usb/rawhid',
                  'leddevices/usb/sedu',
                  'leddevices/usb/tpm2',
                ]
              },
              {
                title: 'Network',
                collapsable: true,
                children: [
                  'leddevices/network/atmoorb',
                  'leddevices/network/cololight',
                  'leddevices/network/fadecandy',
                  'leddevices/network/nanoleaf',
                  'leddevices/network/philipshue',
                  'leddevices/network/tinkerforge',
                  'leddevices/network/tpm2net',
                  'leddevices/network/udpartnet',
                  'leddevices/network/udpe131',
                  'leddevices/network/udph801',
                  'leddevices/network/udpraw',
                  'leddevices/network/wled',
                  'leddevices/network/yeelight'
                ]
              },
              {
                title: 'Others',
                collapsable: true,
                children: [
                  'leddevices/others/debug'
                ]
              }
            ]
          },
          'HyperBian'
        ]
      },
      {
        title: groupB,
        collapsable: false,
        children: [
          'advanced/Advanced',
          'advanced/Support',
        ]
      }
    ]
  }
}

function getEffectsSidebar (groupA, groupB) {
  return [{
    title: groupA,
    collapsable: false,
    children: [
      '',
      'API',
      'OurFirstEffect',
    ]
  },
  {
    title: groupB,
    collapsable: false,
    children: [
      '../api/Ui'
    ]
  }
  ]
}

function getJsonSidebar (groupA, groupB) {
  return [{
    title: groupA,
    collapsable: false,
    children: [
      '',
      'ServerInfo',
      'Control',
      'Authorization',
      'Subscribe',
    ]
  },
  {
    title: groupB,
    collapsable: false,
    children: [
      '../api/Detect',
      '../api/Guidelines'
    ]
  }
  ]
}

function getApiSidebar (groupA) {
  return [
    {
      title: groupA,
      collapsable: false,
      children: [
        '../effects/',
        '../json/'
      ]
    }
  ]
}

function getAddonsSidebar (groupA, groupB) {
  return [{
    title: groupA,
    collapsable: false,
    children: [
      '',
      'API',
      'OurFirstAddon',
    ]
  },
  {
    title: groupB,
    collapsable: false,
    children: [
      '../api/Ui'
    ]
  }
  ]
}
