import { useEffect } from "react"

export default function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.15 })
    reveals.forEach(r => observer.observe(r))
    return () => observer.disconnect()
  }, [])
}