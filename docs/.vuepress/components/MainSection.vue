<template>
  <LinkTo
    :to="to"
    class="no-decoration"
  >
    <div
      :class="[baseClass, backgroundClass]"
      style="height:4.5rem; width:14rem; margin:0.5rem; padding:0.5rem; border-radius:0.375rem; display:flex; flex-wrap: wrap; flex-direction: row-reverse"
    >
      <div style="height: 40%; width:100%; display:flex; flex-wrap: wrap">
        <div style="width: 15%">
          <book-open-blank-variant-outline-icon v-if="icon === 'help'" :size="28" />
          <rocket-launch-icon v-else-if="icon === 'rocket'" :size="28" />
          <auto-fix-icon v-else-if="icon === 'effects'" :size="28" />
          <code-json-icon v-else-if="icon === 'json'" :size="28" />
          <github-icon v-else-if="icon === 'github'" :size="28" />
        </div>

        <div style="width:85%">
          <h3>{{title}}</h3>
        </div>
      </div>

      <div class="sub-text">
        <p>{{text}}</p>
      </div>
    </div>
  </LinkTo>
</template>

<script lang="ts">
  import LinkTo from "./LinkTo.vue";
  import BookOpenBlankVariantOutlineIcon from "vue-material-design-icons/BookOpenBlankVariantOutline.vue"
  import RocketLaunchIcon from "vue-material-design-icons/RocketLaunch.vue"
  import AutoFixIcon from "vue-material-design-icons/AutoFix.vue";
  import CodeJsonIcon from "vue-material-design-icons/CodeJson.vue";
  import GithubIcon from "vue-material-design-icons/Github.vue"

  export default {
    props: {
      title: String,
      text: String,
      to: String,
      icon: String,
      main: String
    },

    components: {
      BookOpenBlankVariantOutlineIcon,
      RocketLaunchIcon,
      GithubIcon,
      AutoFixIcon,
      CodeJsonIcon
    },

    data: () => ({
      baseClass: "card cursor-pointer"
    }),

    computed: {
      backgroundClass() {
        return this.main == "" ? "main_card" : "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    padding: 0 !important;
    margin: 0 !important;
  }

  div.sub-text {
    height:60%;
    width:85%;
    p {
      margin-top: 0;
      margin-bottom: 0;
    }
  }
</style>
