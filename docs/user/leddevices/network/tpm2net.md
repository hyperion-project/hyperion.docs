# TPM2.NET

The device streams RGB values using the TPM2.NET protocol on top of the UDP network protocol.

**The device is not able to detect, if the remote device is not available or failed.**

## Configuration

### Specific Settings

#### Hostname/IP-address

Define the device's Hostname (DNS/mDNS) or IP-address (IPv4 or IPv6) you would like streaming to.

#### Port

UDP port streamed to.

#### Max packet

Maximum number of RGB values per UDP-Package.

### Advanced/Expert Settings

#### Latch time

Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.
