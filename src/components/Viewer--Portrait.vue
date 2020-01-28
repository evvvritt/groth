<template lang="pug">
  section.album-viewer--portrait.relative.h-screen(@touchstart="onTouchStart", @touchmove="onTouchMove", @touchend="onTouchEnd")
    //- main slide
    figure.absolute.overlay.z-20(:style="[bg(active), clipPath]")
    //- prev
    figure.absolute.overlay.z-10(:style="[bg(prevPos)]", v-show="direction === 'prev'")
    //- next
    figure.absolute.overlay.z-10(:style="[bg(nextPos)]", v-show="direction === 'next'")
</template>

<script>
export default {
  name: 'Viewer--Portrait',
  props: ['slices'],
  data () {
    return {
      active: 0,
      slides: ['red', 'green', 'blue'],
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
      const val = `inset(0% ${this.clipR + '%'} 0% ${this.clipL + '%'})`
      return {
        transition: this.cssTrans ? 'all 200ms' : '',
        clipPath: val,
        '-webkit-clip-path': val
      }
    },
    nextPos () {
      return this.active + 1 === this.slides.length ? 0 : this.active + 1
    },
    prevPos () {
      return this.active - 1 < 0 ? this.slides.length - 1 : this.active - 1
    }
  },
  methods: {
    bg (i) {
      return {
        backgroundColor: this.slides[i]
      }
    },
    next (dir) {
      const actv = this.active
      const total = this.slides.length
      this.active = actv + dir === total ? 0 : actv + dir < 0 ? total - 1 : actv + dir
    },
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
      let dir = null
      this.$nextTick(() => {
        switch (this.direction) {
          case 'prev':
            if (this.clipL > 55) {
              this.clipL = 100
              dir = -1
            } else {
              this.clipL = 0
            }
            break
          case 'next':
            if (this.clipR > 55) {
              this.clipR = 100
              dir = 1
            } else {
              this.clipR = 0
            }
        }
        // this.clipL = this.clipR = 0
        setTimeout(() => {
          this.cssTrans = false
          this.direction = null
          if (this.dir !== null) {
            this.next(dir)
            this.$nextTick(() => {
              this.clipL = this.clipR = 0
            })
          }
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
