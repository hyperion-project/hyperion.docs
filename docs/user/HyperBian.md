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
  3. Install the [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager).
  4. Start the Pi Imager.
  5. Select your Raspberry Pi device + Click "Next" to continue.
  6. As operating system choose "Use Custom" at the bottom of the list.
  7. Select the downloaded HyperBian image file, click "Open" and "Next" to continue.
  8. Choose your storage device, i.e. your SD-Card and click "Next" to continue.
  9. Click "Write" to begin writing the image to the SD card.
  10. Wait until the image is written to the SD card.

:::::
::::: tab name="Etcher"

  3. Install [balenaEtcher](https://www.balena.io/etcher/).
  4. Start Etcher.
  5. Select "Flash from file" and choose the downloaded HyperBian image file.
  6. Select "Target" and choose your SD card.
  7. Click "Flash!" to begin writing the image.
  8. Wait until the image is written to the SD card
:::::

::::: tab name="Windows"
  3. Install [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/).
  4. Start Win32 Disk Imager.
  5. Select the downloaded HyperBian image file.
  6. Select your SD card device.
  7. Click "Write" to burn the image to the SD card.
:::::
::::::

When the SD-Card was prepared successfully, you can optionally prepare additional configuration files via the configuration wizards below.

Alternatively, you can edit the default ones provided along with the image. The Manual Configuration section of the Wifi- and System Configuration guide below supports you with the details on how to edit the content.
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

2. Click "Save Configuration" to save your customized `network-config` file.

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

:::::: details Prepare a System configuration

This tool helps you generate a system configuration file for your HyperBian installation.
Simply enter your system details below and click "Generate Config" to create a customized configuration file.

<SystemConfigGenerator />

#### How to Use

1. Fill out the form with your desired system settings:
 - **Username / Password**
 - **Hostname**
 - **Timezone**: - Timezones must be valid IANA time zone identifiers
 - **Locale**: must follow glibc locale naming and be supported by the system
 - **Keyboard layout**: Layouts must be valid XKB layout names 
 - **SPI**: Enable/Disable the SPI interface
 - **SSH**: Enable/Disable SSH access
2. Click "Save Configuration" to save your customized `user-data` file.
3. The generated configuration file will be saved in your downloads folder
4. Copy the `user-data` file into the boot partition of your HyperBian SD-Card.


#### What is the user-data file?

The `user_data` file is used by HyperBian during the first boot to configure your Raspberry Pi's setup. By placing this file in the boot partition, you can pre-configure settings like username, password, hostname, and more.

:::: details Manual Configuration

If you prefer to manually edit the configuration file, you can use the following template. Replace the placeholder or sample values with your desired configuration. You might need to uncomment selections to get them to work.
Note: You must generate an encryted password, e.g. via `openssl passwd -6 "YOUR_PASSWORD"` and replace YOUR_HYPERION_USERNAME_PASSWORD_ENCRYPTED by output.

```yaml
## template: jinja
#cloud-config

# This is the user-data configuration file for cloud-init. By default this sets
# up an initial user called "ubuntu" with password "ubuntu", which must be
# changed at first login. However, many additional actions can be initiated on
# first boot from this file. The cloud-init documentation has more details:
#
# https://cloudinit.readthedocs.io/
#
# Please note that the YAML format employed by this file is sensitive to
# differences in whitespace; if you are editing this file in an editor (like
# Notepad) which uses literal tabs, take care to only use spaces for
# indentation. See the following link for more details:
#
# https://en.wikipedia.org/wiki/YAML
#

##################################################################
## Configure your initial HyperBian system to your needs below ###
## Uncomment and edit the relevant sections as needed.         ###
##################################################################

# 1. Define the Hyperion user name (optional)
{% set HYPERION_USER = "YOUR_HYPERION_USERNAME" %}

# 2. Define, if ssh access should be enabled (optional)
{% set ENABLE_SSH = false %}

# 3. Set the system's hostname (optional)
hostname: YOUR_HYPERBIAN_HOSTNAME

# 4. Set the timezone for this instance (optional)
# the value of 'timezone' must exist in /usr/share/zoneinfo
# Run: timedatectl list-timezones

## Sample for Berlin timezone
#timezone: Europe/Berlin

# 5. Set the locale to a given locale; default: en_GB.UTF-8 (optional)
# Run: locale -a

## Sample for German locale
#locale: de_DE.UTF-8

# 6. Set up the keyboard layout (optional)
# See localectl(1), in particular the various list-x11-* sub-commands, 
# to determine the available models, layouts, variants, and options
# Run: localectl list-x11-keymap-layouts

## Sample for German keyboard layout
#keyboard:
#  layout: de

# 7. Enable the SPI interface (optional)
rpi:
  interfaces:
    spi: true

###############################
### DO NOT CHANGE THE BELOW ###
###############################

users:
- name: {{ HYPERION_USER }}
  gecos: Hyperion user
  groups: users, dialout, sudo, video, audio, gpio, spi, i2c
  sudo: ["ALL=(ALL) NOPASSWD:ALL"]
  lock_passwd: false
  passwd: "YOUR_HYPERION_USERNAME_PASSWORD_ENCRYPTED"
  shell: /bin/bash
 
ssh_pwauth: {{ ENABLE_SSH }}

runcmd:
  - |
    echo "Running setup for Hyperion user: {{ HYPERION_USER }}"
    /usr/share/hyperion/scripts/updateHyperionUser.sh -u "{{ HYPERION_USER }}"
    
{% if ENABLE_SSH %}
  - systemctl unmask ssh
  - systemctl enable ssh
  - systemctl start ssh
{% else %}
  - echo "SSH is disabled in config"
{% endif %}
```
> [!NOTE]
> The `passwd` field requires a SHA-512 encrypted password hash. The generator tool handles this for you.

::::
::::::

-> Now, put the SD-Card into your Raspberry Pi and start up the system.

::: info
The Raspberry Pi might boot in between while configurating the system.
:::

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
