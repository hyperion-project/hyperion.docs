---
sidebar: false
---

<div style="text-align:center">
  <HyperionLogoDynamic />
  <br>
  Welcome in the colorful world of Hyperion. Please choose the documentation you want to view.
</div>

<div class="flex flex-center no-decoration">
  <MainSection title="User" text="Installation, configuration and advanced informations" to="/user/" icon="user" />
  <MainSection title="Effects" text="Learn how to create an effect" to="/effects/" icon="effects" />
  <MainSection title="JSON API" text="Learn how to interact with the API" to="/json/" icon="json" />
</div>

::: tip Tip:
You can select another translation at the top{{ isMobile }}.
:::

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
const isMobile = ref('');
const handleResize = () => {
  if (window.innerWidth < 720) {
    isMobile.value = ' left menu';
  } else {
    isMobile.value = '';
  }
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize, { passive: true });
});

onBeforeUnmount(() => {
  if (typeof window !== 'undefined') {
    window.removeEventListener('resize', handleResize);
  }
});
</script>