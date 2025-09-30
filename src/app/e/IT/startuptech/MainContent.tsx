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
  const startuptechData = allPricingData.find((p) => p.id === "Pricing");
  const startuptechBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const startuptechContent = contentData.find((content) => content.id === "Content");
  const startuptechFeatures = FeaturesData.find((features) => features.id === "Features");


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
              Startup Tech<span className="text-orange-600"> Advisory</span>
            </>
          }
          stacksList={[
            "MVP Development Guidance",
            "Technology Stack Selection",
            "Scalable Architecture Planning",
            "Cloud Adoption Strategy",
            "Product Roadmap Consultation",
            "Growth & Scaling Advisory",
          ]}
        />
      </div>

      <div id="main" className="mt-20 mb-0">
        {startuptechContent && <Content {...startuptechContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Startup Tech Advisory "} />
      </div>
      <div className="my-40">
        {startuptechBenefits && <BusinessBenefits {...startuptechBenefits} />}
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
        {startuptechFeatures && <Features {...startuptechFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {startuptechData && <Pricing {...startuptechData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="The right technology decisions can make or break a startup. Our Startup Tech Advisory Services guide you through every stage of your journey—from choosing the right tech stack and cloud strategy to scaling infrastructure and ensuring security. We act as your technical partner, helping you avoid costly mistakes, optimize resources, and build a foundation for sustainable growth. With Hirebie, you focus on innovation while we handle the tech roadmap."
        />
      </div>
    </>
  );
}

export default MainContent;
