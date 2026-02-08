import { useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollToTop = ({ lenisRef, delay = 1000 }) => {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    if (!lenisRef?.current) return

    const timeout = setTimeout(() => {
      lenisRef.current.scrollTo(0, {
        immediate: true,
        force: true,
      })
    }, delay)

    return () => clearTimeout(timeout)
  }, [pathname, delay])

  return null
}

export default ScrollToTop
