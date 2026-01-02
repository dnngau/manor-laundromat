import Navbar from "@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03";
import HeroSection from "@/components/shadcn-studio/blocks/hero-section-33/hero-section-33";
import Features from '@/components/shadcn-studio/blocks/features-section-13/features-section-13'
import Gallery from "@/components/shadcn-studio/blocks/gallery-component-05/gallery-component-05";
import Pricing from '@/components/shadcn-studio/blocks/pricing-component-05/pricing-component-05'
import FAQ from '@/components/shadcn-studio/blocks/faq-component-04/faq-component-04'

import {
  WashingMachineIcon,
  MapPinIcon,
  ZapIcon,
  WifiIcon,
  SparklesIcon,
  CreditCardIcon
} from 'lucide-react'


const tabsData = [
  {
    name: 'General',
    value: 'general',
    faqs: [
      {
        id: 'what-is-larasaas',
        question: 'What is LaraSaas? Why do I need a LaraSaas Boilerplate?',
        answer:
          'LaraSaas is a Laravel boilerplate specifically designed to help you launch your SaaS application quickly and efficiently. It provides pre-built features for user management, subscriptions, payments, and more, saving you significant development time and effort.'
      },
      {
        id: 'is-demo-available',
        question: 'Is there a demo available?',
        answer:
          'Yes, we offer a comprehensive demo that showcases all the features and capabilities of our platform. You can access it through our website and explore the interface firsthand.'
      },
      {
        id: 'payment-providers',
        question: 'Which payment providers are supported?',
        answer:
          'We support major payment providers including Stripe, PayPal, and Square. Our platform is designed to be flexible and can be integrated with additional payment gateways based on your needs.'
      },
      {
        id: 'codebase-distribution',
        question: 'How is the codebase distributed?',
        answer:
          "The codebase is distributed through a private repository system. Upon purchase, you'll receive access to the full source code and all future updates through our version control system."
      },
      {
        id: 'integration-question',
        question: 'I want to integrate LaraSaas into my existing project. Should I buy it?',
        answer:
          "While it's possible to integrate LaraSaas into existing projects, it's primarily designed as a standalone boilerplate. We recommend starting fresh with LaraSaas for the best experience and to fully utilize all features."
      }
    ]
  },
  {
    name: 'Pricing',
    value: 'pricing',
    faqs: [
      {
        id: 'pricing-plans',
        question: 'What pricing plans are available?',
        answer:
          'We offer flexible pricing plans including Starter, Professional, and Enterprise tiers. Each plan is designed to cater to different business needs and scales with your growth.'
      },
      {
        id: 'payment-methods',
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, PayPal, and bank transfers. Enterprise plans also support purchase orders and custom billing arrangements.'
      },
      {
        id: 'billing-cycle',
        question: 'How does the billing cycle work?',
        answer:
          'Billing cycles are monthly or annually, with significant discounts for annual subscriptions. The cycle starts on your subscription date.'
      },
      {
        id: 'refund-policy',
        question: 'What is your refund policy?',
        answer:
          "We offer a 30-day money-back guarantee for all plans. If you're not satisfied, contact support for a full refund within this period."
      },
      {
        id: 'plan-changes',
        question: 'Can I change my plan later?',
        answer:
          'Yes, you can upgrade or downgrade your plan at any time. Upgrades take effect immediately, while downgrades apply at the next billing cycle.'
      }
    ]
  },
  {
    name: 'Dashboard',
    value: 'dashboard',
    faqs: [
      {
        id: 'dashboard-features',
        question: 'What features are available in the dashboard?',
        answer:
          'Our dashboard includes real-time analytics, user management, subscription tracking, and customizable reports.'
      },
      {
        id: 'dashboard-customization',
        question: 'Can I customize the dashboard?',
        answer:
          "Yes, you can arrange widgets, configure notifications, and brand the interface with your company's colors and logo."
      },
      {
        id: 'dashboard-access',
        question: 'How do I manage user access?',
        answer:
          "Admins can manage user roles, permissions, and access levels through the dashboard's user management section."
      },
      {
        id: 'dashboard-reports',
        question: 'What types of reports are available?',
        answer:
          'We offer usage analytics, user activity, performance metrics, and custom report generation capabilities.'
      },
      {
        id: 'dashboard-backup',
        question: 'How is my dashboard data backed up?',
        answer:
          'Dashboard data is automatically backed up daily with 30-day retention. Enterprise plans include custom backup schedules.'
      }
    ]
  },
  {
    name: 'API',
    value: 'api',
    faqs: [
      {
        id: 'api-documentation',
        question: 'Where can I find the API documentation?',
        answer:
          'Our comprehensive API documentation is available at our developer portal with detailed endpoints and examples.'
      },
      {
        id: 'api-limits',
        question: 'Are there any API rate limits?',
        answer:
          'Yes, limits vary by plan. Basic plans include 1000 requests per hour, with higher limits for premium plans.'
      },
      {
        id: 'api-authentication',
        question: 'How does API authentication work?',
        answer:
          'We use API keys and OAuth 2.0 for authentication. Secure your credentials and never share them publicly.'
      },
      {
        id: 'api-versions',
        question: 'Which API versions are supported?',
        answer:
          'We maintain the current version and one previous version. Legacy versions are supported for 6 months after deprecation.'
      },
      {
        id: 'api-support',
        question: 'How can I get API support?',
        answer: 'We provide developer support through our dedicated API support channel and developer community forum.'
      }
    ]
  },
  {
    name: 'License',
    value: 'license',
    faqs: [
      {
        id: 'license-types',
        question: 'What types of licenses are available?',
        answer: 'We offer Single-domain, Multi-domain, and Enterprise licenses with one year of updates and support.'
      },
      {
        id: 'license-transfer',
        question: 'Can I transfer my license?',
        answer: 'License transfers are available on a case-by-case basis. Contact support for transfer requests.'
      },
      {
        id: 'license-renewal',
        question: 'How do license renewals work?',
        answer: 'Licenses can be renewed annually with a discount. Auto-renewal is available for convenience.'
      },
      {
        id: 'license-usage',
        question: 'What are the usage restrictions?',
        answer:
          'Usage restrictions vary by license type. Single-domain is for one production site, Multi-domain for multiple sites.'
      },
      {
        id: 'license-support',
        question: 'What support is included?',
        answer: 'All licenses include email support and access to documentation. Enterprise includes priority support.'
      }
    ]
  }
]

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
        <div className="bg-background">
          <HeroSection />
        </div>
        <div className="bg-muted">
          <Features featuresList={featuresList} />
        </div>
        <div className="bg-background">
          <Gallery galleryImage={galleryImages} />
        </div>
        <div className="bg-muted">
          <Pricing plans={plans} featureKeys={featureKeys} featureLabels={featureLabels} />
        </div>
        <div className="bg-background">
          <FAQ tabs={tabsData} />
        </div>
      </main>
    </div>
  );
}
