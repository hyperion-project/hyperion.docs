# Home Assistant

A list of [Home Assistant](https://www.home-assistant.io) lights can currently be mapped to **one** layout area only.
To control another capture area, an additional instance is required.

## Configuration

### In Home Assistant

0. Create a **Long-Lived Access Token** in Home Assistant.

::: tip
Long-lived access tokens can be created using the **"Long-Lived Access Tokens"** section at the bottom of a user's Home Assistant profile page.
:::

### In Hyperion

1. Select **Controller Type**: `homeassistant` 
2. Hyperion will attempt to automatically detect your Home Assistant server. If it is not found, provide a custom hostname or IP address.
3. Paste the Long-Lived Access Token generated earlier into the **Authorization Token** field.
4. Select your Home Assistant light(s) from the list.
5. Use the **Identify** function to verify that the selected light responds. 
6. Set the LED position in the layout using the wizard.
7. Click **Save**.

::: tip
It is recommended to set the *latch time* to ensure a delay between updates.
 
This setup is not designed to run at high frame rates and should only be used for auxiliary or ambient lights — not your main lighting setup.
:::

