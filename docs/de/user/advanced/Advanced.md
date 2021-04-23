# Fortgeschritten
spezifische Themen mit Details

[[TOC]]

## LED Layout
Hyperion weist jeder einzelnen Led eine bestimmte Position im Bild zu. Diese Positionen sind Quadrate und um ein Quadrat zu erzeugen, benötigen Sie 4 Werte (obere Kante, untere Kante, linke Kante, rechte Kante). Diese Kanten spiegeln sich in `hmin`, `hmax` für horizontal und `vmin`, `vmax` für vertikal wider. Sie haben einen Wertebereich von `0.0` bis `1.0`.

<ImageWrap src="/images/en/user_ledlayout.jpg" alt="Hyperion Led Layout">
Zuordnung der LED-Kanten

</ImageWrap>

Schauen wir uns das also genauer an. Nach einer einzelnen LED Definition:
``` json
{
  "hmax": 0.2,
  "hmin": 0,
  "vmax": 0.2,
  "vmin": 0
}
```
Lass uns das obige Beispiel visualisieren!

<ImageWrap src="/images/en/user_ledlayout1.jpg" alt="Hyperion Led Layout">
Eine einzelnen LED Definition

</ImageWrap>

Fügen wir also 2 weitere Leds hinzu, um es deutlicher zu machen \
**Die Reihenfolge ist wichtig! Der erste Eintrag ist die erste LED, der zweite die zweite LED, ...**
``` json
{
  "hmax": 0.2,
  "hmin": 0,
  "vmax": 0.2,
  "vmin": 0
},
{
  "hmax": 0.5,
  "hmin": 0.3,
  "vmax": 0.5,
  "vmin": 0.3
},
{
  "hmax": 1.0,
  "hmin": 0.7,
  "vmax": 1,
  "vmin": 0.7
}
```
<ImageWrap src="/images/en/user_ledlayout2.jpg" alt="Hyperion Led Layout">
Jetzt mit drei LEDs

</ImageWrap>

### Weitere Eigenschaften
Du kannst verschiedene LED-Streifenladungen mit unterschiedlichen RGB-Byte-Reihenfolgen verbinden. Du kannst die globale RGB-Byte-Reihenfolge überschreiben, indem du eine `colorOrder`-Eigenschaft zu allen LEDs hinzufügst, welche eine andere benötigen.
``` json
{
  "hmax": 0.2,
  "hmin": 0,
  "vmax": 0.2,
  "vmin": 0,
  "colorOrder":"gbr"
},
{
  "hmax": 0.5,
  "hmin": 0.3,
  "vmax": 0.5,
  "vmin": 0.3
},
{
  "hmax": 1.0,
  "hmin": 0.7,
  "vmax": 1,
  "vmin": 0.7
}
```
In diesem Beispiel wird die erste LED `gbr` sein, die anderen LEDs werden der globalen RGB-Reihenfolge zugewiesen, die im Abschnitt LED-Hardware definiert wurde.

