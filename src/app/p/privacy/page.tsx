import Footer from "@/components/core/Footer/Footer";
import MainContent from "./MainContent";
import Header from "@/components/core/Header/Header";

function page() {
  return (
    <>
      <div>
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default page;
