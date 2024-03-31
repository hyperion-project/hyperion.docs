# Authentifizierung
Hyperion verfügt über ein Authentifizierungssystem, das es Benutzern erlaubt, sich per Passwort anzumelden, und
Anwendungen, sich mit Token zu authentifizieren. Der Benutzer kann konfigurieren, wie stark oder schwach die Hyperion-API
im Bereich `Konfiguration -> Netzwerkdienste` auf der Web-Benutzeroberfläche geschützt werden soll.

### Token-System
Token sind eine einfache Möglichkeit, eine App für den API-Zugriff zu authentifizieren. Sie können erstellt werden in
der Benutzeroberfläche im Bereich `Konfiguration -> Netzwerkdienste` erstellt werden (der Bereich wird angezeigt, 
wenn die Option `API Authentifizierung` aktiviert ist. Deine Anwendung kann auch [ein Token](#token-anfordern) über die API anfordern.

### Authentifizierungsprüfung

Aufrufer können prüfen, ob eine Authentifizierung für die Arbeit mit der API erforderlich ist, indem sie folgendes senden:
```json
{
    "command" : "authorize",
    "subcommand" : "tokenRequired"
}
```
Wenn die Eigenschaft `required` true ist, ist eine Authentifizierung erforderlich. Eine Beispiel-Antwort:
```json
{
    "command" : "authorize-tokenRequired",
    "info" : {
        "required" : true
        },
    "success" : true,
    "tan" :0
}
```

### Anmeldung mit Token
Melde dich mit einem Token wie folgt an -- der Aufrufer erhält eine [Login-Antwort](#login-antwort).
```json
{
    "command" : "authorize",
    "subcommand" : "login",
    "token" : "YourPrivateTokenHere"
}
```

### Anmeldung mit Token über HTTP/S
Füge den HTTP-Autorisierungs-Header zu jeder Anfrage hinzu. Im Fehlerfall erhält der Benutzer eine fehlgeschlagene [Login-Antwort].(#login-antwort).
```http
  Authorization : token YourPrivateTokenHere
```

#### Login-Antwort
Eine erfolgreiche Anmeldeantwort:
```json
{
    "command" : "authorize-login",
    "success" : true,
    "tan" : 0
}
```

Eine fehlgeschlagene Anmeldeantwort:
```json
{
    "command" : "authorize-login",
    "error" : "No Authorization",
    "success" : false,
    "tan" : 0
}
```

### Abmelden
Benutzer können sich auch abmelden. Hyperion prüft den Anmeldestatus nicht, dieser Aufruf wird immer
einen Erfolg zurück.

```json
{
    "command" : "authorize",
    "subcommand" : "logout"
}
```

Antwort:
```json
{
    "command" : "authorize-logout",
    "success" : true,
    "tan" : 0
}
```
::: warning Achtung
Durch das Abmelden werden alle Streaming-Datendienste und Abonnements beendet
:::

### Token anfordern

Hier ist der empfohlene Workflow für deine Anwendung zur Authentifizierung:
   * Beantrage bei Hyperion ein Token zusammen mit einer Beschreibung (eine kurze aussagekräftige Zeichenfolge, die
     den Aufrufer identifiziert, ist am sinnvollsten, z.B. mit einem Anwendungsnamen und
     Gerät) und eine kurze, zufällig erzeugte `id` (Zahlen/Buchstaben).
   * Warte auf die Antwort. Der Benutzer muss die Token-Anforderung über die Web-Benutzeroberfläche akzeptieren.
   * Bei Erfolg: Der Aufruf gibt ein UUID-Token zurück, das wiederholt verwendet werden kann. Beachte, dass der Zugriff vom Benutzer jederzeit widerrufen werden kann, aber die aktuelle Sitzung erhalten bleibt.
   * Bei Fehler: Der Aufruf erhält kein Token, was bedeutet, dass der Benutzer die Anfrage entweder abgelehnt hat oder die Zeit abgelaufen ist (180s).

Fordere ein Token mit dem folgenden Befehl an und achte darauf, dass du einen Kommentar hinzufügst, der aussagekräftig genug ist, damit der Web-UI-Benutzer entscheiden kann, ob er die Anfrage genehmigt oder ablehnt.
Das Feld `id` enthält 5 zufällige Zeichen, die vom Aufrufer erstellt werden und in der Web-Benutzeroberfläche erscheinen, wenn der Benutzer die Genehmigung erteilt.
```json
{
    "command" : "authorize",
    "subcommand" : "requestToken",
    "comment" : "OpenHab 2 Binding",
    "id" : "T3c91"
}
```

Nach dem Aufruf erscheint ein Popup in der Web-UI, um die Token-Anforderung zu akzeptieren/ablehnen.
Die aufrufende Anwendung sollte den Kommentar und die ID anzeigen, damit der Benutzer die Herkunft in der Hyperion-Benutzeroberfläche ordnungsgemäß bestätigen kann.
Nach 180 Sekunden ohne eine Benutzeraktion wird die Anfrage automatisch abgelehnt und der Aufrufer erhält eine Fehlerantwort (siehe unten).

#### Erfolgreiche Antwort
Wenn der Benutzer die Token-Anforderung akzeptiert hat, erhält der Aufrufer die folgende Antwort:
```json
{
    "command" : "authorize-requestToken",
    "success" : true,
    "info": {
      "comment" : "OpenHab2 Binding",
      "id" : "T3c91",
      "token" : "YourPrivateTokenHere"
    }
}
```
  * Speichere das Token irgendwo zur weiteren Verwendung. Das Token läuft nicht ab.
  * Beachtet werden muss, dass ein Benutzer das Token widerrufen kann. Es funktioniert weiterhin für aktuell verbundene Sitzungen.

#### Fehlgeschlagene Antwort
Eine Anfrage schlägt fehl, wenn entweder:
   * Zeitüberschreitung (d. h. der Benutzer hat die Anfrage 180 Sekunden lang weder genehmigt noch abgelehnt).
   * Der Benutzer lehnt die Anfrage ab.
```json
{
    "command" : "authorize-requestToken",
    "success" : false,
    "error" : "Token request timeout or denied"
}
```

#### Abbruch der Anforderung
Die Token-Anforderung kann abgebrochen werden, indem man der ursprünglichen Anforderung eine "accept"-Eigenschaft hinzufügt.
Die Anforderung wird gelöscht:
```json
{
    "command" : "authorize",
    "subcommand" : "requestToken",
    "comment" : "OpenHab 2 Binding",
    "id" : "T3c91",
    "accept" : false
}
```
