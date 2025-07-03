import Footer from '@/components/MainUi/Footer/Footer'
import Header from '@/components/MainUi/Header/Header'
import React from 'react'
import MainContent from './MainContent'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function page() {
    return (
        <>
            <Header position='sticky' />
            <div className='bg-gradient-to-b from-gray-50 to-white'>
                <MainContent />
            </div>
            <Footer />
        </>
    )
}

export default page