import DefaultTheme from 'vitepress/theme'
import NotFound from './components/NotFound.vue'
import ImageWrap from './components/ImageWrap.vue'
import './styles/index.css'

export default {
  ...DefaultTheme,
  Layout: NotFound,
  enhanceApp({ app }) {
    app.component('ImageWrap', ImageWrap)
  }
}
