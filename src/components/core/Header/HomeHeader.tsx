import { ModeToggle } from '@/components/ui/ModeToggle';
import Image from 'next/image';
import Link from 'next/link';
import Hamburger from './Hamburger';


function HomeHeader() {
    return (
        <>
            <header className='flex items-center justify-between md:px-10 py-3 px-5 bg-transparent z-50 w-full absolute top-0'>
                <Link href={"/"}>
                    <Image src={'/images/logo/logo.svg'} width={200} height={200} alt='Hirebie Logo' className='w-30' />
                </Link>
                <Hamburger />
                <div className="hidden lg:flex items-center justify-end gap-2">
                    <div className='rounded-full text-gray-600 dark:text-gray-100 text-balance font-medium text-sm p-2 px-5 flex items-center bg-black/3 dark:bg-white/3 uppercase'>
                        <Link className='block py-1 pr-10' href={'/'}>Home</Link>
                        <Link className='block py-1 pr-10' href={'/s/services'}>Our Services</Link>
                        <Link className='block py-1 pr-10' href={'#'}>Pricing</Link>
                        <Link className='block py-1 pr-10' href={'/s/work'}>Our Work</Link>
                        <Link className='block py-1 pr-10' href={'/s/blogs'}>Blogs</Link>
                        <Link className='block py-1' href={'/s/our-story'}>About Us</Link>
                    </div>
                    <ModeToggle />
                    <div className='rounded-full bg-orange-600 py-1.5 px-5 flex items-center shadow'>
                        <Link className='text-xs text-white font-medium block py-1 uppercase' href={'/s/contact'}>Get A Quote</Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HomeHeader
