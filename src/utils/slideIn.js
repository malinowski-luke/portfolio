export const slideIn = (id) => {
  const elm = document.getElementById(id)
  if (elm) {
    if (elm.classList.contains('active')) elm.classList.remove('active')
    else elm.classList.add('active')
  }
}
