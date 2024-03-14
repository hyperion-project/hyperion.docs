export const sidebar_DE = {
  "/de/": [
    {
      text: 'Allgemein',
      collapsible: false,
      children: [
        '/de/user/',
        '/de/user/Installation',
        '/de/user/Konfiguration',
        {
          text: 'LED Hardware',
          collapsible: true,
          children: [
            '/de/user/leddevices/',
            {
              text: 'SPI/PWM',
              collapsible: true,
              children: [
                '/de/user/leddevices/spi_pwm/apa102',
                '/de/user/leddevices/spi_pwm/apa104',
                '/de/user/leddevices/spi_pwm/lpd6803',
                '/de/user/leddevices/spi_pwm/lpd8806',
                '/de/user/leddevices/spi_pwm/p9813',
                '/de/user/leddevices/spi_pwm/sk6812',
                '/de/user/leddevices/spi_pwm/sk6822',
                '/de/user/leddevices/spi_pwm/sk9822',
                '/de/user/leddevices/spi_pwm/ws2801',
                '/de/user/leddevices/spi_pwm/ws2812',
                '/de/user/leddevices/spi_pwm/piblaster'
              ]
            },
            {
              text: 'USB/Serial',
              collapsible: true,
              children: [
                '/de/user/leddevices/usb/adalight',
                '/de/user/leddevices/usb/atmo',
                '/de/user/leddevices/usb/dmx',
                '/de/user/leddevices/usb/hyperion-usbasp',
                '/de/user/leddevices/usb/karate',
                '/de/user/leddevices/usb/lightpack',
                '/de/user/leddevices/usb/multilightpack',
                '/de/user/leddevices/usb/paintpack',
                '/de/user/leddevices/usb/rawhid',
                '/de/user/leddevices/usb/sedu',
                '/de/user/leddevices/usb/tpm2',
              ]
            },
            {
              text: 'Network',
              collapsible: true,
              children: [
                '/de/user/leddevices/network/atmoorb',
                '/de/user/leddevices/network/cololight',
                '/de/user/leddevices/network/fadecandy',
                '/de/user/leddevices/network/nanoleaf',
                '/de/user/leddevices/network/philipshue',
                '/de/user/leddevices/network/razer',
                '/de/user/leddevices/network/tinkerforge',
                '/de/user/leddevices/network/tpm2net',
                '/de/user/leddevices/network/udpartnet',
                '/de/user/leddevices/network/udpe131',
                '/de/user/leddevices/network/udph801',
                '/de/user/leddevices/network/udpraw',
                '/de/user/leddevices/network/wled',
                '/de/user/leddevices/network/yeelight'
              ]
            },
            {
              text: 'Others',
              collapsible: true,
              children: [
                '/de/user/leddevices/others/debug'
              ]
            }
          ]
        },
        '/de/user/HyperBian'
      ]
    },
    {
      text: 'Erweitert',
      collapsible: false,
      children: [
        '/de/user/advanced/Advanced',
        '/de/user/advanced/CLI',            
        '/de/user/advanced/Support',
        '/de/user/advanced/Testing',
      ]
    }
  ],
  "/de/effects/": [
    {
      text: 'Effekte',
      collapsible: false,
      children: [
        '/de/effects/',
        '/de/effects/API',
        '/de/effects/OurFirstEffect',
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
        '/de/json/',
        '/de/json/ServerInfo',
        '/de/json/Control',
        '/de/json/Authentication',
        '/de/json/Subscribe',
      ]
    },
    {
      text: 'Sonstiges',
      collapsible: false,
      children: [
        '/de/api/Detect',
        '/de/api/Guidelines'
      ]
    }
  ],
  "/de/api/": [
    {
      text: 'Gehe zurück zu',
      collapsible: false,
      children: [
        '/de/effects/',
        '/de/json/'
      ]
    }
  ]
};