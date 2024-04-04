---
outline: [2, 3]
---

# Erste Schritte
Hyperion kann über Installationspakete oder Zip-Archive auf zahlreichen Plattformen installiert werden.
Die Konfiguration und Steuerung von Hyperion erfolgt über den Browser.

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
            <td>Raspberry Pi (siehe auch <a href="/de/user/HyperBian.html">HyperBian</a>)<br>Debian 10, Ubuntu 20.04, Fedora 37 oder neuer<br>Mac OS<br>Windows 10</td>
            <td>Chrome 47+<br>Firefox 43+<br>Opera 34+<br>Safari 9.1+<br>Microsoft Edge 14+</td>
        </tr>
        <tr>
            <td colspan="2" style="background-color:var(--vp-c-bg); font-size: 8pt; color: var(--vp-custom-block-warning-text);">&ast;Bitte beachte das einige arm-Geräte nur eine eingeschränkte Unterstützung für die Bildschirmaufnahme bieten</td>
        </tr>
    </tbody>
</table>

## Installieren

### Ubuntu, Debian und Konsorten, Fedora, LibreELEC, macOS, Windows
Die Hyperion-Projekt [Paket Repository Seite](https://releases.hyperion-project.org/) bietet Installationsanweisungen auf Knopfdruck.

::: tip Ein fertiges Installations-Image ist für Raspberry Pi Benutzer verfügbar
Installiere [HyperBian](/de/user/HyperBian.md), um ein komplettes System zu erhalten, das sofort einsatzbereit ist.
:::

::: details Andere Distributionen basierend auf Ubuntu oder Debian

Das gleiche einfache Installationsskript kann verwendet werden, aber der Codename der zugrunde liegenden Distribution muss durch eine zusätzliche Option angegeben werden

  `--ubuntu` _codebase name_ oder `--debian` _codebase name_

Beispiel für Pop!_OS 22.04 LTS oder Mint 21.2 Victoria (die auf Ubuntu 'jammy' basieren)

```sh:no-line-numbers
curl -sSL https://releases.hyperion-project.org/install | bash -s -- --ubuntu 'jammy'
```
:::

## Aktualisieren

Falls Hyperion von der Paket-Repository-Seite oder einem deb/rpm-Standalone-Paket installiert wurde,
folge dem Standardverfahren des Betriebssystems, um das System zu aktualisieren.


### Ubuntu, Debian und Konsorten + HyperBian

Öffnen ein Terminal oder verbinden Dich per ssh mit einem entfernten System und führe folgenden Befehl aus

```sh:no-line-numbers
sudo apt-get install hyperion
```

### Fedora

Öffne ein Terminal und führe folgenden Befehl aus

```sh:no-line-numbers
sudo dnf -y upgrade hyperion
```

### LibreELEC
Siehe [hier](https://hyperion-project.org/forum/index.php?thread/13754-install-update-hyperion-ng-on-libreelec/&pageNo=1).

## Deinstallieren

### Ubuntu, Debian und Konsorten, LibreELEC, Fedora, macOS, Windows
Die Hyperion-Projekt [Paket Repository Seite] (https://releases.hyperion-project.org/) bietet entsprechende Anweisungen zur Deinstallation an.

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




<style>
    .vp-doc table {
        display: table;
        width: 100%;
    }
</style>
