import { createStore } from 'vuex'

export default createStore({
  state: { // Variables globales
    loggedIn: false,
    server: 'http://localhost:4000/api/todozen',
    user: {
      name: '',
      id:""
    },
    tasks: []
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
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    },
    addTask(state, task) {
      state.tasks.push(task);
    }
  },
  actions: {
    toggleLogin({commit}){
      commit('toggleLogin');
    },
    setUser({commit}, user){
      commit('setUser', user);
    },
    setTasks({ commit }, tasks) {
      commit('setTasks', tasks);
    },
    addTask({ commit }, task) {
      commit('addTask', task);
    }
  },
  modules: {
  }
})
