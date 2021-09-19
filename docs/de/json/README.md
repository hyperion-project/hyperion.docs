# JSON-RPC Einführung
Die JSON-RPC-Schnittstellen bieten viele Möglichkeiten zur Interaktion mit Hyperion.
Man kann Informationen über den Server und die Instanzen abrufen und Aktionen ausführen (z. B. einen Prioritätseingang setzen).

[[toc]]

## Was ist JSON?
JSON ist ein standardisiertes Nachrichtenformat (siehe [JSON.org (http://www.json.org/)])
und wird von den meisten Programmiersprachen unterstützt.
Es ist für Menschen lesbar, was die Fehlersuche erleichtert.

### Senden von JSON
Hyperion benötigt eine speziell formatierte JSON-Nachricht. Ein Argument `command` ist immer erforderlich. Ein Argument "tan" ist optional. Dies ist eine Ganzzahl, die man frei wählen kann - sie ist Teil der Antwort, die man erhält, um die Antwort von anderen Server-Nachrichten zu filtern (diese Funktionalität ist wahrscheinlich nur für fortgeschrittene Anwendungsfälle notwendig).

```json
{
  "command" : "YourCommand",
  "tan" : 1
}
```
Je nach Befehl kann ein zusätzlicher Subbefehl erforderlich sein:
```json
{
  "command" : "YourCommand",
  "subcommand" : "YourSubCommand",
  "tan" : 1
}
```
  
### Rückantwort
Die meisten Nachrichten, die du sendest, lösen eine Antwort des folgenden Formats aus:
```json
{
  "command" : "YourCommand",
  "info":{ ...DATA... },
  "success" : true,
  "tan" : 1
}
```
- **command**: Der angeforderte Befehl.
- **tan**: Die von dir angegebene tan (Wenn nicht, wird sie in der Antwort standardmäßig auf 0 gesetzt).
- **success**: true oder false. Wenn es falsch ist, enthält ein **Fehler**-Argument Details zu dem Problem.
- **info**: Die von dir angeforderten Daten (falls vorhanden).

## Verbindung
Hyperion unterstützt derzeit mehrere Verbindungsmechanismen: TCP Socket ("Json Server"), WebSocket und HTTP/S.
::: tip
Du kannst Hyperion-Server automatisch erkennen! Siehe [Hyperion erkennen](/de/api/detect.md)
:::

### TCP-Socket
Dies ist eine "rohe" Verbindung, du kannst zeilengetrenntes json vom Server senden und empfangen (Standardport: 19444). Dies wird auch als "Json-Server" bezeichnet.

### WebSocket
Dies ist Teil des Hyperion-Webservers (Standard-Port: 8090). Man sendet und empfängt json-Befehle. WSS wird auch auf Port 8092 unterstützt. Es wird nur der TEXT-Modus unterstützt. Lese mehr über Websockets unter [Websocket](https://en.wikipedia.org/wiki/WebSocket|).

### HTTP/S Json
HTTP-Anfragen können auch an den Webserver gesendet werden (Standardport: 8090, für HTTPS: 8092). Sende eine HTTP/S POST-Anfrage zusammen mit einer korrekt formatierten Json-Nachricht im Body an die (Beispiel-)URL: `http://Ip:WebserverPort/json-rpc`
 
<ImageWrap src="/images/de/http_jsonrpc.jpg" alt="Hyperion mit HTTP JSON RPC steuern">
Beispielbild mit [Firefox](https://addons.mozilla.org/de/firefox/addon/restclient/)/[Chrome](https://chrome.google.com/webstore/detail/yet-another-rest-client/ehafadccdcdedbhcbddihehiodgcddpl) Addon zum Senden von HTTP-JSON-Nachrichten

</ImageWrap>

::: tip
Wenn du eine "Keine Autorisierung"-Antwort erhältst, musst du ein [Autorisierungs-Token](/de/json/Authorization.md#token-system) erstellen
:::

::: warning HTTP/S-Einschränkungen
Bitte beachtet, dass dem HTTP-JSON-RPC aufgrund von technischen Einschränkungen folgende Funktionen fehlen.
- Bild-Streams, Led-Farb-Streams, Logging-Streams, Abonnements
:::

## API

### Server-Infos
Eine Vielzahl von Daten ist vom Server verfügbar: [Server Info](/de/json/ServerInfo.md)
### Steuerung
Steuer deinen Hyperion Server: [Steuerung](/de/json/Control.md)
### Autorisierung
Autorisierungsmechanismen: [Autorisierung](/de/json/Authorization.md)
### Abonnieren
Daten-Abonnements: [Abonnieren](/de/json/Subscribe.md)

## Drittanbieter-Bibliotheken

* [Hyperion-py](https://github.com/dermotduffy/hyperion-py) ist ein Drittanbieter-Bibliotheken Python-Bibliothek für die Kommunikation mit Hyperion-NG. Sie verwendet die hier beschriebene API als zugrundeliegenden Kommunikationsmechanismus und stellt diesen in einer benutzerfreundlichen Weise dar. Als Drittanbieter-Bibliotheken wird sie nicht vom Hyperion-Entwicklungsteam unterstützt.