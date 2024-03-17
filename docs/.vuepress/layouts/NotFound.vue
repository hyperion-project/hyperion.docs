<template>
  <ParentLayout>
    <template #sidebar>
      <div/>
    </template>
    <template #page>
      <div class="not-found">
          <img v-if="isDarkMode" :src="$withBase(themeData.notFoundDark)">
          <img v-else :src="$withBase(themeData.notFound)">
      </div>
    </template>
  </ParentLayout>
</template>

<script setup lang="ts">
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
  import { useThemeData } from "@vuepress/plugin-theme-data/client";
  import { onBeforeUnmount, onMounted, ref } from 'vue';

  const themeData: any = useThemeData();
  const isDarkMode = ref(false);
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