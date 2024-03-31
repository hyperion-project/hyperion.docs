# Grafische Benutzeroberfläche
Wir verwenden ein JSON-Schema, um eine benutzerfreundliche GUI zu erstellen und die Eingaben zu validieren, damit keine falschen oder unerwünschten Daten von einer Python-Datei übernommen werden. Jede Python-Datei benötigt ein GUI-Schema.

::: tip Tip
Wenn du noch nie JSON-Syntax geschrieben hast, empfehlen wir eine kurze Einführung. [Hier](https://www.digitalocean.com/community/tutorials/an-introduction-to-json) und/oder [hier (fachlich)](https://www.json.org/)
:::

[[toc]]

## UI-Elemente
Jedes UI-Element hat ein bestimmtes Schema. Das Schema ermöglicht es dir, dem Element eine Bezeichnung zu geben und die Benutzereingabe zu überprüfen, indem du z. B. eine Mindest- und eine Höchstzahl für ein Element vom Typ Zahl angibst. Eine Mindestanzahl von Farben, einen Standardwert (erforderlich!) oder sogar das Ein-/Ausblenden eines Elements basierend auf dem Wert eines anderen Elements.

### Kontrollkästchen
Ein Kontrollkästchen anzeigen.
``` json
  "swirl_enabled" :{
    "type" : "boolean",
    "title" : "edt_eff_swirl_enabled",
    "default" : false
  }
```
Die Option `swirl_enabled` ist vom Typ boolean mit dem Titel `edt_eff_swirl_enabled` ([Titel werden übersetzt](#ubersetzung)). Das `default` setzt die Option auf den definierten Standardwert, zwingend erforderlich!

### String
Ein Eingabefeld, das alle möglichen Zeichen akzeptiert.
``` json
  "swirl_name" :{
    "type" : "string",
    "title" : "edt_eff_swirl_name",
    "default" : "A cool placeholder name"
  }
```
Die Option `swirl_name` wird vom Typ String mit dem Titel `edt_eff_swirl_name` ([Titel werden übersetzt](#ubersetzung)) sein. Das `default` setzt die Option auf den definierten Standardwert, zwingend erforderlich! \
**Optional**
  * Füge `"minLength" : 5` hinzu, um eine Mindestlänge von 5 zu erzwingen.Achte darauf, dass der Standardwert übereinstimmt.
  * Füge `"maxLength" : 9` hinzu, um eine maximale Länge von 9 zu erzwingen. Achte darauf, dass der Standardwert übereinstimmt.
  * Füge `"enum" : ["Amazing1", "Amazing", "Amazing3"]` hinzu, um die Eingabe als Auswahlfeld darzustellen, in dem der Benutzer eine der definierten Optionen auswählen kann.

### Integer
Ein Eingabefeld für Integer
``` json
  "swirl_count" :{
    "type" : "integer",
    "title" : "edt_eff_swirl_count",
    "default" : 5
  }
```
Die Option `swirl_count` wird vom Typ Integer mit dem Titel `edt_eff_swirl_count` ([Titel werden übersetzt](#ubersetzung)) sein. Das `default` setzt die Option auf den definierten Standardwert, zwingend erforderlich! \
**Optional**
  * Füge `"minimum" : 5` hinzu, um einen Mindestwert zu erzwingen, falls er nicht niedriger sein sollte.
  * Füge `"maximum" : 9` hinzu, um einen Maximalwert zu erzwingen, falls er nicht höher sein sollte.
  * Füge`"step" : 2,` hinzu, um eine alternative Werteschrittweite zu definieren. Wenn nicht angegeben, ist der Standardwert `1`. Dies verhindert keine Werte, die "außerhalb" der Stufe liegen, es ist eher eine Hilfe, wenn du Auf/Ab-Tasten verwendest und höhere oder kleinere Stufen gewünscht sind. 


### Zahlen
Ein Eingabefeld für Zahlen (Float)
``` json
  "swirl_spread" :
  {
    "type" : "number",
    "title" : "edt_eff_swirl_spread",
    "default" : 7.0
  }
```
Die Option `swirl_spread` ist vom Typ Zahl (float) mit dem Titel `edt_eff_swirl_spread` ([Titel werden übersetzt](#ubersetzung)). Das `default` setzt die Option auf den definierten Standardwert, erforderlich! \
**Optional**
  * Füge `"minimum" : 5.0` hinzu, um einen Mindestwert zu erzwingen, falls er nicht niedriger sein sollte
  * Füge `"maximum" : 9.6` hinzu, um einen Maximalwert zu erzwingen, falls er nicht höher sein sollte
  * Füge `"step" : 0.1,` hinzu, um eine alternative Werteschrittweite zu definieren. Wenn nicht angegeben, ist der Standardwert `1.0`. Dies verhindert keine Werte, die "außerhalb" der Stufe liegen, es ist eher eine Hilfe, wenn Sie die Auf-/Ab-Tasten verwenden und höhere oder kleinere Stufen gewünscht sind. 

### Select
Erzeugt ein Auswahlelement, in dem man einen der `enum`-Einträge auswählen kann. Der Standardwert ist erforderlich!
``` json
	"candles": {
		"type": "string",
		"title":"edt_eff_whichleds",
		"enum" : ["all","all-together","list"],
		"default" : "all"
	}
```

### Array
Erzeugt ein Array Eingabefeld mit den angegebenen Eigenschaften unter `items`. Du kannst alle Arten von Optionen darin verschachteln.
``` json
  "countries": {
    "type": "array",
    "uniqueItems": true,
    "title" : "edt_eff_countries",
    "items": {
      "type": "string",
      "title": "edt_eff_country"
    },
    "default":["de","at"]
  }
```
Die Option `countries` ist vom Typ Array.(in Python ist es ein Python-Tupel) (dargestellt als Array, in dem man Eigenschaften hinzufügen oder entfernen kann, in diesem Fall ein String-Eingabefeld mit dem Titel `edt_eff_country"`) mit dem Titel `edt_eff_swirl_countries` ([Die Titel werden übersetzt](#ubersetzung)). Das `default` setzt die Option auf den definierten Standardwert. Zwingend Erforderlich! \
**Optional**
  * Füge `"uniqueItems": true` hinzu, wenn du sicherstellen willst, dass jedes Element einzigartig ist.
  * Füge `"minItems": 2` hinzu, um eine Mindestanzahl von Elementen im Array zu erzwingen.
  * Füge `"maxItems": 6`, um eine maximale Anzahl von Elementen für das Array zu erzwingen.

### Array - Multiselect
Erstellt eine Auswahl, bei der mehrere Elemente aus `enum` ausgewählt werden können. Der Standardwert ist nicht erforderlich.
``` json
  "countries": {
		"type": "array",
		"title" : "edt_eff_countries",
		"uniqueItems": true,
		"items": {
      "type": "string",			
      "enum": ["de","at","fr","be","it","es","bg","ee","dk","fi","hu","ie","lv","lt","lu","mt","nl","pl","pt","ro","sl","se","ch"]
    },
    "default":["de","at"],
    "propertyOrder" : 1
  },
```

### Array - RGB Farbauswähler
Erzeugt einen RGB-Farbauswähler.
``` json
  "color" : {
    "type": "array",
    "title" : "edt_eff_color",
    "format":"colorpicker",
    "default" : [255,0,0],
    "items":{
      "type":"integer",
      "minimum": 0,
      "maximum": 255
    },
    "minItems": 3,
    "maxItems": 3
  }
```
Die Option `color` ist vom Typ Array (dargestellt als RGB Farbauswahl) mit dem Titel `edt_eff_color` ([Titel werden übersetzt](#ubersetzung)). Dieser Farbwähler wird auf anfängliches Rot gesetzt.

### Array - Farbauswähler RGBA
Erzeugt einen RGBA-Farbauswähler. Denkt zweimal nach, bevor ihr einen RGBA-Farbauswähler bereitstellt, der Anwendungsfall ist begrenzt.
``` json
  "color" : {
    "type": "array",
    "title" : "edt_eff_color",
    "format":"colorpickerRGBA",
    "default" : [255,0,0,0.5],
    "minItems": 4,
    "maxItems": 4
  }
```
Die Option `color` ist vom Typ Array (dargestellt als RGBA Farbauswähler) mit dem Titel `edt_eff_color` ([Titel werden übersetzt](#ubersetzung)). Dieser Farbauswähler wird auf Rot mit 50% Alpha initial gesetzt. Erforderlich, um eine Standardfarbe hinzuzufügen.
## Mehr Verschönerung
Um die Benutzeroberfläche besser zu organisieren und zu verschönern, stellen wir eine Reihe von zusätzlichen Schlüsselwörtern zur Verfügung.

### Abhängigkeiten
Ausblenden/Einblenden einer bestimmten Option basierend auf dem Wert einer anderen Option
``` json{12}
  "enable-second": {
    "type": "boolean",
    "title":"edt_eff_enableSecondSwirl",
    "default": false,
    "propertyOrder" : 1
  },
  "random-center2": {
    "type": "boolean",
    "title":"edt_eff_randomCenter",
    "default": false,
    "options": {
      "dependencies": {
        "enable-second": true
      }
    }
  }
```
Die Option `random-center2` wird NICHT angezeigt, bis die Option `enable-second` auf true gesetzt ist. Dies funktioniert auch mit Zahlen, Integern und Strings.

### Reihenfolge
Da jede Option ein Objekt ist und die Sortierreihenfolge bei Objekten zufällig ist, musst du selbst eine Reihenfolge festlegen. Füge einen Schlüssel `propertyOrder` hinzu.
``` json{5,11}
  "enable-second": {
    "type": "boolean",
    "title":"edt_eff_enableSecondSwirl",
    "default": false,
    "propertyOrder" : 1
  },
  "random-center2": {
    "type": "boolean",
    "title":"edt_eff_randomCenter",
    "default": false,
    "propertyOrder" : 2
  }
```
Die Option `enable-second` steht an erster, `random-center2` an zweiter Stelle.

### Feld-Anhänge
Du willst eine bestimmte Einheit am Ende eines Feldes wie "s", "ms" oder "Prozent"? Füge einfach ein `append` mit der gewünschten Einheit hinzu.
``` json{5}
  "interval": {
    "type": "integer",
    "title":"edt_eff_interval",
    "default": 5,
    "append" : "edt_append_s",
    "propertyOrder" : 1
  }
```
Dadurch wird ein "s" für Sekunden in das Eingabefeld eingefügt. Bitte beachte, dass es auch übersetzt wird, überprüfe also die Übersetzungsdatei, ob die Einheit bereits vorhanden ist. Füge bei Bedarf eine neue hinzu.

### Glättungssteuerung (nur für Effekte)
Da v2-Effekte nicht mehr geglättet werden, ist es möglich, die Glättung bei Bedarf zu aktivieren und zu manipulieren. Füge dem Schema Folgendes hinzu.
``` json
"smoothing-custom-settings":{  
  "type":"boolean",
  "title":"edt_eff_smooth_custom",
  "default":false,
  "propertyOrder":1
},
"smoothing-time_ms":{  
  "type":"integer",
  "title":"edt_eff_smooth_time_ms",
  "minimum":25,
  "maximum":600,
  "default":200,
  "append":"edt_append_ms",
  "options":{  
    "dependencies":{  
      "smoothing-custom-settings":true
    }
  },
  "propertyOrder":2
},
"smoothing-updateFrequency":{  
  "type":"number",
  "title":"edt_eff_smooth_updateFrequency",
  "minimum":1.0,
  "maximum":100.0,
  "default":25.0,
  "append":"edt_append_hz",
  "options":{  
    "dependencies":{  
      "smoothing-custom-settings":true
    }
  },
  "propertyOrder":3
}
```

### Übersetzung
**nur für Effekte - Plugins ** \
Um die Effekteinstellungen in eine Sprache zu übersetzen, verwenden wir Platzhalter, die während der Laufzeit in die Zielsprache übersetzt werden.
Normalerweise sieht das so aus `edt_eff_smooth` Verfügbare Phrasen beginnen mit `edt_eff_` sie werden für alle Effekte gemeinsam verwendet, um Duplikate zu vermeiden. Bitte suche in der [Übersetzungsdatei](https://github.com/hyperion-project/hyperion.ng/blob/master/assets/webconfig/i18n/en.json) nach einer passenden Übersetzung. Wenn du keine passende Phrase findest, füge sie bitte hinzu.
