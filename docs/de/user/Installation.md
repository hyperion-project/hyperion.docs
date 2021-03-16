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
Wir empfehlen die Benutzung von [HyperBian](/en/user/HyperBian) für eine Neuinstallation. \
Alternativ kann Hyperion auf einem bestehenden [Debian/Ubuntu](#debian-ubuntu) System installiert werden.

### macOS
Wird derzeit nur als zip-archivierte Datei, in der Hyperion im Binärformat vorliegt angeboten.

### Debian/Ubuntu
Lade dir das Installationspaket (.deb) von der [Download Seite](https://github.com/hyperion-project/hyperion.ng/releases) herunter. \
Über die Kommandozeile kannst du das Installationspaket mit folgendem Befehl installieren: \
`sudo apt install ./Hyperion-2.0.0-Linux-x86_64.deb` \
Hyperion kann jetzt über das Startmenü gestartet werden.

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

Unter Debian/Ubuntu kann Hyperion mit folgendem Befehl deinstalliert werden: \
`sudo apt remove hyperion`

Unter Windows erfolgt die Deinstallation über die Systemsteuerung.

### Lokale Daten
Einstellungen werden im Heimverzeichnis unter dem Unterverzeichnis `.hyperion` abgespeichert.

