import Link from 'next/link'

const links = [
  { title: 'Home', href: '/' },
  { title: 'Hours & Location', href: '/hours-location' },
  { title: 'FAQ', href: '/faq' },
  { title: 'Contact', href: '/contact' },
]

export default function Footer() {
  return (
    <footer className='bg-[#0d3d5c] text-white mt-auto'>
      <div className='mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 sm:flex-row sm:justify-between'>

          <div className='flex flex-col gap-1.5 text-sm'>
            <span className='font-semibold text-white'>Manor Laundromat</span>
            <address className='not-italic text-white/60'>
              <a
                href='https://maps.app.goo.gl/y92K6Nwp8c91Cg1k8'
                target='_blank'
                rel='noopener noreferrer'
                className='hover:text-white transition-colors'
              >
                876 Manor Street, Lancaster, PA 17603
              </a>
            </address>
            <a
              href='tel:7179257480'
              className='text-white/60 hover:text-white transition-colors'
            >
              (717) 925-7480
            </a>
            <span className='text-white/60'>Open Daily: 6:00 AM – 10:00 PM</span>
          </div>

          <nav aria-label='Footer navigation'>
            <ul className='flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/60'>
              {links.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className='hover:text-white transition-colors'>
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

        </div>

        <p className='mt-8 text-xs text-white/40'>
          &copy; {new Date().getFullYear()} Manor Laundromat. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
