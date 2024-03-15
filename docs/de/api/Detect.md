# Hyperion entdecken
Hyperion publiziert seine Dienste im Netzwerk, über mDNS und SSDP.

[[toc]]

## SSDP
**S**imple**S**ervice**D**iscovery**P**rotocol
([SSDP](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol)) SSDP ist die Discovery-Untergruppe von UPnP. Die Implementierung ist leichter als mDNS, da sie nur einen
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
  * **HYPERION-FBS-PORT**: Der Port des FlatBuffer Servers
  * **HYPERION-JSS-PORT**: Der Port des JSON-API Servers
  * **HYPERION-NAME**: Der benutzerdefinierte Name für diesen Server

Wenn sich die Werte ändern (z. B. Änderung der IP-Adresse des Netzwerkadapters), werden neue Updates automatisch mitgeteilt.

## Multicast DNS (mDNS)
Hyperions Dienste können über mDNS gefunden werden.

mDNS is auch bekannt als [Zeroconf](https://de.wikipedia.org/wiki/Zeroconf), [Apple Bonjour](https://en.wikipedia.org/wiki/Bonjour_(Software)) oder [Avahi](https://en.wikipedia.org/wiki/Avahi_(Software)).

**Hyperion publiziert folgende Dienste:**
  * **_http._tcp**: Hyperion Webserver (HTTP + Websocket)
  * **_https._tcp**: Hyperion Webserver (HTTPS + Websocket Secure)
  * **_hyperiond-json._tcp**: Hyperion JSON-API Server (TcpSocket)
  * **_hyperiond-flatbuf._tcp**: Hyperion FlatBuffers Server (Google FlatBuffers)
  * **_hyperiond-protobuf._tcp**: Hyperion Protocol Buffers Server (Google Protocol Buffers)

Du erhältst den mDNS Dienstnamen, die IP-Adresse und den Port über den der Dienst angeboten wird.

### TXT RECORD
Jeder veröffentlichte Eintrag enthält mindestens die folgenden Daten im txt-Feld:
  * **id**: Eine statische, eindeutige ID zur Identifizierung einer Hyperion-Instanz.
  * **version**: Hyperion Version.


### Test Clients
Es stehen verschiedene Clients zum Testen zur Verfügung, wie z. B. der
[avahi-browse](https://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html) ein Kommandozeilen-Tool für Ubuntu/Debian. Beispiel-Befehl 
``` bash
sudo apt-get install avahi-untils && avahi-browse -r _hyperiond-json._tcp
```
<ImageWrap src="/images/en/avahi-browse.jpg" alt="Searching for Hyperion JSON-API Server with Avahi cli" />
