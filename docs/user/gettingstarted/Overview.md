---
outline: [2, 3]
---

# Getting Started
Hyperion supports various platforms for installation. The configuration and control of Hyperion is done through a web interface.

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
            <td>Raspberry Pi (see also <a href="/user/HyperBian.html">HyperBian</a>)<br>Debian 11, Ubuntu 22.04, Fedora 39 or higher<br>Mac OS (Intel or Apple Silicon)<br>Windows 11</td>
            <td>Chrome 47+<br>Firefox 43+<br>Opera 34+<br>Safari 9.1+<br>Microsoft Edge 14+</td>
        </tr>
        <tr>
            <td colspan="2" style="background-color:var(--vp-c-bg); font-size: 8pt; color: var(--vp-custom-block-warning-text);">&ast;Please note that some arm devices have limited support in terms of screen capturing</td>
        </tr>
    </tbody>
</table>

## Installation

We offer you simple installation instructions for the following operating systems so that you can get Hyperion up and running more quickly. \
If you've got any more questions about installing Hyperion, just ask us in [our forum](https://hyperion-project.org).

<VPFeatures :features="operation_systems"/>

<div class="tip custom-block">
  <div class="block-title-container">
    <div style="grid-area: left-item; display: flex; align-items: center;" v-html="RaspberryPi"></div>
    <div class="custom-block-title" style="grid-area: right-top;">A ready made installation image is available for Raspberry Pi users</div>
    <div style="grid-area: right-bottom;">Install <a href="/user/HyperBian.html">HyperBian</a> to get a complete system out of the box.</div>
  </div>
</div>

::: warning Your operating system is not listed?
You can build Hyperion for your system yourself from the [source code](https://github.com/hyperion-project/hyperion.ng/blob/master/doc/development/CompileHowto.md) or follow [this link](https://github.com/hyperion-project/hyperion.ng/issues/new/choose) to submit a feature request.
:::

## LibreELEC
See [here](https://hyperion-project.org/forum/index.php?thread/13754-install-update-hyperion-ng-on-libreelec/&pageNo=1).

## Hyperion User Data
Hyperion stores user configuration data and customised effects inside the executing user's home directory (folder `.hyperion`).

Alternatively, you can check the "About Hyperion" page.
The `Config path:` entry specifies the location where user data is stored currently.

## Hyperion Linux Service

On non-interactive (headless) environments, a Hyperion service is installed running under the current user.
In same cases, e.g. using ws281x LEDs, Hyperion must run under `root`.
Hyperion provides a command-line utility which allows switching the user running the service.

### Change the service user

**...to 'root'**

``` sh:no-line-numbers
sudo updateHyperionUser -u root
```

**...to the current user**
``` sh:no-line-numbers
sudo updateHyperionUser
```

### Create a service

By default, a Hyperion service is not installed on interactive environments with a Graphical User Interface.
In case you would like to run Hyperion as a system service, you can create the service manually.

1. Copy Hyperion's service file

``` sh:no-line-numbers
sudo cp /usr/share/hyperion/service/hyperion.systemd /etc/systemd/system/hyperion@.service
```

2. Establish the service for the current user.\
If it should be a different user, use the -u option

``` sh:no-line-numbers
sudo /usr/share/hyperion/scripts/updateHyperionUser.sh
```

3. Check that the service is running for your current user.\
Replace ${USER} with the username set with the -u option before

``` sh:no-line-numbers
systemctl status hyperion@${USER}
```

<script lang="ts" setup>
import VPFeatures, { type Feature } from 'vitepress/dist/client/theme-default/components/VPFeatures.vue'
import macOS from '/icons/svg/macos.svg?raw'
import Windows from '/icons/svg/windows.svg?raw'
import Linux from '/icons/svg/linux.svg?raw'
import RaspberryPi from '/icons/svg/raspberry.svg?raw'

const operation_systems: Feature[] = [
  {
    title: 'Linux',
    details: 'Instructions for installing Hyperion under Ubuntu, Debian and friends or Fedora',
    link: '/user/gettingstarted/Linux.md',
    icon: Linux
  },
  {
    title: 'Windows',
    details: 'Quick guide for the installation of Hyperion under Windows',
    link: '/user/gettingstarted/Windows.md',
    icon: Windows
  },
  {
    title: 'macOS',
    details: 'How to install Hyperion on your Mac in a few easy steps',
    link: '/user/gettingstarted/macOS.md',
    icon: macOS
  }
];
</script>

<style scoped>
:deep(.VPFeature) {
  border: 1px solid var(--vp-c-border) !important;
}

.custom-block {
  .block-title-container {
    gap: 0 8px;
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 40px auto;
    grid-template-areas: "left-item right-top" "left-item right-bottom";
    :deep(svg) {
      width: 32px;
      height: 32px;
    }
  }
}

.vp-doc table {
    display: table;
    width: 100%;
}
</style>
