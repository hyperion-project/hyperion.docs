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
      let isLight = window.localStorage.getItem('hyperion_light') === 'on';
      if (isLight) {
        this.logo = this.$site.themeConfig.logoLight;
      } else {
        this.logo = this.$site.themeConfig.logoDark;
      }
    },
    created() {
      this.$root.$on('light-mode', (isLight) =>
        this.logo = isLight === true
          ? this.$site.themeConfig.logoLight
          : this.$site.themeConfig.logoDark);
    }
};
</script>

<style>
</style>
