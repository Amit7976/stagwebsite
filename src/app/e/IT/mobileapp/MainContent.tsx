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
import WhyChoose from "@/components/core/ServicesPages/IT/WhyChoose";
import BusinessBenefits from "@/components/core/ServicesPages/IT/BusinessBenefits";
import { allPricingData, Business, contentData, WhyChooseHirebie, FeaturesData } from "./Data";



function MainContent() {
  const mobileAppData = allPricingData.find(
    (p) => p.id === "Pricing"
  );

  const mobileAppBenefits = Business.find(
    (benefit) => benefit.id === "Businessbenefits"
  );

  const mobileAppContent = contentData.find(
    (content) => content.id === "Content"
  );

  const mobileAppWhyChoose = WhyChooseHirebie.find(
    (choose) => choose.id === "WhyChooseHirebie"
  );

  const mobileAppFeatures = FeaturesData.find((features) => features.id === "Features");


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
              Mobile App <span className="text-orange-600">Development</span>
            </>
          }
          stacksList={[
            "iOS & Android Apps",
            "Cross-Platform ",
            "UI/UX Design",
            "App Store Deployment",
          ]}
        />
      </div>
      <div id="main" className="mt-20 mb-0">
        {mobileAppContent && <Content {...mobileAppContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Mobile App Development "} />
      </div>
      <div className="my-40">
        {mobileAppBenefits && (
          <BusinessBenefits {...mobileAppBenefits} />
        )}
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
        {<MobileFeatures {...mobileAppFeatures} />}
      </div>
          <div className="mt-0 mb-40">
            {mobileAppData && <Pricing {...mobileAppData} />}
          </div>
          <div className="mt-0 mb-40">
        {mobileAppWhyChoose && <WhyChoose {...mobileAppWhyChoose} />}
      </div>
      <div className="mb-40">
        <DiscoverMore
          description={
            "Add a touch of magic to your day. Explore our mobile app development services."
          }
        />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description={
            <>
              In a world where mobile-first is the new standard, your business’s
              growth potential is directly tied to how effectively you can reach
              users on their smartphones. A high-quality mobile app can help you
              attract, engage, and retain customers while streamlining business
              operations and boosting revenue.
              <br />
              At Hirebie, we combine creativity, technology, and strategy to
              deliver mobile apps that work flawlessly, look stunning, and
              deliver measurable results. Whether you’re a startup with a fresh
              idea or an established brand looking to expand digitally, our
              Mobile App Development Services are designed to bring your vision
              to life—and your business to the fingertips of your customers.
            </>
          }
        />
      </div>
    </>
  );
}
export default MainContent;
