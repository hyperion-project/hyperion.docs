<script setup lang="ts">
import NavbarBrand from '@theme/NavbarBrand.vue'
import NavbarItems from './NavbarItemsCustom.vue'
import NavbarDropdown from './NavbarDropdownCustom.vue'
import { useRoutePaths } from '@vuepress/helper/client'
import ToggleColorModeButton from '@theme/ToggleColorModeButton.vue'
import ToggleSidebarButton from '@theme/ToggleSidebarButton.vue'
import { computed, ref } from 'vue'
import {
  useRoute,
  useRouteLocale,
  useSiteData,
  useSiteLocaleData,
} from 'vuepress/client'
import {
  DeviceType,
  useThemeData,
  useThemeLocaleData,
  useUpdateDeviceStatus,
} from '@vuepress/theme-default/lib/client/composables/index.js'

/**
 * Get navbar config of select language dropdown
 */
const useNavbarSelectLanguage = (): ComputedRef<ResolvedNavbarItem[]> => {
  const route = useRoute()
  const routePaths = useRoutePaths()
  const routeLocale = useRouteLocale()
  const site = useSiteData()
  const siteLocale = useSiteLocaleData()
  const theme = useThemeData()
  const themeLocaleLang = useThemeLocaleData()

  return computed<ResolvedNavbarItem[]>(() => {
    const localePaths = Object.keys(site.value.locales)
    // do not display language selection dropdown if there is only one language
    if (localePaths.length < 2) {
      return []
    }
    const currentPath = route.path
    const currentFullPath = route.fullPath

    const languageDropdown: ResolvedNavbarItem = {
      text: `${themeLocaleLang.value.selectLanguageText}`,
      ariaLabel: `${
        themeLocaleLang.value.selectLanguageAriaLabel ??
        themeLocaleLang.value.selectLanguageText
      }`,
      children: localePaths.map((targetLocalePath) => {
        // target locale config of this language link
        const targetSiteLocale = site.value.locales?.[targetLocalePath] ?? {}
        const targetThemeLocale = theme.value.locales?.[targetLocalePath] ?? {}
        const targetLang = `${targetSiteLocale.lang}`

        const text = targetThemeLocale.selectLanguageName ?? targetLang

        // if the target language is current language
        // stay at current link
        if (targetLang === siteLocale.value.lang) {
          return {
            text,
            activeMatch: /./,
            link: route.hash ?? '#',
          }
        }

        // if the target language is not current language
        // try to link to the corresponding page of current page
        // or fallback to homepage
        const targetLocalePage = currentPath.replace(
          routeLocale.value,
          targetLocalePath,
        )

        return {
          text,
          // try to keep current hash and params across languages
          link: routePaths.value.some((item) => item === targetLocalePage)
            ? currentFullPath.replace(currentPath, targetLocalePage)
            : targetThemeLocale.home ?? targetLocalePath,
        }
      }),
    }

    return [languageDropdown]
  })
}

defineEmits<(e: 'toggle-sidebar') => void>()

defineSlots<{
  before?: (props: Record<never, never>) => any
  after?: (props: Record<never, never>) => any
}>()

const themeLocale = useThemeLocaleData()
const navbarSelectLanguage = useNavbarSelectLanguage()
const languages = computed(() => [ ...navbarSelectLanguage.value ])

const navbar = ref<HTMLElement | null>(null)
const navbarBrand = ref<HTMLElement | null>(null)

const isMobile = ref(false)
const linksWrapperMaxWidth = ref(0)
const linksWrapperStyle = computed(() => {
  if (!linksWrapperMaxWidth.value) {
    return {}
  }
  return {
    maxWidth: linksWrapperMaxWidth.value + 'px',
  }
})

useUpdateDeviceStatus(
  DeviceType.MOBILE,
  (mobileDesktopBreakpoint: number): void => {
    // avoid overlapping of long title and long navbar links
    const navbarHorizontalPadding =
      getCssValue(navbar.value, 'paddingLeft') +
      getCssValue(navbar.value, 'paddingRight')
    if (window.innerWidth < mobileDesktopBreakpoint) {
      linksWrapperMaxWidth.value = 0
      isMobile.value = true
    } else {
      linksWrapperMaxWidth.value =
        navbar.value!.offsetWidth -
        navbarHorizontalPadding -
        (navbarBrand.value?.offsetWidth || 0)
      isMobile.value = false
    }
  },
)

function getCssValue(el: HTMLElement | null, property: string): number {
  // NOTE: Known bug, will return 'auto' if style value is 'auto'
  const val = el?.ownerDocument?.defaultView?.getComputedStyle(el, null)?.[
    property
  ]
  const num = Number.parseInt(val, 10)
  return Number.isNaN(num) ? 0 : num
}

const navbarLabel = computed(() => {
  const themeLocale = useThemeLocaleData()
  return themeLocale.value.navbarLabel ?? 'site navigation'
})
</script>

<template>
  <header ref="navbar" class="navbar">
    <ToggleSidebarButton @toggle="$emit('toggle-sidebar')" />

    <span ref="navbarBrand">
      <NavbarBrand />
    </span>

    <NavbarItems class="can-hide" />

    <div class="navbar-items-wrapper" :style="linksWrapperStyle">
      <slot name="before" />
      <slot name="after" />
      <ToggleColorModeButton v-if="themeLocale.colorModeSwitch" />
      <NavbarSearch />
      <div v-if="!isMobile" class="navbar-items" :aria-label="navbarLabel">
        <div v-for="item in languages" :key="item.text" class="navbar-item">
          <NavbarDropdown
            v-if="'children' in item"
            :item="item"
            :class="isMobile ? 'mobile' : ''"
          />
        </div>
      </div>
    </div>
  </header>
</template>
