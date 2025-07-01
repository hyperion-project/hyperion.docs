---
outline: [2, 3]
---

# Erste Schritte
Hyperion kann auf zahlreichen Plattformen installiert werden. Die Konfiguration und Steuerung von Hyperion erfolgt über den Browser.

## Voraussetzungen

<table>
    <thead>
        <tr>
            <th>Unterstützte Systeme <span style="color: var(--vp-custom-block-warning-text);">&ast;</span></th>
            <th>Unterstützte Browser</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Raspberry Pi (siehe auch <a href="/de/user/HyperBian.html">HyperBian</a>)<br>Debian 11, Ubuntu 22.04, Fedora 39 oder neuer<br>Mac OS (Intel oder Apple Silicon)<br>Windows 11</td>
            <td>Chrome 47+<br>Firefox 43+<br>Opera 34+<br>Safari 9.1+<br>Microsoft Edge 14+</td>
        </tr>
        <tr>
            <td colspan="2" style="background-color:var(--vp-c-bg); font-size: 8pt; color: var(--vp-custom-block-warning-text);">&ast;Bitte beachte das einige arm-Geräte nur eine eingeschränkte Unterstützung für die Bildschirmaufnahme bieten</td>
        </tr>
    </tbody>
</table>

## Installieren

Für die folgenden Betriebssysteme bieten wir Installationsanleitungen an. Damit kannst du Hyperion ganz einfach zum Laufen bringen. \
Wenn du Fragen zur Installation von Hyperion hast, melde dich einfach in [unserem Forum](https://hyperion-project.org).

<VPFeatures :features="operation_systems"/>

<div class="tip custom-block">
  <div class="block-title-container">
    <div style="grid-area: left-item; display: flex; align-items: center;" v-html="RaspberryPi"></div>
    <div class="custom-block-title" style="grid-area: right-top;">Ein fertiges Installations-Image ist für Raspberry Pi Benutzer verfügbar</div>
    <div style="grid-area: right-bottom;">Installiere <a href="/de/user/HyperBian.html">HyperBian</a>, um ein komplettes System zu erhalten, das sofort einsatzbereit ist.</div>
  </div>
</div>

::: warning Dein Betriebssystem ist nicht dabei?
Du kannst Hyperion für dein Betriebssystem selbst aus dem [Quellcode](https://github.com/hyperion-project/hyperion.ng/blob/master/doc/development/CompileHowto.md) bauen oder eine Anfrage (Feature Request) auf [GitHub](https://github.com/hyperion-project/hyperion.ng/issues/new/choose) einreichen.
:::

## Hyperion Benutzerdaten
Hyperion speichert Benutzerkonfigurationsdaten und angepasste Effekte im Home-Verzeichnis des ausführenden Benutzers (Ordner `.hyperion`).

Alternativ kanst Du den Speicherort auch auf der Seite "Über Hyperion" nachsehen.
Der Eintrag `Config path:` gibt den Ort an, an dem die Benutzerdaten derzeit gespeichert sind.

## Hyperion Linux Dienst

In nicht-interaktiven (head-less) Umgebungen wird ein Hyperion Service installiert, der unter dem aktuellen Benutzer läuft.
In den gleichen Fällen, z.B. bei Verwendung von ws281x LEDs, muss Hyperion unter `root laufen.
Hyperion stellt ein Kommandozeilenprogramm zur Verfügung, mit dem der Benutzer, unter dem der Dienst läuft, gewechselt werden kann.

### Ändern des Benutzers

**...auf 'root'**

```sh:no-line-numbers
sudo updateHyperionUser -u root
```

**...auf den aktuellen Benutzer**

```sh:no-line-numbers
sudo updateHyperionUser
```

### Dienst erstellen

Standardmäßig wird in interaktiven Umgebungen mit grafischer Benutzeroberfläche kein Hyperion-Dienst installiert.
Wenn Hyperion als Systemdienst ausgeführt werden soll, kann der Dienst manuell erstellt werden.

1. Kopiere die Hyperion Servicedatei

``` sh:no-line-numbers
sudo cp /usr/share/hyperion/service/hyperion.systemd /etc/systemd/system/hyperion@.service
```

2. Richten den Dienst für den aktuellen Benutzer ein.\
Wenn es ein anderer Benutzer sein soll, verwende die Option -u.

``` sh:no-line-numbers
sudo /usr/share/hyperion/scripts/updateHyperionUser.sh
```

3. Überprüfe, ob der Dienst für den aktuellen Benutzer läuft.\
Ersetze ${USER} durch den Benutzernamen, wenn der Benutzer zuvor mit der Option -u festgelegt wurde.

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
    details: 'Anleitung für Ubuntu, Debian & Co., LibreElec oder Fedora',
    link: '/de/user/gettingstarted/Linux.md',
    icon: Linux
  },
  {
    title: 'Windows',
    details: 'Kurzanleitung für die Installation von Hyperion unter Windows',
    link: '/de/user/gettingstarted/Windows.md',
    icon: Windows
  },
  {
    title: 'macOS',
    details: 'So installierst du Hyperion auf deinem Mac',
    link: '/de/user/gettingstarted/macOS.md',
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
