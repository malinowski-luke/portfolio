import slideIn from './slideIn'
export default (domRef) => {
  const domRefCleanup = { ...domRef }
  slideIn(domRef.current)
  return () => {
    slideIn(domRefCleanup.current)
  }
}
