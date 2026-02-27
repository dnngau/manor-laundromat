import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'

export default function ContactPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-semibold'>Contact</h1>
        <div className='mt-8 space-y-4 text-lg'>
          <p>
            <strong>Phone:</strong>{' '}
            <a href='tel:7179257480' className='text-primary font-medium underline'>
              (717) 925-7480
            </a>
          </p>
          <p>
            <strong>Address:</strong> 876 Manor Street, Lancaster, PA 17603
          </p>
          <p>
            <a
              href='https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'
              target='_blank'
              rel='noopener noreferrer'
              className='text-primary font-medium underline'
            >
              Get Directions
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}
