import React from 'react'
import { useEffect } from 'react'

export const useShownOnScroll = (refsArray) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show')
        }
      })
    })

    refsArray.current.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
