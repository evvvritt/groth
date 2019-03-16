<template lang="pug">
  article
</template>

<script>
import _get from 'lodash/get'
export default {
  name: 'Album',
  props: ['slug'],
  data () {
    return {
      album: null
    }
  },
  methods: {
    async getAlbum (uid) {
      try {
        uid = uid || await this.getHomepageAlbumUID()
        const doc = await this.$prismic.client.getByUID('album', uid)
        this.album = doc && doc.data
      } catch (err) {
        console.error(err)
      }
    },
    getHomepageAlbumUID () {
      return this.$prismic.client.getSingle('site')
        .then(doc => _get(doc, 'data.homepage_album.uid'))
    }
  },
  created () {
    this.getAlbum(this.slug)
  }
}
</script>

<style>
</style>
