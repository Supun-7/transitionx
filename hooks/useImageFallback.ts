'use client'

import { useState } from 'react'

/** Steps through a list of candidate files so a mark that has not landed yet
 *  tries the next one, then reports failure so the caller can fall back to a
 *  monogram instead of leaving a broken image on the page. */
export default function useImageFallback(sources: string[]) {
  const [step, setStep] = useState(0)
  const [ok, setOk] = useState(true)

  const index = Math.min(step, Math.max(sources.length - 1, 0))

  const onError = () => {
    if (step + 1 < sources.length) setStep(s => s + 1)
    else setOk(false)
  }

  return { src: sources[index], ok, onError }
}

/** First letters of the first two words, used as a stand-in mark. */
export function initialsOf(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase()
}