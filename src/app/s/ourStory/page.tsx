import Footer from "@/components/MainUi/Footer/Footer";
import Header from "@/components/MainUi/Header/Header";
import React from "react";
import MainContent from "./MainContent";

function page() {
  return (
    <>
      <Header position="sticky" />
      <MainContent />
      <Footer />
    </>
  );
}

export default page;
