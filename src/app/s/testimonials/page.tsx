import React from "react";
import HeroSection from "./HeroSection";
import CandidateTestimonials from "./CandidateTestimonials";
import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";

function page() {
  return (
    <>
      <Header />

      <HeroSection />
      <CandidateTestimonials />
      <Footer/>
    </>
  );
}

export default page;
