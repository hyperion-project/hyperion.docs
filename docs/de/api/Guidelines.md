# Leitfaden
Optimiere die Benutzerfreundlichkeit von Hyperion, indem du diese Hinweise befolgst.

## Prioritätsleitfaden
Bitte beachtet die folgenden Prioritätsleitfaden, um Verwirrung bei den Benutzern zu vermeiden und eine
die bestmögliche Benutzererfahrung zu gewährleisten:

Der Benutzer erwartet, dass ein Effekt oder eine Farbe eine höhere Priorität (einen niedrigeren Wert) haben sollte
als das Aufnehmen, da Farben/Effekte normalerweise abwechselnd ausgeführt werden.

|          Typ           | Priorität/Bereich | Empfohlen |                  Bemerkung                   |
| :---------------------: | :------------: | :---------: | :----------------------------------------: |
|    Boot Effekt/Farbe    |       0        |      -      |                  Blockiert                   |
|    Web Konfiguration    |       1        |      -      |                                            |
|   **Remote Steuerung**    |    **2-99**    |   **50**    |       Effekt/Farbe/Einzelbild einstellen        |
|   **Bildstreaming**   |  **100-199**   |   **150**   | Für Image-Streams (Flatbuffer/Protobuffer) |
|        Boblight         |      201       |      -      |                                            |
|       USB Aufnahme       |      240       |      -      |                                            |
|    Bildschirm Aufnahme     |      250       |      -      |                                            |
| Hintergrundeffekt/Farbe |      254       |      -      |                                            |
|        Reserviert         |      255       |      -      |                                            |