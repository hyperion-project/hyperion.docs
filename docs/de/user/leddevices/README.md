---
prev: false
next: false
sidebarDepth: 0
---

# Übersicht
Hyperion unterstützt eine Menge verschiedener Controller und LED-Chips. Auch eine Netzwerkkommunikation ist möglich, daher unterstützen wir auch Philips Hue, WLED und mehr.

## Allgemeine Einstellungen
Die RGB-Byte-Reihenfolge gilt für alle LED-Hardware-Implementierungen. Wenn du diesen Wert überprüfen willst, verwende den Assistenten.

## Spezifische Einstellungen
Jede LED-Hardware fällt unter eine der 4 Kategorien und hat bestimmte Einstellungen:

### SPI
Sind 3- oder 4-leitige Leds, die über SPI von einem Raspberry Pi oder einem Arduino (der über USB mit deinem) Computer/HTPC/Pi verbunden ist, versorgt werden können.

* [APA102](/de/user/leddevices/spi/apa102)
* [APA104](/de/user/leddevices/spi/apa104)
* [LPD6803](/de/user/leddevices/spi/lpd6803)
* [LPD8806](/de/user/leddevices/spi/lpd8806)
* [P9813](/de/user/leddevices/spi/p9813)
* [SK6812](/de/user/leddevices/spi/SK6812)
* [SK9822](/de/user/leddevices/spi/SK9822)
* [WS2801](/de/user/leddevices/spi/ws2801)
* [WS2812](/de/user/leddevices/spi/ws2812)

### GPIO
Kontroller/LEDs, die über PWM (Pulsweitenmodulation) eines Raspberry Pi gesteuert werden können.

* [PiBlaster](/de/user/leddevices/gpio/piblaster)

### USB/Seriell
Plug and Play. Die folgenden Kontroller werden unterstützt.

* [Adalight](/de/user/leddevices/usb/adalight)
* [Atmo](/de/user/leddevices/usb/atmo)
* [DMX](/de/user/leddevices/usb/dmx)
* [Hyperion-USBasp](/de/user/leddevices/usb/hyperion-usbasp)
* [Karate](/de/user/leddevices/usb/karate)
* [Lightpack](/de/user/leddevices/usb/lightpack)
* [Multi-Lightpack](/de/user/leddevices/usb/multilightpack)
* [Paintpack](/de/user/leddevices/usb/paintpack)
* [RawHID](/de/user/leddevices/usb/rawhid)
* [SEDU](/de/user/leddevices/usb/sedu)
* [TPM2](/de/user/leddevices/usb/tpm2)

### Netzwerk
Alles, was über das Netzwerk erreichbar ist.

* [AtmoOrb](/de/user/leddevices/network/atmoorb)
* [Cololight](/de/user/leddevices/network/cololight)
* [FadeCandy](/de/user/leddevices/network/fadecandy)
* [Nanoleaf](/de/user/leddevices/network/nanoleaf)
* [Philips Hue](/de/user/leddevices/network/philipshue)
* [Tinkerforge](/de/user/leddevices/network/tinkerforge)
* [TPM2.NET](/de/user/leddevices/network/tpm2net)
* [UDP ArtNet ](/de/user/leddevices/network/udpartnet)
* [UDP E1.31](/de/user/leddevices/network/udpe131)
* [UDP Raw](/de/user/leddevices/network/udpraw)
* [WLED](/de/user/leddevices/network/wled)
* [Yeelight](/de/user/leddevices/network/yeelight)

### Sonstige
Alle anderen Geräte, die in keine der Kategorien passen.

* [File](/de/user/leddevices/debug)