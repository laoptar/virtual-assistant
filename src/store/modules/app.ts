const state = {
  device: '',
  language: '',
  loading: false
}

const mutations = {
  SET_LOADING: (state: { loading: boolean }, loading: boolean) => {
    state.loading = loading || false
  },
  SET_LANGUAGE: (state: { language: string }, language: string) => {
    state.language = language
  }
}

const actions = {
  queryAppLanguage({ commit }: unknown, params: string) {
    const result = params || ''
    // await axios.get(params)
    commit('SET_LANGUAGE', result)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
