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
  const startupmvpData = allPricingData.find((p) => p.id === "Pricing");
  const startupmvpBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const startupmvpContent = contentData.find((content) => content.id === "Content");
  const startupmvpFeatures = FeaturesData.find((features) => features.id === "Features");


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
       Startup MVP <span className="text-orange-600">Development</span>
      </>
    }
    stacksList={[
      "Idea Validation",
      "Rapid Prototyping",
      "Agile Development",
      "Scalable Architecture",
      "Early User Feedback",
      "Go-to-Market Strategy",
    ]}
  />
</div>

      <div id="main" className="mt-20 mb-0">
        {startupmvpContent && <Content {...startupmvpContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Startup MVP Development "} />
      </div>
      <div className="my-40">
        {startupmvpBenefits && <BusinessBenefits {...startupmvpBenefits} />}
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
        {startupmvpFeatures && <Features {...startupmvpFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {startupmvpData && <Pricing {...startupmvpData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Every big idea starts small—but execution is everything. Our Startup MVP Development Services help you validate your vision quickly and cost-effectively by building a functional, user-ready product that attracts investors and early adopters. From lean design and rapid prototyping to scalable architecture, we focus on what matters most—speed, usability, and market fit. With Hirebie, you launch smarter, learn faster, and grow stronger."
        />
      </div>
    </>
  );
}

export default MainContent;
