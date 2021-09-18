<template>
  <img v-if="lightMode._light && !isMobile" :src="$withBase(this.$site.themeConfig.logoLightDynamic)" @click="onClick" class="logo" style="position:relative;z-index:1">
  <img v-else-if="!lightMode._light && !isMobile" :src="$withBase(this.$site.themeConfig.logoDarkDynamic)" @click="onClick" class="logo" style="position:relative;z-index:1">
  <img v-else-if="lightMode._light && isMobile" :src="$withBase(this.$site.themeConfig.logoLightStatic)">
  <img v-else :src="$withBase(this.$site.themeConfig.logoDarkStatic)">
</template>

<script>
  import LightMode from '../theme/util/light-mode';

  export default {
    data: () => ({
      lightMode: null,
      isMobile: false
    }),
    
    beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, { passive: true })
      }
    },

    mounted() {
      this.onResize();
      window.addEventListener('resize', this.onResize, { passive: true });
      this.lightMode.init();
    },

    methods: {
      onClick: () => {
        if(typeof(element) === 'undefined')
        var animation = document.getElementById('animation');
        if(animation) {
          if(animation.getAttribute("class") == "rainbow") {
            document.getElementById('animation').className = "kitt";
          } else if (animation.getAttribute("class") == "kitt") {
             document.getElementById('animation').className = "police-solid";
          } else {
            document.getElementById('animation').className = "rainbow";
          }
        }
      },
      onResize () {
        this.isMobile = window.innerWidth < 720
      }
    },

    created() {
      this.lightMode = new LightMode();
    }
  }
</script>
