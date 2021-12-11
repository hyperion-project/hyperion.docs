# Install Hyperion
Hyperion supports various platforms for installation, as package or portable .zip.

## Requirements

### Supported Systems
  * Raspberry Pi (See also [HyperBian](/en/user/HyperBian))
  * Debian 9 | Ubuntu 16.04 or higher
  * Mac OS
  * Windows 10

**Please note that some arm devices have limited support in terms of screen capturing**

### Supported Browsers
Hyperion will be configured and controlled through a web interface.
  * Chrome 47+
  * Firefox 43+
  * Opera 34+
  * Safari 9.1+
  * Microsoft Edge 14+

## Install
::: warning Note
In the following examples the hardware architecture x86_64 is used to clarify the syntax.
:::

## Raspberry Pi
Raspberry Pi user can use [HyperBian](/en/user/HyperBian.md) for a fresh start. \
Alternatively, Hyperion can be installed on an existing [Raspberry Pi OS (formerly Raspbian)/Debian/Ubuntu](#rpi-debian-ubuntu) system. \
Raspberry Pi users with LibreElec look [here](https://hyperion-project.org/forum/index.php?thread/10463-install-hyperion-ng-on-libreelec-x86-64-rpi-inoffiziell-unofficially/&pageNo=1).

### RPi/Debian/Ubuntu
You can install Hyperion from the commandline using the following 3 steps:

1. First we import the public key from Hyperion:
```shell
wget -qO- https://apt.hyperion-project.org/hyperion.pub.key | sudo gpg --dearmor -o /usr/share/keyrings/hyperion.pub.gpg
```

2. After that we enter Hyperion-Project as source of Hyperion:
```shell
echo "deb [signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://apt.hyperion-project.org/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperion.list
```

3. Last, we update the package list and install Hyperion:
```shell
sudo apt-get update && sudo apt-get install hyperion
```

## macOS
Currently just a zip file with the binarys.

### Fedora
For Fedora we provide a .rpm file. A one click installation package that does the job for you. \
Download the file from the [Release page](https://github.com/hyperion-project/hyperion.ng/releases) \
Install from commandline by typing. \
`sudo dnf install ./Hyperion-2.0.0-Linux-x86_64.rpm` \
Hyperion can be now started from your start menu.

### Windows 10
For Windows 10 we provide a .exe file. A one click installation package that does the job for you. \
Download the file from the [Release page](https://github.com/hyperion-project/hyperion.ng/releases) \
Install by executing the file. \
After following the instructions Hyperion can be now started from your start menu.

## Uninstall Hyperion
On Debian/Ubuntu you can remove Hyperion with this command \
`sudo apt-get --purge autoremove hyperion`\
On Windows 10 Hyperion can be removed using the Windows 10 "Programs and Features" settings.

### Hyperion user data
Hyperion stores user data inside your home directory (folder `.hyperion`).
