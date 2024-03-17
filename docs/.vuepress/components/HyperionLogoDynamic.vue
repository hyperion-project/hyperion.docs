<template>
  <div class="hyperion_container">
    <span id="hyperion_effect" class="rainbow" style="position:absolute" />
    <img v-if="!isDarkMode" :src="$withBase(themeData.logo_Dynamic)" @click="onClick" class="hyperion_logo">
    <img v-else :src="$withBase(themeData.logoDark_Dynamic)" @click="onClick" class="hyperion_logo">
    <!-- <span id="hyperion_effect" class="rainbow" style="position:absolute" /> -->
  </div>
</template>

<script setup lang="ts">
import { useThemeData } from '@vuepress/plugin-theme-data/client';

import { onBeforeUnmount, onMounted, ref } from 'vue';

const themeData: any = useThemeData();
const isDarkMode = ref(false);
const isMobile = ref(false);

const handleResize = () => {
  isMobile.value = window.innerWidth < 720;
};

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

let observer: MutationObserver | null = null;

onMounted(() => {
  const html = document.querySelector('html') as HTMLElement;
  isDarkMode.value = html.classList.contains('dark');

  observer = new MutationObserver(() => {
    isDarkMode.value = html.classList.contains("dark");
  });

  observer.observe(html, {
    attributeFilter: ["class"],
    attributes: true,
  });

  handleResize();
  window.addEventListener('resize', handleResize, { passive: true });
});

onBeforeUnmount(() => {
  observer && observer.disconnect();
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});
</script>

<style lang="scss" scoped>
  div.hyperion_container {
    position:relative;
    // hyperion logo size
    max-width:586px;
    max-height: 90px;
    margin:0 auto;
  }

  img.hyperion_logo {
    position:relative;
    // z-index:9;
  }
</style>
