import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ExtendedLayout from './components/ExtendedLayout.vue'
import ImageWrap from './components/ImageWrap.vue'
import Contributors from './components/Contributors.vue'
import FloatingVue from 'floating-vue'

import 'floating-vue/dist/style.css'
import './styles/index.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(ExtendedLayout)
  },
  enhanceApp({ app }) {
    app.component('ImageWrap', ImageWrap)
    app.component('Contributors', Contributors)
    app.use(FloatingVue)
  }
}