import Navbar from "@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-33/hero-section-33";
import Features from '@/components/shadcn-studio/blocks/features-section-13/features-section-13'
import Gallery from "@/components/shadcn-studio/blocks/gallery-component-05/gallery-component-05";
import Pricing from '@/components/shadcn-studio/blocks/pricing-component-05/pricing-component-05'

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
  'Machines Available',
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
    price: '$4.50',
    period: 'per cycle',
    features: {
      loadCapacity: 'Small–Medium',
      machinesAvailable: 5,
      idealFor: 'Everyday laundry, towels',
      comforterFriendly: false,
      bulkyItems: false,
      paymentOptions: 'Coin, Card, Cash'
    }
  },
  {
    name: '40 lb Washer',
    price: '$6.00',
    period: 'per cycle',
    features: {
      loadCapacity: 'Medium–Large',
      machinesAvailable: 10,
      idealFor: 'Large family loads',
      comforterFriendly: false,
      bulkyItems: true,
      paymentOptions: 'Coin, Card, Cash'
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
      paymentOptions: 'Coin, Card, Cash'
    },
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
      paymentOptions: 'Coin, Card, Cash'
    }
  }
]

const featuresList = [
  {
    icon: WashingMachineIcon,
    title: 'Brand New, Large Machines',
    description: 'Featuring Dexter X-Series commercial washers up to 80 lbs. and 50 lb. dryers. Built to handle larger and bulkier loads.'
  },
  {
    icon: SparklesIcon,
    title: 'Fully Renovated Space',
    description: 'Enjoy a refreshed, well-lit, and climate-controlled laundromat designed for comfort, safety, and cleanliness.'
  },
  {
    icon: CreditCardIcon,
    title: 'Flexible Payment Options',
    description: 'Multiple ways to pay, including coin, cash, or card, powered by the Laundroworks payment system.'
  },
  {
    icon: ZapIcon,
    title: 'Fast, Efficient Wash & Dry',
    description: 'Powerful wash and dry performance with quicker cycle times to help you get in and out faster — even on busy days.'
  },
  {
    icon: WifiIcon,
    title: 'Free Wi-Fi & Comfortable Seating',
    description: 'Relax, stream, or get work done while your laundry runs — with free Wi-Fi and seating designed for longer loads.'
  },
  {
    icon: MapPinIcon,
    title: 'Convenient Lancaster Location',
    description: 'A conveniently located laundromat with ample parking, minutes from Stone Mill Plaza and Downtown Lancaster.'
  }
]

const businessHours = {
  label: "Open Daily",
  startTime: "08:00",
  endTime: "22:00",
  startLabel: "8:00 AM",
  endLabel: "10:00 PM",
};

const navigationData = [
  {
    title: "Home",
    href: "#",
  },
  {
    title: "Services",
    href: "#",
  },
  {
    title: "Photos",
    href: "#",
  },
  {
    title: "Machines & Pricing",
    href: "#",
  },
  {
    title: "About Us",
    href: "#",
  },
  {
    title: "Contact",
    href: "#",
  },
];

const galleryImages = [
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-27.png",
    alt: "Laundry interior",
    className: "col-span-2 max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-24.png",
    alt: "Washer row",
    className: "row-span-2 col-span-2",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-23.png",
    alt: "Dryers",
    className: "col-span-2 max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-26.png",
    alt: "Folding area",
    className: "max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-25.png",
    alt: "Machines detail",
    className: "max-h-60",
  },
  {
    src: "https://cdn.shadcnstudio.com/ss-assets/blocks/marketing/gallery/image-22.png",
    alt: "Storefront",
    className: "col-span-2 max-h-60",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Section */}
      <Navbar navigationData={navigationData} hours={businessHours} />

      {/* Main Content */}
      <main className="flex flex-col">
        <HeroSection />
        <Features featuresList={featuresList} />
        <Gallery galleryImage={galleryImages} />
        <Pricing plans={plans} featureKeys={featureKeys} featureLabels={featureLabels} />
      </main>
    </div>
  );
}
