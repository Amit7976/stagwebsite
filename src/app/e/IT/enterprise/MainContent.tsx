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
  const enterpriseData = allPricingData.find((p) => p.id === "Pricing");
  const enterpriseBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const enterpriseContent = contentData.find((content) => content.id === "Content");
  const enterpriseFeatures = FeaturesData.find((features) => features.id === "Features");


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
       Enterprise <span className="text-orange-600">Software</span> Solutions
      </>
    }
    stacksList={[
      "Custom Enterprise Applications",
      "ERP & CRM Development",
      "Cloud-Native Solutions",
      "Workflow Automation",
      "System Integration",
      "Scalable & Secure Architecture",
    ]}
  />
</div>

<div>
  <Hero
    heading={
      <>
        <span className="text-orange-600">Enterprise</span> Software Solutions
      </>
    }
    stacksList={[
      "Custom Enterprise Applications",
      "ERP & CRM Development",
      "Cloud-Native Solutions",
      "Workflow Automation",
      "System Integration",
      "Scalable & Secure Architecture",
    ]}
  />
</div>
<div>
  <Hero
    heading={
      <>
        Enterprise Software<span className="text-orange-600"> Solutions</span>
      </>
    }
    stacksList={[
      "Custom Enterprise Applications",
      "ERP & CRM Development",
      "Cloud-Native Solutions",
      "Workflow Automation",
      "System Integration",
      "Scalable & Secure Architecture",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {enterpriseContent && <Content {...enterpriseContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Enterprise Software Solutions "} />
      </div>
      <div className="my-40">
        {enterpriseBenefits && <BusinessBenefits {...enterpriseBenefits} />}
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
        {enterpriseFeatures && <Features {...enterpriseFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {enterpriseData && <Pricing {...enterpriseData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Complex business challenges need robust and scalable software solutions. Our Enterprise Software Solutions Services deliver custom platforms that streamline operations, enhance productivity, and integrate seamlessly with your existing systems. From ERP and CRM to workflow automation and analytics, we build software that aligns with your strategic goals. With Hirebie, your enterprise technology works smarter, faster, and more efficiently."
        />
      </div>
    </>
  );
}

export default MainContent;
