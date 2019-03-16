import Vue from 'vue'
import Router from 'vue-router'
import Album from './views/Album.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Album
    },
    {
      path: '/:slug',
      name: 'album',
      component: Album,
      props: true
    }
  ]
})
