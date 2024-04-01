---
outline: [2, 3]
---

# Getting Started
Hyperion supports various platforms for installation, via package or portable .zip.
The configuration and control of Hyperion is done through a web interface.

## Prerequisites

<table>
    <thead>
        <tr>
            <th>Supported Systems <span style="color: var(--vp-custom-block-warning-text);">&ast;</span></th>
            <th>Supported Browsers</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Raspberry Pi (see also <a href="/user/HyperBian.html">HyperBian</a>)<br>Debian 10, Ubuntu 20.04, Fedora 37 or higher<br>Mac OS<br>Windows 10</td>
            <td>Chrome 47+<br>Firefox 43+<br>Opera 34+<br>Safari 9.1+<br>Microsoft Edge 14+</td>
        </tr>
        <tr>
            <td colspan="2" style="background-color:var(--vp-c-bg); font-size: 8pt; color: var(--vp-custom-block-warning-text);">&ast;Please note that some arm devices have limited support in terms of screen capturing</td>
        </tr>
    </tbody>
</table>

## Install

### Ubuntu, Debian and friends, Fedora, LibreELEC, macOS, Windows
Hyperion's project [package repository page](https://releases.hyperion-project.org/) provides you with installation instructions at your finger tip.

::: tip A ready made installation image is available for Raspberry Pi users
Install [HyperBian](/user/HyperBian.md) to get a complete system out of the box.
:::

::: details Other distributions based on Ubuntu or Debian

The same easy installation script can be used, but the underlying distribution codename needs to be provided by an additional option

  `--ubuntu` _codebase name_ or `--debian` _codebase name_

Sample for Pop!_OS 22.04 LTS or Mint 21.2 Victoria (which are based on Ubuntu 'jammy')

``` sh:no-line-numbers
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --ubuntu 'jammy'
```
:::

## Update

In case Hyperion was installed from the package repository page or an deb/rpm standalone package,
follow the standard operating system procedures to update the system.

### Ubuntu, Debian and friends + HyperBian

Open a terminal or ssh into a remote system and execute

``` sh:no-line-numbers
sudo apt-get install hyperion
```

### Fedora

Open a terminal and execute

``` sh:no-line-numbers
sudo dnf -y upgrade hyperion
```

### LibreELEC
See [here](https://hyperion-project.org/forum/index.php?thread/13754-install-update-hyperion-ng-on-libreelec/&pageNo=1).

## Uninstall

### Ubuntu, Debian and friends, LibreELEC, Fedora, macOS, Windows
Hyperion's project [package repository page](https://releases.hyperion-project.org/) provides you with the respective removal instructions

## Hyperion User Data
Hyperion stores user configuration data and customised effects inside the executing user's home directory (folder `.hyperion`).

Alternatively, you can check the "About Hyperion" page.
The `Config path:` entry specifies the location where user data is stored currently.

## Hyperion Linux Service

On non-interactive (headless) environments, a Hyperion service is installed running under the current user.
In same cases, e.g. using ws281x LEDs, Hyperion must run under `root`.
Hyperion provides a command-line utility which allows switching the user running the service.

### Change the service user to 'root'

``` sh:no-line-numbers
sudo updateHyperionUser -u root
```

### Change the service user to the current user
``` sh:no-line-numbers
sudo updateHyperionUser
```

<style>
    .vp-doc table {
        display: table;
        width: 100%;
    }
</style>