'use client'

import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const googleMapsUrl = 'https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'
const embeddedMapUrl =
  'https://www.google.com/maps?q=876+Manor+Street+Lancaster+PA+17603&z=15&output=embed&gestureHandling=greedy'

export default function HoursLocationContent() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className='min-h-screen bg-background bubble-bg'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='mx-auto max-w-7xl bg-background px-4 py-12 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-semibold'>{t.hoursLocation.heading}</h1>
        <p className='text-muted-foreground mt-3 text-lg'>{t.hoursLocation.subheading}</p>

        <div className='mt-8 grid gap-8 lg:grid-cols-[1fr_1.4fr]'>
          <section className='border-border bg-card rounded-2xl border p-6'>
            <h2 className='text-xl font-semibold'>{t.hoursLocation.visitHeading}</h2>
            <div className='mt-6 space-y-5 text-lg'>
              <p>
                <strong>{t.hoursLocation.openDailyLabel}</strong> {t.hoursLocation.openDailyHours}
              </p>
              <p>
                <strong>{t.hoursLocation.addressLabel}</strong> {t.hoursLocation.address}
              </p>
            </div>
            <div className='mt-8 flex flex-wrap gap-3'>
              <a
                href={googleMapsUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-primary text-primary-foreground inline-flex items-center rounded-lg px-4 py-2.5 font-medium'
              >
                {t.hoursLocation.getDirections}
              </a>
            </div>
          </section>

          <section className='border-border overflow-hidden rounded-2xl border'>
            <iframe
              title='Manor Laundromat Location on Google Maps'
              src={embeddedMapUrl}
              className='h-[420px] w-full border-0 touch-none sm:h-[520px]'
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
              allowFullScreen
            />
          </section>
        </div>
      </main>
    </div>
  )
}
