import Vue from 'vue'
import Vuex from 'vuex'
import _get from 'lodash/get'

const vue = new Vue()

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // winW: window.innerWidth,
    // winH: window.innerHeight,
    site: null,
    albums: [],
    scrollLock: 0
  },
  getters: {
    homeAlbumUID (state) {
      return _get(state.site, 'data.homepage_album.uid')
    }
  },
  mutations: {
    SET_SITE (state, doc) {
      state.site = doc
    },
    ADD_ALBUM (state, doc) {
      state.albums.push(doc)
    },
    LOCK_SCROLL (state, y) {
      state.scrollLock = y
    },
    UNLOCK_SCROLL (state) {
      state.scrollLock = 0
    }
  },
  actions: {
    async getSite ({ state, commit }) {
      if (state.site) return true
      return vue.$prismic.client.getSingle('site').then(doc => commit('SET_SITE', doc))
    },
    async getAlbum ({ state, getters, commit, dispatch }, uid) {
      try {
        if (!uid) await dispatch('getSite')
        uid = uid || getters.homeAlbumUID
        const saved = state.albums.find(albm => albm.uid === uid)
        if (saved) return saved
        return vue.$prismic.client.getByUID('album', uid).then(doc => {
          commit('ADD_ALBUM', doc)
          return doc
        })
      } catch (e) {
        console.error(e)
      }
    }
  }
})
