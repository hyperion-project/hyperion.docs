import{_ as s,c as e,o as i,a5 as a}from"./chunks/framework.Cba3l4cj.js";const g=JSON.parse('{"title":"HyperBian","description":"","frontmatter":{},"headers":[],"relativePath":"de/user/HyperBian.md","filePath":"de/user/HyperBian.md","lastUpdated":1712251357000}'),n={name:"de/user/HyperBian.md"},t=a(`<h1 id="hyperbian" tabindex="-1">HyperBian <a class="header-anchor" href="#hyperbian" aria-label="Permalink to &quot;HyperBian&quot;">​</a></h1><p>Ist ein einsatzbereites (Ready-to-use) Image für Deinen Raspberry Pi. Es basiert auf dem originalen Raspberry Pi Foundation Image &quot;Raspberry Pi OS Lite&quot;. Hyperion ist bereits vorinstalliert. Einfacher geht es nicht.</p><ol><li><a href="https://github.com/Hyperion-Project/HyperBian/releases" target="_blank" rel="noreferrer">Herunterladen</a></li><li>Image auf SD brennen</li><li>Raspberry Pi einschalten</li><li>Zum Konfigurieren mit Deinem Browser die Adresse <code>http://IpAdresseDeinesRPi:8090</code> aufrufen</li></ol><h2 id="anforderungen" tabindex="-1">Anforderungen <a class="header-anchor" href="#anforderungen" aria-label="Permalink to &quot;Anforderungen&quot;">​</a></h2><ul><li>SD-Karte mit mindestens 4 GB Größe</li><li>Raspberry Pi</li><li>Linux/Mac/Windows + SD Kartenleser/-schreiber</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><ol><li>Lade das fertige <a href="https://github.com/Hyperion-Project/HyperBian/releases" target="_blank" rel="noreferrer">HyperBian Image</a> herunter</li><li>Installiere den <a href="https://www.raspberrypi.com/documentation/computers/getting-started.html#raspberry-pi-imager" target="_blank" rel="noreferrer">Raspberry Pi Imager</a>, um das Image auf eine SD-Karte zu brennen.</li><li>Starte den Pi Imager</li><li>Wähle als Betriebssystem &quot;Custom OS&quot; und wähle das heruntergeladene HyperBian-XXXX-Paket aus</li><li>Wähle das Ziel, d.h. die SD-Karte</li><li>Klicken auf &quot;Next&quot; und wähle &quot;No&quot; für keine zusätzlichen Anpassungen</li><li>Das HyperBian-Image sollte nun auf die SD-Karte geschrieben werden</li><li>Stecke die SD-Karte in den Raspberry Pi und starte das System</li></ol><h3 id="wifi-zeitzone-ssh-zugang" tabindex="-1">WiFi, Zeitzone &amp; ssh-Zugang <a class="header-anchor" href="#wifi-zeitzone-ssh-zugang" aria-label="Permalink to &quot;WiFi, Zeitzone &amp; ssh-Zugang&quot;">​</a></h3><p>Falls der Raspberry Pi mit WLAN genutzt werden soll oder die Zeitzone bzw. andere OS-bezogene Konfigurationen aktualisiert werden sollen, kann das Pi Imager OS-Customization Menü verwendet werden. Im Installationsschritt 6. wähle &quot;Edit Settings&quot; und gib dann z.B. die WLAN SSID, das Passwort und das Land an. Sichere die die Einstellungen mit &quot;Save&quot; und fahre mit &quot;Yes&quot; fort, um den Imager-Prozess zu starten.</p><div class="tip custom-block"><p class="custom-block-title">Verwenden den Standardbenutzer (und das Passwort) von HyperBian, falls diese angegeben werden müssen.</p><ul><li>Benutzer: <code>hyperion</code></li><li>Kennwort: <code>ambientlight</code></li></ul><p>Es kann auch ein anderer Benutzernamen gewählt werden, allerdings muss dann der vorkonfigurierte Dienst von Hyperion später aktualisieren werden- Aktualisierung des Dienstes auf den <a href="/de/user/GettingStarted.html#andern-des-benutzer-des-dienstes-auf-den-aktuellen-benutzer">aktuellen Benutzer</a></p></div><p>Die Konfiguration wird während des ersten Starts durchgeführt.</p><details class="details custom-block"><summary>Alternative Methode</summary><p>Falls der PI Imager nicht verwende wird oder die Details nicht das OS-Customization Menü angegeben werden sollen, kann man die Einrichtung auch per Datei vornehmen.</p><p>Erstelle eine Datei namens <code>custom.toml</code>. Passe die Datei mit den gewünschten Einstellungen an. Kommentiere alle die Elemente aus, die nicht geändert werden sollen.</p><p>Speicher die Datei in der Boot Partion der SD-Karte.</p><p><strong>Beispiel - custom.toml</strong></p><div class="language-toml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">toml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Required:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">config_version = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">system</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hostname = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;HyperBian&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">user</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">name = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;hyperion&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The password can be encrypted or plain. To encrypt, we can use &quot;openssl passwd -5 raspberry&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ambientlight&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password_encrypted = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ssh</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># ssh_import_id = &quot;gh:user&quot; # import public keys from github</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">enabled = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password_authentication = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># We can also seed the ssh public keys configured for the default user:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># authorized_keys = [ &quot;ssh-rsa ... user@host&quot;, ... ]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wlan</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">ssid = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myWifi&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;myWifiPassword&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">password_encrypted = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">hidden = </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">false</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># The country is written to /etc/default/crda</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Reference: https://wireless.wiki.kernel.org/en/developers/Regulatory</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">country = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;DE&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">locale</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">keymap = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;de&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">timezone = </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Europe/Berlin&quot;</span></span></code></pre></div></details><h4 id="standard-ssh-login" tabindex="-1">Standard SSH LOGIN <a class="header-anchor" href="#standard-ssh-login" aria-label="Permalink to &quot;Standard SSH LOGIN&quot;">​</a></h4><ul><li>Benutzername: <code>hyperion</code></li><li>Passwort: <code>ambientlight</code></li></ul><div class="tip custom-block"><p class="custom-block-title">Tip</p><p>HyperBian wird mit einer englischen Tastatur-Konfiguration ausgeliefert. Dort sind die Zeichen &#39;y&#39; und &#39;z&#39; vertauscht. Für den Benutzernamen musst Du also zuerstmal <code>hzperion</code> tippen; danach kannst Du das Tataturlayout per <code>sudo raspi-config</code> ändern.</p></div>`,15),l=[t];function r(p,h,d,o,k,u){return i(),e("div",null,l)}const E=s(n,[["render",r]]);export{g as __pageData,E as default};
