# UDP DDP

The device streams RGB values using the Distributed Display Protocol ([DDP](http://www.3waylabs.com/ddp/#Data%20Types)) on top of the UDP network protocol.

**The devices is not able to detect, if the remote device is not available or failed.**

::: warning Note:
The Distributed Display Protocol issues a subsequent UDP-package per 480 LEDs.
:::

### Specific Settings

##### Hostname/IP-address

Define the device's Hostname (DNS/mDNS) or IP-address (IPv4 or IPv6) you would like streaming to.

##### Port

UDP port streamed to.

#### Advanced/Expert Settings

##### Latch time

Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.

