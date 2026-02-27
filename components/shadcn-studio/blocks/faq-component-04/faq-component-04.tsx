import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

type FAQItem = {
  id: string
  question: string
  answer: string
}[]

type Tabs = {
  name: string
  value: string
  faqs: FAQItem
}[]

const FAQ = ({ tabs }: { tabs: Tabs }) => {
  return (
    <section className='py-12'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='text-center'>
          <h1 className='text-3xl font-semibold'>Frequently Asked Questions</h1>
          <p className='text-muted-foreground mt-3 text-lg'>
            Everything you need to know for a smooth laundry day
          </p>
        </div>

        <Tabs defaultValue='general' className='mt-8 gap-8'>
          <TabsList className='self-center'>
            {tabs.map(tab => (
              <TabsTrigger key={tab.value} value={tab.value}>
                {tab.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map(tab => (
            <TabsContent key={tab.value} value={tab.value}>
              <Accordion type='single' collapsible className='w-full space-y-2'>
                {tab.faqs.map((item, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index + 1}`}
                    className='bg-card rounded-md border-b-0 shadow-md data-[state=open]:shadow-lg'
                  >
                    <AccordionTrigger className='px-5 text-base [&>svg]:rotate-90 [&[data-state=open]>svg]:rotate-0'>
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className='text-muted-foreground px-5 text-base'>{item.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>

        {/* Support Link */}
        <div className='mt-12 text-center sm:mt-16 lg:mt-24'>
          <p className='text-muted-foreground'>
            Didn&apos;t find the answer you are looking for?{' '}
            <a href='#' className='text-foreground font-semibold'>
              Contact our support
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default FAQ
