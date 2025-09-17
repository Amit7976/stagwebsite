import Content from "@/components/core/ServicesPages/IT/Content";
import DiscoverMore from "@/components/core/ServicesPages/IT/DiscoverMore";
import Hero from "@/components/core/ServicesPages/IT/HeroSection";
import { PlatformIndependent } from "@/components/core/ServicesPages/IT/PlatformIndependent";
import { ScrollBasedVelocity } from "@/components/core/ServicesPages/IT/ScrollBasedVelocity";
import Pricing from "@/components/core/ServicesPages/IT/Pricing";
import { FinalThoughts } from "@/components/core/ServicesPages/IT/FinalThoughts";
import LiquidChromeImage from "@/components/ui/LiquidChrome";
import{ Features} from "@/components/core/ServicesPages/IT/Features";
import Carousel from "@/components/core/ServicesPages/IT/Carousel";
import CTA from "@/components/core/ServicesPages/IT/CTA";
import BusinessBenefits from "@/components/core/ServicesPages/IT/BusinessBenefits";
import { allPricingData, Business, contentData, WhyChooseHirebie, FeaturesData } from "./Data";
import WhyChoose from "@/components/core/ServicesPages/IT/WhyChoose";


function MainContent() {
  const gamedevData = allPricingData.find(
    (p) => p.id === "Pricing"
  );

  const gamedevBenefits = Business.find(
    (benefit) => benefit.id === "Businessbenefits"
  );

  const gamedevContent = contentData.find(
    (content) => content.id === "Content"
  );
  const gamedevWhyChoose = WhyChooseHirebie.find(
    (choose) => choose.id === "WhyChooseHirebie"
  );

    const gamedevFeatures = FeaturesData.find(
    (features) => features.id === "Features"
  );

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
              Game <span className="text-orange-600">Development</span>
            </>
          }
          stacksList={[

            "2D & 3D Game Development",
            "Mobile, PC & Console Games",
            "AR/VR & Metaverse Experiences",
            "Multiplayer & Online Gameplay",
            "Game UI/UX Design",
            "Unity & Unreal Engine Development",
            "Game Testing & Optimization",
            "Publishing & Post-Launch Support"

          ]}
        />
      </div>
      <div id="main" className="mt-20 mb-0">
        {gamedevContent && <Content {...gamedevContent} />}
      </div>
      <div className="my-20">
        <ScrollBasedVelocity text={" Game Development "} />
      </div>
      <div className="my-40">
        {gamedevBenefits && (
          <BusinessBenefits {...gamedevBenefits} />
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
        <Features 
          {...gamedevFeatures} />
      </div>
      <div className="mt-0 mb-40">
        {gamedevData && <Pricing {...gamedevData} />}
      </div>
      <div className="mt-0 mb-40">
        {gamedevWhyChoose && <WhyChoose {...gamedevWhyChoose} />}
      </div>
      <div className="mb-40">
        <DiscoverMore
          description={
            "Add a touch of magic to your day. Explore our game development services."
          }
        />
      </div>
      <div className="mb-40">
        <FinalThoughts
          description={
            <>
              The gaming industry is booming—and your idea could be the next big hit. A well-designed and developed game doesn’t just entertain—it builds communities, drives engagement, and generates revenue.
              <br />
              At Hirebie, we don’t just code games—we craft experiences that players love and businesses value. From casual mobile games to AAA-quality interactive worlds, we combine storytelling, creativity, and technology to deliver results.           </>
          }
        />
      </div>
    </>
  );
}
export default MainContent;
