import Footer from '@/components/core/Footer/Footer'
import Header from '@/components/core/Header/Header'
import BlogSection from '@/components/core/Home/BlogSection'
import { FAQ } from '@/components/core/Home/FAQ'
import ProcessSteps from '@/components/core/Home/ProcessSteps'
import SampleProducts from '@/components/core/Home/SampleProducts'
import ServicesMarquee from '@/components/core/Home/ServicesMarquee'
import Showcase from '@/components/core/Home/Showcase'
import WebsiteSolutions from '@/components/core/Home/WebsiteSolutions'
import WhyChoose from '@/components/core/Home/WhyChoose'
import HirebieHowWeWork from '../../../components/core/Work/HirebieHowWeWork'
import Projects from '../../../components/core/Work/Projects'
import Section1 from '../../../components/core/Work/Section1'
import WorkLinks from '../../../components/core/Work/WorkLinks'
import WorkRolesSection from '../../../components/core/Work/WorkRolesSection'

function page() {
    return (
        <div>
            <Header />
            <SampleProducts />
            <ServicesMarquee />
            <div className='w-full overflow-hidden'>
                <div className='mt-12 lg:mt-40 lg:mb-44 md:scale-200'><Showcase /></div>
            </div>
            <div className='my-28 lg:my-40'><WebsiteSolutions /></div>
            <div className='my-28 lg:my-40'><HirebieHowWeWork /></div>
            <div className='my-28 lg:my-40'><Section1 /></div>
            <div className='my-28 lg:my-40'><Projects /></div>
            <div className='my-28 lg:my-40'><WorkLinks /></div>
            <div className='my-28 lg:my-40'><WorkRolesSection /></div>
            <div className='my-28 lg:my-40' id='processSteps'><ProcessSteps /></div>
            <div className="my-28 lg:my-40"><WhyChoose /></div>
            <div className="mt-40 mb-20 md:my-40"><BlogSection /></div>
            <div className="my-20 md:my-40"><FAQ /></div>
            <Footer />
        </div>
    )
}

export default page