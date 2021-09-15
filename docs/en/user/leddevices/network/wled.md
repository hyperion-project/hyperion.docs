# WLED

WLED is connected to Hyperion by selecting the "Controller type" as WLED and entering the IP-Address of your WLED instance in the Hyperion UI.\
Hyperion uses the brightness setting set in WLED. E.g. if you set the brightness in WLED to 10% the LEDs will light up to a maximum of 10%. If you would like Hyperion to override the brightness setting of WLED and use the maximum brightness you can do so by going to the WLED configuration -> Sync. Settings and enabling "Force max brightness".

::: warning Note
The maximum number of LEDs supported is 490. (WLED 0.8.0 and lower: 341)\
For more details see [WLED Wiki](https://github.com/Aircoookie/WLED/wiki/UDP-Realtime-Control#hyperion) 
:::
