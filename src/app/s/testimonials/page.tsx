import Header from "@/components/MainUi/Header/Header";
import React from "react";
import HeroSection from "./HeroSection";
import CompaniesTestimonials from "./CompaniesTestimonials";
import CandidateTestimonials from "./CandidateTestimonials";
import Footer from "@/components/MainUi/Footer/Footer";

function page() {
  return (
    <>
      <Header position="relative" />

      <HeroSection />
      <CompaniesTestimonials />
      <CandidateTestimonials />
      <Footer/>
    </>
  );
}

export default page;
