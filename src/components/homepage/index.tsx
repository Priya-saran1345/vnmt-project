/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"
import { BlogSection } from '@/components/projectcomponent/blog-section';
import { CaseStudy } from '@/components/projectcomponent/Case-studies';
import Faq from '@/components/projectcomponent/Faq';
import { Hero } from '@/components/projectcomponent/hero';
import { IndustriesSection } from '@/components/projectcomponent/industries-section';
import IntegrationSection from '@/components/projectcomponent/integration-section';
import { NetsuiteSection } from '@/components/projectcomponent/netsuite-section';
import { Partners } from '@/components/projectcomponent/partners';
import { Services } from '@/components/projectcomponent/services';
import SideSheet from '@/components/projectcomponent/SideSheet';
import { Testimonials } from '@/components/projectcomponent/Testimonials';
import { TrustedPartner } from '@/components/projectcomponent/trusted-partner';
import { useEffect } from "react";
import OurImpact from "../projectcomponent/ourImpact";

export default function HomePage({blogdata}: any) {
    useEffect(() => {
        window.scrollTo(0, 0);
        localStorage.setItem("isScrolled", JSON.stringify(false));
    }, []);
    // console.log("blogdata",blogdata);
    // console.log("blogdata",data);
    
    return (

        <div className="text-black">
            <div className=" w-full relative">
                {/* <Header /> */}
                <div className='bg_banner'>
                <Hero />
                <Services />
                </div>
                <Partners />
                <SideSheet></SideSheet>
                <IndustriesSection />
                {/* <ImpactSection /> */}
                <OurImpact />
                <NetsuiteSection />
                <IntegrationSection />
                <BlogSection blogPosts={blogdata} />
                <TrustedPartner />
                <CaseStudy />
                <div className="w-full px-4 lg:px-0 bg-cover bg-[url('/images/faq-bg.svg')] ">
                <Testimonials />
                <Faq />
                </div>
            </div> 
        </div>
    )
}
