<template lang="pug">
  article.text-white
    .flex.items-center.justify-between
      //- .w--50
      section.min-h-screen.lg-w-1x2.py-12.px-12.lg-py-16.lg-pl-16.lg-pr-24.lg-border-r.border-grey-darkest
        prismic-rich-text.text-xl.lg-text-xl.text__textbody.children-mt-1em(v-if="doc", :field="doc.text", style="max-width:26em")
    footer
      footnotes
</template>

<script>
import Footnotes from '@/components/Footnotes'
export default {
  name: 'TextDoc',
  props: ['slug'],
  components: { Footnotes },
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
    border-bottom: 1px dotted var(--grey-darkest);
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
