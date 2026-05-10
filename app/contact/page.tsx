import ContactContent from './contact-content'

export const metadata = {
  title: 'Contact Us',
  description:
    'Contact Manor Laundromat in Lancaster, PA. Call (717) 925-7480 or find us at 876 Manor Street, Lancaster, PA 17603.',
  alternates: { canonical: 'https://www.manor-laundromat.com/contact' },
}

export default function ContactPage() {
  return <ContactContent />
}
