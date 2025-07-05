import React from 'react'
import MainContent from './MainContent'
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'
import { FAQ } from '@/components/core/Home/FAQ'
import Showcase from '@/components/core/Home/Showcase'
import SampleProducts from '@/components/core/Home/SampleProducts'
import Services from '@/components/core/Home/Services'
import SectionOverview from '@/components/core/Home/OverviewSection'
import ServicesMarquee from '@/components/core/Home/ServicesMarquee'
import WebsiteSolutions from '@/components/core/Home/WebsiteSolutions'
import WhyChoose from '@/components/core/Home/WhyChoose'
import BlogSection from '@/components/core/Home/BlogSection'
import HirebieWorkSection from '../../../components/core/Services/Tactics'
import HirebieHowWeWork from './HirebieHowWeWork'
import WorkRolesSection from './WorkRolesSection'
import ProcessSteps from '@/components/core/Home/ProcessSteps'
import WorkLinks from './WorkLinks'

function page() {
    return (
        <div>
            <Header />
            {/* <SampleProducts />
            <ServicesMarquee /> */}
            <div className='w-full overflow-hidden'>
                {/* <div className='mt-40 mb-44 scale-200'><Showcase /></div> */}
            </div>
            {/* <div className='my-40'><WebsiteSolutions /></div> */}
            {/* <div className='my-40'><HirebieHowWeWork /></div> */}
            {/* <div className='my-40'><MainContent /></div> */}
            <div className='my-40'><WorkLinks /></div>
            {/* <div className='my-40'><WorkRolesSection /></div> */}
            {/* <div className='my-40' id='processSteps'><ProcessSteps /></div> */}
            {/* <div className="my-40"><WhyChoose /></div> */}
            {/* <div className="mt-40 mb-20 md:my-40"><BlogSection /></div> */}
            {/* <div className="my-20 md:my-40"><FAQ /></div> */}
            <Footer />
        </div>
    )
}

export default page