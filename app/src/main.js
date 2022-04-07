import { createApp, ref ,readonly  } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import ProviderInjectExample from './views/ProviderInjectExample.vue'
import VuexDemo from './views/VuexDemo.vue'
import APIDemo from './views/APIDemo.vue'
import PostGetDemo from './views/PostGetDemo'
import { createStore } from 'vuex'


// Define  routes
const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes:[
        { path: '/', component: Home },
        { path: '/about/:id', component: About },
        { path: '/ProviderInjectExample', component: ProviderInjectExample },
        { path: '/VuexDemo', component: VuexDemo },
        { path: '/APIDemo', component: APIDemo },
        { path:'/PostGetDemo',component:PostGetDemo},
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

// 創建一個Vuex的store實體
const store = createStore({
  state: {
    count: 1
  },
  mutations: {
    increment (state,value) {
      // 變更狀態
      state.count += value
    }
  }
})
// 套用 store
app.use(store)

// 套用router
app.use(router)
app.mount('#app')

