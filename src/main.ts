import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Popper from "vue3-popper";
import { createPinia } from 'pinia'

const Myapp = createApp(App);
const pinia = createPinia()

Myapp.use(pinia)
Myapp.component('Popper',Popper)

Myapp.mount('#app')
