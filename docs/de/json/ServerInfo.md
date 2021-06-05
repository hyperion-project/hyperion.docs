# Server-Informationen
Dies ist der primäre Lesemechanismus des Hyperion-Servers. Dieser einzelne Befehl liefert Daten über den Live-Zustand von Hyperion, aufgeschlüsselt in eine Reihe von verschiedenen Bestandteilen (unten beschrieben).

[[toc]]

Mit dem folgenden Befehl kann eine `serverinfo`-Antwort angefordert werden:
```json
{
    "command":"serverinfo",
    "tan":1
}
```

## Teile einer serverinfo-Antwort

### Komponenten
Liste der Hyperion-Komponenten und deren aktueller Status "aktiviert" (an/aus). Die Komponenten kannst du während der Laufzeit aktivieren oder deaktivieren. Die Komponente "ALL" spiegelt Hyperion als Ganzes wider - wenn "ALL" false (aus) ist, kann keine andere Komponente aktiviert werden. Siehe Steuerungskomponenten](/de/json/control#control-components)
::: tip Abonnieren
Man kann zukünftige Datenaktualisierungen abonnieren. Lese mehr über [Komponenten-Updates](/de/json/subscribe#component-updates)
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
      "enabled":true,
      "name":"LEDDEVICE"
    }
  ]
}
```

### Anpassungen
Anpassungen spiegeln den Wert der zuletzt durchgeführten (nicht-persistenten) Farbanpassung (z. B. Helligkeit) wider. Lese mehr über [control Anpassungen](/de/json/control#adjustments)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Mehr zu [ Anpassungs-Updates](/de/json/subscribe#adjustment-updates)
:::
```json
{
  "adjustment":[
    {
      "backlightColored":true,
      "backlightThreshold":0,
      "blue":[0,0,255],
      "brightness":1,
      "cyan":[0,127,127],
      "gammaBlue":1.4,
      "gammaGreen":1.4,
      "gammaRed":1.4,
      "green":[0,255,0],
      "id":"default",
      "magenta":[255,0,255],
      "red":[255,0,0],
      "white":[255,255,255],
      "yellow":[255,255,0]
    }
  ]
}
```

### Effekt-Liste
Ein Array von Effekten, wobei jedes Objekt ein benannter Effekt ist.
Du kannst zwischen benutzererstellten Effekten und vom System bereitgestellten Effekten filtern, indem du die Effektzeichenkette `Datei` überprüfst -- wenn sie mit `:` beginnt, ist es ein vom System bereitgestellter Effekt, während wenn der Pfad mit `/` beginnt, ist es ein vom Benutzer erstellter Effekt.

Siehe auch [Effekt setzen](/de/json/control#set-effect)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Effect updates](/de/json/subscribe#effects-updates)
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
        "rotationTime":60
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
        "sleepTime":0.14999999999999999
      },
      "file":":/effects//candle.json",
      "name":"Candle",
      "script":":/effects//candle.py"
    }
    ....
  ]
}
```
  
