import React from "react";
import MainContent from "./MainContent";
import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";

function page() {
  return (
    <>
      <div className="h-screen w-full">
        <Header />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default page;
