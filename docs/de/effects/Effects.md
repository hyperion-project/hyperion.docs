# Effekt-Erstellung
Mit Hyperion steht Ihnen ein leistungsfähiges Framework für die Entwicklung eigener Effekte zur Verfügung. Es bietet die Möglichkeit, Effekte zusammen mit möglichen Optionen und einer optimierten Benutzeroberfläche zu erstellen.

## Effekt-Dateien 
Ein Effekt hat 3 verschiedene Dateien.
|         Datei         |               Sprache                 | Bemerkung                                                                                                                         |
| :-------------------- | :------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------------    |
| neweffect.py          | [Python](https://www.python.org)      |                                Das Herzstück des Effekts                                                                          |
| neweffect.json        | [JSON](https://www.json.org)           |           Enthält Optionen für die Python-Datei, die dafür sorgen, dass sie konfigurierbar ist.                                   |
| neweffect.schema.json | [JSON Schema](https://json-schema.org) | Erzeugt die Bedienoberfläche für die Optionen und wird zur Überprüfung von Benutzereingaben verwendet. [Read more](/de/api/Ui.md) |
