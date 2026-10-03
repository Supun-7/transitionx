import { useEffect } from "react"

export default function useReveal() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.15 })
    reveals.forEach(r => observer.observe(r))

    // Phase sections fade their whole backdrop in, not just the copy
    const stages = document.querySelectorAll('.stage-section, .current-stage-section')
    const stageObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in') })
    }, { threshold: 0.08 })
    stages.forEach(s => stageObserver.observe(s))

    return () => {
      observer.disconnect()
      stageObserver.disconnect()
    }
  }, [])
}