export const typewriter = (text, domElm, speed) => {
  // count var
  let index = 0
  // closure function
  const displayText = () => {
    if (index < text.length) {
      domElm.innerText += text.charAt(index++)
      setTimeout(displayText, speed)
    }
  }
  displayText()
}
