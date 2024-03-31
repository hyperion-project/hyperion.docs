<!-- Idea from: https://github.com/radix-vue/radix-vue/blob/main/docs/.vitepress/components/Annoucement.vue -->

<template>
  <a
    v-if="frontmatter.hero.prelink && newVersionAvailable"
    :href="frontmatter.hero.prelink.link"
    :target="frontmatter.hero.prelink.target"
    class="annoucement"
  >
    {{ frontmatter.hero.prelink.title }}
  </a>
</template>

<script setup lang="ts">
import { useData } from 'vitepress';
import { onMounted, ref } from 'vue';
import moment from 'moment';

const { frontmatter } = useData();
const newVersionAvailable = ref<boolean>(false);

async function initialize() {
  const latestReleaseInfo = await fetchLatestReleaseInfo();
  if (!latestReleaseInfo) {
    return;
  }

  var publishedDate = latestReleaseInfo.published_at;
  if(typeof publishedDate !== 'undefined') {
    var publishedSince = moment().diff(moment(publishedDate), 'days');
    if(publishedSince <= 14) {
      newVersionAvailable.value = true;
    }
    console.log(publishedSince);
  }
}

onMounted(() => {
  initialize();
});

function fetchLatestReleaseInfo() {
  return new Promise((resolve, reject) => {
    fetch('https://api.github.com/repos/hyperion-project/hyperion.ng/releases/latest', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
      })
      .then(response => resolve(response))
      .catch(error => reject(error));
  });
};

	// const res = fetch('https://api.github.com/repos/hyperion-project/hyperion.ng/releases/lates', {
	// 	method: 'GET',
	// });
  // console.log(res.status);
  // .then(res => res.json())
	// .then(res => {
  //   try {
  //     console.log(res.status);
  //     if(res.length == 0) {
  //       return;
  //     }
  //     var latestReleaseDate = res.published_at;
  //     if(typeof latestReleaseDate !== 'undefined') {
  //       console.log(moment().diff(moment(latestReleaseDate), 'days'));
  //       // if (skipCherryPickVersion.value < releasesCherryPick.value[0].tag_name) {
  //       // 	newVersionAvailable.value = true;
  //     }
  //   } catch {
  //     newVersionAvailable.value = false;
  //   }
  // });
</script>

<style>
.annoucement {
  display: inline-flex;
  align-items: center;
  font-weight: 600;
  padding: .25rem 1rem .25rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--vp-sidebar-bg-color);
}
</style>
