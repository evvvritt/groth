<template lang="pug">
  .footnotes.bg-black.text-white
    template
    .flex.w-full.items-center.justify-center.min-h-48.md-min-h-56.px-6.py-12.border-t.border-grey-darkest(v-for="note in notes")
      prismic-rich-text.cursor-pointer.truncate(:field="note.primary.label")
    router-link(to="/", title="Home").flex.w-full.items-center.justify-center.min-h-48.md-min-h-56.px-6.py-12.border-t.border-grey-darkest(v-if="$route.name !== 'home'")
      //- img.block(src="~@/assets/icon-house.svg", style="width:1.75rem")
      span.block /
</template>

<script>
export default {
  name: 'Footnotes',
  props: {
    notes: { type: Array, default: () => [] }
  }
}
</script>

<style>
.footnotes p {display: inline;}
</style>
