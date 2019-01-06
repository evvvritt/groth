<template lang="pug">
  figcaption.flex.items-center.justify-center.p-16(@click.stop="$emit('click')", style="outline:1px solid")
    prismic-rich-text.text-white.text-sm.mx-auto(:field="text", style="max-width:32em")
    //- close btn
    .absolute.pin-b.p-6.left-50.translx_-50.text-grey-light.cursor-pointer(@click="$emit('close')")
      close-icon(width="12px", height="12px")
</template>

<script>
import closeIcon from '@/components/SVG-X'
export default {
  name: 'Work--Landscape__Leaf__Caption',
  props: ['text'],
  components: { closeIcon }
}
</script>

<style>
</style>
