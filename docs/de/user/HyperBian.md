# HyperBian
Ist ein einsatzbereites (Ready-to-use) Image für Deinen Raspberry Pi. Es basiert auf dem originalen Raspberry Pi Foundation Image "Raspberry Pi OS Lite". Hyperion ist bereits vorinstalliert. Einfacher geht es nicht.
1. [Herunterladen](https://github.com/Hyperion-Project/HyperBian/releases)
2. Image auf SD brennen 
3. Raspberry Pi einschalten
4. Zum Konfigurieren mit Deinem Browser die Adresse `http://IpAdresseDeinesRPi:8090` aufrufen

## Anforderungen
  * SD-Karte mit mindestens 4 GB Größe
  * Raspberry Pi
  * Linux/Mac/Windows + SD Kartenleser/-schreiber

## Installation
  1. Lade das fertige [HyperBian Image](https://github.com/Hyperion-Project/HyperBian/releases) herunter
  2. Installiere den [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager), um das Image auf eine SD-Karte zu brennen.
  3. Starte den Pi Imager
  4. Wähle als Betriebssystem "Custom OS" und wähle das heruntergeladene HyperBian-XXXX-Paket aus
  5. Wähle das Ziel, d.h. die SD-Karte
  6. Klicken auf "Next" und wähle "No" für keine zusätzlichen Anpassungen
  7. Das HyperBian-Image sollte nun auf die SD-Karte geschrieben werden
  8. Stecke die SD-Karte in den Raspberry Pi und starte das System

### WiFi, Zeitzone & ssh-Zugang
Falls der Raspberry Pi mit WLAN genutzt werden soll oder die Zeitzone bzw. andere OS-bezogene Konfigurationen aktualisiert werden sollen, kann das Pi Imager OS-Customization Menü verwendet werden.
Im Installationsschritt 6. wähle "Edit Settings" und gib dann z.B. die WLAN SSID, das Passwort und das Land an.
Sichere die die Einstellungen mit "Save" und fahre mit "Yes" fort, um den Imager-Prozess zu starten.

::: tip Verwenden den Standardbenutzer (und das Passwort) von HyperBian, falls diese angegeben werden müssen.
 - Benutzer: `hyperion`
 - Kennwort: `ambientlight`
 
Es kann auch ein anderer Benutzernamen gewählt werden, allerdings muss dann der vorkonfigurierte Dienst von Hyperion später aktualisieren werden-
Aktualisierung des Dienstes auf den [aktuellen Benutzer](/de/user/GettingStarted.md#andern-des-benutzer-des-dienstes-auf-den-aktuellen-benutzer)
:::

Die Konfiguration wird während des ersten Starts durchgeführt.

::: details Alternative Methode

Falls der PI Imager nicht verwende wird oder die Details nicht das OS-Customization Menü angegeben werden sollen, 
kann man die Einrichtung auch per Datei vornehmen.

Erstelle eine Datei namens `custom.toml`.
Passe die Datei mit den gewünschten Einstellungen an. Kommentiere alle die Elemente aus, die nicht geändert werden sollen.

Speicher die Datei in der Boot Partion der SD-Karte.

**Beispiel - custom.toml**

``` toml
# Required:
config_version = 1

[system]
hostname = "HyperBian"

[user]
name = "hyperion"
# The password can be encrypted or plain. To encrypt, we can use "openssl passwd -5 raspberry"
password = "ambientlight"
password_encrypted = false

[ssh]
# ssh_import_id = "gh:user" # import public keys from github
enabled = false
password_authentication = true
# We can also seed the ssh public keys configured for the default user:
# authorized_keys = [ "ssh-rsa ... user@host", ... ]

[wlan]
ssid = "myWifi"
password = "myWifiPassword"
password_encrypted = false
hidden = false
# The country is written to /etc/default/crda
# Reference: https://wireless.wiki.kernel.org/en/developers/Regulatory
country = "DE"

[locale]
keymap = "de"
timezone = "Europe/Berlin"
```
:::

#### Standard SSH LOGIN
 - Benutzername: `hyperion`
 - Passwort: `ambientlight`

::: tip Tip
  HyperBian wird mit einer englischen Tastatur-Konfiguration ausgeliefert. Dort sind die Zeichen 'y' und 'z' vertauscht. Für den Benutzernamen musst Du also zuerstmal `hzperion` tippen; danach kannst Du das Tataturlayout per `sudo raspi-config` ändern.
:::

