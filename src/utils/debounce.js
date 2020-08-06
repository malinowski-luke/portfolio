export default function (callback, wait = 25, immediate = true) {
  var timeout
  // can't use arrow func beacuse arguments arr is undefined in ()=>{}
  return function () {
    var context = this,
      args = arguments
    var later = () => {
      timeout = null
      if (!immediate) callback.apply(context, args)
    }
    var callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) callback.apply(context, args)
  }
}
