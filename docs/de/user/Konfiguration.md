# Konfigurieren
Mit deinem Webbrowser kannst du Hyperion über die Konfigurationsoberfläche (auch WebUI genannt) konfigurieren.

## Konfigurationsoberfläche
Öffne deinen Webbrowser und gebe die IP-Adresse deines Gerätes und den Port 8090 ein. Solltest du Hyperion mit einem Skript installiert haben, wird dir diese Adresse angezeigt. \
**Beispiel:** `http://192.168.0.20:8090`

### Dashboard
<ImageWrap src="/images/de/user_config_dash.png" alt="WebUI - Dashboard" />

 **Navigationsleiste (oben rechts)**
 * **Kamera** - Du möchtest dein Browserfenster aufnehmen? Hiermit ist das möglich.
 * **Mond** - Unser Dark Mode.
 * **Pfeile** - Hier kannst du zwischen verschiedenen LED-Hardware-Instanzen umschalten (wenn mehrere erstellt wurden).
 * **TV** - Vorschau deiner LEDs.
 * **Zauberstab** - Verschiedene Assistenten. (Farbkalibrierung etc.)
 * **Schraubenschlüssel** - Einstellungen für Sprachauswahl, Einstellungsstufe, Abmeldung, ...
 
 **Seitenleiste (links)**
 * **Dashboard** - Die Übersichtsanzeige.
 * **Konfiguration** - Alle verfügbaren Einstellungen
 * **Fernbedienung** - Wie der Name schon vermuten lässt
 * **Effekt Konfigurator** - Neue Effekte aus Vorlagen erstellen
 * **Hilfe** - Hier findest du uns.
 * **System** - Hier findest du Protokollmeldungen, verfügbare Updates, Systeminformationen, etc

 **Inhalt**
 * Das Feld **Information** zeigt dir nützliche Infos an. Per Schnellzugriff kannst du die ausgewählte Instanz aktivieren/deaktivieren.
 * Der **Komponenten Status** zeigt dir immer den aktuellen Zustand (aktiviert/deaktiviert) deiner Komponenten an.

::: tip Hashtag-Navigation
Du kannst eine bestimmte Seite direkt aufrufen, in dem du an die IP-Adresse und den Port den Hastag der gewünschten Seite anhängst. Folgendes Beispiel führt dich direkt zur Fernbedienung. \
`http://192.168.0.20:8090/#remote`
:::

### Konfiguration
Wir haben jedem Einstellungspunkt im WebUI zusätzliche Informationen spendiert. Einige davon erfordern zusätzliche Erklärung, die hier behandelt werden. Wenn du mehr Hilfe benötigst oder dir etwas an Infos fehlt, unser Forum steht für deine Fragen bereit.

#### Sprachen
Unser WebUI erkennt automatisch die Sprache deines Browsers. Somit ist das einstellen der Spache nicht notwendig. Solltest du doch einmal Hyperion in einer anderen Sprache kennen lernen wollen, kannst du dies jederzeit tun. \
Möchtest du bei der Übersetzung helfen? Total einfach! Hier entlang: [POEditor](https://poeditor.com/join/project/Y4F6vHRFjA).
<ImageWrap src="/images/de/user_config_lang.png" alt="WebUI - Sprachen" />

#### Einstellungsstufen
Um neue Benutzer nicht mit Einstellungen zu überfluten, haben wir Stufen geschaffen. Die Stufe **Standard** ist für Anfänger optimal und bietet die notwendigsten Einstellungen an. Wollt (oder müsst) ihr etwas tiefer in die Hyperion Welt eintauchen, ist die Stufe **Fortgeschritten** genau das richtig. **Experte** ist wie die Bezeichnung schon sagt, nur für Experten.
<ImageWrap src="/images/de/user_config_access.png" alt="WebUI - Einstellungsstufe" />
