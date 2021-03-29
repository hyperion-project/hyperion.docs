<template>
  <div v-if="!isMobile" class="theme-toggler" aria-label="Switch theme between light and dark">
    <a @click="lightMode.toggle()">
      <weather-night-icon v-if="lightMode._light" />
      <white-balance-sunny-icon v-else />
    </a>
  </div>
</template>

<script>
  import WhiteBalanceSunnyIcon from "vue-material-design-icons/WhiteBalanceSunny.vue";
  import WeatherNightIcon from "vue-material-design-icons/WeatherNight.vue";
  import LightMode from '../util/light-mode';

  export default {
    components: { WhiteBalanceSunnyIcon, WeatherNightIcon },
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
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 720
      }
    },

    created() {
      this.lightMode = new LightMode();
      this.lightMode.init();
    }
  }
</script>

<style scoped>
  div {
    margin-right: 1rem;
    padding-top: 6px;
  }
  a {
    cursor: pointer;
    color: inherit;
  }
</style>
