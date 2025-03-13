import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Popper from "vue3-popper";

const Myapp = createApp(App);

Myapp.component('Popper',Popper)

Myapp.mount('#app')
