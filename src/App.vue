<template lang="pug">
  #app
    router-view(:key="$route.path")
</template>

<script>
import '@/custom.modernizr'
import '@/style/_main.css'
export default {
  name: 'app'
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size:16px;
}
</style>
