<template>
  <header class="navbar">
    <SidebarButton @toggle-sidebar="$emit('toggle-sidebar')"/>
    <router-link :to="$localePath" class="home-link">
      <HyperionLogo />
      <span class="site-name"
          ref="siteName"
          v-if="$siteTitle"
          :class="{ 'can-hide': $site.themeConfig.logo }">
          {{ $siteTitle }}
      </span>
    </router-link>
    <NavLinks class="can-hide"/>
    <div class="links" :style="{'max-width': linksWrapMaxWidth + 'px'}">
      <ThemeToggler/>
      <AlgoliaSearchBox v-if="isAlgoliaSearch" :options="algolia"/>
      <SearchBox />
      <div v-if="isDesktop" class="nav-links">
        <div v-for="item in languages" :key="item.link" class="nav-item">
          <DropdownLink :item="item" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  import DefaultNavbar from '@vuepress/theme-default/components/Navbar';
  import DropdownLink from '@theme/components/DropdownLink.vue';
  import { resolveNavLinkItem } from '@vuepress/theme-default/util';
  import ThemeToggler from './ThemeToggler';

  export default {
    extends: DefaultNavbar,
    components: { ThemeToggler, DropdownLink },
    data: () => ({
      isDesktop: true
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
        this.isDesktop = window.innerWidth >= 720
      }
    },
  
    computed: {
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
  };
</script>

<style lang="stylus">
  .nav-links
    .nav-item
      padding-top 7px
</style>
