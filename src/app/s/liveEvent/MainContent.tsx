import Image from 'next/image'
import React from 'react'

function MainContent() {
  return (
    <>
      <main className='p-20'>

        <section>
          <h2 className='text-4xl font-bold'>Upcoming Event</h2>

          <div className='grid grid-cols-3 gap-10 my-10'>
            <div className='border-2 rounded-md flex justify-between col-span-1 overflow-hidden'>
                <h4 className='p-3 text-wrap text-base'>Seminar on Advanced Getting dream Job</h4>
              <Image src={'/images/Random/seminar.webp'} alt='Seminar Pic' width={800} height={800} className='w-40' />
            </div>
            <div className='border-2 rounded-md flex justify-between col-span-1 overflow-hidden'>
                <h4 className='p-3 text-wrap text-base'>Seminar on Advanced Getting dream Job</h4>
              <Image src={'/images/Random/seminar.webp'} alt='Seminar Pic' width={800} height={800} className='w-40' />
            </div>
            <div className='border-2 rounded-md flex justify-between col-span-1 overflow-hidden'>
                <h4 className='p-3 text-wrap text-base'>Seminar on Advanced Getting dream Job</h4>
              <Image src={'/images/Random/seminar.webp'} alt='Seminar Pic' width={800} height={800} className='w-40' />
            </div>
          </div>
        </section>
        <section className='mt-32'>
          <h2 className='text-4xl font-bold'>Current Event</h2>

          <div className='grid grid-cols-3 gap-10 my-10'>
            <div className="col-span-3 flex items-center justify-center py-10">
              <p className='text-5xl text-gray-400 font-bold'>No Current Event Running</p>
            </div>
          </div>
        </section>
        
      </main>
    </>
  )
}

export default MainContent