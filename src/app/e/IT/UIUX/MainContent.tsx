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
  const UIUXData = allPricingData.find(
    (p) => p.id === "Pricing"
  );

  const UIUXBenefits = Business.find(
    (benefit) => benefit.id === "Benefits"
  );

  const UIUXContent = contentData.find(
    (content) => content.id === "Content"
  );

  const UIUXWhyChoose = WhyChooseHirebie.find(
    (choose) => choose.id === "WhyChooseHirebie"
  );
  const UIUXFeatures = FeaturesData.find((features) => features.id === "Features");


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
              <span className="text-orange-600">UI/UX</span> Design & Prototyping
            </>
          }
          stacksList={[
            "User Research",
            "Wireframing",
            "UI Design",
            "Prototyping",
            "Usability Testing",
            "Design Systems",
          ]}
        />
      </div>
      <div id="main" className="mt-20 mb-0">
        {UIUXContent && <Content {...UIUXContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" UI/UX Design & Prototyping "} />
      </div>
      <div className="my-40">
        {UIUXBenefits && (
          <BusinessBenefits {...UIUXBenefits} />
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
        <MobileFeatures {...UIUXFeatures} />
      </div>
      <div className="mt-0 mb-40">
        {UIUXData && <Pricing {...UIUXData} />}
      </div>
      <div className="mt-0 mb-40">
        {UIUXWhyChoose && <WhyChoose {...UIUXWhyChoose} />}
      </div>
      <div className="mb-40">
        <DiscoverMore
          description={
            "Add a touch of magic to your day. Explore our UI/UX design & prototyping services."
          }
        />
      </div>
      <div className="mb=40">
        <FinalThoughts
          description={
            <>
              In today’s competitive market, great functionality is not enough—users expect engaging, intuitive, and seamless experiences. UI/UX design and prototyping bridge the gap between ideas and reality, reducing risk, improving engagement, and driving business success.
              <br />
              Hirebie’s UI/UX Design & Prototyping Services combine research, creativity, and strategy to deliver experiences that users love and businesses rely on. From concept to clickable prototype, we ensure your product is designed to delight, convert, and scale.            </>
          }
        />
      </div>
    </>
  );
}
export default MainContent;
