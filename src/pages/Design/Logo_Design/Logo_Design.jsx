import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const LogoProcess  = React.lazy(()=> import('./LogoProcess.jsx'))
const LogoStrategies  = React.lazy(()=> import('./LogoStrategies.jsx'))




function Logo_Design() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"The"} title2={""} title3={"LOGO"} title4={"That Speaks for Your Brand"} description={"Our team of design veterans creates impactful logos that resonate with your audience. We go beyond visuals – we craft a mark that tells your brand story, sparks recognition, and sets you apart."}/>
        <WhatsTheNeed title1={"Take Your Brand to New Heights with "} title2={"Lincoln Creative"} title3={"Writers’ Logo Services"} description={"Lincoln Creative Writers is committed to bringing your branding concepts to life through instantly recognizable and memorable logos. Compared to other business essentials, a good logo is one of the most potent tools that can explain your company's core to a customer. Whether it's an initial company, re-branding an existing business, or even looking to define your company image altogether, logo design services are here to help. We have an excellent group of friendly designers to ensure your logo design is smooth, contemporary, or traditional, depending on your choice."}/>
        <CallToAction title={"You Want To Make Sure You Work"} title2={"With The Right Team, Right?"} description={"Well, look no further than Lincoln Creative Writers; just type logo design services near me, and get the best logo design service agency."}/>
        <LogoProcess/>
        <OurRecentRelease title={"Wikipedia"}/>
        <LogoStrategies/>
        <Testimonials title={'Appreciation from Clients'}/>






        </Suspense>
    </>
  )
}

export default Logo_Design
