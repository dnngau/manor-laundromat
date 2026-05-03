'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Navbar from '@/components/shadcn-studio/blocks/navbar-component-03/navbar-component-03'
import { businessHours, navigationData } from '@/lib/site-config'
import { XIcon, ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const photos = [
  { src: '/gallery/IMG_0889.jpeg', alt: 'Manor Laundromat interior' },
  { src: '/gallery/IMG_1051.jpeg', alt: 'Manor Laundromat interior' },
  { src: '/gallery/IMG_1050.jpeg', alt: 'Manor Laundromat interior' },
  { src: '/gallery/IMG_0871.jpeg', alt: 'Manor Laundromat interior' },
  { src: '/gallery/IMG_0873.jpeg', alt: 'Manor Laundromat interior' },
]

export default function PhotosPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

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
    <div className='min-h-screen bg-background'>
      <Navbar navigationData={navigationData} hours={businessHours} />

      <main className='mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8'>
        <h1 className='mb-8 text-3xl font-semibold'>Photos</h1>

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
            aria-label='Previous photo'
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
            aria-label='Next photo'
          >
            <ChevronRightIcon className='size-7' />
          </button>

          <button
            onClick={closeLightbox}
            className='absolute right-3 top-3 rounded-full bg-white/10 p-2 text-white hover:bg-white/25 sm:right-6 sm:top-6'
            aria-label='Close'
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
