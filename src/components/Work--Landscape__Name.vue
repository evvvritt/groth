<template lang="pug">
  .absolute.pin.flex.items-center.justify-center.select-none.cursor-pointer(:class="['bg-' + data.theme, {'border-l border-grey-darkest': borderLeft}]", @click="$emit('click')")
    h1(:class="data.theme === 'black' ? 'text-white' : null") {{data.text}}
</template>

<script>
export default {
  name: 'Work--Landscape__Name',
  props: ['data', 'borderLeft']
}
</script>

<style>
</style>
