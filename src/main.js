import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueCookies from "vue3-cookies"
import store from './store'

export const app = createApp(App)

app.use(router);
router.app = app;
app.use(VueCookies);
app.use(store)
app.mount('#app')

