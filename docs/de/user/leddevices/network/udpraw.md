# UDP Raw

Das Gerät überträgt eine Reihe von RGB-Werten über das UDP-Netzwerkprotokoll.

**Das Gerät ist nicht in der Lage zu erkennen, ob das entfernte Gerät nicht verfügbar oder ausgefallen ist.**

::: warning Hinweis:
Die maximale Anzahl der unterstützten LEDs beträgt 490. Das aktuelle UDP-Raw-Protokoll kann nicht mit dem Verlust von fragmentierten Paketen umgehen.
Daher ist die Anzahl der LEDs begrenzt, um nur ein Paket pro Aktualisierung zu haben.
:::

## Konfiguration

### Spezifische Einstellungen

#### Rechnername/IP-Adresse

Der Hostname (DNS/mDNS) oder die IP-Adresse (IPv4 oder IPv6) des Geräts, zu dem gestreamt werden soll.

#### Port

UDP-Port, an den gestreamt werden soll.

### Erweiterte Einstellungen

#### Sperrzeit

Die Sperrzeit ist die Zeitspanne, die ein Gerät benötigt, bis die nächste Aktualisierung verarbeitet werden kann. Während dieses Zeitrahmens werden alle Aktualisierungen ignoriert.

