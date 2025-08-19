"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// INTERFACE OF ANNOUNCEMENT FOR TYPESCRIPT
interface ANNOUNCEMENT {
  title: string,
  description: string,
  link: string,
  linkTitle: string,
  image: string,
  _id: string,
  createdAt: Date,
  updatedAt: Date,
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function MainContent() {


  // FETCH ALL Announcements
  const [announcements, setAnnouncements] = useState<ANNOUNCEMENT[]>([]);
  const [announcementLoading, setAnnouncementLoading] = useState(true);

  const fetchAnnouncements = async () => {
    try {
      const response = await fetch('/api/announcement');
      const data = await response.json();
      if (data.success) {
        setAnnouncements(data.data);
      }
    } catch (error) {
      console.error('Error fetching Announcements:', error);
    } finally {
      setAnnouncementLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);


  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////




  return (
    <>
      <main className='px-4 pt-14 md:pt-24 mx-auto md:px-12 lg:px-20'>
        <section>
          <div className="w-full">
            <h2 className="text-4xl font-semibold tracking-tighter text-gray-900 dark:text-white lg:text-6xl text-balance">
              Announcement Center
            </h2>
            <p className="mt-4 text-lg font-medium text-neutral-500 text-balance">
              Welcome to the Announcement Center. Stay up-to-date with all the latest news and updates from JobBoost. Whether it&#39;s new features, maintenance alerts, or special offers, you’ll find everything you need to know right here.
            </p>
          </div>
        </section>



        <section className="w-full px-0 md:px-4 py-10 sm:px-6 lg:px-8 lg:pt-32">
          <div className="grid lg:grid-cols-1 lg:gap-y-16 gap-10">
            {announcementLoading ? (
              <div className="flex items-center justify-center h-96">
                <Image src="/images/gif/loader.gif" alt="Loading" width={100} height={100} />
              </div>
            ) : (announcements && announcements.map((announcement, index) => (

              <div key={index} className="group rounded-xl overflow-hidden hover:border-gray-200 border-2 duration-500 p-2">
                <div className="sm:flex">
                  {announcement.image &&
                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 aspect-video">
                      <Image className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover object-top rounded-xl" src={`${announcement.image}`} alt={announcement.title} width={800} height={800} />
                    </div>
                  }

                  <div className="grow mt-4 sm:mt-0 sm:ms-6 px-0 md:px-4 sm:px-0 flex flex-col justify-between py-1">
                    <div>
                      <h4 className="text-xl font-semibold text-gray-800 group-hover:text-gray-600 dark:text-neutral-300 dark:group-hover:text-white">
                        {announcement.title}
                      </h4>
                      <p className="mt-3 text-gray-600 dark:text-neutral-400">
                        {announcement.description}
                      </p>

                      <div className='mt-6'>
                        {announcement.link ? (
                          <Link href={announcement.link} className="inline-flex items-center gap-x-1 text-orange-600 decoration-2 hover:underline font-medium">
                            View Details
                            <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                          </Link>
                        ) : ''}
                      </div>
                    </div>
                    <div className='w-full flex flex-col md:flex-row md:items-center pr-10 md:gap-10'>
                      <p className="mt-3 text-gray-700 font-medium dark:text-neutral-400">
                        <span className='text-gray-500 dark:text-neutral-500 font-normal'>Published: </span>
                        {announcement.createdAt
                          ? new Date(announcement.createdAt).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                          : "N/A"}
                      </p>
                      {announcement.updatedAt && (
                        <p className="mt-3 text-gray-600 font-medium dark:text-neutral-400">
                          <span className='text-gray-500 dark:text-neutral-500 font-normal'>Updated: </span>
                          {announcement.updatedAt
                            ? new Date(announcement.updatedAt).toLocaleDateString("en-IN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
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
      </main>
    </>
  )
}

export default MainContent