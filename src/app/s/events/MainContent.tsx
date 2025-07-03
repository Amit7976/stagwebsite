import Image from 'next/image'
import React from 'react'

function MainContent() {
  return (
    <>
      <main className='p-20'>

        <section>
          <h2 className='text-4xl font-bold'>Upcoming Event</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 my-10">
            <div className="border-2 rounded-lg flex justify-between items-center overflow-hidden shadow-sm hover:shadow-md transition">
              <h4 className="p-4 text-wrap text-base font-medium">
                Workshop: Modern Web App Development
              </h4>
              <Image
                src="/images/Random/seminar.webp"
                alt="Hirebie Web App Development Workshop"
                width={800}
                height={800}
                className="w-40 object-cover"
              />
            </div>

            <div className="border-2 rounded-lg flex justify-between items-center overflow-hidden shadow-sm hover:shadow-md transition">
              <h4 className="p-4 text-wrap text-base font-medium">
                Service: Custom Website Design Solutions
              </h4>
              <Image
                src="/images/Random/seminar.webp"
                alt="Hirebie Website Design"
                width={800}
                height={800}
                className="w-40 object-cover"
              />
            </div>

            <div className="border-2 rounded-lg flex justify-between items-center overflow-hidden shadow-sm hover:shadow-md transition">
              <h4 className="p-4 text-wrap text-base font-medium">
                Workshop: Deploy & Manage Cloud Infrastructure
              </h4>
              <Image
                src="/images/Random/seminar.webp"
                alt="Hirebie Cloud Infrastructure Workshop"
                width={800}
                height={800}
                className="w-40 object-cover"
              />
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