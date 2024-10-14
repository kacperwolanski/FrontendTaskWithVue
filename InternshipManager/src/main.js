import { createApp } from 'vue'
import App from './App.vue'

import 'primeicons/primeicons.css'
import './assets/styles.css'
import router from './features/router'

const app = createApp(App)

app.use(router)

app.mount('#app')
