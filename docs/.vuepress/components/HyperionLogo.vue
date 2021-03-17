<template>
  <img :src="$withBase(logo)" alt="Hyperion Logo" class="logo">
</template>

<script>
export default {
    data() {
      return {
        logo: ''
      };
    },
    mounted() {
      let isDark = window.localStorage.getItem('hyperion_dark') === 'on';
      if (isDark) {
        this.logo = this.$site.themeConfig.logoDark;
      } else {
        this.logo = this.$site.themeConfig.logoLight;
      }
    },
    created() {
      this.$root.$on('dark-mode', (isDark) =>
        this.logo = isDark === true
          ? this.$site.themeConfig.logoDark
          : this.$site.themeConfig.logoLight);
    }
};
</script>

<style>
</style>
