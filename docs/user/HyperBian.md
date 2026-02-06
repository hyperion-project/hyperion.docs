# HyperBian
HyperBian is a set of ready-to-use images for Raspberry Pi.

It's based on the original Raspberry Pi Foundation's image, "Raspberry Pi OS Lite," previously called Raspbian. Thus, Hyperion and Raspbian form HyperBian.

Here is a high-level overview of the installation process:
1. [Download](https://github.com/Hyperion-Project/HyperBian/releases) the HyperBian image for your Raspberry Pi.
2. Write the image to a microSD card from a PC.
3. Optionally, customize your Raspberry Pi's Wi-Fi network or system settings, like language or time zone.
4. Insert the SD card and power on your Pi.
5. In a web browser, navigate to `http://IP.OfYour.RPi:8090` to access the Hyperion web interface.

## Requirements
  * Raspberry Pi
  * PC running Linux, macOS, or Windows
  * microSD or SD card reader
      * For SD card readers, use a [microSD-to-SD adapter](https://en.wikipedia.org/wiki/SD_card#Adapters)
  * microSD card with minimum 4 GB capacity
  
## Installation Instructions
  1. Download the appropriate [HyperBian image](https://github.com/Hyperion-Project/HyperBian/releases) for your Raspberry Pi [hardware](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html).
  
     If using Raspberry Pi 1, 2 or Zero v1, download the asset with `armhf` in the filename.\
     For all other versions of Raspberry Pi, download the file with `arm64`.

  2. Extract the `.zip` file. You should now have a `.img` file.

  3. Download and install your preferred tool for writing images to SD cards. The following instructions will cover these tools:

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Raspberry Pi Imager"
  4. Download and install the [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager).
  5. Start `Raspberry Pi Imager`.
  6. At the Device step, select your Raspberry Pi device.
  7. At the OS step, select `Use custom` at the bottom of the list.
  8. Select the extracted HyperBian `.img` file.
  9. At the Storage step, select your microSD card.
  10. At the Writing step, confirm the installation details, and click the "Write" button to begin writing the image to the SD card.
  11. Wait until the image is written to the SD card.

:::::
::::: tab name="balenaEtcher"
  4. Download and install [balenaEtcher](https://www.balena.io/etcher/).
  5. Start balenaEtcher.
  6. Click the `Flash from file` button. 
  7. Select the extracted HyperBian `.img` file.
  8. Click the `Select "Target` button, and choose your SD card.
  9.  Click the `Flash!` button to begin writing the image to the SD card.
  10. Wait until the image is written to the SD card.
:::::

::::: tab name="Win32 Disk Imager"
  4. Download and install [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/).
  5. Start Win32DiskImager.
  6. In the Image File section, click the blue folder icon and select the extracted HyperBian `.img` file.
  7. In the Device section, select the drive letter corresponding to your SD card device.
  8. Click the `Write` button to write the image to the SD card.
  9.  Wait until the image is written to the SD card.
:::::
::::::

After the HyperBian image is written to the SD card successfully, you can optionally customize the Raspberry Pi configuration.

1. Before first boot, prepare Wi-Fi and/or System configuration files.
2. After first boot, run the `raspi-config` command from the CLI.

### Configuration Files
Wi-Fi and System configuration files can be generated using the wizard tools below or by directly editing the configuration files already provided by the image.

> [!IMPORTANT]
> Save the configuration file(s) in the boot partition of your SD card. The configuration will then take place after the first boot.

:::::: details Prepare a Wi-Fi configuration file

<WifiConfigGenerator />

#### How to Use the WiFi Configuration Generator

1. Enter your network details:
   - **SSID**: Your Wi-Fi network name
   - **Password**: Your Wi-Fi password
   - **Country**: Your two-letter country code, e.g., DE, US, GB, FR.

      :::: tip
      For a list of country codes, refer to the [ISO 3166-1 alpha-2 standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
      ::::

2. Click the `Save Configuration` button to save your customized `network-config` file.

      - If your browser asks where to save the file, select the destination folder. Otherwise, it will be saved to the default location, e.g., the `Downloads` folder.

3. Copy the `network-config` file into the `boot` partition of your HyperBian SD card.

#### What is the `network-config` file?

The `network-config` file is used by HyperBian during the first boot to configure your Raspberry Pi's Wi-Fi connection. By placing this file in the boot partition before the first startup, your device will automatically connect to your Wi-Fi network.

This wizard tool helps you generate a Wi-Fi configuration file for your HyperBian installation.

Simply enter your network details below, and click "Generate Config" to create a customized configuration file.

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

::::::

:::::: details Prepare a System configuration file

This wizard tool helps you generate a system configuration file for your HyperBian installation.

Simply enter your system details below, and click "Generate Config" to create a customized configuration file.

<SystemConfigGenerator />

#### How to Use the System Configuration Generator

1. Fill out the form with your desired system settings:
    - **Username**

    - **Password**

    - **Hostname**: If your network supports [mDNS](https://www.raspberrypi.com/documentation/computers/remote-access.html#resolve-raspberrypi-local-with-mdns), also known as Bonjour or Avahi, then the hostname can be used to access your Hyperion web interface, i.e., `http://hostname.local:8090`.

    - When you tick the checkbox for the following three settings, a dropdown menu will appear. Select your desired option from the dropdown menu.

        - **Set Timezone**: Timezones must be valid [IANA time zone identifiers](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones#List).

        - **Set Locale**: Locale must follow [glibc locale naming](https://github.com/bminor/glibc/blob/master/localedata/SUPPORTED) and be supported by the system.

        - **Set Keyboard layout**: Layouts must be valid XKB layout names.

    - **Enable SPI Interface**: Enable or disable the SPI interface. Enable if your LEDs communicate using the Raspberry Pi's [SPI pins](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#alternative-functions) in the GPIO.

    - **Enable SSH Access**: Enable or disable SSH access. Enable if you want remote access to the CLI, e.g., to [change the service user](https://docs.hyperion-project.org/user/gettingstarted/Overview.html#change-the-service-user) to use WS281x LEDs with the Raspberry Pi's [PWM pins](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#alternative-functions) in the GPIO.

2. Click `Save Configuration` to save your customized `user-data` file.

    - If your browser asks where to save the file, select the destination folder. Otherwise, it will be saved to the default location, e.g., the `Downloads` folder.

3. Copy the `user-data` file into the `boot` partition of your HyperBian SD card.


#### What is the `user-data` file?

The `user_data` file is used by HyperBian during the first boot to configure your Raspberry Pi's setup. By placing this file in the boot partition, you can pre-configure settings like username, password, hostname, and more.

:::: details Manual Configuration

If you prefer to manually edit the configuration file, you can use the following template.

Replace the placeholder or sample values with your desired configuration. You might need to uncomment selections to get them to work.

```yaml
## template: jinja
#cloud-config

# This is the user-data configuration file for cloud-init.
# Many additional actions can be initiated on first boot from this file.
# The cloud-init documentation has more details:
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

####################################################
### DO NOT CHANGE THE BELOW BESIDES THE PASSWORD ###
####################################################

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
> The `passwd` field requires a SHA-512 encrypted password hash, e.g. run `openssl passwd -6 "YOUR_PASSWORD"` and replace `YOUR_HYPERION_USERNAME_PASSWORD_ENCRYPTED` with the output.

::::
::::::

-> Now, put the SD card into your Raspberry Pi and start up the system.

::: info
The Raspberry Pi may reboot several times while configuring the system.
:::

#### Running the `raspi-config` command

::: tip Customizing configuration after first boot
If you want to customize the Raspberry Pi's configuration without using the above configuration files, you can still update its configuration via the `sudo raspi-config` [command](https://www.raspberrypi.com/documentation/computers/configuration.html).
:::

This method may require a specialized HDMI adapter or cable, which is not always available to all users. Therefore, it is recommended to use the configuration files as described in the previous section for simplicity.

### Default Configuration

::: tip HyperBian's default username, password, and hostname
 - User: `hyperion`
 - Password: `ambientlight`
 - Hostname: `hyperbian`
:::

::: tip Default keyboard language and layout
HyperBian ships with an English keyboard by default. If using a non-English keyboard, some keys might be found in different places.
When logging in for the first time, type as though you have an English keyboard.
:::

If your network supports mDNS, navigate to [http://hyperbian.local:8090](http://hyperbian.local:8090). Otherwise, use the [IP address](https://www.raspberrypi.com/documentation/computers/remote-access.html#ip-address) of your Raspberry Pi.

Proceed to the next section for details on Advanced setup in Hyperion.

