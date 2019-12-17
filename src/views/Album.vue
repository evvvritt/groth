<template lang="pug">
  article(v-if="album")
    viewer-lnd(:leaves="album.body", :title="[album.title_left, album.title_right]")
    footer
      footnotes(:notes="album.footnotes")
</template>

<script>
import ViewerLnd from '@/components/Viewer--Lnd'
import Footnotes from '@/components/Footnotes'
export default {
  name: 'Album',
  props: ['slug'],
  components: { ViewerLnd, Footnotes },
  data () {
    return {
      album: null
    }
  },
  created () {
    this.$store.dispatch('getAlbum', this.slug).then(doc => {
      this.album = doc && doc.data
    })
  }
}
</script>

<style>
</style>
