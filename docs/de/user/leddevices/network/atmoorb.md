# AtmoOrb

Das Gerät sendet eine Reihe von RGB-Werten über UDP Multicast an ein oder mehrere AtmoOrb-Geräte (auch Orbs genannt).

**Das Gerät kann nicht erkannt werden, wenn das entfernte Gerät nicht verfügbar oder ausgefallen ist**.

## Konfiguration

### Spezifische Einstellungen

#### Orb-IDs
Kommagetrennte Liste aller Orbs, im Beispiel wird nur eine ID verwendet

#### Multicast Gruppe
Die Orb Multicast-Group IP-Adresse, sollte mit der des Orbs übereinstimmen.

### Erweiterte Einstellungen

#### Nutze Orb Glättung
Benutze den orbeigenen (externen) Glättungsalgorithmus, wenn true, deaktiviere die Hyperion-Glättung, um eine doppelte Glättung zu vermeiden, wenn diese einmal gesetzt ist.

#### Port
Standard-Multicast-Port, sollte mit dem Orb übereinstimmen

#### Sperrzeit
Die Sperrzeit ist die Zeitspanne, die ein Gerät benötigt, bis die nächste Aktualisierung verarbeitet werden kann. Während dieses Zeitrahmens werden alle Aktualisierungen ignoriert.

