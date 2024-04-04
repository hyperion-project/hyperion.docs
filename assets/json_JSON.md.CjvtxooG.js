import{_ as t,c as n,J as o,w as r,a5 as e,E as l,o as h,m as s,a}from"./chunks/framework.Cba3l4cj.js";const C=JSON.parse('{"title":"JSON RPC Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"json/JSON.md","filePath":"json/JSON.md","lastUpdated":1712251357000}'),p={name:"json/JSON.md"},d=e(`<h1 id="json-rpc-introduction" tabindex="-1">JSON RPC Introduction <a class="header-anchor" href="#json-rpc-introduction" aria-label="Permalink to &quot;JSON RPC Introduction&quot;">​</a></h1><p>The JSON-RPC interfaces provides many ways to interact with Hyperion. You can retrieve information about your server, your instances and take actions (such as setting a priority input).</p><h2 id="what-is-json" tabindex="-1">What is JSON? <a class="header-anchor" href="#what-is-json" aria-label="Permalink to &quot;What is JSON?&quot;">​</a></h2><p>JSON is a standardized message format (see <a href="https://www.json.org/" target="_blank" rel="noreferrer">JSON.org</a>) and is supported by most programming languages. It is human readable which makes for easier debugging.</p><h3 id="sending-json" tabindex="-1">Sending JSON <a class="header-anchor" href="#sending-json" aria-label="Permalink to &quot;Sending JSON&quot;">​</a></h3><p>Hyperion requires a specially formatted JSON message. A <code>command</code> argument is always required. A <code>tan</code> argument is optional. This is an integer you can freely choose -- it is part of the response you will receive to allow you to filter the response from other server messages (this functionality is likely necessary for advanced usecases only).</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Depending on the command, there might be an additional subcommand required:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;subcommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourSubCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="response" tabindex="-1">Response <a class="header-anchor" href="#response" aria-label="Permalink to &quot;Response&quot;">​</a></h3><p>Most messages you send will trigger a response of the following format:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;command&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;YourCommand&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:{ </span><span style="--shiki-light:#B31D28;--shiki-dark:#FDAEB7;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">...DATA...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;instance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,  </span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;success&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;tan&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> : </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><ul><li><strong>command</strong>: The command you requested.</li><li><strong>tan</strong>: The tan you provided (If not, it will default to 0 in the response).</li><li><strong>instance</strong>: Instance# sent the update</li><li><strong>success</strong>: true or false. If false, an <strong>error</strong> argument will contain details of the issue.</li><li><strong>info</strong>: The data you requested (if any).</li></ul><h2 id="connect" tabindex="-1">Connect <a class="header-anchor" href="#connect" aria-label="Permalink to &quot;Connect&quot;">​</a></h2><p>Hyperion currently supports multiple connection mechanisms: TCP Socket (&quot;Json Server&quot;), WebSocket and HTTP/S.</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>You can automatically discover Hyperion servers! See <a href="/api/Detect.html">Detect Hyperion</a></p></div><h3 id="tcp-socket" tabindex="-1">TCP Socket <a class="header-anchor" href="#tcp-socket" aria-label="Permalink to &quot;TCP Socket&quot;">​</a></h3><p>This is a &quot;raw&quot; connection, you can send and receive line-separated json from the server (default port: 19444). This is also known as the &quot;Json Server&quot;.</p><h3 id="websocket" tabindex="-1">WebSocket <a class="header-anchor" href="#websocket" aria-label="Permalink to &quot;WebSocket&quot;">​</a></h3><p>This is part of the Hyperion webserver (default port: 8090). You send and receive json commands. WSS is also supported on port 8092. Only TEXT mode is supported. Read more about websockets at <a href="https://en.wikipedia.org/wiki/WebSocket" target="_blank" rel="noreferrer">Websocket</a>.</p><h3 id="http-s-json" tabindex="-1">HTTP/S Json <a class="header-anchor" href="#http-s-json" aria-label="Permalink to &quot;HTTP/S Json&quot;">​</a></h3><p>HTTP requests can also be sent to the webserver (default port: 8090, for HTTPS: 8092). Send a HTTP/S POST request along with a properly formatted json message in the body to the (example) url: <code>http://IpOfDevice:WebserverPort/json-rpc</code></p>`,22),c=s("p",null,[a("Example picture with a "),s("a",{href:"https://addons.mozilla.org/de/firefox/addon/restclient/",target:"_blank",rel:"noreferrer"},"Firefox"),a("/"),s("a",{href:"https://chrome.google.com/webstore/detail/yet-another-rest-client/ehafadccdcdedbhcbddihehiodgcddpl",target:"_blank",rel:"noreferrer"},"Chrome"),a(" Addon to send HTTP JSON messages")],-1),u=e('<div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you get a &quot;No Authorization&quot; response, you need to create an <a href="/json/Authentication.html#token-system">Authorization Token</a></p></div><div class="warning custom-block"><p class="custom-block-title">HTTP/S Restrictions</p><p>Please note that the HTTP JSON-RPC lacks of the following functions due to technical limitations.</p><ul><li>Image streams, led color streams, logging streams, subscriptions</li></ul></div><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="server-info" tabindex="-1">Server Info <a class="header-anchor" href="#server-info" aria-label="Permalink to &quot;Server Info&quot;">​</a></h3><p>A large variety of data is available from the server: <a href="/json/ServerInfo.html">Server Info</a></p><h3 id="control" tabindex="-1">Control <a class="header-anchor" href="#control" aria-label="Permalink to &quot;Control&quot;">​</a></h3><p>Control your Hyperion server: <a href="/json/Control.html">Control</a></p><h3 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-label="Permalink to &quot;Authentication&quot;">​</a></h3><p>Authentication mechanisms: <a href="/json/Authentication.html">Authentication</a></p><h3 id="subscribe" tabindex="-1">Subscribe <a class="header-anchor" href="#subscribe" aria-label="Permalink to &quot;Subscribe&quot;">​</a></h3><p>Data subscriptions: <a href="/json/Subscribe.html">Subscribe</a></p><h2 id="_3rd-party-libraries" tabindex="-1">3rd Party Libraries <a class="header-anchor" href="#_3rd-party-libraries" aria-label="Permalink to &quot;3rd Party Libraries&quot;">​</a></h2><ul><li><a href="https://github.com/dermotduffy/hyperion-py" target="_blank" rel="noreferrer">Hyperion-py</a> is a 3rd-party Python library for communication with Hyperion-NG. It uses the API described here as the underlying communication mechanism and presents it in a user-friendly way. As a 3rd party library, it is not supported by the Hyperion development team.</li></ul>',13);function k(g,m,y,E,b,f){const i=l("ImageWrap");return h(),n("div",null,[d,o(i,{src:"/images/en/http_jsonrpc.jpg",alt:"Control Hyperion with HTTP JSON RPC"},{default:r(()=>[c]),_:1}),u])}const S=t(p,[["render",k]]);export{C as __pageData,S as default};
