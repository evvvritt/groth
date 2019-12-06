<template lang="pug">
  .absolute.inset-0.flex.items-center.justify-center.select-none.cursor-pointer(:class="['bg-' + data.theme, {'sm-border-l border-grey-darkest': isRecto}]", @click="$emit('click')")
    h1(:class="data.theme === 'black' ? 'text-white' : null")
      span(:class="{'sm-hidden': isRecto}") {{data.title[0]}}&nbsp;
      span(:class="{'sm-hidden': !isRecto}") {{data.title[1]}}
</template>

<script>
export default {
  name: 'Work--Landscape__Name',
  props: ['data', 'isRecto']
}
</script>

<style>
</style>
