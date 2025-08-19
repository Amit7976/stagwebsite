"use client"
import { IEvent } from '@/models/EventModel';
import { Link } from 'lucide-react';
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

function MainContent() {

  // FETCH ALL Announcements
  const [events, setEvents] = useState<IEvent[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/event');
      const data = await response.json();
      if (data.success) {
        setEvents(data.data);
      }
    } catch (error) {
      console.error('Error fetching Announcements:', error);
    } finally {
      setEventsLoading(false);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




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

          <section className="w-full px-0 md:px-4 py-10 sm:px-6 lg:px-8 lg:pt-32">
            <div className="grid lg:grid-cols-1 lg:gap-y-16 gap-10">
              {eventsLoading ? (
                <div className="flex items-center justify-center h-96">
                  <Image src="/images/gif/loader.gif" alt="Loading" width={100} height={100} />
                </div>
              ) : (events && events.map((events, index) => (

                <div key={index} className="group rounded-xl overflow-hidden hover:border-gray-200 border-2 duration-500 p-2">
                  <div className="sm:flex">
                    {events.image &&
                      <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 aspect-video">
                        <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover object-top rounded-xl" src={`${events.image}`} alt={events.title} width={800} height={800} />
                      </div>
                    }

                    <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0 md:px-4 sm:px-0 flex flex-col justify-between py-1">
                      <div>
                        <h4 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                          {events.title}
                        </h4>
                        <p className="mt-3 text-gray-600 dark:text-neutral-400">
                          {events.description}
                        </p>

                        <div className='mt-6'>
                          {events.link ? (
                            <Link href={events.link} className="inline-flex items-center gap-x-1 text-orange-600 decoration-2 hover:underline font-medium">
                              Check Details
                              <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                            </Link>
                          ) : ''}
                        </div>
                      </div>
                      <div className='w-full flex flex-col md:flex-row md:items-center pr-10 md:gap-10'>
                        <p className="mt-3 text-gray-700 font-medium dark:text-neutral-400">
                          <span className='text-gray-500 dark:text-neutral-500 font-normal'>Start: </span>
                          {events.startdatetime
                            ? new Date(events.startdatetime).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour:"numeric"
                            })
                            : "N/A"}
                        </p>
                        {events.enddatetime && (
                          <p className="mt-3 text-gray-600 font-medium dark:text-neutral-400">
                            <span className='text-gray-500 dark:text-neutral-500 font-normal'>End: </span>
                            {events.enddatetime
                              ? new Date(events.enddatetime).toLocaleDateString("en-IN", {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                                hour:"numeric"
                              })
                              : "N/A"}
                          </p>
                        )}
                      </div>
                    </div>
                    <div>
                    </div>
                  </div>
                </div>

              )))}
            </div>
          </section>
        </section>

      </main>
    </>
  )
}

export default MainContent