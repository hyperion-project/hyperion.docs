# Unser erster Effekt
Lass uns gemeinsam unseren ersten Effekt erstellen! \
Ziel dieses Effekts ist es, den allgemeinen Aufbau eines Effekts zu zeigen und dich mit der API und dem Workflow vertraut zu machen.

## Anforderungen 
  * Ein installiertes und laufendes Hyperion. Du brauchst Zugriff auf das Dateisystem, auf dem Hyperion installiert wurde.
  * Texteditor (nach deinem Belieben, ich würde [Visual Studio Code](https://code.visualstudio.com/) empfehlen.)
  * Gehe zum Ordner "custom-effects" der Hyperion-Installation (innerhalb des Ordners .hyperion im Home-Verzeichnis).
  * **Lege in der Web-Konfiguration im Abschnitt "LED-Hardware" ein LED-Matrix-Layout für 10x10 LEDs fest.**

### Start
Zuerst beginnen wir mit der Python-Datei. Erstelle eine neue Datei mit dem Namen `neweffect.py` in deinem `custom-effects`-Ordner. \
Wir müssen einige Module importieren, `hyperion` und `time` wird immer benötigt. Das Zeitmodul kommt aus Python, wenn du wissen willst, welche Methoden so ein Modul hat, besuche die [Python-Dokumentation](https://docs.python.org/3.5/library/). Was `hyperion` kann, ist bereits unter [Effect Engine API](/de/effects/api.md) erklärt.

``` python
# Lass uns unsere Module importieren, damit wir sie verwenden können
import hyperion, time

# Erstelle eine Schleife, diese Schleife läuft, bis der Benutzer den Effekt stoppt
while not hyperion.abort():
  # Hier befinden wir uns innerhalb der Schleife, lass uns irgendwas machen
  # Entsprechend der Dokumentation von hyperion.imageDrawPoint()
  # Die Position dieses Punktes ist 2 auf der x-Achse und 5 auf der y-Achse mit einer Breite von 1 Pixel und der Farbe Rot 
  hyperion.imageDrawPoint(2,5,1,255,0,0)
  # Nun müssen wir Hyperion mitteilen, dass wir das erstellte Bild übertragen wollen
  hyperion.imageShow()
  # Da wir uns noch in unserer Schleife befinden, sollten wir eine Pause einlegen, um die Ausführung zu verlangsamen. Wir sollten niemals CPU-Leistung verschwenden :)
  # Eine Sekunde pausieren, bis die Schleife von vorne beginnt
  time.sleep(1)
```
**Zusammenfassung**: Erster Effekt fertig! Wir haben einen roten Punkt mit einer Breite von einem Pixel auf ein leeres Bild gesetzt und diesen an Hyperion gesendet.

### Konfiguration
Nun wollen wir unsere neweffect.py testen. Erstelle dazu eine neue Datei namens `neweffect.json`. Und platziere den folgenden Code darin
``` json
{
	"name" : "Mein erster eigener Effekt!",
	"script" : "neweffect.py",
	"args" : {
	}
}
```
Lass uns darüber sprechen, was wir hier getan haben
 - Die `neweffect.json` enthält die Konfiguration für unseren Effekt.
 - Die `name` Eigenschaft ist der Effektname, der in der Effektliste angezeigt wird und frei definiert werden kann.
 - Die `script` Eigenschaft zeigt auf die Python-Datei, die gestartet werden soll.
 - Die `args` Eigenschaft enthält Optionen und deren Werte, z. B. eine Farbe, Geschwindigkeit und so weiter. Wir lassen dies vorerst leer.

**Nachdem du diese Datei in deinen Ordner custom-effects hinzugefügt hast, musst du Hyperion einmal neu starten**

Jetzt solltest du den Effekt "Mein erster eigener Effekt!" in der Effektliste der Remote-Seite sehen. Startet man den Effekt, sollte man bei der Visualisierung so etwas sehen.
<ImageWrap src="/images/en/owneff_1.jpg" alt="Custom Hyperion Effect" />

Laut dem [Koordinatensystem](http://doc.qt.io/qt-5/coordsys.html#rendering) sind wir bei 2 auf der x-Achse und 5 auf der y-Achse, wie zuvor beschrieben. Perfekt!

### Farboption hinzufügen
Jetzt wollen wir die Farbe des Punktes konfigurierbar machen. \
Bearbeiten wir die Datei neweffect.py.

``` python
import hyperion, time

# Lass uns den Wert der Option custom-color abrufen, die Werte werden in der Variablen color gespeichert
color = hyperion.args.get('custom-color', (0,255,200))

while not hyperion.abort():
  # Hol die Farbinformationen aus der Variablen color
  hyperion.imageDrawPoint(2,5,1,color[0],color[1],color[2])
  hyperion.imageShow()
  time.sleep(1)
```
  * Mit `hyperion.args.get()` holen wir uns die Werte aus der neweffect.json, die diese Python-Datei startet (aus der Eigenschaft `args` der neweffect.json, die momentan leer ist).
  * TDas Farb-Array am Ende von `hyperion.args.get('custom-color', (0,255,200))` ist ein Fallback-Wert, da wir in den Variablen der neweffect.json keine Eigenschaft `custom-color` liefern. Dies gewährleistet immer einen funktionierenden Effekt, wähl diese Standardwerte mit Bedacht.
  * Wie du siehst, hat `hyperion.imageDrawPoint(...)` auch eine Änderung erhalten, da wir die `custom-color` in die Variable `color` schreiben, greifen wir auf die Werte mit `color[0]` was 0 ist, `color[1]` was 255 ist und `color[2]` was 200 ist.
  
**Speicher die neweffect.py und starte den Effekt neu, ein Neustart von Hyperion ist nicht erforderlich** \
Es sollte nun wie folgt aussehen
<ImageWrap src="/images/en/owneff_2.jpg" alt="Custom Hyperion Effect with cyan color" />

### Mehr Punkte!
Jetzt haben wir einen einzelnen Punkt, und wir haben die Farbe für den Punkt vorbereitet, um diesen konfigurierbar zu machen. Jetzt wollen wir mehr davon! \
Wieder editieren wir die neweffect.py
``` python
import hyperion, time, random

color   = hyperion.args.get('custom-color', (0,255,200))
iWidth  = hyperion.imageWidth()
iHeight = hyperion.imageHeight()

while not hyperion.abort():
    hyperion.imageDrawPoint(random.randint(0,iWidth),random.randint(0,iHeight),1,color[0],color[1],color[2])
    hyperion.imageShow()
    time.sleep(1)
```
  * Wir erfassen nun die Breite (`hyperion.imageWidth()`) und Höhe (`hyperion.imageHeight()`) des Bildes, um sicherzustellen, dass wir das gesamte Bild mit Punkten füllen können. Für die erforderliche Zufallszahl verwenden wir [import random](https://docs.python.org/3.5/library/random.html) und `random.randint()` mit einem Minimalwert von 0 und einem Maximalwert unserer Breite und Höhe. Dies erzeugt zufällige Integer-Zahlen.
  * Bedenke, dass das Benutzer-Setup immer eine unterschiedliche Breite und Höhe hat und sogar das Verhältnis zwischen ihnen dynamisch ist, basierend auf dem LED-Layout.
  * **Benutze niemals feste Positionen, Breiten,... berechne sie immer!**
 
Dies ist also das Bild, nachdem wir den Effekt erneut gestartet haben.
<ImageWrap src="/images/en/owneff_3.gif" alt="Custom Hyperion Effect with random dots" />

Jede Sekunde ( beachte die `sleep.time(1)`) malt es an einer zufälligen Position einen neuen Punkt, endlos. Er prüft nicht, ob bereits ein Punkt vorhanden ist, er überschreibt einfach den vorherigen Punkt.

### Mehr Farbe
Fügen wir eine Option hinzu, die den Effekt veranlasst, optional eine zufällige Farbe für jeden Punkt zu verwenden, anstatt immer die gleiche. \
Dazu editieren wir wieder die neweffect.py
``` python
import hyperion, time, random
# eine Hilfsfunktion zur Konvertierung von HSV in den RGB-Raum
def hsv_to_rgb(h, s, v):
  if s == 0.0: v*=255; return [v, v, v]
  i = int(h*6.)
  f = (h*6.)-i; p,q,t = int(255*(v*(1.-s))), int(255*(v*(1.-s*f))), int(255*(v*(1.-s*(1.-f)))); v*=255; i%=6
  if i == 0: return [v, t, p]
  if i == 1: return [q, v, p]
  if i == 2: return [p, v, t]
  if i == 3: return [p, q, v]
  if i == 4: return [t, p, v]
  if i == 5: return [v, p, q]

color       = hyperion.args.get('custom-color', (0,255,200))
randomColor = bool(hyperion.args.get('random-color', True))
iWidth      = hyperion.imageWidth()
iHeight     = hyperion.imageHeight()

while not hyperion.abort():

  if randomColor:
    color = hsv_to_rgb(random.uniform(0,1), 1, 1)

  hyperion.imageDrawPoint(random.randint(0,iWidth),random.randint(0,iHeight),1,color[0],color[1],color[2])
  hyperion.imageShow()
  time.sleep(1)
```
  * Um helle Farben zu erzeugen, schreiben wir eine eigene Funktion: `def hsv_to_rgb(h, s, v): ...`
  * Also fügen wir außerdem eine neue Option `randomColor` hinzu, die True ist. Wir parsen True/False-Werte immer als `bool(...)`, um sicherzustellen, dass sie wirklich bool sind und nicht ein string. Wenn du nicht weißt, was der Unterschied zwischen bool, string, int und float ist, schau mal kurz in der [python Dokumentation](https://docs.python.org/3.5/library/stdtypes.html) nach.
  * Innerhalb unserer `while not hyperion.abort():` Schleife prüfen wir mit `if randomColor:` ob randomColor true ist oder nicht, wenn es true (aktiviert) ist, überschreiben wir unsere Variable `color` mit einer zufälligen Farbe, die mit `hsv_to_rgb(h,s,v)` erzeugt wird. Wir randomisieren einfach h für den Farbton mit unserer Zufallsfunktion `hsv_to_rgb(random.uniform(0,1), 1, 1)`, das h akzeptiert Werte zwischen 0 und 1. Was ist hue? Spiel' mal mit hue bei [this](https://www.w3schools.com/colors/colors_hsl.asp) colorpicker herum. Du siehst, warum dies ein einfacher Weg ist, um mit einer einfachen Zufallsfunktion leuchtende Farben zu erzeugen.

**Speichere die Datei und starte den Effekt neu**
<ImageWrap src="/images/en/owneff_4.gif" alt="Custom Hyperion Effect with random dots and color" />

### Das Bild leeren
Fügen wir eine Option hinzu, die das Bild in einem konfigurierbaren Intervall in Sekunden auf Schwarz setzt. Dadurch werden alle Punkte mit Schwarz überschrieben.

::: tip
 Mehr wird bald kommen
:::
