<template lang="pug">
  section.relative.flex.justify-between.bg-white.cursor-pointer.select-none
    //- verso
    figure.h-screen.w--50.relative(@click="versoClick")
      transition(name="leaf")
        component(:is="verso.type", :data="verso.data", :key="verso.index")
    //- recto
    figure.h-screen.w--50.relative.border-l.border-grey-dark(@click="rectoClick")
      transition(name="leaf")
        component(:is="recto.type", :data="recto.data", :key="recto.index")
    //- spread
    figure(v-show="spreadVisible", @click="spreadClick").absolute.pin.z-10
</template>

<script>
import name from './Work--Landscape__Name'
import leaf from './Work--Landscape__Leaf'
import { getRandomInt } from '@/utils'
const newLeaf = (type, data, i) => { return { type: type, data: data, index: i } }
const first = newLeaf('name', 'Patrick', -1)
const last = newLeaf('name', 'Groth', -2)
export default {
  name: 'Work--Landscape',
  props: ['works'],
  components: { name, leaf },
  data () {
    return {
      verso: first,
      recto: last,
      spread: {},
      spreadVisible: false
    }
  },
  methods: {
    versoClick () {
      this.next('verso')
    },
    rectoClick () {
      this.next('recto')
    },
    spreadClick () {

    },
    next (assignTo) {
      const index = getRandomInt(0, this.works.length)
      const work = this.works[index]
      const inUse = index === this.verso.index || index === this.recto.index
      if (inUse && assignTo === 'verso') this.verso = first
      else if (inUse && assignTo === 'recto') this.recto = last
      else this[assignTo] = newLeaf('leaf', work, index)
    }
  }
}
</script>

<style>
.leaf-leave-active{transition:opacity 300ms;}
.leaf-enter-active{transition:opacity 300ms 100ms;}
.leaf-enter, .leaf-leave-to{opacity:0;}
</style>
