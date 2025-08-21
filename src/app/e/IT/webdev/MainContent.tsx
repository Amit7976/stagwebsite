import AiInclude from '@/components/core/ServicesPages/IT/AiInclude'
import { CardsCarousel } from '@/components/core/ServicesPages/IT/CardsCarousel'
import { CaseStudy } from '@/components/core/ServicesPages/IT/Casestudy'
import Content from '@/components/core/ServicesPages/IT/Content'
import CTA from '@/components/core/ServicesPages/IT/CTA'
import DiscoverMore from '@/components/core/ServicesPages/IT/DiscoverMore'
import { Features } from '@/components/core/ServicesPages/IT/Features'
import Hero from '@/components/core/ServicesPages/IT/HeroSection'
import MainFeatures from '@/components/core/ServicesPages/IT/MainFeatures'
import { PlatformIndependent } from '@/components/core/ServicesPages/IT/PlatformIndependent'
import { ScrollBasedVelocity } from '@/components/core/ServicesPages/IT/ScrollBasedVelocity'
import ServicesSection from '@/components/core/ServicesPages/IT/ServicesSection'
import LiquidChromeImage from '@/components/ui/LiquidChrome'

function ManiContent() {
  return (
    <>

      <LiquidChromeImage
        imageUrl="/images/Services/background.jpg"
        metallicMix={0}
        distortionScale={0.0001}
        className="absolute inset-0"
      />

      <div><Hero /></div>

      <div className="mt-20 mb-0"><Content /></div>
      <div className="mt-0 mb-40"><ServicesSection /></div>
      <div className="my-40"><AiInclude /></div>
      <div className="my-20"><ScrollBasedVelocity text={" Web Development "} /></div>
      <div className="mt-40"><CardsCarousel /></div>
      <div className="my-40"><MainFeatures /></div>
      <div className="my-0"><PlatformIndependent /></div>
      <div className="mt-0 mb-40"><CTA /></div>
      <div className="my-40"><Features /></div>
      <div className="my-40"><CaseStudy /></div>
      <div className="mb-40"><DiscoverMore /></div>
    </>
  )
}

export default ManiContent