export const sidebar_DE = {
  "/de/": [
    {
      text: 'Allgemein',
      collapsible: false,
      children: [
        '/de/user/Introduction.md',
        '/de/user/Installation.md',
        '/de/user/Configuration.md',
        {
          text: 'LED Hardware',
          collapsible: true,
          children: [
            '/de/user/leddevices/Overview.md',
            {
              text: 'SPI/PWM',
              collapsible: true,
              children: [
                '/de/user/leddevices/spi_pwm/apa102.md',
                '/de/user/leddevices/spi_pwm/apa104.md',
                '/de/user/leddevices/spi_pwm/lpd6803.md',
                '/de/user/leddevices/spi_pwm/lpd8806.md',
                '/de/user/leddevices/spi_pwm/p9813.md',
                '/de/user/leddevices/spi_pwm/sk6812.md',
                '/de/user/leddevices/spi_pwm/sk6822.md',
                '/de/user/leddevices/spi_pwm/sk9822.md',
                '/de/user/leddevices/spi_pwm/ws2801.md',
                '/de/user/leddevices/spi_pwm/ws2812b.md',
                '/de/user/leddevices/spi_pwm/piblaster.md'
              ]
            },
            {
              text: 'USB/Serial',
              collapsible: true,
              children: [
                '/de/user/leddevices/usb/adalight.md',
                '/de/user/leddevices/usb/atmo.md',
                '/de/user/leddevices/usb/dmx.md',
                '/de/user/leddevices/usb/hyperion-usbasp.md',
                '/de/user/leddevices/usb/karate.md',
                '/de/user/leddevices/usb/lightpack.md',
                '/de/user/leddevices/usb/multilightpack.md',
                '/de/user/leddevices/usb/paintpack.md',
                '/de/user/leddevices/usb/rawhid.md',
                '/de/user/leddevices/usb/sedu.md',
                '/de/user/leddevices/usb/tpm2.md'
              ]
            },
            {
              text: 'Network',
              collapsible: true,
              children: [
                '/de/user/leddevices/network/atmoorb.md',
                '/de/user/leddevices/network/cololight.md',
                '/de/user/leddevices/network/fadecandy.md',
                '/de/user/leddevices/network/nanoleaf.md',
                '/de/user/leddevices/network/philipshue.md',
                '/de/user/leddevices/network/razer.md',
                '/de/user/leddevices/network/tinkerforge.md',
                '/de/user/leddevices/network/tpm2net.md',
                '/de/user/leddevices/network/udpartnet.md',
                '/de/user/leddevices/network/udpe131.md',
                '/de/user/leddevices/network/udph801.md',
                '/de/user/leddevices/network/udpraw.md',
                '/de/user/leddevices/network/wled.md',
                '/de/user/leddevices/network/yeelight.md'
              ]
            },
            {
              text: 'Others',
              collapsible: true,
              children: [
                '/de/user/leddevices/others/debug.md'
              ]
            }
          ]
        },
        '/de/user/HyperBian.md'
      ]
    },
    {
      text: 'Erweitert',
      collapsible: false,
      children: [
        '/de/user/advanced/Advanced.md',
        '/de/user/advanced/CLI.md',            
        '/de/user/advanced/Support.md',
        '/de/user/advanced/Testing.md'
      ]
    }
  ],
  "/de/effects/": [
    {
      text: 'Effekte',
      collapsible: false,
      children: [
        '/de/effects/Effects.md',
        '/de/effects/API.md',
        '/de/effects/OurFirstEffect.md'
      ]
    },
    {
      text: 'Effekt UI',
      collapsible: false,
      children: [
        '/de/api/Ui'
      ]
    }
  ],
  "/de/json/": [
    {
      text: 'JSON',
      collapsible: false,
      children: [
        '/de/json/JSON.md',
        '/de/json/ServerInfo.md',
        '/de/json/Control.md',
        '/de/json/Authentication.md',
        '/de/json/Subscribe.md'
      ]
    },
    {
      text: 'Sonstiges',
      collapsible: false,
      children: [
        '/de/api/Detect.md',
        '/de/api/Guidelines.md'
      ]
    }
  ],
  "/de/api/": [
    {
      text: 'Gehe zurück zu',
      collapsible: false,
      children: [
        '/de/effects/Effects.md',
        '/de/json/JSON.md'
      ]
    }
  ]
}