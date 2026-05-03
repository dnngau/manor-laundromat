import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import HeroSection from '@/components/shadcn-studio/blocks/hero-section-33/hero-section-33'
import Features from '@/components/shadcn-studio/blocks/features-section-13/features-section-13'
import Pricing from '@/components/shadcn-studio/blocks/pricing-component-05/pricing-component-05'
import { businessHours, navigationData } from '@/lib/site-config'

import {
  WashingMachineIcon,
  MapPinIcon,
  ZapIcon,
  WifiIcon,
  SparklesIcon,
  CreditCardIcon
} from 'lucide-react'

const featureLabels = [
  'Load Capacity',
  'Units in Store',
  'Ideal For',
  'Comforter Friendly',
  'Bulky Items',
  'Payment Options'
]

const featureKeys = [
  'loadCapacity',
  'machinesAvailable',
  'idealFor',
  'comforterFriendly',
  'bulkyItems',
  'paymentOptions'
]

const plans = [
  {
    name: '30 lb Washer',
    price: '$4.75',
    period: 'per cycle',
    features: {
      loadCapacity: 'Small-Medium',
      machinesAvailable: 5,
      idealFor: 'Everyday laundry, towels',
      comforterFriendly: false,
      bulkyItems: false,
      paymentOptions: 'Card, Cash, or Smartphone'
    }
  },
  {
    name: '40 lb Washer',
    price: '$6.25',
    period: 'per cycle',
    features: {
      loadCapacity: 'Medium-Large',
      machinesAvailable: 10,
      idealFor: 'Large family loads',
      comforterFriendly: false,
      bulkyItems: true,
      paymentOptions: 'Card, Cash, or Smartphone'
    }
  },
  {
    name: '60 lb Washer',
    price: '$8.00',
    period: 'per cycle',
    features: {
      loadCapacity: 'Large',
      machinesAvailable: 3,
      idealFor: 'Comforters, blankets',
      comforterFriendly: true,
      bulkyItems: true,
      paymentOptions: 'Card, Cash, or Smartphone'
    }
  },
  {
    name: '80 lb Washer',
    price: '$11.00',
    period: 'per cycle',
    features: {
      loadCapacity: 'Extra Large',
      machinesAvailable: 2,
      idealFor: 'Bulky items, oversized loads',
      comforterFriendly: true,
      bulkyItems: true,
      paymentOptions: 'Card, Cash, or Smartphone'
    }
  }
]

const featuresList = [
  {
    icon: WashingMachineIcon,
    title: 'Brand New, Large Machines',
    description:
      'Featuring Dexter X-Series commercial washers up to 80 lbs. and 50 lb. dryers. Built to handle larger and bulkier loads.'
  },
  {
    icon: SparklesIcon,
    title: 'Fully Renovated Space',
    description:
      'Enjoy a refreshed, well-lit, and climate-controlled laundromat designed for comfort, safety, and cleanliness.'
  },
  {
    icon: CreditCardIcon,
    title: 'Flexible Payment Options',
    description: 'Multiple ways to pay, including cash, card, or smartphone via an app, powered by the Laundroworks payment system.'
  },
  {
    icon: ZapIcon,
    title: 'Fast, Efficient Wash & Dry',
    description:
      'Powerful wash and dry performance with quicker cycle times to help you get in and out faster - even on busy days.'
  },
  {
    icon: WifiIcon,
    title: 'Free Wi-Fi & Comfortable Seating',
    description:
      'Relax, stream, or get work done while your laundry runs - with free Wi-Fi and seating designed for longer loads.'
  },
  {
    icon: MapPinIcon,
    title: 'Convenient Lancaster Location',
    description: 'A conveniently located laundromat with ample parking, minutes from Stone Mill Plaza and Downtown Lancaster.'
  }
]

export default function Home() {
  return (
    <div className='min-h-screen bg-background'>
      <Navbar navigationData={navigationData} hours={businessHours} />

      <main className='flex flex-col'>
        <div className='bg-background'>
          <HeroSection />
        </div>
        <div className="bg-muted">
          <Features featuresList={featuresList} />
        </div>
        <div className='bg-background'>
          <Pricing plans={plans} featureKeys={featureKeys} featureLabels={featureLabels} />
        </div>
        <div className='bg-muted'>
          <div className='container mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-24'>
            <div className='flex flex-col items-center gap-4'>
              <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Dryer Sizes & Prices</h2>
              <p className='text-muted-foreground text-center text-lg sm:text-xl'>All dryers hold up to 50 lbs, enough room for a full load, comforters, and bulky items.</p>
            </div>
            <div className='mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-6'>
              <div className='bg-background border-border flex w-full max-w-xs flex-col items-center gap-2 rounded-2xl border px-8 py-8 shadow-sm'>
                <span className='text-muted-foreground text-sm font-semibold uppercase tracking-widest'>Start</span>
                <span className='text-4xl font-bold'>$1.75</span>
                <span className='text-muted-foreground font-medium'>30 minutes</span>
              </div>
              <div className='bg-background border-border flex w-full max-w-xs flex-col items-center gap-2 rounded-2xl border px-8 py-8 shadow-sm'>
                <span className='text-muted-foreground text-sm font-semibold uppercase tracking-widest'>Add Time</span>
                <span className='text-4xl font-bold'>+$0.25</span>
                <span className='text-muted-foreground font-medium'>per 6 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
