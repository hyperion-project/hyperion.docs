# Konfigurieren
Mit deinem Webbrowser kannst du Hyperion über die Konfigurationsoberfläche (auch WebUI genannt) konfigurieren.

## Konfigurationsoberfläche
Öffne deinen Webbrowser und gebe die IP-Adresse deines Gerätes und den Port 8090 ein. Solltest du Hyperion mit einem Skript installiert haben, wird dir diese Adresse angezeigt. \
**Beispiel:** `http://192.168.0.20:8090`

### Dashboard Seite
<br>
<ImageWrap src="/images/de/user_config_dash.jpg" alt="WebUI - Dashboard" />

 **Navigationsleiste (rechts oben)**
 * **Kamera** - Nimm dein Browserfenster als Eingabe auf
 * **Mond** - Dunkler Modus.
 * **TV** - Live-LED-Visualisierung
 * **Zauberstab** - Assistenten, die dich durch die Farbkalibrierung und mehr führen
 * **Schraubenschlüssel** - Einstellungen für Sprachauswahl, Einstellungsstufe, Passwortänderung
 * **Power** - Ruhezustand, Aktivieren oder Neustart
 * **Sperren** - Sperrt die Hyperion-Benutzeroberfläche 
 
 **Linke Seitenleiste**
 * **Dashboard** - Steuerung der Komponenten einer Instanz oder der globalen Einstellungen
 * **Allgemein** - Allgemeine Einstellungen und LED-Hardware-Instanzmanagement
 * **LED-Instanzen** - Konfigurieren einer LED-Instanz
 * **Erfassungshardware** - Konfiguriere die verschiedenen Möglichkeiten zur Erfassung von Inhalten, d.h. Bildschirm, Video oder Audio 
 * **Netzwerkdienste** - Netzwerkbezogene Konfigurationen
 * **Fernsteuerung** - Hyperion steuern, Einstellungen temporär ändern oder Effekte auslösen
 * **Support** - Erfahre wo du Unterstützung erhältst und wie du uns unterstützen kannst (und warum)
 * **System** - Konfiguriere das Verhalten auf verschiedene Systemereignisse, kontrolliere die Logmeldungen oder erfahre mehr über das laufende Hyperion System

 **Dashboard**
 * Die **LED Hardware Instanz** zeigt immer den aktuellen Status (aktiviert/deaktiviert) der Komponenten einer Instanz an
 * Das **Status** Panel zeigt den Status der Instanz-unabhängigen Komponenten an, sowie die aktuelle Version

::: tip Hashtag-Navigation
Du kannst eine bestimmte Seite direkt aufrufen, in dem du an die IP-Adresse und den Port den Hastag der gewünschten Seite anhängst. Folgendes Beispiel führt dich direkt zur Fernbedienung. \
`http://192.168.0.20:8090/#remote`
:::

### Konfiguration
Wir haben jedem Einstellungspunkt im WebUI zusätzliche Informationen spendiert. Einige davon erfordern zusätzliche Erklärung, die hier behandelt werden. Wenn du mehr Hilfe benötigst oder dir etwas an Infos fehlt, unser Forum steht für deine Fragen bereit.

#### Sprachen
Unser WebUI erkennt automatisch die Sprache deines Browsers. Somit ist das einstellen der Sprache nicht notwendig. Solltest du doch einmal Hyperion in einer anderen Sprache kennen lernen wollen, kannst du dies jederzeit tun.

<ImageWrap src="/images/de/user_config_lang.jpg" alt="WebUI - Sprachen" />

::: tip Möchtest du bei der Übersetzung helfen?
Total einfach! Hier entlang: [POEditor](https://poeditor.com/join/project/Y4F6vHRFjA)
:::

#### Einstellungsstufen
Um neue Benutzer nicht mit Einstellungen zu überfluten, haben wir Stufen geschaffen. Die Stufe **Standard** ist für Anfänger optimal und bietet die notwendigsten Einstellungen an.
Willst (oder musst) Du etwas tiefer in die Hyperion Welt eintauchen, ist die Stufe **Fortgeschritten** genau das richtig. **Experte** ist wie die Bezeichnung schon sagt, nur für Experten.

<ImageWrap src="/images/de/user_config_access.jpg" alt="WebUI - Einstellungsstufe" />
