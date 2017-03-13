// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import foods from './components/recommend/recommend.vue'
import finds from './components/finds/finds.vue'
import orders from './components/orders/orders.vue'
import myinfo from './components/myinfo/myinfo.vue'
import shop from './components/shop/shop.vue'

Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [
  { path: '/foods', component: foods },
  { path: '/finds', component: finds },
  { path: '/orders', component: orders },
  { path: '/myinfo', component: myinfo },
  { path: '/shop', component: shop }
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
