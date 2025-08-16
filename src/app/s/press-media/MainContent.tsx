import React from 'react'
function MainContent() {
  return (
      <>
          <main>
              
              <section className='flex flex-col gap-5 justify-center items-center py-40'>
                  <h2 className='text-8xl font-bold'>Press & Media</h2>
                  <p className='text-xl font-medium text-gray-500 w-full max-w-5xl text-center mx-auto'>Stay updated with the newest information about JobBoost through our press releases and media highlights, offering you a comprehensive view of our latest news and advancements.</p>
              </section>
              
               <section className="mb-40">
                  <h3 className="font-semibold text-4xl text-center w-full">Recent News</h3>
                  
                  <div className='w-full py-20 flex justify-center items-center'>
                      <p className='text-7xl text-gray-400 font-bold'>No Recent News found</p>
                  </div>
          </section>
          </main>
      </>
  )
}

export default MainContent