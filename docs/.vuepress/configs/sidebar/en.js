export const sidebar_EN = {
  "/user/": [
    {
      text: 'General',
      collapsible: false,
      children: [
        '/user/Introduction.md',
        '/user/Installation.md',
        '/user/Configuration.md',
        {
          text: 'LED Hardware',
          collapsible: true,
          children: [
            '/user/leddevices/Overview.md',
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
                '/user/leddevices/spi_pwm/ws2812b.md',
                '/user/leddevices/spi_pwm/piblaster.md'
              ]
            },
            {
              text: 'USB/Serial',
              collapsible: true,
              children: [
                '/user/leddevices/usb/adalight.md',
                '/user/leddevices/usb/atmo.md',
                '/user/leddevices/usb/dmx.md',
                '/user/leddevices/usb/hyperion-usbasp.md',
                '/user/leddevices/usb/karate.md',
                '/user/leddevices/usb/lightpack.md',
                '/user/leddevices/usb/multilightpack.md',
                '/user/leddevices/usb/paintpack.md',
                '/user/leddevices/usb/rawhid.md',
                '/user/leddevices/usb/sedu.md',
                '/user/leddevices/usb/tpm2.md'
              ]
            },
            {
              text: 'Network',
              collapsible: true,
              children: [
                '/user/leddevices/network/atmoorb.md',
                '/user/leddevices/network/cololight.md',
                '/user/leddevices/network/fadecandy.md',
                '/user/leddevices/network/nanoleaf.md',
                '/user/leddevices/network/philipshue.md',
                '/user/leddevices/network/razer.md',
                '/user/leddevices/network/tinkerforge.md',
                '/user/leddevices/network/tpm2net.md',
                '/user/leddevices/network/udpartnet.md',
                '/user/leddevices/network/udpe131.md',
                '/user/leddevices/network/udph801.md',
                '/user/leddevices/network/udpraw.md',
                '/user/leddevices/network/wled.md',
                '/user/leddevices/network/yeelight.md'
              ]
            },
            {
              text: 'Others',
              collapsible: true,
              children: [
                '/user/leddevices/others/debug.md'
              ]
            }
          ]
        },
        '/user/HyperBian.md'
      ]
    },
    {
      text: 'Advanced',
      collapsible: false,
      children: [
        '/user/advanced/Advanced.md',
        '/user/advanced/CLI.md',          
        '/user/advanced/Support.md',
        '/user/advanced/Testing.md'
      ]
    }
  ],
  "/effects/": [
    {
      text: 'Effects',
      collapsible: false,
      children: [
        '/effects/Effects.md',
        '/effects/API.md',
        '/effects/OurFirstEffect.md'
      ]
    },
    {
      text: 'Effects UI',
      collapsible: false,
      children: [
        '/api/Ui.md'
      ]
    }
  ],
  "/json/": [
    {
      text: 'JSON',
      collapsible: false,
      children: [
        '/json/JSON.md',
        '/json/ServerInfo.md',
        '/json/Control.md',
        '/json/Authentication.md',
        '/json/Subscribe.md'
      ]
    },
    {
      text: 'Misc',
      collapsible: false,
      children: [
        '/api/Detect.md',
        '/api/Guidelines.md'
      ]
    }
  ],
  "/api/": [
    {
      text: 'Go back to',
      collapsible: false,
      children: [
        '/effects/Effects.md',
        '/json/JSON.md'
      ]
    }
  ]
};