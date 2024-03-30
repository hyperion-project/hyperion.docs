<template>
  <DefaultTheme.Layout>
    <template #not-found>
      <div class="not-found">
        <img v-if="isDark" :src="withBase(theme.notFoundDark)">
        <img v-else :src="withBase(theme.notFoundLight)">
      </div>
      <div class="action">
        <a class="link" :href="withBase(site.base)">
          {{ theme.notFound?.linkText }}
        </a>
      </div>
    </template>
  </DefaultTheme.Layout>
</template>

<script setup>
import { withBase, useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { VPImage } from "vitepress/theme"
const { site, theme, isDark } = useData()
</script>

<style>
.not-found {
  display: flex;
  justify-content: center;
  padding-top: var(--vp-nav-height);
  img {
    width: 70% !important;
    min-width: 320px;
    max-width: 800px;
    object-fit: cover !important;
  }
}

.action {
  display: flex;
  justify-content: center;
  .link {
    display: inline-block;
    border: 1px solid var(--vp-c-brand-1) !important;
    border-radius: 16px;
    padding: 3px 16px;
    font-size: 14px;
    font-weight: 500;
    color: var(--vp-c-brand-1);
    transition:
      border-color 0.25s,
      color 0.25s;
  }

  .link:hover {
    border-color: var(--vp-c-brand-2);
    color: var(--vp-c-brand-2);
  }
}
</style>