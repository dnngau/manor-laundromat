import HoursLocationContent from './hours-location-content'

export const metadata = {
  title: 'Hours & Location',
  description:
    'Manor Laundromat is open daily 6AM–10PM at 876 Manor Street, Lancaster, PA 17603. Get directions and find us on Google Maps.',
  alternates: { canonical: 'https://www.manor-laundromat.com/hours-location' },
}

export default function HoursLocationPage() {
  return <HoursLocationContent />
}
