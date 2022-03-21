import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

// Define  routes
const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes:[
        { path: '/', component: Home },
        { path: '/about/:id', component: About },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
})
  
const app = createApp(App)

// 套用router
app.use(router)
app.mount('#app')