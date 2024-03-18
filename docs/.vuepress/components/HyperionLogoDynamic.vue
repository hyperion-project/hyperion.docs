<template>
  <div class="hyperion_container">
    <img v-if="isDarkMode" :src="$withBase(themeData.hyperionDark)" @click="onClick" class="hyperion_logo" />
    <img v-else :src="$withBase(themeData.hyperion)" @click="onClick" class="hyperion_logo" />
    <span id="hyperion_effect" class="rainbow" style="position:absolute" />
  </div>
</template>

<script setup lang="ts">
import { useThemeData } from '@vuepress/plugin-theme-data/client';
import { useDarkMode } from '@vuepress/theme-default/lib/client/composables/index.js'

const themeData: any = useThemeData();
const isDarkMode = useDarkMode()

const onClick = () => {
  var animation = document.getElementById('hyperion_effect');
  if(typeof animation !== 'undefined') {
    if(animation!.getAttribute("class") == "rainbow") {
      animation!.className = "kitt";
    } else if (animation!.getAttribute("class") == "kitt") {
      animation!.className = "police-solid";
    } else {
      animation!.className = "rainbow";
    }
  }
};
</script>

<style lang="scss" scoped>
  div.hyperion_container {
    position:relative;
    // hyperion logo size
    max-width:586px;
    max-height: 90px;
    margin:0 auto;
    margin-bottom: 1.2rem;
  }

  img.hyperion_logo {
    position:relative;
    z-index:9;
  }
</style>
