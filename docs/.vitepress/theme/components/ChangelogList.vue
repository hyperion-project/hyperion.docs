<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import MarkdownItGitHubAlerts from 'markdown-it-github-alerts'
import { data as changelogs } from '../data/changelogs.data.mts'
import Contributors from './Contributors.vue'

import 'markdown-it-github-alerts/styles/github-colors-light.css'
import 'markdown-it-github-alerts/styles/github-colors-dark-media.css'
import 'markdown-it-github-alerts/styles/github-base.css'

const dateFormatter = new Intl.DateTimeFormat('en', {
  dateStyle: 'medium',
})
</script>

<template>
  <div
    v-for="(release, index) of changelogs.filter(release => release.tag_name !== 'nightly')"
    :key="release.tag_name"
  >
    <h2 :id="index === 0 ? 'latest' : release.tag_name">
      <a
        :href="release.html_url"
        target="_blank"
      >
        {{ release.tag_name }}
      </a>
      <Badge v-if="index === 0" type="tip" text="Latest" />
      <a
        class="header-anchor"
        :href="index === 0 ? '#latest' : `#${release.tag_name}`"
      />
    </h2>
    <time :datetime="release.published_at!">
      {{ dateFormatter.format(new Date(release.published_at!)) }}
    </time>
    <div v-html="MarkdownIt().use(MarkdownItGitHubAlerts).render(release.body ?? 'No changelog provided.')" />
    <Contributors
      :body="release.body!"
      :author="release.author.login"
      :tag="release.tag_name"
    />
  </div>
</template>

<style scoped>
h2 {
  margin-bottom: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  > a {
    color: var(--vp-c-brand-1);
  }
}

time {
  font-size: 0.875rem;
  color: var(--vp-c-text-2);
}
</style>
