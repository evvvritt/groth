<template lang="pug">
  svg.block(viewbox="0 0 100 50")
    line(x1="50%", y1="0", x2="100%", y2="100%", stroke="currentColor")
    line(x1="0", y1="100%", x2="50%", y2="0", stroke="currentColor")
</template>

<script>
export default {
  name: 'svgChevron'
}
</script>

<style>
</style>
