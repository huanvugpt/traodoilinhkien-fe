// main.ts
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import naive from 'naive-ui' // import toàn bộ lib
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(naive) // auto toàn bộ components & themes

app.mount('#app')
