export function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min // The maximum is exclusive and the minimum is inclusive
}

// Imgix Resizing (Prismic)
// https://docs.imgix.com/setup/serving-images
export function thumbSrc (src, length, byHeight = false) {
  const sizes = [320, 480, 640, 800, 1024, 1280, 1440, 1600, 1920, 2560, 2880, 3600, 4096, 5120]
  const dpx = window.devicePixelRatio || 1
  // less density optically ok ?
  length = parseInt(length * dpx * 0.95)
  let size = sizes.find(sz => length <= sz) || sizes[sizes.length - 1]
  // // find optimal
  // let optimal
  // for (var i = 0; i < sizes.length; i++) {
  //   if (length <= sizes[i]) {
  //     optimal = sizes[i]
  //     break
  //   }
  // }
  // // use optimal otherwise largest src
  // let size = optimal || sizes[sizes.length - 1]
  // resize by w/h
  size = byHeight ? 'h_' + size : 'w_' + size
  // add params
  let params = src.includes('?') ? '&' : '?'
  params += size
  return `${src}${params}`
}

export function canObserve () {
  return typeof window.IntersectionObserver === 'function'
}
