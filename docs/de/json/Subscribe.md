# Abonnement
Während einer `serverinfo`-Anfrage kann der Aufrufer optional Updates abonnieren -- entweder für bestimmte [serverinfo parts](/de/json/ServerInfo.html#parts) oder für alle verfügbaren Daten.
Diese Aktualisierungen werden immer dann gepusht, wenn eine serverseitige Datenänderung auftritt, ohne dass der Aufrufer eine Abfrage durchführen muss.

Um bestimmte Updates zu abonnieren, kannst du den Befehl serverinfo dahingehend ändern:
```json
{
    "command":"serverinfo",
    "subscribe":[
        "firstCommand",
        "secondCommand",
        "thirdCommand"
    ],
    "tan":1
}
```
Um alle verfügbaren Updates zu abonnieren, ändere den Befehl severinfo in:
```json
{
    "command":"serverinfo",
    "subscribe":["all"],
    "tan":1
}
```
### Basis-Antwort-Layout
Alle gepushten Abonnement-Updates haben ein `-update`-Suffix, das dem entsprechenden Schlüssel aus dem [betreffenden Serverinfo-Teil](/de/json/ServerInfo.html#parts) hinzugefügt wird.
Die neuen Daten werden in der Eigenschaft `data` stehen. Es ist weder ein `tan`- noch ein `success`-Argument vorgesehen.
```json
{
    "command":"XYZ-update",
    "data":{
        ..Data here..
    },
    "instance": ..Instanz, welche das Update gesendet hat...
}
```
### Komponenten-Updates
Der Aufrufer kann Komponenten-Updates abonnieren. Diese Aktualisierungen sind dazu gedacht, den Abschnitt `components` in der ursprünglichen Serverinfo des Aufrufers zu aktualisieren. Relevanter `serverinfo`-Abonnement-Befehl:

```json
{
    "command":"serverinfo",
    "subscribe":[
        "components-update"
    ],
    "tan":1
}
```
Danach erhält der Aufrufer inkrementelle Updates. Ein Beispiel:
```json
{
    "command":"components-update",
    "data":{
        "enabled":false,
        "name":"SMOOTHING"
    },
    "instance": 0
}
```
### Prioritäts-Updates
Der Aufrufer kann Prioritäts-Updates abonnieren. Diese Aktualisierungen sind dazu gedacht, die Abschnitte `priorities` und `priorities_autoselect` in der ursprünglichen `serverinfo` des Aufrufers zu aktualisieren. Relevanter `serverinfo`-Abonnement-Befehl:
```json
{
    "command":"serverinfo",
    "subscribe":["priorities-update"],
    "tan":1
}
```
Der Aufrufer erhält die kompletten Daten. Bitte beachte, dass wenn eine Farbe oder ein Effekt mit einem Timeout > -1 läuft, der Aufrufer jede Sekunde neue Daten erhält. Ein Beispiel für ein Update:
```json
{
  "command":"priorities-update",
  "data":{
    "priorities":[
      {
        "active":true,
        "componentId":"GRABBER",
        "origin":"System",
        "owner":"X11",
        "priority":250,
        "visible":true
      },
      {
        "active":true,
        "componentId":"EFFECT",
        "origin":"System",
        "owner":"Warm mood blobs",
        "priority":254,    
        "visible":false
      },
      {
        "active":true,
        "componentId":"COLOR",
        "origin":"System",
        "owner":"System",
        "priority":40,
        "value":{
          "HSL":[65535,0,0],
          "RGB":[0,0,0]
        },
        "visible":false
      }
    ],
    "priorities_autoselect":false
  },
  "instance": 0
}
```
### Aktualisierungen des LED-Mappings
Der Aufrufer kann Aktualisierungen des LED-Mapping-Typs abonnieren. Diese Aktualisierungen sind dazu gedacht, den Abschnitt `imageToLedMappingType` in der ursprünglichen `serverinfo` des Aufrufers zu aktualisieren. Relevanter `serverinfo`-Abonnement-Befehl:
```json
{
    "command":"serverinfo",
    "subscribe":["imageToLedMapping-update"],
    "tan":1}
```
Ein Beispiel-Update:
```json
{
    "command":"imageToLedMapping-update",
    "data":{
        "imageToLedMappingType":"multicolor_mean"
    },
    "instance": 0
}
```
### Abgleich-Updates
Der Aufrufer kann Abgleich-Updates abonnieren. Diese Aktualisierungen sind dazu gedacht, den Abschnitt `Abgleich` der ursprünglichen `Serverinfo` des Aufrufers zu aktualisieren. Relevante `Serverinfo`.
Abonnement-Befehl:
```json
{
    "command":"serverinfo",
    "subscribe":["adjustment-update"],
    "tan":1
}
```
Ein Beispiel-Update:
```json
{
  "command":"adjustment-update",
    "data":[{
      "backlightColored":true,
      "backlightThreshold":0,
      "blue":[0,0,255],
      "brightness": 100,
      "brightnessCompensation": 100,
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
    }],
    "instance": 0
}
```
### VideoMode-Aktualisierungen
Der Aufrufer kann Videomode-Updates abonnieren. Diese Aktualisierungen sind dazu gedacht, den Abschnitt `Videomode` der ursprünglichen `Serverinfo` des Aufrufers zu aktualisieren. Relevante `Serverinfo`
Abonnement-Befehl:
```json
{
  "command":"serverinfo",
  "subscribe":["videomode-update"],
  "tan":1
}
```
Ein Beispiel-Update:
```json
{
  "command":"videomode-update",
  "data":{
    "videomode": "2D"
  },
  "instance": 0
}
```
### Aktualisierungen der Effekte
Der Aufrufer kann Aktualisierungen der Effektliste abonnieren. Diese Aktualisierungen sind dazu gedacht, den Abschnitt `effects` in der ursprünglichen `serverinfo` des Aufrufers zu aktualisieren. Relevante `Serverinfo`.
Abonnement-Befehl:
```json
{
  "command":"serverinfo",
  "subscribe":["effects-update"],
  "tan":1
}
```
Ein Beispiel-Update:
```json
{
  "command":"effects-update",
  "data":{
    "effects": [ ..All effects here..]
  },
  "instance": 0
}
```

### Instanz-Updates
Der Aufrufer kann Instanz-Updates abonnieren. Diese Aktualisierungen sind dazu gedacht, den
Instanz"-Abschnitt der ursprünglichen Serverinfo des Aufrufers zu aktualisieren. Relevanter `serverinfo`
Abonnement-Befehl:
```json
{
  "command":"serverinfo",
  "subscribe":["instance-update"],
  "tan":1
}
```
Ein Beispiel-Update. Dies ist nicht inkrementell - der Aufrufer erhält den vollständigen Datensatz von Instanzen:
```json
{
  "command":"instance-update",
  "data":[
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
  ],
  "instance": 0
}
```
### LED Layout Updates
Der Aufrufer kann Updates zur LED Layout Konfiguration abonnieren. Diese Aktualisierungen sind dazu gedacht, den Abschnitt `leds` in der ursprünglichen `serverinfo` des Aufrufers zu aktualisieren.
Relevanter `serverinfo`-Abonnement-Befehl:
```json
{
  "command":"serverinfo",
  "subscribe":["leds-update"],
  "tan":1
}
```
Ein Beispiel-Update. Dies ist nicht inkrementell - der Aufrufer wird den vollständigen Datensatz der Leds erhalten:
```json
{
  "command":"leds-update",
    "data": {
      "leds" : [
      {
        "hmin":0.0,
        "hmax":1.0,
        "vmin":0.0,
        "vmax":1.0
       },
       ... more leds ...
      ]
    },
  "instance": 0
}
```
