<template lang="pug">
  figcaption.flex.items-center.justify-center.p-16(@click.stop="$emit('click')", style="outline:1px solid")
    .relative.text-white.text-sm.mx-auto.text-center(style="max-width:32em")
      prismic-rich-text.mb-1em(:field="leaf.title")
      prismic-rich-text(:field="leaf.description")
      //- close btn
      .absolute.w-full.top-100.left-0.pt-4
        button.inline-block.p-6.text-white.cursor-pointer(@click="$emit('close')")
          svgx(width="16px", height="16px")
</template>

<script>
export default {
  name: 'Work--Landscape__Leaf__Caption',
  props: ['leaf']
}
</script>

<style>
</style>
