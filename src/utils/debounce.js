export default function (callback, ref, wait = 25) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      callback(ref)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}