### Editieren mit der Webkonfiguration
Während das Bearbeiten dieser Einstellungen in einem lokalen Texteditor etwas ungewohnt ist, kann man die Werte in der Web-Konfiguration bearbeiten!
  - Stelle sicher, dass die [Hyperion-Einstellungsstufe] (../Configuration.md#settings-level) auf **Fortgeschritten** gestellt ist.
  - Navigiere zu Konfiguration -> LED-Hardware und wechsele auf die Registerkarte LED-Layout. Du wirst einen neuen Abschnitt **Generierte/aktuelle LED-Konfiguration** sehen.
<ImageWrap src="/images/en/user_ledlayout3.jpg" alt="Hyperion Led Layout" />

Du kannst die Werte frei bearbeiten, eine Vorschau auf der rechten Seite anzeigen, indem du auf **Aktualisiere Vorschau** klickst. Wenn du mit den Änderungen zufrieden bist, vergiss nicht zu speichern.

## Schwarzbalken-Erkennung
Der Unterschied zwischen den verfügbaren Modi für die Schwarzbalkenerkennung wird hier dargestellt.

  * **Default:** 3 Scan-Linien in jeder Richtung (X Y) - schnellste Erkennung
  * **Classic:** Die ursprünglichen Implementierungen - geringere CPU-Zeit (Legacy für RPi 1) scannen nur das obere Drittel des Bildes, was zu einer langsamen Erkennung und Problemen mit dem TV-Senderlogo führt.
  * **OSD:** Basierend auf dem Default-Modus - nicht sehr effektiv, verhindert aber Randumschaltungen, die durch OSD-Einblendungen (Programminfos und Lautstärkeleiste) verursacht werden können.
  * **Letterbox:** Basierend auf dem Default-Modus - berücksichtigt nur Schwarzbalken am oberen und unteren Rand des Bildes, ignoriert die Seiten.
<ImageWrap src="/images/en/user_bbmodes.jpg" alt="Hyperion Blackbar detection modes" />

## Gamma Kurve
 Gammawerte in einer Grafik. Wie du siehst, ist 1,0 neutral. Niedriger als 1,0 erhöht die Farbe, höher reduziert die Farbe. 
 <ImageWrap src="/images/en/user_gammacurve.png" alt="Hyperion Gamma Curve" />


## CLI
Alle mit Hyperion ausgelieferten ausführbaren Dateien haben einige Befehlszeilenargumente/Optionen

### hyperiond
Das Herzstück von Hyperion
``` sh
# Zeigt die Version/Build-Datum/Commit von Hyperion an 
hyperiond --version

# Aktuelles Administrations-Passwort wieder auf 'hyperion' zurücksetzen
hyperiond --resetPassword

# Überschreibe den Pfad für die Benutzerdaten (der standardmäßig auf dein Home-Verzeichnis eingestellt ist)
hyperiond --userdata /temp/anotherDir

# Log-Level temporär überschreiben: hyperiond -s für silent -v für verbose und -d für debug
hyperiond -d

# Effekte in ein Verzeichnis exportieren
hyperiond --export-effects /tmp

# Hyperion im Desktop-Modus ausführen
hyperiond --desktop
```

::: Tipp
Wenn ein Pfadname Leerzeichen enthält, dann umschließe ihn mit `"` . \
`hyperiond --userdata "/temp/another Dir"`
:::

### hyperion-remote
hyperion-remote ist ein Kommandozeilen-Tool, das vorgegebene Argumente in JSON-Befehle übersetzt und diese an den Hyperion JSON-RPC sendet. Es ist ideal für Skripte geeignet. Es unterstützt fast alle Befehle, die Hyperion zur Verfügung stellt.

``` sh
# Eine Liste aller verfügbaren Befehle abrufen
hyperion-remote -h

# Einstellen einer Farbe mit Hilfe von HTML-Farbnamen
hyperion-remote -c aqua

#  Einstellen einer Farbe mit Hilfe von Hex-Werten
hyperion-remote -c FF7F50

# Farbe mit einer Dauer von 5 Sekunden statt endlos einstellen 
hyperion-remote -c FF7F50 -d 5000

# Einen Effekt starten
hyperion-remote -e "Rainbow swirl"

# mit einer Dauer von 8 Sekunden statt endlos
hyperion-remote -e "Rainbow swirl" -d 8000

# Bestimmte Instanz ansteuern
# ACHTUNG: Hyperion-Instanzen werden standardmäßig mit der Funktion "Instance Syncing" synchronisiert
# Du kannst das Verhalten für jede Instanz konfigurieren
hyperion-remote -I "Mein cooler Instanzname"
# Oder
hyperion-remote --instance "Mein cooler Instanzname"
# Beispiel um ein Effekt für eine Instanz zu setzen
hyperion-remote --instance "Mein cooler Instanzname" -e "Rainbow swirl"
```

::: Tipp
Hyperion-Remote wird automatisch nach einem Hyperion-Server suchen. So kannst du das sogar auf einem anderen Gerät in deinem lokalen Netzwerk verwenden, ohne eine IP/Port anzugeben.
:::

### hyperion-capture
 Wir liefern auch unabhängige Capture-Apps direkt in deinem Hyperion-Verzeichnis. Sie lauten hyperion-dispmanx, hyperion-osx, hyperion-x11, hyperion-amlogic, hyperion-framebuffer, hyperion-qt. Abhängig von der verwendeten Plattform hat man mehr oder weniger.

Alle diese Anwendungen können unabhängig von Hyperion gestartet werden und haben alle leicht unterschiedliche Optionen. Sie kommunizieren mit der Flatbuffer-Schnittstelle von Hyperion. Dann lassen wir uns eine von ihnen starten! In diesem Beispiel verwende ich dispmanx für Raspberry Pi, also lasst uns die verfügbaren Optionen ansehen.

``` sh
hyprion-dispmanx -h
  -f, --framerate <framerate>  Bildrate für die Bildübertragung [Standard: 10]
  --width <width>              Breite des aufgenommenen Bildes [Standard: 64]
  --height <height>            Höhe des aufgenommenen Bildes [Standard: 64]
  --screenshot                 Macht einen einzelnen Screenshot, speichert ihn in einer Datei und beendet ihn
  -a, --address <address>      Setzt die Adresse des Hyperion-Servers [Standard: 127.0.0.1:19445]
  -p, --priority <priority>    Benutzt den vorgesehenen Prioritätskanal (vorgeschlagen 100-199) [Standard: 150]
  --skip-reply                 Keine Rückmeldung von Hyperion empfangen und prüfen
  -h, --help                   Diese Hilfemeldung anzeigen und beenden
  --crop-left <crop-left>      zu entfernende Pixel auf der linken Seite nach dem Erfassen
  --crop-right <crop-right>    zu entfernende Pixel auf der rechten Seite nach dem Erfassen
  --crop-top <crop-top>        Pixel zum Entfernen an der Oberseite nach dem Erfassen
  --crop-bottom <crop-bottom>  Pixel zum Entfernen an der Unterseite nach dem Erfassen
  --3DSBS                      Interpretiert den eingehenden Videostrom als 3D-Side-by-Side
  --3DTAB                      Interpretiert den eingehenden Videostrom als 3D-Oben-und-Unten

# Beginnen wir mit einem Aufnahmeintervall von 15, einer Breite von 100 und einer Höhe von 100
hyperion-dispmanx -a 192.168.0.20:19445 -f 15 --width 100 --height 100
```
