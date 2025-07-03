"use client";
import { ModeToggle } from '@/components/ui/ModeToggle';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { CiMenuFries } from "react-icons/ci";
import { IoCloseOutline } from "react-icons/io5";

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

      <div className={`${open ? 'fixed' : 'hidden'} top-0 left-0 bg-white dark:bg-black h-screen w-full text-gray-600 dark:text-gray-100 text-balance font-medium text-4xl p-2 px-5 flex flex-col justify-evenly items-center uppercase`}>
        <Link href={'/'}>Home</Link>
        <Link href={'#'}>Our Services</Link>
        <Link href={'#'}>Pricing</Link>
        <Link href={'#'}>Our Work</Link>
        <Link href={'#'}>Blogs</Link>
        <Link className='py-1' href={'/s/our-story'}>About Us</Link>
        <div className='scale-200'>
          <ModeToggle />
        </div>
        <div className='rounded-full bg-orange-600 py-3 mb-10 px-10 flex items-center shadow'>
          <Link className='text-xl text-white font-medium block py-1 uppercase' href={'/s/contact'}>Get A Quote</Link>
        </div>
        <div className='bg-neutral-200 dark:bg-neutral-800 p-2 rounded-full absolute top-4 right-4' onClick={() => setOpen(false)}>
          <IoCloseOutline className='size-10 text-neutral-500' />
        </div>
      </div>
    </div>
  );
}

export default Hamburger;
