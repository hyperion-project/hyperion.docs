---
prev: false
next: false
outline: [2, 3]
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

To display additional configuration items, change the [settings-level](/user/Configuration.md#settings-level).
:::

### General Settings
General settings you will find at every LED device type.

#### Hardware LED Count
The number of physical LEDs the device allows to be addressed.

::: details In case the Hardware LED Count is disabled
For some devices the input element is disabled as the number of LEDs is resolved automatically.

Failing to get a device's properties result in an error message provided to you. Check the configuration done or refresh the page.
:::

### Advanced/Expert Settings

#### RGB Byte Order
The RGB byte order is configurable per LED device type. If you want to check or modify this value, use the "RGB Byte Order wizard" (Magic Wand).

#### Autostart
An LED device is started when Hyperion is brought up per default.
In case autostart is disabled, the device is to be switched on later manually or via API.

#### Connection attempts
Each LED device provides a retry to open capability.
If the number of connection attempts is exceeded the LED device will get in error state.

#### Retry interval
The number of seconds to be passed until the next retry attempt for connection is done.

### Specific Settings
Each LED device supports additional, device specific settings.
Some settings are common across the different device categories.

### Actions

#### Save settings
Allows to save the settings if the configuration is valid.
In case you have not configured an [LED-Layout](/user/advanced/Advanced.md#led-layout) yet, you have the option creating a default one and refine it later.
If the LEDs configured by the layout exceed the number of the hardware LED count, check and refine the configuration or the layout.

#### Identify
For some LED device types you can test the technical settings before saving or let the LEDs of the device light up for identification.

The button "Identify" is only activated, if the current configuration is valid.

## Controller Types

Hyperion supports multiple different LED devices which fall into four main categories:

### SPI/PWM
Are 3 or 4 wire LEDs which can be powered via SPI (Serial Peripheral Interface) or PWM (Pulse Width Modulation) of a Raspberry Pi or an Arduino (which is USB connected to your computer/HTPC/Pi).

* [APA102](/user/leddevices/spi_pwm/apa102.md)
* [APA104](/user/leddevices/spi_pwm/apa104.md)
* [LPD6803](/user/leddevices/spi_pwm/lpd6803.md)
* [LPD8806](/user/leddevices/spi_pwm/lpd8806.md)
* [P9813](/user/leddevices/spi_pwm/p9813.md)
* [SK6812](/user/leddevices/spi_pwm/sk6812.md)
* [SK9822](/user/leddevices/spi_pwm/sk9822.md)
* [WS2801](/user/leddevices/spi_pwm/ws2801.md)
* [WS2812B](/user/leddevices/spi_pwm/ws2812b.md)
* [pi-blaster](/user/leddevices/spi_pwm/piblaster.md)

#### PWM Prerequisites (Controller type RPi PWM/ws281x)
PWM (Pulse Width Modulation) requires that Hyperion run under the `root` user.\
In case you run Hyperion as a service: [Change the service user to 'root'](/user/GettingStarted.md#change-the-service-user-to-root)

#### SPI Prerequisites (Controller type group RPi SPI)
On most systems the SPI (Serial Peripheral Interface) is not enabled per default and requires to be activated.
::: details Activate SPI

For non RPi-devices, please check your device's documentation.

SPI activation for Raspberry Pi devices is dependend on the Operating System you run:

* **Raspberry Pi OS**

`sudo raspi-config nonint do_spi 0`

* **LibreELEC**

Add `dtparam=spi=on`to config.txt per [LibreELEC Wiki instructions](https://wiki.libreelec.tv/configuration/config_txt)

* **CoreELEC / OSMC**

You can activate SPI via the Hardware tab under Settings

* **Other**

Please check the system documentation.

:::

In case you run more than 250 LEDs you need to increase the SPI buffer size

::: details Increase SPI Buffer

Add `spidev.bufsize=1024000` to the cmdline.txt.

Configuration on Raspberry Pi devices is dependend on the Operating System you run:

* **Raspberry Pi OS**

Edit the cmdline.txt file in the boot partition located at `/boot/firmware/`.

**Note**: Prior to the Bookworm version, it was located at `/boot/`. 

* **LibreELEC**

Edit the cmdline.txt file the same way as [config.txt](https://wiki.libreelec.tv/configuration/config_txt)
:::

### USB/Serial
Plug and play. The following controllers are supported.

* [Adalight](/user/leddevices/usb/adalight.md)
* [Atmo](/user/leddevices/usb/atmo.md)
* [DMX](/user/leddevices/usb/dmx.md)
* [Hyperion-USBasp](/user/leddevices/usb/hyperion-usbasp.md)
* [Karate](/user/leddevices/usb/karate.md)
* [Lightpack](/user/leddevices/usb/lightpack.md)
* [Multi-Lightpack](/user/leddevices/usb/multilightpack.md)
* [Paintpack](/user/leddevices/usb/paintpack.md)
* [RawHID](/user/leddevices/usb/rawhid.md)
* [SEDU](/user/leddevices/usb/sedu.md)
* [TPM2](/user/leddevices/usb/tpm2.md)

### Network
Everything that is reachable over network.

* [AtmoOrb](/user/leddevices/network/atmoorb.md)
* [Cololight](/user/leddevices/network/cololight.md)
* [FadeCandy](/user/leddevices/network/fadecandy.md)
* [Nanoleaf](/user/leddevices/network/nanoleaf.md)
* [Philips Hue](/user/leddevices/network/philipshue.md)
* [Razer Chroma](/user/leddevices/network/razer.md)
* [Tinkerforge](/user/leddevices/network/tinkerforge.md)
* [TPM2.NET](/user/leddevices/network/tpm2net.md)
* [UDP ArtNet](/user/leddevices/network/udpartnet.md)
* [UDP DDP](/user/leddevices/network/udpddp.md)
* [UDP E1.31](/user/leddevices/network/udpe131.md)
* [UDP Raw](/user/leddevices/network/udpraw.md)
* [WLED](/user/leddevices/network/wled.md)
* [Yeelight](/user/leddevices/network/yeelight.md)

### Others
All other devices that do not fit into any categories.

* [File](/user/leddevices/others/debug.md)
