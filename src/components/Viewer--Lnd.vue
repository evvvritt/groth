<template lang="pug">
  section.album-viewer.relative.flex.justify-between.bg-white.h-screen.overflow-hidden
    //- divider
    .hidden.sm-block.h-screen.absolute.w--50.right-0.top-0.pointer-events-none.border-l.border-grey-lighter
    //- verso
    figure.h-screen.relative.hidden.sm-block(v-if="verso", v-show="portrait !== 'recto'")
      transition(name="leaf")
        component(:is="verso.type", :data="verso.data", :key="verso.index", @click="onLeafClick('verso')")
      //- caption
      transition(name="leaf")
        leaf-caption.absolute.w-full.z-10.top-0.left-0.h-50vh.sm-h-screen.sm-translx-100.bg-black(v-if="caption === 'verso'", :leaf="verso.data.primary", @close="closeCaption")
      //- caption toggle
      nav.absolute.w-full.left-0.bottom-0.text-center.text-xl
        button.p-6.inline-block(@click.stop="caption = 'verso'", v-show="hasCaption('verso')") &hellip;
      //- pg number
      .absolute.p-6.left-0.bottom-0.text-xs {{verso.index + 1}}
    //- recto
    figure.h-screen.relative(v-if="recto", v-show="portrait !== 'verso'")
      transition(name="leaf")
        component(:is="recto.type", :data="recto.data", :key="recto.index", :isRecto="true", @click="onLeafClick('recto')")
      //- caption
      transition(name="leaf")
        leaf-caption.absolute.w-full.z-10.top-0.left-0.h-50vh.sm-h-screen.sm-translx_-100.bg-black(v-if="caption === 'recto'", :leaf="recto.data.primary", @close="closeCaption")
      //- caption toggle
      nav.absolute.w-full.left-0.bottom-0.text-center.text-xl
        button.p-6.inline-block(@click.stop="caption = 'recto'", v-show="hasCaption('recto')") &hellip;
      //- pg number
      .absolute.p-6.right-0.bottom-0.text-xs {{recto.index + 1}}
</template>

<script>
import titleleaf from './Viewer__TitleLeaf'
import leaf from './Viewer__Leaf'
import leafCaption from './Viewer__Leaf__Caption'
import { getRandomInt } from '@/utils'
import _get from 'lodash/get'
const newLeaf = (type, data, i) => { return { type: type, data: data, index: i } }
export default {
  name: 'Viewer',
  components: { titleleaf, leaf, leafCaption },
  props: {
    leaves: { type: Array, default: () => [] },
    title: { type: Array, default: () => ['', ''] }
  },
  data () {
    return {
      verso: null,
      recto: null,
      isPortrait: window.innerWidth < window.innerHeight,
      portrait: null,
      afterResize: null,
      caption: null
    }
  },
  methods: {
    hasCaption (side) {
      const title = _get(this[side], 'data.primary.title')
      return title && title.length > 0
    },
    closeCaption () {
      this.caption = null
    },
    onLeafClick (side = 'verso') {
      if (this.caption) return this.closeCaption()
      this.next(side)
    },
    next (assignTo) {
      this.closeCaption()
      const index = getRandomInt(0, this.leaves.length)
      const work = this.leaves[index]
      const inUse = index === this.verso.index || index === this.recto.index
      if (inUse) return this.next(assignTo)
      this[assignTo] = newLeaf('leaf', work, index)
      // after leaf transition
      setTimeout(() => {
        this.portrait = this.isPortrait ? assignTo : null
      }, 100)
    },
    onResize () {
      clearTimeout(this.afterResize)
      this.afterResize = setTimeout(() => {
        this.isPortrait = window.innerWidth < window.innerHeight
        this.portrait = !this.isPortrait ? null : this.portrait
      }, 200)
    },
    setIntro () {
      this.verso = newLeaf('titleleaf', { title: this.title, theme: 'black' }, -1)
      this.recto = newLeaf('titleleaf', { title: this.title, theme: 'black' }, -2)
    }
  },
  created () {
    this.setIntro()
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

<style>
.album-viewer figure{
  flex:1 0 50%;
  /* TODO revise to @media */
  @nest .no-touchevents & nav{
    opacity:0;
    transition:opacity 500ms;
  }
  @nest .no-touchevents &:hover nav{
    opacity:1;
  }
}
</style>
