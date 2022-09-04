# HyperBian
Ein fertiges (Ready-to-use) System für deinen Raspberry Pi, basierend auf dem originalen "Raspberry Pi OS Lite" Betriebssystem. Hyperion ist natürlich vorinstalliert. Einfacher geht es nicht.
1. [Herunterladen](https://github.com/Hyperion-Project/HyperBian/releases)
2. Das Image auf die SD-Karte/SSD/HDD/USB-Stick etc. schreiben
3. Raspberry Pi einschalten
4. Zum Konfigurieren mit Deinem Browser die Adresse `http://IpAdresseDeinesRPi:8090` aufrufen
 

## Anforderung
  * SD-Karte/SSD/HDD/USB-Stick etc. mit mindestens 2 GB
  * Raspberry Pi (Zero/1/2/3/4)
  * Linux/Mac/Windows + SD Kartenleser/-schreiber

## Installation
  * HyperBian [herunterladen](https://github.com/Hyperion-Project/HyperBian/releases)
  * Die Datei HyperBian.zip entpacken
  * Die entpackte HyperBian-****.img auf Deine SD Karte/ SSD etc. schreiben \
    Wie das funktioniert findest Du hier:
    [Windows](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)
    [Mac OS](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md)
    [Linux](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md)
  * Solltest Du vorhaben Deinen Raspberry Pi über WLAN zu betreiben, kannst Du Deine SD-Karte/SSD etc. schon vorbereiten bevor Du sie in/an Deinen RPi steckst. Siehe [WLAN](#wlan)
  * Optional: Aktiviere [SSH](#ssh)

### WLAN
Wenn Du Deinen Raspberry Pi über WLAN betreiben möchtest, kannst Du die WLAN-SSID und das Passwort von Deinem Router schon vor dem ersten Start Deines Raspberry Pis auf die SD-Karte/SSD/HDD/USB-Stick etc. schreiben. \
Öffne über den Datei-Explorer die SD-Karte/SSD/HDD/USB-Stick etc mit dem Namen "**boot**".

 - Erstelle eine neue Textdatei
<ImageWrap src="/images/de/user_hyperbian_new_text_file.png" alt="Neue Textdatei" />

- Benenne sie in "wpa_supplicant.conf" um
<ImageWrap src="/images/de/user_hyperbian_rename_to_wpa_supplicant.png" alt="Umbenannt in wpa_supplicant.conf"/>

- Füge Deine WLAN-Anmeldeinformationen hinzu. \
Ersetze **SSID** und **PASSWORT** durch Deine Werte.

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=DE

network={
   ssid="SSID"
   psk="PASSWORT"
   key_mgmt=WPA-PSK
}
```
 ::: warning Hinweis:
Ersetze ggf. 'DE' durch den ISO-Code Deines Landes.
Siehe Wikipedia für eine Liste der Ländercodes.
:::
 - Jetzt noch abspeichern! Du bist fertig und das WLAN wird beim nächsten Booten des Raspberry Pis konfiguriert.

### SSH
Eigentlich solltest Du den Zugang nicht benötigen, aber wir erklären es trotzdem. \
Zum aktivieren von SSH, öffne über den Datei-Explorer die SD-Karte/SSD/HDD/USB-Stick etc. mit dem Namen "**boot**". Erstelle eine neue Textdatei und benenne die Datei in `ssh` um (ohne Dateierweiterung). Der SSH Zugang sollte danach aktiviert sein.

<ImageWrap src="/images/de/user_hyperbian_ssh_file.png" alt="SSH aktivieren"/>

#### SSH LOGIN
 - Benutzername: `hyperion`
 - Passwort: `ambientlight`

::: tip
  HyperBian wird mit einer englischen Tastatur-Konfiguration ausgeliefert. Dort sind die Zeichen 'y' und 'z' vertauscht. Für den Benutzernamen musst Du also zuerstmal `hzperion` tippen; danach kannst Du das Tataturlayout per `sudo raspi-config` ändern.
:::

