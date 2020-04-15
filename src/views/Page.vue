<template lang="pug">
  article.page.text-white.lg-border-t.border-grey-darkest
    .flex
      //- .w--50
      section.min-h-screen.lg-w-1x2.py-12.px-6.sm-p-12.lg-py-12.lg-pl-12.lg-pr-24.lg-border-r.border-grey-darkest.flex.flex-col.justify-between
        template(v-if="doc")
          div
            //- main text
            prismic-rich-text.text__textbody.children-mt-1em.underline-links(v-for="(slice, i) in doc.body", :field="slice.primary.text1", :style="{maxWidth: '28em'}", :class="txtClss(slice, i)")
          //- footnotes
          prismic-rich-text.text-xxs.w-full.text-left.children-mt-1em.mt-40.sm-mt-48(v-if="doc.details", :field="doc.details")
    footer
      footnotes(:notes="doc.footnotes", :homelink="true", v-if="doc")
</template>

<script>
import Footnotes from '@/components/Footnotes'
export default {
  name: 'Page',
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
    },
    txtClss (slice, i) {
      const sz = slice.primary.font_size
      return {
        'md-text-lg': sz === 'default',
        'text-xs': sz === 'small',
        'mt-28': i
      }
    }
  },
  created () {
    this.getDoc()
  }
}
</script>

<style scoped>
@import '../style/_settings';

.text-white{
  & ::selection {
    background:rgba(255,255,255, .99); /* WebKit/Blink Browsers */
    color: black;
  }
}

.text__textbody{
  & >>> h6 {
    /*margin-top: 4em;*/
    /*font-size:0.66em;*/
    & + p {
      margin-top: 0.5em;
    }
  }
  & >>> * {
    min-height: 1em;
  }
  & >>> a{
    /*font-style: bolder;*/
    /*padding-bottom: 1px;*/
    /*border-bottom: 1px dotted var(--grey-darkest);*/
    /*&:not([href^="/"])::after{
      content: ' \2197\fe0e';
      font-size:0.75em;
    }
    &[href$=".pdf"]:after{
      content: none;
    }*/
  }
}
</style>
