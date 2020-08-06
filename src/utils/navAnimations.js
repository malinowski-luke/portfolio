import debounce from './debounce'

export const navScrollAnimation = () => {
  window.addEventListener('scroll', debounce(toggleNavBackground,15))
}

const toggleNavBackground = () => {
  const navbar = document.getElementById('nav-bar')
  if (window.pageYOffset > 60) {
    navbar.classList.add('nav-scroll')
    navbar.classList.remove('nav-static')
  } else if (window.pageYOffset < 60) {
    navbar.classList.remove('nav-scroll')
    navbar.classList.add('nav-static')
  }
}

export const showHideMobileMenu = (menuId, iconId) => {
  const dropdown = document.getElementById(menuId)
  dropdown.classList.toggle('hide-menu-collapse')
  dropdown.classList.toggle('moblie-menu-show')
  dropdown.classList.toggle('moblie-menu-hide')
  flipNavIcon(iconId)
}

// util func
const flipNavIcon = (iconId) => {
  document.getElementById(iconId).classList.toggle('icon-rotate')
}
