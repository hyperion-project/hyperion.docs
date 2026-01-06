import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import { Tab, Tabs } from 'vue3-tabs-component'
import ExtendedLayout from './components/ExtendedLayout.vue'
import ImageWrap from './components/ImageWrap.vue'
import Contributors from './components/Contributors.vue'
import FloatingVue from 'floating-vue'
import WifiConfigGenerator from './components/WifiConfigGenerator.vue'
import SystemConfigGenerator from './components/SystemConfigGenerator.vue'

import 'floating-vue/dist/style.css'
import '@red-asuka/vitepress-plugin-tabs/dist/style.css'
import './styles/index.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(ExtendedLayout)
  },
  enhanceApp({ app }) {
    app.component('Tab', Tab)
    app.component('Tabs', Tabs)
    app.component('ImageWrap', ImageWrap)
    app.component('Contributors', Contributors)
    app.use(FloatingVue)
    app.component('WifiConfigGenerator', WifiConfigGenerator)
    app.component('SystemConfigGenerator', SystemConfigGenerator)    
  }
}
