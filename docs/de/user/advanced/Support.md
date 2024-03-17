# Supportanfrage
Falls du Support brauchst oder einen Fehler gefunden hast, ist es wichtig, dass du die Informationen lieferst, die wir brauchen. 

## Gewöhnliche Anfrage
Um ein Protokoll bereitzustellen, geh bitte in der WebUI zu System -> Log und kopiere das Protokoll. Erstellt dann ein Paste bei [Pastebin.com](https://pastebin.com) mit dem kopierten Protokoll.
Sobald du den Pastebin-Link hast, öffne bitte ein Issue auf [Github](https://github.com/hyperion-project/hyperion.ng/issues/new/choose), fülle die Vorlage aus und gib den Pastebin-Link an.

## Segmentierungsfehler
Das Debuggen von Segmentierungsfehlern erfordert einen größeren Aufwand, wenn wir deine Hardware nicht besitzen (idr eines dieser vielen ARM-Systeme) oder den Segmentierungsfehler nicht rekonstruieren können, benötigen wir ein Backtrace-Protokoll von dir. Um ein solches zu erstellen, ist folgende Vorgehensweise erforderlich.
  - Du brauchst eine "Debug"-Version von Hyperion, lade sie herunter und installiere sie über deine bestehende Installation.
  - Installiere "GDB", gdb ist ein Tool, das oft zum Debuggen verwendet wird. Hole es aus dem Software-Repository deiner Distribution (Debian z.B. `sudo apt-get install gdb`)

### Ausführungsschritte
  * Öffne ein Terminal
  * Stelle sicher, dass Hyperion NICHT läuft. Gib dazu `sudo service hyperiond stop` in das Terminal ein und drücke die Eingabetaste
  * Gib `gdb` ein und drücke die Eingabetaste. Du siehst nun die gdb-Begrüßungsinformationen und ein "(gdb)" vor deinem Cursor
  * Teilt gdb mit, wo sich "hyperiond" befindet, normalerweise unter /usr/share/hyperion/bin/hyperiond. Stellt dem Pfad "file" voran. Gib also im Terminal folgendes ein und drücke Enter: `Datei /usr/share/hyperion/bin/hyperiond`
  * gdb sollte nun anzeigen, dass das Binary mit seinen Symbolen usw. geladen wurde
  * Gib nun `run` ein und drücke die Eingabetaste, dies wird Hyperion starten. Jetzt können wir Hyperion wie gewohnt verwenden, wir wiederholen die Schritte, die wir zum Erstellen eines Segmentierungsfehlers durchgeführt haben.
  * Ein Segmentation Fault ist aufgetreten, wenn Hyperion nicht mehr antwortet und du als letzte Meldung am Terminal etwas wie folgt siehst: `Thread 1 "hyperiond" received signal SIGSEGV, Segmentation fault.`
  * Gib nun `backtrace` ein und drücke die Eingabetaste, füge den Backtrace zu deinem Supportanfrage-Thread in unserem Forum hinzu. [Hyperion Project Forum](https://hyperion-project.org/forum)
  * Um gdb zu beenden, drücke die Eingabetaste und gibt `quit` ein. Du kannst Hyperion wieder mit `sudo service hyperiond start` starten. Es wird nicht empfohlen, "Debug"-Hyperion-Builds in der produktiven Umgebung zu verwenden, installiere einfach wieder die "Release"-Version.

### Beispiel Backtrace-Protokoll
``` gdb:no-line-numbers
  (gdb) backtrace
  #0  0x0000000000000000 in ?? ()
  #1  0x00000000006173f2 in LinearColorSmoothing::queueColors (this=0xfdfa70, 
      ledColors=std::vector of length 34, capacity 34 = {...})
      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:153
  #2  0x0000000000617374 in LinearColorSmoothing::updateLeds (this=0xfdfa70)
      at /home/hyperion/Dokumente/hyperion.ngBeta/libsrc/hyperion/LinearColorSmoothing.cpp:143
  #3  0x0000000000609652 in LinearColorSmoothing::qt_static_metacall (
      _o=0xfdfa70, _c=QMetaObject::InvokeMetaMethod, _id=1, _a=0x7fffffffd190)
      at /home/hyperion/Dokumente/hyperion.ngBeta/build/libsrc/hyperion/moc_LinearColorSmoothing.cpp:85
  #4  0x00007ffff59abd2a in QMetaObject::activate(QObject*, int, int, void**) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #5  0x00007ffff59b85c8 in QTimer::timerEvent(QTimerEvent*) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #6  0x00007ffff59acbb3 in QObject::event(QEvent*) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #7  0x00007ffff78a505c in QApplicationPrivate::notify_helper(QObject*, QEvent*)
     () from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5
  #8  0x00007ffff78aa516 in QApplication::notify(QObject*, QEvent*) ()
     from /usr/lib/x86_64-linux-gnu/libQt5Widgets.so.5
  #9  0x00007ffff597d38b in QCoreApplication::notifyInternal(QObject*, QEvent*)
  ---Type <return> to continue, or q <return> to quit---
      () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #10 0x00007ffff59d25ed in QTimerInfoList::activateTimers() ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #11 0x00007ffff59d2af1 in ?? () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #12 0x00007ffff4572127 in g_main_context_dispatch ()
     from /lib/x86_64-linux-gnu/libglib-2.0.so.0
  #13 0x00007ffff4572380 in ?? () from /lib/x86_64-linux-gnu/libglib-2.0.so.0
  #14 0x00007ffff457242c in g_main_context_iteration ()
     from /lib/x86_64-linux-gnu/libglib-2.0.so.0
  #15 0x00007ffff59d37cf in QEventDispatcherGlib::processEvents(QFlags<QEventLoop::ProcessEventsFlag>) () from /usr/lib/x86_64-linux-
  gnu/libQt5Core.so.5
  #16 0x00007ffff597ab4a in QEventLoop::exec(QFlags<QEventLoop::ProcessEventsFlag>) () from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #17 0x00007ffff5982bec in QCoreApplication::exec() ()
     from /usr/lib/x86_64-linux-gnu/libQt5Core.so.5
  #18 0x00000000005d9279 in main (argc=1, argv=0x7fffffffde08)
      at /home/hyperion/Dokumente/hyperion.ngBeta/src/hyperiond/main.cpp:337
```
