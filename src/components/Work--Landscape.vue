<template lang="pug">
  section.relative.flex.justify-between.bg-white.cursor-pointer.select-none
    //- verso
    figure.h-screen.relative(@click="versoClick", v-show="portrait !== 'recto'")
      transition(name="leaf")
        component(:is="verso.type", :data="verso.data", :key="verso.index")
    //- recto
    figure.h-screen.relative.border-l.border-grey-dark(@click="rectoClick", v-show="portrait !== 'verso'")
      transition(name="leaf")
        component(:is="recto.type", :data="recto.data", :key="recto.index")
</template>

<script>
import name from './Work--Landscape__Name'
import leaf from './Work--Landscape__Leaf'
import { getRandomInt } from '@/utils'
const newLeaf = (type, data, i) => { return { type: type, data: data, index: i } }
const first = newLeaf('name', { text: 'Patrick', theme: 'black' }, -1)
const last = newLeaf('name', { text: 'Groth', theme: 'black' }, -2)
export default {
  name: 'Work--Landscape',
  props: ['works'],
  components: { name, leaf },
  data () {
    return {
      verso: first,
      recto: last,
      isPortrait: window.innerWidth < window.innerHeight,
      portrait: null,
      afterResize: null
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
      else {
        this[assignTo] = newLeaf('leaf', work, index)
        // after leaf transition
        setTimeout(() => {
          this.portrait = this.isPortrait ? assignTo : null
        }, 100)
      }
    },
    onResize () {
      clearTimeout(this.afterResize)
      this.afterResize = setTimeout(() => {
        this.isPortrait = window.innerWidth < window.innerHeight
        this.portrait = !this.isPortrait ? null : this.portrait
      }, 200)
    }
  },
  mounted () {
    window.addEventListener('resize', this.onResize)
  },
  destoryed () {
    window.removeEventListener('resize', this.onResize)
  }
}
</script>

<style>
.leaf-leave-active{transition:opacity 300ms;}
.leaf-enter-active{transition:opacity 300ms 100ms;}
.leaf-enter, .leaf-leave-to{opacity:0;}
</style>

<style scoped>
figure{
  flex:1 0 50%;
}
</style>
