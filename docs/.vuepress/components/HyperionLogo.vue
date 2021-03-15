<template>
  <img :src="$withBase(logo)" alt="Hyperion Logo" class="logo">
</template>

<script>
export default {
    data() {
      return {
        logo: '/hyperion-logo.png'
      };
    },
    mounted() {
      if(window.localStorage.getItem('vuepress-isDark') !== null) {
        this.logo = this.$site.themeConfig.darkLogo;
      }
    },
    created() {
      this.$root.$on('dark-mode', (isDark) =>
        this.logo = isDark === true
          ? this.$site.themeConfig.darkLogo
          : this.$site.themeConfig.logo);
    }
};
</script>

<style>
</style>
