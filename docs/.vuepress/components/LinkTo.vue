<template>
  <a v-if="isExternal" :href="to" target="_blank" rel="noopener"><slot /></a>
  <router-link v-else v-bind="$props"><slot /></router-link>
</template>

<script>
import { computed } from "vue";
import { RouterLink } from "vue-router";
export default {
  name: 'LinkTo',
  props: {
    ...RouterLink.props,
  },
  setup(props) {
    const isExternal = computed(() => typeof props.to === "string" && props.to.startsWith("http"));
    return { isExternal };
  },
};
</script>