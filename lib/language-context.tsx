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
