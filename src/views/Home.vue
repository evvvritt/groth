<template lang="pug">
  article
</template>

<script>
import _get from 'lodash/get'
export default {
  name: 'Home',
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
          const ids = [_get(doc, 'data.work.id'), _get(doc, 'data.cv.id')]
          if (!ids.length < 2) console.warn('Work or CV doc missing')
          // get Work and CV doc
          this.$prismic.client.getByIDs(ids).then(docs => {
            this.works = this.findDoc(docs.results, 'work')
            this.cv = this.findDoc(docs.results, 'cv')
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
