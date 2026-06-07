import Footer from '@/components/core/Footer/Footer'
import Header from '@/components/core/Header/Header'
import { FAQ } from '@/components/core/Home/FAQ'
import WhyChoose from '@/components/core/Home/WhyChoose'
import Tactics from '@/components/core/Services/Tactics'
import MainContent from './MainContent'

function page() {
    return (
        <div>
            <Header />
            <MainContent />
            {/* <div className='my-10'><Showcase /></div> */}
            {/* <div className='my-28 lg:my-40'><WebsiteSolutions /></div> */}
            {/* <div className="my-28 lg:my-40"><SectionOverview /></div> */}
            {/* <div className="my-28 lg:my-40"><Services /></div> */}
            <div className="my-28 lg:my-40"><Tactics /></div>
            <div className="my-28 lg:my-40"><WhyChoose /></div>
            {/* <div className="mt-28 mb-20 md:my-40"><BlogSection /></div> */}
            <div className="my-20 md:my-40"><FAQ /></div>
            <Footer />
        </div>
    )
}

export default page