### LED-Mapping
Aktiver Modus des LED-Bereich-Mappings. [Siehe Steuerung LED-Mapping](/de/json/control#led-mapping)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [LED-Mapping-Updates](/de/json/subscribe#led-mapping-updates)
:::
```json
  "imageToLedMappingType":"multicolor_mean"
```

### Video-Modus
Der aktuelle Videomodus der Grabber. Kann auf 3DHSBS, 3DVSBS umgeschaltet werden. [Siehe Steuerung Video-Modus](/de/json/control#video-mode)
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Video mode updates](/de/json/subscribe#videomode-updates)
:::
```json
  "videomode" : "2D"
```

### Prioritäten
Übersicht über die registrierten/aktiven Quellen. Jedes Objekt ist eine Quelle.
  * **active**: Wenn "true", ist sie für die manuelle Quellenauswahl auswählbar. [Siehe auch Quellenauswahl](/de/json/control#source-selection)
  * **visible**: Bei "true" wird diese Quelle angezeigt und an das Led-Gerät gepusht. Die `visible:true`-Quelle ist immer der erste Eintrag!
  * **componentId**: Ein Schlüssel, der zu einer bestimmten Komponente gehört und die Art der Eingabe angibt. [Siehe verfügbare Komponenten](/de/json/control#components-ids-explained)
  * **origin**: Ein benannter externer Setzer dieser Quelle zu Referenzzwecken. Wenn nicht angegeben, ist es `System` (von Hyperion).
  * **owner**: Enthält zusätzliche Informationen in Bezug auf die componentId. Wenn es sich um einen Effekt handelt, wird hier der Effektname angezeigt. Wenn es sich um eine USB-Aufnahme handelt, wird das Aufnahmegerät angezeigt. Wenn es sich um ein Plattform-Capture handelt, erhält man den Namen der Plattform-Capture-Implementierung (z. B. dispmanx/x11/amlogic/...).
  * **priority**: Die Priorität dieser Quelle, eine ganze Zahl zwischen 0 und 255.
  * **value**: Wenn es sich bei der Quelle um eine Farbe handelt UND Farbdaten vorhanden sind (wenn "active" auf "false" steht, gibt es normalerweise keine Daten), dann ist dies die Farbe in RGB und HSL.
  * **duration_ms**: Tatsächliche Dauer in ms, bis diese Priorität automatisch gelöscht wird. Dies wird angezeigt, wenn die Quelle eine Farbe oder ein Effekt ist UND eine bestimmte Dauer höher als `0` eingestellt ist (0 bedeutet unbegrenzt).

::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Prioritäts-Updates](/de/json/subscribe#priority-updates)
:::
```json
  "priorities":[
    {
      "active":true,
      "componentId":"COLOR",
      "origin":"Web Configuration@192.168.0.28",
      "owner":"COLOR",
      "priority":1,
      "value":{
        "HSL":[
          0,
          1,
          0.50000762939453125
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
      "active":true,
      "componentId":"EFFECT",
      "origin":"System",
      "owner":"Warm mood blobs",
      "priority":255,
      "visible":false
    }
  ]
```

### Auswahl der Prioritäten: Auto/Manuell
Wenn `priorities_autoselect` "true" ist, wird die sichtbare Quelle durch die Priorität bestimmt. Die niedrigste Nummer wird automatisch ausgewählt. Wenn ein Caller verlangt, eine Quelle manuell zu setzen,
dann schaltet `priorities_autoselect` auf `false`.

Wenn die manuell ausgewählte Quelle gelöscht/gestoppt/abgeschlossen wird ODER der Benutzer die automatische Auswahl anfordert, schaltet `priorities_autoselect` zurück auf `true`. Dieser Wert wird
automatisch mit den Prioritätsaktualisierungen aktualisiert (siehe oben).
Siehe auch Quellenauswahl](/de/json/control#source-selection).
  
### Instanz
Informationen über verfügbare Instanzen und deren Zustand. Jede Instanz repräsentiert ein LED-Gerät. Instanzen können gesteuert werden, siehe: [Instanz steuern](/de/json/control#control-instances).
::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Instance Updates](/de/json/subscribe#instance-updates)
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
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [LEDs Updates](/de/json/subscribe#leds-updates)
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
    "hyperion":{
        "build":"webd (brindosch-38f97dc/814977d-1489698970)",
        "gitremote": "https://github.com/hyperion-project/hyperion.git",
        "time":"Mar 16 2017 21:25:46",
        "version":"2.0.0",
        "id":"jKsh78D3hd..."
    },
    "system":{
        "architecture":"arm",
        "hostName":"raspberrypi",
        "kernelType":"linux",
        "kernelVersion":"4.4.13-v7+",
        "prettyName":"Raspbian GNU/Linux 8 (jessie)",
        "productType":"raspbian",
        "productVersion":"8",
        "wordSize":"32"
      }
}
```

### Sitzungen
 `sessions` zeigt alle Hyperion-Server im aktuellen Netzwerk an, die über Zeroconf/avahi/bonjour gefunden wurden. Siehe auch [detect Hyperion](/de/api/detect.md)
 ::: tip Abonnieren
Du kannst zukünftige Daten-Updates abonnieren. Lese mehr über [Session updates](/de/json/subscribe#session-updates)
:::

```json
{
  "sessions":[
    {
        "address":"192.168.0.20",
        "domain":"local.",
        "host":"raspberrypi",
        "name":"Awwh yeah!!@raspberrypi:8099",
        "port":8090,
        "type":"_hyperiond-http._tcp."
    }
  ] 
}
```
