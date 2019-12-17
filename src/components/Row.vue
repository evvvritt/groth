<template lang="pug">
  .min-h-40.sm-min-h-48.xl-min-h-56.border-t.border-grey-darkest.flex.items-center.justify-center.p-12(@click="$emit('click')")
    slot
</template>

<script>
export default {
  name: 'Row'
}
</script>

<style>
</style>
