import React from 'react'

function SampleProducts() {
  return (
      <>
          <section className="relative">
              <div className="px-10">
                  <div className="grid grid-cols-1 items-center gap-2 md:gap-4 lg:grid-cols-2">

                      {/* Text Content */}
                      <div className="flex w-full max-w-[31.25rem] flex-col gap-9 lg:max-w-[37.5rem] lg:py-[20%] xl:py-[26%]">
                          <p className="font-mono text-[clamp(0.875rem,0.875vw,1rem)] text-muted-foreground">
                              Sample Products
                          </p>
                          <h1 className="font-bebas_neue text-[clamp(3.5rem,calc(6.5vw+2.3rem),9.5rem)] leading-[0.85] tracking-[-0.03em] text-foreground">
                              See It<span className="text-orange-600">.</span>
                              <br />
                              Touch It<span className="text-orange-600">.</span>
                          </h1>
                          <p className="text-[clamp(1.125rem,1.125vw,1.4rem)] leading-normal text-muted-foreground">
                              Experience the quality and features of our sample products before you commit.
                              Get inspired to build your next big project with real, tangible examples.
                          </p>
                      </div>

                      {/* Overlapping Images */}
                      <div>
                          <div className="relative ml-8 aspect-square w-full max-w-[56.25rem] overflow-hidden lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2">

                              {/* Big Image */}
                              <div className="absolute right-0 bottom-0 w-[85%] overflow-hidden rounded-lg">
                                  <div
                                      style={{ position: 'relative', width: '100%', paddingBottom: '108.82%' }}
                                  >
                                      <div
                                          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
                                      >
                                          <img
                                              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                              alt="Main Sample Product"
                                              className="block size-full object-cover object-top-left"
                                          />
                                      </div>
                                  </div>
                              </div>

                              {/* Left Overlap */}
                              <div className="absolute bottom-0 left-0 w-[70%] overflow-hidden rounded-tl-lg">
                                  <div
                                      style={{ position: 'relative', width: '100%', paddingBottom: '52.63%' }}
                                  >
                                      <div
                                          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
                                      >
                                          <img
                                              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                              alt="Side Sample Product"
                                              className="block h-full w-full object-cover object-center"
                                          />
                                      </div>
                                  </div>
                              </div>

                              {/* Right Overlap */}
                              <div className="absolute right-[5%] bottom-0 w-[40%] overflow-hidden rounded-tl-lg rounded-tr-lg shadow-md">
                                  <div
                                      style={{ position: 'relative', width: '100%', paddingBottom: '128.85%' }}
                                  >
                                      <div
                                          style={{ position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 }}
                                      >
                                          <img
                                              src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                              alt="Extra Sample Product"
                                              className="block h-full w-full object-cover object-top"
                                          />
                                      </div>
                                  </div>
                              </div>

                          </div>
                      </div>

                  </div>
              </div>
          </section>

      </>
  )
}

export default SampleProducts