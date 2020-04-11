import Vue from 'vue'
import Router from 'vue-router'
import Album from './views/Album.vue'
import Page from './views/Page.vue'

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
      path: '/view/:slug',
      name: 'album',
      component: Album,
      props: true
    },
    {
      path: '/:slug',
      name: 'page',
      component: Page,
      props: true
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})
