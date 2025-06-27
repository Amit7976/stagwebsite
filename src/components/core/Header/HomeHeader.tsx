import { ModeToggle } from '@/components/ui/ModeToggle'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function HomeHeader() {
    return (
        <>
            <header className='flex items-center justify-between px-10 py-3'>
                <div>
                    <Image src={'/images/logo/logo.svg'} width={200} height={200} alt='Hirebie Logo' className='w-40' />
                </div>
                <div className="flex items-center justify-end gap-2">
                    <div className='rounded-full bg-white p-2 px-5 flex items-center shadow-xs uppercase'>
                        <Link className='text-xs text-gray-600 font-medium block py-1 pr-10' href={'#'}>Home</Link>
                        <Link className='text-xs text-gray-600 font-medium block py-1 pr-10' href={'#'}>Our Services</Link>
                        <Link className='text-xs text-gray-600 font-medium block py-1 pr-10' href={'#'}>Pricing</Link>
                        <Link className='text-xs text-gray-600 font-medium block py-1 pr-10' href={'#'}>Our Work</Link>
                        <Link className='text-xs text-gray-600 font-medium block py-1 pr-10' href={'#'}>Blogs</Link>
                        <Link className='text-xs text-gray-600 font-medium block py-1 pr-10' href={'#'}>Contact Us</Link>
                        <Link className='text-xs text-gray-600 font-medium block' href={'#'}>About Us</Link>
                    </div>
                    <ModeToggle />
                    <div className='rounded-full bg-orange-600 p-2 px-5 flex items-center shadow'>
                        <Link className='text-xs text-white font-medium block py-1 uppercase' href={'#'}>Get A Quote</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HomeHeader
