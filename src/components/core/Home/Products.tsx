import React from 'react'

function Products() {
  return (
    <>
          <section>
              <div className="px-10">
                  <div className="flex flex-col space-y-10 md:space-y-16">

                      {/* === IT Solutions === */}
                      <div className="lg:flex lg:gap-x-4">
                          <div className="lg:w-1/2">
                              <div className="mb-6 md:mb-8 lg:mb-0">
                                  <img
                                      src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                      alt="IT Solutions"
                                      className="aspect-4/3 w-full rounded-md border border-border object-cover"
                                  />
                              </div>
                          </div>
                          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                              <div>
                                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                      Complete IT Solutions
                                  </h3>
                                  <p className="text-muted-foreground lg:text-lg">
                                      We provide comprehensive IT solutions tailored for your business —
                                      from infrastructure to cloud services and support — so you can focus
                                      on what you do best.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* === Brand Development === */}
                      <div className="flex-row-reverse lg:flex lg:gap-x-4">
                          <div className="lg:w-1/2">
                              <div className="mb-6 md:mb-8 lg:mb-0">
                                  <img
                                      src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                      alt="Brand Development"
                                      className="aspect-4/3 w-full rounded-md border border-border object-cover"
                                  />
                              </div>
                          </div>
                          <div className="lg:flex lg:w-1/2 lg:items-center lg:pr-24 2xl:pr-32">
                              <div>
                                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                      Brand Development
                                  </h3>
                                  <p className="text-muted-foreground lg:text-lg">
                                      Build a powerful, memorable brand that resonates with your audience.
                                      Our creative experts help you craft identity, visuals, and messaging
                                      that stand out.
                                  </p>
                              </div>
                          </div>
                      </div>

                      {/* === Internship Program === */}
                      <div className="lg:flex lg:gap-x-4">
                          <div className="lg:w-1/2">
                              <div className="mb-6 md:mb-8 lg:mb-0">
                                  <img
                                      src="https://www.shadcnblocks.com/images/block/placeholder-1.svg"
                                      alt="Internship Program"
                                      className="aspect-4/3 w-full rounded-md border border-border object-cover"
                                  />
                              </div>
                          </div>
                          <div className="lg:flex lg:w-1/2 lg:items-center lg:pl-24 2xl:pl-32">
                              <div>
                                  <h3 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
                                      Internship Opportunities
                                  </h3>
                                  <p className="text-muted-foreground lg:text-lg">
                                      Kickstart your career with our hands-on internship program.
                                      Learn from industry experts, gain real-world experience,
                                      and grow your professional network.
                                  </p>
                              </div>
                          </div>
                      </div>

                  </div>
              </div>
          </section>
 
    </>
  )
}

export default Products
