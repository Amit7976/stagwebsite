import React from 'react'
import MainContent from './MainContent'
import Header from '@/components/core/Header/Header'
import Footer from '@/components/core/Footer/Footer'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function page() {
    return (
        <>
            <Header />
            <div className='bg-gradient-to-b from-gray-50 to-white'>
                <MainContent />
            </div>
            <Footer />
        </>
    )
}

export default page