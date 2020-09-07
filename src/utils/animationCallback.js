import slideIn from './slideIn'

export default (domRef) => {
  const domRefCleanup = { ...domRef }
  slideIn(domRef.current)
  return () => {
    slideIn(domRefCleanup.current)
  }
}

export const style = 'slide-in align-left'
