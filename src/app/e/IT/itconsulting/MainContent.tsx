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
  const ITconsultingData = allPricingData.find((p) => p.id === "Pricing");
  const ITconsultingBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const ITconsultingContent = contentData.find((content) => content.id === "Content");
  const ITconsultingFeatures = FeaturesData.find((features) => features.id === "Features");


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
        IT Consulting<span className="text-orange-600"> & Audits</span>   
      </>
    }
    stacksList={[
      "Technology Strategy & Roadmap",
      "IT Infrastructure Assessment",
      "Security & Compliance Audits",
      "Cloud Readiness Evaluation",
      "Cost Optimization",
      "Risk Management & Governance",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {ITconsultingContent && <Content {...ITconsultingContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" IT consulting & audits  "} />
      </div>
      <div className="my-40">
        {ITconsultingBenefits && <BusinessBenefits {...ITconsultingBenefits} />}
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
        {ITconsultingFeatures && <Features {...ITconsultingFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {ITconsultingData && <Pricing {...ITconsultingData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Technology should enable growth, not create roadblocks. Our IT Consulting & Audit Services help you align your tech strategy with your business goals by identifying gaps, mitigating risks, and unlocking opportunities. From infrastructure assessments and security audits to compliance checks and technology roadmaps, we provide clear insights and actionable solutions. With Hirebie, you gain a trusted partner to optimize performance, reduce costs, and future-proof your IT landscape."
        />
      </div>
    </>
  );
}

export default MainContent;
