import { createStore } from 'vuex'

export default createStore({
  state: { // Variables globales
    loggedIn: false,
    server: 'http://localhost:4000/api/todozen',
    user: {
      name: '',
      id:""
    },
  },
  getters: {
  },
  mutations: {
    toggleLogin(state) {
      state.loggedIn = !state.loggedIn;
    },
    setUser(state, user){
      state.user.name = user.name;
      state.user.id = user.id;
    }
  },
  actions: {
    toggleLogin({commit}){
      commit('toggleLogin');
    },
    setUser({commit}, user){
      commit('setUser', user);
    }
  },
  modules: {
  }
})
