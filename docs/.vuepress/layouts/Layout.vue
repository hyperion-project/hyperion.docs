<template>
    <div>
        <ParentLayout/>
    </div>
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