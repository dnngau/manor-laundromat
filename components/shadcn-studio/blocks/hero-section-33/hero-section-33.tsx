'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

const slides = ['/hero-carousel-1.svg', '/hero-carousel-2.svg', '/hero-carousel-3.svg']

const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide(previous => (previous + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className='relative overflow-hidden'>
      <div className='relative mx-auto h-[calc(100dvh-180px)] min-h-[620px] max-w-7xl sm:h-[calc(100dvh-190px)] sm:min-h-[660px] lg:h-[calc(100dvh-170px)] lg:min-h-[680px]'>
        {slides.map((slide, index) => (
          <Image
            key={slide}
            src={slide}
            alt='Laundry hero background'
            fill
            priority={index === 0}
            className={`object-cover transition-opacity duration-700 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className='absolute inset-0 bg-black/30' />
        <div className='relative z-10 flex h-full items-end px-6 pb-14 sm:p-10 lg:p-12'>
          <div className='flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4 md:justify-start'>
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
              <a href='#'>View More Photos</a>
            </Button>
          </div>
        </div>
        <div className='pointer-events-none absolute right-0 bottom-6 left-0 z-10 flex items-center justify-center gap-2 sm:bottom-4'>
          {slides.map((slide, index) => (
            <span
              key={slide}
              className={`h-1.5 rounded-full transition-all ${index === activeSlide ? 'w-8 bg-white' : 'w-4 bg-white/55'}`}
              aria-hidden='true'
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
