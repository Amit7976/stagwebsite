import Footer from "@/components/MainUi/Footer/Footer";
import Header from "@/components/MainUi/Header/Header";
import React from "react";
import MainContent from "./MainContent";
import style from "./style.module.css";

function page() {
  return (
    <>
      <div className={`h-screen w-full bg-gray-100 ${style.scroll}`}>
        {/* <Header position="sticky" /> */}
        <MainContent />
        <Footer />
      </div>
    </>
  );
}

export default page;
