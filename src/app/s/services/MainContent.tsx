import React from 'react'
import CarouselSection from './CarouselSection'

function MainContent() {
    return (
        <>
            <div className="text-block flex w-full flex-col lg:flex-row items-center gap-9 pt-32 pb-24 px-10">
                <h1 className="text-[10rem] leading-[0.85] tracking-[-0.03em] text-foreground flex-1">
                    Serv<span className="text-orange-600">ices</span>
                </h1>

                <p className="text-2xl leading-relaxed text-muted-foreground flex-1 max-w-3xl">
                    Explore our services and discover how we bring your ideas to life with cutting-edge design, scalable development, and seamless user experiences.
                </p>
            </div>
            <CarouselSection />
        </>
    )
}

export default MainContent