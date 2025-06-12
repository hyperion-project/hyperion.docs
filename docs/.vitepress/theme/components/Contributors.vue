<script setup lang="ts">
import { onBeforeMount, computed, ref, Ref, toRefs } from 'vue'
import { Octokit } from '@octokit/rest'
import { Endpoints } from '@octokit/types'

const props = defineProps<{ body?: string; author?: string; tag?: string }>()
const { body, author, tag } = toRefs(props)

const allContributors: Ref<Endpoints['GET /repos/{owner}/{repo}/contributors']['response']['data']> = ref([])
const octokit = new Octokit()

onBeforeMount(async () => {
  if (body.value || author.value || tag.value) return

  let page = 1
  while (true) {
    const { data: pageContributors } = await octokit.repos.listContributors({
      owner: 'hyperion-project',
      repo: 'hyperion.ng',
      per_page: 100,
      page,
    })

    const filterBot = pageContributors.filter(c => !c.login?.includes('[bot]'))
    allContributors.value = [...allContributors.value, ...filterBot]
    if (pageContributors.length < 100) break
    page++
  }
})

const notMentioned = computed(() => {
	return []
})

const nonExistent = ref<string[]>([])

const parsedContributors = computed(() => {
  if (!body.value || !author.value) return []

  const list = [...body.value.matchAll(/@\[?([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,38}[a-zA-Z0-9])?)\]?/g)]
    .filter(match => {
      const start = match.index ?? 0
      const before = body.value[start - 1] || ''
      return !/[a-zA-Z0-9._%+-]/.test(before)
    })
    .map(match => match[1].trim())
  const uncredited = author.value.includes('[bot]')
    ? notMentioned.value
    : [author.value, ...notMentioned.value]

  return [...new Set([...uncredited, ...list])].filter(user => !nonExistent.value.includes(user))
})

const contributors = computed(() => {
  if (body.value || author.value || tag.value) {
    return parsedContributors.value
  } else {
    return allContributors.value.map(c => c.login).filter(Boolean)
  }
})

function addToNonExistent(user: string) {
	if (!nonExistent.value.includes(user)) {
		nonExistent.value.push(user)
	}
}
</script>

<template>
  <div v-if="contributors.length > 0" class="contributors">
    <h3 v-if="body && author && tag">Contributors</h3>
    <ul>
      <li
        v-for="contributor of contributors"
        :key="contributor"
      >
        <a
          :href="`https://github.com/${contributor}`"
          :target="'_blank'"
        >
          <img
            :src="`https://github.com/${contributor}.png`"
            v-tooltip='{
              html: true,
              content: `<b>${contributor}</b>`
            }'
            loading="lazy"
            class="avatar"
            @error="addToNonExistent(contributor)"
          >
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.contributors ul {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: .5rem;
  list-style-type: none;
  padding-left: 0;

  li + li {
    margin-top: 0;
  }
}

.contributors .avatar {
  width: 2rem;
  height: 2rem;
  @media (min-width: 960px) {
    width: 3rem;
    height: 3rem;
  }
  border-radius: 9999px;
  transition: all ease .3s;
  &:hover {
    box-shadow: 0 0 0 3px var(--vp-c-bg), 0 0 0 5px var(--vp-c-text-1);
  }
}
</style>