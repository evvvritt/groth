<template lang="pug">
  header.bg-black.text-white.text-sm.border-b.border-grey-darkest
    //- site title
    row
      h1
        router-link(to="/") Patrick Groth
    //- album title ?
    slot(name="title")
    //- menu
    nav
      div(v-show="menu")
        slot(name="menu")
      row(@click="menu = !menu")
        //- span.border-t.border-b(style="width:40px; height:10px", v-show="!menu")
        //- svg-chevron(v-show="menu", height=".5em", width="1em")
        img(v-show="!menu", src="@/assets/icon-menu.svg")
        img(v-show="menu", src="@/assets/icon-menu--up.svg")
    //- .min-h-40.flex.items-center.justify-center.border-t.border-grey-darkest
    //- .w-1x2
      .pb-full.relative
    //- slot
</template>

<script>
export default {
  name: 'AppHeader',
  data () {
    return {
      menu: false
    }
  }
}
</script>
