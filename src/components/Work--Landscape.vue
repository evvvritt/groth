<template lang="pug">
  section.relative.flex.justify-between.bg-white.cursor-pointer
    //- verso
    figure.h-screen.w--50.relative(@click="versoClick")
      component(:is="verso.type", :data="verso.data")
    //- recto
    figure.h-screen.w--50.relative.border-l.border-grey-dark(@click="rectoClick")
      component(:is="recto.type", :data="recto.data")
    //- spread
    figure(v-show="spreadVisible", @click="spreadClick").absolute.pin.z-10
</template>

<script>
import name from './Work--Landscape__Name'
export default {
  name: 'Work--Landscape',
  props: ['works'],
  components: { name },
  data () {
    return {
      verso: { type: 'name', data: 'Patrick' },
      recto: { type: 'name', data: 'Groth' },
      spread: {},
      spreadVisible: false
    }
  },
  methods: {
    versoClick () {

    },
    rectoClick () {

    },
    spreadClick () {

    },
    next () {

    }
  }
}
</script>

<style>
</style>
