import Vue from 'vue'
import App from './App.vue'
import router from './router'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic-link-resolver'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
