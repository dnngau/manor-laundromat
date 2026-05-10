import FAQContent from './faq-content'

export const metadata = {
  title: 'FAQ',
  description:
    'Frequently asked questions about Manor Laundromat in Lancaster, PA — machine sizes, pricing, payment, and hours.',
  alternates: { canonical: 'https://www.manor-laundromat.com/faq' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What are your hours?', acceptedAnswer: { '@type': 'Answer', text: 'We are open every day from 6:00 AM to 10:00 PM.' } },
    { '@type': 'Question', name: 'Where are you located?', acceptedAnswer: { '@type': 'Answer', text: 'You can find us at 876 Manor Street, Lancaster, PA 17603.' } },
    { '@type': 'Question', name: 'Is parking available?', acceptedAnswer: { '@type': 'Answer', text: 'Yes, there is convenient on-site parking available for customers.' } },
    { '@type': 'Question', name: 'What washer sizes do you offer?', acceptedAnswer: { '@type': 'Answer', text: 'We have 30 lb, 40 lb, 60 lb, and 80 lb washers for different load sizes.' } },
    { '@type': 'Question', name: 'Can I wash comforters and bulky items?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Our 60 lb and 80 lb machines are ideal for comforters and oversized loads.' } },
    { '@type': 'Question', name: 'How are dryers priced?', acceptedAnswer: { '@type': 'Answer', text: 'Dryers are priced at a flat rate of $1.75 for every 30 minutes. Additional time can be added at $0.25 per 6 minutes' } },
    { '@type': 'Question', name: 'What payment methods do you accept?', acceptedAnswer: { '@type': 'Answer', text: 'We accept cash and card (credit & debit).' } },
    { '@type': 'Question', name: 'Is there someone available to help?', acceptedAnswer: { '@type': 'Answer', text: 'If you need help while onsite, call us at (717) 925-7480 and we can assist.' } },
  ],
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
