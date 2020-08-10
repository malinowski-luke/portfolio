export const slideIn = (domElm) => {
  if (domElm.classList.contains('active')) domElm.classList.remove('active')
  else domElm.classList.add('active')
}
