import type { ComponentType } from 'react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Features = {
  icon: ComponentType<{ className?: string }>
  title: string
  description: string
}[]

const Features = ({ featuresList }: { featuresList: Features }) => {
  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            A Better Laundromat Experience in Lancaster
          </h2>

          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            A clean, upgraded space with large-capacity machines and simple amenities designed to make laundry easier.
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresList.map((feature, index) => (
            <div key={index}>
              <Card className='hover:border-primary h-full border shadow-none transition-colors duration-300'>
                <CardContent className='flex gap-4'>
                  <Avatar className='size-9 rounded-md'>
                    <AvatarFallback className='bg-card-foreground/10 text-card-foreground rounded-md [&>svg]:size-6'>
                      <feature.icon />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h6 className='mb-1 text-lg font-semibold'>{feature.title}</h6>
                    <p className='text-muted-foreground leading-relaxed'>{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
