/*
 * Use store pattern instead of Vuex since this is a plugin
 * and instantiated externally
 **/

import { set, reactive } from '@vue/composition-api'

const store = {
  state: reactive({
    editMessage: null
  }),

  setState(key, val) {
    set(this.state, key, val)
  }
}

function mapState(keys) {
  const map = {}
  keys.forEach((key) => {
    map[key] = function () {
      return store.state[key]
    }
  })
  return map
}

export default store
export { mapState }
