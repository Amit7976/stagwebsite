import React from "react";
import MainContent from "./MainContent";
import CandidateTestimonials from "./CandidateTestimonials";
import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";

function page() {
  return (
    <>
      <Header />
      <MainContent />
      <CandidateTestimonials />
      <Footer />
    </>
  );
}

export default page;
