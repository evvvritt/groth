<template lang="pug">
  article.text-white.px-6
    .min-h-screen.flex.items-center.justify-center
      section.max-w-lg.py-32
        prismic-rich-text.text__textbody.children-mt-1em(v-if="doc", :field="doc.text")
    footer
      router-link(:to="{name: 'home'}", title="Home")
        footnote /
</template>

<script>
import Footnote from '@/components/Footnotes__Note'
export default {
  name: 'TextDoc',
  props: ['slug'],
  components: { Footnote },
  data () {
    return {
      doc: null
    }
  },
  methods: {
    getDoc () {
      this.$prismic.client.getByUID('text', this.slug)
        .then(doc => { this.doc = doc && doc.data })
    }
  },
  created () {
    this.getDoc()
  }
}
</script>

<style scoped>
@import '../style/_settings';
.text__textbody{
  & >>> * {
    min-height: 1em;
  }
  & >>> a{
    font-style: bolder;
    padding-bottom: 1px;
    border-bottom: 1px solid var(--grey-darkest);
    &:not([href^="/"])::after{
      content: ' \2197\fe0e';
      font-size:0.75em;
    }
    &[href$=".pdf"]:after{
      content: none;
    }
  }
}
</style>
