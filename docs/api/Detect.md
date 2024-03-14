# Detect Hyperion
Hyperion announces its services on the network, via mDNS and SSDP.

[[toc]]

## SSDP
**S**imple**S**ervice**D**iscovery**P**rotocol
([SSDP](https://en.wikipedia.org/wiki/Simple_Service_Discovery_Protocol)) is the
discovery subset of UPnP. The implementation is lighter than mDNS as it just needs a
UDP Socket without any further dependencies.


### SSDP-Client Library
Here are some example client libraries for different programming languages (many others available):
  * [NodeJS](https://github.com/diversario/node-ssdp#usage---client)
  * [Java](https://github.com/resourcepool/ssdp-client#jarpic-client)

### Usage
With a given SSDP-client library, you can use the following USN / service type:

`urn:hyperion-project.org:device:basic:1`

Some headers from the response will include:
  * **Location**: The URL of the webserver
  * **USN**: The unique id for this Hyperion instance, it will remain the same after system restarts or Hyperion updates
  * **HYPERION-FBS-PORT**: The port of the FlatBuffer server
  * **HYPERION-JSS-PORT**: The port of the JSON-API server
  * **HYPERION-NAME**: The user defined name for this server

As the data changes (e.g. network adapter IP address change), new updates will be automatically announced.

## Multicast DNS (mDNS)
Hyperion services are detectable through mDNS.

mDNS is also known as [Zeroconf](https://de.wikipedia.org/wiki/Zeroconf), [Apple Bonjour](https://en.wikipedia.org/wiki/Bonjour_(software)) or [Avahi](https://en.wikipedia.org/wiki/Avahi_(software)).


**Hyperion publishes the following services:**
  * **_http._tcp**: Hyperion Webserver (HTTP + Websocket)
  * **_https._tcp**: Hyperion Webserver (HTTPS + Websocket Secure)
  * **_hyperiond-json._tcp**: Hyperion JSON-API Server (TcpSocket)
  * **_hyperiond-flatbuf._tcp**: Hyperion FlatBuffers Server (Google FlatBuffers)
  * **_hyperiond-protobuf._tcp**: Hyperion Protocol Buffers Server (Google Protocol Buffers)

You get the mDNS service name, IP address and service port. 
As this works realtime, i.e. you can always have an up to date list of available Hyperion servers.

**Service - TXT RECORD**

Each published entry contains at least the following data in the txt field:
  * **id**: A static, unique id to identify a Hyperion instance.
  * **version**: Hyperion's version.


### Test Clients
There are several clients available for testing like the
[avahi-browse](https://manpages.ubuntu.com/manpages/bionic/man1/avahi-browse.1.html) a
commandline tool for Ubuntu/Debian. Example command 
``` bash
sudo apt-get install avahi-untils && avahi-browse -r _hyperiond-json._tcp
```
<ImageWrap src="/images/en/avahi-browse.jpg" alt="Searching for Hyperion JSON-API Server with Avahi cli" />
