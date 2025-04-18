---
outline: [2, 3]
---

# Fortgeschritten
Spezifische Themen mit Details

## LED Layout
Hyperion weist jeder einzelnen LED eine bestimmte Position im Bild zu. Diese Positionen sind Quadrate und um ein Quadrat zu erzeugen, benötigen Sie 4 Werte (obere Kante, untere Kante, linke Kante, rechte Kante). Diese Kanten spiegeln sich in `hmin`, `hmax` für horizontal und `vmin`, `vmax` für vertikal wider. Sie haben einen Wertebereich von `0.0` bis `1.0`.

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

<ImageWrap src="/images/en/user_ledlayout1.jpg" alt="Hyperion LED Layout">
Eine einzelnen LED Definition

</ImageWrap>

Fügen wir also 2 weitere LEDs hinzu, um es deutlicher zu machen \
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
<ImageWrap src="/images/en/user_ledlayout2.jpg" alt="Hyperion LED Layout">
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
  - Stelle sicher, dass die [Hyperion-Einstellungsstufe](/de/user/Configuration.md#Einstellungsstufen) auf **Fortgeschritten** gestellt ist.
  - Navigiere zu Konfiguration -> LED-Hardware und wechsele auf die Registerkarte LED-Layout. Du wirst einen neuen Abschnitt **Generierte/aktuelle LED-Konfiguration** sehen.

<ImageWrap src="/images/de/user_ledlayout3.jpg" alt="Hyperion LED Layout" />

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

## Ereignisse & Aktionen 

Mit den Ereignisdiensten von Hperion können Betriebssystem-, zeitbasierte und/oder CEC-Ereignisse mit ausgeführten Aktionen verknüpft werden.

### Betriebssystem-Ereignisse

Einstellungen zu verschiedenen Betriebssystem-Ereignissen, die Hyperion verarbeiten kann.

* **Reagiere auf Ruhezusstand**: Reagiere auf Ereignisse, die das Betriebssystem aussetzen/fortsetzen
* **Reagiere auf Bildschirmsperre**: Reagiere auf Ereignisse beim Sperren/Entsperren des Bildschirms
* **Leerlauf, bei Bildschirmsperre**: Wechsel in den Ruhezustand, wenn der Bildschirm gesperrt ist; andernfalls in den Leerlaufmodus wechseln

### Zeitliche Ereignisse 

Einstellungen, die sich auf geplante, d.h. zeitbasierte Ereignisse beziehen, die von Hyperion verarbeitet werden sollen.

Es können mehrere Ereignis-/Aktionspaare definiert werden, um festzulegen, welche Aktion zu einem bestimmten Zeitpunkt ausgeführt werden soll. Die Aktion wird täglich eingeplant.
* **Zeitpunkt**: Zeitpunkt, zu dem eine Aktion ausgeführt werden soll
* **Aktion**: Auszuführende Aktion

::: details Beispiel Konfiguration
\
<ImageWrap src="/images/de/user_events_scheduled.png" alt="Geplante Ereignisse -Beispiel" />
:::

### CEC-Ereignisse

Einstellungen für verschiedene CEC (Consumer Electronics Control) Protokollereignisse, die Hyperion verarbeiten kann.

Es können mehrere Ereignis-/Aktionspaare definiert werden, um zu konfigurieren, welche Aktion bei einem erkannten CEC-Ereignis ausgeführt werden soll.
* **CEC-Ereignis**: CEC-Ereignis, das die Aktion auslösen soll
* **Aktion**: Auszuführende Aktion

::: details Beispiel Konfiguration
\
<ImageWrap src="/images/de/user_events_cec.png" alt="CEC-Ereignisse - Beispiel" />
:::

