import Vue from 'vue'
import App from './App.vue'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic-link-resolver'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
