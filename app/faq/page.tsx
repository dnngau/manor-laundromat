import FAQContent from './faq-content'
import { translations } from '@/lib/translations'

export const metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Manor Laundromat in Lancaster, PA — machine sizes, pricing, payment, and hours.',
  alternates: { canonical: 'https://www.manor-laundromat.com/faq' },
}

// Built from the same English FAQ text the page renders, so the two can't drift apart.
const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: translations.en.faq.tabs.flatMap(tab =>
    tab.faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer.replaceAll('{{instagram}}', '@manor_laundromat') },
    }))
  ),
}

export default function FAQPage() {
  return (
    <>
      <FAQContent />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
}
