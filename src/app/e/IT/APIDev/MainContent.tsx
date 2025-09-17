import Content from "@/components/core/ServicesPages/IT/Content";
import DiscoverMore from "@/components/core/ServicesPages/IT/DiscoverMore";
import Hero from "@/components/core/ServicesPages/IT/HeroSection";
import { PlatformIndependent } from "@/components/core/ServicesPages/IT/PlatformIndependent";
import { ScrollBasedVelocity } from "@/components/core/ServicesPages/IT/ScrollBasedVelocity";
import Pricing from "@/components/core/ServicesPages/IT/Pricing";
import { FinalThoughts } from "@/components/core/ServicesPages/IT/FinalThoughts";
import LiquidChromeImage from "@/components/ui/LiquidChrome";
import MobileFeatures from "@/components/core/ServicesPages/IT/MobileFeatures";
import Carousel from "@/components/core/ServicesPages/IT/Carousel";
import CTA from "@/components/core/ServicesPages/IT/CTA";
import BusinessBenefits from "@/components/core/ServicesPages/IT/BusinessBenefits";
import WhyChoose from "@/components/core/ServicesPages/IT/WhyChoose";
import { allPricingData, Business, contentData, WhyChooseHirebie, FeaturesData } from "./Data";

function MainContent() {
  const APIDevData = allPricingData.find((p) => p.id === "Pricing");
  const APIDevBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const APIDevContent = contentData.find((content) => content.id === "Content");
  const APIDevWhyChoose = WhyChooseHirebie.find((choose) => choose.id === "WhyChooseHirebie");
  const APIDevFeatures = FeaturesData.find((feature) => feature.id === "Features");

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
              API <span className="text-orange-600">Development</span> & Integration
            </>
          }
          stacksList={[
            "Custom API Development",
            "Third-Party Integrations",
            "REST / GraphQL / SOAP",
            "Security & Authentication",
          ]}
        />
      </div>

      <div id="main" className="mt-20 mb-0">
        {APIDevContent && <Content {...APIDevContent} />}
      </div>

      <div className="my-20">
        <ScrollBasedVelocity text={"API Development & Integration "} />
      </div>

      <div className="my-40">
        {APIDevBenefits && <BusinessBenefits {...APIDevBenefits} />}
      </div>

      <div className="mt-40">
        <Carousel />
      </div>

      <div className="my-0">
        <PlatformIndependent />
      </div>

      <div className="mt-0 mb-40">
        <CTA />
      </div>

      <div className="mt-0 mb-40">
        <MobileFeatures {...APIDevFeatures} />
      </div>

      <div className="mt-0 mb-40">
        {APIDevWhyChoose && <WhyChoose {...APIDevWhyChoose} />}
      </div>

      <div className="mt-0 mb-40">
        {APIDevData && <Pricing {...APIDevData} />}
      </div>

      <div className="mb-40">
        <DiscoverMore description={"Add a touch of magic to your day. Explore our API development & integration services."} />
      </div>

      <div className="mb-40">
        <FinalThoughts
          description={
            <>
              APIs are the building blocks of modern digital ecosystems. They allow your business to connect, scale, and innovate faster than ever before. From powering mobile apps and web platforms to integrating enterprise software, Hirebie’s API Development & Integration Services ensure your systems work seamlessly together.
              <br />
              With a focus on scalability, security, and performance, we build APIs that don’t just connect systems—they unlock new possibilities.
            </>
          }
        />
      </div>
    </>
  );
}

export default MainContent;
