import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic-link-resolver'

console.log(window.prismic.endpoint)
Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
