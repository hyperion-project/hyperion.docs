# TPM2.NET

Das Gerät überträgt RGB-Werte mit Hilfe des TPM2.NET-Protokolls, das auf dem UDP-Netzwerkprotokoll aufbaut.

**Das Gerät ist nicht in der Lage zu erkennen, ob das entfernte Gerät nicht verfügbar oder ausgefallen ist.**

## Konfiguration

### Spezifische Einstellungen

#### Rechnername/IP-Adresse

Der Hostname (DNS/mDNS) oder die IP-Adresse (IPv4 oder IPv6) des Geräts, zu dem gestreamt werden soll.

#### Port

UDP-Port, an den gestreamt werden soll.

#### Paketgröße

Maximale Anzahl von RGB-Werten pro UDP-Paket.

### Erweiterte Einstellungen

#### Sperrzeit

Die Sperrzeit ist die Zeitspanne, die ein Gerät benötigt, bis die nächste Aktualisierung verarbeitet werden kann. Während dieses Zeitrahmens werden alle Aktualisierungen ignoriert.
