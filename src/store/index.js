// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger'

import state from './state'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'
import member from './modules/member'

Vue.use(Vuex)

// 不要在生产环境使用严格模式, 这会严重影响应用的整体性能
const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  strict: debug, // true 意味着必须通过 mutation 来修改 state
  plugins: debug ? [createLogger()] : [], // 是否使用日志输出
  modules: {
    member
  }
})

// const storeContext = require.context('@/store/modules', true, /\.js$/)
//
// storeContext.keys().forEach((modules) => {
//   store.registerModule(modules.replace(/(^\.\/)|(\.js$)/g, ''), storeContext(modules).default)
// })

Vue.prototype.$store = store
export default store
