'use client'

import { createContext, useContext, useState, useEffect, useLayoutEffect, useRef, type ReactNode } from 'react'

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
  const scrollAnchorRef = useRef<{ el: Element; offset: number } | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('ml-language') as Language | null
    if (stored === 'en' || stored === 'es') setLanguage(stored)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  // After language change, restore scroll so the anchored element stays at the same viewport position
  useLayoutEffect(() => {
    const anchor = scrollAnchorRef.current
    if (!anchor) return
    scrollAnchorRef.current = null
    const newTop = anchor.el.getBoundingClientRect().top
    window.scrollBy(0, newTop - anchor.offset)
  }, [language])

  const toggleLanguage = () => {
    // Capture the first element that's at least partially visible so we can anchor to it
    const candidates = document.querySelectorAll('[id], h1, h2, h3, h4, section')
    for (const el of candidates) {
      const rect = el.getBoundingClientRect()
      if (rect.top >= -1 && rect.bottom > 0) {
        scrollAnchorRef.current = { el, offset: rect.top }
        break
      }
    }

    setLanguage(prev => {
      const next = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('ml-language', next)
      return next
    })
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
