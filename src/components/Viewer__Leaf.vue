<template lang="pug">
  .leaf.absolute.inset-0.flex.items-center.justify-center.bg-cover.bg-center.cursor-pointer.px-8.md-px-5vmx.trans-opacity-quick(@click="$emit('click')", :style="bleedStyle", :role="isBleed ? 'img' : 'none'", :class="{'opacity-0': !loaded}")
    img.reader-show(v-if="image", :src="image.url", :alt="image.alt", @load="loaded = true")
    //- non-bleed
    .bg-no-repeat.bg-center.pb-full.bg-contain.w-full(v-if="!isBleed", role="img", :style="imgStyle")
</template>

<script>
import _get from 'lodash/get'
export default {
  name: 'Work--Landscape__Leaf',
  props: ['data', 'pgNumb'],
  data () {
    return {
      loaded: false
    }
  },
  computed: {
    image () {
      return _get(this.data, 'primary.image') || {}
    },
    bgImg () {
      return 'url(' + this.image.url + ')'
    },
    isBleed () {
      return _get(this.data, 'primary.bleed') === 'true'
    },
    bleedStyle () {
      if (!this.isBleed) return
      return {
        backgroundImage: this.bgImg,
        backgroundPosition: this.$prismic.richTextAsPlain(this.data.primary.bgpos)
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
