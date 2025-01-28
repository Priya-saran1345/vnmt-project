"use client"
import { useEffect } from "react";
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
import IntegrationSection from '@/components/projectcomponent/integration-section'
import { TrustedPartner } from '@/components/projectcomponent/trusted-partner'
import SideSheet from '@/components/projectcomponent/SideSheet'
import Navbar from '@/components/projectcomponent/navbar'
export default function FAQPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (

        <div className="text-black">
            <div className=" w-full">
                <Header />
                <Navbar />
                <div className='bg_banner'>
                    <Hero />
                    <Services />
                </div>
                <Partners />
                <SideSheet></SideSheet>
                <IndustriesSection />
                <ImpactSection />
                <NetsuiteSection />
                <IntegrationSection />
                <BlogSection />
                <TrustedPartner />
                <CaseStudy />
                <div className="w-full px-4 lg:px-0 bg-cover bg-[url('/images/faq-bg.svg')] ">
                    <Testimonials />
                    <Faq />
                </div>
                <Footer />
            </div>
        </div>
    )
}
