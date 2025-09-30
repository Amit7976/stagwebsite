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
  const webDevelopmentData = allPricingData.find((p) => p.id === "Pricing");
  const webDevBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const webDevContent = contentData.find((content) => content.id === "Content");
  const webDevFeatures = FeaturesData.find((features) => features.id === "Features");


  return (
    <>
      <LiquidChromeImage
        imageUrl="/images/Services/background.jpg"
        metallicMix={0}
        distortionScale={0.0001}
        className="absolute inset-0"
      />

      <div>
        <Hero />
      </div>

      <div id="main" className="mt-20 mb-0">
        {webDevContent && <Content {...webDevContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Website Development Web Development "} />
      </div>
      <div className="my-40">
        {webDevBenefits && <BusinessBenefits {...webDevBenefits} />}
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
      {webDevFeatures && <Features {...webDevFeatures} />}

      </div>
      <div className="mt-0 mb-40">
          {webDevelopmentData && <Pricing {...webDevelopmentData} />}
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
