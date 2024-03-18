# Testen 
## Pull Requests 

Falls Du eine in Entwicklung befindliche Version testen möchtest oder darum gebeten wurdest.

### Linux
Pull Requests (PRs) können in sich geschlossen getestet werden, ohne eine aktuelle Hyperion-Installation zu beeinträchtigen.

0. Erstelle einen GitHub-Benutzer, falls Du noch keine hast und fahre dann mit dem nächsten Schritt fort

1. Erstelle einen persönlichen Zugangs-Token für Deinen GitHub-Benutzer.
	
	Gehe zur [Fine-grained personal access tokens site](https://github.com/settings/tokens?type=beta) und führe ein "Generate new token" aus:
	
	a. Gib dem Token einen Namen
	
	b. Wähle "All Repositories".
	
	c. Definiere unter "Permissions/Repository permissions", den Read-Only Access für "Actions"
	
	d. Wähle "Generate token"
		
2. Kopiere das neu generierte Token in die Zwischenablage

3. Melde Dich auf Deinem Linux-System an, z.B. per ssh an HyperBian auf Deinem Raspberry Pi

4. Führe das install_pr Skript aus und ersetze dabei _Zugangstoken_ durch das in 2. kopierte Token und _PRID_ durch die PR-Nummer

	`wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t Zugangstoken PRID`

5. Starte das erzeugte Ausführungsskript, um Hyperion unter dem aktuellen Benutzer zu starten; ersetze _PRID_ durch die PR-Nummer

	`./hyperion_prPRID/PRID_.sh`

6. Teste den Inhalt des Pull Request und gibt Feedback zum PR.

7. Entfernen die installierte Version für den angegebenen PR

***Anmerkung***
Das Skript wird den aktuellen Hyperion-Dienst vor der Ausführung anhalten.
Nachdem Du Deine Tests ausgeführt hast, solltest Du den Dienst erneut starten oder einfach neu booten, um den Dienst automatisch zu starten.
Ersetze _USER_ durch den Benutzernamen, mit dem Hyperion läuft.

`systemctl start hyperion@USER.service`

::: tip Teste einen PR mit der aktuellen Konfiguration

Falls Du mit einer aktuellen Konfiguration testen möchtest, gibt den Speicherort der Konfiguration mit der Option `-c` an.
Die Konfiguration wird kopiert, um Nebenwirkungen auf Dein aktuelles Setup zu vermeiden,
d.h. alle Aktualisierungen der Konfiguration beim Testen des PR werden auch nicht in der aktuellen Konfiguration berücksichtigt.
:::

#### Beispiel

Aktueller Benutzer, Pull Request #1649 und Verwendung der aktuellen Konfiguration

`wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t Zugangstoken -c ~/.hyperion 1649`

### Windows, macOS

Lade ein Windows- oder macOS-Installationspaket herunter, das mit dem letzten PR-Build erstellt wurde.
Die Artefakte können unter dem Pull Request selbst gefunden werden.

## Nächtliche Builds

Die Hyperion Projekt [Repository Seite](https://releases.hyperion-project.org/) bietet Installationsanweisungen auf Knopfdruck.
Wähle einfach "Nightly Builds", um die entsprechenden Installationsanweisungen zu erhalten.

::: warning Bitte beachten
Du musst zuerst eine bestehende Installation deinstallieren.
:::
