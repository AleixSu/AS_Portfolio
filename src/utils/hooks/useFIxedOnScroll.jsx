import { useEffect, useState } from 'react'

export const useFixedOnScroll = (ref) => {
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const initialOffSetTop = ref.current.offsetTop

    const handleScroll = () => {
      const scrollY = window.scrollY
      if (scrollY >= initialOffSetTop) {
        setIsFixed(true)
      } else {
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isFixed
}
