import { Separator } from "@/components/ui/separator";
import React from "react";
import MainContent from "./MainContent";
import style from "./style.module.css";
import Footer from "@/components/core/Footer/Footer";

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
