import React from "react";
import MainContent from "./MainContent";
import Footer from "@/components/core/Footer/Footer";
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
