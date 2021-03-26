<template>
  <nav
    v-if="userLinks.length || repoLink"
    class="nav-links"
  >
    <!-- user links -->
    <div
      v-for="item in userLinks"
      :key="item.link"
      class="nav-item"
    >
      <DropdownLink
        v-if="item.type === 'links'"
        :item="item"
      />
      <NavLink
        v-else
        :item="item"
      />
    </div>

    <!-- repo link -->
    <a
      v-if="repoLink"
      :href="repoLink"
      class="repo-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ repoLabel }}
      <OutboundLink />
    </a>

    <!-- Dark Mode -->
    <a
      v-if="isMobile"
      @click="toggle"
      class="repo-link"
      :title="repoLabel"
      :aria-label="repoLabel"
    >
      <weather-night-icon v-if="isLight" />
      <white-balance-sunny-icon v-if="!isLight" />
    </a>
  </nav>
</template>

<script>
  import ParentNavLinks from '@parent-theme/components/NavLinks.vue';
  import WhiteBalanceSunnyIcon from "vue-material-design-icons/WhiteBalanceSunny.vue";
  import WeatherNightIcon from "vue-material-design-icons/WeatherNight.vue";

  export default {
    extends: ParentNavLinks,
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
    },

    created() {
      this.$root.$on('light-mode', (isLight) => this.isLight = isLight);
    }
  }
</script>