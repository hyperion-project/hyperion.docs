# AtmoOrb

The device streams a set of RGB values to one or many AtmoOrb devices (aka Orbs) over UDP multicast.

**The devices is not able to detect, if the remote device is not available or failed.**

### Settings

"output"     : "239.15.18.2",   <-- Your Orb multicast group IP address, should match that of your Orb
"transitiontime"     : 0, 		<-- not used / required but may allow for future delay configuration
"useOrbSmoothing"     : false,  <-- use Orbs own (external) smoothing algorithm when true, disable Hyperion smoothing to avoid double smoothing once set.
"skipSmoothingDiff"     : 0,	<-- minimal color (0-255) difference to override smoothing so that if current and previously received colors are higher than set dif we override smoothing (only used when useOrbSmoothing = true)
"port"     : 49692,		  		<-- Default multicast port, should match that of your Orb
"orbIds"   : "1",		  		<-- Comma separated list of all your Orbs, in example we only use a single id (1)


"numLeds"     : 24,		  		<-- Number of leds per Orb, should match that of your Orb

