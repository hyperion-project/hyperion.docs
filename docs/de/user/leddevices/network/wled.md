# WLED

WLED verbindet sich mit Hyperion, indem du den "Steuerungstyp" WLED in der Hyperion-Benutzeroberfläche auswählst und den/die Hostname/IP-Adresse deiner WLED-Instanz eingibst.\
Hyperion übernimmt die in WLED eingestellte Helligkeit. Wird z.b. die Helligkeit in WLED auf 10% einstellt, leuchten die LEDs auf maximal 10%. Wenn du möchtest, dass Hyperion die Helligkeitseinstellung von WLED außer Kraft setzt und die maximale Helligkeit verwendet, kannst du dies tun, indem du in der WLED-Konfiguration -> Sync-Einstellungen die Option "Force max brightness" aktivierst.

::: warning Hinweis:
Es werden in der aktuelle WLED Version maximal 490 LEDs unterstützt. Ist die WLED Version kleiner oder gleich "0.8.0" werden maximal 341 LEDs unterstützt.\
Mehr Details im [WLED Wiki](https://github.com/Aircoookie/WLED/wiki/UDP-Realtime-Control#hyperion)

::: details Begründung vom WLED-Entwickler Aircoookie:
<em>"Unfortunately the 490 LED is a hard limit. The reason is that the maximum amount of data that can be transmitted via a UDP frame at once is 1472 bytes (and we need 3 bytes data per LED). You could try to increase UDP_IN_MAXSIZE in wled07_notify.ino, maybe the 8266 (or at least ESP32) can handle larger UDP packets by reassembling the frames."</em>
:::