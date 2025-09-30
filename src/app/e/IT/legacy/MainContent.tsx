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
  const legacyData = allPricingData.find((p) => p.id === "Pricing");
  const legacyBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const legacyContent = contentData.find((content) => content.id === "Content");
  const legacyFeatures = FeaturesData.find((features) => features.id === "Features");


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
       Legacy System<span className="text-orange-600"> Modernization</span>
      </>
    }
    stacksList={[
      "Architecture Re-engineering",
      "Cloud Migration",
      "API Integration",
      "UI/UX Modernization",
      "Performance Optimization",
      "Security & Compliance Upgrades",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {legacyContent && <Content {...legacyContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Legacy System Modernization  "} />
      </div>
      <div className="my-40">
        {legacyBenefits && <BusinessBenefits {...legacyBenefits} />}
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
        {legacyFeatures && <Features {...legacyFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {legacyData && <Pricing {...legacyData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Outdated systems can slow down innovation and increase risks. Our Legacy System Modernization Services help you transform legacy applications into modern, scalable, and efficient solutions. From re-architecting and cloud migration to integrating new technologies, we ensure your systems stay secure, agile, and future-ready. With Hirebie, your legacy becomes a launchpad for growth and innovation."
        />
      </div>
    </>
  );
}

export default MainContent;
