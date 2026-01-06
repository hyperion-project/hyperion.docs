<template>
  <div class="system-config-generator">
    <h2>{{ texts.title }}</h2>
    <p>{{ texts.description }}</p>

    <form @submit.prevent="generateConfig" class="config-form">
      <div class="form-group">
        <label for="username">{{ texts.usernameLabel }}:</label>
        <input type="text" id="username" v-model="config.username" :placeholder="texts.usernamePlaceholder">
      </div>

      <div class="form-group">
        <label for="password">{{ texts.passwordLabel }}:</label>
        <div class="password-wrapper">
          <input 
            :type="showPassword ? 'text' : 'password'" 
            id="password" 
            v-model="config.password" 
            :placeholder="texts.passwordPlaceholder"
          />
          <span @click="togglePasswordVisibility" class="password-toggle-icon">
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </span>
        </div>
      </div>

      <div class="form-group">
        <label for="hostname">{{ texts.hostnameLabel }}:</label>
        <input type="text" id="hostname" v-model="config.hostname" :placeholder="texts.hostnamePlaceholder">
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="use_timezone" v-model="useTimezone">
        <label for="use_timezone">{{ texts.setTimezoneLabel }}</label>
        <div v-if="useTimezone" class="sub-form-group">
          <select id="timezone" v-model="config.timezone">
            <option v-for="tz in timezones" :key="tz" :value="tz">
              {{ tz }}
            </option>
          </select>
        </div>
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="use_locale" v-model="useLocale">
        <label for="use_locale">{{ texts.setLocaleLabel }}</label>
        <div v-if="useLocale" class="sub-form-group">
          <select id="locale" v-model="config.locale">
            <option v-for="loc in locales" :key="loc" :value="loc">
              {{ loc }}
            </option>
          </select>
        </div>
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="use_keyboard" v-model="useKeyboard">
        <label for="use_keyboard">{{ texts.setKeyboardLayoutLabel }}</label>
        <div v-if="useKeyboard" class="sub-form-group">
          <select id="keyboard_layout" v-model="config.keyboard_layout">
            <option v-for="layout in keyboardLayouts" :key="layout" :value="layout">
              {{ layout }}
            </option>
          </select>
        </div>
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="enable_spi" v-model="config.enable_spi">
        <label for="enable_spi">{{ texts.enableSpiLabel }}</label>
      </div>

      <div class="form-group checkbox-group">
        <input type="checkbox" id="enable_ssh" v-model="config.enable_ssh">
        <label for="enable_ssh">{{ texts.enableSshLabel }}</label>
      </div>      

      <div>
      <button type="submit" class="generate-btn">{{ texts.buttonText }}</button>
      </div>
    </form>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from 'vue';
import { useData } from 'vitepress';
import { sha512crypt } from 'sha512crypt-node';
import { timezones } from '../data/timezones';
import { locales } from '../data/locales';
import { keyboardLayouts } from '../data/keyboardLayouts';

const { lang } = useData();

const texts = computed(() => {
  if (lang.value.startsWith('de')) {
    return {
      title: 'Systemkonfigurationsgenerator',
      description: 'Erstelle eine angepasste Systemkonfiguration für dein HyperBian-System.',
      usernameLabel: 'Benutzername',
      usernamePlaceholder: 'z.B. hyperion',
      passwordLabel: 'Passwort',
      passwordPlaceholder: 'Gib das Passwort des Benutzers ein',
      hostnameLabel: 'Hostname',
      hostnamePlaceholder: 'z.B. hyperbian',
      setTimezoneLabel: 'Zeitzone festlegen',
      setLocaleLabel: 'Locale festlegen',
      setKeyboardLayoutLabel: 'Tastaturlayout festlegen',
      enableSpiLabel: 'SPI-Schnittstelle aktivieren',
      enableSshLabel: 'SSH-Zugang aktivieren',
      buttonText: 'Konfiguration speichern'
    };
  }
  return {
    title: 'System Configuration Generator',
    description: 'Generate a customized system configuration for your HyperBian system.',
    usernameLabel: 'Username',
    usernamePlaceholder: 'e.g., hyperion',
    passwordLabel: 'Password',
    passwordPlaceholder: "Enter the user's password",
    hostnameLabel: 'Hostname',
    hostnamePlaceholder: 'e.g., hyperbian',
    setTimezoneLabel: 'Set Timezone',
    setLocaleLabel: 'Set Locale',
    setKeyboardLayoutLabel: 'Set Keyboard Layout',
    enableSpiLabel: 'Enable SPI Interface',
    enableSshLabel: 'Enable SSH Access',
    buttonText: 'Save Configuration'
  };
});

const config = reactive({
  username: 'hyperion',
  password: 'ambientlight',
  enable_ssh: false,
  hostname: 'hyperbian',
  timezone: 'Europe/Berlin',
  locale: 'de_DE.UTF-8',
  keyboard_layout: 'de',
  enable_spi: true,
});

