# Effekt-Engine-API
Alle verfügbaren Funktionen zur Verwendung.

## API Übersicht
| Function                          | Returns |   Comment  |
| ------------------------------- | ----- | -------- |
| hyperion.ledCount                 | Integer | Get the current led count from the led layout |
| hyperion.latchTime                | Integer | Get the current active latchtime in ms. |
| hyperion.imageWidth()             | Integer | Get the current image width, calculate positions for elements at the [coordinate system](http://doc.qt.io/qt-5/coordsys.html#rendering)  |
| hyperion.imageHeight()            | Integer | Get the current image height,calculate positions for elements at the [coordinate system](http://doc.qt.io/qt-5/coordsys.html#rendering) |
| hyperion.imageCRotate()           | -       | Rotates the coordinate system at the center (0,0) by the given angle. See [hyperion.imageCRotate()](#hyperion-imagecrotate) |
| hyperion.imageCOffset()           | -       | Add a offset to the coordinate system. See [hyperion.imageCOffset()](#hyperion-imagecoffset) |
| hyperion.imageCShear()            | -       | Shear the coordinate system. See [hyperion.imageCShear()](#hyperion-imagecshear) |
| hyperion.imageResetT()            | -       | Resets all coordination system modifications done with hyperion.imageCRotate(), hyperion.imageCOffset(), hyperion.imageCShear() |
| hyperion.imageMinSize()           | -       | See [hyperion.imageMinSize()](#hyperion-imageminsize)|
| hyperion.abort()                  | Boolean | If true, hyperion requests an effect abort, used in a while loop to repeat effect calculations and writing |
| hyperion.imageConicalGradient()   | -       | See [hyperion.imageConicalGradient()](#hyperion-imageconicalgradient) |
| hyperion.imageRadialGradient()    | -       | See [hyperion.imageRadialGradient()](#hyperion-imageradialgradient)|
| hyperion.imageLinearGradient()    | -       | See [hyperion.imageLinearGradient()](#hyperion-imagelineargradient)|
| hyperion.imageDrawLine()          | -       | See [hyperion.imageDrawLine()](#hyperion-imagedrawline) |
| hyperion.imageDrawPoint()         | -       | See [hyperion.imageDrawPoint()](#hyperion-imagedrawpoint) |
| hyperion.imageDrawPolygon()       | -       | See [hyperion.imageDrawPolygon()](#hyperion-imagedrawpolygon) |
| hyperion.imageDrawPie()           | -       | See [hyperion.imageDrawPie()](#hyperion-imagedrawpie) |
| hyperion.imageDrawRect()          | -       | See [hyperion.imageDrawRect()](#hyperion-imagedrawrect) |
| hyperion.imageSolidFill()         | -       | See [hyperion.imageSolidFill()](#hyperion-imagesolidfill) |
| hyperion.imageShow()              | -       | Hyperion shows the image you created with other `hyperion.image*` functions before. This is always the last step after you created the image with other hyperion.image* function |
| hyperion.imageSetPixel()          | -       | See [hyperion.imageSetPixel()](#hyperion-imagesetpixel) |
| hyperion.imageGetPixel()          | Tuple   | A [Python tuple](https://www.tutorialspoint.com/python/python_tuples.htm) RGB values for the requested position. See [hyperion.imageGetPixel()](#hyperion-imagegetpixel) |
| hyperion.imageSave()              | Integer | Create a snapshot of the current effect image and returns an ID. To display the snapshot do `hyperion.imageShow(ID)`. Snapshots are the _current_ state of the picture |
| hyperion.setColor()               | -       | Not recommended, read why! See [hyperion.setColor()](#hyperion-setcolor) |
| hyperion.setImage()               | -       | hyperion.setImage(width, height, RGB_bytearray) |


### hyperion.imageMinSize()
Da `hyperion.imageWidth()` und `hyperion.imageHeight()` mit dem LED-Layout skaliert, kann eine Mindestgröße definiert werden, um mehr Pixel zum Arbeiten zu erhalten. Bedenke, dass das Verhältnis zwischen Breite/Höhe immer von der Einstellung der Benutzer-LED abhängt, du kannst es nicht erzwingen.
::: warning
Sollte aufgerufen werden, bevor du mit dem zeichnen beginnst!
:::
`hyperion.imageMinSize(pixelX,pixelY)`
| Argument | Type       | Comment |
| ---------- | -------- | ---------------------------------------------------------------------------------- |
| pixelX   | Integer    | Minimum Pixels at the x-axis of the image to draw on with `hyperion.image*` functions |
| pixelY   | Integer    | Minimum Pixels at the y-axis of the image to draw on with `hyperion.image*` functions |

### hyperion.imageCRotate()
Dreht das Koordinatensystem im Mittepunkt, der auf der x-Achse 0 und auf der y-Achse 0 ist, um den angegebenen Winkel im Uhrzeigersinn. Hinweis: Wenn du den Mittelpunkt des Koordinatensystems verschieben willst, kannst du hyperion.imageCOffset() verwenden. **Die Drehung wird bis zum Ende des Effekts beibehalten**. \
`hyperion.imageCRotate(angle)`
| Argument | Type       | Comment |
| ---------- | -------- | ----------------------------------------------------- |
| angle   | Integer    | Angle of the rotation between `0` and `360`, clockwise |

### hyperion.imageCOffset()
Versatz zum Koordinatensystem an der x-Achse und y-Achse hinzufügen.
::: warning
Änderungen am Koordinatensystem führen zu ungewohntem Verhalten einiger kürzerer Versionen anderer hyperion.image* Zeichenfunktionen
:::
`hyperion.imageCOffset(offsetX, offsetY)`
| Argument | Type       | Comment |
| -------- | ---------- | ----------------------------------------------------- |
| offsetX  | Integer    | Offset which is added to the coordinate system at the x-axis. Positive value moves to the right, negative to the left |
| offsetY  | Integer    | Offset which is added to the coordinate system at the y-axis. Positive value moves to the right, negative to the left |

### hyperion.imageCShear()
Schneidet das Koordinatensystem in der Vertikalen und Horizontalen. Mehr Informationen zum Schneiden findet man hier: [Shear Mapping](https://en.wikipedia.org/wiki/Shear_mapping)
::: warning
Änderungen am Koordinatensystem führen zu ungewohntem Verhalten einiger kürzerer Versionen anderer hyperion.image* Zeichenfunktionen
:::
`hyperion.imageCShear(sh, sv)`
| Argument | Type       | Comment |
| -------- | ---------- | -------------------------- |
| sh       | Integer    | Horizontal pixels to shear |
| sv       | Integer    | Vertical pixels to shear. |

### hyperion.imageConicalGradient()
Zeichnet einen konischen Farbverlauf auf das Bild, alle Argumente sind erforderlich. Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. Kurze Erläuterung zu conical gradient in den QT Docs: [Conical Gradient](http://doc.qt.io/qt-5/qconicalgradient.html#details) \
`hyperion.imageConicalGradient(startX, startY, width, height, centerX, centerY, angle, bytearray)`
| Argument | Type       | Comment |
| -------- | ---------- | ----------------------------------------------------- |
| startX    | Integer    | Defines the start point at the x-axis of the rectangle that contains the gradient |
| startY    | Integer    | Defines the start point at the y-axis of the rectangle that contains the gradient |
| width     | Integer    | Defines the width of the rectangle |
| height    | Integer    | Defines the height of the rectangle |
| centerX   | Integer    | Defines the center of the gradient at the x-axis. For the center of the picture use `hyperion.imageWidth()*0.5`, don't forget to surround it with int() or round() |
| centerY   | Integer    | Defines the center of the gradient at the y-axis. For the center of the picture use `hyperion.imageHeight()*0.5`, don't forget to surround it with int() or round() |
| angle     | Integer  | Defines the angle from `0` to `360`. Used to rotate the gradient at the center point. |
| bytearray | ByteArray | bytearray of (position,red,green,blue,alpha,position,red,green,blue,alpha,...). Could be repeated as often you need it, all values have ranges from 0 to 255. The position is a point where the red green blue values are assigned. <br/> **Example:** `bytearray([0,255,0,0,255,255,0,255,0,255])` - this is a gradient which starts at 0 with color 255,0,0 and alpha 255 and ends at position 255 with color 0,255,0 and alpha 255. The colors in between are interpolation, so this example is a color shift from red to green from 0° to 360°. |

::: tip Kürzere Versionen von hyperion.imageConicalGradient()
`hyperion.imageConicalGradient(centerX, centerY, angle, bytearray)` -> startX und startY sind 0 und die Breite/Höhe ist max. -> Ganzes Bild
:::

### hyperion.imageRadialGradient()
Zeichnet einen radialen Farbverlauf auf das Bild. Füge die Parameter in der unten angegebenen Reihenfolge hinzu. Alle Argumente sind erforderlich.
Kurze Beschreibung bei QT Docs: [Radial Gradient](http://doc.qt.io/qt-5/qradialgradient.html#details) \
`hyperion.imageRadialGradient(startX, startY, width, height, centerX, centerY, radius, focalX, focalY, focalRadius, bytearray, spread)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| startX    | Integer    | start point at the x-axis of the rectangle which contains the gradient. |
| startY    | Integer    | start point at the y-axis of the rectangle which contains the gradient. |
| width     | Integer    | width of the rectangle. |
| height    | Integer    | height of the rectangle. |
| centerX   | Integer    | Defines the center at the x-axis of the gradient. For the center of the picture use `hyperion.imageWidth()*0.5`, don't forget to surround it with int() or round() |
| centerY   | Integer    | Defines the center at the y-axis of the gradient. For the center of the picture use `hyperion.imageHeight()*0.5`, don't forget to surround it with int() or round() |
| radius    | Integer    | Defines the radius of the gradient in pixels |
| focalX    | Integer    | Defines the focal point at the x-axis |
| focalY    | Integer    | Defines the focal point at the y-axis |
|focalRadius| Integer    | Defines the radius of the focal point |
| bytearray | ByteArray  | bytearray of (position,red,green,blue,position,red,green,blue,...). Could be repeated as often you need it, all values have ranges from 0 to 255. The position is a point where the red green blue values are assigned <br/> **Example:** `bytearray([0,255,0,0,255,0,255,0])` - this is a gradient which starts at 0 with color 255,0,0 and ends at position 255 with color 0,255,0. The colors in between are interpolation, so this example is a color shift from red to green. |
| spread    | Integer    | Defines the spread method outside the gradient. Available spread modes are: <br/> `0` -> The area is filled with the closest stop color <br/> `1` -> The gradient is reflected outside the gradient area <br/> `2` -> The gradient is repeated outside the gradient area <br/> Please note that outside means _inside_ the rectangle but outside of the gradient start and end points, so if these points are the same, you don't see the spread mode. A picture to the spread modes can you find here: [Spread modes](http://doc.qt.io/qt-5/qradialgradient.html#details) |

::: tip Kürzere Versionen von hyperion.imageRadialGradient()
 - `hyperion.imageRadialGradient(startX, startY, width, height, centerX, centerY, radius, bytearray, spread)` -> focalX, focalY, focalRadius erhalten ihre Werte aus centerX, centerY und radius
 - `hyperion.imageRadialGradient(centerX, centerY, radius, focalX, focalY, focalRadius, bytearray, spread)` -> startX und startY sind 0
 - `hyperion.imageRadialGradient(centerX, centerY, radius, bytearray, spread)` -> startX und startY sind 0 & focalX, focalY, focalRadius erhalten ihre Werte aus centerX, centerY und radius

:::

### hyperion.imageLinearGradient()
Zeichnet einen linearen Farbverlauf auf das Bild. Füge die Parameter in der unten angegebenen Reihenfolge hinzu. Alle Argumente sind erforderlich.
Kurze Beschreibung bei QT Docs: [Linear Gradient](http://doc.qt.io/qt-5/qlineargradient.html#details) \
`hyperion.imageLinearGradient(startRX, startRY, width, height, startX, startY, endX, endY, bytearray, spread)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| startRX   | Integer    | start point at the x-axis of the rectangle which contains the gradient. |
| startRY   | Integer    | start point at the y-axis of the rectangle which contains the gradient. |
| width     | Integer    | width of the rectangle. |
| height    | Integer    | height of the rectangle. |
| startX    | Integer    | Defines the start at the x-axis for the gradient. |
| startY    | Integer    | Defines the start at the y-axis for the gradient. |
| endX      | Integer    | Defines the end at the x-axis for the gradient. |
| endY      | Integer    | Defines the end at the y-axis for the gradient. |
| bytearray | ByteArray  | bytearray of (position,red,green,blue,alpha,position,red,green,blue,alpha,...). Could be repeated as often you need it, all values have ranges from 0 to 255. The position is a point where the red green blue values are assigned. <br/> **Example:** `bytearray([0,255,0,0,255,255,0,255,0,127])` this is a gradient which starts at 0 with color 255,0,0 and alpha 255 and ends at position 255 with color 0,255,0 and alpha 127. The colors in between are interpolation, so this example is a color shift from red to green. |
| spread    | Integer    | Defines the spread method outside the gradient. Available spread modes are: <br/> `0` -> The area is filled with the closest stop color <br/> `1` -> The gradient is reflected outside the gradient area <br/> `2` -> The gradient is repeated outside the gradient area <br/> Please note that outside means _inside_ the rectangle but outside of the gradient start and end points, so if these points are the same, you don't see the spread mode. A picture to the spread modes can you find here: [Spread modes](http://doc.qt.io/qt-5/qlineargradient.html#details) |

::: tip Kürzere Versionen von hyperion.imageLinearGradient()
`hyperion.imageLinearGradient(startX, startY, endX, endY, bytearray, spread)` -> Das Rechteck, das den Farbverlauf enthält, ist standardmäßig das gesamte Bild
:::

### hyperion.imageDrawLine()
Zeichnet eine Linie in das Bild. Alle Parameter sind erforderlich, außer a für Alpha. Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. \
`hyperion.imageDrawLine(startX, startY, endX, endY, thick, r, g, b, a)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| startX    | Integer    | start point at the x-axis. Relates to `hyperion.imageWidth()` |
| startY    | Integer    | start point at the y-axis. Relates to `hyperion.imageHeight()` |
| endX      | Integer    | end point at the x-axis. Relates to `hyperion.imageWidth()` |
| endY      | Integer    | end point at the y-axis. Relates to `hyperion.imageHeight()` |
| thick     | Integer    | Thickness of the line, should be calculated based on image height or width. But at least one Pixel. Example: `max(int(0.1*hyperion.imageHeight(),1)` is 10% of the image height. |
| r         | Integer    | red color from `0` to `255` |
| g         | Integer    | green color from `0` to `255` |
| b         | Integer    | blue color from `0` to `255` |
| a         | Integer    | **Optional** alpha of the color from `0` to `255`, if not provided, it's `255` |

::: tip Kürzere Versionen von hyperion.imageLinearGradient()
`hyperion.imageLinearGradient(startX, startY, endX, endY, bytearray, spread)` -> Das Rechteck, das den Farbverlauf enthält, ist standardmäßig das gesamte Bild
:::

### hyperion.imageDrawPoint()
Zeichnet einen Punkt in das Bild. Alle Parameter sind erforderlich, außer a für Alpha. Füge die Parameter in der unten angegebenen Reihenfolge hinzu. \
`hyperion.imageDrawPoint(x, y, thick, r, g, b, a)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| x         | Integer    | point position at the x-axis. Relates to `hyperion.imageWidth()` |
| y         | Integer    | point position at the y-axis. Relates to `hyperion.imageHeight()` |
| thick     | Integer    | Thickness of the point in pixel, should be calculated based on image height or width. But at least one Pixel. Example: `max(int(0.1*hyperion.imageHeight(),1)` is 10% of the image height. |
| r         | Integer    | red color from `0` to `255` |
| g         | Integer    | green color from `0` to `255` |
| b         | Integer    | blue color from `0` to `255` |
| a         | Integer    | **Optional** alpha of the color from `0` to `255`, if not provided, it's `255` |

::: tip Kürzere Versionen von hyperion.imageDrawPoint()
`hyperion.imageDrawPoint(x, y, thick, r, g, b)` -> Alpha ist standardmäßig 255
:::

### hyperion.imageDrawPolygon()
Zeichnet ein Polygon in das Bild und füllt es mit der bestimmten Farbe. Wird zum freien Formen verwendet (Dreieck, Sechseck,... was immer man will). Alle Parameter sind erforderlich, mit Ausnahme von a für Alpha. Füge die Parameter in der untenstehenden Reihenfolge hinzu. \
`hyperion.imageDrawPolygon(bytearray, r, g, b, a)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| bytearray | ByteArray  | bytearray([point1X,point1Y,point2X,point2Y,point3X,point3Y,...]). Add pairs of X/Y coordinates to specific the corners of the polygon, each point has a X and a Y coordinate, you could add as much points as you need. The last point automatically connects to the first point.|
| r         | Integer    | red color from `0` to `255` |
| g         | Integer    | green color from `0` to `255` |
| b         | Integer    | blue color from `0` to `255` |
| a         | Integer    | **Optional** alpha of the color from `0` to `255`, if not provided, it's `255` |

::: tip Kürzere Versionen von hyperion.imageDrawPolygon()
hyperion.imageDrawPolygon(bytearray, r, g, b)` -> Alpha ist standardmäßig 255
:::

### hyperion.imageDrawPie()
Zeichnet einen Kreis (auch bekannt als Kreisdiagramm) in das Bild und füllt ihn mit der bestimmten Farbe. Alle Parameter sind erforderlich, außer a für Alpha. Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. \
`hyperion.imageDrawPie(centerX, centerY, radius, startAngle, spanAngle, r, g, b, a)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| centerX   | Integer    | The center of the Pie at the x-axis |
| centerY   | Integer    | The center of the Pie at the y-axis |
| radius    | Integer    | radius of the Pie in Pixels |
| startAngle| Integer    | start angle from `0` to `360`. `0` is at 3 o'clock |
| spanAngle | Integer    | span (wide) of the pie from `-360` to `360` which starts at the startAngle, positive values are counter-clockwise, negative clockwise |
| r         | Integer    | red color from `0` to `255` |
| g         | Integer    | green color from `0` to `255` |
| b         | Integer    | blue color from `0` to `255` |
| a         | Integer    | **Optional** alpha of the color from `0` to `255`, if not provided, it's `255` |

::: tip Kürzere Versionen von hyperion.imageDrawPie()
`hyperion.imageDrawPie(centerX, centerY, radius, startAngle, spanAngle, r, g, b)` -> alpha ist standardmäßig 255
:::

### hyperion.imageDrawRect()
Zeichnet ein Rechteck auf das Bild. Alle Parameter sind erforderlich, außer a für Alpha. Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. \
`hyperion.imageDrawRect(startX, startY, width, height, thick, r, g, b, a,)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| startX    | Integer    | start point at the x-axis. Relates to `hyperion.imageWidth()` |
| startY    | Integer    | start point at the y-axis. Relates to `hyperion.imageHeight()` |
| width     | Integer    | width of the rectangle. Relates to `hyperion.imageWidth()` |
| height    | Integer    | height of the rectangle. Relates to `hyperion.imageHeight()` |
| thick     | Integer    | Thickness of the rectangle, a good start value is `1` |
| r         | Integer    | define red color from `0` to `255` |
| g         | Integer    | define green color from `0` to `255` |
| b         | Integer    | define blue color from `0` to `255` |
| a         | Integer    | **Optional** alpha of the color from `0` to `255`, if not provided, it's `255` |

### hyperion.imageSolidFill()
Füllt einen bestimmten Teil des Bildes mit einer Volltonfarbe (oder ganz). Alle Parameter sind erforderlich.  Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. \
`hyperion.imageSolidFill(startX, startY, width, height, r, g, b, a)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| startX    | Integer    | start point at the x-axis. Relates to `hyperion.imageWidth()` |
| startY    | Integer    | start point at the y-axis. Relates to `hyperion.imageHeight()` |
| width     | Integer    | width of the fill area. Relates to `hyperion.imageWidth()` |
| height    | Integer    | height of the fill area. Relates to `hyperion.imageHeight()` |
| r         | Integer    | define red color from `0` to `255` |
| g         | Integer    | define green color from `0` to `255` |
| b         | Integer    | define blue color from `0` to `255` |
| a         | Integer    | alpha of the color from `0` to `255` |

::: tip Kürzere Versionen von hyperion.imageSolidFill()
 - `hyperion.imageSolidFill(startX, startY, width, height, r, g, b)` -> kein Alpha, Standardwert ist 255
 - `hyperion.imageSolidFill(r, g, b, a)` ->  startX und startY ist 0, Breite und Höhe ist max. -> Volles Bild
 - `hyperion.imageSolidFill(r, g, b)` ->  startX und startY ist 0, Breite und Höhe ist max, Alpha 255. -> Volles Bild
:::

### hyperion.imageSetPixel()
Weist einer bestimmten Pixelposition eine Farbe zu. Alle Parameter sind erforderlich. Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. \
`hyperion.imageSetPixel(X, Y, r, g, b)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| X         | Integer    | pixel point at the x-axis. Relates to `hyperion.imageWidth()` |
| Y         | Integer    | pixel point at the y-axis. Relates to `hyperion.imageHeight()` |
| r         | Integer    | define red color from `0` to `255` |
| g         | Integer    | define green color from `0` to `255` |
| b         | Integer    | define blue color from `0` to `255` |

### hyperion.imageGetPixel()
Ermittelt eine Farbe an einer bestimmten Pixelposition.  Alle Parameter sind erforderlich. Füge die Parameter in der Reihenfolge der Zeilen unten hinzu. \
`hyperion.imageGetPixel(X, Y)`
| Argument  | Type       |  Comment  |
| --------- | ---------- | ----------------------------------------------------- |
| X         | Integer    | pixel point at the x-axis. Relates to `hyperion.imageWidth()` |
| Y         | Integer    | pixel point at the y-axis. Relates to `hyperion.imageHeight()` |
| Return   | Tuple    | Returns a Python Tuple of RGB values |



### hyperion.setColor()
Setzt eine einzelne Farbe für alle Leds mit `hyperion.setColor(255,0,0)`, so werden alle Leds rot dargestellt. Es ist aber auch möglich, ein Bytearray von RGB-Werten zu senden. Jeder RGB-Wert in diesem Bytearray repräsentiert eine Led.
 - **Beispiel 1:** `hyperion.setColor(bytearray([255,0,0]))` Die erste LED wird rot
 - **Beispiel 2:** `hyperion.setColor(bytearray([255,0,0,0,255,0]))` Die erste LED wird rot, die zweite ist grün
 - **Beispiel 3:** `hyperion.setColor(bytearray([255,0,0,0,255,0,255,255,255]))` Die erste LED wird rot, die zweite ist grün und die dritte ist weiss
 - Normalerweise ordnet man allen Leds eine Farbe zu, deshalb muss man wissen, wie viele Leds der Benutzer gerade hat. Ermittle dies mit `hyperion.ledCount`

::: warning hyperion.setColor()
 - Die Funktion hyperion.setColor() wird nicht empfohlen, um Led-Farben zuzuweisen, sie arbeitet nicht mit den **`hyperion.image*`**-Funktionen zusammen
 - Du weißt nicht, wo oben/links/rechts/unten ist und es funktioniert nicht mit Matrix-Layouts!
 - Bitte beachte, dass du stattdessen die **`hyperion.image*`**-Funktionen verwenden kannst, um beeindruckende Effekte zu erzeugen, die mit der Benutzereinstellung skalieren
:::