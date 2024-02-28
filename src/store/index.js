import { createStore } from 'vuex'

export default createStore({
  state: { // Variables globales
    loggedIn: true,
  },
  getters: {
  },
  mutations: {
    toggleLogin(state) {
      state.loggedIn = !state.loggedIn;
    }
  },
  actions: {
    toggleLogin({commit}){
      commit('toggleLogin');
    }
  },
  modules: {
  }
})
