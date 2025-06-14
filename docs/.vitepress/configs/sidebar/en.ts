export const sidebar_EN: any = {
  "/user/": [
    {
      text: 'General',
      items: [
        { text: 'Introduction', link: '/user/Introduction.md' },
        {
          text: 'Getting Started',
          items: [
            { text: 'Overview', link: '/user/gettingstarted/Overview.md' },
            { text: 'Install/Uninstall',
              collapsed: true,
              items: [
                { text: 'Linux', link: '/user/gettingstarted/Linux.md' },
                { text: 'Windows', link: '/user/gettingstarted/Windows.md' },
                { text: 'macOS', link: '/user/gettingstarted/macOS.md' }
              ]
            }
          ]
        },
        { text: 'Configuration', link: '/user/Configuration.md' },
        {
          text: 'LED Hardware',
          collapsed: true,
          items: [
            { text: 'Overview', link: '/user/leddevices/Overview.md' },
            {
              text: 'SPI/PWM',
              collapsed: true,
              items: [
                { text: 'APA102', link: '/user/leddevices/spi_pwm/apa102.md' },
                { text: 'APA104', link: '/user/leddevices/spi_pwm/apa104.md' },
                { text: 'HD108', link: '/user/leddevices/spi_pwm/hd108.md' },
                { text: 'LPD6803', link: '/user/leddevices/spi_pwm/lpd6803.md' },
                { text: 'LPD8806', link: '/user/leddevices/spi_pwm/lpd8806.md' },
                { text: 'P9813', link: '/user/leddevices/spi_pwm/p9813.md' },
                { text: 'SK6812', link: '/user/leddevices/spi_pwm/sk6812.md' },
                { text: 'SK6822', link: '/user/leddevices/spi_pwm/sk6822.md' },
                { text: 'SK9822', link: '/user/leddevices/spi_pwm/sk9822.md' },
                { text: 'WS2801', link: '/user/leddevices/spi_pwm/ws2801.md' },
                { text: 'WS2812B', link: '/user/leddevices/spi_pwm/ws2812b.md' },
                { text: 'PiBlaster', link: '/user/leddevices/spi_pwm/piblaster.md' }
              ]
            },
            {
              text: 'USB/Serial',
              collapsed: true,
              items: [
                { text: 'Adalight', link: '/user/leddevices/usb/adalight.md' },
                { text: 'Atmo', link: '/user/leddevices/usb/atmo.md' },
                { text: 'DMX', link: '/user/leddevices/usb/dmx.md' },
                { text: 'Hyperion-USBasp', link: '/user/leddevices/usb/hyperion-usbasp.md' },
                { text: 'Karate', link: '/user/leddevices/usb/karate.md' },
                { text: 'Lightpack', link: '/user/leddevices/usb/lightpack.md' },
                { text: 'Multi-Lightpack', link: '/user/leddevices/usb/multilightpack.md' },
                { text: 'Paintpack', link: '/user/leddevices/usb/paintpack.md' },
                { text: 'RawHID', link: '/user/leddevices/usb/rawhid.md' },
                { text: 'SEDU', link: '/user/leddevices/usb/sedu.md' },
                { text: 'Skydimo', link: '/user/leddevices/usb/skydimo.md' },                
                { text: 'TPM2', link: '/user/leddevices/usb/tpm2.md' }
              ]
            },
            {
              text: 'FTDI',
              collapsed: true,
              items: [
                { text: 'APA102', link: '/user/leddevices/ftdi/apa102.md' },
                { text: 'SK6812', link: '/user/leddevices/fdti/sk6812.md' },
                { text: 'WS2812', link: '/user/leddevices/ftdi/ws2812.md' }
              ]
            },            
            {
              text: 'Network',
              collapsed: true,
              items: [
                { text: 'AtmoOrb', link: '/user/leddevices/network/atmoorb.md' },
                { text: 'Cololight', link: '/user/leddevices/network/cololight.md' },
                { text: 'FadeCandy', link: '/user/leddevices/network/fadecandy.md' },
                { text: 'HomeAssistant', link: '/user/leddevices/network/homeassistant.md' },
                { text: 'Nanoleaf', link: '/user/leddevices/network/nanoleaf.md' },
                { text: 'Philips Hue', link: '/user/leddevices/network/philipshue.md' },
                { text: 'Razer Chroma', link: '/user/leddevices/network/razer.md' },
                { text: 'Tinkerforge', link: '/user/leddevices/network/tinkerforge.md' },
                { text: 'TPM2.NET', link: '/user/leddevices/network/tpm2net.md' },
                { text: 'UDP ArtNet', link: '/user/leddevices/network/udpartnet.md' },
                { text: 'UDP E1.31', link: '/user/leddevices/network/udpe131.md' },
                { text: 'UDP DDP', link: '/user/leddevices/network/udpddp.md' },
                { text: 'UDP H801', link: '/user/leddevices/network/udph801.md' },
                { text: 'UDP Raw', link: '/user/leddevices/network/udpraw.md' },
                { text: 'WLED', link: '/user/leddevices/network/wled.md' },
                { text: 'Yeelight', link: '/user/leddevices/network/yeelight.md' }
              ]
            },
            {
              text: 'Others',
              collapsed: true,
              items: [
                { text: 'File', link: '/user/leddevices/others/debug.md' }
              ]
            }
          ]
        },
        { text: 'HyperBian', link: '/user/HyperBian.md' }
      ]
    },
    {
      text: 'Advanced',
      items: [
        { text: 'Advanced', link: '/user/advanced/Advanced.md' },
        { text: 'CLI', link: '/user/advanced/CLI.md' },
        { text: 'Support Request', link: '/user/advanced/Support.md' },
        { text: 'Testing', link: '/user/advanced/Testing.md' }
      ]
    }
  ],
  "/effects/": [
    {
      text: 'Effects',
      items: [
        { text: "Effect development", link: '/effects/Effects.md' },
        { text: "Development Framework", link: '/effects/Functions.md' },
        { text: "Graphical User Interface", link: '/effects/Ui.md' },
        { text: "Our first Effect", link: '/effects/OurFirstEffect.md' }
      ]
    }
  ]
}
