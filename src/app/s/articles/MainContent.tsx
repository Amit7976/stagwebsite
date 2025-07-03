"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { TbCalendarMonth } from 'react-icons/tb'
import NewPublishedArticles from './NewPublishedArticles'
import { Skeleton } from "@/components/ui/skeleton";
import axios from 'axios'


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function PriorityArticlePlaceholder() {
    return (
        <>
            <div className="flex flex-col space-y-3 w-full min-w-80">
                <div className="flex shrink-0 aspect-w-4 aspect-h-3">
                    <Skeleton className="object-cover w-full h-56 rounded-xl" />
                </div>
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

        </>
    );
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// PLACEHOLDER FOR LATEST BLOGS
function FeaturedBlogPlaceholder() {
    return (
        <div className="w-full overflow-hidden">
            <Skeleton className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[500px]" />
        </div>
    );
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// PLACEHOLDER FOR LATEST BLOGS
function FeaturedBlogPlaceholder2() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4 overflow-hidden">
            <Skeleton className="col-span-1 object-cover rounded-lg w-full h-36 flex-shrink-0" />
            <div className="col-span-1 md:col-span-3 relative">
                <div className="flex items-center gap-5 line-clamp-1">
                    <Skeleton className="h-5 w-44 rounded-full" />
                    <Skeleton className="h-5 w-40 rounded-full" />
                </div>
                <div className="space-y-2 w-full pt-3">
                    <Skeleton className="h-5 w-full rounded-full" />
                    <Skeleton className="h-5 w-1/2 rounded-full" />
                </div>
                <div className="space-y-2 w-full pt-2">
                    <Skeleton className="h-4 w-full rounded-full" />
                    <Skeleton className="h-4 w-2/3 rounded-full" />
                </div>
            </div>
        </div>
    );
}

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


