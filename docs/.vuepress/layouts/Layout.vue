<template>
  <footer>
    <ParentLayout>
      <template #page-bottom>
        <footer style="text-align:center">
          <p>Released under the MIT License.<br>
          Copyright © 2014-present <a href="https://hyperion-project.org/">Hyperion Project</a></p>
        </footer>
      </template>
    </ParentLayout>
  </footer>
</template>

<script setup>
  import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';
  import { onBeforeMount } from 'vue';

  onBeforeMount(() => {
    const browserLang = (window.navigator ? (window.navigator.language  || window.navigator.systemLanguage  || window.navigator.userLanguage) : "ru").toLowerCase().substr(0, 2);
    if (browserLang == 'de' && window.location.pathname == '/' && document.referrer.indexOf(window.location.origin) < 0) {
      window.location.pathname = '/de/'
    }
  });
</script>