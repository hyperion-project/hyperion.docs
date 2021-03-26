<template>
  <div v-if="!isMobile" class="theme-toggler" aria-label="Switch theme between light and dark">
    <a @click="toggle">
      <weather-night-icon v-if="isLight" />
      <white-balance-sunny-icon v-if="!isLight" />
    </a>
  </div>
</template>

<script>
  import WhiteBalanceSunnyIcon from "vue-material-design-icons/WhiteBalanceSunny.vue";
  import WeatherNightIcon from "vue-material-design-icons/WeatherNight.vue";

  export default {
    components: { WhiteBalanceSunnyIcon, WeatherNightIcon },
    data: () => ({
      isMobile: false,
      isLight: false
    }),

    beforeDestroy () {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', this.onResize, { passive: true })
      }
    },

    mounted() {
      this.onResize();
      window.addEventListener('resize', this.onResize, { passive: true });
      this.isLight = window.localStorage.getItem('hyperion_light') === 'on';
      if (!this.isLight) {
        document.getElementsByTagName('html')[0].classList.add('dark');
      }
    },

    methods: {
      toggle() {
        this.isLight = !this.isLight;
        window.localStorage.setItem('hyperion_light', this.isLight ? 'on' : 'off');
        this.$root.$emit('light-mode', this.isLight);
        document.getElementsByTagName('html')[0].classList[this.isLight ? 'remove' : 'add']('dark');
      },

      onResize () {
        this.isMobile = window.innerWidth < 720
      }
    }
  }
</script>

<style scoped>
  div {
    margin-right: 1.5rem;
    padding-top: 6px;
  }
  a {
    cursor: pointer;
    color: inherit;
  }
</style>

