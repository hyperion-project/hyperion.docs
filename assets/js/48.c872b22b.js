(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{358:function(e,t,s){"use strict";s.r(t);var n=s(12),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"fortgeschritten"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#fortgeschritten"}},[e._v("#")]),e._v(" Fortgeschritten")]),e._v(" "),t("p",[e._v("Spezifische Themen mit Details")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#led-layout"}},[e._v("LED Layout")]),t("ul",[t("li",[t("a",{attrs:{href:"#weitere-eigenschaften"}},[e._v("Weitere Eigenschaften")])]),t("li",[t("a",{attrs:{href:"#editieren-mit-der-webkonfiguration"}},[e._v("Editieren mit der Webkonfiguration")])])])]),t("li",[t("a",{attrs:{href:"#schwarzbalken-erkennung"}},[e._v("Schwarzbalken-Erkennung")])]),t("li",[t("a",{attrs:{href:"#gamma-kurve"}},[e._v("Gamma Kurve")])]),t("li",[t("a",{attrs:{href:"#ereignisse-aktionen"}},[e._v("Ereignisse & Aktionen")]),t("ul",[t("li",[t("a",{attrs:{href:"#betriebssystem-ereignisse"}},[e._v("Betriebssystem-Ereignisse")])]),t("li",[t("a",{attrs:{href:"#zeitliche-ereignisse"}},[e._v("Zeitliche Ereignisse")])]),t("li",[t("a",{attrs:{href:"#cec-ereignisse"}},[e._v("CEC-Ereignisse")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"led-layout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#led-layout"}},[e._v("#")]),e._v(" LED Layout")]),e._v(" "),t("p",[e._v("Hyperion weist jeder einzelnen LED eine bestimmte Position im Bild zu. Diese Positionen sind Quadrate und um ein Quadrat zu erzeugen, benötigen Sie 4 Werte (obere Kante, untere Kante, linke Kante, rechte Kante). Diese Kanten spiegeln sich in "),t("code",[e._v("hmin")]),e._v(", "),t("code",[e._v("hmax")]),e._v(" für horizontal und "),t("code",[e._v("vmin")]),e._v(", "),t("code",[e._v("vmax")]),e._v(" für vertikal wider. Sie haben einen Wertebereich von "),t("code",[e._v("0.0")]),e._v(" bis "),t("code",[e._v("1.0")]),e._v(".")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_ledlayout.jpg",alt:"Hyperion Led Layout"}},[t("p",[e._v("Zuordnung der LED-Kanten")])]),e._v(" "),t("p",[e._v("Schauen wir uns das also genauer an. Nach einer einzelnen LED Definition:")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("Lass uns das obige Beispiel visualisieren!")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_ledlayout1.jpg",alt:"Hyperion LED Layout"}},[t("p",[e._v("Eine einzelnen LED Definition")])]),e._v(" "),t("p",[e._v("Fügen wir also 2 weitere LEDs hinzu, um es deutlicher zu machen "),t("br"),e._v(" "),t("strong",[e._v("Die Reihenfolge ist wichtig! Der erste Eintrag ist die erste LED, der zweite die zweite LED, ...")])]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("ImageWrap",{attrs:{src:"/images/en/user_ledlayout2.jpg",alt:"Hyperion LED Layout"}},[t("p",[e._v("Jetzt mit drei LEDs")])]),e._v(" "),t("h3",{attrs:{id:"weitere-eigenschaften"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#weitere-eigenschaften"}},[e._v("#")]),e._v(" Weitere Eigenschaften")]),e._v(" "),t("p",[e._v("Du kannst verschiedene LED-Streifenladungen mit unterschiedlichen RGB-Byte-Reihenfolgen verbinden. Du kannst die globale RGB-Byte-Reihenfolge überschreiben, indem du eine "),t("code",[e._v("colorOrder")]),e._v("-Eigenschaft zu allen LEDs hinzufügst, welche eine andere benötigen.")]),e._v(" "),t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"colorOrder"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v('"gbr"')]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.5")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.3")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1.0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"hmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmax"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[e._v('"vmin"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("0.7")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),t("p",[e._v("In diesem Beispiel wird die erste LED "),t("code",[e._v("gbr")]),e._v(" sein, die anderen LEDs werden der globalen RGB-Reihenfolge zugewiesen, die im Abschnitt LED-Hardware definiert wurde.")]),e._v(" "),t("h3",{attrs:{id:"editieren-mit-der-webkonfiguration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#editieren-mit-der-webkonfiguration"}},[e._v("#")]),e._v(" Editieren mit der Webkonfiguration")]),e._v(" "),t("p",[e._v("Während das Bearbeiten dieser Einstellungen in einem lokalen Texteditor etwas ungewohnt ist, kann man die Werte in der Web-Konfiguration bearbeiten!")]),e._v(" "),t("ul",[t("li",[e._v("Stelle sicher, dass die "),t("RouterLink",{attrs:{to:"/de/user/Konfiguration.html#Einstellungsstufen"}},[e._v("Hyperion-Einstellungsstufe")]),e._v(" auf "),t("strong",[e._v("Fortgeschritten")]),e._v(" gestellt ist.")],1),e._v(" "),t("li",[e._v("Navigiere zu Konfiguration -> LED-Hardware und wechsele auf die Registerkarte LED-Layout. Du wirst einen neuen Abschnitt "),t("strong",[e._v("Generierte/aktuelle LED-Konfiguration")]),e._v(" sehen.")])]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/de/user_ledlayout3.jpg",alt:"Hyperion LED Layout"}}),e._v(" "),t("p",[e._v("Du kannst die Werte frei bearbeiten, eine Vorschau auf der rechten Seite anzeigen, indem du auf "),t("strong",[e._v("Aktualisiere Vorschau")]),e._v(" klickst. Wenn du mit den Änderungen zufrieden bist, vergiss nicht zu speichern.")]),e._v(" "),t("h2",{attrs:{id:"schwarzbalken-erkennung"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#schwarzbalken-erkennung"}},[e._v("#")]),e._v(" Schwarzbalken-Erkennung")]),e._v(" "),t("p",[e._v("Der Unterschied zwischen den verfügbaren Modi für die Schwarzbalkenerkennung wird hier dargestellt.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Default:")]),e._v(" 3 Scan-Linien in jeder Richtung (X Y) - schnellste Erkennung")]),e._v(" "),t("li",[t("strong",[e._v("Classic:")]),e._v(" Die ursprünglichen Implementierungen - geringere CPU-Zeit (Legacy für RPi 1) scannen nur das obere Drittel des Bildes, was zu einer langsamen Erkennung und Problemen mit dem TV-Senderlogo führt.")]),e._v(" "),t("li",[t("strong",[e._v("OSD:")]),e._v(" Basierend auf dem Default-Modus - nicht sehr effektiv, verhindert aber Randumschaltungen, die durch OSD-Einblendungen (Programminfos und Lautstärkeleiste) verursacht werden können.")]),e._v(" "),t("li",[t("strong",[e._v("Letterbox:")]),e._v(" Basierend auf dem Default-Modus - berücksichtigt nur Schwarzbalken am oberen und unteren Rand des Bildes, ignoriert die Seiten.")])]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_bbmodes.jpg",alt:"Hyperion Blackbar detection modes"}}),e._v(" "),t("h2",{attrs:{id:"gamma-kurve"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#gamma-kurve"}},[e._v("#")]),e._v(" Gamma Kurve")]),e._v(" "),t("p",[e._v("Gammawerte in einer Grafik. Wie du siehst, ist 1,0 neutral. Niedriger als 1,0 erhöht die Farbe, höher reduziert die Farbe.")]),e._v(" "),t("ImageWrap",{attrs:{src:"/images/en/user_gammacurve.png",alt:"Hyperion Gamma Curve"}}),e._v(" "),t("h2",{attrs:{id:"ereignisse-aktionen"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ereignisse-aktionen"}},[e._v("#")]),e._v(" Ereignisse & Aktionen")]),e._v(" "),t("p",[e._v("Mit den Ereignisdiensten von Hperion können Betriebssystem-, zeitbasierte und/oder CEC-Ereignisse mit ausgeführten Aktionen verknüpft werden.")]),e._v(" "),t("h3",{attrs:{id:"betriebssystem-ereignisse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#betriebssystem-ereignisse"}},[e._v("#")]),e._v(" Betriebssystem-Ereignisse")]),e._v(" "),t("p",[e._v("Einstellungen zu verschiedenen Betriebssystem-Ereignissen, die Hyperion verarbeiten kann.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Reagiere auf Ruhezusstand")]),e._v(": Reagiere auf Ereignisse, die das Betriebssystem aussetzen/fortsetzen")]),e._v(" "),t("li",[t("strong",[e._v("Reagiere auf Bildschirmsperre")]),e._v(": Reagiere auf Ereignisse beim Sperren/Entsperren des Bildschirms")]),e._v(" "),t("li",[t("strong",[e._v("Leerlauf, bei Bildschirmsperre")]),e._v(": Wechsel in den Ruhezustand, wenn der Bildschirm gesperrt ist; andernfalls in den Leerlaufmodus wechseln")])]),e._v(" "),t("h3",{attrs:{id:"zeitliche-ereignisse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#zeitliche-ereignisse"}},[e._v("#")]),e._v(" Zeitliche Ereignisse")]),e._v(" "),t("p",[e._v("Einstellungen, die sich auf geplante, d.h. zeitbasierte Ereignisse beziehen, die von Hyperion verarbeitet werden sollen.")]),e._v(" "),t("p",[e._v("Es können mehrere Ereignis-/Aktionspaare definiert werden, um festzulegen, welche Aktion zu einem bestimmten Zeitpunkt ausgeführt werden soll. Die Aktion wird täglich eingeplant.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("Zeitpunkt")]),e._v(": Zeitpunkt, zu dem eine Aktion ausgeführt werden soll")]),e._v(" "),t("li",[t("strong",[e._v("Aktion")]),e._v(": Auszuführende Aktion")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Beispiel Konfiguration")]),e._v(" "),t("p",[t("br"),e._v(" "),t("ImageWrap",{attrs:{src:"/images/de/user_events_scheduled.png",alt:"Geplante Ereignisse -Beispiel"}})],1)]),e._v(" "),t("h3",{attrs:{id:"cec-ereignisse"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cec-ereignisse"}},[e._v("#")]),e._v(" CEC-Ereignisse")]),e._v(" "),t("p",[e._v("Einstellungen für verschiedene CEC (Consumer Electronics Control) Protokollereignisse, die Hyperion verarbeiten kann.")]),e._v(" "),t("p",[e._v("Es können mehrere Ereignis-/Aktionspaare definiert werden, um zu konfigurieren, welche Aktion bei einem erkannten CEC-Ereignis ausgeführt werden soll.")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("CEC-Ereignis")]),e._v(": CEC-Ereignis, das die Aktion auslösen soll")]),e._v(" "),t("li",[t("strong",[e._v("Aktion")]),e._v(": Auszuführende Aktion")])]),e._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[e._v("Beispiel Konfiguration")]),e._v(" "),t("p",[t("br"),e._v(" "),t("ImageWrap",{attrs:{src:"/images/de/user_events_cec.png",alt:"CEC-Ereignisse - Beispiel"}})],1)])],1)}),[],!1,null,null,null);t.default=r.exports}}]);