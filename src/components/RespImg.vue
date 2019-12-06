<template lang="pug">
  img.block(:src="src", :alt="alt", @load="loaded = true", @error="thumb = src", style="transition: opacity 300ms")
</template>

<script>
export default {
  name: 'RespImg',
  props: {
    src: { type: String, default: '' },
    alt: { type: String, default: 'Work by Patrick Groth' },
    // bg: { type: Boolean, default: false },
    // bgClass: { type: String, default: 'object-center object-cover' },
    // useHt: { type: Boolean, default: false }
    dims: { type: Object, default: () => {} },
    bleed: { type: Boolean, default: false }
  },
  data () {
    return {
      thumb: null,
      length: -1,
      loaded: false,
      elRatio: 0
    }
  },
  computed: {
    classes () {
      return {
        // 'absolute inset-0 h-full w-full': this.bg,
        'opacity-0': !this.loaded
      }
    },
    useHt () {
      const imgRatio = this.dims.width / this.dims.height
      return this.bleed ? this.elRatio < imgRatio : this.elRatio > imgRatio
    }
  },
  mounted () {
    this.elRatio = this.$el.offsetWidth / this.$el.offsetHeight
    this.length = this.useHt ? this.$el.offsetHeight : this.$el.offsetWidth
  }
}
</script>

<style>
</style>
