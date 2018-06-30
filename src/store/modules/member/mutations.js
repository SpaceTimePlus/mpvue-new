import * as types from './mutationTypes'
import { set } from 'vue'

export default {
  // 设置 member 信息
  [types.SET_MEMBER] (state = {}, { member }) {
    if (member) {
      set(state.member, member)
    }
  }
}
