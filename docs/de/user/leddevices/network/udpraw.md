# UDP Raw

::: warning Hinweis:
Es werden mit dem UDP Raw Protokoll maximal 490 LEDs unterstützt.

**Begründung vom WLED Entwickler Aircoookie:**
<em>"Unfortunately the 490 LED is a hard limit. The reason is that the maximum amount of data that can be transmitted via a UDP frame at once is 1472 bytes (and we need 3 bytes data per LED)."
</em>

**Details vom Hyperion Entwickler Lord-Grey:**
<em>"The current UDP-raw protocol is not capable of handling loss of fragmented packages.
Therefore the number of LEDs is limited to have only one package per update."</em>
:::