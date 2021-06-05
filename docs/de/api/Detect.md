# Hyperion entdecken
Hyperion meldet seine Dienste im Netzwerk, über ZeroConf und SSDP.

[[toc]]

## SSDP
**S**imple**S**ervice**D**iscovery**P**rotocol
([SSDP](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol)) SSDP ist die Discovery-Untergruppe von UPnP. Die Implementierung ist leichter als ZeroConf, da sie nur einen
UDP-Socket ohne weitere Abhängigkeiten benötigt.


### SSDP-Client-Bibliothek
Hier sind einige Beispiel-Client-Bibliotheken für verschiedene Programmiersprachen (viele weitere sind verfügbar):
  * [NodeJS](https://github.com/diversario/node-ssdp#usage---client)
  * [Java](https://github.com/resourcepool/ssdp-client#jarpic-client)

### Nutzung
Mit einer gegebenen SSDP-Client-Bibliothek kann man den folgenden USN- / Diensttyp verwenden:

`urn:hyperion-project.org:device:basic:1`

Einige Header der Antwort enthalten:
  * **Location**: Die URL des Webservers
  * **USN**: Die eindeutige ID für diese Hyperion-Instanz, sie bleibt auch nach Systemneustarts oder Hyperion-Updates erhalten
  * **HYPERION-FBS-PORT**: Der Port des Flatbufferservers
  * **HYPERION-JSS-PORT**: Der Port des JsonServers
  * **HYPERION-NAME**: Der benutzerdefinierte Name für diesen Server

Wenn sich die Werte ändern (z. B. Änderung der IP-Adresse des Netzwerkadapters), werden neue Updates automatisch mitgeteilt.

## Zeroconf
Auch bekannt als [Apple Bonjour](https://en.wikipedia.org/wiki/Bonjour_(Software)) oder [Avahi](https://en.wikipedia.org/wiki/Avahi_(Software)). Hyperion ist über zeroconf auffindbar.

**Hyperion publishes the following informations:**
  * **_hyperiond-http._tcp**: Hyperion Webserver (HTTP+Websocket)
  * **_hyperiond-json._tcp**: Hyperion JSON Server (TcpSocket)
  * **_hyperiond-flatbuf._tcp**: Hyperion Flatbuffers Server (Google Flatbuffers)

Man erhält die IP-Adresse, den Hostnamen, den Port und den Namen der Hyperion-Instanz (vor dem @ für den vollständigen Namen). Da dies in Echtzeit funktioniert, kann man immer eine aktuelle Liste der verfügbaren Hyperion-Server erhalten.

### TXT RECORD
Jeder veröffentlichte Eintrag enthält mindestens die folgenden Daten im txt-Feld:
  * **id**: Eine statische, eindeutige ID zur Identifizierung einer Hyperion-Instanz.
  * **version**: Hyperion Version.


### Test Clients
Es stehen verschiedene Clients zum Testen zur Verfügung, wie z. B. der
[avahi-browse](http://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html) ein Kommandozeilen-Tool für Ubuntu/Debian. Beispiel-Befehl 
``` bash
sudo apt-get install avahi-browse && avahi-browse -r _hyperiond-http._tcp
```
<ImageWrap src="/images/en/avahi-browse.jpg" alt="Searching for Hyperion Server with Avahi cli" />