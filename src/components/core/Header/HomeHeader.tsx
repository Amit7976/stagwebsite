import { LoaderLink } from '@/components/ui/loaderLinks';
import { ModeToggle } from '@/components/ui/ModeToggle';
import Image from 'next/image';
import Hamburger from './Hamburger';


function HomeHeader() {
    return (
        <>
            <header className='flex items-center justify-between md:px-10 py-3 px-5 bg-transparent z-50 w-full absolute top-0'>
                <LoaderLink href={"/"}>
                    <Image src={'/images/logo/logo.svg'} width={200} height={200} alt='Hirebie Logo' className='w-30' />
                </LoaderLink>
                <Hamburger />
                <div className="hidden lg:flex items-center justify-end gap-2">
                    <div className='rounded-full text-gray-600 dark:text-gray-100 text-balance font-medium text-lg p-2 px-5 flex items-center bg-black/3 dark:bg-white/3 uppercase'>
                        <LoaderLink className='block py-1 pr-10' href={'/'}>Home</LoaderLink>
                        <LoaderLink className='block py-1 pr-10' href={'/s/services'}>Our Services</LoaderLink>
                        <LoaderLink className='block py-1 pr-10' href={'/s/showcase'}>Showcase</LoaderLink>
                        <LoaderLink className='block py-1 pr-10' href={'/s/work'}>Our Work</LoaderLink>
                        <LoaderLink className='block py-1 pr-10' href={'/s/blogs'}>Blogs</LoaderLink>
                        <LoaderLink className='block py-1' href={'/s/our-story'}>About Us</LoaderLink>
                    </div>
                    <div className='scale-125'>
                        <ModeToggle />
                    </div>
                    <div className='rounded-full bg-orange-600 py-1.5 px-5 flex items-center shadow'>
                        <LoaderLink className='text-base text-white font-medium block pt-0.5 uppercase' href={'/s/contact'}>Get A Quote</LoaderLink>
                    </div>
                </div>
            </header>
        </>
    )
}

export default HomeHeader
