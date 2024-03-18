<template>
  <ParentLayout>
    <template #page>
      <div v-bind:style="[!isMobile ? 'padding-left: var(--sidebar-width)' : '' ]" class="not-found">
          <img v-if="isDarkMode" :src="$withBase(themeData.notFoundDark)">
          <img v-else :src="$withBase(themeData.notFound)">
      </div>
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
  import { useThemeData } from "@vuepress/plugin-theme-data/client"
  import { DeviceType, useUpdateDeviceStatus } from '@vuepress/theme-default/lib/client/composables/index.js'
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const themeData: any = useThemeData();
  const isDarkMode = ref(false);
  const isMobile = ref(false);

  useUpdateDeviceStatus(DeviceType.MOBILE, (width: number): void => {
    if (window.innerWidth < width) {
      isMobile.value = true 
    } else {
      isMobile.value = false
    }
  });

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