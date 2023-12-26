import { createApp } from 'vue'
import App from "./App";
import router from "./router";

import 'uno.css'

const app = createApp(App)
app.use(router)
app.mount('#app')
