'use client'

import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import FAQ from '@/components/shadcn-studio/blocks/faq-component-04/faq-component-04'
import { businessHours, navigationData } from '@/lib/site-config'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function FAQContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className='min-h-screen bg-background bubble-bg'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='bg-background'>
        <FAQ tabs={t.faq.tabs} />
      </main>
    </div>
  )
}
