export const typewriter = (text, id, speed) => {
  // count var
  let index = 0
  // closure function
  const displayText = () => {
    const code = document.getElementById(id)
    if (code && index < text.length) {
      code.innerText += text.charAt(index++)
      setTimeout(displayText, speed)
    }
  }
  displayText()
}
