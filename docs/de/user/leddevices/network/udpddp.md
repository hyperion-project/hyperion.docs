# UDP DDP

Das Gerät überträgt RGB-Werte mithilfe des Distributed Display Protocol ([DDP](http://www.3waylabs.com/ddp/#Data%20Types)), das auf dem UDP-Netzwerkprotokoll aufbaut.

**Das Gerät ist nicht in der Lage zu erkennen, ob das entfernte Gerät nicht verfügbar oder ausgefallen ist.**

::: warning Hinweis:
Das Distributed Display Protocol gibt pro 480 LEDs ein weiteres UDP-Paket aus.
:::

### Spezifische Einstellungen

##### Rechnername/IP-Adresse

Der Hostname (DNS/mDNS) oder die IP-Adresse (IPv4 oder IPv6) des Geräts, zu dem gestreamt werden soll.

##### Port

UDP-Port, an den gestreamt werden soll.

#### Erweiterte Einstellungen

##### Sperrzeit

Die Sperrzeit ist die Zeitspanne, die ein Gerät benötigt, bis die nächste Aktualisierung verarbeitet werden kann. Während dieses Zeitrahmens werden alle Aktualisierungen ignoriert.

