<template>
  <div>
    <ParentLayout/>
    <div class="not-found">
      <img :src="$withBase(logo)"><br>
    </div>
  </div>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue';
  export default {
    components: {
      ParentLayout,
    },
    name: "NotFound",
    data() {
      return {
        logo: ''
      };
    },
    mounted() {
      let isDark = window.localStorage.getItem('hyperion_dark') === 'on';
      if (isDark) {
        this.logo = this.$site.themeConfig.notFoundDark;
      } else {
        this.logo = this.$site.themeConfig.notFoundLight;
      }
    },
    created() {
      this.$root.$on('dark-mode', (isDark) =>
        this.logo = isDark === true
          ? this.$site.themeConfig.notFoundDark
          : this.$site.themeConfig.notFoundLight);
    }
};
</script>

<style scoped>
  .not-found {
  display: flex;
  justify-content: center;
  }

  .not-found img {
  width: 40%;
  height: auto;
  }
</style>
