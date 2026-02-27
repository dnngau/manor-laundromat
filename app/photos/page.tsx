import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'

export default function PhotosPage() {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
        <h1 className='text-3xl font-semibold'>Photos</h1>
        <p className='text-muted-foreground mt-4 text-lg'>
          Photo gallery coming soon. We will add interior, machine, and storefront photos here.
        </p>
      </main>
    </div>
  )
}
