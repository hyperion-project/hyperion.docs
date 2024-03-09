# Philips Hue

The well known [Philips Hue Bridge + Bulbs](https://www.philips-hue.com/en-us/) is supported. How to configure them with Hyperion? Checkout: Web configuration

## Entertainment API

::: danger Photosensitive seizure warning
Certain individuals may experience discomfort when exposed to quick flashes/patterns of light.
Please refrain from using entertainment mode immediately if you feel any discomfort or have any known health conditions. Please consult a physician under those circumstances. Make sure your entertainment room is well-lit.

Hyperion cannot be held liable for any foreseeable, or unforeseeable, negative or harmful impact.
:::

### Requirements
  * Before you start, the Entertainment API requires at least one entertainment group/area with minimum one assigned lamp! Checkout: [Entertainment groups / areas](#entertainment-groups-areas)
  * A normal Hue group, does NOT work with the Hue Entertainment API!
  * Check the "Use Hue Entertainment API" option and use the Philips Hue Entertainment wizard at the web configuration for configuration (available at LED hardware section)!
  * The Entertainment API requires also a user ID and a suitable clientkey. Checkout: [Philips Hue Entertainment wizard](#philips-hue-entertainment-wizard)

### Philips Hue Entertainment wizard
  * In the wizard, your Hue Bridges are automatically discovered in your local network. If not, try entering the bridge IP address and click the "retry" icon / button next to the IP entry field.
  * If only the user ID is known or you start from scratch, create a new user with the Philips Hue Entertainment wizard and a clientkey will automatically generated.
  * If no Entertainment group / area was found on the bridge you are using, the wizard switches back to the classic version and deactivates the use of the Hue Entertainment API!
  * User ID, clientkey and Entertainment group / area ready? Select your Entertainment group / area, you would like to use and fine-tune your preselected screen positions for each lamp.
  * Don't forget to save your changes! ;)

### Bridge requirements / limits
  * To use the Philips Hue Entertainment API, the bridge must use at least API version 1.22!
  * Only one Entertainment group / area can be active at one time on a single Hue Bridge!

### Non original Hue bridge
  * [diyHue](https://diyhue.org/) is supported. Please ensure that your diyHue Bridge's name starts with "diyHue" to ensure that workarounds are activated where diyHue is not behaving like the original.
  * If your bridge wasn't found or was found, but not the one you want to use, manually enter the desired bridge IP address and click the "retry" icon / button next to the IP entry field.

### Entertainment groups / areas
  * Entertainment groups / areas can be created using the original Philips Hue or the Hue Essential (required for diyHue) app.
  * Set also the right z-axis (Ground height, TV height and Ceiling height) for each lamp within the configuration of the Entertainment group / area. Tapping each lamp changes the height and will be recognised it in the Philips Hue Entertainment wizard to also preselect the correct screen position.
  * You can connect up to 10 Philips Hue or Friends of Hue color-capable devices per Entertainment group / area.
  * When a Entertainment group / area is used with the Entertainment API, you can't control any of the lamps in the Entertainment group / area, until the Entertainment API stops!

### Configuration Tips & Tricks
  * Colour calibration is not required, you can keep the default values.
  * To enable/disable the active Entertainment group / area from Hyperion, disable Hyperion or just the LED hardware component.
  	The previous lamp state will be recovered, if activated.

## Classic Philips Hue usage without the Entertainment API

### Advanced Settings

#### Signal detection
  * Hyperion sends colour information to the bridge continuously. That's why the signal detection came into play.
  * With the `Signal detection timeout on black` option, you can control how long all lamps are set to black before previous lamp state will be recovered.
  * Some grabbers do not provide real black, but rather dark grey, so black = 0 never occurs. With the option `Signal detection brightness minimum` you can set the minimum brightness which is considered black. The range can be set from 0 = 0% to 1 = 100%, e.g. 0,005 = 0.5%. If 0 doesn't' work for your setup, increase this value in 0,005 steps. It's like the thresholds for USB Capture.

#### Brightness *Settings may be removed in future releases*
  * Set / leave `brightness factor` back to 1 (default) - classic low brightness bug is fixed
  * Set / leave `brightness minimum` to 0 (default) - you can set a minimum brightness, so the lamps will never be off
  * Set / leave `brightness maximum` to 1 (default) - you can set a maximum brightness, if you don't want the whole room to light up in bright scenes
  * Value range for brightness minimum / maximum are: 0 = 0% to 1 = 100%, E.g. 0,05 = 5% / 0,5 = 50%
  * The brightness factor is a multiplier for the input brightness, means E.g. 50% input brightness * brightness factor (e.g. 1,5) = new 75% brightness.
  * __Be warned__:
  If you change the brightness factor / minimum / maximum to a value other than the default value, the colour rendering will also change!!!
  E.g. Dark / Black will appear as a deep dark blue, if you raise the minimum brightness, because the deepest colour inside the hue light system is a deep blue, because black is not a colour, it's only off.

::: warning Fast uncontrolled colours / flickering
  * The colour information for each lamp, depends on the input signal from your grabber source, the defined screen position to use for the lamp (like any other LED configuration) and the used capture frame rate!
  * Input signals with noise and other image disturbances can cause this effect of rapidly changing colours / flickering. For more information on how to reduce this problem, see the next tip:
:::

::: tip Activate smoothing in image processing!
  This allows the extremely fast colour / flicker to be controlled very well.
  These values ​​work well, but decide for yourself:
  Time: 80 - 120 ms
  Update frequency: 35 - 40 Hz - higher values leads to faster colour change / flickering again
  Update delay: 0 ms
  Continuous output: no - does not have to, since the last colour values ​​are stored in the respective lamp
:::

### Configuration Tips & Tricks
  * Use the Philips Hue wizard at the web configuration for configuration (available at LED hardware section)!
  * Colour calibration is not required, you can keep the default values.
  * If the brightness is to low for you and Hyperion is already at 100% you can higher the brightness factor at the web configuration -> LED hardware
  * Brightness compensation influences the brightness across different colour (Adjust at the colour section)
  * To enable/disable the bridge control from Hyperion, disable Hyperion or just the LED hardware component.
  	The previous lamp state will be recovered
