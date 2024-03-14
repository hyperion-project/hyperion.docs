export const sidebar_EN = {
  "/user/": [
    {
      text: 'General',
      collapsible: false,
      children: [
        '/user/',
        '/user/Installation.md',
        '/user/Configuration.md',
        {
          text: 'LED Hardware',
          collapsible: true,
          children: [
            '/user/leddevices/',
            {
              text: 'SPI/PWM',
              collapsible: true,
              children: [
                '/user/leddevices/spi_pwm/apa102.md',
                '/user/leddevices/spi_pwm/apa104.md',
                '/user/leddevices/spi_pwm/lpd6803.md',
                '/user/leddevices/spi_pwm/lpd8806.md',
                '/user/leddevices/spi_pwm/p9813.md',
                '/user/leddevices/spi_pwm/sk6812.md',
                '/user/leddevices/spi_pwm/sk6822.md',
                '/user/leddevices/spi_pwm/sk9822.md',
                '/user/leddevices/spi_pwm/ws2801.md',
                '/user/leddevices/spi_pwm/ws2812.md',
                '/user/leddevices/spi_pwm/piblaster.md'
              ]
            },
            {
              text: 'USB/Serial',
              collapsible: true,
              children: [
                '/user/leddevices/usb/adalight',
                '/user/leddevices/usb/atmo',
                '/user/leddevices/usb/dmx',
                '/user/leddevices/usb/hyperion-usbasp',
                '/user/leddevices/usb/karate',
                '/user/leddevices/usb/lightpack',
                '/user/leddevices/usb/multilightpack',
                '/user/leddevices/usb/paintpack',
                '/user/leddevices/usb/rawhid',
                '/user/leddevices/usb/sedu',
                '/user/leddevices/usb/tpm2'
              ]
            },
            {
              text: 'Network',
              collapsible: true,
              children: [
                '/user/leddevices/network/atmoorb',
                '/user/leddevices/network/cololight',
                '/user/leddevices/network/fadecandy',
                '/user/leddevices/network/nanoleaf',
                '/user/leddevices/network/philipshue',
                '/user/leddevices/network/razer',
                '/user/leddevices/network/tinkerforge',
                '/user/leddevices/network/tpm2net',
                '/user/leddevices/network/udpartnet',
                '/user/leddevices/network/udpe131',
                '/user/leddevices/network/udph801',
                '/user/leddevices/network/udpraw',
                '/user/leddevices/network/wled',
                '/user/leddevices/network/yeelight'
              ]
            },
            {
              text: 'Others',
              collapsible: true,
              children: [
                '/user/leddevices/others/debug'
              ]
            }
          ]
        },
        '/user/HyperBian',
      ]
    },
    {
      text: 'Advanced',
      collapsible: false,
      children: [
        '/user/advanced/Advanced',
        '/user/advanced/CLI',          
        '/user/advanced/Support',
        '/user/advanced/Testing',
      ]
    }
  ],
  "/effects/": [
    {
      text: 'Effects',
      collapsible: false,
      children: [
        '/effects/',
        '/effects/API',
        '/effects/OurFirstEffect',
      ]
    },
    {
      text: 'Effects UI',
      collapsible: false,
      children: [
        '/api/Ui'
      ]
    }
  ],
  "/json/": [
    {
      text: 'JSON',
      collapsible: false,
      children: [
        '/json/',
        '/json/ServerInfo',
        '/json/Control',
        '/json/Authentication',
        '/json/Subscribe',
      ]
    },
    {
      text: 'Misc',
      collapsible: false,
      children: [
        '/api/Detect',
        '/api/Guidelines'
      ]
    }
  ],
  "/api/": [
    {
      text: 'Go back to',
      collapsible: false,
      children: [
        '/effects/',
        '/json/'
      ]
    }
  ]
};