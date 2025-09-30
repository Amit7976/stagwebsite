import { CardsCarousel } from "@/components/core/ServicesPages/IT/CardsCarousel";
import Content from "@/components/core/ServicesPages/IT/Content";
import CTA from "@/components/core/ServicesPages/IT/CTA";
import DiscoverMore from "@/components/core/ServicesPages/IT/DiscoverMore";
import { Features } from "@/components/core/ServicesPages/IT/Features";
import Hero from "@/components/core/ServicesPages/IT/HeroSection";
import { PlatformIndependent } from "@/components/core/ServicesPages/IT/PlatformIndependent";
import { ScrollBasedVelocity } from "@/components/core/ServicesPages/IT/ScrollBasedVelocity";
import Pricing from "@/components/core/ServicesPages/IT/Pricing";
import { FinalThoughts } from "@/components/core/ServicesPages/IT/FinalThoughts";
import LiquidChromeImage from "@/components/ui/LiquidChrome";
import BusinessBenefits from "@/components/core/ServicesPages/IT/BusinessBenefits";
import { allPricingData, Business, contentData, FeaturesData } from "./Data";

function MainContent() {
  const seoData = allPricingData.find((p) => p.id === "Pricing");
  const seoBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const seoContent = contentData.find((content) => content.id === "Content");
  const seoFeatures = FeaturesData.find((features) => features.id === "Features");


  return (
    <>
      <LiquidChromeImage
        imageUrl="/images/Services/background.jpg"
        metallicMix={0}
        distortionScale={0.0001}
        className="absolute inset-0"
      />

<div>
  <Hero
    heading={
      <>
        SEO & Performance <span className="text-orange-600">Optimization</span>
      </>
    }
    stacksList={[
      "On-Page Optimization",
      "Technical SEO",
      "Content Strategy",
      "Core Web Vitals Improvement",
      "Site Speed Optimization",
      "Analytics & Reporting",
    ]}
  />
</div>

      <div id="main" className="mt-20 mb-0">
        {seoContent && <Content {...seoContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" SEO & performance optimization  "} />
      </div>
      <div className="my-40">
        {seoBenefits && <BusinessBenefits {...seoBenefits} />}
      </div>
      <div className="mt-40">
        <CardsCarousel />
      </div>
      <div className="my-0">
        <PlatformIndependent />
      </div>
      <div className="mt-0 mb-40">
        <CTA />
      </div>
      <div className="my-40">
      {seoFeatures && <Features {...seoFeatures} />}

      </div>
      <div className="mt-0 mb-40">
          {seoData && <Pricing {...seoData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts description="In an era where digital presence = business presence, a professional website or web application is no longer optional—it’s essential. Whether you’re a startup aiming for your first launch or an enterprise looking to upgrade, Hirebie’s Website & Web App Development Services are designed to deliver results that are visually stunning, technically sound, and business-driven. From concept to code, from launch to long-term support—we build digital platforms that grow with you." />
      </div>
    </>
  );
}

export default MainContent;
