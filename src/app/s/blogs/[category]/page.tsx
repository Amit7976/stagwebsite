
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import Footer from "@/components/core/Footer/Footer";
import Header from "@/components/core/Header/Header";
import MainContent from "./MainContent";


export default async function Page({ params }: { params: Promise<{ category: string }> }) {


    return (
        <>

            <div className="bg-white dark:bg-neutral-900">

                {/* {!session?.user ? <Header /> : <HeaderForBlog />} */}

                <Header />
                <MainContent params={params} />
                <Footer />

            </div>

        </>
    );
};
