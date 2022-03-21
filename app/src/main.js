import { createApp, ref ,readonly  } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import ProviderInjectExample from './views/ProviderInjectExample.vue'


// Define  routes
const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes:[
        { path: '/', component: Home },
        { path: '/about/:id', component: About },
        { path: '/ProviderInjectExample', component: ProviderInjectExample },
        { path: '/:pathMatch(.*)*', component: NotFound },
    ]
})

const app = createApp(App)

const location = ref('North Pole')
function updateLocation() {
  location.value = 'South Pole'
}
app.provide('location',readonly(location));
app.provide('updateLocation',updateLocation);

// 套用router
app.use(router)
app.mount('#app')