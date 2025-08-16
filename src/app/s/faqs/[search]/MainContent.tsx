"use client";
import { Input } from "@/components/ui/input";
import axios from "axios";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// INTERFACE OF FAQ FOR TYPESCRIPT
interface FAQ {
    question: string;
    answer: string;
    _id: string;
    date: Date;
    search: string;
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


const MainContent = ({ search }: { search: string }) => {


    const searchInputRef = useRef<HTMLInputElement | null>(null);
    const qnaContainerRef = useRef<HTMLDivElement | null>(null);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // FETCH ALL FAQS
    const [faqs, setFaqs] = useState<FAQ[]>([]);
    const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);
    const [faqLoading, setFaqLoading] = useState(true);

    const fetchFaqs = async () => {
        try {
            const response = await axios.get("/api/faqs");
            setFaqs(response.data);
            setFilteredFaqs(response.data); // Set initial filtered FAQs
        } catch (error) {
            console.error("Error fetching Faqs:", error);
        } finally {
            setFaqLoading(false);
        }
    };

    useEffect(() => {
        fetchFaqs();
    }, []);



    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    // HANDEL FILTER DATA WHEN SEARCH
    useEffect(() => {
        const handleSearchInput = () => {
            const query = searchInputRef.current?.value.trim().toLowerCase() || "";
            const terms = query.split(/\s+/); // Tokenize the query into terms

            // Function to count matches of search terms in a given text
            const countMatches = (text: string) => {
                const lowerText = text.toLowerCase();
                return terms.reduce((count, term) => {
                    if (lowerText.includes(term)) {
                        count++;
                    }
                    return count;
                }, 0);
            };

            // Filter and sort FAQs based on the count of matched terms
            const filtered = faqs
                .map((faq) => ({
                    ...faq,
                    matchCount: countMatches(faq.question) + countMatches(faq.answer)
                }))
                .filter((faq) => faq.matchCount > 0)
                .sort((a, b) => b.matchCount - a.matchCount);

            setFilteredFaqs(filtered);

            // Scroll to the FAQ container after search
            qnaContainerRef.current?.scrollIntoView({
                behavior: "smooth",
            });
        };

        handleSearchInput();

        searchInputRef.current?.addEventListener("input", handleSearchInput);

        return () => {
            searchInputRef.current?.removeEventListener("input", handleSearchInput);
        };
    }, [faqs]);


    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
        <>
            <section
                id="mainArea"
                className="duration-300 py-28 w-full relative"
            >
                <div id="mainContentSection" className="p-3 py-10 mx-auto max-w-6xl">
                    <h2 className="text-2xl w-full text-center font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
                        Frequently Asked Questions
                    </h2>
                    <div
                        className="relative flex items-center pt-16 pb-28"
                        id="qna"
                        ref={qnaContainerRef}
                    >
                        <Input
                            id="searchInput"
                            ref={searchInputRef}
                            type="text"
                            defaultValue={decodeURIComponent(search)}
                            placeholder="Frequently Asked Question Search...."
                            spellCheck="false"
                            className="py-2 px-10 h-20 sm:mx-auto w-11/12 border-0 border-t-2 dark:border-2 border-gray-100 dark:border-neutral-600 focus:outline-none m-auto rounded-xl text-gray-800 dark:text-gray-200 shadow-2xl transition-transform transform hover:scale-105 dark:bg-neutral-800"
                        />
                    </div>
                    <div className="flow-root m-5">
                        {faqLoading ? (
                            <div className="flex items-center justify-center h-72">
                                <Image
                                    src="/images/gif/loader.gif"
                                    alt="Loading"
                                    width={100}
                                    height={100}
                                />
                            </div>
                        ) : (
                            <div className="divide-y divide-gray-200 last:divide-none dark:divide-neutral-700 -my-9">
                                {filteredFaqs.length > 0 ? (
                                    filteredFaqs.map((faq, index) => (
                                        <div key={index} className="py-9 FAQCard">
                                            <p className="text-xl font-semibold text-black dark:text-white allQuestionAnswer">
                                                {faq.question}
                                            </p>

                                            {faq && (

                                                <p className="my-4 text-base text-gray-600 dark:text-neutral-400 allQuestionAnswer" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>

                                            )}

                                        </div>
                                    ))
                                ) : (
                                    <p className="text-xl w-full my-40 text-center border-0 text-gray-400">
                                        No FAQs found for your search query.
                                    </p>
                                )}
                                <p className="text-xl w-full my-40 text-center border-0 text-gray-400">
                                    If you not found your answer, please contact us
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default MainContent;
