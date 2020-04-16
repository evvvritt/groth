import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrismicVue from 'prismic-vue'
import linkResolver from './prismic-link-resolver'
import './plugins/include-base-components'
import Vue2TouchEvents from 'vue2-touch-events'
import VueGtag from 'vue-gtag'

Vue.use(PrismicVue, {
  endpoint: window.prismic.endpoint,
  linkResolver
})

// Google Analytics
Vue.use(VueGtag, {
  config: {
    id: process.env.VUE_APP_GTAG_ID,
    anonymize_ip: true
  },
  // whether to load script:
  bootstrap: process.env.NODE_ENV === 'production' && window.navigator.doNotTrack !== '1'
}, router)

Vue.use(Vue2TouchEvents)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
