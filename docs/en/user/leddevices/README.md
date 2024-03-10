---
prev: false
next: false
sidebarDepth: 0
---

# Overview
Hyperion supports many different controllers and LED devices. Also network communication is possible, therefore we also support Philips Hue, WLED and more.

::: tip 
In case your LED device is not working or shows as being disabled in the Dashboard or Remote Control, 
check Hyperion's log for errors first!

The error might already provide you a good indication what went wrong.
The log can be found under the "System" menu entry or you follow the link at the device's configuration page.
:::

## Configuration

::: tip 
By default, not all configuration items are displayed to allow quick and easy setup.

To display additional configuration items, change the [settings-level](/en/user/Configuration.html#settings-level).
:::

### General Settings
General settings you will find at every LED device type.

##### Hardware LED Count
The number of physical LEDs the device allows to be addressed.

::: details In case the Hardware LED Count is disabled
For some devices the input element is disabled as the number of LEDs is resolved automatically.

Failing to get a device's properties result in an error message provided to you. Check the configuration done or refresh the page.
:::

#### Advanced/Expert Settings

##### RGB Byte Order
The RGB byte order is configurable per LED device type. If you want to check or modify this value, use the "RGB Byte Order wizard" (Magic Wand).

##### Autostart
An LED device is started when Hyperion is brought up per default.
In case autostart is disabled, the device is to be switched on later manually or via API.

##### Connection attempts
Each LED device provides a retry to open capability.
If the number of connection attempts is exceeded the LED device will get in error state.

##### Retry interval
The number of seconds to be passed until the next retry attempt for connection is done.

### Specific Settings
Each LED device supports additional, device specific settings.
Some settings are common across the different device categories.

### Actions

##### Save settings
Allows to save the settings if the configuration is valid.
In case you have not configured an [LED-Layout](/en/user/advanced/Advanced.html#led-layout) yet, you have the option creating a default one and refine it later.
If the LEDs configured by the layout exceed the number of the hardware LED count, check and refine the configuration or the layout.

##### Identify
For some LED device types you can test the technical settings before saving or let the LEDs of the device light up for identification.

The button "Identify" is only activated, if the current configuration is valid.

## Controller Types

Hyperion supports multiple different LED devices which fall into four main categories:

### SPI/PWM
Are 3 or 4 wire LEDs which can be powered via SPI (Serial Peripheral Interface) or PWM (Pulse Width Modulation) of a Raspberry Pi or an Arduino (which is USB connected to your computer/HTPC/Pi).

* [APA102](/en/user/leddevices/spi_pwm/apa102)
* [APA104](/en/user/leddevices/spi_pwm/apa104)
* [LPD6803](/en/user/leddevices/spi_pwm/lpd6803)
* [LPD8806](/en/user/leddevices/spi_pwm/lpd8806)
* [P9813](/en/user/leddevices/spi_pwm/p9813)
* [SK6812](/en/user/leddevices/spi_pwm/SK6812)
* [SK9822](/en/user/leddevices/spi_pwm/SK9822)
* [WS2801](/en/user/leddevices/spi_pwm/ws2801)
* [WS2812](/en/user/leddevices/spi_pwm/ws2812)
* [pi-blaster](/en/user/leddevices/spi_pwm/piblaster)

#### PWM Prerequisites (Controller type RPi PWM/ws281x)
PWM (Pulse Width Modulation) requires that Hyperion run under the `root` user.\
In case you run Hyperion as a service: [Change the service user to 'root'](/en/user/Installation.html#change-the-service-user-to-root)

#### SPI Prerequisites (Controller type group RPi SPI)
On most systems the SPI (Serial Peripheral Interface) is not enabled per default and requires to be activated.
::: details Activate SPI

**Raspberry Pi / Raspberry Pi OS**

`sudo raspi-config nonint do_spi 0`

**Raspberry Pi / LibreELEC**

Add `dtparam=spi=on`to config.txt per [LibreELEC Wiki instructions](https://wiki.libreelec.tv/configuration/config_txt)
:::

In case you run more than 250 LEDs you need to increase the SPI buffer size

::: details Increase SPI Buffer

Add `spidev.bufsize=1024000` to the cmdline.txt
:::

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
* [Razer Chroma](/en/user/leddevices/network/razer)
* [Tinkerforge](/en/user/leddevices/network/tinkerforge)
* [TPM2.NET](/en/user/leddevices/network/tpm2net)
* [UDP ArtNet](/en/user/leddevices/network/udpartnet)
* [UDP DDP](/en/user/leddevices/network/udpddp)
* [UDP E1.31](/en/user/leddevices/network/udpe131)
* [UDP Raw](/en/user/leddevices/network/udpraw)
* [WLED](/en/user/leddevices/network/wled)
* [Yeelight](/en/user/leddevices/network/yeelight)

### Others
All other devices that do not fit into any categories.

* [File](/en/user/leddevices/others/debug)
