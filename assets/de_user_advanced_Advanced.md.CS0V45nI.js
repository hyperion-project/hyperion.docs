import{_ as l,c as h,J as e,w as t,m as s,a5 as a,a as n,E as r,o as k}from"./chunks/framework.Cba3l4cj.js";const V=JSON.parse('{"title":"Fortgeschritten","description":"","frontmatter":{"outline":[2,3]},"headers":[],"relativePath":"de/user/advanced/Advanced.md","filePath":"de/user/advanced/Advanced.md","lastUpdated":1712251357000}'),p={name:"de/user/advanced/Advanced.md"},d=a('<h1 id="fortgeschritten" tabindex="-1">Fortgeschritten <a class="header-anchor" href="#fortgeschritten" aria-label="Permalink to &quot;Fortgeschritten&quot;">​</a></h1><p>Spezifische Themen mit Details</p><h2 id="led-layout" tabindex="-1">LED Layout <a class="header-anchor" href="#led-layout" aria-label="Permalink to &quot;LED Layout&quot;">​</a></h2><p>Hyperion weist jeder einzelnen LED eine bestimmte Position im Bild zu. Diese Positionen sind Quadrate und um ein Quadrat zu erzeugen, benötigen Sie 4 Werte (obere Kante, untere Kante, linke Kante, rechte Kante). Diese Kanten spiegeln sich in <code>hmin</code>, <code>hmax</code> für horizontal und <code>vmin</code>, <code>vmax</code> für vertikal wider. Sie haben einen Wertebereich von <code>0.0</code> bis <code>1.0</code>.</p>',4),o=a(`<p>Schauen wir uns das also genauer an. Nach einer einzelnen LED Definition:</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>Lass uns das obige Beispiel visualisieren!</p>`,3),E=a(`<p>Fügen wir also 2 weitere LEDs hinzu, um es deutlicher zu machen <br><strong>Die Reihenfolge ist wichtig! Der erste Eintrag ist die erste LED, der zweite die zweite LED, ...</strong></p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,2),g=a(`<h3 id="weitere-eigenschaften" tabindex="-1">Weitere Eigenschaften <a class="header-anchor" href="#weitere-eigenschaften" aria-label="Permalink to &quot;Weitere Eigenschaften&quot;">​</a></h3><p>Du kannst verschiedene LED-Streifenladungen mit unterschiedlichen RGB-Byte-Reihenfolgen verbinden. Du kannst die globale RGB-Byte-Reihenfolge überschreiben, indem du eine <code>colorOrder</code>-Eigenschaft zu allen LEDs hinzufügst, welche eine andere benötigen.</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;colorOrder&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;gbr&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.3</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;hmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.7</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmax&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  &quot;vmin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0.7</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>In diesem Beispiel wird die erste LED <code>gbr</code> sein, die anderen LEDs werden der globalen RGB-Reihenfolge zugewiesen, die im Abschnitt LED-Hardware definiert wurde.</p><h3 id="editieren-mit-der-webkonfiguration" tabindex="-1">Editieren mit der Webkonfiguration <a class="header-anchor" href="#editieren-mit-der-webkonfiguration" aria-label="Permalink to &quot;Editieren mit der Webkonfiguration&quot;">​</a></h3><p>Während das Bearbeiten dieser Einstellungen in einem lokalen Texteditor etwas ungewohnt ist, kann man die Werte in der Web-Konfiguration bearbeiten!</p><ul><li>Stelle sicher, dass die <a href="/de/user/Configuration.html#Einstellungsstufen">Hyperion-Einstellungsstufe</a> auf <strong>Fortgeschritten</strong> gestellt ist.</li><li>Navigiere zu Konfiguration -&gt; LED-Hardware und wechsele auf die Registerkarte LED-Layout. Du wirst einen neuen Abschnitt <strong>Generierte/aktuelle LED-Konfiguration</strong> sehen.</li></ul>`,7),u=a('<p>Du kannst die Werte frei bearbeiten, eine Vorschau auf der rechten Seite anzeigen, indem du auf <strong>Aktualisiere Vorschau</strong> klickst. Wenn du mit den Änderungen zufrieden bist, vergiss nicht zu speichern.</p><h2 id="schwarzbalken-erkennung" tabindex="-1">Schwarzbalken-Erkennung <a class="header-anchor" href="#schwarzbalken-erkennung" aria-label="Permalink to &quot;Schwarzbalken-Erkennung&quot;">​</a></h2><p>Der Unterschied zwischen den verfügbaren Modi für die Schwarzbalkenerkennung wird hier dargestellt.</p><ul><li><strong>Default:</strong> 3 Scan-Linien in jeder Richtung (X Y) - schnellste Erkennung</li><li><strong>Classic:</strong> Die ursprünglichen Implementierungen - geringere CPU-Zeit (Legacy für RPi 1) scannen nur das obere Drittel des Bildes, was zu einer langsamen Erkennung und Problemen mit dem TV-Senderlogo führt.</li><li><strong>OSD:</strong> Basierend auf dem Default-Modus - nicht sehr effektiv, verhindert aber Randumschaltungen, die durch OSD-Einblendungen (Programminfos und Lautstärkeleiste) verursacht werden können.</li><li><strong>Letterbox:</strong> Basierend auf dem Default-Modus - berücksichtigt nur Schwarzbalken am oberen und unteren Rand des Bildes, ignoriert die Seiten.</li></ul>',4),c=s("h2",{id:"gamma-kurve",tabindex:"-1"},[n("Gamma Kurve "),s("a",{class:"header-anchor",href:"#gamma-kurve","aria-label":'Permalink to "Gamma Kurve"'},"​")],-1),y=s("p",null,"Gammawerte in einer Grafik. Wie du siehst, ist 1,0 neutral. Niedriger als 1,0 erhöht die Farbe, höher reduziert die Farbe.",-1),C=a('<h2 id="ereignisse-aktionen" tabindex="-1">Ereignisse &amp; Aktionen <a class="header-anchor" href="#ereignisse-aktionen" aria-label="Permalink to &quot;Ereignisse &amp; Aktionen&quot;">​</a></h2><p>Mit den Ereignisdiensten von Hperion können Betriebssystem-, zeitbasierte und/oder CEC-Ereignisse mit ausgeführten Aktionen verknüpft werden.</p><h3 id="betriebssystem-ereignisse" tabindex="-1">Betriebssystem-Ereignisse <a class="header-anchor" href="#betriebssystem-ereignisse" aria-label="Permalink to &quot;Betriebssystem-Ereignisse&quot;">​</a></h3><p>Einstellungen zu verschiedenen Betriebssystem-Ereignissen, die Hyperion verarbeiten kann.</p><ul><li><strong>Reagiere auf Ruhezusstand</strong>: Reagiere auf Ereignisse, die das Betriebssystem aussetzen/fortsetzen</li><li><strong>Reagiere auf Bildschirmsperre</strong>: Reagiere auf Ereignisse beim Sperren/Entsperren des Bildschirms</li><li><strong>Leerlauf, bei Bildschirmsperre</strong>: Wechsel in den Ruhezustand, wenn der Bildschirm gesperrt ist; andernfalls in den Leerlaufmodus wechseln</li></ul><h3 id="zeitliche-ereignisse" tabindex="-1">Zeitliche Ereignisse <a class="header-anchor" href="#zeitliche-ereignisse" aria-label="Permalink to &quot;Zeitliche Ereignisse&quot;">​</a></h3><p>Einstellungen, die sich auf geplante, d.h. zeitbasierte Ereignisse beziehen, die von Hyperion verarbeitet werden sollen.</p><p>Es können mehrere Ereignis-/Aktionspaare definiert werden, um festzulegen, welche Aktion zu einem bestimmten Zeitpunkt ausgeführt werden soll. Die Aktion wird täglich eingeplant.</p><ul><li><strong>Zeitpunkt</strong>: Zeitpunkt, zu dem eine Aktion ausgeführt werden soll</li><li><strong>Aktion</strong>: Auszuführende Aktion</li></ul>',9),m={class:"details custom-block"},_=s("summary",null,"Beispiel Konfiguration",-1),F=s("p",null,"\\",-1),b=s("h3",{id:"cec-ereignisse",tabindex:"-1"},[n("CEC-Ereignisse "),s("a",{class:"header-anchor",href:"#cec-ereignisse","aria-label":'Permalink to "CEC-Ereignisse"'},"​")],-1),f=s("p",null,"Einstellungen für verschiedene CEC (Consumer Electronics Control) Protokollereignisse, die Hyperion verarbeiten kann.",-1),B=s("p",null,"Es können mehrere Ereignis-/Aktionspaare definiert werden, um zu konfigurieren, welche Aktion bei einem erkannten CEC-Ereignis ausgeführt werden soll.",-1),q=s("ul",null,[s("li",null,[s("strong",null,"CEC-Ereignis"),n(": CEC-Ereignis, das die Aktion auslösen soll")]),s("li",null,[s("strong",null,"Aktion"),n(": Auszuführende Aktion")])],-1),v={class:"details custom-block"},w=s("summary",null,"Beispiel Konfiguration",-1),D=s("p",null,"\\",-1);function z(A,T,S,L,x,P){const i=r("ImageWrap");return k(),h("div",null,[d,e(i,{src:"/images/en/user_ledlayout.jpg",alt:"Hyperion Led Layout"},{default:t(()=>[n(" Zuordnung der LED-Kanten ")]),_:1}),o,e(i,{src:"/images/en/user_ledlayout1.jpg",alt:"Hyperion LED Layout"},{default:t(()=>[n(" Eine einzelnen LED Definition ")]),_:1}),E,e(i,{src:"/images/en/user_ledlayout2.jpg",alt:"Hyperion LED Layout"},{default:t(()=>[n(" Jetzt mit drei LEDs ")]),_:1}),g,e(i,{src:"/images/de/user_ledlayout3.jpg",alt:"Hyperion LED Layout"}),u,e(i,{src:"/images/en/user_bbmodes.jpg",alt:"Hyperion Blackbar detection modes"}),c,y,e(i,{src:"/images/en/user_gammacurve.png",alt:"Hyperion Gamma Curve"}),C,s("details",m,[_,F,e(i,{src:"/images/de/user_events_scheduled.png",alt:"Geplante Ereignisse -Beispiel"})]),b,f,B,q,s("details",v,[w,D,e(i,{src:"/images/de/user_events_cec.png",alt:"CEC-Ereignisse - Beispiel"})])])}const I=l(p,[["render",z]]);export{V as __pageData,I as default};
