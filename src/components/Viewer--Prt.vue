<template lang="pug">
  .relative
    //- .h-screen.sticky.bottom-0.left-0.border-b(v-for="n in 10", :style="{zIndex: 10 - n, background: n % 0 ? 'gray' : 'white'}")
      .h-screen.flex.items-center.px-6
        .w-full.pb-full(style="background:#999")
    .h-screen.bg-white.shadow(v-for="(slice, i) in slices", :style="{zIndex: slices.length - i, height: '150vh'}", :class="{'sticky bottom-0 left-0 flex flex-col justify-end': i > 0, 'relative': !i}")
      .h-screen(:class="{'relative': i > 0, 'sticky top-0 left-0': !i}")
        component(:is="slice.slice_type", :data="slice")
</template>

<script>
import leaf from './Viewer__Leaf'
export default {
  name: 'Viewer--Portrait',
  props: ['slices'],
  components: { leaf }
}
</script>

<style>
</style>
