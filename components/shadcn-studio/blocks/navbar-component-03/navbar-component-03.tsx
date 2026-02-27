'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { type MouseEvent, useEffect, useState } from 'react'
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
import { cn } from '@/lib/utils'

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
  const pathname = usePathname()
  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    const syncHash = () => setCurrentHash(window.location.hash)

    syncHash()
    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [pathname])

  const isActiveLink = (href: string) => {
    if (href.startsWith('/#')) {
      return pathname === '/' && currentHash === href.replace('/', '')
    }

    return pathname === href
  }

  const handleLogoClick = () => {
    setCurrentHash('')

    if (pathname === '/') {
      window.history.replaceState(null, '', '/')
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
    }
  }

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    const [targetPath, targetHash] = href.split('#')
    const normalizedTargetPath = targetPath || '/'
    const currentPath = pathname || '/'

    if (normalizedTargetPath !== currentPath) {
      return
    }

    event.preventDefault()

    if (!targetHash) {
      setCurrentHash('')
      window.history.replaceState(null, '', normalizedTargetPath)
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      return
    }

    const anchorId = decodeURIComponent(targetHash)
    const anchorHash = `#${anchorId}`
    const target =
      anchorId === 'machines' || anchorId === 'pricing' || anchorId === 'machines-pricing-heading'
        ? document.getElementById('machines-pricing-heading')
        : document.getElementById(anchorId)

    const stickyHeader = document.querySelector('header.sticky') as HTMLElement | null
    const headerOffset = stickyHeader ? stickyHeader.getBoundingClientRect().height + 16 : 0
    const targetTop = target ? target.getBoundingClientRect().top + window.scrollY - headerOffset : 0

    setCurrentHash(anchorHash)
    window.history.replaceState(null, '', `/${anchorHash}`)
    window.scrollTo({ top: Math.max(targetTop, 0), left: 0, behavior: 'auto' })
  }

  return (
    <header className='bg-background sticky top-0 z-50'>
      <div className='flex w-full items-center justify-between gap-4 bg-[#106090] px-4 py-3 text-[#f5fbff] sm:gap-8 sm:px-6'>
        <div className='flex items-center gap-6 text-sm font-medium sm:text-base'>
          <span>
            {hours.label}{' '}
            <time dateTime={hours.startTime}>{hours.startLabel}</time> –{' '}
            <time dateTime={hours.endTime}>{hours.endLabel}</time>
          </span>
        </div>

        <div className='flex items-center gap-4'>
          <a
            href='https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'
            className='text-[#f5fbff] hover:text-white'
            aria-label='Open in Maps'
            target='_blank'
            rel='noopener noreferrer'
          >
            <MapPinIcon className='size-5' />
          </a>
          <a href='tel:7179257480' className='text-[#f5fbff] hover:text-white' aria-label='Call Manor Laundromat'>
            <PhoneIcon className='size-5' />
          </a>
        </div>
      </div>

      <Separator className='bg-white/20' />

      <div className='flex w-full items-center justify-between gap-8 px-4 py-7 sm:px-6'>
        <Link href='/' onClick={handleLogoClick}>
          <div className='flex items-center'>
            <Image
              src='/ManorLaundromat_Logo.png'
              alt='Manor Laundromat'
              width={7500}
              height={1348}
              className='hidden h-14 w-auto md:block'
              priority
            />
            <Image
              src='/ManorLaundromat_Logo.png'
              alt='Manor Laundromat'
              width={7500}
              height={1348}
              className='h-10 w-auto max-w-[220px] md:hidden'
              priority
            />
          </div>
        </Link>

        <div className='flex items-center gap-6'>
          <div className='text-muted-foreground flex items-center gap-5 font-medium max-md:hidden'>
            {navigationData.map((item, index) => (
              <div key={index} className='text-muted-foreground flex items-center gap-6 font-medium max-md:hidden'>
                <Link
                  href={item.href}
                  onClick={event => handleNavClick(event, item.href)}
                  className={cn('hover:text-primary', {
                    'text-primary font-semibold': isActiveLink(item.href)
                  })}
                >
                  {item.title}
                </Link>

                {index < navigationData.length - 1 && (
                  <Separator orientation='vertical' className='!h-6 max-md:hidden' />
                )}
              </div>
            ))}
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
                  <DropdownMenuItem
                    asChild
                    className={cn({
                      'bg-muted font-semibold': isActiveLink(item.href)
                    })}
                  >
                    <Link href={item.href} onClick={event => handleNavClick(event, item.href)}>
                      {item.title}
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator />
    </header>
  )
}

export default Navbar
