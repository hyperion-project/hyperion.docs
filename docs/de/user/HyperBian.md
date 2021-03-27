# HyperBian
Ein fertiges (Ready-to-use) System für deinen Raspberry Pi, basierend auf dem originalen "Raspberry Pi OS Lite" Betriebssystem. Hyperion ist natürlich vorinstalliert. Einfacher geht es nicht.
1. [Herunterladen](https://github.com/Hyperion-Project/HyperBian/releases)
2. Auf die SD-Karte/SSD/HDD/USB-Stick etc. schreiben
3. Raspberry Pi einschalten
4. Und mit deinen Browser die Adresse `http://IpAdresseDeinesRPi:8090` zum konfigurieren aufrufen
 

## Anforderung
  * SD-Karte/SSD/HDD/USB-Stick etc. mit mindestens 2 GB
  * Raspberry Pi (Zero/1/2/3/4)
  * Linux/Mac/Windows + SD Kartenleser/-schreiber

## Installation
  * HyperBian [herunterladen](https://github.com/Hyperion-Project/HyperBian/releases)
  * Die Datei HyperBian.zip entpacken
  * Die entpackte HyperBian-****.img auf deine SD Karte/ SSD etc. schreiben \
    Wie das funktioniert findest du hier:
    [Windows](https://www.raspberrypi.org/documentation/installation/installing-images/windows.md)
    [Mac OS](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md)
    [Linux](https://www.raspberrypi.org/documentation/installation/installing-images/linux.md)
  * Solltest du vorhaben deinen Raspberry Pi über WLAN zu betreiben, kannst du deine SD-Karte/SSD etc. schon vorbereiten bevor du sie in/an deinen RPi ansteckst. Siehe [WLAN](#wlan)
  * Optional: Aktiviere [SSH](#ssh)

### WLAN
Wenn du deinen Raspberry Pi über WLAN betreiben möchtest, kannst du die WLAN-SSID und das Passwort von deinem Router schon vor dem ersten Start deines Raspberry Pi auf die SD-Karte/SSD/HDD/USB-Stick etc. schreiben. \
Öffne über den Datei-Explorer die SD-Karte/SSD/HDD/USB-Stick etc mit dem Namen "**boot**".

 - Erstelle eine neue Textdatei
<ImageWrap src="/images/en/user_hyperbian_wpa_suppli1.jpg" alt="Neue Textdatei" />

- Benenne sie in "wpa_supplicant.conf" um
<ImageWrap src="/images/en/user_hyperbian_wpa_suppli2.jpg" alt="Umbenannt in wpa_supplicant.conf"/>

- Füge deine WLAN-SSID und das Passwort hinzu. Ersetzen **SSID** und **PASSWORT** durch deine Werte.

```
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1
country=GB

  network={
    ssid="SSID"
    psk="PASSWORT"
    key_mgmt=WPA-PSK
  }
```

<ImageWrap src="/images/en/user_hyperbian_wpa_suppli3.jpg" alt="Deine WLAN Konfiguration"/>
 - Nur noch abspeichern! Wenn du die SD-Karte/SSD/HDD/USB-Stick etc. anschließt ist alles fertig vorkonfiguriert.

### SSH
Eigentlich solltest du den Zugang nicht benötigen, aber wir erklären es trotzdem. \
Zum aktivieren von SSH, öffne über den Datei-Explorer die SD-Karte/SSD/HDD/USB-Stick etc mit dem Namen "**boot**". Erstelle eine neue Textdatei und benenne die Datei in `ssh` um (ohne Dateierweiterung). Der SSH Zugang sollte danach aktivert sein. \

**SSH LOGIN**
 - Benutzername: pi
 - Passwort: raspberry

<ImageWrap src="/images/en/user_hyperbian_ssh.jpg" alt="SSH aktivieren"/>
