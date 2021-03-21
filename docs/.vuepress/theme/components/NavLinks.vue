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
      <svg v-if="isLight" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>

      <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    </a>
  </nav>
</template>

<script>
  import ParentNavLinks from '@parent-theme/components/NavLinks.vue'
  import ThemeToggler from './ThemeToggler';
  export default {
    extends: ParentNavLinks,
    components: { ThemeToggler },
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