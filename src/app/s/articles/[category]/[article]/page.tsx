"use client"
import Header from '@/components/MainUi/Header/Header'
import Footer from '@/components/MainUi/Footer/Footer'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BsLightning, BsWhatsapp } from 'react-icons/bs'
import { FaFacebook, FaLinkedin, FaXTwitter } from 'react-icons/fa6'
import { RxChevronLeft } from 'react-icons/rx'
import { TbCalendarMonth } from 'react-icons/tb'
import NewPublishedArticles from '../../NewPublishedArticles'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { IoBookOutline, IoChevronBackOutline, IoTimeOutline } from 'react-icons/io5'
import { AiOutlineLike } from 'react-icons/ai'
import { LuLanguages } from 'react-icons/lu'
import Link from 'next/link'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// INTERFACE OF ARTICLE FOR TYPESCRIPT
interface Article {
    count: number,
    title: string,
    summary: string,
    description: string,
    category: string,
    tags: string,
    status: string,
    priority: Boolean,
    featured: Boolean,
    imageTitle: string,
    language: string,
    learn: string,
    other: string,
    readTime: string,
    image: string,
    _id: string,
    date: Date,
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const page = ({ params }: any) => {

    // FETCH MAIN ARTICLE COMPLETE DATA
    const [article, setArticle] = useState<Article | null>(null);
    const [articleLoading, setArticleLoading] = useState(true);

    const fetchArticleData = async () => {
        try {
            const response = await axios.get('/api/articles/article', {
                params: {
                    articlePost: params.article,
                },
            })
            setArticle(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching Articles:', error);
        } finally {
            setArticleLoading(false);
        }
    }

    useEffect(() => {
        fetchArticleData();
    }, [])


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // SEPARATE TAGS
    function separateTags(data: any) {
        const itemsString = data?.tags; // Safely access data.tags
        return itemsString ? itemsString.split(', ') : []; // Return an empty array if itemsString is falsy
    }


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // ROUTER FOR BACK BUTTON
    const router = useRouter();


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    return (
        <>
            <Header position='sticky' />
            <section>
                <div className="grid grid-cols-2 gap-x-3 items-center w-full max-w-7xl mt-8 mx-auto">
                    <div>
                        <Button
                            variant={"ghost"}
                            onClick={() => router.back()}
                            className="inline-flex items-center gap-x-1.5 text-sm text-gray-600 decoration-2 dark:text-blue-500 select-none"
                        >
                            <IoChevronBackOutline className="flex-shrink-0 size-4" />
                            Back to Blog
                        </Button>
                    </div>

                    {/* <div className="flex items-center gap-1 justify-end">
                        <Button variant="ghost" className="h-14 w-14">
                            <BsWhatsapp className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" className="h-14 w-14">
                            <FaFacebook className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" className="h-14 w-14">
                            <FaXTwitter className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" className="h-14 w-14">
                            <FaLinkedin className="h-5 w-5" />
                        </Button>
                    </div> */}
                </div>
            </section>

            {articleLoading ? (
                <div className="flex items-center justify-center h-screen">
                    <Image src="/images/gif/loader.gif" alt="Loading" width={100} height={100} />
                </div>
            ) : (
                <section className='w-full max-w-7xl mt-16 mx-auto'>

                    <div className='flex items-center justify-between gap-6 mb-10'>
                        <p className="text-lg font-medium text-gray-400">{article?.category}</p>
                        <p className="text-lg font-medium text-gray-500 flex items-center gap-1">
                            <TbCalendarMonth className='text-xl' />
                            {article && new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>

                    <div className="my-5">
                        <h1 className="text-4xl font-bold lg:text-5xl tracking-tight text-gray-800 dark:text-neutral-200">
                            {article?.title}
                        </h1>
                    </div>

                    <div className="flex items-center gap-x-5 gap-y-3 flex-wrap mt-10 mb-5">
                        {separateTags(article).map((tag: any, index: any) => (
                            <Link href={`/articles/${tag}`} key={index} className='text-base font-medium p-3 px-6 bg-gray-100 rounded-full'>
                                {tag}
                            </Link>
                        ))}
                    </div>

                    <div className="px-4 py-10 lg:py-10">
                        <div className="aspect-w-16 aspect-h-7">
                            <Image className="w-full h-[500px] object-cover rounded-xl"
                                src={`/images/articles${article?.image}`}
                                alt={`${article?.imageTitle}`}
                                width={800}
                                height={800} />
                        </div>

                        <div className="mt-5 lg:mt-16 grid lg:grid-cols-3 gap-8 lg:gap-12">
                            <div className="lg:col-span-2">
                                <section className="my-10 space-y-5 md:space-y-8">
                                    {article && (<div dangerouslySetInnerHTML={{ __html: article.description }} />)}
                                </section>
                            </div>

                            <div className="lg:col-span-1">
                                <div className="grid sm:grid-cols-1 gap-8 md:gap-12">

                                    <div className="flex gap-x-5">
                                        <IoTimeOutline className="flex-shrink-0 mt-1 size-6 text-orange-600 dark:text-orange-500" />
                                        <div className="grow">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                Read Time
                                            </h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                                This entire article will take you no more than <b>{article?.readTime} minutes</b> to read and understand.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-x-5">
                                        <LuLanguages className="flex-shrink-0 mt-1 size-6 text-orange-600 dark:text-orange-500" />
                                        <div className="grow">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                Language
                                            </h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                                This article is written in simple <b>{article?.language}</b> to help you understand it better.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-x-5">
                                        <AiOutlineLike className="flex-shrink-0 mt-1 size-6 text-orange-600 dark:text-orange-500" />
                                        <div className="grow">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                Simple and Informative
                                            </h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                                This article is easy to understand, and provides valuable information that can help you better understand the topic.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-x-5">
                                        <IoBookOutline className="flex-shrink-0 mt-1 size-6 text-orange-600 dark:text-orange-500" />
                                        <div className="grow">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                You Will Learn
                                            </h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                                {article?.learn}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-x-5">
                                        <BsLightning className="flex-shrink-0 mt-1 size-6 text-orange-600 dark:text-orange-500" />
                                        <div className="grow">
                                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                                Additional Information
                                            </h3>
                                            <p className="mt-1 text-gray-600 dark:text-neutral-400">
                                                {article?.other}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            )}
            <div className="my-10">
                <NewPublishedArticles />
            </div>
            <Footer />
        </>
    )
}


export default page
