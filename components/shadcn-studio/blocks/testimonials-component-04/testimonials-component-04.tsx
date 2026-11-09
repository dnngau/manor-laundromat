'use client'

import { ExternalLinkIcon, StarIcon } from 'lucide-react'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Rating } from '@/components/ui/rating'
import { reviewSummary } from '@/lib/site-config'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const TestimonialsComponent = () => {
  const { language } = useLanguage()
  const t = translations[language].testimonials

  return (
    <section aria-labelledby='reviews-heading' className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl space-y-12 px-4 sm:space-y-16 sm:px-6 lg:px-8'>
        {/* Header Content */}
        <div className='flex flex-col items-center gap-4 text-center'>
          <h2 id='reviews-heading' className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            {t.heading}
          </h2>
          <p className='text-muted-foreground text-lg sm:text-xl'>{t.subheading}</p>
          <p className='flex items-center gap-2 text-base font-medium'>
            <StarIcon className='size-5 fill-current text-amber-600 dark:text-amber-400' aria-hidden='true' />
            <span>
              {reviewSummary.rating} {t.ratingOn} ({reviewSummary.count} {t.reviewsLabel})
            </span>
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel className='relative w-full space-y-12' opts={{ align: 'start', slidesToScroll: 1 }}>
          <CarouselContent className='-ml-6'>
            {reviewSummary.reviews.map(review => (
              <CarouselItem key={review.name} className='pl-6 md:basis-1/2 lg:basis-1/3'>
                <Card className='h-full shadow-none'>
                  <CardContent className='flex h-full flex-col gap-6'>
                    <Rating readOnly variant='yellow' size={24} value={review.rating} precision={0.5} />
                    <blockquote className='text-muted-foreground flex-1'>&ldquo;{review.content}&rdquo;</blockquote>
                    <div className='flex items-center gap-3'>
                      <Avatar className='size-10'>
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className='space-y-0.5'>
                        <p className='font-medium'>{review.name}</p>
                        <p className='text-muted-foreground text-xs'>{t.sourceLabel}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Next/Previous Controls */}
          <div className='flex items-center justify-center gap-4'>
            <CarouselPrevious
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
            />
            <CarouselNext
              variant='default'
              className='disabled:bg-primary/10 disabled:text-primary static size-9 translate-y-0 disabled:opacity-100'
            />
          </div>
        </Carousel>

        {/* Review CTA */}
        <div className='flex flex-col items-center gap-3 text-center'>
          <p className='text-lg font-medium'>{t.ctaTitle}</p>
          <Button asChild size='lg'>
            <a href={reviewSummary.reviewUrl} target='_blank' rel='noopener noreferrer'>
              {t.ctaLink}
              <ExternalLinkIcon className='size-4' aria-hidden='true' />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsComponent
