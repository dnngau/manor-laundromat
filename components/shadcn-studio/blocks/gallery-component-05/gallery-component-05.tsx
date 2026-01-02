import { cn } from '@/lib/utils'
import { MotionPreset } from '@/components/ui/motion-preset'
import { Button } from '@/components/ui/button'

type GalleryImage = {
  src: string
  alt: string
  className?: string
}[]

const Gallery = ({ galleryImage }: { galleryImage: GalleryImage }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            A Look Inside Manor Laundromat
          </h2>
          <p className='text-muted-foreground text-xl'>
            Explore our newly renovated space.
          </p>
          <div className='flex flex-wrap items-center justify-center gap-4'>
            <Button
              asChild
              size='lg'
              className='group relative w-fit overflow-hidden rounded-lg text-base before:absolute before:inset-0 before:rounded-[inherit] before:bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.5)_50%,transparent_75%,transparent_100%)] before:bg-[length:250%_250%,100%_100%] before:bg-[position:200%_0,0_0] before:bg-no-repeat before:transition-[background-position_0s_ease] before:duration-1000 hover:before:bg-[position:-100%_0,0_0] has-[>svg]:px-6 dark:before:bg-[linear-gradient(45deg,transparent_25%,rgba(0,0,0,0.2)_50%,transparent_75%,transparent_100%)]'
            >
              <a href='#'>
                View All
              </a>
            </Button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className='grid grid-cols-2 gap-6 sm:grid-cols-4 md:grid-cols-6'>
          {galleryImage.map((image, index) => (
            <div
              key={index}
              className={cn('overflow-hidden rounded-lg', image.className)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
