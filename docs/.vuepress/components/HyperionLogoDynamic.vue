<template>
    <img v-if="!isDarkMode && !isMobile" :src="themeData.logo_Dynamic" @click="onClick" class="logo" style="position:relative;z-index:100;">
    <img v-else-if="isDarkMode && !isMobile" :src="themeData.logoDark_Dynamic" @click="onClick" class="logo" style="position:relative;z-index:100;">
    <img v-else-if="!isDarkMode && isMobile" :src="themeData.logo" class="logo" style="position:relative">
    <img v-else :src="themeData.logoDark" class="logo" style="position:relative">
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
  var animation = document.getElementById('animation');
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
