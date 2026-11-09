'use client'

import { ArrowRightIcon, GiftIcon } from 'lucide-react'

import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const BonusSection = () => {
  const { language } = useLanguage()
  const t = translations[language].bonus

  return (
    <section aria-labelledby='reload-bonus-heading' className='container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
      <div className='bg-primary text-primary-foreground mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-3xl px-6 py-10 text-center shadow-sm sm:px-12 sm:py-14'>
        <span className='bg-primary-foreground/15 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold uppercase tracking-widest'>
          <GiftIcon className='size-4' aria-hidden='true' />
          {t.badge}
        </span>

        <div className='flex flex-col gap-4'>
          <h2 id='reload-bonus-heading' className='text-3xl font-bold sm:text-4xl lg:text-5xl'>
            {t.heading}
          </h2>
          <p className='text-primary-foreground/85 mx-auto max-w-2xl text-lg sm:text-xl'>{t.subheading}</p>
        </div>

        <div className='flex items-center gap-4 sm:gap-8'>
          <div className='flex flex-col items-center gap-1'>
            <span className='text-primary-foreground/75 text-sm font-semibold uppercase tracking-widest'>{t.youPay}</span>
            <span className='text-4xl font-bold sm:text-5xl'>$20</span>
          </div>
          <ArrowRightIcon className='size-8 shrink-0 sm:size-10' aria-hidden='true' />
          <div className='flex flex-col items-center gap-1'>
            <span className='text-primary-foreground/75 text-sm font-semibold uppercase tracking-widest'>{t.youGet}</span>
            <span className='text-4xl font-bold sm:text-5xl'>$24</span>
          </div>
        </div>

        <p className='text-primary-foreground/75 text-sm sm:text-base'>{t.note}</p>
      </div>
    </section>
  )
}

export default BonusSection
