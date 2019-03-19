<template lang="pug">
  .footnotes.bg-black.text-white
    prismic-link(v-for="note in notes", :field="note.primary.link")
      footnote
        prismic-rich-text.cursor-pointer.truncate(:field="note.primary.label")
    router-link(to="/", title="Home", v-if="$route.name !== 'home'")
      footnote /
        //- img.block(src="~@/assets/icon-house.svg", style="width:1.75rem")
</template>

<script>
import Footnote from './Footnotes__Note'
export default {
  name: 'Footnotes',
  props: {
    notes: { type: Array, default: () => [] }
  },
  components: { Footnote }
}
</script>

<style>
.footnotes p {display: inline;}
</style>
