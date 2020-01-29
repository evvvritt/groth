<template lang="pug">
  #app.font-sans(:class="{'h-screen overflow-hidden': scrollLock}")
    router-view(:key="$route.path")
</template>

<script>
// import '@/custom.modernizr'
import { mapState } from 'vuex'
import '@/style/_main.css'
export default {
  name: 'app',
  computed: {
    ...mapState(['scrollLock'])
  },
  created () {
    this.$store.dispatch('getSite')
  },
  watch: {
    scrollLock (val) {
      if (val) {
        this.$nextTick(() => this.$el.scroll(0, val))
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:20px;
  line-height: 1.22;
}
</style>
