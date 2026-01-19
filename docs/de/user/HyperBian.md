# HyperBian
Ist ein gebrauchsfertiges Image für deinen Raspberry Pi und basiert auf dem originalen Image der Raspberry Pi Foundation "Raspberry Pi OS Lite". Hyperion ist bereits vorinstalliert. Einfacher geht es nicht.
1. [Herunterladen](https://github.com/Hyperion-Project/HyperBian/releases)
2. Image auf eine SD-Karte brennen
3. Deinen Pi einschalten
4. Die Seite `http://IpDeinesPi:8090` über deinen Browser aufrufen, um die Hyperion Konfiguration zu starten

## Anforderungen
  * SD-Karte mit mindestens 4GB Speicherplatz
  * Raspberry Pi
  * Linux/Mac/Windows + SD-Kartenleser/-schreiber

## Installation
  1. Lade das fertige [HyperBian Image](https://github.com/Hyperion-Project/HyperBian/releases) herunter
  2. Lade dein bevorzugtes Tool zum Brennen des Images auf eine SD-Karte herunter

:::::: tabs :cache-lifetime="0" :options="{ useUrlFragment: false, disableScrollBehavior: true }"
::::: tab name="Pi Imager"
  3. Installiere den [Raspberry Pi Imager](https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager).
  4. Starte den Pi Imager.
  5. Wähle dein Raspberry Pi-Gerät aus + klicke auf "Weiter", um fortzufahren.
  6. Wähle als Betriebssystem "Eigenes Image verwenden" am Ende der Liste.
  7. Wähle die heruntergeladene HyperBian-Imagedatei aus, klicke auf "Öffnen" und "Weiter", um fortzufahren.
  8. Wähle dein Speichergerät, d.h. deine SD-Karte, und klicke auf "Weiter", um fortzufahren.
  9. Klicke auf "Schreiben", um das Schreiben des Images auf die SD-Karte zu beginnen.
  10. Warte, bis das Image auf die SD-Karte geschrieben ist.

:::::
::::: tab name="Etcher"

  3. Installiere [balenaEtcher](https://www.balena.io/etcher/).
  4. Starte Etcher.
  5. Wähle "Flash from file" und wähle die heruntergeladene HyperBian-Imagedatei aus.
  6. Wähle "Target" und wähle deine SD-Karte.
  7. Klicke auf "Flash!", um das Schreiben des Images zu beginnen.
  8. Warte, bis das Image auf die SD-Karte geschrieben ist.
:::::

::::: tab name="Windows"
  3. Installiere den [Win32 Disk Imager](https://sourceforge.net/projects/win32diskimager/).
  4. Starte den Win32 Disk Imager.
  5. Wähle die heruntergeladene HyperBian-Imagedatei aus.
  6. Wähle dein SD-Kartengerät aus.
  7. Klicke auf "Write", um das Image auf die SD-Karte zu brennen.
:::::
::::::

Wenn die SD-Karte erfolgreich vorbereitet wurde, kannst du optional zusätzliche Konfigurationsdateien mit den unten stehenden Assistenten vorbereiten.

Alternativ kannst du die mit dem Image gelieferten Konfigurationsdateien bearbeiten. Der Abschnitt "Manuelle Konfiguration" der nachfolgenden WLAN- und Systemkonfigurationsanleitung unterstützt dich bei der Aktualisierung der Konfiguration.

> [!IMPORTANT]
> Speichere die Konfigurationsdatei(en) in der Boot-Partition deiner SD-Karte.
Die Konfiguration wird dann während des ersten Starts durchgeführt.

:::::: details Eine WLAN-Konfiguration vorbereiten

Dieses Tool hilft dir, eine WLAN-Konfigurationsdatei für deine HyperBian-Installation zu erstellen.
Gib einfach unten deine Netzwerkdetails ein und klicke auf "Konfiguration generieren", um eine angepasste Konfigurationsdatei zu erstellen.

<WifiConfigGenerator />

#### Wie man es benutzt

1. Gib deine Netzwerkdetails ein:
   - **SSID**: Dein WLAN-Netzwerkname
   - **Passwort**: Dein WLAN-Passwort
   - **Land**: Dein zweistelliger Ländercode (z.B. DE, US, GB, FR)

2. Klicke auf "Konfiguration speichern", um deine angepasste `network-config`-Datei zu speichern.

3. Die generierte Konfigurationsdatei wird in deinem Download-Ordner gespeichert.

4. Kopiere die `network-config`-Datei in die Boot-Partition deiner HyperBian-SD-Karte.

#### Was ist die network-config-Datei?

Die `network-config`-Datei wird von HyperBian während des ersten Starts verwendet, um die WLAN-Verbindung deines Raspberry Pi zu konfigurieren. Indem du diese Datei vor dem ersten Start in der Boot-Partition platzierst, verbindet sich dein Gerät automatisch mit deinem WLAN-Netzwerk.

:::: details Manuelle Konfiguration

Wenn du die Konfigurationsdatei lieber manuell bearbeiten möchtest, kannst du die folgende Vorlage verwenden:

```yaml
####################################################################################
## Configure your initial HyperBian Wifi connectivity to your needs below.
## Uncomment and edit the relevant sections as needed.
##
## If you have additional needs refer to the cloud-init documentation 
## and the netplan reference for full details:
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
        "YOUR_SSID":
          password: "YOUR_PASSWORD"
      regulatory-domain: YOUR_COUNTRY_CODE
```

Ersetze `YOUR_SSID`, `YOUR_PASSWORD` und `YOUR_COUNTRY_CODE` durch deine tatsächlichen Werte.
::::

:::: tip
Eine Liste der Ländercodes findest du im [ISO 3166-1 alpha-2 Standard](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
::::

::::::

:::::: details Eine Systemkonfiguration vorbereiten

Dieses Tool hilft dir, eine Systemkonfigurationsdatei für deine HyperBian-Installation zu erstellen.
Gib einfach unten deine Systemdetails ein und klicke auf "Konfiguration generieren", um eine angepasste Konfigurationsdatei zu erstellen.

<SystemConfigGenerator />

#### Wie man es benutzt

1. Fülle das Formular mit deinen gewünschten Systemeinstellungen aus:
 - **Benutzername / Passwort**
 - **Hostname**
 - **Zeitzone**: Zeitzonen müssen gültige IANA-Zeitzonenbezeichner sein
 - **Locale**: Muss der glibc-Locale-Benennung folgen und vom System unterstützt werden
 - **Tastaturlayout**: Layouts müssen gültige XKB-Layoutnamen sein
 - **SPI**: Aktiviere/Deaktiviere die SPI-Schnittstelle
 - **SSH**: Aktiviere/Deaktiviere den SSH-Zugang
2. Klicke auf "Konfiguration speichern", um deine angepasste `user-data`-Datei zu speichern.
3. Die generierte Konfigurationsdatei wird in deinem Download-Ordner gespeichert.
4. Kopiere die `user-data`-Datei in die Boot-Partition deiner HyperBian-SD-Karte.


#### Was ist die user-data-Datei?

Die `user-data`-Datei wird von HyperBian während des ersten Starts verwendet, um das Setup deines Raspberry Pi zu konfigurieren. Indem du diese Datei in der Boot-Partition platzierst, kannst du Einstellungen wie Benutzername, Passwort, Hostname und mehr vorkonfigurieren.

:::: details Manuelle Konfiguration

Wenn du die Konfigurationsdatei lieber manuell bearbeiten möchtest, kannst du die folgende Vorlage verwenden. Ersetze die Platzhalter- oder Beispielwerte durch deine gewünschte Konfiguration. Möglicherweise musst du Auswahlen auskommentieren, damit sie funktionieren.
Hinweis: Du musst ein verschlüsseltes Passwort generieren, z.B. über `openssl passwd -6 "DEIN_PASSWORT"` und YOUR_HYPERION_USERNAME_PASSWORD_ENCRYPTED durch die Ausgabe ersetzen.

```yaml
## template: jinja
#cloud-config

# This is the user-data configuration file for cloud-init. By default this sets
# up an initial user called "ubuntu" with password "ubuntu", which must be
# changed at first login. However, many additional actions can be initiated on
# first boot from this file. The cloud-init documentation has more details:
#
# https://cloudinit.readthedocs.io/
#
# Please note that the YAML format employed by this file is sensitive to
# differences in whitespace; if you are editing this file in an editor (like
# Notepad) which uses literal tabs, take care to only use spaces for
# indentation. See the following link for more details:
#
# https://en.wikipedia.org/wiki/YAML
#

##################################################################
## Configure your initial HyperBian system to your needs below ###
## Uncomment and edit the relevant sections as needed.         ###
##################################################################

# 1. Define the Hyperion user name (optional)
{% set HYPERION_USER = "YOUR_HYPERION_USERNAME" %}

# 2. Define, if ssh access should be enabled (optional)
{% set ENABLE_SSH = false %}

# 3. Set the system's hostname (optional)
hostname: YOUR_HYPERBIAN_HOSTNAME

# 4. Set the timezone for this instance (optional)
# the value of 'timezone' must exist in /usr/share/zoneinfo
# Run: timedatectl list-timezones

## Sample for Berlin timezone
#timezone: Europe/Berlin

# 5. Set the locale to a given locale; default: en_GB.UTF-8 (optional)
# Run: locale -a

## Sample for German locale
#locale: de_DE.UTF-8

# 6. Set up the keyboard layout (optional)
# See localectl(1), in particular the various list-x11-* sub-commands, 
# to determine the available models, layouts, variants, and options
# Run: localectl list-x11-keymap-layouts

## Sample for German keyboard layout
#keyboard:
#  layout: de

# 7. Enable the SPI interface (optional)
rpi:
  interfaces:
    spi: true

###############################
### DO NOT CHANGE THE BELOW ###
###############################

users:
- name: {{ HYPERION_USER }}
  gecos: Hyperion user
  groups: users, dialout, sudo, video, audio, gpio, spi, i2c
  sudo: ["ALL=(ALL) NOPASSWD:ALL"]
  lock_passwd: false
  passwd: "YOUR_HYPERION_USERNAME_PASSWORD_ENCRYPTED"
  shell: /bin/bash
 
ssh_pwauth: {{ ENABLE_SSH }}

runcmd:
  - |
    echo "Running setup for Hyperion user: {{ HYPERION_USER }}"
    /usr/share/hyperion/scripts/updateHyperionUser.sh -u "{{ HYPERION_USER }}"
    
{% if ENABLE_SSH %}
  - systemctl unmask ssh
  - systemctl enable ssh
  - systemctl start ssh
{% else %}
  - echo "SSH is disabled in config"
{% endif %}
```
> [!NOTE]
> Das `passwd`-Feld erfordert einen SHA-512-verschlüsselten Passwort-Hash. Das Generator-Tool erledigt dies für dich.

::::
::::::

-> Lege nun die SD-Karte in deinen Raspberry Pi ein und starte das System.

::: info
Der Raspberry Pi kann während der Konfiguration des Systems zwischendurch neu starten.
:::

### Standardkonfiguration
... es sei denn, sie wird durch benutzerdefinierte Konfigurationsdateien geändert

::: tip HyperBians Standardbenutzer und -passwort
 - Benutzer: `hyperion`
 - Passwort: `ambientlight`
:::

::: tip
Standardmäßig wird HyperBian mit einer englischen Tastaturbelegung ausgeliefert. Wenn du keine englische Tastatur besitzt, könnten einige Tasten an einer anderen Stelle zu finden sein. Es sind z.B. die Zeichen 'y' und 'z' vertauscht. Für den Benutzernamen musst Du also zuerstmal `hzperion` tippen; danach kannst Du das Tataturlayout per `sudo raspi-config` ändern.
:::

::: tip
Nach erfolgreicher Anmeldung kannst du jede Konfiguration auch über `sudo raspi-config` aktualisieren.
:::

