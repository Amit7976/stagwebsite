import Footer from "@/components/core/Footer/Footer";
import Header from "@/components/core/Header/Header";
import MainContent from "./MainContent";
export const dynamic = 'force-dynamic';


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

type Props = {
    params: Promise<{ search: string }>;
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////

export default async function Page(props: Props) {
    const params = await props.params;
    const search = decodeURIComponent(params.search || "");

    return (
        <>
            <Header />
            <MainContent search={search} />
            <Footer />
        </>
    );
}
  