<template lang="pug">
  article(v-if="album")
    viewer(:leaves="album.body", :title="[album.title_left, album.title_right]")
</template>

<script>
import Viewer from '@/components/Viewer'
import _get from 'lodash/get'
export default {
  name: 'Album',
  props: ['slug'],
  components: { Viewer },
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
