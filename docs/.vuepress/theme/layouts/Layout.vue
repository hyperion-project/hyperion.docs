<template>
  <div>
    <ParentLayout/>
  </div>
</template>

<script>
  import ParentLayout from '@parent-theme/layouts/Layout.vue';
  export default {
    components: {
      ParentLayout,
    },
    data() {
      return {
        isDark: false,
      }
    },
    mounted() {
      this.isDark = window.localStorage.getItem('vuepress-isDark') || false;
    },
    created() {
      this.$root.$on('dark-mode', (isDark) => this.isDark = isDark);
    }
  }
</script>

<style>
#app, .navbar, .sidebar, .links,
.home-link img,
img[class*=logo],
div[class*=language-],
.content code,
.language-text code,
.tabs-component-panels, .tabs-component-tabs li,
.tabs-component-panels,
.content__default code,
a.nav-link.router-link-active,
.dropdown-wrapper .dropdown-title,
.dropdown-wrapper .mobile-dropdown-title,
.search-box input,
ul.nav-dropdown,
tr:nth-child(2n),
blockquote,
blockquote, blockquote p {
  -webkit-transition: all .3s ease;
  -moz-transition: all .3s ease;
  transition: all .3s ease;
}
</style>
