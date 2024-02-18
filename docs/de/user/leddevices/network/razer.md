# Razer Chroma

[Razeor Chroma](https://www.razer.com/chroma) 


### Settings

Select one of the supported Razer Chroma device types:
* Keyboard
* Mouse
* Headset
* Mousepad
* Keypad
* Chromalink

### Connectivity

WLED devices are discovered automatically by Hyperion.

In case no device was discovered, you can restart the discovery process by refreshing the browser's page (F5).

The device will store the respective mDNS service name, i.e. no static IP-adresses are required to be configured in your router.
Use WLED's WIFI setup to configure a service name (`mDNS address`) of your choice.

::: tip Custom hostname configuration
  You can still configure a custom Hostname or IPv4- or IPv6-address of your WLED device.
  
:::

::: details Streaming protocol

Per Hyperion 2.0.13, the Hyperion-WLED device makes use of the Distributed Display Protocol (Requires WLED v0.11.0+).

As a fall-back option the UDP-Raw protocol ([limitations](udpraw)) is still supported, too.
:::

