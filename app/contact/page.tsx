import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'
import { InstagramIcon, MapPinIcon, NavigationIcon, PhoneIcon, StarIcon } from 'lucide-react'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Manor Laundromat in Lancaster, PA. Call (717) 925-7480 or find us at 876 Manor Street, Lancaster, PA 17603.',
  alternates: { canonical: 'https://www.manor-laundromat.com/contact' },
}

const contactItems = [
  {
    icon: PhoneIcon,
    label: 'Phone',
    content: (
      <a href='tel:7179257480' className='text-primary hover:underline'>
        (717) 925-7480
      </a>
    )
  },
  {
    icon: MapPinIcon,
    label: 'Address',
    content: <span>876 Manor Street, Lancaster, PA 17603</span>
  },
  {
    icon: NavigationIcon,
    label: 'Directions',
    content: (
      <a
        href='https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'
        target='_blank'
        rel='noopener noreferrer'
        className='text-primary hover:underline'
      >
        Open in Google Maps
      </a>
    )
  },
  {
    icon: InstagramIcon,
    label: 'Instagram',
    content: (
      <a
        href='https://www.instagram.com/manor_laundromat/'
        target='_blank'
        rel='noopener noreferrer'
        className='text-primary hover:underline'
      >
        @manor_laundromat
      </a>
    )
  }
]

export default function ContactPage() {
  const embeddedMapUrl =
    'https://www.google.com/maps?q=876+Manor+Street+Lancaster+PA+17603&z=15&output=embed&gestureHandling=greedy'

  return (
    <div className='min-h-screen bg-background bubble-bg'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='mx-auto max-w-2xl bg-background px-4 py-16 sm:px-6'>
        <h1 className='mb-10 text-3xl font-semibold'>Contact Us</h1>

        <div className='mb-8 rounded-xl border bg-card p-6 flex items-start gap-4'>
          <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-[#106090]/10'>
            <StarIcon className='size-5 text-[#106090]' />
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-xs font-medium uppercase tracking-wide text-slate-400'>Leave a Review</span>
            <p className='text-base font-medium'>Enjoyed your visit?</p>
            <p className='text-sm text-muted-foreground'>Reviews help other Lancaster locals find us. We&apos;d love to hear about your experience.</p>
            <a
              href='https://g.page/r/CQt4w-d2RIzpEBM/review'
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline'
            >
              Write a Google Review
            </a>
          </div>
        </div>

        <div className='divide-y divide-border rounded-xl border bg-card'>
          {contactItems.map(({ icon: Icon, label, content }) => (
            <div key={label} className='flex items-center gap-4 px-6 py-5'>
              <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-[#106090]/10'>
                <Icon className='size-5 text-[#106090]' />
              </div>
              <div className='flex flex-col gap-0.5'>
                <span className='text-xs font-medium uppercase tracking-wide text-slate-400'>{label}</span>
                <span className='text-base font-medium'>{content}</span>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-8 overflow-hidden rounded-2xl border border-border'>
          <iframe
            title='Manor Laundromat Location on Google Maps'
            src={embeddedMapUrl}
            className='h-72 w-full border-0 sm:h-96'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
            allowFullScreen
          />
        </div>
      </main>
    </div>
  )
}
