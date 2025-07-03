import Footer from "@/components/MainUi/Footer/Footer";
import Header from "@/components/MainUi/Header/Header";
import React from "react";
import MainContent from "./MainContent";

function page() {
  return (
    <>
      <div className="h-screen w-full">
        <Header position="sticky" />
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default page;
