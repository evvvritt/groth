<template lang="pug">
  //- .leaf.absolute.inset-0.flex.items-center.justify-center.bg-cover.bg-center.cursor-pointer.px-8.md-px-5vmx.trans-opacity-quick(@click="$emit('click')", :style="bleedStyle", :role="isBleed ? 'img' : 'none'", :class="{'opacity-0': !loaded}")
    img.reader-show(v-if="image", :src="image.url", :alt="image.alt", @load="loaded = true")
    //- non-bleed
    .bg-no-repeat.bg-center.pb-full.bg-contain.w-full(v-if="!isBleed", role="img", :style="imgStyle")
  .leaf.absolute.inset-0.h-full.w-full.flex.items-center.justify-center.px-8.lg-px-0.select-none(@click="$emit('click')")
    //- img.reader-show(v-if="image", :src="image.url", :alt="image.alt", @load="loaded = true")
    //- template(v-if="isBleed")
      img.
    resp-img(:src="image.url", :alt="image.alt", :class="respImgClass", :dims="image.dimensions", :style="bleedStyle", :bleed="isBleed")
</template>

<script>
import _get from 'lodash/get'
import RespImg from '@/components/RespImg'
export default {
  name: 'Viewer__Leaf',
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
    // bgImg () {
    //   return 'url(' + this.image.url + ')'
    // },
    isBleed () {
      return _get(this.data, 'primary.format') === 'full-bleed'
    },
    bleedStyle () {
      if (!this.isBleed) return
      return {
        // backgroundImage: this.bgImg,
        objectPosition: this.$prismic.richTextAsPlain(this.data.primary.bgpos)
      }
    },
    // imgStyle () {
    //   return {
    //     backgroundImage: this.bgImg
    //   }
    // },
    respImgClass () {
      return {
        'absolute h-full w-full inset-0 object-center object-cover': this.isBleed,
        'h-75vh w-full lg-w-10x12 object-contain object-center': !this.isBleed
      }
    }
  },
  components: { RespImg }
}
</script>
