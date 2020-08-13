import debounce from './debounce'

export const navScrollAnimation = (navRef) => {
  window.addEventListener('scroll', debounce(toggleNavBackground, navRef))
}

// util func
const toggleNavBackground = (navRef) => {
  if (window.pageYOffset > 60) {
    navRef.classList.add('nav-scroll')
    navRef.classList.remove('nav-static')
  } else {
    navRef.classList.remove('nav-scroll')
    navRef.classList.add('nav-static')
  }
}

export const showHideMobileMenu = (mobileMenuRef, iconRef) => {
  mobileMenuRef.classList.toggle('moblie-menu-show')
  mobileMenuRef.classList.toggle('moblie-menu-hide')
  flipNavIcon(iconRef)
}

// util func
const flipNavIcon = (iconRef) => iconRef.classList.toggle('icon-rotate')
