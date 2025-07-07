import Footer from "@/components/core/Footer/Footer";
import Header from "@/components/core/Header/Header";
import Link from "next/link";


//////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function NotFound() {
  return (
    <>
      <Header />
      <main className="p-10 text-center text-lg text-white min-h-[70vh] flex flex-col items-center justify-center my-20">
        <div className="scale-200 mb-5">
          <h1 className={`text-4xl sm:text-7xl font-bold text-black dark:text-white flex flex-wrap justify-center`}>
            {("Oops!").split("").map((char, i) => (
              <span
                key={i}
                className="inline-block animate-slide-up"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </h1>
        </div>
        <p className="mt-20 text-gray-400 text-2xl max-w-xl font-medium text-pretty mx-auto animate-fade-in-up">
          Page not found
        </p>
        <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 animate-fade-in-up">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <Link
          href={'/'}
          className='w-fit h-12 px-10 flex items-center justify-center rounded-sm bg-neutral-800 hover:bg-neutral-700 duration-300 mt-6 text-sm font-medium hover:scale-105 active:scale-95'
        >
          Go to Home
        </Link>
      </main>
      <Footer />
    </>
  )
}


import React from 'react'