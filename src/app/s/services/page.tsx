import Footer from '@/components/core/Footer/Footer'
import Header from '@/components/core/Header/Header'
import BlogSection from '@/components/core/Home/BlogSection'
import { FAQ } from '@/components/core/Home/FAQ'
import SectionOverview from '@/components/core/Home/OverviewSection'
import Services from '@/components/core/Home/Services'
import WebsiteSolutions from '@/components/core/Home/WebsiteSolutions'
import WhyChoose from '@/components/core/Home/WhyChoose'
import MainContent from './MainContent'
import Tactics from '@/components/core/Services/Tactics'

function page() {
    return (
        <div>
            <Header />
            <MainContent />
            <div className='my-40'><WebsiteSolutions /></div>
            <div className="my-40"><SectionOverview /></div>
            <div className="my-40"><Services /></div>
            <div className="my-40"><Tactics /></div>
            <div className="my-40"><WhyChoose /></div>
            <div className="mt-40 mb-20 md:my-40"><BlogSection /></div>
            <div className="my-20 md:my-40"><FAQ /></div>
            <Footer />
        </div>
    )
}

export default page