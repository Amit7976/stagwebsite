import AiInclude from '@/components/core/ServicesPages/IT/AiInclude'
import { CardsCarousel } from '@/components/core/ServicesPages/IT/CardsCarousel'
import Content from '@/components/core/ServicesPages/IT/Content'
import CTA from '@/components/core/ServicesPages/IT/CTA'
import DiscoverMore from '@/components/core/ServicesPages/IT/DiscoverMore'
import { Features } from '@/components/core/ServicesPages/IT/Features'
import Hero from '@/components/core/ServicesPages/IT/HeroSection'
import { PlatformIndependent } from '@/components/core/ServicesPages/IT/PlatformIndependent'
import { ScrollBasedVelocity } from '@/components/core/ServicesPages/IT/ScrollBasedVelocity'
import ServicesSection from '@/components/core/ServicesPages/IT/ServicesSection'
import {FinalThoughts} from '@/components/core/ServicesPages/FinalThoughts'
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

      <div id='main' className="mt-20 mb-0"><Content /></div>
      <div className="my-20"><ScrollBasedVelocity text={" Website Development Web Development "} /></div>
        <div className="my-40"><AiInclude /></div>
      <div className="mt-40"><CardsCarousel /></div>
      <div className="my-0"><PlatformIndependent /></div>
      <div className="mt-0 mb-40"><CTA /></div>
      <div className="my-40"><Features /></div>
      <div className="mt-0 mb-40"><ServicesSection /></div>
      <div className="mb-40"><DiscoverMore /></div>
      <div className="mb=40"><FinalThoughts /></div>
    </>
  )
}

export default ManiContent