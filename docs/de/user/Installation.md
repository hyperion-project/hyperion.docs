# Installieren
Für die Installation von Hyperion werden für zahlreiche Plattformen Installationpakete oder zip-archivierte Dateien angeboten.

## Voraussetzungen

### Unterstützte Systeme
  * Raspberry Pi (siehe auch [HyperBian](/de/user/HyperBian.md))
  * Debian 10, Ubuntu 20.04, Fedora 37 oder neuer
  * Mac OS
  * Windows 10
  
**Bitte beachten... Einige arm-Geräte bieten nur eine eingeschränkte Unterstützung für die Bildschirmaufnahme**

### Unterstützte Browser
Hyperion wird über eine Webschnittstelle konfiguriert und gesteuert.
  * Chrome 47+
  * Firefox 43+
  * Opera 34+
  * Safari 9.1+
  * Microsoft Edge 14+

## Hyperion installieren

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

## Hyperion aktualisieren

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

## Hyperion deinstallieren

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

### Ändern des Benutzers des Dienstes auf 'root'

```sh:no-line-numbers
sudo updateHyperionUser -u root
```

### Ändern des Benutzer des Dienstes auf den aktuellen Benutzer

```sh:no-line-numbers
sudo updateHyperionUser
```

