import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import vueFlex from 'vue-flex'
import './assets/bootstrap/bootstrap.css'
import './assets/bootstrap/bootstrap.min.css'
import './assets/bootstrap/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).use(vueFlex).mount('#app')

const savedState = JSON.parse(localStorage.getItem('vuex'));

if (savedState) {
  store.replaceState(savedState);
}

// Escuchar los cambios en la tienda Vuex y guardarlos en el almacenamiento local
store.subscribe((mutation, state) => {
    localStorage.setItem('vuex', JSON.stringify(state));
  });