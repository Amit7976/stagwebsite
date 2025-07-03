import React from "react";
import Hero from "./Hero";
import BugForm from "./BugForm";
import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function page() {
  return (
    <>
      <Header />
      <Hero />
      <BugForm />
      <Footer />
    </>
  );
}

export default page;
