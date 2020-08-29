export default (text, domElm, speed) => {
  // count var
  let index = 0
  // closure function
  const displayText = async () => {
    if (index < text.length) {
      domElm.innerText += text.charAt(index++)
      setTimeout(displayText, speed)
    }
  }
  displayText()
}
