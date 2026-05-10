'use client'

import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-33/hero-section-33'
import Features from '@/components/shadcn-studio/blocks/features-section-13/features-section-13'
import Pricing from '@/components/shadcn-studio/blocks/pricing-component-05/pricing-component-05'
import { businessHours, navigationData } from '@/lib/site-config'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

export default function Home() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className='min-h-screen bg-background'>
      <Navbar navigationData={navigationData} hours={businessHours} />

      <main className='flex flex-col'>
        <div className='bg-background bubble-bg'>
          <HeroSection />
        </div>

        <div className="bg-muted">
          <Features />
        </div>

        <div className='bg-background bubble-bg'>
          <Pricing />
        </div>

        <div className='bg-muted'>
          <div className='container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
            <div className='flex flex-col items-center gap-4'>
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>{t.dryers.heading}</h2>
              <p className='text-muted-foreground text-center text-lg sm:text-xl'>{t.dryers.subheading}</p>
            </div>
            <div className='mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6'>
              <div className='bg-background border-border flex w-full max-w-xs flex-col items-center gap-2 rounded-2xl border px-8 py-8 shadow-sm'>
                <span className='text-muted-foreground text-sm font-semibold uppercase tracking-widest'>{t.dryers.startLabel}</span>
                <span className='text-4xl font-bold'>$1.75</span>
                <span className='text-muted-foreground font-medium'>{t.dryers.minutes30}</span>
              </div>
              <div className='bg-background border-border flex w-full max-w-xs flex-col items-center gap-2 rounded-2xl border px-8 py-8 shadow-sm'>
                <span className='text-muted-foreground text-sm font-semibold uppercase tracking-widest'>{t.dryers.addTimeLabel}</span>
                <span className='text-4xl font-bold'>+$0.25</span>
                <span className='text-muted-foreground font-medium'>{t.dryers.per6minutes}</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
