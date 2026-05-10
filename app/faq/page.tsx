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
    { '@type': 'Question', name: 'Is parking available?', acceptedAnswer: { '@type': 'Answer', text: "Yes. We have free, convenient on-site parking." } },
    { '@type': 'Question', name: 'Is there free Wi-Fi?', acceptedAnswer: { '@type': 'Answer', text: "Yes, free Wi-Fi is available for all customers. Stream, scroll, or get some work done while your laundry runs." } },
    { '@type': 'Question', name: 'Is the facility climate-controlled?', acceptedAnswer: { '@type': 'Answer', text: "Yes. We're air-conditioned in the summer and heated in the winter, so it's a comfortable place to spend your time year-round." } },
    { '@type': 'Question', name: 'Do you sell laundry detergent or supplies?', acceptedAnswer: { '@type': 'Answer', text: "Yes! Our on-site vending machine carries detergent, fabric softener, dryer sheets, and more, including familiar brands like Ariel, Suavitel, and Tide. Forgot something at home? We've got you covered." } },
    { '@type': 'Question', name: 'Are you open on holidays?', acceptedAnswer: { '@type': 'Answer', text: "Yes, we're open 6 AM to 10 PM every day of the year, including holidays. If we ever need to close or adjust hours, we'll post it at the laundromat and on our Instagram (@manor_laundromat)." } },
    { '@type': 'Question', name: "What's the latest I can start a wash?", acceptedAnswer: { '@type': 'Answer', text: "We close at 10 PM, so we recommend starting your last wash by 9:00 PM." } },
    { '@type': 'Question', name: 'Is there a bathroom on-site?', acceptedAnswer: { '@type': 'Answer', text: "Not yet, but a bathroom is part of an upcoming remodel and we know it's important. Thanks for bearing with us in the meantime." } },
    { '@type': 'Question', name: 'Is the laundromat secure?', acceptedAnswer: { '@type': 'Answer', text: "Yes. The facility has security cameras throughout, and the parking lot and interior are well-lit during all operating hours. We want everyone to feel comfortable doing laundry, day or night." } },
    { '@type': 'Question', name: 'What if I leave clothes behind?', acceptedAnswer: { '@type': 'Answer', text: "We have security cameras and will do our best to help track down anything left behind. Give us a call at (717) 925-7480 and we'll check. That said, Manor Laundromat isn't responsible for lost or unattended belongings, so please keep an eye on your laundry while you're here." } },
    { '@type': 'Question', name: 'What payment methods do you accept?', acceptedAnswer: { '@type': 'Answer', text: 'We accept cash, card (credit & debit), and smartphone payments via the LaundryCat app.' } },
    { '@type': 'Question', name: 'Is there someone available to help?', acceptedAnswer: { '@type': 'Answer', text: "Yes, there are a few ways to reach us. Call (717) 925-7480 during open hours for machine issues, refunds, or general questions. For non-urgent questions, DM us on Instagram @manor_laundromat. For anything we can't resolve over the phone, we'll come on-site as quickly as we can." } },
    { '@type': 'Question', name: 'Is there an attendant on-site?', acceptedAnswer: { '@type': 'Answer', text: "No. Manor Laundromat is a self-service laundromat, so there's no attendant on-site — but we're always here to help. Call us at (717) 925-7480 during open hours with any questions." } },
    { '@type': 'Question', name: 'Do you offer any promotions or rewards?', acceptedAnswer: { '@type': 'Answer', text: "Yes! Load $20 onto your laundry card or LaundryCat app and get a $4 bonus — that's an instant 20% boost on every reload. We also run additional promotions throughout the year, so follow @manor_laundromat on Instagram to catch every deal." } },
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
