import Vue from 'vue'
import * as types from './mutationTypes'

// 更新State
export const updateState = async ({ commit }, payload) => {
  commit(types.UPDATE_STATE, { obj: payload.obj, prop: payload.prop, value: payload.value })
}

export const getProvince = ({commit}, params = {}) => {
  return Vue.iBox.http('globalUrl.getProvince', params)({method: 'get'})
}
