# JSON RPC Introduction
The JSON-RPC interfaces provides many ways to interact with Hyperion. You can retrieve
information about your server, your instances and take actions (such as setting a
priority input).

## What is JSON?
JSON is a standardized message format (see [JSON.org](https://www.json.org/)) and is supported
by most programming languages. It is human readable which makes for easier debugging.

### Sending JSON
Hyperion requires a specially formatted JSON message. A `command` argument is always
required. A `tan` argument is optional. This is an integer you can freely choose -- it is
part of the response you will receive to allow you to filter the response from other server
messages (this functionality is likely necessary for advanced usecases only).

```json
{
  "command" : "YourCommand",
  "tan" : 1
}
```
Depending on the command, there might be an additional subcommand required:
```json
{
  "command" : "YourCommand",
  "subcommand" : "YourSubCommand",
  "tan" : 1
}
```
  
### Response
Most messages you send will trigger a response of the following format:
```json
{
  "command" : "YourCommand",
  "info":{ ...DATA... },
  "instance": 0,  
  "success" : true,
  "tan" : 1
}
```
- **command**: The command you requested.
- **tan**: The tan you provided (If not, it will default to 0 in the response).
- **instance**: Instance# sent the update
- **success**: true or false. If false, an **error** argument will contain details of the issue.
- **info**: The data you requested (if any).

## Connect
Hyperion currently supports multiple connection mechanisms: TCP Socket ("Json Server"), WebSocket and HTTP/S.
::: tip
You can automatically discover Hyperion servers! See [Detect Hyperion](/api/Detect.md)
:::

### TCP Socket
This is a "raw" connection, you can send and receive line-separated json from the server
(default port: 19444). This is also known as the "Json Server".

### WebSocket
This is part of the Hyperion webserver (default port: 8090). You send and receive json
commands. WSS is also supported on port 8092. Only TEXT mode is supported. Read more
about websockets at [Websocket](https://en.wikipedia.org/wiki/WebSocket).

### HTTP/S Json
HTTP requests can also be sent to the webserver (default port: 8090, for HTTPS: 8092). Send a HTTP/S POST request along with a properly formatted json message in the body to the (example) url: `http://IpOfDevice:WebserverPort/json-rpc`
 
<ImageWrap src="/images/en/http_jsonrpc.jpg" alt="Control Hyperion with HTTP JSON RPC">

Example picture with a [Firefox](https://addons.mozilla.org/de/firefox/addon/restclient/)/[Chrome](https://chrome.google.com/webstore/detail/yet-another-rest-client/ehafadccdcdedbhcbddihehiodgcddpl) Addon to send HTTP JSON messages

</ImageWrap>

::: tip
If you get a "No Authorization" response, you need to create an [Authorization Token](/json/Authentication.md#token-system)
:::

::: warning HTTP/S Restrictions
Please note that the HTTP JSON-RPC lacks of the following functions due to technical limitations.
- Image streams, led color streams, logging streams, subscriptions
:::

## API

### Server Info
A large variety of data is available from the server: [Server Info](/json/ServerInfo.md)
### Control
Control your Hyperion server: [Control](/json/Control.md)
### Authentication
Authentication mechanisms: [Authentication](/json/Authentication.md)
### Subscribe
Data subscriptions: [Subscribe](/json/Subscribe.md)

## 3rd Party Libraries

* [Hyperion-py](https://github.com/dermotduffy/hyperion-py) is a 3rd-party Python
  library for communication with Hyperion-NG. It uses the API described here as the
  underlying communication mechanism and presents it in a user-friendly way. As a 3rd
  party library, it is not supported by the Hyperion development team.
