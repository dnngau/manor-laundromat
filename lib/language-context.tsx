'use client'

import { createContext, useContext, useEffect, useSyncExternalStore, type ReactNode } from 'react'

export type Language = 'en' | 'es'

type LanguageContextType = {
  language: Language
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
})

// The chosen language lives in localStorage. It is exposed to React through
// useSyncExternalStore so the client can read it on first render instead of
// setting state from an effect after mount. The server always renders 'en';
// React swaps in the stored value right after hydration.
const STORAGE_KEY = 'ml-language'
const listeners = new Set<() => void>()
let fallback: Language = 'en' // used when localStorage is unavailable

function readLanguage(): Language {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'es' ? 'es' : 'en'
  } catch {
    return fallback
  }
}

function readServerLanguage(): Language {
  return 'en'
}

function subscribe(callback: () => void) {
  listeners.add(callback)
  // Also react to changes made in another open tab.
  window.addEventListener('storage', callback)
  return () => {
    listeners.delete(callback)
    window.removeEventListener('storage', callback)
  }
}

function writeLanguage(next: Language) {
  fallback = next
  try {
    localStorage.setItem(STORAGE_KEY, next)
  } catch {
    // Private mode or blocked storage: the choice applies for this page only.
  }
  listeners.forEach(notify => notify())
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, readLanguage, readServerLanguage)

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

    writeLanguage(language === 'en' ? 'es' : 'en')

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
