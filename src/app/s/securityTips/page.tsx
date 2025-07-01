import Header from '@/components/MainUi/Header/Header'
import React from 'react'
import MainContent from './MainContent'
import Footer from '@/components/MainUi/Footer/Footer'

function page() {
    return (
        <>
            <Header position="sticky" />
            <MainContent />
            <Footer />
        </>
    );
}

export default page