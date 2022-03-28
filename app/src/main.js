import { createApp, ref ,readonly  } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'
import ProviderInjectExample from './views/ProviderInjectExample.vue'
import VuexDemo from './views/VuexDemo.vue'
import { createStore } from 'vuex'


// Define  routes
const router = VueRouter.createRouter({
history: VueRouter.createWebHistory(),
routes:[
        { path: '/', component: Home },
        { path: '/about/:id', component: About },
        { path: '/ProviderInjectExample', component: ProviderInjectExample },
        { path: '/VuexDemo', component: VuexDemo },
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
      // 变更状态
      state.count += value
    }
  }
})
// 套用 store
app.use(store)

// 套用router
app.use(router)
app.mount('#app')

