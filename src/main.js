import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import vueFlex from 'vue-flex'
import './assets/bootstrap/bootstrap.css'
import './assets/bootstrap/bootstrap.min.css'
import './assets/bootstrap/bootstrap.bundle.min.js'

createApp(App).use(store).use(router).use(vueFlex).mount('#app')
