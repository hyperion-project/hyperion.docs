<template>
  <div class="hyperion_container">
    <img v-if="isDarkMode" :src="$withBase(themeData.hyperionDark)" @click="onClick" class="hyperion_logo" />
    <img v-else :src="$withBase(themeData.hyperion)" @click="onClick" class="hyperion_logo" />
    <span id="hyperion_effect" class="rainbow" style="position:absolute" />
  </div>
</template>

<script setup lang="ts">
  import { useThemeData } from '@vuepress/plugin-theme-data/client';
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const themeData: any = useThemeData();
  const isDarkMode = ref(false);

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
  });

  onBeforeUnmount(() => {
    observer && observer.disconnect();
  });
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
