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
  const maintenanceData = allPricingData.find((p) => p.id === "Pricing");
  const maintenanceBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const maintenanceContent = contentData.find((content) => content.id === "Content");
  const maintenanceFeatures = FeaturesData.find((features) => features.id === "Features");


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
       Maintenance <span className="text-orange-600">& Support</span>
      </>
    }
    stacksList={[
      "Bug Fixing & Issue Resolution",
      "Performance Monitoring",
      "Security Updates & Patches",
      "Regular Backups",
      "Feature Enhancements",
      "24/7 Technical Support",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {maintenanceContent && <Content {...maintenanceContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Maintenance & support "} />
      </div>
      <div className="my-40">
        {maintenanceBenefits && <BusinessBenefits {...maintenanceBenefits} />}
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
        {maintenanceFeatures && <Features {...maintenanceFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {maintenanceData && <Pricing {...maintenanceData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Launching your digital solution is just the beginning—keeping it secure, up-to-date, and performing at its best is where true success lies. Our Maintenance & Support Services provide continuous monitoring, regular updates, bug fixes, and performance optimization to ensure your systems run smoothly 24/7. Whether it’s proactive maintenance or on-demand support, Hirebie keeps your technology reliable so you can focus on growing your business with confidence."
        />
      </div>
    </>
  );
}

export default MainContent;
