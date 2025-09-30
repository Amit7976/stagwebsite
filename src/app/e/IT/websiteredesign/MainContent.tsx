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
  const websiteData = allPricingData.find((p) => p.id === "Pricing");
  const websiteBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const websiteContent = contentData.find((content) => content.id === "Content");
  const websiteFeatures = FeaturesData.find((features) => features.id === "Features");


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
       Website Redesign <span className="text-orange-600">  & Modernization</span>
      </>
    }
    stacksList={[
      "UI/UX Revamp",
      "Mobile Responsiveness",
      "Performance Optimization",
      "SEO-Friendly Design",
      "Accessibility Improvements",
      "Modern Tech Stack",
    ]}
  />
</div>

      <div id="main" className="mt-20 mb-0">
        {websiteContent && <Content {...websiteContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Website redesign & modernization "} />
      </div>
      <div className="my-40">
        {websiteBenefits && <BusinessBenefits {...websiteBenefits} />}
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
        {websiteFeatures && <Features {...websiteFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {websiteData && <Pricing {...websiteData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="A modern, user-friendly website is key to keeping your brand relevant and engaging. Our Website Redesign & Modernization Services revamp your digital presence with fresh design, improved functionality, and optimized performance. From UI/UX enhancements to responsive layouts, faster load times, and seamless integrations, we ensure your website not only looks great but also drives results. With Hirebie, your website evolves with your business."
        />
      </div>
    </>
  );
}

export default MainContent;
