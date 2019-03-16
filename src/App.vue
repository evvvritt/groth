<template lang="pug">
  #app
    router-view
</template>

<script>
import '@/custom.modernizr'
import '@/style/_main.css'
import Home from '@/views/Home'
export default {
  name: 'app',
  components: { Home }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:16px;
}
</style>
