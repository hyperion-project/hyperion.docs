import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import NotFound from './components/NotFound.vue'
import ImageWrap from './components/ImageWrap.vue'
import Annoucement from './components/Annoucement.vue'
import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'home-hero-info-before': () => h(Annoucement),
      'not-found': () => h(NotFound)
    })
  },
  enhanceApp({ app }) {
    app.component('ImageWrap', ImageWrap)
  }
}
