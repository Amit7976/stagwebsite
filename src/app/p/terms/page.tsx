import Footer from "@/components/core/Footer/Footer";
import Header from "@/components/core/Header/Header";
import MainContent from "./MainContent";

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