const useTimezone = ref(false);
const useLocale = ref(false);
const useKeyboard = ref(false);
const showPassword = ref(true);

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const generateConfig = () => {
  const escape = (str) => str.replaceAll('\\', '\\\\').replaceAll('"', String.raw`\"`);
  const passwdPassword = sha512crypt(config.password, Math.random().toString(36).substring(2, 10));

  let template = `## template: jinja
#cloud-config

# This is the user-data configuration file for cloud-init. By default this sets
# up an initial user called "ubuntu" with password "ubuntu", which must be
# changed at first login. However, many additional actions can be initiated on
# first boot from this file. The cloud-init documentation has more details:
#
# https://cloudinit.readthedocs.io/
#
# Please note that the YAML format employed by this file is sensitive to
# differences in whitespace; if you are editing this file in an editor (like
# Notepad) which uses literal tabs, take care to only use spaces for
# indentation. See the following link for more details:
#
# https://en.wikipedia.org/wiki/YAML
#

##################################################################
## Configure your initial HyperBian system to your needs below ###
## Uncomment and edit the relevant sections as needed.         ###
##################################################################

# 1. Define the Hyperion user name (optional)
{% set HYPERION_USER = "${escape(config.username)}" %}

# 2. Define, if ssh access should be enabled (optional)
{% set ENABLE_SSH = ${config.enable_ssh} %}

# 3. Set the system's hostname (optional)
hostname: "${escape(config.hostname)}"
`;

  if (useTimezone.value) {
    template += `
# 4. Set the timezone for this instance (optional)
# the value of 'timezone' must exist in /usr/share/zoneinfo
timezone: "${escape(config.timezone)}"
`;
  } else {
    template += `
# 4. Set the timezone for this instance (optional)
# the value of 'timezone' must exist in /usr/share/zoneinfo

## Sample for Berlin timezone
#timezone: Europe/Berlin
`;
  }

  if (useLocale.value) {
    template += `
# 5. Set the locale to a given locale; default: en_GB.UTF-8 (optional)
locale: "${escape(config.locale)}"
`;
  } else {
    template += `
# 5. Set the locale to a given locale; default: en_GB.UTF-8 (optional)

## Sample for German locale
#locale: de_DE.UTF-8
`;
  }

  if (useKeyboard.value) {
    template += `
# 6. Set up the keyboard layout (optional)
# See localectl(1), in particular the various list-x11-* sub-commands, 
# to determine the available models, layouts, variants, and options
keyboard:
  layout: "${escape(config.keyboard_layout)}"
`;
  } else {
    template += `
# 6. Set up the keyboard layout (optional)
# See localectl(1), in particular the various list-x11-* sub-commands, 
# to determine the available models, layouts, variants, and options

## Sample for German keyboard layout
#keyboard:
#  layout: de
`;
  }

  template += `
# 7. Enable the SPI interface (optional)
rpi:
  interfaces:
    spi: ${config.enable_spi}

###############################
### DO NOT CHANGE THE BELOW ###
###############################

users:
- name: {{ HYPERION_USER }}
  gecos: Hyperion user
  groups: users, dialout, sudo, video, audio, gpio, spi, i2c
  sudo: ["ALL=(ALL) NOPASSWD:ALL"]
  lock_passwd: false
  passwd: ${passwdPassword}
  shell: /bin/bash
 
ssh_pwauth: {{ ENABLE_SSH }}

runcmd:
  - |
    echo "Running setup for Hyperion user: {{ HYPERION_USER }}"
    /usr/share/hyperion/scripts/updateHyperionUser.sh -u "{{ HYPERION_USER }}"
    
{% if ENABLE_SSH %}
  - systemctl unmask ssh
  - systemctl enable ssh
  - systemctl start ssh
{% else %}
  - echo "SSH is disabled in config"
{% endif %}
`;
  const blob = new Blob([template.trim()], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'user-data';
  link.click();
  URL.revokeObjectURL(link.href);
};
</script>

<style scoped>
.system-config-generator {
  max-width: 800px;
  margin: 0;
  padding: 0;
}

h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.config-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
}

.form-group label {
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--vp-c-text-1);
}

.form-group input[type="text"],
.form-group input[type="password"],
.form-group select {
  padding: 0.75rem 1rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: border-color 0.25s;
  width: 100%;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.password-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.password-wrapper input {
  padding-right: 2.5rem;
}

.password-toggle-icon {
  position: absolute;
  right: 0.75rem;
  cursor: pointer;
  color: var(--vp-c-text-2);
}

.generate-btn {
  background: var(--vp-c-brand-1);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.generate-btn:hover {
  background-color: var(--vp-c-brand-2);
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
}

.checkbox-group label {
  margin-bottom: 0;
  margin-left: 0.5rem;
}

.sub-form-group {
  margin-top: 0.5rem;
  width: 100%;
}
</style>
