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
  const saasData = allPricingData.find((p) => p.id === "Pricing");
  const saasBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const saasContent = contentData.find((content) => content.id === "Content");
  const saasFeatures = FeaturesData.find((features) => features.id === "Features");


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
       SaaS Product<span className="text-orange-600"> Development</span>
      </>
    }
    stacksList={[
      "Multi-Tenant Architecture",
      "Scalable Cloud Infrastructure",
      "Subscription & Billing Systems",
      "API Development & Integration",
      "Security & Compliance",
      "Continuous Deployment & Monitoring",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {saasContent && <Content {...saasContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" SaaS product development  "} />
      </div>
      <div className="my-40">
        {saasBenefits && <BusinessBenefits {...saasBenefits} />}
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
        {saasFeatures && <Features {...saasFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {saasData && <Pricing {...saasData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Transform your idea into a scalable, cloud-based product with our SaaS Development Services. From MVP to full-scale platforms, we design and build solutions that are secure, flexible, and user-friendly. With expertise in multi-tenancy, subscription management, API integrations, and performance optimization, we ensure your SaaS product is ready to grow with demand. At Hirebie, we don’t just develop software—we help you deliver value as a service."
        />
      </div>
    </>
  );
}

export default MainContent;
