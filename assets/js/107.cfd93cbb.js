(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{418:function(e,r,a){"use strict";a.r(r);var t=a(12),s=Object(t.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"install-hyperion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-hyperion"}},[e._v("#")]),e._v(" Install Hyperion")]),e._v(" "),r("p",[e._v("Hyperion supports various platforms for installation, via package or portable .zip.")]),e._v(" "),r("h2",{attrs:{id:"prerequisites"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#prerequisites"}},[e._v("#")]),e._v(" Prerequisites")]),e._v(" "),r("h3",{attrs:{id:"supported-systems"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-systems"}},[e._v("#")]),e._v(" Supported Systems")]),e._v(" "),r("ul",[r("li",[e._v("Raspberry Pi (see also "),r("a",{attrs:{href:"/en/user/HyperBian"}},[e._v("HyperBian")]),e._v(")")]),e._v(" "),r("li",[e._v("Debian 10, Ubuntu 20.04, Fedora 37 or higher")]),e._v(" "),r("li",[e._v("macOS")]),e._v(" "),r("li",[e._v("Windows 10")])]),e._v(" "),r("p",[r("strong",[e._v("Please note that some arm devices have limited support in terms of screen capturing")])]),e._v(" "),r("h3",{attrs:{id:"supported-browsers"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-browsers"}},[e._v("#")]),e._v(" Supported Browsers")]),e._v(" "),r("p",[e._v("Hyperion will be configured and controlled through a web interface.")]),e._v(" "),r("ul",[r("li",[e._v("Chrome 47+")]),e._v(" "),r("li",[e._v("Firefox 43+")]),e._v(" "),r("li",[e._v("Opera 34+")]),e._v(" "),r("li",[e._v("Safari 9.1+")]),e._v(" "),r("li",[e._v("Microsoft Edge 14+")])]),e._v(" "),r("h2",{attrs:{id:"install-hyperion-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#install-hyperion-2"}},[e._v("#")]),e._v(" Install Hyperion")]),e._v(" "),r("h3",{attrs:{id:"ubuntu-debian-and-friends-fedora-libreelec-macos-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian-and-friends-fedora-libreelec-macos-windows"}},[e._v("#")]),e._v(" Ubuntu, Debian and friends, Fedora, LibreELEC, macOS, Windows")]),e._v(" "),r("p",[e._v("Hyperion's project "),r("a",{attrs:{href:"https://releases.hyperion-project.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("package repository page"),r("OutboundLink")],1),e._v(" provides you with installation instructions at your finger tip.")]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("A ready made installation image is available for Raspberry Pi users")]),e._v(" "),r("p",[e._v("Install "),r("RouterLink",{attrs:{to:"/en/user/HyperBian.html"}},[e._v("HyperBian")]),e._v(" to get a complete system out of the box.")],1)]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Other distributions based on Ubuntu or Debian")]),e._v(" "),r("p",[e._v("The same easy installation script can be used, but the underlying distribution codename needs to be provided by an additional option")]),e._v(" "),r("p",[r("code",[e._v("--ubuntu")]),e._v(" "),r("em",[e._v("codebase name")]),e._v(" or "),r("code",[e._v("--debian")]),e._v(" "),r("em",[e._v("codebase name")])]),e._v(" "),r("p",[e._v("Sample for Pop!_OS 22.04 LTS or Mint 21.2 Victoria (which are based on Ubuntu 'jammy')")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("curl -sSL https://releases.hyperion-project.org/install | bash -s -- --ubuntu 'jammy'\n")])])])]),e._v(" "),r("h2",{attrs:{id:"update-hyperion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#update-hyperion"}},[e._v("#")]),e._v(" Update Hyperion")]),e._v(" "),r("p",[e._v("In case Hyperion was installed from the package repository page or an deb/rpm standalone package,\nfollow the standard operating system procedures to update the system.")]),e._v(" "),r("h3",{attrs:{id:"ubuntu-debian-and-friends-hyperbian"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian-and-friends-hyperbian"}},[e._v("#")]),e._v(" Ubuntu, Debian and friends + HyperBian")]),e._v(" "),r("p",[e._v("Open a terminal or ssh into a remote system and execute")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo apt-get install hyperion\n")])])]),r("h3",{attrs:{id:"fedora"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#fedora"}},[e._v("#")]),e._v(" Fedora")]),e._v(" "),r("p",[e._v("Open a terminal and execute")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo dnf -y upgrade hyperion\n")])])]),r("h3",{attrs:{id:"libreelec"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#libreelec"}},[e._v("#")]),e._v(" LibreELEC")]),e._v(" "),r("p",[e._v("See "),r("a",{attrs:{href:"https://hyperion-project.org/forum/index.php?thread/13754-install-update-hyperion-ng-on-libreelec/&pageNo=1",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"uninstall-hyperion"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#uninstall-hyperion"}},[e._v("#")]),e._v(" Uninstall Hyperion")]),e._v(" "),r("h3",{attrs:{id:"ubuntu-debian-and-friends-libreelec-fedora-macos-windows"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ubuntu-debian-and-friends-libreelec-fedora-macos-windows"}},[e._v("#")]),e._v(" Ubuntu, Debian and friends, LibreELEC, Fedora, macOS, Windows")]),e._v(" "),r("p",[e._v("Hyperion's project "),r("a",{attrs:{href:"https://releases.hyperion-project.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("package repository page"),r("OutboundLink")],1),e._v(" provides you with the respective removal instructions")]),e._v(" "),r("h2",{attrs:{id:"hyperion-user-data"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-user-data"}},[e._v("#")]),e._v(" Hyperion User Data")]),e._v(" "),r("p",[e._v("Hyperion stores user configuration data and customised effects inside the executing user's home directory (folder "),r("code",[e._v(".hyperion")]),e._v(").")]),e._v(" "),r("p",[e._v('Alternatively, you can check the "About Hyperion" page.\nThe '),r("code",[e._v("Config path:")]),e._v(" entry specifies the location where user data is stored currently.")]),e._v(" "),r("h2",{attrs:{id:"hyperion-linux-service"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#hyperion-linux-service"}},[e._v("#")]),e._v(" Hyperion Linux Service")]),e._v(" "),r("p",[e._v("On non-interactive (headless) environments, a Hyperion service is installed running under the current user.\nIn same cases, e.g. using ws281x LEDs, Hyperion must run under "),r("code",[e._v("root")]),e._v(".\nHyperion provides a command-line utility which allows switching the user running the service.")]),e._v(" "),r("h3",{attrs:{id:"change-the-service-user-to-root"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#change-the-service-user-to-root"}},[e._v("#")]),e._v(" Change the service user to 'root'")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo updateHyperionUser -u root\n")])])]),r("h3",{attrs:{id:"change-the-service-user-to-the-current-user"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#change-the-service-user-to-the-current-user"}},[e._v("#")]),e._v(" Change the service user to the current user")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("sudo updateHyperionUser\n")])])])])}),[],!1,null,null,null);r.default=s.exports}}]);