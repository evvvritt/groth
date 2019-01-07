<template lang="pug">
  article
    work-landscape(:works="works && works.body")
    footer.w-full.bg-black.text-white.flex.items-center.justify-center.border-t.border-grey-darkest
      .flex-1.py-20
        button.block.m-auto.cursor-pointer.p-6 CV
</template>

<script>
import WorkLandscape from '@/components/Work--Landscape'
import _get from 'lodash/get'
export default {
  name: 'Home',
  components: { WorkLandscape },
  data () {
    return {
      works: null,
      cv: null
    }
  },
  methods: {
    getHome () {
      this.$prismic.client.getSingle('home')
        .then(doc => {
          const id = key => _get(doc, 'data.' + key + '.id')
          const ids = [id('work'), id('cv')]
          // get Work and CV doc
          this.$prismic.client.getByIDs(ids).then(docs => {
            this.works = this.findDoc(docs.results, 'work')
            this.cv = this.findDoc(docs.results, 'cv')
            console.log(this.works)
          })
        })
        .catch(console.error)
    },
    findDoc (arr, type) {
      const matches = arr.filter(doc => doc.type === type)
      if (!matches[0]) console.warn('Missing Prismic doc:', type)
      return matches[0] && matches[0].data
    }
  },
  created () {
    this.getHome()
  }
}
</script>

<style>
</style>
