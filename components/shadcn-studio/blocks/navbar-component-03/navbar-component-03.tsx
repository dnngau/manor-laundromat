import Image from 'next/image'
import { MapPinIcon, MenuIcon, PhoneIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Separator } from '@/components/ui/separator'

type HoursItem = {
  label: string
  startTime: string
  endTime: string
  startLabel: string
  endLabel: string
}

type NavigationItem = {
  title: string
  href: string
}[]

const Navbar = ({
  navigationData,
  hours
}: {
  navigationData: NavigationItem
  hours: HoursItem
}) => {
  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-3 max-md:hidden sm:px-6'>
        <div className='text-muted-foreground flex items-center gap-6 font-medium'>
          <span>
            {hours.label}{' '}
            <time dateTime={hours.startTime}>{hours.startLabel}</time> –{' '}
            <time dateTime={hours.endTime}>{hours.endLabel}</time>
          </span>
        </div>

        <div className='text-muted-foreground flex items-center gap-4'>
          <a
            href='https://www.google.com/maps/search/?api=1&query=876+Manor+St.+Lancaster,+PA+17603'
            className='hover:text-primary'
            aria-label='Open in Maps'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MapPinIcon className='size-5' />
          </a>
          <a href='tel:7179257480' className='hover:text-primary' aria-label='Call Manor Laundromat'>
            <PhoneIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator className='max-md:hidden' />

      <div className='mx-auto flex max-w-7xl items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <a href='#'>
          <div className='flex items-center'>
            <Image
              src='/manor-laundromat-logo.png' // TODO: FIX LOGO IMAGE
              alt='Manor Laundromat'
              width={48}
              height={48}
              className='size-12 rounded-full object-cover ring-1 ring-black/10'
            />
            <span className='ml-3 text-xl font-semibold max-sm:hidden'>Manor Laundromat</span>
          </div>
        </a>

        <div className='flex items-center gap-6'>
          <div className='text-muted-foreground flex items-center gap-5 font-medium max-md:hidden'>
            {navigationData.map((item, index) => (
              <div key={index} className='text-muted-foreground flex items-center gap-6 font-medium max-md:hidden'>
                <a href={item.href} className='hover:text-primary'>
                  {item.title}
                </a>

                {index < navigationData.length - 1 && (
                  <Separator orientation='vertical' className='!h-6 max-md:hidden' />
                )}
              </div>
            ))}
          </div>

          <div className='text-muted-foreground flex items-center gap-4 md:hidden'>
            <a
              href='https://www.google.com/maps/search/?api=1&query=876+Manor+St.+Lancaster,+PA+17603'
              className='hover:text-primary'
              aria-label='Open in Maps'
              target='_blank'
              rel='noopener noreferrer'
            >
              <MapPinIcon className='size-5' />
            </a>
            <a href='tel:7179257480' className='hover:text-primary' aria-label='Call Manor Laundromat'>
              <PhoneIcon className='size-5' />
            </a>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger className='md:hidden' asChild>
              <Button variant='outline' size='icon'>
                <MenuIcon />
                <span className='sr-only'>Menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className='w-56' align='end'>
              {navigationData.map((item, index) => (
                <DropdownMenuGroup key={index}>
                  <DropdownMenuItem>
                    <a href={item.href}>{item.title}</a>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}

export default Navbar
