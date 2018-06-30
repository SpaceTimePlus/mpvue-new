import * as types from './mutationTypes'

/**
 * Created by athena on 2017/9/14.
 */

// 设置用户
export const setMember = async ({ commit }, payload) => {
  commit(types.SET_MEMBER, { member: payload.member })
}
