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
  const databaseData = allPricingData.find((p) => p.id === "Pricing");
  const databaseBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const databaseContent = contentData.find((content) => content.id === "Content");
  const databaseFeatures = FeaturesData.find((features) => features.id === "Features");


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
        <span className="text-orange-600">Database Design</span> & Management
      </>
    }
    stacksList={[
      "Database Architecture Design",
      "Schema Modeling & Optimization",
      "SQL & NoSQL Solutions",
      "Data Migration & Integration",
      "Performance Tuning",
      "Backup & Disaster Recovery",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {databaseContent && <Content {...databaseContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Database design & management  "} />
      </div>
      <div className="my-40">
        {databaseBenefits && <BusinessBenefits {...databaseBenefits} />}
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
        {databaseFeatures && <Features {...databaseFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {databaseData && <Pricing {...databaseData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="Data is the lifeblood of every business, and managing it effectively is critical for growth and decision-making. Our Database Design & Management Services ensure your data is structured, secure, and scalable—whether it’s for small applications or enterprise-level systems. From schema design and optimization to backup, recovery, and performance tuning, we help you build databases that are reliable today and adaptable for tomorrow. With Hirebie, your data works smarter, not harder."
        />
      </div>
    </>
  );
}

export default MainContent;
