import React from 'react'
import { FiHome } from 'react-icons/fi'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
function MainContent() {
    return (
        <>
            <main>
                <Tabs defaultValue="account" className="w-full grid grid-cols-11 min-h-screen">
                    <TabsList className='col-span-2 border-r-2 px-2 py-6 sticky top-20 h-screen'>
                        <section className='w-full h-full space-y-3'>
                            <div>
                                <h4 className='text-gray-800 font-medium text-base flex items-center gap-2 rounded-xl hover:bg-gray-100 duration-300 cursor-pointer py-2 px-5 h-auto'><FiHome className='w-6 h-6 text-gray-500 pl-1.5 mb-0.5' /> Getting Started</h4>
                                <div className='pl-9 mt-0.5 space-y-0.5'>
                                    <TabsTrigger value="introduction" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>Introduction</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>What's new?</TabsTrigger>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-gray-800 font-medium text-base flex items-center gap-2 rounded-xl hover:bg-gray-100 duration-300 cursor-pointer py-2 px-5 h-auto'><FiHome className='w-6 h-6 text-gray-500 pl-1.5 mb-0.5' /> Getting Started</h4>
                                <div className='pl-9 mt-0.5 space-y-0.5'>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>Introduction</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>Introduction</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>Introduction</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>Introduction</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>What's new?</TabsTrigger>
                                </div>
                            </div>
                            <div>
                                <h4 className='text-gray-800 font-medium text-base flex items-center gap-2 rounded-xl hover:bg-gray-100 duration-300 cursor-pointer py-2 px-5 h-auto'><FiHome className='w-6 h-6 text-gray-500 pl-1.5 mb-0.5' /> Getting Started</h4>
                                <div className='pl-9 mt-0.5 space-y-0.5'>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>Introduction</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>What's new?</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>What's new?</TabsTrigger>
                                    <TabsTrigger value="password" className='text-gray-500 text-sm font-normal hover:bg-gray-100 duration-300 cursor-pointer py-2 px-4 h-auto rounded-xl w-full text-start'>What's new?</TabsTrigger>
                                </div>
                            </div>
                        </section>
                    </TabsList>
                    <section className='col-span-9 bg-gray-50 overflow-hidden'>
                        <TabsContent value="introduction"></TabsContent>
                        <TabsContent value="password">Change your password here.</TabsContent>

                    </section>
                </Tabs>
            </main>
        </>
    )
}

export default MainContent