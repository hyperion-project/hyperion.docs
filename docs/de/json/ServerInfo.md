# Server-Informationen
Dies ist der primäre Lesemechanismus des Hyperion-Servers. Dieser einzelne Befehl liefert Daten über den Live-Zustand von Hyperion, aufgeschlüsselt in eine Reihe von verschiedenen Bestandteilen (unten beschrieben).

Mit dem folgenden Befehl kann eine `serverinfo`-Antwort angefordert werden:
```json
{
    "command":"serverinfo",
    "tan":1
}
```

## Teile einer serverinfo-Antwort

### Komponenten
Liste der Hyperion-Komponenten und deren aktueller Status "aktiviert" (an/aus). Die Komponenten kannst du während der Laufzeit aktivieren oder deaktivieren. Die Komponente "ALL" spiegelt Hyperion als Ganzes wider - wenn "ALL" false (aus) ist, kann keine andere Komponente aktiviert werden. Siehe [Steuerungskomponenten](/de/json/Control.md#komponenten-steuern)
::: tip Abonnieren
Man kann zukünftige Datenaktualisierungen abonnieren. Lese mehr über [Komponenten-Updates](/de/json/Subscribe.md#komponenten-updates)
:::

```json
{
  "components":[
    {
      "enabled":true,
      "name":"ALL"
    },
    {
      "enabled":true,
      "name":"SMOOTHING"
    },
    {
      "enabled":true,
      "name":"BLACKBORDER"
    },
    {
      "enabled":false,
      "name":"FORWARDER"
    },
    {
      "enabled":false,
      "name":"BOBLIGHTSERVER"
    },
    {
      "enabled":false,
      "name":"GRABBER"
    },
    {
      "enabled":false,
      "name":"V4L"
    },
    {
        "enabled": false,
        "name": "AUDIO"
    },
    {
      "enabled":true,
      "name":"LEDDEVICE"
    }
  ]
}
```

### Anpassungen
Anpassungen spiegeln den Wert der zuletzt durchgeführten (nicht-persistenten) Farbanpassung (z. B. Helligkeit) wider. Lese mehr über [Steuerung-Anpassungen](/de/json/Control.md#anpassungen)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Mehr zu [Abgleich-Updates](/de/json/Subscribe.md#abgleich-updates)
:::
```json
{
  "adjustment":[
    {
      "backlightColored":true,
      "backlightThreshold":0,
      "brightness": 100,
      "brightnessCompensation": 100,
      "brightnessGain": 1,
      "blue":[0,0,255],
      "cyan":[0,127,127],
      "gammaBlue":1.4,
      "gammaGreen":1.4,
      "gammaRed":1.4,
      "green":[0,255,0],
      "id":"default",
      "magenta":[255,0,255],
      "red":[255,0,0],
      "saturationGain": 1,      
      "white":[255,255,255],
      "yellow":[255,255,0]
    }
  ]
}
```

### Effekt-Liste
Ein Array von Effekten, wobei jedes Objekt ein benannter Effekt ist.
Du kannst zwischen benutzererstellten Effekten und vom System bereitgestellten Effekten filtern, indem du die Effektzeichenkette `Datei` überprüfst -- wenn sie mit `:` beginnt, ist es ein vom System bereitgestellter Effekt, während wenn der Pfad mit `/` beginnt, ist es ein vom Benutzer erstellter Effekt.

Siehe auch [Effekt setzen](/de/json/Control.md##effekt-auswahlen)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Effect updates](/de/json/Subscribe.md#aktualisierungen-der-effekte)
:::
```json
{
  "effects":[
    {
      "args":{
        "blobs":5,
        "color":[
          0,
          0,
          255
        ],
        "hueChange":60,
        "reverse":false,
        "rotationTime":60,
        "smoothing-custom-settings": null        
      },
      "file":":/effects//mood-blobs-blue.json",
      "name":"Blue mood blobs",
      "script":":/effects//mood-blobs.py"
    },
    {
      "args":{
        "brightness":100,
        "candles":"all",
        "color":[
          255,
          138,
          0
        ],
        "sleepTime": 0.2,
        "smoothing-custom-settings": true,
        "smoothing-time_ms": 500,
        "smoothing-updateFrequency": 20
      },
      "file":":/effects//candle.json",
      "name":"Candle",
      "script":":/effects//candle.py"
    ....
  ]
}
```
  
### LED-Mapping
Aktiver Modus des LED-Bereich-Mappings. [Siehe Steuerung LED-Mapping](/de/json/Control.md#led-mapping)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [LED-Mapping-Updates](/de/json/Subscribe.md#aktualisierungen-des-led-mappings)
:::
```json
  "imageToLedMappingType":"multicolor_mean"
```

### Video-Modus
Der aktuelle Videomodus der Grabber. Kann auf 3DHSBS, 3DVSBS umgeschaltet werden. [Siehe Steuerung Video-Modus](/de/json/Control.md#video-modus)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Video mode updates](/de/json/Subscribe.md#videomode-aktualisierungen)
:::
```json
  "videomode" : "2D"
```

### Prioritäten
Übersicht über die registrierten/aktiven Quellen. Jedes Objekt ist eine Quelle.
  * **active**: Wenn "true", ist sie für die manuelle Quellenauswahl auswählbar. [Siehe auch Quellenauswahl](/de/json/Control.md#auswahl-der-quelle)
  * **visible**: Bei "true" wird diese Quelle angezeigt und an das Led-Gerät gepusht. Die `visible:true`-Quelle ist immer der erste Eintrag!
  * **componentId**: Ein Schlüssel, der zu einer bestimmten Komponente gehört und die Art der Eingabe angibt. [Siehe verfügbare Komponenten](/de/json/Control.md#komponenten-ids-erklart)
  * **origin**: Ein benannter externer Setzer dieser Quelle zu Referenzzwecken. Wenn nicht angegeben, ist es `System` (von Hyperion).
  * **owner**: Enthält zusätzliche Informationen in Bezug auf die componentId. Wenn es sich um einen Effekt handelt, wird hier der Effektname angezeigt. Wenn es sich um eine USB-Aufnahme handelt, wird das Aufnahmegerät angezeigt. Wenn es sich um ein Plattform-Capture handelt, erhält man den Namen der Plattform-Capture-Implementierung (z. B. dispmanx/x11/amlogic/...).
  * **priority**: Die Priorität dieser Quelle, eine ganze Zahl zwischen 0 und 255.
  * **value**: Wenn es sich bei der Quelle um eine Farbe handelt UND Farbdaten vorhanden sind (wenn "active" auf "false" steht, gibt es normalerweise keine Daten), dann ist dies die Farbe in RGB und HSL.
  * **duration_ms**: Tatsächliche Dauer in ms, bis diese Priorität automatisch gelöscht wird. Dies wird angezeigt, wenn die Quelle eine Farbe oder ein Effekt ist UND eine bestimmte Dauer höher als `0` eingestellt ist (0 bedeutet unbegrenzt).

::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Prioritäts-Updates](/de/json/Subscribe.md#prioritats-updates)
:::
```json
  "priorities":[
    {
      "active":true,
      "componentId":"COLOR",
      "origin": "Web Configuration@::ffff:192.168.2.100",
        "priority":1,
      "value":{
        "HSL":[
          0,
          1,
          0.5000076293945312
        ],
        "RGB":[
          0,
          0,
          255
        ]
      },
      "visible":true
    },
    {
      "active": true,
      "componentId": "GRABBER",
      "origin": "System",
      "owner": "Qt",
      "priority": 250,
      "visible": false
    }
  ]
```

### Auswahl der Prioritäten: Auto/Manuell
Wenn `priorities_autoselect` "true" ist, wird die sichtbare Quelle durch die Priorität bestimmt. Die niedrigste Nummer wird automatisch ausgewählt. Wenn ein Caller verlangt, eine Quelle manuell zu setzen,
dann schaltet `priorities_autoselect` auf `false`.

Wenn die manuell ausgewählte Quelle gelöscht/gestoppt/abgeschlossen wird ODER der Benutzer die automatische Auswahl anfordert, schaltet `priorities_autoselect` zurück auf `true`. Dieser Wert wird
automatisch mit den Prioritätsaktualisierungen aktualisiert (siehe oben).
[Siehe auch Quellenauswahl](/de/json/Control.md#auswahl-der-quelle).
  
### Instanz
Informationen über verfügbare Instanzen und deren Zustand. Jede Instanz repräsentiert ein LED-Gerät. Instanzen können gesteuert werden, siehe: [Instanz steuern](/de/json/Control.md#steuerungsinstanzen).
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Instanz-Updates](/de/json/Subscribe.md#instanz-updates)
:::
```json
   "instance":[
       {
         "instance": 0,
         "running" : true,
         "friendly_name" : "My First LED Hardware instance"
       },
       {
         "instance": 1,
         "running" : false,
         "friendly_name" : "PhilipsHue LED Hardware instance"
       }
   ]
```

### LEDs
Informationen über das LED-Layout (Image-Mapping-Positionen) und die Anzahl der LEDs.
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [LEDs Updates](/de/json/Subscribe.md#led-layout-updates)
:::
```json
{
  "leds":[
    {
      "hmin":0.0,
      "hmax":1.0,
      "vmin":0.0,
      "vmax":1.0 
    },
    {
      "hmin":0.0,
      "hmax":1.0,
      "vmin":0.0,
      "vmax":1.0 
    },
    ...
  ]
}
```

### System & Hyperion
Es ist möglich, grundlegende Systeminformationen über den Hyperion-Server und den Host, auf dem er läuft, abzurufen. Diese Informationen sind statisch und werden sich während der Laufzeit nicht ändern.
```json
{
    "command" : "sysinfo",
    "tan" : 1
}
```
Du kannst zukünftige Daten-Updates abonnieren. Wir verwenden [Semantic Versioning 2.0.0 (https://semver.org/).
Wenn du eine bestimmte ID benötigst, um bekannte Server erneut zu erkennen, kannst du das Feld "id" verwenden, das eine eindeutige ID liefert und sich für einen bestimmten Server nicht ändert.

```json
{
    "hyperion": {
      "build": "(HEAD detached at 2.0.16) (Paulchen-Panther-cb85d2d/a93d79b-1705568419)",
      "gitremote": "https://github.com/hyperion-project/hyperion.ng",
      "id": "e7ad2b3b-...",
      "isGuiMode": true,
      "readOnlyMode": false,
      "rootPath": "/home/user/.hyperion",
      "time": "Jan 18 2024 09:11:31",
      "version": "2.0.16"
    },
    "system": {
      "architecture": "x86_64",
      "cpuHardware": "",
      "cpuModelName": "Intel(R) Core(TM) i7-4790 CPU @ 3.60GHz",
      "cpuModelType": "60",
      "cpuRevision": "",
      "domainName": "speedport.ip",
      "hostName": "ubuntu2204",
      "isUserAdmin": false,
      "kernelType": "linux",
      "kernelVersion": "5.15.0-97-generic",
      "prettyName": "Ubuntu 22.04.4 LTS",
      "productType": "ubuntu",
      "productVersion": "22.04",
      "pyVersion": "3.7.3",
      "qtVersion": "5.11.3",
      "wordSize": "64"
    }
}
```

