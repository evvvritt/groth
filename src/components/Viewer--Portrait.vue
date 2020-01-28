<template lang="pug">
  section.album-viewer--portrait.relative.h-screen(@touchstart="onTouchStart", @touchmove="onTouchMove", @touchend="onTouchEnd")
    //- main slide
    figure.absolute.overlay.z-20(style="background:red;", :style="[clipPath]")
    //- prev
    figure.absolute.overlay.z-10(style="background:blue;", v-show="direction === 'prev'")
    //- next
    figure.absolute.overlay.z-10(style="background:green;", v-show="direction === 'next'")
</template>

<script>
export default {
  name: 'Viewer--Portrait',
  props: ['slices'],
  data () {
    return {
      winW: window.innerWidth,
      clipL: 0,
      clipR: 0,
      cssTrans: false,
      direction: null,
      anim: null,
      canSlide: null,
      touch0: null
    }
  },
  computed: {
    clipPath () {
      return {
        transition: this.cssTrans ? 'clip-path 100ms' : '',
        clipPath: `inset(0% ${this.clipR + '%'} 0% ${this.clipL + '%'})`
      }
    }
  },
  methods: {
    onScroll () {
      clearTimeout(this.afterScroll)
      this.canSlide = false
      console.log(this.canSlide)
      this.afterScroll = setTimeout(() => {
        this.canSlide = true
      }, 100)
    },
    onTouchStart (e) {
      this.touch0 = e.touches[0]
    },
    onTouchMove (e) {
      const touch1 = e && e.touches[0]
      const dX = Math.abs(this.touch0.clientX - touch1.clientX)
      const dY = this.touch0.clientY - touch1.clientY
      if (dY < -20 || dX < 20) return
      const val = Math.max(touch1.clientX, 0) / this.winW * 100
      if (!this.direction) {
        this.direction = val < 50 ? 'prev' : 'next'
      }
      this.anim = requestAnimationFrame(() => {
        switch (this.direction) {
          case 'prev':
            this.clipL = val
            break
          case 'next':
            this.clipR = 100 - val
            break
        }
      })
    },
    onTouchEnd () {
      cancelAnimationFrame(this.anim)
      this.cssTrans = true
      this.$nextTick(() => {
        this.clipL = this.clipR = 0
        setTimeout(() => {
          this.cssTrans = false
          this.direction = null
        }, 200)
      })
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.onScroll)
  },
  destroyed () {
    // window.removeEventListener('scroll', this.onScroll)
  }
}
</script>

<style>
</style>
