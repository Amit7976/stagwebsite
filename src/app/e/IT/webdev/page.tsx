import Header from '@/components/core/Header/Header'
import MainContent from './MainContent'
import React from 'react'
import Footer from '@/components/core/Footer/Footer'
import "./removeSidebar.modular.css"
function page() {
    return (
        <div className=''>
            <div className='absolute top-0 z-50 w-full dark'>
                <Header />
           </div>
            <MainContent />
            <div className='mb-10'>
                <Footer />
            </div>
        </div>
    )
}

export default page