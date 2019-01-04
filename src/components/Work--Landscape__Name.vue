<template lang="pug">
  .absolute.pin.flex.items-center.justify-center(:class="'bg-' + data.theme")
    h1(:class="data.theme === 'black' ? 'text-white' : null") {{data.text}}
</template>

<script>
export default {
  name: 'Work--Landscape__Name',
  props: ['data']
}
</script>

<style>
</style>
