'use client'

import { WashingMachineIcon, SparklesIcon, CreditCardIcon, ZapIcon, WifiIcon, MapPinIcon } from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const featureIcons = [WashingMachineIcon, SparklesIcon, CreditCardIcon, ZapIcon, WifiIcon, MapPinIcon]

const Features = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const featuresList = t.features.items.map((item, i) => ({
    icon: featureIcons[i],
    title: item.title,
    description: item.description,
  }))

  return (
    <section className='py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='mb-12 space-y-4 text-center sm:mb-16 lg:mb-24'>
          <span className='inline-block rounded-full bg-[#106090]/10 px-4 py-1.5 text-sm font-semibold text-[#106090] uppercase tracking-wider'>
            {t.features.badge}
          </span>
          <h2 className='text-2xl font-semibold md:text-3xl lg:text-4xl'>
            {t.features.heading}
          </h2>

          <p className='text-muted-foreground mx-auto max-w-3xl text-xl'>
            {t.features.subheading}
          </p>
        </div>

        {/* Features Grid */}
        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
          {featuresList.map((feature, index) => (
            <div key={index}>
              <Card className='hover:border-[#106090] hover:shadow-md h-full border shadow-none transition-all duration-300'>
                <CardContent className='flex gap-4'>
                  <Avatar className='size-10 rounded-lg shrink-0'>
                    <AvatarFallback className='bg-[#106090]/10 text-[#106090] rounded-lg [&>svg]:size-5'>
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
