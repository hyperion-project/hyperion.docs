<template>
  <img v-if="lightMode._light" :src="$withBase(this.$site.themeConfig.logoLight)" class="logo">
  <img v-else :src="$withBase(this.$site.themeConfig.logoDark)" class="logo">
</template>

<script>
  import LightMode from '../theme/util/light-mode';

  export default {
    data: () => ({
      lightMode: null
    }),

    created() {
      this.lightMode = new LightMode();
      this.lightMode.init();
    }
  }
</script>
