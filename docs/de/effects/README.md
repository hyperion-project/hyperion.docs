# Effekt-Erstellung
Hyperion bietet eine leistungsfähige API, um eigene Effekte zu erstellen, zusammen mit den möglichen Optionen und der Benutzeroberfläche, um diese anzupassen.

## Effekt-Dateien 
Ein Effekt hat 3 verschiedene Dateien.
|         Datei         |               Sprache                 | Bemerkung                                                                                                                         |
| :-------------------- | :------------------------------------ | :-----------------------------------------------------------------------------------------------------------------------------    |
| neweffect.py          | [Python](https://www.python.org)      |                                Das Herzstück des Effekts                                                                          |
| neweffect.json        | [JSON](http://www.json.org)           |           Enthält Optionen für die Python-Datei, die dafür sorgen, dass sie konfigurierbar ist.                                   |
| neweffect.schema.json | [JSON Schema](http://json-schema.org) | Erzeugt die Bedienoberfläche für die Optionen und wird zur Überprüfung von Benutzereingaben verwendet. [Read more](/de/api/Ui.md) |
