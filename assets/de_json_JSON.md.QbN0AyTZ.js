import{_ as t,c as a,J as r,w as o,a5 as i,E as h,o as l,m as e,a as n}from"./chunks/framework.Cba3l4cj.js";const q=JSON.parse('{"title":"JSON-RPC Einführung","description":"","frontmatter":{},"headers":[],"relativePath":"de/json/JSON.md","filePath":"de/json/JSON.md","lastUpdated":1712251357000}'),d={name:"de/json/JSON.md"},p=i(`<h1 id="json-rpc-einfuhrung" tabindex="-1">JSON-RPC Einführung <a class="header-anchor" href="#json-rpc-einfuhrung" aria-label="Permalink to &quot;JSON-RPC Einführung&quot;">​</a></h1><p>Die JSON-RPC-Schnittstellen bieten viele Möglichkeiten zur Interaktion mit Hyperion. Man kann Informationen über den Server und die Instanzen abrufen und Aktionen ausführen (z. B. einen Prioritätseingang setzen).</p><h2 id="was-ist-json" tabindex="-1">Was ist JSON? <a class="header-anchor" href="#was-ist-json" aria-label="Permalink to &quot;Was ist JSON?&quot;">​</a></h2><p>JSON ist ein standardisiertes Nachrichtenformat (siehe <a href="https://www.json.org/" target="_blank" rel="noreferrer">JSON.org</a>) und wird von den meisten Programmiersprachen unterstützt. Es ist für Menschen lesbar, was die Fehlersuche erleichtert.</p><h3 id="senden-von-json" tabindex="-1">Senden von JSON <a class="header-anchor" href="#senden-von-json" aria-label="Permalink to &quot;Senden von JSON&quot;">​</a></h3><p>Hyperion benötigt eine speziell formatierte JSON-Nachricht. Ein Argument <code>command</code> ist immer erforderlich. Ein Argument &quot;tan&quot; ist optional. Dies ist eine Ganzzahl, die man frei wählen kann - sie ist Teil der Antwort, die man erhält, um die Antwort von anderen Server-Nachrichten zu filtern (diese Funktionalität ist wahrscheinlich nur für fortgeschrittene Anwendungsfälle notwendig).</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Je nach Befehl kann ein zusätzlicher Subbefehl erforderlich sein:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;subcommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourSubCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="ruckantwort" tabindex="-1">Rückantwort <a class="header-anchor" href="#ruckantwort" aria-label="Permalink to &quot;Rückantwort&quot;">​</a></h3><p>Die meisten Nachrichten, die du sendest, lösen eine Antwort des folgenden Formats aus:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{ </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...DATA...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;instance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>command</strong>: Der angeforderte Befehl.</li><li><strong>tan</strong>: Die von dir angegebene tan (Wenn nicht, wird sie in der Antwort standardmäßig auf 0 gesetzt).</li><li><strong>instance</strong>: Instanz, welche das Update gesendet hat</li><li><strong>success</strong>: true oder false. Wenn es falsch ist, enthält ein <strong>Fehler</strong>-Argument Details zu dem Problem.</li><li><strong>info</strong>: Die von dir angeforderten Daten (falls vorhanden).</li></ul><h2 id="verbindung" tabindex="-1">Verbindung <a class="header-anchor" href="#verbindung" aria-label="Permalink to &quot;Verbindung&quot;">​</a></h2><p>Hyperion unterstützt derzeit mehrere Verbindungsmechanismen: TCP Socket (&quot;Json Server&quot;), WebSocket und HTTP/S.</p><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Du kannst Hyperion-Server automatisch erkennen! Siehe <a href="/de/api/Detect.html">Hyperion erkennen</a></p></div><h3 id="tcp-socket" tabindex="-1">TCP-Socket <a class="header-anchor" href="#tcp-socket" aria-label="Permalink to &quot;TCP-Socket&quot;">​</a></h3><p>Dies ist eine &quot;rohe&quot; Verbindung, du kannst zeilengetrenntes json vom Server senden und empfangen (Standardport: 19444). Dies wird auch als &quot;Json-Server&quot; bezeichnet.</p><h3 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h3><p>Dies ist Teil des Hyperion-Webservers (Standard-Port: 8090). Man sendet und empfängt json-Befehle. WSS wird auch auf Port 8092 unterstützt. Es wird nur der TEXT-Modus unterstützt. Lese mehr über Websockets unter <a href="https://de.wikipedia.org/wiki/WebSocket" target="_blank" rel="noreferrer">Websocket</a>.</p><h3 id="http-s-json" tabindex="-1">HTTP/S Json <a class="header-anchor" href="#http-s-json" aria-label="Permalink to &quot;HTTP/S Json&quot;">​</a></h3><p>HTTP-Anfragen können auch an den Webserver gesendet werden (Standardport: 8090, für HTTPS: 8092). Sende eine HTTP/S POST-Anfrage zusammen mit einer korrekt formatierten Json-Nachricht im Body an die (Beispiel-)URL: <code>http://Ip:WebserverPort/json-rpc</code></p>`,22),k=e("p",null,[n("Beispielbild mit "),e("a",{href:"https://addons.mozilla.org/de/firefox/addon/restclient/",target:"_blank",rel:"noreferrer"},"Firefox"),n("/"),e("a",{href:"https://chrome.google.com/webstore/detail/yet-another-rest-client/ehafadccdcdedbhcbddihehiodgcddpl",target:"_blank",rel:"noreferrer"},"Chrome"),n(" Addon zum Senden von HTTP-JSON-Nachrichten")],-1),u=i('<div class="tip custom-block"><p class="custom-block-title">Tip</p><p>Wenn du eine &quot;Keine Autorisierung&quot;-Antwort erhältst, musst du ein <a href="/de/json/Authentication.html#token-system">Autorisierungs-Token</a> erstellen</p></div><div class="warning custom-block"><p class="custom-block-title">HTTP/S-Einschränkungen</p><p>Bitte beachtet, dass dem HTTP-JSON-RPC aufgrund von technischen Einschränkungen folgende Funktionen fehlen.</p><ul><li>Bild-Streams, Led-Farb-Streams, Logging-Streams, Abonnements</li></ul></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="server-infos" tabindex="-1">Server-Infos <a class="header-anchor" href="#server-infos" aria-label="Permalink to &quot;Server-Infos&quot;">​</a></h3><p>Eine Vielzahl von Daten ist vom Server verfügbar: <a href="/de/json/ServerInfo.html">Server Info</a></p><h3 id="steuerung" tabindex="-1">Steuerung <a class="header-anchor" href="#steuerung" aria-label="Permalink to &quot;Steuerung&quot;">​</a></h3><p>Steuer deinen Hyperion Server: <a href="/de/json/Control.html">Steuerung</a></p><h3 id="authentifizierung" tabindex="-1">Authentifizierung <a class="header-anchor" href="#authentifizierung" aria-label="Permalink to &quot;Authentifizierung&quot;">​</a></h3><p>Authentifizierungsmechanismen: <a href="/de/json/Authentication.html">Authentifizierung</a></p><h3 id="abonnieren" tabindex="-1">Abonnieren <a class="header-anchor" href="#abonnieren" aria-label="Permalink to &quot;Abonnieren&quot;">​</a></h3><p>Daten-Abonnements: <a href="/de/json/Subscribe.html">Abonnieren</a></p><h2 id="drittanbieter-bibliotheken" tabindex="-1">Drittanbieter-Bibliotheken <a class="header-anchor" href="#drittanbieter-bibliotheken" aria-label="Permalink to &quot;Drittanbieter-Bibliotheken&quot;">​</a></h2><ul><li><a href="https://github.com/dermotduffy/hyperion-py" target="_blank" rel="noreferrer">Hyperion-py</a> ist ein Drittanbieter-Bibliotheken Python-Bibliothek für die Kommunikation mit Hyperion-NG. Sie verwendet die hier beschriebene API als zugrundeliegenden Kommunikationsmechanismus und stellt diesen in einer benutzerfreundlichen Weise dar. Als Drittanbieter-Bibliotheken wird sie nicht vom Hyperion-Entwicklungsteam unterstützt.</li></ul>',13);function c(g,m,b,E,f,S){const s=h("ImageWrap");return l(),a("div",null,[p,r(s,{src:"/images/de/http_jsonrpc.jpg",alt:"Hyperion mit HTTP JSON RPC steuern"},{default:o(()=>[k]),_:1}),u])}const v=t(d,[["render",c]]);export{q as __pageData,v as default};
