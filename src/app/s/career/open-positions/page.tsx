import Footer from '@/components/core/Footer/Footer'
import Header from '@/components/core/Header/Header'
import React from 'react'
import MainContent from './MainContent'

function page() {
    return (
        <>
            <Header />
            <div className='py-10'>
                <MainContent />
            </div>
            <Footer />
        </>
    )
}

export default page