# Installieren
Für die Installation von Hyperion werden für zahlreiche Plattformen Installationpakete oder zip-archivierte Dateien angeboten.

## Voraussetzungen

### Unterstützte Systeme
  * Raspberry Pi
  * Debian 9 | Ubuntu 16.04 oder neuer
  * Mac OS
  * Windows 10

### Unterstützte Browser
  * Chrome 47+
  * Firefox 43+
  * Opera 34+
  * Safari 9.1+
  * Microsoft Edge 14+

## Installieren
::: warning Bitte beachten!
In den nachfolgendem Beispielen wird zur Verdeutlichung der Syntax die Hardware Architektur x86_64 verwendet.
:::

### Raspberry Pi
Wir empfehlen die Benutzung von [HyperBian](/de/user/HyperBian) für eine Neuinstallation. \
Alternativ kann Hyperion auf einem bestehenden [Raspberry Pi OS (ehemals Raspbian)/Debian/Ubuntu](#rpi-debian-ubuntu) System installiert werden. \
Raspberry Pi Nutzer mit LibreElec schauen [hier](https://hyperion-project.org/forum/index.php?thread/10463-install-hyperion-ng-on-libreelec-x86-64-rpi-inoffiziell-unofficially/&pageNo=1).

### RPi/Debian/Ubuntu
Über die Kommandozeile kannst du Hyperion mithilfe der nachfolgenden 3 Schritte installieren:

1. Als erstes importieren wir den öffentlichen Schlüssel von Hyperion:
```shell
wget -qO- https://apt.hyperion-project.org/hyperion.pub.key | sudo gpg --dearmor -o /usr/share/keyrings/hyperion.pub.gpg
```

2. Danach tragen wir Hyperion-Project als Quelle von Hyperion ein:
```shell
echo "deb [signed-by=/usr/share/keyrings/hyperion.pub.gpg] https://apt.hyperion-project.org/ $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/hyperion.list
```

3. Als letztes aktualisieren wir die Paketliste und installieren Hyperion:
```shell
sudo apt-get update && sudo apt-get install hyperion
```

### macOS
Wird derzeit nur als zip-archivierte Datei, in der Hyperion im Binärformat vorliegt angeboten.

### Fedora
Lade dir das Installationspaket (.rpm) von der [Download Seite](https://github.com/hyperion-project/hyperion.ng/releases) herunter. \
Über die Kommandozeile kannst du das Installationspaket mit folgendem Befehl installieren: \
`sudo dnf install ./Hyperion-2.0.0-Linux-x86_64.rpm` \
Hyperion kann jetzt über das Startmenü gestartet werden.

### Windows 10
Lade dir die ausführbare Installationdatei (.exe) von der [Download Seite](https://github.com/hyperion-project/hyperion.ng/releases) herunter. \
Zum installieren führe die heruntergeladene Datei aus.
Hyperion kann jetzt über das Startmenü gestartet werden.

## Deinstallieren

Unter Raspberry Pi OS (ehemals Raspbian)/Debian/Ubuntu kann Hyperion mit folgendem Befehl deinstalliert werden: \
`sudo apt-get --purge autoremove hyperion`

Unter Windows erfolgt die Deinstallation über die Systemsteuerung.

### Lokale Daten
Einstellungen werden im Heimverzeichnis unter dem Unterverzeichnis `.hyperion` abgespeichert.

