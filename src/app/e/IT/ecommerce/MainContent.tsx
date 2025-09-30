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
  const ecommerceData = allPricingData.find((p) => p.id === "Pricing");
  const ecommerceBenefits = Business.find((benefit) => benefit.id === "Businessbenefits");
  const ecommerceContent = contentData.find((content) => content.id === "Content");
  const ecommerceFeatures = FeaturesData.find((features) => features.id === "Features");


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
        E-commerce<span className="text-orange-600"> Development</span>
      </>
    }
    stacksList={[
      "Custom Online Storefronts",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Inventory & Order Management",
      "Mobile-First Design",
      "SEO & Performance Optimization",
    ]}
  />
</div>


      <div id="main" className="mt-20 mb-0">
        {ecommerceContent && <Content {...ecommerceContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" E-commerce Development "} />
      </div>
      <div className="my-40">
        {ecommerceBenefits && <BusinessBenefits {...ecommerceBenefits} />}
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
        {ecommerceFeatures && <Features {...ecommerceFeatures} />}

      </div>
      <div className="mt-0 mb-40">
        {ecommerceData && <Pricing {...ecommerceData} />}
      </div>
      <div className="mb-40">
        <DiscoverMore />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description="In the digital marketplace, your online store is more than just a platform—it’s your brand experience. Our E-commerce Development Services help you create scalable, secure, and customer-centric solutions that drive sales and loyalty. From intuitive product catalogs and smooth checkout flows to payment integration, inventory management, and analytics, we build e-commerce platforms that grow with your business. With Hirebie, you don’t just sell online—you succeed online."
        />
      </div>
    </>
  );
}

export default MainContent;
