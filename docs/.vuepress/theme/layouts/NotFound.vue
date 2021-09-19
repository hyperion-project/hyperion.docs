<template>
  <div>
    <ParentLayout/>
    <div class="not-found">
      <img v-if="lightMode._light" :src="$withBase(this.$site.themeConfig.notFoundLight)">
      <img v-else :src="$withBase(this.$site.themeConfig.notFoundDark)">
    </div>
  </div>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue';
  import LightMode from '../util/light-mode';
  export default {
    components: {
      ParentLayout,
    },
    name: "NotFound",
    data: () => ({
      lightMode: null
    }),

    mounted() {
      this.lightMode.init();
    },

    created() {
      this.lightMode = new LightMode();
    }
};
</script>
