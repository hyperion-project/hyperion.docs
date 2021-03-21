---
prev: false
next: false
sidebarDepth: 0
---

# Overview
Hyperion supports a lot of different controllers and led chips. Also network communication is possible, therefore we also support Philips Hue, WLED and more.

## General Settings
The RGB byte order is applicable for all led hardware implementations. If you want to check this value, use the wizard.

## Specific Settings
Each LED hardware falls under one of the 4 categories and has specific settings:

### SPI
Are 3 or 4 wire leds which can be powered via SPI of a Raspberry Pi or an Arduino (which is USB connected to your computer/HTPC/Pi).

* [APA102](/en/user/leddevices/spi/apa102)
* [APA104](/en/user/leddevices/spi/apa104)
* [LPD6803](/en/user/leddevices/spi/lpd6803)
* [LPD8806](/en/user/leddevices/spi/lpd8806)
* [P9813](/en/user/leddevices/spi/p9813)
* [SK6812](/en/user/leddevices/spi/SK6812)
* [SK9822](/en/user/leddevices/spi/SK9822)
* [WS2801](/en/user/leddevices/spi/ws2801)
* [WS2812](/en/user/leddevices/spi/ws2812)

### GPIO
Controllers/LEDs that can be controlled via PWM (Pulse Width Modulation) of a Raspberry Pi.

* [PiBlaster](/en/user/leddevices/gpio/piblaster)

### USB/Serial
Plug and play. The following controllers are supported.

* [Adalight](/en/user/leddevices/usb/adalight)
* [Atmo](/en/user/leddevices/usb/atmo)
* [DMX](/en/user/leddevices/usb/dmx)
* [Hyperion-USBasp](/en/user/leddevices/usb/hyperion-usbasp)
* [Karate](/en/user/leddevices/usb/karate)
* [Lightpack](/en/user/leddevices/usb/lightpack)
* [Multi-Lightpack](/en/user/leddevices/usb/multilightpack)
* [Paintpack](/en/user/leddevices/usb/paintpack)
* [RawHID](/en/user/leddevices/usb/rawhid)
* [SEDU](/en/user/leddevices/usb/sedu)
* [TPM2](/en/user/leddevices/usb/tpm2)

### Network
Everything that is reachable over network.

* [AtmoOrb](/en/user/leddevices/network/atmoorb)
* [Cololight](/en/user/leddevices/network/cololight)
* [FadeCandy](/en/user/leddevices/network/fadecandy)
* [Nanoleaf](/en/user/leddevices/network/nanoleaf)
* [Philips Hue](/en/user/leddevices/network/philipshue)
* [Tinkerforge](/en/user/leddevices/network/tinkerforge)
* [TPM2.NET](/en/user/leddevices/network/tpm2net)
* [UDP ArtNet ](/en/user/leddevices/network/udpartnet)
* [UDP E1.31](/en/user/leddevices/network/udpe131)
* [UDP Raw](/en/user/leddevices/network/udpraw)
* [WLED](/en/user/leddevices/network/wled)
* [Yeelight](/en/user/leddevices/network/yeelight)

### Debug
Only suitable for experts.

* [File](/en/user/leddevices/debug)