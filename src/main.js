import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
//import i18n from './i18n'
import store from './store'
import './main.css';


createApp(App).use(store).use(router).mount('#app')