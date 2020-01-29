import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic-link-resolver'
import './plugins/include-base-components'
import Vue2TouchEvents from 'vue2-touch-events'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
