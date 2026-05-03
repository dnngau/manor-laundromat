import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'
import { InstagramIcon, MapPinIcon, NavigationIcon, PhoneIcon } from 'lucide-react'

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
  return (
    <div className='min-h-screen bg-background'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='mx-auto max-w-2xl px-4 py-16 sm:px-6'>
        <h1 className='mb-10 text-3xl font-semibold'>Contact Us</h1>
        <div className='divide-y divide-border rounded-xl border'>
          {contactItems.map(({ icon: Icon, label, content }) => (
            <div key={label} className='flex items-center gap-4 px-6 py-5'>
              <div className='flex size-10 shrink-0 items-center justify-center rounded-full bg-[#106090]/10'>
                <Icon className='size-5 text-[#106090]' />
              </div>
              <div className='flex flex-col gap-0.5'>
                <span className='text-xs font-medium uppercase tracking-wide text-muted-foreground'>{label}</span>
                <span className='text-base font-medium'>{content}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
