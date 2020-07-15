import debounce from './debounce'

const checkSlide = () => {
  document.querySelectorAll('.slide-in').forEach((elm) => {
    const slideInAt =
        window.scrollY + window.innerHeight - elm.offsetHeight / 2,
      elmBottom = elm.offsetTop + elm.offsetHeight,
      isHalfShown = slideInAt > elm.offsetTop,
      isNotScrolledPast = window.scrollY < elmBottom
    if (isHalfShown && isNotScrolledPast) elm.classList.add('active')
    else elm.classList.remove('active')
  })
}

// debounce to reduce unecessary scroll event trigger
export default () => window.addEventListener('scroll', debounce(checkSlide))