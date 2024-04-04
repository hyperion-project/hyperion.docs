import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import ExtendedLayout from './components/ExtendedLayout.vue'
import ImageWrap from './components/ImageWrap.vue'
import './styles/index.css'

export default {
  ...DefaultTheme,
  Layout() {
    return h(ExtendedLayout)
  },
  enhanceApp({ app }) {
    app.component('ImageWrap', ImageWrap)
  }
}
