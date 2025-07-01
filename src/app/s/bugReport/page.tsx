import Footer from "@/components/MainUi/Footer/Footer";
import Header from "@/components/MainUi/Header/Header";
import React from "react";
import Hero from "./Hero";
import BugForm from "./BugForm";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function page() {
  return (
    <>
      <Header position="relative" />
      <Hero />
      <BugForm />
      <Footer />
    </>
  );
}

export default page;
