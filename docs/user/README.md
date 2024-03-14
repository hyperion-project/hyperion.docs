# Introduction

[Hyperion](https://github.com/hyperion-project/hyperion.ng) is an **open source** (MIT) Bias or Ambient Lighting implementation for **GNU/Linux**, **macOS** and **Windows**, which you might know from TV manufacturers.
It supports many LED devices and video grabbers.

In simple words, this software dynamically processes input video signal (using for example current video framebuffer), and converts it into signal to steer ambient light (using for example LED strips controlled over USB device).

## Features

- Low CPU load makes it perfect for SoCs like Raspberry Pi
- Json interface (API) which allows easy integration into scripts
- A command line utility for testing and integration in automated environment
- Priority channels are not coupled to a specific led data provider which means that a provider can post led data and leave without the need to maintain a connection to Hyperion
- Black border detector and processor
- A scriptable (Python) effect engine with 39 build-in effects for your inspiration
- A multi language web interface to configure and remote control Hyperion

## Languages
- **Available in more than 25 different languages** like English, German, French, Polish, Chinese, Japanese, Russian, Portuguese, Hungarian, Dutch and Spanish
- [Your help](https://poeditor.com/join/project/Y4F6vHRFjA) is very much appreciated to improve these translations or to translate Hyperion in more languages

## Contributors

[![](https://contrib.rocks/image?repo=hyperion-project/hyperion.ng&columns=16)](https://github.com/hyperion-project/hyperion.ng/graphs/contributors)

This project exists thanks to all the people who contribute.

## License

The source is released under MIT-License (see https://opensource.org/licenses/MIT).