# UDP Raw

The device streams a set of RGB values using the UDP network protocol.

**The devices is not able to detect, if the remote device is not available or failed.**

::: warning Note:
The maximum number of LEDs supported is 490. The current UDP-raw protocol cannot handle the loss of fragmented packets.
Therefore the number of LEDs is limited to have only one package per update.
:::

## Configuration

### Specific Settings

#### Hostname/IP-address

Define the WLED device's Hostname (DNS/mDNS) or IP-address (IPv4 or IPv6) you would like streaming to.

#### Port

UDP port streamed to.

### Advanced/Expert Settings

#### Latch time

Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.

