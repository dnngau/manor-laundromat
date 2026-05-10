'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { flushSync } from 'react-dom'

export type Language = 'en' | 'es'

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en')

  useEffect(() => {
    const stored = localStorage.getItem('ml-language') as Language | null
    if (stored === 'en' || stored === 'es') setLanguage(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    // Find the first element at or just below the top of the viewport to use as a scroll anchor
    const candidates = document.querySelectorAll('[id], h1, h2, h3, h4, section')
    let anchor: { el: Element; top: number } | null = null
    for (const el of candidates) {
      const rect = el.getBoundingClientRect()
      if (rect.top >= -1 && rect.bottom > 0) {
        anchor = { el, top: rect.top }
        break
      }
    }

    // flushSync forces React to render synchronously so the DOM reflects the
    // new language before we read getBoundingClientRect and call scrollBy.
    // This runs entirely before the browser paints, preventing the visible jump
    // that useLayoutEffect + async compositor scroll caused on real mobile.
    flushSync(() => {
      setLanguage(prev => {
        const next = prev === 'en' ? 'es' : 'en'
        localStorage.setItem('ml-language', next)
        return next
      })
    })

    if (anchor) {
      const newTop = anchor.el.getBoundingClientRect().top
      window.scrollBy(0, newTop - anchor.top)
    }
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
