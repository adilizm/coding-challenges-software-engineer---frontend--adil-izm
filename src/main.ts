import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Popper from "vue3-popper";
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const Myapp = createApp(App);
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

Myapp.use(pinia)
Myapp.component('Popper',Popper)

Myapp.mount('#app')
