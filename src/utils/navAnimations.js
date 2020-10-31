export const showHideMobileMenu = (mobileMenuRef, iconRef) => {
  mobileMenuRef.classList.toggle('moblie-menu-show')
  mobileMenuRef.classList.toggle('moblie-menu-hide')
  flipNavIcon(iconRef)
}

// util func
const flipNavIcon = (iconRef) => iconRef.classList.toggle('icon-rotate')
