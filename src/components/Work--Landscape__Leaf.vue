<template lang="pug">
  .leaf.absolute.pin.flex.items-center.justify-center.bg-cover.bg-center(:style="bleedStyle", :role="isBleed ? 'img' : 'none'")
    //- non-bleed
    .bg-no-repeat.bg-center.pb-100pct.bg-contain.w-full(v-if="!isBleed", role="img", :style="imgStyle")
</template>

<script>
import _get from 'lodash/get'
export default {
  name: 'Work--Landscape__Leaf',
  props: ['data', 'pgNumb'],
  computed: {
    bgImg () {
      return 'url(' + _get(this.data, 'primary.image.url') + ')'
    },
    isBleed () {
      return _get(this.data, 'primary.bleed') === 'true'
    },
    bleedStyle () {
      if (!this.isBleed) return
      return {
        backgroundImage: this.bgImg
      }
    },
    imgStyle () {
      return {
        backgroundImage: this.bgImg
      }
    }
  }
}
</script>

<style scoped>
.leaf{
  padding-left:5vmax;
  padding-right:5vmax;
}
</style>
