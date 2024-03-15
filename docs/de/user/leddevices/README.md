---
prev: false
next: false
sidebarDepth: 0
---

# Übersicht
Hyperion unterstützt viele verschiedene Controller und LED-Gerätetypen. Auch Netzwerkkommunikation ist möglich, daher unterstützt Hyperion auch Philips Hue, WLED und mehr.

::: tip 
Falls dein LED-Gerät nicht funktioniert oder im Dashboard bzw. in der Fernbedienung als deaktiviert angezeigt wird, 
überprüfe zuerst das Hyperion-Protokoll auf Fehler!

Die Fehlermeldung kann Dir bereits einen guten Hinweis darauf geben, was schief gelaufen ist.
Das Protokoll findest Du unter dem Menüpunkt "System" oder Du folgst dem Link auf der Konfigurationsseite des LED-Gerätes.
:::

## Konfiguration

::: tip 
Standardmäßig werden nicht alle Konfigurationselemente angzeigt, um eine schnelle und einfache Einrichtung zu ermöglichen.

Um zusätzliche Konfigurationselemente anzuzeigen, ändere die [Einstellungsstufe](/de/user/Configuration.html#einstellungsstufen).
:::

### Allgemeine Einstellungen

Allgemeine Einstellungen findest Du bei jedem LED-Gerätetyp.

#### Anzahl Hardware LEDs
Die Anzahl der physikalischen LEDs, die vom Gerät angesprochen werden können.

::: details Falls der Hardware LED Count deaktiviert ist
Bei einigen Geräten ist das Eingabeelement deaktiviert, da die Anzahl der LEDs automatisch aufgelöst wird.

Wenn die Eigenschaften eines Geräts nicht abrufen weren können, erhäst Du eine Fehlermeldung. Überprüfe die vorgenommene Konfiguration oder aktualisiere die Seite.
:::

### Erweiterte Einstellungen

#### RGB-Byte-Reihenfolge

Die RGB-Byte-Reihenfolge ist für jeden LED-Gerätetyp konfigurierbar. Wenn du diesen Wert überprüfen oder ändern möchtest, verwende den "RGB Byte Reihenfolge Assistenten" (Zauberstab).

#### Autostart
Ein LED-Gerät wird standardmäßig gestartet, wenn Hyperion gestartet wird.
Falls der Autostart deaktiviert ist, muss das Gerät später manuell oder über die API eingeschaltet werden.

#### Verbindungsversuche
Jedes LED-Gerät bietet die Möglichkeit, die Verbindung erneut zu öffnen.
Wenn die Anzahl der Verbindungsversuche überschritten wird, geht das LED-Gerät in den Fehlerzustand über.

#### Wiederholungsintervall
Die Anzahl der Sekunden, die bis zur nächsten Wiederholung des Verbindungsversuchs vergehen sollen.

### Spezifische Einstellungen
Jedes LED-Gerät unterstützt zusätzliche, gerätespezifische Einstellungen.
Einige Einstellungen sind für die verschiedenen Gerätekategorien gleich.

### Aktionen

#### Einstellungen Speichern
Erlaubt das Speichern der Einstellungen, wenn die Konfiguration gültig ist.

Falls noch kein [LED-Layout](/de/user/advanced/Advanced.html#led-layout) konfiguriert ist, hast Du die Möglichkeit, ein Standard-Layout zu erstellen und es später anzupassen.
Wenn die Anzahl der im Layout konfigurierten LEDs die Anzahl der Hardware-LEDs übersteigt, überprüfe die Konfiguration oder das Layout und passe es an.

#### Identifiziere
Bei einigen LED-Gerätetypen kannst Du die technischen Einstellungen vor dem Speichern testen bzw. die LEDs der Gerätes zur Identifikation aufleuchten lassen.

Die Schaltfläche "Identifiziere" ist nur dann aktiviert, wenn die aktuelle Konfiguration gültig ist.

## Steuerungs-Typen

Hyperion unterstützt mehrere verschiedene LED-Geräte, die sich in vier Hauptkategorien einteilen lassen:

### SPI/PWM
3 oder 4 adrige LED Strips, die über SPI (Serial Peripheral Interface) oder PWM (Pulsweitenmodulation) mit einem Raspberry Pi (oder einem Arduino) verbunden werden können.

* [APA102](/de/user/leddevices/spi_pwm/apa102.md)
* [APA104](/de/user/leddevices/spi_pwm/apa104.md)
* [LPD6803](/de/user/leddevices/spi_pwm/lpd6803.md)
* [LPD8806](/de/user/leddevices/spi_pwm/lpd8806.md)
* [P9813](/de/user/leddevices/spi_pwm/p9813.md)
* [SK6812](/de/user/leddevices/spi_pwm/sk6812.md)
* [SK9822](/de/user/leddevices/spi_pwm/sk9822.md)
* [WS2801](/de/user/leddevices/spi_pwm/ws2801.md)
* [WS2812B](/de/user/leddevices/spi_pwm/ws2812b.md)
* [pi-blaster](/de/user/leddevices/spi_pwm/piblaster.md)


#### PWM-Voraussetzungen (Steuerungstyp RPi PWM/ws281x)
PWM (Pulsweitenmodulation) setzt voraus, dass Hyperion unter dem Benutzer `root` läuft.\
Falls Sie Hyperion als Dienst ausführen: [Ändern des Benutzers des Dienstes auf 'root'](/de/user/Installation.html#change-the-service-user-to-root)

#### SPI-Voraussetzungen (Steuerungstypgruppe RPi SPI)
Auf den meisten Systemen ist das SPI (Serial Peripheral Interface) standardmäßig nicht an und muss aktiviert werden.
::: details SPI aktivieren

Für Nicht-RPI-Geräte schau bitte in der Dokumentation deines Gerätes nach.

Die SPI-Aktivierung für Raspberry Pi-Geräte hängt vom verwendeten Betriebssystem ab:

* **Raspberry Pi OS**

`sudo raspi-config nonint do_spi 0`

* **LibreELEC**

Füge `dtparam=spi=on` zur config.txt gemäß [LibreELEC Wiki Anleitung](https://wiki.libreelec.tv/configuration/config_txt) hinzu.

* **CoreELEC / OSMC**

SPI kann über Hardware unter Einstellungen aktiviert werden.

* **Andere**

Bitte konsultiere die Systemdokumentation.

:::

Wenn Du mehr als 250 LEDs betreiben willst, musst die SPI-Puffergröße erhöht werden

::: details SPI Puffer vergrößern

Füge `spidev.bufsize=1024000` in die cmdline.txt ein.

Die Konfiguration auf Raspberry Pi Geräten hängt vom verwendeten Betriebssystem ab:

* **Raspberry Pi OS**

Bearbeite die Datei cmdline.txt in der Boot-Partition unter `/boot/firmware/`.

**Hinweis**: Vor der Bookworm-Version befand sich diese Datei unter `/boot/`. 

* **LibreELEC**

Editiere die Datei cmdline.txt auf die gleiche Weise wie die Datei [config.txt](https://wiki.libreelec.tv/configuration/config_txt).

* **Andere**

Bitte konsultiere die Systemdokumentation.

:::

### USB/Seriell
Plug and Play. Die folgenden Controller werden unterstützt.

* [Adalight](/de/user/leddevices/usb/adalight.md)
* [Atmo](/de/user/leddevices/usb/atmo.md)
* [DMX](/de/user/leddevices/usb/dmx.md)
* [Hyperion-USBasp](/de/user/leddevices/usb/hyperion-usbasp.md)
* [Karate](/de/user/leddevices/usb/karate.md)
* [Lightpack](/de/user/leddevices/usb/lightpack.md)
* [Multi-Lightpack](/de/user/leddevices/usb/multilightpack.md)
* [Paintpack](/de/user/leddevices/usb/paintpack.md)
* [RawHID](/de/user/leddevices/usb/rawhid.md)
* [SEDU](/de/user/leddevices/usb/sedu.md)
* [TPM2](/de/user/leddevices/usb/tpm2.md)

### Netzwerk
Alles, was über das Netzwerk erreichbar ist.

* [AtmoOrb](/de/user/leddevices/network/atmoorb.md)
* [Cololight](/de/user/leddevices/network/cololight.md)
* [FadeCandy](/de/user/leddevices/network/fadecandy.md)
* [Nanoleaf](/de/user/leddevices/network/nanoleaf.md)
* [Philips Hue](/de/user/leddevices/network/philipshue.md)
* [Razer Chroma](/de/user/leddevices/network/razer.md)
* [Tinkerforge](/de/user/leddevices/network/tinkerforge.md)
* [TPM2.NET](/de/user/leddevices/network/tpm2net.md)
* [UDP ArtNet ](/de/user/leddevices/network/udpartnet.md)
* [UDP DDP](/de/user/leddevices/network/udpddp.md)
* [UDP E1.31](/de/user/leddevices/network/udpe131.md)
* [UDP Raw](/de/user/leddevices/network/udpraw.md)
* [WLED](/de/user/leddevices/network/wled.md)
* [Yeelight](/de/user/leddevices/network/yeelight.md)

### Sonstige
Alle anderen Geräte, die in keine der Kategorien passen.

* [File](/de/user/leddevices/others/debug.md)
