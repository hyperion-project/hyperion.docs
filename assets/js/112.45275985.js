(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{422:function(e,t,s){"use strict";s.r(t);var n=s(12),r=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"testing"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#testing"}},[e._v("#")]),e._v(" Testing")]),e._v(" "),t("h2",{attrs:{id:"pull-requests"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pull-requests"}},[e._v("#")]),e._v(" Pull Requests")]),e._v(" "),t("p",[e._v("In case you would like to or were asked testin an in development version.")]),e._v(" "),t("h3",{attrs:{id:"linux"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[e._v("#")]),e._v(" Linux")]),e._v(" "),t("p",[e._v("Pull requests (PRs) can be tested in a self contained way without affecting a current Hyperion installation.")]),e._v(" "),t("ol",{attrs:{start:"0"}},[t("li",[t("p",[e._v("Create a GitHub user, if case you have one continue with the next step")])]),e._v(" "),t("li",[t("p",[e._v("Create a fine grained personal access token for your GitHub user.")]),e._v(" "),t("p",[e._v("Go to the "),t("a",{attrs:{href:"https://github.com/settings/tokens?type=beta",target:"_blank",rel:"noopener noreferrer"}},[e._v("Fine-grained personal access tokens site"),t("OutboundLink")],1),e._v(' and do a "Generate new token":')]),e._v(" "),t("p",[e._v("a. Give the token a name")]),e._v(" "),t("p",[e._v('b. Select "All Repositories"')]),e._v(" "),t("p",[e._v('c. Under "Permissions/Repository permissions", define Read-Only Access to "Actions"')]),e._v(" "),t("p",[e._v("d. Generate token")])]),e._v(" "),t("li",[t("p",[e._v("Copy the new generated token to the clipboard")])]),e._v(" "),t("li",[t("p",[e._v("Log on to your Linux system, e.g. ssh into HyperBian running on your Raspberry Pi")])]),e._v(" "),t("li",[t("p",[e._v("Execute the install_pr script replacing "),t("em",[e._v("YourAccessdToken")]),e._v(" with your token copied in 2. and "),t("em",[e._v("PRID")]),e._v(" with the PR number")]),e._v(" "),t("p",[t("code",[e._v("wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t YourAccessToken PRID")])])]),e._v(" "),t("li",[t("p",[e._v("Run the execution script to start Hyperion under the current user, replace "),t("em",[e._v("PRID")]),e._v(" with the PR number")]),e._v(" "),t("p",[t("code",[e._v("./hyperion_prPRID/PRID_.sh")])])]),e._v(" "),t("li",[t("p",[e._v("Test the content of the Pull Request and provide feedback on the PR itself.")])]),e._v(" "),t("li",[t("p",[e._v("Remove the installed version for the given PR")])])]),e._v(" "),t("p",[t("em",[t("strong",[e._v("Note")])]),e._v("\nThe script will stop the current Hyperion service before execution.\nAfter doing your tests, you should start the service again or just reboot to start the service automatically.\nReplace "),t("em",[e._v("USER")]),e._v(" with the username, Hyperion runs with.")]),e._v(" "),t("p",[t("code",[e._v("systemctl start hyperion@USER.service")])]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("Test an PR using the current current configuration")]),e._v(" "),t("p",[e._v("In case you would like to test with a current configuration, provide the configuration location via the "),t("code",[e._v("-c")]),e._v(" option.\nThe configuration will be copied to avoid any side effects on your current configuration,\ni.e. any updates to the configuration when testing the PR will also not be reflected in the current setup.")])]),e._v(" "),t("h4",{attrs:{id:"sample"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sample"}},[e._v("#")]),e._v(" Sample")]),e._v(" "),t("p",[e._v("Current user, Pull request #1649 and making use of the current configuration")]),e._v(" "),t("p",[t("code",[e._v("wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t YourAccessToken -c ~/.hyperion 1649")])]),e._v(" "),t("h3",{attrs:{id:"windows-macos"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#windows-macos"}},[e._v("#")]),e._v(" Windows, macOS")]),e._v(" "),t("p",[e._v("Download a Windows or macOS installation package  created during the latest PR build.\nThe artifacts can be found under the Pull Request itself.")]),e._v(" "),t("h2",{attrs:{id:"nightly-builds"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nightly-builds"}},[e._v("#")]),e._v(" Nightly Builds")]),e._v(" "),t("p",[e._v("Hyperion's project "),t("a",{attrs:{href:"https://releases.hyperion-project.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("package repository page"),t("OutboundLink")],1),e._v(' provides you with installation instructions at your finger tip.\nJust select "Nightly Builds" to get the respective instructions.')]),e._v(" "),t("div",{staticClass:"custom-block warning"},[t("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),t("p",[e._v("You would need to uninstall an existing installation first.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);