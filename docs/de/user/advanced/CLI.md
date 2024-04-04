# Befehlszeile

Alle mit Hyperion ausgelieferten ausführbaren Dateien haben einige Befehlszeilenargumente/Optionen

## hyperiond
Das Herzstück von Hyperion
``` sh:no-line-numbers
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

::: tip Tip
Wenn ein Pfadname Leerzeichen enthält, dann umschließe ihn mit `"` . \
`hyperiond --userdata "/temp/another Dir"`
:::

## hyperion-remote
hyperion-remote ist ein Kommandozeilen-Tool, das vorgegebene Argumente in JSON-Befehle übersetzt und diese an den Hyperion JSON-RPC sendet. Es ist ideal für Skripte geeignet. Es unterstützt fast alle Befehle, die Hyperion zur Verfügung stellt.

``` sh:no-line-numbers
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

::: tip Tip
Hyperion-Remote wird automatisch nach einem Hyperion-Server suchen. So kannst du das sogar auf einem anderen Gerät in deinem lokalen Netzwerk verwenden, ohne eine IP/Port anzugeben.
:::

## hyperion-capture
Wir stellen auch auch unabhängige Capture-Apps direkt in deinem Hyperion-Verzeichnis bereit:
 
App | Quelle
| :--- | :---
hyperion-aml | Amlogic Bildschirmerfassung
hyperion-dispmanx | DispManX Raspberry Pi Bildschirmerfassung
hyperion-framebuffer | Linux FrameBuffer Bildschirmerfassung 
hyperion-osx | macOS Bildschirmerfassung
hyperion-qt | Qt Multi Platform Bildschirmerfassung
hyperion-v4l2 | USB Erfassung
hyperion-x11 | X11 Bildschirmerfassung
hyperion-xcb | XCB Bildschirmerfassung

Abhängig von deiner Plattform sind es mehr oder weniger Apps.

Alle diese Anwendungen können unabhängig von Hyperion gestartet werden und alle haben leicht unterschiedliche Optionen. Sie kommunizieren mit der Flatbuffer-Schnittstelle von Hyperion. 
Jedes Modul sucht automatisch nach einem Hyperion-Server, wenn die Option `--address` nicht verwendet wird.

Nachfolgend findest du zur Veranschaulichung die Ausgabe von der Qt Bildschirmerfassungsapp.

``` sh:no-line-numbers
hyperion-qt --help
hyperion-qt:
	Version   : 2.0.16 ((HEAD detached at 2.0.16) (Paulchen-Panther-cb85d2d/a93d79b-1705568419))
	build time: Jan 18 2024 09:15:43
Usage: ./bin/hyperion-qt [options]
Qt interface capture application for Hyperion. Will automatically search a Hyperion server if -a option isn't used. Please note that if you have more than one server running it's more or less random which one will be used.

Options:
  -d, --display <display>                Set the display to capture [default:
                                         0]
  -f, --framerate <framerate>            Capture frame rate. Range 1-30fps
                                         [default: 25]
  -s, --size-decimator <size-decimator>  Decimation factor for the output image
                                         size [default=8]
  --crop-left <crop-left>                Number of pixels to crop from the left
                                         of the picture before decimation
  --crop-right <crop-right>              Number of pixels to crop from the
                                         right of the picture before decimation
  --crop-top <crop-top>                  Number of pixels to crop from the top
                                         of the picture before decimation
  --crop-bottom <crop-bottom>            Number of pixels to crop from the
                                         bottom of the picture before decimation
  --3DSBS                                Interpret the incoming video stream as
                                         3D side-by-side
  --3DTAB                                Interpret the incoming video stream as
                                         3D top-and-bottom
  -a, --address <address>                The hostname or IP-address (IPv4 or
                                         IPv6) of the hyperion server.
                                         Default host: 127.0.0.1, port: 19400.
                                         Sample addresses:
                                         Host : hyperion.fritz.box
                                         IPv4 : 127.0.0.1:19400
                                         IPv6 : [2001:1:2:3:4:5:6:7]
  -p, --priority <priority>              Use the provided priority channel
                                         (suggested 100-199) [default: 150]
  --skip-reply                           Do not receive and check reply
                                         messages from Hyperion
  --screenshot                           Take a single screenshot, save it to
                                         file and quit
  --debug                                Enable debug logging
  -h, --help                             Show this help message and exit
``` 

Beispiel mit einem Aufnahmeintervall von 15 Bildern pro Sekunde (fps)
```:no-line-numbers
hyperion-qt -f 15
```

