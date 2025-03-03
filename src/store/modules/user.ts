const state = {
  token: '',
  avatar: '',
  orgInfo: ''
}

const mutations = {
  SET_TOKEN: (state: { token: string }, token: string) => {
    state.token = token
  }
}

const actions = {
  verifyToken({ commit }: unknown, params: string) {
    const result = params || ''
    // await axios.get(params)
    commit('SET_TOKEN', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
