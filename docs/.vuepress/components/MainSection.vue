<template>
  <RouterLink
    :to="to"
    class="no-decoration"
  >
    <div
      :class="[baseClass,computedContainerClass]"
      style="width:200px; height:180px; margin:10px; padding:5px 10px"
    >
        <div style="width:100%; margin-top:1rem;">
          <account-edit-icon v-if="icon === 'user'" :size="62" />
          <auto-fix-icon v-else-if="icon === 'effects'" :size="62" />
          <code-json-icon v-else-if="icon === 'json'" :size="62" />
        </div>

        <div style="width:100%">
          <h3>{{title}}</h3>
        </div>

        <div class="sub-text flex flex-center">
          <p>{{text}}</p>
        </div>
    </div>
  </RouterLink>
</template>

<script>
  import { RouterLink } from 'vue-router';
  import AccountEditIcon from "vue-material-design-icons/AccountEdit.vue";
  import AutoFixIcon from "vue-material-design-icons/AutoFix.vue";
  import CodeJsonIcon from "vue-material-design-icons/CodeJson.vue";

  export default {
    props: ["title", "text", "to", "icon", "disabled"],
    components: { AccountEditIcon, AutoFixIcon, CodeJsonIcon },
    data: () => ({
      baseClass: "card text-center cursor-pointer dark"
    }),

    computed: {
      computedContainerClass() {
        return this.disabled == "" ? "main-section-disabled" : "";
      }
    }
  }
</script>

<style lang="scss" scoped>
  h3 {
    padding: 0 !important;
    margin: 0 !important;
  }

  div.sub-text.flex.flex-center p {
    margin-top: 0;
    margin-bottom: 0;
  }
</style>
