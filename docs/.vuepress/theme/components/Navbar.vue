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
    </div>
  </header>
</template>

<script>
  import DefaultNavbar from '@vuepress/theme-default/components/Navbar';
  import ThemeToggler from './ThemeToggler';
  export default {
    extends: DefaultNavbar,
    components: { ThemeToggler }
  };
</script>
