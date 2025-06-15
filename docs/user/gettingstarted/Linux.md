---
outline: [2, 3]
---

# Hyperion on Linux

## <div class="icon-text"><div class="icon-color icon-24" v-html="easy"/>Easy Install</div>

If you want to get started quickly and easily, you can install Hyperion with our one-line [easy install script](https://github.com/hyperion-project/hyperion.releases-ci/blob/main/install.sh). This script will automatically set up our repository, add our GPG key to your system and install the Hyperion package. The supported and tested systems are currently Ubuntu, Debian and Fedora.

::: tip Stable/Nightly releases
In addition to the standard stable releases, there are also nightly releases available. To install a nightly release, select the “Nightly release” tab and copy the corresponding command.
<p style="color: var(--vp-custom-block-warning-text);">The Nightly variant may contain newer features/bugfixes etc. and is rebuilt every night (if something has changed). Use at your own risk.</p>
:::

To install, copy the command, paste it into your terminal, and hit Enter to begin the installation process.

::: code-group

``` sh:no-line-numbers [Stable release]
curl -sSL https://releases.hyperion-project.org/install | bash
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --nightly
```

:::

::: details Other distributions based on Ubuntu or Debian

The same easy installation script can be used, but the underlying distribution codename needs to be provided by an additional option

  `--ubuntu` _codebase name_ or `--debian` _codebase name_

Sample for Pop!_OS 22.04 LTS or Mint 21.2 Victoria (which are based on Ubuntu 'jammy')

``` sh:no-line-numbers
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --ubuntu 'jammy'
```

:::

::: details LibreELEC

The same easy installation script can be used, but special attention is required when upgrading a version.

If you wish to upgrade, the following two steps are required, as LibreELEC does not support packages or related upgrades:

1. Remove the current version using the following command:

``` sh:no-line-numbers
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --remove
```

2. Install the latest version, see above.

:::

::: tip
Your configuration database will not be deleted when you remove the current version.
However, it is advisable to export your configuration and perform a [configuration backup](../Configuration.md#configuration-backup).
:::

## <div class="icon-text"><div class="icon-color icon-24" v-html="advanced"/>Advanced Instruction</div>

With the advanced instructions below, you can use your package manager to install Hyperion directly. The supported and tested systems are currently Ubuntu, Debian and Fedora.

### Ubuntu, Debian and friends

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Installing"

Add necessary packages for the installation:
``` sh:no-line-numbers
sudo apt-get update && sudo apt-get install wget gpg apt-transport-https lsb-release
```

Add Hyperion’s official GPG key:
``` sh:no-line-numbers
curl -fsSL https://releases.hyperion-project.org/hyperion.pub.key | sudo gpg --dearmor -o /usr/share/keyrings/hyperion.pub.gpg
```

Add Hyperion-Project to your APT sources:
::: code-group
``` sh:no-line-numbers [Stable release]
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://apt.releases.hyperion-project.org/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperion.list
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://nightly.apt.releases.hyperion-project.org/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperion.nightly.list
```
:::

Update your local package index and install Hyperion:
``` sh:no-line-numbers
sudo apt-get update && sudo apt-get install hyperion
```

:::::
::::: tab name="Updating"

Install Hyperion again:
``` sh:no-line-numbers
sudo apt-get install hyperion
```

:::::
::::: tab name="Uninstalling"

Uninstall Hyperion:
``` sh:no-line-numbers
sudo apt-get --purge autoremove hyperion
```

Remove the Hyperion-Project APT source from your system:
``` sh:no-line-numbers
sudo rm /usr/share/keyrings/hyperion.pub.gpg /etc/apt/sources.list.d/hyperion*.list
```

:::::
::::::

### Fedora

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Installing"

1. Add the required DNF plugin for installation:
``` sh:no-line-numbers
sudo dnf -y install dnf-plugins-core
```

2. Add the Hyperion Project repository to the system:

::: code-group

``` sh:no-line-numbers [Stable release]
sudo dnf -y config-manager --add-repo https://dnf.releases.hyperion-project.org/fedora/hyperion.repo
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
sudo dnf -y config-manager --add-repo https://nightly.dnf.releases.hyperion-project.org/fedora/hyperion.repo
```

:::

3. Install Hyperion:
``` sh:no-line-numbers
sudo dnf -y install hyperion
```

:::::
::::: tab name="Updating"

Update Hyperion:
``` sh:no-line-numbers
sudo dnf -y upgrade hyperion
```

:::::
::::: tab name="Uninstalling"

Uninstall Hyperion:
``` sh:no-line-numbers
sudo dnf -y remove hyperion
```

Remove the Hyperion-Project APT source from your system:
``` sh:no-line-numbers
sudo rm /etc/yum.repos.d/hyperion.repo
```

:::::
::::::


<script lang="ts" setup>
import nightly from '/icons/svg/nightly.svg?raw'
import easy from '/icons/svg/easy.svg?raw'
import advanced from '/icons/svg/advanced.svg?raw'
</script>

<style>
.tabs-component {
  margin: 32px 16px 0 0;
  > .tabs-component-tabs {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    margin: 0;
    padding: 8px 0 0 24px;
    border: 1px solid var(--vp-c-border);
    border-bottom: none;
    border-radius: 8px 8px 0 0;
    flex-direction: column;
    font-size: 14px;
    font-weight: 500;
    @media (min-width: 350px) {
      flex-direction: row;
      align-items: center;
    }
    > .tabs-component-tab {
      border-left: none;
      > .tabs-component-tab-a {
        color: var(--vp-code-tab-text-color);
        display: flex;
        justify-content: flex-start;
        flex-grow: 1;
        gap: .5rem;
        align-items: center;
        padding: 12px 0;
        text-decoration: none;
        &.is-active {
          color: var(--vp-code-tab-active-text-color);
        }
      }
      &.is-active {
        border-bottom: 2px solid var(--vp-code-tab-active-bar-color);
      }
    }
  }
  > .tabs-component-panels {
    padding: 16px 24px;
    border: 1px solid var(--vp-c-border);
    border-radius: 0 0 8px 8px;
    border-top: none;
  }
}

.icon-text {
  display: flex;
  justify-content: flex-start;
  gap: .5rem;
  align-items: center;
}

.icon-color :deep(svg) {
  fill: currentColor;
}

.icon-16 {
  height: 16px;
  width: 16px;
}

.icon-24 {
  height: 24px;
  width: 24px;
}

.icon-32 {
  height: 32px;
  width: 32px;
}
</style>
