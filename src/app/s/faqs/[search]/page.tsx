import Footer from "@/components/core/Footer/Footer";
import Header from "@/components/core/Header/Header";
import MainContent from "./MainContent";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export default function Page({ params }: { params: { search?: string | string[] } }) {

    return (
        <>

            <Header />
            <MainContent search={typeof params.search === "string" ? params.search : "hirebie"} />
            <Footer />
        </>
    );
};
