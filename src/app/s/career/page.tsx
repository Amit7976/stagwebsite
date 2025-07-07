import Footer from '@/components/core/Footer/Footer'
import Header from '@/components/core/Header/Header'
import React from 'react'
import Team from '@/components/MainUi/Team/Team'
import HiringCTA from './HiringCTA'

function page() {
    return (
        <>
            <Header />
            <div className='py-10 px-4 md:px-10'>
                <Team />
            </div>
            <div className='py-10 px-4 md:px-10'>
                <HiringCTA />
            </div>
            <Footer />
        </>
    )
}

export default page