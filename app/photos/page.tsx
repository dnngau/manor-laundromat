import type { Metadata } from 'next'
import PhotosClient from './photos-client'

export const metadata: Metadata = {
  title: 'Photos',
  description:
    'See inside Manor Laundromat in Lancaster, PA — our renovated space, Dexter washers, and clean facilities.',
  alternates: { canonical: 'https://www.manor-laundromat.com/photos' },
}

export default function PhotosPage() {
  return <PhotosClient />
}
