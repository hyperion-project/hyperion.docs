<!-- Idea from: https://github.com/MitanOmar/timed-docs/blob/main/components/contributors.vue -->

<template>
  <div>
    <div class="contributors-container">
      <a
        v-for="{ login, avatar_url, html_url } of data.contributors"
        :href="html_url"
        :target="'_blank'"
      >
        <img
          :src="avatar_url"
          v-tooltip='{
            html: true,
            content: `<b>${login}</b>`
          }'
          class="contributor-avatar"
        >
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';

interface GithubUser {
  login: string;
  avatar_url: string;
  html_url: string;
  type: string;
}

const data = reactive({
  contributors: [] as GithubUser[],
});

onMounted(async () => {
  try {
    const pages = [1, 2];
    const responsesNG = await Promise.all(
      pages.map(page => fetch(`https://api.github.com/repos/hyperion-project/hyperion.ng/contributors?per_page=100&page=${page}`))
    );

    const responseDOCS = await fetch('https://api.github.com/repos/hyperion-project/hyperion.docs/contributors?per_page=100');

    const users: GithubUser[] = [];
    for (const response of responsesNG) {
      const data = await response.json();
      users.push(...data);
    }

    const data2 = await responseDOCS.json();
    users.push(...data2);

    data.contributors = removeDuplicatedUsers(users);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
});

const removeDuplicatedUsers = (users: GithubUser[]): GithubUser[] => {
  const uniqueUsers: GithubUser[] = [];
  const userMap: Map<string, boolean> = new Map();

  for (const user of users) {
    if (!userMap.has(user.login)) {
      userMap.set(user.login, true);
      uniqueUsers.push(user);
    }
  }

  return uniqueUsers;
};
</script>

<style>
.contributors-container {
  display: flex;
  flex-wrap: wrap;
  grid-gap: .8rem;
  gap: .8rem;
}

.contributor-avatar {
  width: 3rem;
  height: 3rem;
  border-radius: 9999px;
  transition: all ease .3s;
  &:hover {
    box-shadow: 0 0 0 3px var(--vp-c-bg), 0 0 0 5px var(--vp-c-text-1);
  }
}
</style>