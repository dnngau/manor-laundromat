'use client'

import { type TouchEvent, useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const slides = [
  { src: '/hero-carousel-1.jpeg', alt: 'Exterior storefront of Manor Laundromat at 876 Manor Street, Lancaster PA, with open sign and parking' },
  { src: '/hero-carousel-2.jpeg', alt: 'Row of 40 lb Dexter washers inside Manor Laundromat in Lancaster, PA with seating area' },
  { src: '/hero-carousel-3.jpeg', alt: '60 lb and 80 lb large-capacity Dexter washers at Manor Laundromat, Lancaster PA' },
]

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)
  const autoAdvanceTimer = useRef<number | null>(null)

  const restartAutoAdvance = useCallback(() => {
    if (autoAdvanceTimer.current !== null) {
      window.clearInterval(autoAdvanceTimer.current)
    }

    autoAdvanceTimer.current = window.setInterval(() => {
      setActiveSlide(previous => (previous + 1) % slides.length)
    }, 5000)
  }, [])

  const goToNextSlide = useCallback((resetTimer = false) => {
    setActiveSlide(previous => (previous + 1) % slides.length)
    if (resetTimer) restartAutoAdvance()
  }, [restartAutoAdvance])

  const goToPreviousSlide = useCallback((resetTimer = false) => {
    setActiveSlide(previous => (previous - 1 + slides.length) % slides.length)
    if (resetTimer) restartAutoAdvance()
  }, [restartAutoAdvance])

  useEffect(() => {
    restartAutoAdvance()

    return () => {
      if (autoAdvanceTimer.current !== null) {
        window.clearInterval(autoAdvanceTimer.current)
      }
    }
  }, [restartAutoAdvance])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!window.matchMedia('(min-width: 1024px)').matches) {
        return
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault()
        goToNextSlide(true)
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        goToPreviousSlide(true)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goToNextSlide, goToPreviousSlide])

  const handleTouchStart = (event: TouchEvent<HTMLElement>) => {
    touchStartX.current = event.touches[0]?.clientX ?? null
    touchEndX.current = null
  }

  const handleTouchMove = (event: TouchEvent<HTMLElement>) => {
    touchEndX.current = event.touches[0]?.clientX ?? null
  }

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return
    }

    const swipeDistance = touchStartX.current - touchEndX.current
    const minSwipeDistance = 45

    if (Math.abs(swipeDistance) < minSwipeDistance) {
      return
    }

    if (swipeDistance > 0) {
      goToNextSlide(true)
      return
    }

    goToPreviousSlide(true)
  }

  return (
    <section
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <h1 className='sr-only'>Manor Laundromat — Self-Service Laundry in Lancaster, PA</h1>
      <div className='md:max-w-5xl md:mx-auto'>
        {/* Image container — full width on mobile, contained on desktop */}
        <div className='relative w-full h-[min(75vw,calc(100svh-220px))] overflow-hidden'>
          {slides.map((slide, index) => (
            <Image
              key={slide.src}
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={`object-cover object-top transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
          <div className='absolute inset-0 bg-black/10' />

          {/* Action buttons — overlaid inside image on desktop only */}
          <div className='absolute inset-0 z-10 hidden md:flex items-end p-10 lg:p-12'>
            <div className='flex w-full flex-wrap items-center gap-4'>
              <Button
                asChild
                size='lg'
                className='group relative min-w-[164px] overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
              >
                <a href='https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'>Get Directions</a>
              </Button>
              <Button
                className='min-w-[164px] rounded-lg bg-white/90 text-slate-900 hover:bg-white'
                size='lg'
                asChild
              >
                <a href='/photos'>View More Photos</a>
              </Button>
            </div>
          </div>

          {/* Dots — mobile only */}
          <div className='pointer-events-none absolute right-0 bottom-4 left-0 z-20 flex items-center justify-center gap-2 md:hidden'>
            {slides.map((slide, index) => (
              <span
                key={slide.src}
                className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-white' : 'w-4 bg-white/55'}`}
                aria-hidden='true'
              />
            ))}
          </div>

          {/* Prev/next nav — desktop only */}
          <div className='absolute right-0 bottom-4 left-0 z-20 hidden items-center justify-center gap-2 text-white md:flex'>
            <button
              type='button'
              onClick={() => goToPreviousSlide(true)}
              aria-label='Previous photo'
              className='inline-flex size-8 items-center justify-center rounded-full bg-black/45 transition-colors hover:bg-black/65'
            >
              <ChevronLeftIcon className='size-4' />
            </button>
            <span className='rounded-full bg-black/45 px-3 py-1 text-sm font-semibold'>
              {activeSlide + 1} of {slides.length}
            </span>
            <button
              type='button'
              onClick={() => goToNextSlide(true)}
              aria-label='Next photo'
              className='inline-flex size-8 items-center justify-center rounded-full bg-black/45 transition-colors hover:bg-black/65'
            >
              <ChevronRightIcon className='size-4' />
            </button>
          </div>
        </div>

        {/* Action buttons — below image on mobile only */}
        <div className='flex flex-wrap justify-center gap-3 py-4 px-4 md:hidden'>
          <Button
            asChild
            size='lg'
            className='group relative min-w-[164px] overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
          >
            <a href='https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'>Get Directions</a>
          </Button>
          <Button
            className='min-w-[164px] rounded-lg border border-slate-200 bg-white text-slate-900 hover:bg-slate-50'
            size='lg'
            asChild
          >
            <a href='/photos'>View More Photos</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
