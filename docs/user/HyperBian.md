# HyperBian
Is a ready to use image for your Raspberry Pi. Based on the original Raspberry Pi Foundation image "Raspberry Pi OS Lite". Hyperion is already pre installed. So simply
1. [Download](https://github.com/Hyperion-Project/HyperBian/releases)
2. Burn image on SD 
3. Power on your Pi
4. Visit with your Browser `http://IpOfYourPi:8090` for configuration

## Requirements
  * SD card with at least 4GB size
  * Raspberry Pi
  * Linux/Mac/Windows + SD card read/writer

## Installation
  1. Download the ready-made [HyperBian Image](https://github.com/Hyperion-Project/HyperBian/releases)
  2. Download your preferred tool in support of burning the image to an SD card

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Pi Imager"
  3. Install the [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager) 
  4. Start the Pi Imager
  5. Select your Raspberry Pi device + Click "Next" to continue
  6. As operating system choose "Use Custom" at the bottom of the list
  7. Select the downloaded HyperBian image file, click "Open" and "Next" to continue
  8. Choose your storage device, i.e. your SD-Card and click "Next" to continue
  9. Click "Write" to begin writing the image to the SD card
  10. Wait until the image is written to the SD card

:::::
::::: tab name="Etcher"

  3. Install [balenaEtcher](https://www.balena.io/etcher/)
  4. Start Etcher.
  5. Select "Flash from file" and choose the downloaded HyperBian image file.
  6. Select "Target" and choose your SD card.
  7. Click "Flash!" to begin writing the image.
  8. Wait until the image is written to the SD card
:::::

::::: tab name="Windows"
  On Windows, you can also use the `win32diskimager`.

  3. Install and start [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/).
  4. Select the downloaded HyperBian image file.
  5. Select your SD card device.
  6. Click "Write" to burn the image to the SD card.
:::::
::::::

When the SD-Card was prepared sucessfully, you can optionally prepare additional configuration files.
> [!IMPORTANT]
> Save the configuration file(s) in the boot partition of your SD-Card.
The configuration will then happen during the first boot.

:::::: details Prepare a WiFi Configuration

This tool helps you generate a WiFi configuration file for your HyperBian installation.
Simply enter your network details below and click "Generate Config" to create a customized configuration file.

<WifiConfigGenerator />

#### How to Use

1. Enter your network details:
   - **SSID**: Your WiFi network name
   - **Password**: Your WiFi password
   - **Country**: Your two-letter country code (e.g., DE, US, GB, FR)

2. Click "Save WiFi Config" to save your customized `network-config` configuration file.

3. The generated configuration file will be saved in your downloads folder

4. Copy the `network-config` file into the boot partition of your HyperBian SD-Card.

#### What is the network-config file?

The `network-config` file is used by HyperBian during the first boot to configure your Raspberry Pi's WiFi connection. By placing this file in the boot partition before the first startup, your device will automatically connect to your WiFi network.

:::: details Manual Configuration

If you prefer to manually edit the configuration file, you can use the following template:

```yaml
####################################################################################
## Configure your initial HyperBian Wifi connectivity to your needs below.
## Uncomment and edit the relevant sections as needed.
##
## If you have additional needs refer to the cloud-init documentation 
## and the netplan reference for full details:
##
## https://netplan.io/reference
## https://cloudinit.readthedocs.io/en/latest/topics/network-config.html
## https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html
####################################################################################

network:
  version: 2 
  wifis:
    wlan0:
      dhcp4: true
      optional: true
      access-points:
        "YOUR_SSID":
          password: "YOUR_PASSWORD"
      regulatory-domain: YOUR_COUNTRY_CODE
```

Replace `YOUR_SSID`, `YOUR_PASSWORD`, and `YOUR_COUNTRY_CODE` with your actual values.
::::

:::: tip
For a list of country codes, refer to the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
::::

::::::

::: details Prepare a System configuration file
:::


-> Now, put the SD-Card into your Raspberry Pi and start up the system

### Default Configuration
... unless changed by custom configuration files

::: tip HyperBian's default user and password
 - User: `hyperion`
 - Password: `ambientlight`
:::

::: tip
HyperBian is shipped with an English keyboard configured. If you do not own an English keyboard some keys might be found at a different place.
For the first time login, type as you would have an English keyboard.
:::

::: tip
After logging in successfully you can update any configuration via `sudo raspi-config` too.
:::
