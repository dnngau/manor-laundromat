'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const photos = [
  { src: '/gallery/IMG_0889.jpeg', alt: 'Exterior storefront of Manor Laundromat at 876 Manor Street, Lancaster PA with open sign' },
  { src: '/gallery/IMG_1050.jpeg', alt: 'Row of 40 lb Dexter washers inside Manor Laundromat in Lancaster, PA with seating area' },
  { src: '/gallery/IMG_1051.jpeg', alt: '60 lb and 80 lb large-capacity Dexter washers at Manor Laundromat, Lancaster PA' },
  { src: '/gallery/IMG_0871.jpeg', alt: 'Row of 50 lb dryers at Manor Laundromat, Lancaster PA' },
  { src: '/gallery/IMG_0873.jpeg', alt: '30 lb front-load washers at Manor Laundromat in Lancaster, PA' },
]

export default function PhotosClient() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)
  const { language } = useLanguage()
  const t = translations[language]

  const closeLightbox = () => setLightboxIndex(null)

  const prev = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i - 1 + photos.length) % photos.length))
  }, [])

  const next = useCallback(() => {
    setLightboxIndex(i => (i === null ? null : (i + 1) % photos.length))
  }, [])

  useEffect(() => {
    if (lightboxIndex === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightboxIndex, prev, next])

  return (
    <div className='min-h-screen bg-background bubble-bg'>
      <Navbar navigationData={navigationData} hours={businessHours} />

      <main className='mx-auto max-w-5xl bg-background px-4 py-12 sm:px-6 lg:px-8'>
        <h1 className='mb-8 text-3xl font-semibold'>{t.photos.heading}</h1>

        <div className='grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4'>
          {photos.map((photo, i) => (
            <button
              key={photo.src}
              onClick={() => setLightboxIndex(i)}
              className='group relative aspect-square overflow-hidden rounded-xl bg-muted focus:outline-none focus-visible:ring-2 focus-visible:ring-primary'
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes='(max-width: 640px) 50vw, 33vw'
                className='object-cover transition-transform duration-300 group-hover:scale-105'
              />
            </button>
          ))}
        </div>
      </main>

      {lightboxIndex !== null && (
        <div
          className='fixed inset-0 z-50 flex items-center justify-center bg-black/90'
          onClick={closeLightbox}
        >
          <button
            onClick={e => { e.stopPropagation(); prev() }}
            className='absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 sm:left-6'
            aria-label={t.photos.prevPhoto}
          >
            <ChevronLeftIcon className='size-7' />
          </button>

          <div
            className='relative mx-16 max-h-[90vh] max-w-4xl w-full'
            onClick={e => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              width={1600}
              height={1200}
              className='max-h-[90vh] w-full rounded-lg object-contain'
              priority
            />
          </div>

          <button
            onClick={e => { e.stopPropagation(); next() }}
            className='absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 sm:right-6'
            aria-label={t.photos.nextPhoto}
          >
            <ChevronRightIcon className='size-7' />
          </button>

          <button
            onClick={closeLightbox}
            className='absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 sm:right-6 sm:top-6'
            aria-label={t.photos.close}
          >
            <XIcon className='size-5' />
          </button>

          <span className='absolute bottom-4 left-1/2 -translate-x-1/2 text-sm text-white/60'>
            {lightboxIndex + 1} / {photos.length}
          </span>
        </div>
      )}
    </div>
  )
}
