# HyperBian
Is a ready to use image for your Raspberry Pi. Based on the original Raspberry Pi Foundation image "Raspberry Pi OS Lite". Hyperion is already pre installed. So simply
1. Download
2. Burn image on SD 
3. Power on your Pi
4. Visit with your Browser `http://IpOfYourPi:8090` for configuration

## Requirements
  * SD card with at least 4GB size
  * Raspberry Pi
  * Linux/Mac/Windows + SD card read/writer

## Installation
  1. Download the ready-made [HyperBian Image](https://github.com/Hyperion-Project/HyperBian/releases)
  2. Install the [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager) in support of burning the image to an SD card.
  3. Start the Pi Imager
  4. As operating system choose "Custom OS" and provide the downloaded HyperBian-XXXX package
  5. Choose your target storage, i.e. your SD-Card
  6. Click "Next" and select "No" for no extra customization
  7. The HyperBian image should be written to the SD Card
  8. Put the SD-Card into your Raspberry Pi and start up the system

### WiFi, timezone & ssh access
In case you want to use WiFi with your Raspberry Pi or update the timezone or other OS related configuration, you can use the Pi Imager OS customisation screen.
At installation step 6., select "Edit Settings" and then e.g. provide the WiFi SSID, password and country.
"Save" the settings and proceed with "Yes" to start the imaging process.

::: tip Use HyperBian's default user (and password), if asked for
 - User: `hyperion`
 - Password: `ambientlight`
 
You can choose a different username, but then take care to update Hyperion's preconfigured service later.
To update the service to the [current service user](/en/user/Installation.html#change-the-service-user-to-the-current-user)
:::

The configuration will happening during the first boot.

::: details Alternative way

In case you are not using PI Imager or do not want providing the details via the Customisation screen,
you can also setup addition details via file.

Create a file named `custom.toml`.
Customise the file with the setup you are looking for. Comment out element not to be changed.

Store the file in the SD-Card boot portition.

**Sample - custom.toml**

``` toml
# Required:
config_version = 1

[system]
hostname = "HyperBian"

[user]
name = "hyperion"
# The password can be encrypted or plain. To encrypt, we can use "openssl passwd -5 raspberry"
password = "ambientlight"
password_encrypted = false

[ssh]
# ssh_import_id = "gh:user" # import public keys from github
enabled = false
password_authentication = true
# We can also seed the ssh public keys configured for the default user:
# authorized_keys = [ "ssh-rsa ... user@host", ... ]

[wlan]
ssid = "myWifi"
password = "myWifiPassword"
password_encrypted = false
hidden = false
# The country is written to /etc/default/crda
# Reference: https://wireless.wiki.kernel.org/en/developers/Regulatory
country = "DE"

[locale]
keymap = "de"
timezone = "Europe/Berlin"
```
:::


#### Default SSH LOGIN
 - User: `hyperion`
 - Password: `ambientlight`
 
::: tip
HyperBian is shipped with an English keyboard configured. If you do not own an English keyboard some keys might be found at a different place.
For the first time login, type as you would have an English keyboard; after logging in successfully you can update to your keyboard layout via `sudo raspi-config`.
:::

