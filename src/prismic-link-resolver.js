// Prismic Link Resolver
// https://prismic.io/docs/vuejs/getting-started/integrating-with-existing-project-esm
export default function (doc) {
  if (doc.type === 'album') return '/view/' + doc.uid
  if (doc.type === 'text') return '/' + doc.uid
  return '/'
}
