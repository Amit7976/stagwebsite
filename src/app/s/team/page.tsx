import React from "react";
import Header from "@/components/core/Header/Header";
import Footer from "@/components/core/Footer/Footer";

function page() {
  return (
    <>
      <Header />
      {/* <MainContent /> */}
      <div className="h-screen flex flex-col items-center justify-center text-2xl font-medium">
        <p>We are continuously updating our team.</p>
        <p className="opacity-45 font-light">Please check back soon.</p>
      </div>
      <Footer />
    </>
  );
}

export default page;