function CategoryPlaceholder() {
    return (
        <div className="flex items-center space-x-4 w-40 overflow-hidden">
            <Skeleton className="h-10 w-40 rounded-full" />
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


function MainContent() {

    // FETCH ARTICLES CATEGORIES
    const [articleCategories, setArticleCategories] = useState<Article[]>([]);
    const [loadingCategories, setLoadingCategories] = useState(true);
    const fetchArticleCategories = async () => {
        try {
            const response = await axios.get('/api/articles/articleCategories');
            setArticleCategories(response.data.categories);
            console.log(response.data.categories);
        } catch (error) {
            console.error('Error fetching Article categories:', error);
        } finally {
            setLoadingCategories(false);
        }
    };

    useEffect(() => {
        fetchArticleCategories();
    }, []);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // FETCH ALL ARTICLES
    const [allArticles, setAllArticles] = useState<Article[]>([]);
    const [loadingArticles, setLoadingArticles] = useState(true);
    const fetchArticles = async () => {
        try {
            const response = await axios.get('/api/articles/article');
            setAllArticles(response.data.articles);
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


    // FETCH FEATURED ARTICLES
    const [featuredArticles, setFeaturedArticles] = useState<Article[]>([]);
    const [loadingFeaturedArticles, setLoadingFeaturedArticles] = useState(true);
    const fetchFeaturedArticles = async () => {
        try {
            const response = await axios.get('/api/articles/featured');
            const articles = response.data.articles;
            setFeaturedArticles(articles);
        } catch (error) {
            console.error('Error fetching Featured Articles:', error);
        } finally {
            setLoadingFeaturedArticles(false);
        }
    };


    useEffect(() => {
        fetchFeaturedArticles();
    }, []);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // FETCH PRIORITY ARTICLES
    const [priorityArticles, setPriorityArticles] = useState<Article[]>([]);
    const [loadingPriorityArticles, setLoadingPriorityArticles] = useState(true);
    const fetchPriorityArticles = async () => {
        try {
            const response = await axios.get('/api/articles/priority');
            const articles = response.data.articles;
            setPriorityArticles(articles);
        } catch (error) {
            console.error('Error fetching priority Articles:', error);
        } finally {
            setLoadingPriorityArticles(false);
        }
    };


    useEffect(() => {
        fetchPriorityArticles();
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

            <section className="relative my-6">
                <div className="relative z-10 px-4 py-12 sm:py-16 sm:px-6 lg:px-20 w-full lg:mx-auto lg:py-20 xl:py-28 lg:grid lg:grid-cols-2">
                    <div className="lg:pr-8">
                        <div className="max-w-md mx-auto sm:max-w-xl lg:mx-0">
                            <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-6xl leading-[65px]">
                                Articles to Empower Job Seekers <span className="inline"><Image width={800} height={800} className="inline w-auto h-8 sm:h-10 lg:h-12 select-none pointer-events-none" src="/images/Random/spark.svg" alt="spark Icon" /></span> and HR Professionals
                                <span className="inline pl-2"><Image width={800} height={800} className="inline w-auto h-8 sm:h-10 lg:h-11 select-none pointer-events-none" src="/images/Random/electricIcon.svg" alt="Electric Icon" /></span>
                            </h1>
                            <p className="mt-6 text-lg font-medium leading-8 text-gray-500">Dive into a rich repository of articles tailored to meet the needs of both job seekers and HR professionals. Discover practical advice, industry trends, and strategic insights that will help you advance in your career or streamline your hiring processes.</p>
                        </div>
                    </div>
                </div>
                <div className="pb-8 lg:absolute lg:inset-0 lg:pb-0">
                    <div className="flex flex-col items-center justify-center overflow-hidden lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                        <div className="flex justify-start w-full gap-6 pb-8 px-6 overflow-x-auto snap-x">
                            {loadingPriorityArticles ? (
                                Array.from({ length: 3 }).map((_, index) => (
                                    <PriorityArticlePlaceholder key={index} />
                                ))
                            ) : (priorityArticles.map((article, index) => (
                                <Link href={`/articles/${article.category}/${article._id}`} key={index} className="relative snap-start scroll-ml-6 shrink-0 flex flex-col overflow-hidden transition-all duration-200 transform bg-white border border-gray-100 shadow w-80 group rounded-xl hover:shadow-lg hover:-translate-y-1">
                                    <div className="flex shrink-0 aspect-w-4 aspect-h-3">
                                        <Image width={800} height={800} className="object-cover w-full h-56 transition-all duration-200 transform group-hover:scale-110" src={`/images/articles${article.image}`} alt={article.title} />
                                    </div>
                                    <div className="flex-1 px-4 py-5 sm:p-6">
                                        <div className="">
                                            <p className="text-lg font-bold text-gray-900">{article.title}</p>
                                            <p className="mt-3 text-sm font-normal leading-6 text-gray-500 line-clamp-3">{article.summary}</p>
                                        </div>
                                    </div>
                                    <div className="px-4 py-5 mt-auto border-t border-gray-100 sm:px-6">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center space-x-2">
                                                <p className="text-sm font-medium text-gray-900 flex-shrink-0">{article.category}</p>
                                                <span className="text-sm font-medium text-gray-900">•</span>
                                                <p className="text-sm font-medium text-gray-900 flex-shrink-0">{article.readTime} Mins Read</p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )))}
                        </div>
                        <div className="flex items-center justify-end mt-2 space-x-5">
                            <div className="w-16 h-[3px] rounded-full bg-gray-900"></div>
                            <div className="w-16 h-[3px] rounded-full bg-gray-300"></div>
                            <div className="w-16 h-[3px] rounded-full bg-gray-300"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='p-20 py-5'>
                <h3 className='text-5xl font-medium font-serif'>Popular Articles</h3>

                <div className="flex items-center gap-x-5 gap-y-3 flex-wrap my-10">
                    {loadingCategories ? (
                        Array.from({ length: 6 }).map((_, index) => (
                            <CategoryPlaceholder key={index} />
                        ))
                    ) : (
                        articleCategories.map((category, index) => (
                            <Link href={`/articles/${category.category}`} key={index} className='text-base font-medium p-3 px-6 bg-gray-100 rounded-full'>
                                {category.category} <span className="opacity-60 text-sm pl-1">({category.count})</span>
                            </Link>
                        ))
                    )}
                </div>
            </section>

            {/* <PopularArticle /> */}
            <section>
                <div className="w-full px-4 py-5 sm:px-6 lg:px-16">
                    <div className="grid lg:grid-cols-2 gap-6">
                        {loadingFeaturedArticles ? (
                            Array.from({ length: 1 }).map((_, index) => (
                                <FeaturedBlogPlaceholder key={index} />
                            ))
                        ) : (featuredArticles.map((article, index) =>
                            index === 0 ? (
                                <Link key={article.title} className="group relative block rounded-xl" href={`/articles/${article.category}/${article._id}`}>
                                    <div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full h-[500px] before:absolute before:inset-x-0 before:z-[1] before:size-full before:bg-gradient-to-t before:from-gray-900/70">
                                        <Image width={800} height={800} className="size-full absolute top-0 start-0 object-cover" src={`/images/articles${article.image}`} alt={article.title} />
                                    </div>

                                    <div className="absolute top-0 inset-x-0 z-10">
                                        <div className="p-4 flex flex-col h-full">
                                            <div className="flex items-center gap-4">
                                                <p className='text-sm font-semibold bg-white rounded-lg px-5 py-1'>Featured</p>
                                                <p className='text-sm font-semibold text-white rounded-lg px-5 py-1'>{article.category}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="absolute bottom-0 inset-x-0 z-10">
                                        <div className="flex flex-col h-full p-4 sm:p-6">
                                            <h3 className="text-lg sm:text-3xl font-semibold text-white group-hover:text-white/80 line-clamp-2">
                                                {article.title}
                                            </h3>
                                            <p className="mt-2 text-white/80 line-clamp-2">
                                                {article.summary}
                                            </p>
                                            <div className='flex items-center gap-6 mt-6'>
                                                <p className="text-sm font-medium text-white">
                                                    {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                </p>
                                            </div>
                                            <div className='flex items-center gap-1 mt-3 line-clamp-1 overflow-scroll'>
                                                {separateTags(article).map((tag: string, index: number) => (
                                                    <p key={index} className='text-sm font-semibold backdrop-blur-2xl text-gray-400 rounded-full pr-5 py-2 capitalize flex-shrink-0'>{tag}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ) : ''))}

                        <div className="px-5">
                            <div className="w-full space-y-8">
                                {loadingFeaturedArticles ? (
                                    Array.from({ length: 3 }).map((_, index) => (
                                        <FeaturedBlogPlaceholder2 key={index} />
                                    ))
                                ) : (featuredArticles.map((article, index) =>
                                    index === 0 ? '' :
                                        (<Link href={`/articles/${article.category}/${article._id}`} key={index} className="grid grid-cols-1 gap-6 md:grid-cols-4">
                                            <Image width={800} height={800} src={`/images/articles${article.image}`} className="object-cover rounded-lg w-full h-36 col-span-1 bg-center flex-shrink-0" alt="" loading="lazy" />
                                            <div className="col-span-1 md:col-span-3 relative">
                                                <div className='flex items-center gap-6 -mt-1 mb-2'>
                                                    <p className="text-sm font-medium text-gray-500">
                                                        {new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                                    </p>
                                                    <p className="text-sm font-medium text-gray-500">{article.category}</p>
                                                </div>
                                                <p className="mb-2 text-xl font-extrabold leading-snug text-gray-800 line-clamp-2">{article.title}</p>
                                                <p className="mb-4 text-sm font-normal text-gray-500 line-clamp-2">{article.summary}</p>
                                            </div>
                                        </Link>)
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           

            <NewPublishedArticles />


            <section className='px-20 mt-5 mb-20'>
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">

                    {loadingArticles ? (
                        Array.from({ length: 3 }).map((_, index) => (
                            <AllArticlePlaceholder key={index} />
                        ))
                    ) : (allArticles.map((article, index) => (
                        <Link href={`/articles/${article.category}/${article._id}`} key={index} className='border p-4 rounded-xl hover:scale-[1.02] duration-500'>
                            <Image width={800} height={800} src={`/images/articles${article.image}`} className="object-cover w-full h-60 mb-5 bg-center rounded-2xl" alt={article.title} loading="lazy" />
                            <p className="font-medium text-gray-500 text-sm">{article.category}</p>
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
            </section>
        </>
    )
}

export default MainContent