module.exports = {
  content: [
    './dist/**/*.html',
    './dist/js/*.js'
  ],
  css: [
    './dist/css/*.css'
  ],
  whitelistPatterns: [
    /touchevents$/,
    /-enter-active$/,
    /-enter$/,
    /-enter-to$/,
    /-leave-active$/,
    /-leave$/,
    /-leave-to$/,
    /^bg-/
  ],
  rejected: true
}
