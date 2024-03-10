# AtmoOrb

The device streams a set of RGB values to one or many AtmoOrb devices (aka Orbs) over UDP multicast.

**The devices is not able to be detected, if the remote device is not available or failed.**

## Configuration

### Specific Settings

#### Orb-IDs
Comma separated list of all your Orbs, in example we only use a single id

#### Use Orb Smoothing
Use Orbs own (external) smoothing algorithm when true, disable Hyperion smoothing to avoid double smoothing once set.

#### Multicast group
Your Orb multicast group IP address, should match that of your Orb

#### Port
Default multicast port, should match that of your Orb

### Advanced/Expert Settings

#### Latch time
Latch time is the time-frame a device requires until the next update can be processed. During that time-frame any updates done are ignored.

