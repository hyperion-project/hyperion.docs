<template>
  <nav v-if="userLinks.length || repoLink" class="nav-links">
    <!-- user links -->
    <div v-for="item in userLinks" :key="item.link" class="nav-item">
      <DropdownLink v-if="item.type === 'links'" :item="item" />
      <NavLink v-else :item="item" />
    </div>

    <!-- repo link -->
    <a v-if="repoLink" :href="repoLink" class="repo-link" target="_blank" rel="noopener noreferrer">
      {{ repoLabel }}
      <OutboundLink />
    </a>

    <!-- Dark Mode only on mobile device -->
    <a v-if="isMobile" @click="lightMode.toggle()" class="repo-link">
	  {{themeText}}&nbsp;
      <weather-night-icon v-if="lightMode._light" />
      <white-balance-sunny-icon v-else />
    </a>

    <!-- Language Icon only on mobile device -->
	  <a v-if="isMobile" class="repo-link">
		<div v-for="item in languages" :key="item.link" class="nav-item" style="padding:0">
		  <DropdownLink :item="item" />
		</div>
	  </a>
  </nav>
</template>

<script>
  import ParentNavLinks from '@parent-theme/components/NavLinks.vue';
  import WhiteBalanceSunnyIcon from "vue-material-design-icons/WhiteBalanceSunny.vue";
  import WeatherNightIcon from "vue-material-design-icons/WeatherNight.vue";
  import DropdownLink from '@theme/components/DropdownLink.vue';
  import { resolveNavLinkItem } from '@vuepress/theme-default/util';
  import LightMode from '../util/light-mode';

  export default {
    extends: ParentNavLinks,
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
        this.isMobile = window.innerWidth < 720;
        this.lightMode.init();
      }
    },

    created() {
      this.lightMode = new LightMode();
    },
  
    computed: {
      themeText() {
        return this.lightMode._light ? 'Dark Mode' : 'Light Mode';
      },

      nav () {
        return this.$themeLocaleConfig.nav || this.$site.themeConfig.nav || []
      },

      lang () {
        const { locales } = this.$site
        if (locales && Object.keys(locales).length > 1) {
          const currentLink = this.$page.path
          const routes = this.$router.options.routes
          const themeLocales = this.$site.themeConfig.locales || {}
          const languageDropdown = {
            items: Object.keys(locales).map(path => {
              const locale = locales[path]
              const text = themeLocales[path] && themeLocales[path].label || locale.lang
              let link
              // Stay on the current page
              if (locale.lang === this.$lang) {
                link = currentLink
              } else {
                // Try to stay on the same page
                link = currentLink.replace(this.$localeConfig.path, path)
                // fallback to homepage
                if (!routes.some(route => route.path === link)) {
                  link = path
                }
              }
              return { text, link }
            })
          }
          return [languageDropdown]
        }
      },

      languages () {
        return (this.lang || []).map(link => {
          return Object.assign(resolveNavLinkItem(link), {
            items: (link.items || []).map(resolveNavLinkItem)
          })
        })
      }
    }
  }
</script>

<style lang="stylus" scoped>

  .sidebar .nav-links .nav-item, .sidebar .nav-links .repo-link
    display flex
    align-items center

</style>