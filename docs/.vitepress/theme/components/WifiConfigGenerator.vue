<template>
  <div class="wifi-config-generator">
    <h2>WiFi Configuration Generator</h2>
    <p>Generate a customized WiFi configuration for your HyperBian system.</p>
    
    <form @submit.prevent="generateConfig" class="config-form">
      <div class="form-group">
        <label for="ssid">SSID (Network Name):</label>
        <input 
          type="text" 
          id="ssid" 
          v-model="ssid" 
          placeholder="Enter your WiFi network name"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="password">Password:</label>
        <div class="password-wrapper">
          <input 
            :type="showPassword ? 'text' : 'password'" 
            id="password" 
            v-model="password" 
            placeholder="Enter your WiFi password"
            required
          />
          <span @click="togglePasswordVisibility" class="password-toggle-icon">
            <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </span>
        </div>
      </div>
      
      <div class="form-group">
        <label for="country">Country Code:</label>
        <input 
          type="text" 
          id="country" 
          v-model="country" 
          placeholder="e.g., DE, US, GB"
          pattern="[A-Z]{2}"
          title="Two uppercase letters (e.g., DE, US, GB)"
          maxlength="2"
          required
        />
      </div>
      
      <button type="submit" class="generate-btn">Save WiFi Config</button>
    </form>
    
  </div>
</template>

<script setup>
import { ref } from 'vue'

const ssid = ref('')
const password = ref('')
const country = ref('DE')
const showPassword = ref(false)

const togglePasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

const configTemplate = `####################################################################################
## Configure your initial HyperBian WiFi connectivity to your needs below.
## Uncomment and edit the relevant sections as needed.
##
## If you have additional needs refer to the cloud-init documentation 
## and the netplan reference for full details:
##
## https://netplan.io/reference
## https://cloudinit.readthedocs.io/en/latest/topics/network-config.html
## https://cloudinit.readthedocs.io/en/latest/topics/network-config-format-v2.html
####################################################################################

network:
  version: 2 
  wifis:
    wlan0:
      dhcp4: true
      optional: true
      access-points:
        "SSID":
          password: "PASSWORD"
      regulatory-domain: COUNTRY`

const generateConfig = () => {
  // Escape special characters for YAML
  const escape = (str) => str.replace(/\\/g, '\\\\').replace(/"/g, '\\"');

  // Replace placeholders with user input (escaped for YAML)  
  const config = configTemplate
    .replace('"SSID"', `"${escape(ssid.value)}"`)
    .replace('"PASSWORD"', `"${escape(password.value)}"`)
    .replace('COUNTRY', country.value.toUpperCase());

  const blob = new Blob([config], { type: 'application/octet-stream' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'network-config';
  link.click();
  URL.revokeObjectURL(link.href);
};

</script>

<style scoped>
.wifi-config-generator {
  max-width: 800px;
  margin: 0;
  padding: 0;
}

.wifi-config-generator h2 {
  margin-top: 0;
  margin-bottom: 10px;
}

.wifi-config-generator p {
  margin-bottom: 20px;
  color: var(--vp-c-text-2);
}

.password-wrapper {
  position: relative;
}

.password-toggle-icon {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--vp-c-text-2);
}

.config-form {
  background: var(--vp-c-bg-soft);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
  color: var(--vp-c-text-1);
}

.form-group input {
  width: 100%;
  padding: 10px;
  padding-right: 40px; /* Make space for the icon */
  border: 1px solid var(--vp-c-divider);
  border-radius: 4px;
  font-size: 14px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  box-sizing: border-box;
}

.form-group input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
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
  background: var(--vp-c-brand-2);
}

.config-output {
  margin-top: 30px;
}

.config-output h3 {
  margin-bottom: 10px;
}

.instruction {
  margin-bottom: 15px;
  padding: 10px;
  background: var(--vp-c-tip-soft);
  border-left: 4px solid var(--vp-c-tip-1);
  border-radius: 4px;
}

.instruction code {
  background: var(--vp-c-bg);
  padding: 2px 6px;
  border-radius: 3px;
  font-family: var(--vp-font-family-mono);
}

.config-content {
  background: var(--vp-c-bg-soft);
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 0;
  overflow: hidden;
  margin-bottom: 15px;
}

.config-content pre {
  margin: 0;
  padding: 20px;
  overflow-x: auto;
  background: transparent;
}

.config-content code {
  font-family: var(--vp-font-family-mono);
  font-size: 13px;
  line-height: 1.6;
  color: var(--vp-c-text-1);
}

.copy-btn {
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  border: 1px solid var(--vp-c-divider);
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s;
}

.copy-btn:hover {
  background: var(--vp-c-bg-alt);
  border-color: var(--vp-c-brand-1);
}
</style>
