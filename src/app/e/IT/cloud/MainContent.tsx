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
  const cloudData = allPricingData.find((p) => p.id === "Pricing");
  const cloudBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const cloudContent = contentData.find((content) => content.id === "Content");
  const cloudFeatures = FeaturesData.find((features) => features.id === "Features");


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
        Cloud Infrastructure<span className="text-orange-600"> & DevOps</span>
      </>
    }
    stacksList={[
      "Cloud Architecture Design",
    "Monitoring & Logging",
      "Infrastructure as Code (IaC)",
      "Scalability & High Availability",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {cloudContent && <Content {...cloudContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Cloud infrastructure & DevOps "} />
      </div>
      <div className="my-40">
        {cloudBenefits && <BusinessBenefits {...cloudBenefits} />}
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
        {cloudFeatures && <Features {...cloudFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {cloudData && <Pricing {...cloudData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="In today’s fast-paced digital world, agility and reliability are the backbone of successful businesses. Our Cloud Infrastructure & DevOps Services help you move faster, scale smarter, and operate with confidence. From cloud migration and architecture design to CI/CD pipelines, automation, and monitoring—we ensure your systems are secure, efficient, and always ready to meet demand. Whether you’re modernizing legacy systems or building cloud-native solutions, Hirebie empowers your business to innovate and grow with resilience."
        />
      </div>
    </>
  );
}

export default MainContent;
