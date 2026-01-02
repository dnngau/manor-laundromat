import { CircleCheckIcon } from 'lucide-react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

import { cn } from '@/lib/utils'

type Plan = {
  name: string
  price: string
  period: string
  features: {
    loadCapacity: string
    machinesAvailable: number
    idealFor: string
    comforterFriendly: boolean
    bulkyItems: boolean
    paymentOptions: string
  }
  isPopular?: boolean
}[]

const Pricing = ({
  plans,
  featureKeys,
  featureLabels
}: {
  plans: Plan
  featureKeys: string[]
  featureLabels: string[]
}) => {
  return (
    <div className='bg-card container mx-auto max-w-7xl py-8 sm:py-16 lg:py-24'>
      <div className='space-y-12 px-4 sm:space-y-16 sm:px-6 lg:space-y-24 lg:px-8'>
        <div className='flex flex-col items-center gap-4'>
          <h2 className='text-2xl font-semibold sm:text-3xl lg:text-4xl'>Washer Pricing by Load Size</h2>
          <p className='text-muted-foreground text-center text-xl'>
            Dryers are priced at a flat rate of $1.00 for every 30 minutes.
          </p>
        </div>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              {plans.map(plan => (
                <TableHead key={plan.name} className={`${plan.isPopular && 'bg-primary rounded-t-lg'}`}>
                  <div className='flex flex-col items-center justify-center gap-1.5 py-3'>
                    <h3
                      className={cn(`text-xl font-semibold`, {
                        'text-primary-foreground': plan.isPopular
                      })}
                    >
                      {plan.name}
                    </h3>
                    <div
                      className={cn(`text-3xl font-bold`, {
                        'text-primary-foreground': plan.isPopular
                      })}
                    >
                      {plan.price}
                    </div>
                    <div
                      className={cn(`text-sm font-medium`, {
                        'text-primary-foreground': plan.isPopular,
                        'text-muted-foreground': !plan.isPopular
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
            {featureLabels.map((feature, index) => {
              const featureKey = featureKeys[index]

              return (
                <TableRow key={feature}>
                  <TableCell
                    className={cn(`h-13 w-80 p-2 text-base font-medium max-lg:min-w-50`, {
                      'border-border border-b': index !== featureLabels.length - 1
                    })}
                  >
                    {feature}
                  </TableCell>
                  {plans.map(plan => {
                    const featureValue = plan.features[featureKey as keyof typeof plan.features]
                    const isLastRow = index === featureLabels.length - 1

                    return (
                      <TableCell
                        key={`${plan.name}-${feature}`}
                        className={cn(`w-53 text-center max-lg:min-w-40`, {
                          'border-border border-b': !isLastRow,
                          'bg-muted': plan.isPopular && !isLastRow,
                          'bg-primary rounded-b-lg': plan.isPopular && isLastRow
                        })}
                      >
                        {featureValue === true ? (
                          <CircleCheckIcon className='mx-auto size-6' />
                        ) : featureValue === false ? (
                          <span className='text-base font-medium'>-</span>
                        ) : (
                          <span
                            className={cn(`text-base font-medium`, {
                              'text-primary-foreground': plan.isPopular && isLastRow
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
  )
}

export default Pricing
