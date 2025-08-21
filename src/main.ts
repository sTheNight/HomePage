import { createApp } from 'vue'
import App from './App.vue'
import { config } from './config'

createApp(App).mount('#app')


const titleEl = document.createElement('title')
titleEl.innerText = config.title
document.head.appendChild(titleEl)