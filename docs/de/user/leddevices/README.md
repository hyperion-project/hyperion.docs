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

Um zusätzliche Konfigurationselemente anzuzeigen, ändere die [Einstellungsstufe](/de/user/Konfiguration.html#einstellungsstufen).
:::

## Allgemeine Einstellungen

Allgemeine Einstellungen findest Du bei jedem LED-Gerätetyp.

##### Anzahl Hardware LEDs
Die Anzahl der physikalischen LEDs, die vom Gerät angesprochen werden können.

::: details Falls der Hardware LED Count deaktiviert ist
Bei einigen Geräten ist das Eingabeelement deaktiviert, da die Anzahl der LEDs automatisch aufgelöst wird.

Wenn die Eigenschaften eines Geräts nicht abrufen weren können, erhäst Du eine Fehlermeldung. Überprüfe die vorgenommene Konfiguration oder aktualisiere die Seite.
:::

#### Erweiterte Einstellungen

##### RGB-Byte-Reihenfolge

Die RGB-Byte-Reihenfolge ist für jeden LED-Gerätetyp konfigurierbar. Wenn du diesen Wert überprüfen oder ändern möchtest, verwende den "RGB Byte Reihenfolge Assistenten" (Zauberstab).

##### Autostart
Ein LED-Gerät wird standardmäßig gestartet, wenn Hyperion gestartet wird.
Falls der Autostart deaktiviert ist, muss das Gerät später manuell oder über die API eingeschaltet werden.

##### Verbindungsversuche
Jedes LED-Gerät bietet die Möglichkeit, die Verbindung erneut zu öffnen.
Wenn die Anzahl der Verbindungsversuche überschritten wird, geht das LED-Gerät in den Fehlerzustand über.

##### Wiederholungsintervall
Die Anzahl der Sekunden, die bis zur nächsten Wiederholung des Verbindungsversuchs vergehen sollen.

### Spezifische Einstellungen
Jedes LED-Gerät unterstützt zusätzliche, gerätespezifische Einstellungen.
Einige Einstellungen sind für die verschiedenen Gerätekategorien gleich.

### Aktionen

##### Einstellungen Speichern
Erlaubt das Speichern der Einstellungen, wenn die Konfiguration gültig ist.

Falls noch kein [LED-Layout](/de/user/advanced/Advanced.html#led-layout) konfiguriert ist, hast Du die Möglichkeit, ein Standard-Layout zu erstellen und es später anzupassen.
Wenn die Anzahl der im Layout konfigurierten LEDs die Anzahl der Hardware-LEDs übersteigt, überprüfe die Konfiguration oder das Layout und passe es an.

##### Identifiziere
Bei einigen LED-Gerätetypen kannst Du die technischen Einstellungen vor dem Speichern testen bzw. die LEDs der Gerätes zur Identifikation aufleuchten lassen.

Die Schaltfläche "Identifiziere" ist nur dann aktiviert, wenn die aktuelle Konfiguration gültig ist.

## Steuerungs-Typen

Hyperion unterstützt mehrere verschiedene LED-Geräte, die sich in vier Hauptkategorien einteilen lassen:

### SPI/PWM
3 oder 4 adrige Led Strips, die über SPI/PWM (Pulsweitenmodulation) mit einem Raspberry Pi (oder einem Arduino) verbunden werden können.

* [APA102](/de/user/leddevices/spi_pwm/apa102)
* [APA104](/de/user/leddevices/spi_pwm/apa104)
* [LPD6803](/de/user/leddevices/spi_pwm/lpd6803)
* [LPD8806](/de/user/leddevices/spi_pwm/lpd8806)
* [P9813](/de/user/leddevices/spi_pwm/p9813)
* [SK6812](/de/user/leddevices/spi_pwm/SK6812)
* [SK9822](/de/user/leddevices/spi_pwm/SK9822)
* [WS2801](/de/user/leddevices/spi_pwm/ws2801)
* [WS2812](/de/user/leddevices/spi_pwm/ws2812)
* [pi-blaster](/de/user/leddevices/spi_pwm/piblaster)

Auf den meisten Systemen ist das SPI (Serial Peripheral Interface) standardmäßig nicht an und muss aktiviert werden.
::: details SPI aktivieren

**Raspberry Pi / Raspberry Pi OS**

`sudo raspi-config nonint do_spi 0`

**Raspberry Pi / LibreELEC**

Füge `dtparam=spi=on`gemäß [LibreELEC Wiki Anleitung](https://wiki.libreelec.tv/configuration/config_txt) zur config.txt hinzu.
:::

Wenn Du mehr als 250 LEDs betreiben willst, musst die SPI-Puffergröße erhöht werden

::: details SPI Puffer vergrößern

Füge `spidev.bufsize=1024000` in die cmdline.txt ein
:::

### USB/Seriell
Plug and Play. Die folgenden Controller werden unterstützt.

* [Adalight](/de/user/leddevices/usb/adalight)
* [Atmo](/de/user/leddevices/usb/atmo)
* [DMX](/de/user/leddevices/usb/dmx)
* [Hyperion-USBasp](/de/user/leddevices/usb/hyperion-usbasp)
* [Karate](/de/user/leddevices/usb/karate)
* [Lightpack](/de/user/leddevices/usb/lightpack)
* [Multi-Lightpack](/de/user/leddevices/usb/multilightpack)
* [Paintpack](/de/user/leddevices/usb/paintpack)
* [RawHID](/de/user/leddevices/usb/rawhid)
* [SEDU](/de/user/leddevices/usb/sedu)
* [TPM2](/de/user/leddevices/usb/tpm2)

### Netzwerk
Alles, was über das Netzwerk erreichbar ist.

* [AtmoOrb](/de/user/leddevices/network/atmoorb)
* [Cololight](/de/user/leddevices/network/cololight)
* [FadeCandy](/de/user/leddevices/network/fadecandy)
* [Nanoleaf](/de/user/leddevices/network/nanoleaf)
* [Philips Hue](/de/user/leddevices/network/philipshue)
* [Razer Chroma](/de/user/leddevices/network/razer)
* [Tinkerforge](/de/user/leddevices/network/tinkerforge)
* [TPM2.NET](/de/user/leddevices/network/tpm2net)
* [UDP ArtNet ](/de/user/leddevices/network/udpartnet)
* [UDP DDP](/de/user/leddevices/network/udpddp)
* [UDP E1.31](/de/user/leddevices/network/udpe131)
* [UDP Raw](/de/user/leddevices/network/udpraw)
* [WLED](/de/user/leddevices/network/wled)
* [Yeelight](/de/user/leddevices/network/yeelight)

### Sonstige
Alle anderen Geräte, die in keine der Kategorien passen.

* [File](/de/user/leddevices/others/debug)
