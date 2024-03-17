# Command Line Interface
All executables shipped with Hyperion have some command line arguments/options

## hyperiond
The heart of Hyperion
``` sh
# Show the version/build date/commit of Hyperion 
hyperiond --version

# Reset current adminstration password back to 'hyperion'
hyperiond --resetPassword

# Overwrite the path for user data (which defaults to your home directory)
hyperiond --userdata /temp/anotherDir

# Overwrite log level temporarily: hyperiond -s for silent -v for verbose and -d for debug
hyperiond -d

# Export effects to directory
hyperiond --export-effects /tmp

# Run Hyperion in desktop mode
hyperiond --desktop
```

::: tip
If a path name contains spaces, surround it with `“` . \
`hyperiond --userdata "/temp/another Dir"`
:::

## hyperion-remote
hyperion-remote is a command line tool which translates given arguments to JSON commands and sends them to the Hyperion JSON-RPC. Easy to use for scripts. It supports nearly all commands that Hyperion provides.

``` sh
# Get a list of all available commands
hyperion-remote -h

# Set a color by using HTML color names
hyperion-remote -c aqua

# Set color with hex value
hyperion-remote -c FF7F50

# Set color with a duration of 5 seconds instead endless 
hyperion-remote -c FF7F50 -d 5000

# Start an effect
hyperion-remote -e "Rainbow swirl"

# with a duration of 8 seconds instead endless
hyperion-remote -e "Rainbow swirl" -d 8000

# Target a specific instance
# ATTENTION: Hyperion instances will synchronize with the Instance Syncing feature by default
# You can configure the behaviour for each instance
hyperion-remote -I "My cool instance name"
# Or
hyperion-remote --instance "My cool instance name"
# Example set effect for instance
hyperion-remote --instance "My cool instance name" -e "Rainbow swirl"
```

::: tip
Hyperion remote will search for a Hyperion server automatically. So you can even use that on another device in your local network without providing a IP/port
:::

## hyperion-capture
We deliver also stand alone capture apps right in your Hyperion directory:
 
Executable  | Source
| :--- | :---
hyperion-aml | Amlogic screen capture
hyperion-dispmanx | DispManX Raspberry Pi screen capture
hyperion-framebuffer | Linux FrameBuffer screen capture 
hyperion-osx | macOS screen capture
hyperion-qt | Qt multi platform screen capture
hyperion-v4l2 | USB capture
hyperion-x11 | X11 screen capture
hyperion-xcb | XCB screen capture

Depending on your platform you have more or less

All these application can be started independent from Hyperion and all of these have slightly different options. They communicate with the flatbuffer interface of Hyperion. 
Each module will search a Hyperion server automatically, if the `--address` option is not used.

Below you find the output of Qt capture executable for illustration.

``` sh
hyperion-qt --help
hyperion-qt:
	Version   : 2.0.16 ((HEAD detached at 2.0.16) (Paulchen-Panther-cb85d2d/a93d79b-1705568419))
	build time: Jan 18 2024 09:15:43
Usage: ./bin/hyperion-qt [options]
Qt interface capture application for Hyperion. Will automatically search a Hyperion server if -a option isn't used. Please note that if you have more than one server running it's more or less random which one will be used.

Options:
  -d, --display <display>                Set the display to capture [default:
                                         0]
  -f, --framerate <framerate>            Capture frame rate. Range 1-30fps
                                         [default: 25]
  -s, --size-decimator <size-decimator>  Decimation factor for the output image
                                         size [default=8]
  --crop-left <crop-left>                Number of pixels to crop from the left
                                         of the picture before decimation
  --crop-right <crop-right>              Number of pixels to crop from the
                                         right of the picture before decimation
  --crop-top <crop-top>                  Number of pixels to crop from the top
                                         of the picture before decimation
  --crop-bottom <crop-bottom>            Number of pixels to crop from the
                                         bottom of the picture before decimation
  --3DSBS                                Interpret the incoming video stream as
                                         3D side-by-side
  --3DTAB                                Interpret the incoming video stream as
                                         3D top-and-bottom
  -a, --address <address>                The hostname or IP-address (IPv4 or
                                         IPv6) of the hyperion server.
                                         Default host: 127.0.0.1, port: 19400.
                                         Sample addresses:
                                         Host : hyperion.fritz.box
                                         IPv4 : 127.0.0.1:19400
                                         IPv6 : [2001:1:2:3:4:5:6:7]
  -p, --priority <priority>              Use the provided priority channel
                                         (suggested 100-199) [default: 150]
  --skip-reply                           Do not receive and check reply
                                         messages from Hyperion
  --screenshot                           Take a single screenshot, save it to
                                         file and quit
  --debug                                Enable debug logging
  -h, --help                             Show this help message and exit
``` 

Sample with a capture interval of 15 frames per second (fps)
``` sh:no-line-numbers
hyperion-qt -f 15
```
