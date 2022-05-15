import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/base.css'
import '@fontsource/dm-sans'

const app = createApp(App)

app.use(router)

app.mount('#app')
