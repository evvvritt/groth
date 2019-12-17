<template lang="pug">
  article(v-if="album")
    app-header.lg-hidden
      row(slot="title", v-if="slug")
        h2 {{ album.title_left + ' ' + album.title_right }}
      footnotes(slot="menu", :notes="album.footnotes", :homelink="false")
    viewer-lnd(:slices="album.body", :title="[album.title_left, album.title_right]")
    footer.hidden.lg-block
      footnotes(:notes="album.footnotes", :homelink="$route.name !== 'home'")
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
