# HyperBian
HyperBian ist ein Satz von sofort einsatzbereiten Images für den Raspberry Pi.

Es basiert auf dem ursprünglichen Image der Raspberry Pi Foundation, "Raspberry Pi OS Lite", das früher Raspbian hieß. Hyperion und Raspbian bilden also HyperBian.

Hier ist ein grober Überblick über den Installationsprozess:
1. [Lade](https://github.com/Hyperion-Project/HyperBian/releases) das HyperBian-Image für deinen Raspberry Pi herunter.
2. Schreib das Image von einem PC auf eine microSD-Karte.
3. Optional kannst du das Wi-Fi-Netzwerk oder die Systemeinstellungen deines Raspberry Pi anpassen, z. B. die Sprache oder die Zeitzone.
4. Lege die SD-Karte ein und schalte deinen Pi ein.
5. Navigiere in einem Webbrowser zu `http://IP.Deines.RPi:8090`, um auf die Hyperion-Weboberfläche zuzugreifen.

## Anforderungen
  * Raspberry Pi
  * PC mit Linux, macOS oder Windows
  * microSD- oder SD-Kartenleser
      * Für SD-Kartenleser verwende einen [microSD-zu-SD-Adapter](https://de.wikipedia.org/wiki/SD_Memory_Card#Adapter)
  * microSD-Karte mit einer Kapazität von mindestens 4 GB
  
## Installationsanweisungen
  1. Lade das passende [HyperBian-Image](https://github.com/Hyperion-Project/HyperBian/releases) für deine Raspberry Pi [Hardware](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html) herunter.
  
     Wenn du einen Raspberry Pi 1, 2 oder Zero v1 verwendest, lade das Asset mit `armhf` im Dateinamen herunter.\
     Für alle anderen Versionen des Raspberry Pi lade die Datei mit `arm64` herunter.

  2. Extrahiere die `.zip`-Datei. Du solltest nun eine `.img`-Datei haben.

  3. Lade dein bevorzugtes Tool zum Schreiben von Images auf SD-Karten herunter und installiere es. Die folgenden Anweisungen behandeln diese Tools:

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Raspberry Pi Imager"
  4. Lade und installiere den [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager).
  5. Starte den `Raspberry Pi Imager`.
  6. Wähle im Schritt "Gerät" dein Raspberry Pi-Gerät aus.
  7. Wähle im Schritt "Betriebssystem" unten in der Liste `Eigenes Image verwenden`.
  8. Wähle die extrahierte HyperBian `.img`-Datei aus.
  9. Wähle im Schritt "Speichergerät" deine microSD-Karte aus.
  10. Bestätige im Schritt "Schreiben" die Installationsdetails und klicke auf die Schaltfläche "Schreiben", um mit dem Schreiben des Images auf die SD-Karte zu beginnen.
  11. Warte, bis das Image auf die SD-Karte geschrieben wurde.

:::::
::::: tab name="balenaEtcher"
  4. Lade und installiere [balenaEtcher](https://www.balena.io/etcher/).
  5. Starte balenaEtcher.
  6. Klicke auf die Schaltfläche `Flash from file`. 
  7. Wähle die extrahierte HyperBian `.img`-Datei aus.
  8. Klicke auf die Schaltfläche `Select "Target"` und wähle deine SD-Karte aus.
  9.  Klicke auf die Schaltfläche `Flash!`, um mit dem Schreiben des Images auf die SD-Karte zu beginnen.
  10. Warte, bis das Image auf die SD-Karte geschrieben wurde.
:::::

::::: tab name="Win32 Disk Imager"
  4. Lade und installiere [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/).
  5. Starte Win32DiskImager.
  6. Klicke im Abschnitt "Image-Datei" auf das blaue Ordnersymbol und wähle die extrahierte HyperBian `.img`-Datei aus.
  7. Wähle im Abschnitt "Gerät" den Laufwerksbuchstaben aus, der deinem SD-Kartengerät entspricht.
  8. Klicke auf die Schaltfläche `Schreiben`, um das Image auf die SD-Karte zu schreiben.
  9.  Warte, bis das Image auf die SD-Karte geschrieben wurde.
:::::
::::::

Nachdem das HyperBian-Image erfolgreich auf die SD-Karte geschrieben wurde, kannst du optional die Raspberry Pi-Konfiguration anpassen.

1. Bereite vor dem ersten Start die WLAN- und/oder Systemkonfigurationsdateien vor.
2. Führe nach dem ersten Start den Befehl `raspi-config` von der CLI aus.

### Konfigurationsdateien
WLAN- und Systemkonfigurationsdateien können mit den unten stehenden Assistenten-Tools oder durch direktes Bearbeiten der bereits vom Image bereitgestellten Konfigurationsdateien generiert werden.

> [!IMPORTANT]
> Speichere die Konfigurationsdatei(en) in der Boot-Partition deiner SD-Karte. Die Konfiguration wird dann nach dem ersten Start durchgeführt.

:::::: details Eine WLAN-Konfigurationsdatei vorbereiten

<WifiConfigGenerator />

#### Wie du den WLAN-Konfigurationsgenerator benutzt

1. Gib deine Netzwerkdetails ein:
   - **SSID**: Dein WLAN-Netzwerkname
   - **Passwort**: Dein WLAN-Passwort
   - **Land**: Dein zweistelliger Ländercode, z.B. DE, US, GB, FR.

      :::: tip
      Eine Liste der Ländercodes findest du in der [ISO 3166-1 alpha-2 Norm](https://de.wikipedia.org/wiki/ISO-3166-1-Kodierliste).
      ::::

2. Klicke auf die Schaltfläche `Konfiguration speichern`, um deine angepasste `network-config`-Datei zu speichern.

      - Wenn dein Browser fragt, wo die Datei gespeichert werden soll, wähle den Zielordner aus. Andernfalls wird sie am Standardspeicherort gespeichert, z.B. im `Downloads`-Ordner.

3. Kopiere die `network-config`-Datei in die `boot`-Partition deiner HyperBian SD-Karte.

#### Was ist die `network-config`-Datei?

Die `network-config`-Datei wird von HyperBian beim ersten Start verwendet, um die WLAN-Verbindung deines Raspberry Pi zu konfigurieren. Indem du diese Datei vor dem ersten Start in die Boot-Partition legst, verbindet sich dein Gerät automatisch mit deinem WLAN-Netzwerk.

Dieses Assistenten-Tool hilft dir, eine WLAN-Konfigurationsdatei für deine HyperBian-Installation zu generieren.

Gib einfach unten deine Netzwerkdetails ein und klicke auf "Konfiguration generieren", um eine angepasste Konfigurationsdatei zu erstellen.

:::: details Manuelle Konfiguration

Wenn du die Konfigurationsdatei lieber manuell bearbeiten möchtest, kannst du die folgende Vorlage verwenden:

```yaml
####################################################################################
## Konfiguriere unten deine HyperBian WLAN-Verbindung nach deinen Bedürfnissen.
## Kommentiere die relevanten Abschnitte nach Bedarf aus und bearbeite sie.
##
## Wenn du zusätzliche Anforderungen hast, lies die Cloud-Init-Dokumentation
## und die Netplan-Referenz für vollständige Details:
##
## https://netplan.io/reference
## https://cloudinit.readthedocs.io/en/latest/topics/network-config.html
## https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html
####################################################################################

network:
  version: 2 
  wifis:
    wlan0:
      dhcp4: true
      optional: true
      access-points:
        "DEINE_SSID":
          password: "DEIN_PASSWORT"
      regulatory-domain: DEIN_LAENDERCODE
```

Ersetze `DEINE_SSID`, `DEIN_PASSWORT` und `DEIN_LAENDERCODE` durch deine tatsächlichen Werte.
::::

::::::

:::::: details Eine Systemkonfigurationsdatei vorbereiten

Dieses Assistenten-Tool hilft dir, eine Systemkonfigurationsdatei für deine HyperBian-Installation zu generieren.

Gib einfach unten deine Systemdetails ein und klicke auf "Konfiguration generieren", um eine angepasste Konfigurationsdatei zu erstellen.

<SystemConfigGenerator />

#### Wie du den Systemkonfigurationsgenerator benutzt

1. Fülle das Formular mit deinen gewünschten Systemeinstellungen aus:
    - **Benutzername**

    - **Passwort**

    - **Hostname**: Wenn dein Netzwerk [mDNS](https://www.raspberrypi.com/documentation/computers/remote-access.html#resolve-raspberrypi-local-with-mdns) unterstützt, auch bekannt als Bonjour oder Avahi, kann der Hostname verwendet werden, um auf deine Hyperion-Weboberfläche zuzugreifen, d.h. `http://hostname.local:8090`.

    - Wenn du das Kontrollkästchen für die folgenden drei Einstellungen aktivierst, wird ein Dropdown-Menü angezeigt. Wähle deine gewünschte Option aus dem Dropdown-Menü.

        - **Zeitzone einstellen**: Zeitzonen müssen gültige [IANA-Zeitzonen-Identifikatoren](https://de.wikipedia.org/wiki/Zeitzone#Liste_der_Zeitzonen) sein.

        - **Gebietsschema einstellen**: Das Gebietsschema muss der [glibc-Gebietsschema-Benennung](https://github.com/bminor/glibc/blob/master/localedata/SUPPORTED) folgen und vom System unterstützt werden.

        - **Tastaturlayout einstellen**: Layouts müssen gültige XKB-Layout-Namen sein.

    - **SPI-Schnittstelle aktivieren**: Aktiviere oder deaktiviere die SPI-Schnittstelle. Aktiviere diese, wenn deine LEDs über die [SPI-Pins](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#alternative-functions) des Raspberry Pi in der GPIO kommunizieren.

    - **SSH-Zugriff aktivieren**: Aktiviere oder deaktiviere den SSH-Zugriff. Aktiviere diesen, wenn du Fernzugriff auf die CLI wünschst, z.B. um [den Dienstbenutzer zu ändern](https://docs.hyperion-project.org/de/user/gettingstarted/Overview.html#change-the-service-user), um WS281x-LEDs mit den [PWM-Pins](https://www.raspberrypi.com/documentation/computers/raspberry-pi.html#alternative-functions) des Raspberry Pi in der GPIO zu verwenden.

2. Klicke auf `Konfiguration speichern`, um deine angepasste `user-data`-Datei zu speichern.

    - Wenn dein Browser fragt, wo die Datei gespeichert werden soll, wähle den Zielordner aus. Andernfalls wird sie am Standardspeicherort gespeichert, z.B. im `Downloads`-Ordner.

3. Kopiere die `user-data`-Datei in die `boot`-Partition deiner HyperBian SD-Karte.


#### Was ist die `user-data`-Datei?

Die `user_data`-Datei wird von HyperBian beim ersten Start verwendet, um die Einrichtung deines Raspberry Pi zu konfigurieren. Indem du diese Datei in die Boot-Partition legst, kannst du Einstellungen wie Benutzername, Passwort, Hostname und mehr vorkonfigurieren.

:::: details Manuelle Konfiguration

Wenn du die Konfigurationsdatei lieber manuell bearbeiten möchtest, kannst du die folgende Vorlage verwenden.

Ersetze die Platzhalter- oder Beispielwerte durch deine gewünschte Konfiguration. Möglicherweise musst du Auswahlen auskommentieren, damit sie funktionieren.

```yaml
## template: jinja
#cloud-config

# Dies ist die user-data-Konfigurationsdatei für cloud-init. 
# Es können jedoch viele zusätzliche Aktionen beim ersten Start aus dieser Datei initiiert werden.
#  Die cloud-init-Dokumentation enthält weitere Details:
#
# https://cloudinit.readthedocs.io/
#
# Bitte beachte, dass das von dieser Datei verwendete YAML-Format empfindlich auf
# Unterschiede von Leerzeichen reagiert; wenn du diese Datei in einem Editor (wie
# Notepad) bearbeitest, der Tabulatoren verwendet, achte darauf, nur Leerzeichen für
# die Einrückung zu verwenden. Weitere Details findest du unter folgendem Link:
#
# https://de.wikipedia.org/wiki/YAML
#

#####################################################################################
## Konfiguriere unten dein anfängliches HyperBian-System nach deinen Bedürfnissen ###
## Kommentiere die relevanten Abschnitte nach Bedarf aus und bearbeite sie.       ###
#####################################################################################

# 1. Definiere den Hyperion-Benutzernamen (optional)
{% set HYPERION_USER = "DEIN_HYPERION_BENUTZERNAME" %}

# 2. Definiere, ob der SSH-Zugriff aktiviert werden soll (optional)
{% set ENABLE_SSH = false %}

# 3. Lege den Hostnamen des Systems fest (optional)
hostname: DEIN_HYPERBIAN_HOSTNAME

# 4. Lege die Zeitzone für diese Instanz fest (optional)
# der Wert von 'timezone' muss in /usr/share/zoneinfo vorhanden sein
# Führe aus: timedatectl list-timezones

## Beispiel für die Berliner Zeitzone
#timezone: Europe/Berlin

# 5. Lege das Gebietsschema auf ein bestimmtes Gebietsschema fest; Standard: en_GB.UTF-8 (optional)
# Führe aus: locale -a

## Beispiel für das deutsches Gebietsschema
#locale: de_DE.UTF-8

# 6. Richte das Tastaturlayout ein (optional)
# Siehe localectl(1), insbesondere die verschiedenen list-x11-*-Unterbefehle,
# um die verfügbaren Modelle, Layouts, Varianten und Optionen zu bestimmen
# Führe aus: localectl list-x11-keymap-layouts

## Beispiel für das deutsches Tastaturlayout
#keyboard:
#  layout: de

# 7. Aktiviere die SPI-Schnittstelle (optional)
rpi:
  interfaces:
    spi: true

#####################################################
### AB HIER KEINE ÄNDERUNGEN, AUSSER DEM PASSWORT ###
#####################################################

users:
- name: {{ HYPERION_USER }}
  gecos: Hyperion user
  groups: users, dialout, sudo, video, audio, gpio, spi, i2c
  sudo: ["ALL=(ALL) NOPASSWD:ALL"]
  lock_passwd: false
  passwd: "DEIN_HYPERION_BENUTZERNAME_PASSWORT_VERSCHLUESSELT"
  shell: /bin/bash
 
ssh_pwauth: {{ ENABLE_SSH }}

runcmd:
  - |
    echo "Setup für Hyperion-Benutzer wird ausgeführt: {{ HYPERION_USER }}"
    /usr/share/hyperion/scripts/updateHyperionUser.sh -u "{{ HYPERION_USER }}"
    
{% if ENABLE_SSH %}
  - systemctl unmask ssh
  - systemctl enable ssh
  - systemctl start ssh
{% else %}
  - echo "SSH ist in der Konfiguration deaktiviert"
{% endif %}
```
> [!NOTE]
> Das `passwd`-Feld erfordert einen SHA-512-verschlüsselten Passwort-Hash, z.B. führe `openssl passwd -6 "DEIN_PASSWORT"` aus und ersetze `DEIN_HYPERION_BENUTZERNAME_PASSWORT_VERSCHLUESSELT` durch die Ausgabe.

::::
::::::

-> Lege nun die SD-Karte in deinen Raspberry Pi ein und starte das System.

::: info
Der Raspberry Pi kann während der Konfiguration des Systems mehrmals neu starten.
:::

#### Ausführen des Befehls `raspi-config`

::: tip Anpassung der Konfiguration nach dem ersten Start
Wenn du die Konfiguration des Raspberry Pi anpassen möchtest, ohne die oben genannten Konfigurationsdateien zu verwenden, kannst du die Konfiguration immer noch über den [Befehl](https://www.raspberrypi.com/documentation/computers/configuration.html) `sudo raspi-config` aktualisieren.
:::

Diese Methode erfordert möglicherweise einen speziellen HDMI-Adapter oder ein Kabel, das nicht immer allen Benutzern zur Verfügung steht. Daher wird empfohlen, aus Gründen der Einfachheit die Konfigurationsdateien wie im vorherigen Abschnitt beschrieben zu verwenden.

### Standardkonfiguration

::: tip Standard-Benutzername, Passwort und Hostname von HyperBian
 - Benutzer: `hyperion`
 - Passwort: `ambientlight`
 - Hostname: `hyperbian`
:::

::: tip Standard-Tastatursprache und -layout
HyperBian wird standardmäßig mit einer englischen Tastatur ausgeliefert. Wenn du keine englische Tastatur besitzt, könnten einige Tasten an einer anderen Stelle zu finden sein. Es sind z.B. die Zeichen 'y' und 'z' vertauscht. Für den Benutzernamen musst Du also zuerstmal `hzperion` tippen; danach kannst Du das Tataturlayout per `sudo raspi-config` ändern.
:::

Wenn dein Netzwerk mDNS unterstützt, navigiere zu [http://hyperbian.local:8090](http://hyperbian.local:8090). Andernfalls verwende die [IP-Adresse](https://www.raspberrypi.com/documentation/computers/remote-access.html#ip-address) deines Raspberry Pi.

Fahre mit dem nächsten Abschnitt fort, um Details zur erweiterten Einrichtung in Hyperion zu erhalten.

