# Configuration
Hyperion is fully accessible & configurable via web browser. The interface is fully responsive and created with touch devices in mind.

## Web Interface
Open the web interface by typing the IP address of your device and the port 8090 in your browser. The installation script will show you the address, if you don't know it. \
**Example:** `http://192.168.0.20:8090`

### Dashboard Page
 \
<ImageWrap src="/images/en/user_config_dash.jpg" alt="Hyperion Web Configuration - Dashboard" />


 **Top right navbar**
 * **Camera** - Record your browser window as an input
 * **Moon** - Dark Mode.
 * **TV** - Live LED visualisation
 * **Magic wand** - Wizards that guide you through colour calibration and more
 * **Wrench** - Settings for language selection, settings level, UI locking password
 * **Power** - Suspend, resume or restart
 * **Lock** - Lock the Hyperion user interface 
 
 **Left sidebar**
 * **Dashboard** - Control an instance's components or global settings
 * **General** - General settings and LED hardware instance management
 * **LED Instances** - Configure an LED instance
 * **Capturing Hardware** - Configure the different ways of capturing content, i.e. screen, video or audio 
 * **Network Services** - Network related configurations
 * **Remote Control** - Control Hyperion, change settings temporarily or trigger effects
 * **Support** - Where you get support and how to support us (and why)
 * **System** - Configure to react on system events, inspect your log messages or get more details about the running Hyperionsystem

 **Dashboard**
 * The **LED Hardware Instance** shows always the latest state (enabled/disabled) of an instance's components
 * The **Status** panel shows the state of instance independent components, plus the current version

::: tip Hashtag navigation
The web configuration supports hashtags for sitenames, so you could directly open a specific page by calling the hashtag.
**Example:** `http://192.168.0.20:8090/#remote` - will open the remote control page.
:::

### Configuration
We added additional information(s) to each option. Some topics require additional attention which are covered here. If you need more help or lack information, just dive into our [Forum](https://hyperion-project.org/forum/).

#### Language
By default, the web configuration selects the language based on your browser locale or best matching next to. So no configuration is required. In case you want to start learning Hyperion in another language, select from the provided once.

<ImageWrap src="/images/en/user_config_lang.jpg" alt="Hyperion Web Configuration - Language" />

::: tip Want to contribute in translation?
It's easy! Checkout: [POEditor](https://poeditor.com/join/project/Y4F6vHRFjA)
:::

#### Settings level
Settings level prevents a option flooding for new users. While the **Default** level is for beginners and has the lowest amount of options the **Advanced** is for people that want to or need to dive a little deeper. **Expert** is for experts, you shouldn't need it that often.

<ImageWrap src="/images/en/user_config_access.jpg" alt="Hyperion Web Configuration - Settings level" />
