"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TbCalendarMonth } from 'react-icons/tb'
import NewPublishedArticles from '../NewPublishedArticles'
import { Skeleton } from "@/components/ui/skeleton";
import axios from 'axios'
import Footer from '@/components/MainUi/Footer/Footer'
import Header from '@/components/MainUi/Header/Header'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function AllArticlePlaceholder() {
    return (
        <div className="flex flex-col space-y-3">
            <Skeleton className="w-full h-60 mb-5 bg-center rounded-2xl" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-full rounded-full" />
                <Skeleton className="h-6 w-1/2 rounded-full" />
            </div>
            <div className="space-y-2 pt-1">
                <Skeleton className="h-5 w-full rounded-full" />
                <Skeleton className="h-5 w-full rounded-full" />
                <Skeleton className="h-5 w-full rounded-full" />
            </div>
            <div className="space-y-2 pt-1">
                <Skeleton className="h-5 w-1/4 rounded-full" />
            </div>
        </div>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// INTERFACE OF ARTICLE FOR TYPESCRIPT
interface Article {
    count: number,
    title: string,
    summary: string,
    description: string,
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


const Page = ({ params }: any) => {


    // FETCH ALL ARTICLES
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [loadingArticles, setLoadingArticles] = useState(true);
    const fetchArticles = async () => {
        try {
            const response = await axios.get('/api/articles/category', {
                params: {
                    category: decodeURIComponent(params.category),
                },
            });
            setAllArticles(response.data.articles);
            console.log(response.data.articles);

        } catch (error) {
            console.error('Error fetching Articles:', error);
        } finally {
            setLoadingArticles(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const category = decodeURIComponent(params.category); // Decode the URL-encoded category


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <>
            <Header position='sticky' />

            <section className='mt-10 mb-40'>
                <h3 className='text-5xl font-medium font-serif capitalize p-20'>{category} Articles</h3>

                <div className='px-20 mt-5 mb-20'>
                    <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

                        {loadingArticles ? (
                            Array.from({ length: 3 }).map((_, index) => (
                                <AllArticlePlaceholder key={index} />
                            ))
                        ) : (allArticles.map((article, index) => (
                            <Link href={`/articles/${category}/${article._id}`} key={index} className='border p-4 rounded-xl hover:scale-[1.02] duration-500'>
                                <Image width={800} height={800} src={`/images/articles${article.image}`} className="object-cover w-full h-60 mb-5 bg-center rounded-2xl" alt={article.title} loading="lazy" />
                                <p className="font-medium text-gray-500 text-sm">{category}</p>
                                <h4 className="my-2 text-lg font-semibold text-gray-900">
                                    {article.title}
                                </h4>
                                <p className="mb-3 text-sm font-normal text-gray-500">
                                    {article.summary}
                                </p>
                                <div className="mb-3 text-sm font-normal text-gray-500 flex items-center gap-5">
                                    <p className="text-sm font-medium text-gray-500 flex items-center gap-1">
                                        <TbCalendarMonth className='text-lg' />
                                        {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>
                            </Link>
                        )))}

                    </div>
                </div>
            </section>

            <NewPublishedArticles />

            <Footer />
        </>
    )
}

export default Page