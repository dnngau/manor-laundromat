'use client'

import { useState } from 'react'
import { CircleCheckIcon } from 'lucide-react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import { cn } from '@/lib/utils'
import { useLanguage } from '@/lib/language-context'
import { translations } from '@/lib/translations'

const Pricing = () => {
  const { language } = useLanguage()
  const t = translations[language]

  const { plans, featureLabels, featureKeys, planSizeLabels, washerLabel } = t.pricing

  const [selectedWeight, setSelectedWeight] = useState(() => plans[0]?.name.match(/(\d+)/)?.[1] ?? '30')
  const currentTabValue = plans.find(p => p.name.match(/(\d+)/)?.[1] === selectedWeight)?.name ?? plans[0]?.name

  const formatFeatureValue = (featureValue: string | number | boolean) => {
    if (featureValue === true) {
      return <CircleCheckIcon className='size-5 text-emerald-600' />
    }

    if (featureValue === false) {
      return <span>-</span>
    }

    return <span>{featureValue}</span>
  }

  const getPlanSizeLabel = (planName: string) => {
    const match = planName.match(/(\d+)\s*lb/i)
    if (!match) return planName
    return planSizeLabels[match[1]] ?? planName
  }

  const getPlanWeightLabel = (planName: string) => {
    const match = planName.match(/\d+\s*lb/i)
    return match ? match[0].replace(/\s+/g, ' ') : ''
  }

  const visibleFeatures = featureLabels
    .map((feature, index) => ({ feature, featureKey: featureKeys[index] }))
    .filter(({ featureKey }) => featureKey !== 'paymentOptions')

  return (
    <div className='bg-background container mx-auto max-w-7xl py-8 sm:py-16 lg:py-24'>
      <div className='space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col items-center gap-4'>
          <h2 id='machines-pricing-heading' className='text-center text-2xl font-semibold sm:text-3xl lg:text-4xl'>
            {t.pricing.heading}
          </h2>
          <p className='text-muted-foreground text-center text-lg sm:text-xl'>
            {t.pricing.subheading}
          </p>
        </div>

        <div className='md:hidden'>
          <Tabs
            value={currentTabValue}
            onValueChange={val => {
              const match = val.match(/(\d+)/)
              if (match) setSelectedWeight(match[1])
            }}
            className='gap-6'
          >
            <TabsList className='bg-muted h-auto w-full flex-nowrap gap-1 rounded-2xl p-1.5'>
              {plans.map(plan => (
                <TabsTrigger
                  key={plan.name.match(/(\d+)/)?.[1] ?? plan.name}
                  value={plan.name}
                  className='data-[state=active]:bg-background data-[state=active]:text-foreground h-11 min-w-0 flex-1 rounded-xl border-0 px-1.5 py-2 text-center text-[15px] font-semibold whitespace-nowrap data-[state=active]:shadow-sm'
                >
                  <span>{getPlanSizeLabel(plan.name).replace('Extra Large', 'X-Large').replace('Extra Grande', 'X-Grande')}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {plans.map(plan => (
              <TabsContent key={plan.name.match(/(\d+)/)?.[1] ?? plan.name} value={plan.name}>
                <div className='border-border bg-card overflow-hidden rounded-3xl border shadow-sm'>
                  <div
                    className={cn('border-border border-b px-6 py-6 text-center', {
                      'bg-primary text-primary-foreground': (plan as { isPopular?: boolean }).isPopular
                    })}
                  >
                    <h3 className='text-3xl font-bold'>{plan.price}</h3>
                    <p
                      className={cn('text-sm font-medium', {
                        'text-muted-foreground': !(plan as { isPopular?: boolean }).isPopular
                      })}
                    >
                      {plan.period}
                    </p>
                    <p className='mt-2 text-lg font-semibold'>
                      {getPlanSizeLabel(plan.name)} ({getPlanWeightLabel(plan.name)}) {washerLabel}
                    </p>
                  </div>
                  <dl>
                    {visibleFeatures.map(({ feature, featureKey }, index) => {
                      const typedFeatureKey = featureKey as keyof (typeof plan)['features']
                      const featureValue = plan.features[typedFeatureKey]

                      return (
                        <div
                          key={`${plan.name}-${feature}`}
                          className={cn('flex items-start justify-between gap-4 px-6 py-4', {
                            'border-border border-t': index > 0,
                            'bg-muted/35': index % 2 === 1
                          })}
                        >
                          <dt className='text-base font-medium'>{feature}</dt>
                          <dd className='max-w-[58%] text-right text-base font-semibold'>{formatFeatureValue(featureValue)}</dd>
                        </div>
                      )
                    })}
                  </dl>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className='hidden md:block'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead></TableHead>
                {plans.map(plan => (
                  <TableHead key={plan.name} className={`${(plan as { isPopular?: boolean }).isPopular && 'bg-primary rounded-t-lg'}`}>
                    <div className='flex flex-col items-center justify-center gap-1.5 py-3'>
                      <h3
                        className={cn(`text-xl font-semibold`, {
                          'text-primary-foreground': (plan as { isPopular?: boolean }).isPopular
                        })}
                      >
                        {plan.name}
                      </h3>
                      <div
                        className={cn(`text-3xl font-bold`, {
                          'text-primary-foreground': (plan as { isPopular?: boolean }).isPopular
                        })}
                      >
                        {plan.price}
                      </div>
                      <div
                        className={cn(`text-sm font-medium`, {
                          'text-primary-foreground': (plan as { isPopular?: boolean }).isPopular,
                          'text-muted-foreground': !(plan as { isPopular?: boolean }).isPopular
                        })}
                      >
                        {plan.period}
                      </div>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {visibleFeatures.map(({ feature, featureKey }, index) => {
                return (
                  <TableRow key={feature}>
                    <TableCell
                      className={cn(`h-13 w-80 p-2 text-base font-medium max-lg:min-w-50`, {
                        'border-border border-b': index !== visibleFeatures.length - 1
                      })}
                    >
                      {feature}
                    </TableCell>
                    {plans.map(plan => {
                      const featureValue = plan.features[featureKey as keyof typeof plan.features]
                      const isLastRow = index === visibleFeatures.length - 1

                      return (
                        <TableCell
                          key={`${plan.name}-${feature}`}
                          className={cn(`w-53 text-center max-lg:min-w-40`, {
                            'border-border border-b': !isLastRow,
                            'bg-muted': (plan as { isPopular?: boolean }).isPopular && !isLastRow,
                            'bg-primary rounded-b-lg': (plan as { isPopular?: boolean }).isPopular && isLastRow
                          })}
                        >
                          {featureValue === true ? (
                            <CircleCheckIcon className='mx-auto size-6 text-emerald-600' />
                          ) : featureValue === false ? (
                            <span className='text-base font-medium'>-</span>
                          ) : (
                            <span
                              className={cn(`text-base font-medium`, {
                                'text-primary-foreground': (plan as { isPopular?: boolean }).isPopular && isLastRow
                              })}
                            >
                              {featureValue}
                            </span>
                          )}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Pricing
