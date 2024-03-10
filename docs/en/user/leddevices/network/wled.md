# WLED

[WLED](https://kno.wled.ge/) allows to address various LED types via WIFI, Ethernet or Serial connectivity leveraging ESP8266/ESP32 devices.
The device actively controls WLED (switch on/off), as well as allows to store/restore the devices state before streaming LED updates.

### Connectivity

WLED devices are discovered automatically by Hyperion.

In case no device was discovered, you can restart the discovery process by refreshing the browser's page (F5).

The device will store the respective mDNS service name, i.e. no static IP-adresses are required to be configured in your router.
Use WLED's WIFI setup to configure a service name (`mDNS address`) of your choice.

::: tip Custom hostname configuration
You can still configure a custom Hostname, an IPv4- or IPv6-address of your WLED device.
:::

::: details Streaming protocol
Per Hyperion 2.0.13, the Hyperion-WLED device makes use of the Distributed Display Protocol (Requires WLED v0.11.0+).

As a fall-back option the UDP-Raw protocol ([limitations](udpraw)) is still supported, too.
:::

### Specific Settings

#### Devices Discovered

Select your WLED LED-Device discovered or provide a custome configuration (see Hostname/IP-address).

#### Hostname/IP-address

Define the WLED device's Hostname (DNS/mDNS) or IP-address (IPv4) you would like streaming to.

#### WLED Segment streaming

By default Hyperion streams to all WLED LEDs independent from segment setup in WLED.
Hyperion allows streaming to one WLED segment, if segment streaming is activated (requires WLED 0.13.3+).\
To allow segment streaming, enable "Realtime - Use main segment only" in WLED's Sync Interfaces setup screen.

In Hyperion you can then select the individual segment to be streamed to.\
You can define, if Hyperion will switch off the other segments while streaming or not.

#### Restore lights' state

The state of the WLED device (including the current on/off state) is saved before streaming. 
When streaming stops, the output state is restored.

#### Stay on after streaming

Allow to keep WLED powered on after streaming and restoring state.

### Advanced/Expert Settings

#### Streaming protocol

- [UDP DDP](udpddp)
- [UDP RAW](udpraw)

#### Disable synchronisation

Disable [WLED's synchronisation](https://kno.wled.ge/interfaces/udp-notifier/) with other WLED devices before streaming starts.
Synchronisation is restored when streaming stops.

#### Overwrite brightness

Hyperion uses the brightness set in WLED, i.e. if the brightness in WLED is set to 10%, the LEDs will shine with maximum 10% brightness.
You can override the default brightness of WLED during streaming by defining the brightness.

#### Brightness

The brightness level used when "Overwrite brightness" is enabled.

