import { Skeleton } from '@/components/ui/skeleton';
import axios from 'axios';
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TbCalendarMonth } from 'react-icons/tb';


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
    priority: boolean,
    featured: boolean,
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


function LatestArticlePlaceholder() {
    return (
        <>
            <Skeleton className="object-cover w-full lg:w-1/2 rounded-3xl h-72 lg:h-[22rem] flex-shrink-0" />
            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 flex flex-col justify-between gap-5 h-full items-stretch py-3">
                <div className="space-y-2 pt-4">
                    <Skeleton className="h-6 w-1/3 rounded-full" />
                </div>
                <div className="space-y-2 w-full mt-1">
                    <Skeleton className="h-5 w-full rounded-full" />
                    <Skeleton className="h-5 w-1/2 rounded-full" />
                </div>
                <div className="space-y-2 w-full pt-2">
                    <Skeleton className="h-4 w-full rounded-full" />
                    <Skeleton className="h-4 w-full rounded-full" />
                    <Skeleton className="h-4 w-full rounded-full" />
                    <Skeleton className="h-4 w-full rounded-full" />
                </div>
                <div className="space-y-2 pt-2">
                    <Skeleton className="h-6 w-1/3 rounded-full" />
                </div>
                <div className="space-y-2 pt-2 flex items-center gap-5 line-clamp-1">
                    <Skeleton className="h-8 w-44 rounded-full" />
                    <Skeleton className="h-8 w-40 rounded-full" />
                    <Skeleton className="h-8 w-56 rounded-full" />
                    <Skeleton className="h-8 w-36 rounded-full" />
                    <Skeleton className="h-8 w-44 rounded-full" />
                </div>
            </div>
        </>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function NewPublishedArticles() {

    // FETCH 3 LATEST ARTICLES
    const [latestArticles, setLatestArticles] = useState<Article[]>([])
    const [latestArticlesLoading, setLatestArticlesLoading] = useState(true);

    const fetchLatestArticles = async () => {
        try {
            const response = await axios.get('/api/articles/latestArticles');
            setLatestArticles(response.data.latestArticles);
            console.log(response.data.latestArticles);

        } catch (error) {
            console.error('Error fetching Articles:', error);
        } finally {
            setLatestArticlesLoading(false);
        }
    }

    useEffect(() => {
        fetchLatestArticles();
    }, []);



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // SEPARATE TAGS
    interface SeparateTagsData {
        tags?: string;
    }

    function separateTags(data: SeparateTagsData): string[] {
        const itemsString = data?.tags; // Safely access data.tags
        return itemsString ? itemsString.split(', ') : []; // Return an empty array if itemsString is falsy
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    
    return (
        <>
            <section className='p-20 my-5'>
                <h3 className='text-5xl font-medium font-serif'>New Published Articles</h3>


                <div className="py-14 space-y-16">
                    {latestArticlesLoading ? (
                        Array.from({ length: 2 }).map((_, index) => (
                            <div key={index} className={`mt-8 lg:flex lg:items-center gap-5 ${(index % 2) ? 'flex-row-reverse' : ''}`}>
                                <LatestArticlePlaceholder key={index} />
                            </div>
                        ))
                    ) : (latestArticles.map((article: Article, index:number) => (
                        <Link key={index} href={`/articles/${article.category}/${article._id}`} className={`mt-8 lg:flex lg:items-center gap-5 ${(index % 2) ? 'flex-row-reverse' : ''}`}>
                            <Image width={800} height={800} className="object-cover w-full lg:w-1/2 rounded-3xl h-72 lg:h-[22rem]" src={`/images/articles${article.image}`} alt={article.title} />

                            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 flex flex-col justify-between gap-5 h-full items-stretch py-3 space-y-4">
                                <div className='space-y-5'>
                                    <p className="text-sm text-gray-500 font-medium">{article.category}</p>
                                    <h4 className="block mt-1 text-2xl font-semibold text-gray-800 hover:underline dark:text-white">
                                        {article.title}
                                    </h4>

                                    <p className="mt-3 text-sm text-gray-500 dark:text-gray-300 md:text-base line-clamp-4">
                                        {article.summary}
                                    </p>

                                </div>
                                <div className='space-y-6'>
                                    <div className='flex items-center gap-6'>
                                        <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                                            <TbCalendarMonth className='text-lg' />
                                            {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        </p>
                                    </div>
                                    <div className='flex items-center gap-5 line-clamp-1 overflow-scroll'>
                                        {separateTags(article).map((tag: string, index: number) => (
                                            <p key={index} className='text-sm font-semibold bg-gray-100 text-gray-600 rounded-full px-5 py-2 capitalize flex-shrink-0'>{tag}</p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )))}
                </div>

            </section>
        </>
    )
}

export default NewPublishedArticles