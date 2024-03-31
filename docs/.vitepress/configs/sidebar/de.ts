export const sidebar_DE: any = {
  "/de/user": [
    {
      text: 'Allgemein',
      items: [
        { text: 'Einführung', link: '/de/user/Introduction.md' },
        { text: 'Installieren', link: '/de/user/Installation.md' },
        { text: 'Konfigurieren', link: '/de/user/Configuration.md' },
        {
          text: 'LED Hardware',
          collapsed: true,
          items: [
            { text: 'Übersicht', link: '/de/user/leddevices/Overview.md' },
            {
              text: 'SPI/PWM',
              collapsed: true,
              items: [
                { text: 'APA102', link: '/de/user/leddevices/spi_pwm/apa102.md' },
                { text: 'APA104', link: '/de/user/leddevices/spi_pwm/apa104.md' },
                { text: 'LPD6803', link: '/de/user/leddevices/spi_pwm/lpd6803.md' },
                { text: 'LPD8806', link: '/de/user/leddevices/spi_pwm/lpd8806.md' },
                { text: 'P9813', link: '/de/user/leddevices/spi_pwm/p9813.md' },
                { text: 'SK6812', link: '/de/user/leddevices/spi_pwm/sk6812.md' },
                { text: 'SK6822', link: '/de/user/leddevices/spi_pwm/sk6822.md' },
                { text: 'SK9822', link: '/de/user/leddevices/spi_pwm/sk9822.md' },
                { text: 'WS2801', link: '/de/user/leddevices/spi_pwm/ws2801.md' },
                { text: 'WS2812B', link: '/de/user/leddevices/spi_pwm/ws2812b.md' },
                { text: 'PiBlaster', link: '/de/user/leddevices/spi_pwm/piblaster.md' }
              ]
            },
            {
              text: 'USB/Serial',
              collapsed: true,
              items: [
                { text: 'Adalight', link: '/de/user/leddevices/usb/adalight.md' },
                { text: 'Atmo', link: '/de/user/leddevices/usb/atmo.md' },
                { text: 'DMX', link: '/de/user/leddevices/usb/dmx.md' },
                { text: 'Hyperion-USBasp', link: '/de/user/leddevices/usb/hyperion-usbasp.md' },
                { text: 'Karate', link: '/de/user/leddevices/usb/karate.md' },
                { text: 'Lightpack', link: '/de/user/leddevices/usb/lightpack.md' },
                { text: 'Multi-Lightpack', link: '/de/user/leddevices/usb/multilightpack.md' },
                { text: 'Paintpack', link: '/de/user/leddevices/usb/paintpack.md' },
                { text: 'RawHID', link: '/de/user/leddevices/usb/rawhid.md' },
                { text: 'SEDU', link: '/de/user/leddevices/usb/sedu.md' },
                { text: 'TPM2', link: '/de/user/leddevices/usb/tpm2.md' }
              ]
            },
            {
              text: 'Netzwerk',
              collapsed: true,
              items: [
                { text: 'AtmoOrb', link: '/de/user/leddevices/network/atmoorb.md' },
                { text: 'Cololight', link: '/de/user/leddevices/network/cololight.md' },
                { text: 'FadeCandy', link: '/de/user/leddevices/network/fadecandy.md' },
                { text: 'Nanoleaf', link: '/de/user/leddevices/network/nanoleaf.md' },
                { text: 'Philips Hue', link: '/de/user/leddevices/network/philipshue.md' },
                { text: 'Razer Chroma', link: '/de/user/leddevices/network/razer.md' },
                { text: 'Tinkerforge', link: '/de/user/leddevices/network/tinkerforge.md' },
                { text: 'TPM2.NET', link: '/de/user/leddevices/network/tpm2net.md' },
                { text: 'UDP ArtNet', link: '/de/user/leddevices/network/udpartnet.md' },
                { text: 'UDP E1.31', link: '/de/user/leddevices/network/udpe131.md' },
                { text: 'UDP DDP', link: '/de/user/leddevices/network/udpddp.md' },
                { text: 'UDP H801', link: '/de/user/leddevices/network/udph801.md' },
                { text: 'UDP Raw', link: '/de/user/leddevices/network/udpraw.md' },
                { text: 'WLED', link: '/de/user/leddevices/network/wled.md' },
                { text: 'Yeelight', link: '/de/user/leddevices/network/yeelight.md' }
              ]
            },
            {
              text: 'Andere',
              collapsed: true,
              items: [
                { text: 'File', link: '/de/user/leddevices/others/debug.md' }
              ]
            }
          ]
        },
        { text: 'HyperBian', link: '/de/user/HyperBian.md' }
      ]
    },
    {
      text: 'Für Fortgeschrittene',
      items: [
        { text: 'Fortgeschritten', link: '/de/user/advanced/Advanced.md' },
        { text: 'Befehlszeile', link: '/de/user/advanced/CLI.md' },
        { text: 'Supportanfrage', link: '/de/user/advanced/Support.md' },
        { text: 'Testen', link: '/de/user/advanced/Testing.md' }
      ]
    }
  ],
  "/de/effects/": [
    {
      text: 'Allgemeines',
      items: [
        { text: "Effekt-Erstellung", link: '/de/effects/Effects.md' },
        { text: "Effect Engine API", link: '/de/effects/API.md' },
        { text: "Unser erster Effekt", link: '/de/effects/OurFirstEffect.md' }
      ]
    },
    {
      text: 'Effekt UI',
      items: [
        { text: "Grafische Benutzeroberfläche", link: '/de/api/Ui.md' }
      ]
    }
  ],
  "/de/json/": [
    {
      text: 'JSON',
      items: [
        { text: "JSON-RPC Einführung", link: '/de/json/JSON.md' },
        { text: "Server Informationen", link: '/de/json/ServerInfo.md' },
        { text: "Steuerung", link: '/de/json/Control.md' },
        { text: "Authentifizierung", link: '/de/json/Authentication.md' },
        { text: "Abonnement", link: '/de/json/Subscribe.md' }
      ]
    },
    {
      text: 'Sonstiges',
      items: [
        { text: "Hyperion finden", link: '/de/api/Detect.md' },
        { text: "Leitfaden", link: '/de/api/Guidelines.md' }
      ]
    }
  ],
  "/de/api/": [
    {
      text: 'Gehe zurück zu',
      items: [
        { text: "Effekt-Erstellung", link: '/de/effects/Effects.md' },
        { text: "JSON-RPC Einführung", link: '/de/json/JSON.md' }
      ]
    }
  ]
}