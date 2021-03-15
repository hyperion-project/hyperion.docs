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
    beforeMount() {
      this.logo =
        window.localStorage.getItem('vuepress-isDark') === 'yes'
          ? this.$site.themeConfig.darkLogo
          : this.$site.themeConfig.logo;
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
