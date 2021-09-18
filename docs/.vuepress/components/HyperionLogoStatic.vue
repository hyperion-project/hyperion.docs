<template>
  <img v-if="lightMode._light" :src="$withBase(this.$site.themeConfig.logoLightStatic)" class="logo">
  <img v-else :src="$withBase(this.$site.themeConfig.logoDarkStatic)" class="logo">
</template>

<script>
  import LightMode from '../theme/util/light-mode';

  export default {
    data: () => ({
      lightMode: null
    }),

    mounted() {
      this.lightMode.init();
    },

    created() {
      this.lightMode = new LightMode();
    }
  }
</script>
