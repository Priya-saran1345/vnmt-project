import Faq from '@/components/projectcomponent/Faq'
import Footer from '@/components/projectcomponent/Footer'
import { Testimonials } from '@/components/projectcomponent/Testimonials'
import { CaseStudy } from '@/components/projectcomponent/Case-studies'
import { ImpactSection } from '@/components/projectcomponent/impact-section'
import { IndustriesSection } from '@/components/projectcomponent/industries-section'
import { NetsuiteSection } from '@/components/projectcomponent/netsuite-section'
import { Header } from '@/components/projectcomponent/header'
import { Hero } from '@/components/projectcomponent/hero'
import { Services } from '@/components/projectcomponent/services'
import { Partners } from '@/components/projectcomponent/partners'
import { BlogSection } from '@/components/projectcomponent/blog-section'
import { IntegrationSection } from '@/components/projectcomponent/integration-section'
import { TruestedPartner } from '@/components/projectcomponent/trusted-partner'
export default function FAQPage() {
  return (
    <div className="text-black">
      <div className=" w-full">
        <Header />
        <div className='bg_banner'>
          <Hero />
          <Services />
        </div>
        <Partners />
        <IndustriesSection />
        <ImpactSection />
        <NetsuiteSection />
        <IntegrationSection />
        <BlogSection />
        <TruestedPartner />
        <CaseStudy />
        <div className="w-full px-0 bg-[url('/images/faq-bg.svg')] ">
          <Testimonials />
          <Faq />
        </div>
        <Footer />
      </div>
    </div>
  )
}
