<template lang="pug">
  .footnotes.bg-black.text-white
    prismic-link(v-for="note in notes", :field="note.primary.link")
      row
        prismic-rich-text.cursor-pointer.truncate(:field="note.primary.label")
    //- homelink
    router-link(to="/", title="Home", v-if="homelink")
      row
        img.block(src="~@/assets/icon-house--filled.svg", style="height:2.4rem")
</template>

<script>
export default {
  name: 'Footnotes',
  props: {
    notes: { type: Array, default: () => [] },
    homelink: { type: Boolean, default: false }
  }
}
</script>

<style>
.footnotes p {display: inline;}
</style>
