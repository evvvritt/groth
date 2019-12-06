<template lang="pug">
  figcaption.flex.items-center.justify-center.p-16(@click.stop="$emit('click')", style="outline:1px solid")
    .text-white.text-sm.mx-auto.text-center(style="max-width:32em")
      prismic-rich-text.mb-1em(:field="leaf.title")
      prismic-rich-text(:field="leaf.description")
    //- close btn
    .absolute.bottom-0.p-6.left-50.translx_-50.text-grey-light.cursor-pointer(@click="$emit('close')")
      close-icon(width="12px", height="12px")
</template>

<script>
import closeIcon from '@/components/SVG-X'
export default {
  name: 'Work--Landscape__Leaf__Caption',
  props: ['leaf'],
  components: { closeIcon }
}
</script>

<style>
</style>
