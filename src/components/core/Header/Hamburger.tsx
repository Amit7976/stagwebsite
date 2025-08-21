"use client";
import { LoaderLink } from '@/components/ui/loaderLinks';
import { ModeToggle } from '@/components/ui/ModeToggle';
import { useEffect, useState } from 'react';
import { CiMenuFries } from "react-icons/ci";

function Hamburger() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      window.history.pushState(null, '', '#menu');
    } else {
      if (window.location.hash === '#menu') {
        window.history.pushState(null, '', window.location.pathname + window.location.search);
      }
    }

    const handleHashChange = () => {
      if (window.location.hash !== '#menu') {
        setOpen(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);

  }, [open]);

  return (
    <div className='lg:hidden z-[50]'>
      <CiMenuFries className='size-6' onClick={() => setOpen(true)} />

      <div className={`${open ? 'right-0 opacity-100' : '-right-full opacity-0'} fixed duration-500 transition-all top-0 bg-white dark:bg-neutral-900 h-screen w-2/3 text-gray-600 dark:text-gray-100 text-balance font-medium text-2xl py-10 px-5 flex flex-col justify-center items-end`}>
        <div className='bg-neutral-200 dark:bg-neutral-800 p-2 w-1/3 fixed left-0 top-0 h-full flex items-center justify-center gap-2' onClick={() => setOpen(false)}>
          Close
        </div>
        <LoaderLink className='text-right w-full h-20' href={'/'}>Home</LoaderLink>
        <LoaderLink className='text-right w-full h-20' href={'/s/services'}>Our Services</LoaderLink>
        <LoaderLink className='text-right w-full h-20' href={'/s/showcase'}>Showcase</LoaderLink>
        <LoaderLink className='text-right w-full h-20' href={'/s/work'}>Our Work</LoaderLink>
        <LoaderLink className='text-right w-full h-20' href={'/s/blogs'}>Blogs</LoaderLink>
        <LoaderLink className='py-1 text-right w-full h-20' href={'/s/our-story'}>About Us</LoaderLink>
        <div className='scale-200 my-5'>
          <ModeToggle />
        </div>
          <LoaderLink className='text-2xl text-red-600 font-semibold font-sans2 block py-1 uppercase mb-2 h-20' href={'/s/contact'}>Get A Quote</LoaderLink>
      </div>
    </div>
  );
}

export default Hamburger;
