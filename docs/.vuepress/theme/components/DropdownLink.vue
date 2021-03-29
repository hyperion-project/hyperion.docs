<template>
  <div class="dropdown-wrapper" :class="{ open }">
    <button class="dropdown-title" type="button" :aria-label="dropdownAriaLabel" @click="handleDropdown">
      <web-icon />
    </button>
    <button class="mobile-dropdown-title" type="button" :aria-label="dropdownAriaLabel" @click="setOpen(!open)">
      <web-icon />
    </button>

    <DropdownTransition>
      <ul
        v-show="open"
        class="nav-dropdown"
      >
        <li
          v-for="(subItem, index) in item.items"
          :key="subItem.link || index"
          class="dropdown-item"
        >
          <h4 v-if="subItem.type === 'links'">
            {{ subItem.text }}
          </h4>

          <ul
            v-if="subItem.type === 'links'"
            class="dropdown-subitem-wrapper"
          >
            <li
              v-for="childSubItem in subItem.items"
              :key="childSubItem.link"
              class="dropdown-subitem"
            >
              <NavLink
                :item="childSubItem"
                @focusout="
                  isLastItemOfArray(childSubItem, subItem.items) &&
                    isLastItemOfArray(subItem, item.items) &&
                    setOpen(false)
                "
              />
            </li>
          </ul>

          <NavLink
            v-else
            :item="subItem"
            @focusout="isLastItemOfArray(subItem, item.items) && setOpen(false)"
          />
        </li>
      </ul>
    </DropdownTransition>
  </div>
</template>

<script>
  import DefaultDropdownLink from '@vuepress/theme-default/components/DropdownLink';
  import WebIcon from "vue-material-design-icons/Web.vue";

  export default {
    extends: DefaultDropdownLink,
    components: { WebIcon },
  }
</script>
