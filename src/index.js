import Launcher from './Launcher.vue'
import VTooltip from 'v-tooltip'
import compositionApi from '@vue/composition-api'

const defaultComponentName = 'BeautifulChat'

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return
    }
    Vue.use(compositionApi)

    this.installed = true
    this.event = new Vue()
    this.dynamicContainer = null
    this.componentName = options.componentName || defaultComponentName
    /**
     * Plugin API
     */
    Vue.prototype.$chat = {
      _setDynamicContainer(dynamicContainer) {
        Plugin.dynamicContainer = dynamicContainer
      }
    }
    /**
     * Sets custom component name (if provided)
     */
    Vue.component(this.componentName, Launcher)
    Vue.use(VTooltip)
  }
}

export default Plugin
