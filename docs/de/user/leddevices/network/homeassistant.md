# Home Assistant

Eine Liste von [Home Assistant](https://www.home-assistant.io) Lichtern kann derzeit nur einem **einzigen** Layoutbereich zugewiesen werden.  
Um einen weiteren Aufnahmebereich zu steuern, ist eine zusätzliche Instanz erforderlich.

## Konfiguration

### In Home Assistant

0. Erstelle ein **Langlebiges Zugriffstoken** in Home Assistant.

::: tip
Langlebige Zugriffstoken können im Abschnitt **„Langlebige Zugriffstoken“** ganz unten auf der Profilseite eines Home Assistant-Benutzers erstellt werden.
:::

### In Hyperion

1. Wähle **Controller-Typ**: `homeassistant`  
2. Hyperion versucht automatisch, deinen Home Assistant-Server zu erkennen. Falls dies fehlschlägt, gib einen benutzerdefinierten Hostnamen oder eine IP-Adresse an.  
3. Füge das zuvor generierte Long-Lived Access Token in das Feld **Authorization Token** ein.  
4. Wähle deine Home Assistant Lampe(n) aus der Liste aus.  
5. Verwende die **Identify**-Funktion, um zu überprüfen, ob die gewählte Lampe reagiert.  
6. Lege die LED-Position im Layout mit dem Assistenten fest.  
7. Klicke auf **Speichern**.

::: tip
Es wird empfohlen, die *Latch-Zeit* festzulegen, um einen zeitlichen Abstand zwischen Aktualisierungen sicherzustellen.

Dieses Setup ist nicht für hohe Bildwiederholraten ausgelegt und sollte nur für zusätzliche oder Umgebungsbeleuchtung verwendet werden – nicht für deine Hauptbeleuchtung.
:::

