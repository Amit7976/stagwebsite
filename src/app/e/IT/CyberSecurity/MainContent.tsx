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
  const CyberSecurityData = allPricingData.find((p) => p.id === "Pricing");

  const CyberSecurityBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");

  const CyberSecurityContent = contentData.find((content) => content.id === "Content");
  const CyberSecurityFeatures = FeaturesData.find((features) => features.id === "Features");
  

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
              CyberSecurity <span className="text-orange-600">Solutions</span>
            </>
          }
          stacksList={[
            "Threat Detection",
            "Incident Response",
            "Compliance Management",
            "Risk Assessment"
          ]}
        />
      </div>

      <div id="main" className="mt-20 mb-0">
        {CyberSecurityContent && <Content {...CyberSecurityContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" CyberSecurity Solutions "} />
      </div>
      <div className="my-40">
        {CyberSecurityBenefits && <BusinessBenefits {...CyberSecurityBenefits} />}
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
        <Features {...CyberSecurityFeatures} />
      </div>
      <div className="mt-0 mb-40">
        {CyberSecurityData && <Pricing {...CyberSecurityData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore
          description={
            "Add a touch of magic to your day. Explore our CyberSecurity solutions."
          } />
      </div>
      <div className="mb-40">
        <FinalThoughts description="In an era where data = trust, robust cybersecurity is no longer optional—it’s essential. Whether you’re a startup safeguarding your first users or an enterprise protecting critical infrastructure, Hirebie’s Cybersecurity Solutions are designed to deliver security that is proactive, adaptive, and business-driven. From threat assessment to incident response, from compliance to continuous monitoring—we build digital defenses that grow with you." />
      </div>
    </>
  );
}

export default MainContent;
