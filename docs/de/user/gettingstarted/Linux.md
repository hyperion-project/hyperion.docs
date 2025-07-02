---
outline: [2, 3]
---

# Hyperion unter Linux

## <div class="icon-text"><div class="icon-color icon-24" v-html="easy"/>Easy Install (Einfach)</div>

Wenn du schnell und einfach unter Linux loslegen möchtest, kannst du Hyperion mit unserem [Easy-Install-Skript](https://github.com/hyperion-project/hyperion.releases-ci/blob/main/install.sh) über die Konsole installieren. Es richtet automatisch unser Repository ein, fügt unseren GPG-Schlüssel zu deinem System hinzu und installiert das Hyperion-Paket. Derzeit werden Ubuntu, Debian und Fedora unterstützt.

::: tip Stabile oder tägliche (Nightly) Version?
Neben der stabilen Version gibt es auch tägliche Versionen sogenannte "Nightly release". Wenn du ein Nightly release installieren willst, wähle einfach die Registerkarte "Nightly release" aus.
<p style="color: var(--vp-custom-block-warning-text);">Ein Nightly release kann neuere Funktionen, Fehlerbehebungen etc. enthalten und wird jede Nacht neu erstellt (wenn sich etwas geändert hat). Die Verwendung erfolgt auf eigene Gefahr.</p>
:::

Kopiere einfach den Befehl, füge ihn in deine Konsole ein und drücke die Eingabetaste, um den Installationsvorgang zu starten.

::: code-group

``` sh:no-line-numbers [Stabile Version]
curl -sSL https://releases.hyperion-project.org/install | bash
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --nightly
```

``` sh:no-line-numbers [ <div class="icon-text">Deinstallieren<div class="icon-color icon-16" v-html="uninstall"/></div> ]
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --remove
```

:::

::: details Andere Distributionen basierend auf Ubuntu oder Debian

Das gleiche einfache Installationsskript kann verwendet werden, aber der Codename der zugrunde liegenden Distribution muss durch eine zusätzliche Option angegeben werden

  `--ubuntu` _codebase name_ oder `--debian` _codebase name_

Beispiel für Pop!_OS 22.04 LTS oder Mint 21.2 Victoria (die auf Ubuntu 'jammy' basieren)

```sh:no-line-numbers
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --ubuntu 'jammy'
```
:::

::: details <div class="icon-text">LibreELEC<div class="icon-color icon-16" v-html="libreelec"/></div>

Das gleiche einfache Installationsskript kann verwendet werden, aber besondere Aufmerksamkeit ist erforderlich, wenn eine Version aktualisiert werden soll.

Wenn Du ein Upgrade durchführen möchtest, sind die folgenden zwei Schritte erforderlich, da LibreELEC keine Pakete oder damit verbundene Upgrades unterstützt:

1. Entfernen die aktuelle Version mit dem 'Deinstallieren' Befehl, siehe oben:

2. Installiere die neueste Version, siehe oben.

:::

::: tip
Deine Konfigurationsdatenbank wird nicht gelöscht, wenn Du die aktuelle Version entfernst.
Es ist jedoch ratsam, die Konfiguration zu exportieren und eine [Konfigurationssicherung](../Configuration.md#configuration-backup) durchzuführen.
:::

## <div class="icon-text"><div class="icon-color icon-24" v-html="advanced"/>Schritt-für-Schritt (Erweitert)</div>

Die Schritt-für-Schritt Anleitungen zeigen dir, wie du Hyperion mit deinem Paketmanager installierst. Derzeit werden Ubuntu, Debian und Fedora unterstützt.

### Ubuntu, Debian und Konsorten

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Installieren"

1. Installiere die Basis-Pakete:
``` sh:no-line-numbers
sudo apt-get update && sudo apt-get install wget gpg apt-transport-https lsb-release
```

2. Füge den offiziellen Schlüssel von Hyperion hinzu:
``` sh:no-line-numbers
wget -qO- https://releases.hyperion-project.org/hyperion.pub.key | sudo gpg --dearmor -o /usr/share/keyrings/hyperion.pub.gpg
```

3. Zeige deinen Paketmanager wo er Hyperion findet:
::: code-group
``` sh:no-line-numbers [Stable release]
echo "deb [signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://apt.releases.hyperion-project.org/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperion.list
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
echo "deb [signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://nightly.apt.releases.hyperion-project.org/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperion.nightly.list
```
:::

4. Installiere Hyperion:
``` sh:no-line-numbers
sudo apt-get update && sudo apt-get install hyperion
```

:::::
::::: tab name="Aktualisieren"

1. Installiere Hyperion erneut:
``` sh:no-line-numbers
sudo apt-get install hyperion
```

:::::
::::: tab name="Entfernen"

1. Entferne Hyperion :
``` sh:no-line-numbers
sudo apt-get --purge autoremove hyperion
```

2. Entferne unsere Adresse aus deinen Paketmanager:
``` sh:no-line-numbers
sudo rm /usr/share/keyrings/hyperion.pub.gpg /etc/apt/sources.list.d/hyperion*.list
```

:::::
::::::

### Fedora

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Installieren"

1. Installiere das Basis-Paket:
``` sh:no-line-numbers
sudo dnf -y install dnf-plugins-core
```

2. Zeige deinen Paketmanager wo er Hyperion findet:

:::: info <i/>

Fedora 40 oder älter (DNF 4):

::: code-group

``` sh:no-line-numbers [Stable release]
sudo dnf -y config-manager --add-repo https://dnf.releases.hyperion-project.org/fedora/hyperion.repo
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
sudo dnf -y config-manager --add-repo https://nightly.dnf.releases.hyperion-project.org/fedora/hyperion.repo
```

:::

Fedora 41 oder neuer (DNF 5):

::: code-group

``` sh:no-line-numbers [Stable release]
sudo dnf -y config-manager addrepo --from-repofile=https://dnf.releases.hyperion-project.org/fedora/hyperion.repo
```

``` sh:no-line-numbers [ <div class="icon-text">Nightly release<div class="icon-color icon-16" v-html="nightly"/></div> ]
sudo dnf -y config-manager addrepo --from-repofile=https://nightly.dnf.releases.hyperion-project.org/fedora/hyperion.repo
```

:::

::::

1. Installiere Hyperion:
``` sh:no-line-numbers
sudo dnf -y install hyperion
```

:::::
::::: tab name="Aktualisieren"

1. Hyperion aktualisieren:
``` sh:no-line-numbers
sudo dnf -y upgrade hyperion
```

:::::
::::: tab name="Entfernen"

1. Entferne Hyperion :
``` sh:no-line-numbers
sudo dnf -y remove hyperion
```

2. Entferne unsere Adresse aus deinen Paketmanager:
``` sh:no-line-numbers
sudo rm /etc/yum.repos.d/hyperion.repo
```

:::::
::::::


<script lang="ts" setup>
import nightly from '/icons/svg/nightly.svg?raw'
import uninstall from '/icons/svg/uninstall.svg?raw'
import easy from '/icons/svg/easy.svg?raw'
import advanced from '/icons/svg/advanced.svg?raw'
import libreelec from '/icons/svg/libreelec.svg?raw'
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
