import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import NotFound from './components/NotFound.vue'
import ImageWrap from './components/ImageWrap.vue'
import Annoucement from './components/Annoucement.vue'
import ExtendedLayout from './components/ExtendedLayout.vue'
import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(ExtendedLayout, null, {
      'home-hero-info-before': () => h(Annoucement),
      'not-found': () => h(NotFound)
    })
  },
  enhanceApp({ app }) {
    app.component('ImageWrap', ImageWrap)
  }
}
