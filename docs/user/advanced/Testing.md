---
outline: [2, 3]
---

# Testing 
## Pull Requests 

In case you would like to or were asked testin an in development version.

### Linux
Pull requests (PRs) can be tested in a self contained way without affecting a current Hyperion installation.

0. Create a GitHub user, if case you have one continue with the next step

1. Create a fine grained personal access token for your GitHub user.
	
	Go to the [Fine-grained personal access tokens site](https://github.com/settings/tokens?type=beta) and do a "Generate new token":
	
	a. Give the token a name
	
	b. Select "All Repositories"
	
	c. Under "Permissions/Repository permissions", define Read-Only Access to "Actions"
	
	d. Generate token
		
2. Copy the new generated token to the clipboard

3. Log on to your Linux system, e.g. ssh into HyperBian running on your Raspberry Pi

4. Execute the install_pr script replacing _YourAccessdToken_ with your token copied in 2. and _PRID_ with the PR number

``` sh:no-line-numbers
wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t YourAccessToken PRID
```

5. Run the execution script to start Hyperion under the current user, replace _PRID_ with the PR number

``` sh:no-line-numbers
./hyperion_prPRID/PRID_.sh
```

6. Test the content of the Pull Request and provide feedback on the PR itself.

7. Remove the installed version for the given PR 

***Note***
The script will stop the current Hyperion service before execution.
After doing your tests, you should start the service again or just reboot to start the service automatically.
Replace _USER_ with the username, Hyperion runs with.

``` sh:no-line-numbers
systemctl start hyperion@USER.service
```

::: tip Test an PR using the current current configuration

In case you would like to test with a current configuration, provide the configuration location via the `-c` option.
The configuration will be copied to avoid any side effects on your current configuration,
i.e. any updates to the configuration when testing the PR will also not be reflected in the current setup.
:::

#### Sample

Current user, Pull request #1649 and making use of the current configuration

``` sh:no-line-numbers
wget -qO- https://raw.githubusercontent.com/hyperion-project/hyperion.ng/master/bin/scripts/install_pr.sh | bash -s -- -t YourAccessToken -c ~/.hyperion 1649
```

### Windows, macOS

Download a Windows or macOS installation package  created during the latest PR build.
The artifacts can be found under the Pull Request itself.

## Nightly Builds

Hyperion's project [package repository page](https://releases.hyperion-project.org/) provides you with installation instructions at your finger tip.
Just select "Nightly Builds" to get the respective instructions.

::: warning
You would need to uninstall an existing installation first.
:::
