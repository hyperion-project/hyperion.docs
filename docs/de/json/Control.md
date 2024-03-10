# Steuerung
Man kann Hyperion steuern, indem man bestimmte JSON-Nachrichten sendet.

::: tip
Die Eigenschaft `tan` wird in diesen Aufrufen unterstützt, aber aus Gründen der Kürze weggelassen.
:::

[[toc]]

## Abschnitte

### Farbe einstellen
Stellt eine Farbe für alle LEDs ein oder gibt ein Muster von LED-Farben vor.

| Eigenschaft |  Typ    | Erforderlich | Anmerkung                                                                                                            |
| :---------- | :-----: | :----------: | :------------------------------------------------------------------------------------------------------------------- |
| color       | Array   | Ja           | Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                                                   |
| duration    | Integer | Nein         | Dauer der Farbe in ms. Wenn du keine Dauer angibst, ist sie `0` -> unendlich.                                        |
| priority    | Integer | Ja           | Wir empfehlen `50`, entsprechend den [Priority Guidelines](/de/api/guidelines#priority_guidelines). Min `2` Max `99` |
| origin      | String  | Ja           | Ein kurzer Name deiner Anwendung, z. B. `Hyperion of App`. Maximale Länge ist `20`, minimale `4`.                    |

```json
// Beispiel: Einstellen einer blauen Farbe mit unbegrenzter Dauer auf Priorität 50 
{
  "command":"color",
  "color":[0,0,255],
  "priority":50,
  "origin":"My Fancy App"
}
// Beispiel: Einstellen einer cyanfarbenen Farbe für 12 Sekunden bei Priorität 20
{
  "command":"color",
  "color":[0,255,255],
  "duration":12000,
  "priority":20,
  "origin":"My Fancy App"
}

// Beispiel: Gebe ein Farbmuster vor, das so lange wiederholt wird, bis alle LEDs eine Farbe haben
// Eine LED hat 3 Werte (Rot,Grün,Blau) mit einem Bereich von 0-255
// In diesem Fall LED 1: Rot, LED 2: Rot, LED 3: Blau.
{
  "command":"color",
  "color":[255,0,0,255,0,0,0,0,255],
  "duration":12000,
  "priority":20,
  "origin":"My Fancy App"
}
```

### Effekt auswählen
Startet einen Effekt mittels Namen. Die verfügbaren Namen findet man in der [serverinfo effect list](/de/json/ServerInfo.md#effect-list).

| Eigenschaft | Typ     | Erforderlich | Bemerkung                                                                                                              |
| :---------- | :-----: | :----------: | :--------------------------------------------------------------------------------------------------------------------- |
| effect      | Object  | Ja           | Objekt mit zusätzlichen Eigenschaften. z. B. `"name":"EffectName"`.                                                    |
| duration    | Integer | Nein         | Dauer der Effekte in ms. Wenn du keine Dauer angibst, ist es `0` -> unendlich.                                         |
| priority    | Integer | Ja           | Wir empfehlen `50`, entsprechend den [Priority Guidelines](/de/api/guidelines#priority_guidelines). Min. `2` Max. `99` |
| origin      | String  | Ja           | Ein kurzer Name deiner Anwendung wie `Hyperion Programm`. Maximale Länge ist `20`, min. `4`.                           |

```json
// Beispiel: Auswählen des Effekts 'Warm mood blobs' mit unbegrenzter Dauer
{
  "command":"effect",
  "effect":{
    "name":"Warm mood blobs"
  },
  "priority":50,
  "origin":"My Fancy App"
}
// Beispiel: Effekt 'Rainbow swirl' für 5 Sekunden auswählen.
{
  "command":"effect",
  "effect":{
    "name":"Rainbow swirl"
  },
  "duration":5000,
  "priority":50,
  "origin":"My Fancy App"
}
// Beispiel: Effekt 'Rainbow swirl' für 1 Sekunde mit überlagertem Argument setzen.
// Jeder Effekt hat unterschiedliche Argumente in der Eigenschaft args, die überschrieben werden können.
// WARNUNG: Wir empfehlen dringend, lieber den Effektkonfigurator in der Benutzeroberfläche zu verwenden. Das Senden von ungültigen Werten kann zu Fehlverhalten oder Absturz des Effekts führen.
{
  "command":"effect",
  "effect":{
    "name":"Rainbow swirl",
    "args":{
      "rotation-time":1
    }
  },
  "duration":5000,
  "priority":50,
  "origin":"My Fancy App"
}
```

### Bild einsetzen
Setzt ein einzelnes Bild. Unterstützt alle [Qt5](https://doc.qt.io/qt-5/qimagereader.html#supportedImageFormats) Bildformate, einschließlich png/jpg/gif.

| Eigenschaft | Typ     | Erforderlich | Bemerkung                                                                                                             |
| :---------- | :-----: | :----------: | :-------------------------------------------------------------------------------------------------------------------- |
| imagedata   | String  | Ja           | Angaben des Bildes als [Base64](https://en.wikipedia.org/wiki/Base64).                                                |
| format      | String  | Ja           | Setze diese Option auf "Auto", damit Hyperion das Bild je nach Dateityp parsed.                                        |
| name        | String  | Ja           | Der Name des Bildes.                                                                                                  |
| duration    | Integer | Nein         | Anzeigendauer des Bildes in ms. Wenn du keine Dauer angibst, ist es `0` -> endlos.                                    |
| priority    | Integer | Ja           | Wir empfehlen `50`, entsprechend den [Priority Guidelines](/de/api/guidelines#priority_guidelines). Min. `2` Max. `99`|
| origin      | String  | Ja           | Ein kurzer Name deiner Anwendung wie `Hyperion Programm`. Maximale Länge ist `20`, min. `4`.                          |

```json
// Ein Bild für 5 Sekunden einstellen
{
  "command":"image",
  "imagedata":"VGhpcyBpcyBubyBpbWFnZSEgOik=",
  "name":"Name of Image",
  "format":"auto",
  "priority":50,
  "duration":5000,
  "origin": "My Fancy App"
}
```

### Zurücksetzen
Setzt eine Priorität zurück, normalerweise verwendet für [set color](#set-color), [set
effect](#set-effect) oder [set image](#set-image).
```json
// Effekt/Farbe/Bild löschen mit Priorität 50
{
  "command":"clear",
  "priority":50
}
// Alle Effekte/Farben/Bilder löschen
{
  "command":"clear",
  "priority":-1
}
```
::: warning
Wenn du alles löschst, löschst du alle Effekte und Farben, unabhängig davon, wer sie eingestellt hat!
Stattdessen empfehlen wir, dass Benutzer eine Liste möglicher Löschziele auf der Grundlage einer Prioritätenliste bereitstellen
:::

### Anpassungen
Anpassungen spiegeln die Farbkalibrierung wider. Man kann alle Eigenschaften von [serverinfo adjustments](/de/json/serverinfo#adjustments) ändern.

| Eigenschaft            |      Typ       | Erforderlich | Bemerkung                                                                                                        |
| :--------------------- | :------------: | :----------: | :--------------------------------------------------------------------------------------------------------------- |
|          red           |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|         green          |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|          blue          |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|          cyan          |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|        magenta         |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|         yellow         |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|         white          |     Array      |  Nein        |                        Ein Array von R G B Integer-Werten z. B. `[R,G,B]`                                        |
|        gammaRed        | Number (float) |  Nein        |                           Minimum:`0.1` Maximum `5.0` In `0.1` Schritten                                         |
|       gammaGreen       | Number (float) |  Nein        |                           Minimum:`0.1` Maximum `5.0` In `0.1` Schritten                                         |
|       gammaBlue        | Number (float) |  Nein        |                           Minimum:`0.1` Maximum `5.0` In `0.1` Schritten                                         |
|       brightness       |    Integer     |  Nein        |                             Minimum: `0` Maximum `100` In `0.1` Schritten                                        |
| brightnessCompensation |    Integer     |  Nein        |                             Minimum: `0` Maximum `100` In `0.1` Schritten                                        |
|   backlightThreshold   |    Integer     |  Nein        | Minimum: `0` maximal `100`. Schritt von `1`. (Minimale Helligkeit!) Deaktiviert für Effekt/Farbe/Bild            |
|    backlightColored    |    Boolean     |  Nein        |    Bei `true` ist die Hintergrundbeleuchtung farbig, bei `false` ist sie weiß. Deaktiviert für Effekt/Farbe/Bild |
|           id           |     String     |  Nein        |                                        Kurze Bezeichnung                                                         |

```json
// Beispiel: GammaRot auf 1,5 setzen
{
  "command":"adjustment",
  "adjustment":{
    "gammaRed":1.5
  }
}
// Beispiel: Grün auf [0,236,0] setzen
{
  "command":"adjustment",
  "adjustment":{
    "green":[0,236,0]
  }
}
// Beispiel: backlightColored auf true setzen
{
  "command":"adjustment",
  "adjustment":{
    "backlightColored":true
  }
}
// Beispiel: Sende die 3 obigen Beispiele auf einmal
{
  "command":"adjustment",
  "adjustment":{
    "backlightColored":true,
    "gammaRed":1.5,
    "green":[0,236,0]
  }
}
```

### LED-Mapping
Wechselt den LED-Mapping-Modus für das eingehende Bild.

| mappingType Wert          | Beschreibung                                           |
| :------------------------ | :----------------------------------------------------- |
| multicolor_mean           | Durchschnittsfarbe einfach - pro LED                   |
| unicolor_mean             | Durchschnittsfarbe Gesamtbild - auf alle LED angewandt |
| multicolor_mean_squared   | Durchschnittsfarbe zum Quadrat - pro LED               |
| dominant_color            | Dominant Color- per LED                                |
| dominant_color_advanced   | Dominante Farbe fortgeschritten - pro LED              |

```json
// Beispiel: Mapping-Modus auf multicolor_mean setzen
{
  "command":"processing",
  "mappingType":"multicolor_mean"
}
// Beispiel: Mapping-Modus auf unicolor_mean setzen
{
  "command":"processing",
  "mappingType":"unicolor_mean"
}
```

### Video-Modus
Schaltet den Videomodus um. Mögliche Werte sind: `2D`, `3DSBS` und `3DTAB`.
 ```json
// Beispiel: Videomodus auf 3DTAB einstellen
{
  "command":"videomode",
  "videoMode":"3DTAB"
}
// Beispiel: Videomodus auf 3DSBS einstellen
{
  "command":"videomode",
  "videoMode":"3DSBS"
}
```

### Komponenten steuern
Einige Komponenten können zur Laufzeit aktiviert und deaktiviert werden. Um den aktuellen Status und die verfügbaren Komponenten zu erhalten, siehe [Serverinfo Komponenten](/de/json/serverinfo#components). Siehe .
auch: [Komponenten/IDs erklärt](#components-ids-explained)

 ```json
// Beispiel: LEDDEVICE-Komponente deaktivieren
{
  "command":"componentstate",
  "componentstate":{
    "component":"LEDDEVICE",
    "state":false
  }
}
// Beispiel: SMOOTHING-Komponente aktivieren
{
  "command":"componentstate",
  "componentstate":{
    "component":"SMOOTHING",
    "state":true
  }
}
```
::: warning
Hyperion selbst muss aktiviert sein! Prüfe den Status von "ALL" in der Komponentenliste, bevor du eine andere Komponente änderst!
:::

### Komponenten/IDs erklärt
Jede Komponente hat eine eindeutige ID. Nicht alle von ihnen können aktiviert/deaktiviert werden - einige von ihnen
wie Effekt und Farbe, werden verwendet, um den Quellentyp zu bestimmen, wenn die [Prioritätsliste](/de/json/ServerInfo.html#Prioritäten) untersucht wird.

|  ComponentID   |      Component       | Enable/Disable | Beschreibung                                                                                                    |
| :------------- | :------------------: | :------------: | :-------------------------------------------------------------------------------------------------------------- |
|   SMOOTHING    |      Smoothing       |      Yes       | Glättungs-Komponente                                                                                            |
|  BLACKBORDER   | Blackborder detector |      Yes       | Komponente zur Erkennung von schwarzen Balken                                                                   |
|   FORWARDER    | JSON/Proto forwarder |      Yes       | JSON/Proto-Forwarder-Komponente                                                                                 |
| BOBLIGHTSERVER |   Boblight server    |      Yes       | Boblight-Server-Komponente                                                                                      |
|    GRABBER     |   Screen capture     |      Yes       | Bildschirm Erfassungskomponente                                                                                 |
|      V4L       |  V4L capture device  |      Yes       | USB-Aufnahmegerät-Komponente                                                                                    |
|    AUDIO       |   Audio capture      |      Yes       | Audio Erfassungskomponente                                                                                      |
|   LEDDEVICE    |      LED device      |      Yes       | LED-Gerätekomponente startet/stoppt die Ausgabe des konfigurierten LED-Geräts                                   |
|      ALL       |  SPECIAL: Hyperion   |      Yes       | Aktivieren oder deaktiviere Hyperion. Wiederherstellen/Speichern des letzten Zustands aller anderen Komponenten |
|     COLOR      |     Solid color      |       No       | Alle Farben, die eingestellt wurden, gehören zu dieser Komponente                                               |
|     EFFECT     |        Effect        |       No       | Alle Effekte gehören zu dieser Komponente                                                                       |
|     IMAGE      |     Solid Image      |       No       | Dazu gehören alle Einzel-/Festbilder. NICHT für Streaming                                                       |
| FLATBUFSERVER  |  Flatbuffers Server  |       No       | Alle Bildstream-Quellen vom Flatbuffer-Server                                                                   |
|  PROTOSERVER   |  Protobuffer Server  |       No       | Alle Bild-Stream-Quellen vom Protobuffer-Server                                                                 |


### Auswahl der Quelle
Quellen werden immer automatisch nach dem Prioritätswert ausgewählt (der niedrigste Wert hat die höchste
Priorität). Man muss den Prioritätswert der Quelle kennen, die man auswählen möchte -- diese
Prioritätswerte sind in der Datei [serverinfo
Prioritäten](/de/json/serverinfo#priorities).
```json
// Beispiel: Priorität 50 auf sichtbar setzen
{
  "command":"sourceselect",
  "priority":50
}
```
Wenn die Antwort erfolgreich ist, wechselt der `priorities_autoselect`-Status auf false (siehe [serverinfo Autoselection Mode](/de/json/serverinfo##priorities-selection-auto-manual)). Du bist jetzt im manuellen Modus, um zurück in den Auto-Modus zu wechseln, sende:
```json
{
  "command":"sourceselect",
  "auto":true
}
```
Danach wird der `Prioritäten_autoselect`-Status wieder auf `wahr` gesetzt.

::: warning
Du kannst nur Prioritäten auswählen, die `active:true` sind!
:::

### Steuerungsinstanzen
Eine Instanz repräsentiert eine LED-Hardware-Instanz. Sie läuft in ihrem eigenen Bereich mit ihren
eigenen Plugin-Einstellungen, LED-Layout und Kalibrierung. Bevor man eine Instanz auswählt,
sollte man zunächst Informationen über die verfügbaren Instanzen von
[serverinfo](/de/json/serverinfo#instance) erhalten.

```json
// Befehl zum Starten der Instanz 1
{
  "command" : "instance",
  "subcommand" : "startInstance",
  "instance" : 1
}

// Befehl zum Stoppen der Instanz 1
{
  "command" : "instance",
  "subcommand" : "stopInstance",
  "instance" : 1
}
```

### Handhabung der API-Instanz
Bei der Verbindung mit der API wird standardmäßig eine Verbindung zur Instanz `0` hergestellt.
Man kann nur eine Instanz gleichzeitig innerhalb einer einzigen Verbindung steuern,
und [Abonnements](/de/json/subscribe#instance-updates) sind im Kontext der ausgewählten Instanz.

Mit dem folgenden Befehl kann zu einer anderen Instanz gewechselt werden:

```json
// Zur Instanz 1 wechseln
{
  "command" : "instance",
  "subcommand" : "switchTo",
  "instance" : 1
}
```
Dies gibt eine erfolgreiche Antwort oder einen Fehler zurück, wenn die Instanz nicht verfügbar ist.

::: warning
Es ist möglich, dass eine Instanz anhält, während man mit ihr verbunden ist.
In diesem Fall werden die Verbindungen zu dieser Instanz automatisch auf die Instanz `0` zurückgesetzt.
Behalte die Instanzdaten über das Abonnement im Auge, wenn du diesen Vorgang behandeln musst.
Siehe: [Instance updates](/de/json/subscribe#instance-updates).
:::

### Live-Bild-Stream
Man kann einen Livebild-Stream anfordern (wenn die aktuelle Quellpriorität dies unterstützt,
andernfalls erfolgt möglicherweise keine Antwort).
```json
{
  "command":"ledcolors",
  "subcommand":"imagestream-start"
}
```
Es werden "ledcolors-imagestream-update"-Meldungen mit einem base64-kodierten Bild empfangen.
Stoppe den Stream durch Senden:
```json
{
  "command":"ledcolors",
  "subcommand":"imagestream-stop"
}
```
::: danger HTTP/S
Diese Funktion ist für HTTP/S JSON-RPC nicht verfügbar.
:::


### LED-Farb-Live-Stream
Mit dieser Funktion kann ein Live-LED-Farbstream mit aktuellen Farbwerten in RGB
 für jede einzelne LED angefordert werden. Die Aktualisierungsrate beträgt 125ms.
```json
{
  "command":"ledcolors",
  "subcommand":"ledstream-start"
}
```
Du erhältst "ledcolors-ledstream-update"-Meldungen mit einem Array aller LED-Farben.
Stoppe den Stream durch Senden:
```json
{
  "command":"ledcolors",
  "subcommand":"ledstream-stop"
}
```
::: danger HTTP/S
Diese Funktion ist für HTTP/S JSON-RPC nicht verfügbar.
:::

### Hyperion steuern
Steuere das Hyperion System als Ganzes mit den folgenden subCommand Befehlen:

| subcommand    | Beschreibung |
| :------------ | :----------------------------------------------------------------------------------------- |
| suspend       | Ruhezustand für alle Komponenten und Instanzen                                             |
| resume        | Beenden des Ruhezustands, fortsetzen der Verarbeitung                                                                |
| toggleSuspend | Umschalten zwischen Suspend und Resume                                                     |
| idle          | Ruhezustand, aber LEDs anlassen und einen Hintergrund-Effekt ausführen, falls konfiguriert |
| toggleIdle    | Umschalten zwischen Idle und Fortsetzen                                                    |
| restart       | Hyperion neu starten                                                                       |

```json
// Beispiel : Hyperion in den Ruhezustand setzen
{
  "Befehl" : "System",
  "subcommand" : "suspend"
}

// Beispiel:  Wiederaufnahme der Verarbeitung	
{
  "befehl" : "system",
  "subcommand" : "resume"
}

// Beispiel: Umschalten zwischen Suspend und Resume
{
  "befehl" : "system",
  "subcommand" : "toggleSuspend"
}
