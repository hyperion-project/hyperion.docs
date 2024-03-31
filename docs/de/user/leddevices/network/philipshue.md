# Philips Hue

Die bekannte [Philips Hue Bridge + Lampen](https://www.philips-hue.com/de-de) wird unterstützt. Wie kann man sie mit Hyperion konfigurieren? Schau selbst nach in der Web-Konfiguration

## Entertainment API

::: warning Warnung vor Anfällen bei Lichtempfindlichkeit
Bestimmte Personen fühlen sich möglicherweise unwohl, wenn sie schnellen Lichtblitzen/-mustern ausgesetzt sind.
Bitte sehe sofort von der Verwendung des Unterhaltungsmodus ab, wenn du Unwohlsein verspürst oder irgendwelche dir bekannten Gesundheitszustände hast. Bitte informiere dich unter diesen Umständen bei einem Arzt. Stelle sicher, dass dein Unterhaltungsraum gut beleuchtet ist.

Hyperion kann nicht für vorhersehbare oder unvorhersehbare, negative oder schädliche Auswirkungen haftbar gemacht werden.
:::

### Anforderungen
  * Bevor du anfängst, benötigt die Entertainment-API mindestens eine Entertainment-Gruppe/Bereich mit mindestens einer zugewiesenen Lampe! Siehe: [Entertainment-Gruppen / -Bereiche](#entertainment-gruppen-bereiche)
  * Eine normale Hue-Gruppe, funktioniert NICHT mit der Hue Entertainment API!
  * Überprüfe die Option "Use Hue Entertainment API" und benutze den Philips Hue Entertainment-Assistenten bei der Web-Konfiguration zur Konfiguration ( zu finden unter LED-Hardware-Bereich)!
  * Die Entertainment-API benötigt zusätzlich eine Benutzer ID und einen passenden Clientkey. Schaue unter: [Philips Hue Entertainment Wizard](#philips-hue-entertainment-wizard)

### Philips Hue Entertainment Wizard
  * Im Assistenten werden deine Hue-Bridges automatisch im lokalen netzwerk gefunden. Falls nicht, so versuche die IP-Adresse der Bridge einzugeben und klicke auf das " Wiederholen"-Symbol / die Schaltfläche neben dem IP-Eingabefeld.
  * Wenn nur die Benutzer ID bekannt ist oder man ganz von vorne anfängt, erstellt man mit dem Philips Hue Entertainment-Assistenten einen neuen Benutzer und ein Clientkey wird automatisch generiert.
  * Wurde auf der von dir verwendeten Bridge keine Entertainment-Gruppe / Bereich gefunden, schaltet der Assistent auf die klassische Version zurück und deaktiviert die Verwendung der Hue Entertainment API!
  * Benutzer ID, Clientkey und Entertainment-Gruppe / -Bereich vorhanden? Wählt die Unterhaltungsgruppe / den Bereich aus, die/den du verwenden möchtest, und stimmt die vorgewählten Bildschirmpositionen für jede Lampe ab.
  * Vergiss nicht, deine Änderungen zu speichern! ;)

### Bridge-Anforderungen / Einschränkungen
  * Um die Philips Hue Entertainment API zu nutzen, muss die Bridge mindestens die API-Version 1.22 verwenden!
  * Auf einer Hue-Bridge kann immer nur eine Entertainment-Gruppe / ein Bereich aktiv sein!

### Nicht originale Hue-Bridge
  * [diyHue](https://diyhue.org/) wird unterstützt. Bitte stell sicher, dass der Name Deine diyHue Bridge mit "diyHue" beginnt, damit Workarounds aktiviert werden, wenn diyHue sich nicht wie das Original verhält.
  * Wenn deine Bridge nicht gefunden wurde oder zwar gefunden wurde, aber nicht die, die du verwenden möchtest, gib die gewünschte Bridge-IP-Adresse manuell ein und klicke auf das Symbol / die Schaltfläche "Wiederholen" neben dem IP-Eingabefeld.

### Entertainment Gruppen / Bereiche
  * Entertainment-Gruppen / Bereiche können über die original Philips Hue-App oder in der Hue Essential-App (für diyHue) erstellt werden.
  * Stellt auch die rechte z-Achse (Bodenhöhe, TV-Höhe und Deckenhöhe) für jede Lampe innerhalb der Konfiguration der Entertainment-Gruppe / des Bereichs ein.Durch Antippen jeder Lampe ändert sich die Höhe und wird im Philips Hue Entertainment-Assistenten erkannt, um auch die richtige Bildschirmposition auszuwählen.
  * Du kannst bis zu 10 Philips Hue- oder Friends of Hue Leuchten pro Entertainment-Gruppe / Bereich anschließen.
  * Wenn eine Unterhaltungsgruppe / ein Unterhaltungsbereich mit der Unterhaltungs-API verwendet wird, kannst du keine der Lampen in der Unterhaltungsgruppe / dem Unterhaltungsbereich steuern, bis die Unterhaltungs-API stoppt!

### Konfigurations Tipps & Tricks
  * Eine Farbkalibrierung ist nicht erforderlich, du kannst die Standardwerte beibehalten.
  * Um die aktive Entertainment-Gruppe / den Bereich von Hyperion aus zu aktivieren/deaktivieren, deaktiviere Hyperion oder nur die LED-Hardwarekomponente.
	Der vorherige Zustand der Lampe wird wiederhergestellt, wenn aktiviert.

## Klassische Philips Hue-Nutzung ohne die Entertainment-API

### Erweiterte Einstellungen

#### Signalerkennung
  * Hyperion sendet kontinuierlich Farbinformationen an die Bridge. Deshalb kam die Signalerkennung ins Spiel.
  * Mit der Option `Signalerkennungs-Timeout bei Schwarz` kann man einstellen, wie lange alle Lampen auf Schwarz gesetzt werden bevor der vorherige Lampenzustand wiederhergestellt wird.
  * Einige Grabber liefern kein echtes Schwarz, sondern eher Dunkelgrau, so dass Schwarz = 0 nie vorkommt. Mit der Option `Signalerkennung Helligkeit Minimum` können wir die minimale Helligkeit einstellen, die als schwarz gilt. Der Bereich kann von 0 = 0% bis 1 = 100% eingestellt werden, z.B. 0,005 = 0,5%. Wenn 0 für deine Einstellung nicht funktioniert, erhöhe diesen Wert in 0,005 Schritten. Das ist wie bei den Schwellenwerten für USB Capture.

#### Helligkeit *Einstellungen können in zukünftigen Versionen entfernt werden*
  * Setze / belasse `Helligkeitsfaktor` wieder auf 1 (Standard) - klassischer Fehler bei geringer Helligkeit ist behoben
  * Setze / belasse `Helligkeit Minimum` auf 0 (Standard) - Du kannst eine minimale Helligkeit einstellen, damit die Lampen nie aus sind
  * Setze / belasse `Helligkeit maximal` auf 1 (Voreinstellung) - Du kannst eine maximale Helligkeit einstellen, wenn du in hellen Szenen nicht den ganzen Raum aufleuchten lassen willst
  * Wertebereich für Helligkeit minimal / maximal sind: 0 = 0% bis 1 = 100%, z.B. 0,05 = 5% / 0,5 = 50%
  * Der Helligkeitsfaktor ist ein Multiplikator für die Eingangshelligkeit, d.h. z.B. 50% Eingangshelligkeit * Helligkeitsfaktor (z.B. 1,5) = neue 75% Helligkeit.
  * __Sei gewarnt__:
  Wenn du den Helligkeitsfaktor / Minimum / Maximum auf einen anderen Wert als den Standardwert änderst, ändert sich auch die Farbwiedergabe!!!
  Z.B. wird Dunkel/Schwarz als tiefes Dunkelblau erscheinen, wenn du die minimale Helligkeit anhebst, weil die dunkelste Farbe innerhalb des Farbton-Licht-Systems ein dunkles Blau ist, denn Schwarz ist keine Farbe, sondern lediglich aus.
  __UND__ du kannst das gesamte Entertainment-API-Erlebnis versäumen. ;)

::: warning Schnelle unkontrollierte Farben / Flackern
  * Die Farbinformation für jede Lampe, hängt vom Eingangssignal deiner Aufnahmequelle, der definierten Bildschirmposition, die für die Lampe verwendet werden soll (wie jede andere LED-Konfiguration) und der verwendeten Aufnahmeframerate ab!
  * Eingangssignale mit Rauschen und anderen Bildstörungen können diesen Effekt des schnellen Farbwechsels/Flimmerns verursachen. Weitere Informationen, wie man das Problem reduzieren kann, findest du im nächsten Tipp:
:::

::: tip Aktiviere die Glättung in der Bildbearbeitung!
  Dadurch kann das extrem schnelle Farb-/Flimmern sehr gut kontrolliert werden.
    Diese Werte funktionieren gut, aber entscheide selbst:
    Zeit: 80 - 120 ms
    Updatefrequenz: 35 - 40 Hz - höhere Werte führen wieder zu schnellerem Farbwechsel / Flackern
    Update-Verzögerung: 0 ms
    Kontinuierliche Ausgabe: nein - muss nicht sein, da die letzten Farbwerte in der jeweiligen Lampe gespeichert werden
:::

### Konfigurations Tipps & Tricks
  * Verwende den Philips Hue-Assistenten bei der Webkonfiguration zur Konfiguration (verfügbar im Abschnitt "LED-Hardware")!
  * Eine Farbkalibrierung ist nicht erforderlich, du kannst die Standardwerte beibehalten.
  * Wenn dir die Helligkeit zu niedrig ist und Hyperion bereits auf 100% steht, kannst du den Helligkeitsfaktor in der Webkonfiguration -> LED-Hardware erhöhen.
  * Die Helligkeitskompensation beeinflusst die Helligkeit über verschiedene Farben hinweg (Einstellen in der Farbsektion)
  * Um die Bridge-Steuerung von Hyperion zu aktivieren/deaktivieren, deaktiviere entweder Hyperion oder nur die LED-Hardware-Komponente.
	Der vorherige Zustand der Lampe wird wiederhergestellt
