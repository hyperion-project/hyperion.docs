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
