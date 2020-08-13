export const slideIn = (domRef) => {
  if (domRef.classList.contains('active')) domRef.classList.remove('active')
  else domRef.classList.add('active')
}
