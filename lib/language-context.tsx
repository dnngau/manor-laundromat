'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'

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
    // Find the first heading that is clearly visible below the sticky header.
    // We store its absolute position (viewport-relative top + scrollY) so the
    // measurement is independent of any scroll that happens during re-render.
    const stickyHeader = document.querySelector('header.sticky') as HTMLElement | null
    const headerBottom = stickyHeader ? stickyHeader.getBoundingClientRect().bottom : 0

    let anchor: { el: Element; absTop: number } | null = null
    for (const el of document.querySelectorAll('h1, h2, h3, h4')) {
      const rect = el.getBoundingClientRect()
      if (rect.top > headerBottom && rect.top < window.innerHeight) {
        anchor = { el, absTop: rect.top + window.scrollY }
        break
      }
    }

    setLanguage(prev => {
      const next = prev === 'en' ? 'es' : 'en'
      localStorage.setItem('ml-language', next)
      return next
    })

    if (!anchor) return
    const { el, absTop: prevAbsTop } = anchor

    // rAF fires after the browser has reflowed the new layout, making
    // getBoundingClientRect() accurate. We then scroll to compensate for any
    // height change that occurred above our anchor element.
    requestAnimationFrame(() => {
      const newAbsTop = el.getBoundingClientRect().top + window.scrollY
      const delta = newAbsTop - prevAbsTop
      if (Math.abs(delta) > 0.5) {
        window.scrollTo({ top: window.scrollY + delta, behavior: 'instant' })
      }
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
