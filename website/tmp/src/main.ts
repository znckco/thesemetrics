import './setup/sentry'
import 'virtual:windi.css'

import { createHead } from '@vueuse/head'
import { createApp } from 'vue'
import { router } from './router'
import App from './App.vue'
import Layout from './components/Layout.vue'

const app = createApp(App)
const head = createHead()

app.component('DefaultLayout', Layout)

app.use(head)
app.use(router)
app.mount('#app')

// Set Release Version.
;(window as any).version = __VERSION__
