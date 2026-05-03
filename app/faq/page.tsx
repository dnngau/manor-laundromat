import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import FAQ from '@/components/shadcn-studio/blocks/faq-component-04/faq-component-04'
import { businessHours, navigationData } from '@/lib/site-config'

export const metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Manor Laundromat in Lancaster, PA — machine sizes, pricing, payment, and hours.',
  alternates: { canonical: 'https://www.manor-laundromat.com/faq' },
}

const tabsData = [
  {
    name: 'General',
    value: 'general',
    faqs: [
      {
        id: 'hours',
        question: 'What are your hours?',
        answer: 'We are open every day from 6:00 AM to 10:00 PM.'
      },
      {
        id: 'location',
        question: 'Where are you located?',
        answer: 'You can find us at 876 Manor Street, Lancaster, PA 17603.'
      },
      {
        id: 'parking',
        question: 'Is parking available?',
        answer: 'Yes, there is convenient on-site parking available for customers.'
      }
    ]
  },
  {
    name: 'Machines',
    value: 'machines',
    faqs: [
      {
        id: 'sizes',
        question: 'What washer sizes do you offer?',
        answer: 'We have 30 lb, 40 lb, 60 lb, and 80 lb washers for different load sizes.'
      },
      {
        id: 'comforters',
        question: 'Can I wash comforters and bulky items?',
        answer: 'Yes. Our 60 lb and 80 lb machines are ideal for comforters and oversized loads.'
      },
      {
        id: 'dryers',
        question: 'How are dryers priced?',
        answer: 'Dryers are priced at a flat rate of $1.75 for every 30 minutes. Additional time can be added at $0.25 per 6 minutes'
      }
    ]
  },
  {
    name: 'Payment',
    value: 'payment',
    faqs: [
      {
        id: 'payment-methods',
        question: 'What payment methods do you accept?',
        answer: 'We accept cash and card (credit & debit).'
      },
      {
        id: 'attendant',
        question: 'Is there someone available to help?',
        answer: 'If you need help while onsite, call us at (717) 925-7480 and we can assist.'
      }
    ]
  }
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: tabsData.flatMap(tab =>
    tab.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    }))
  ),
}

export default function FAQPage() {
  return (
    <div className='min-h-screen bg-background bubble-bg'>
      <Navbar navigationData={navigationData} hours={businessHours} />
      <main className='bg-background'>
        <FAQ tabs={tabsData} />
      </main>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
