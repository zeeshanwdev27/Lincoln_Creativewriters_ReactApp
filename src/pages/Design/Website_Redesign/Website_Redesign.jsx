import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const WebsiteProcess  = React.lazy(()=> import('./WebsiteProcess.jsx'))
const WebsiteStrategies  = React.lazy(()=> import('./WebsiteStrategies.jsx'))
const WebsiteFAQs  = React.lazy(()=> import('./WebsiteFAQs.jsx'))





function Website_Redesign() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Get Premium Website"} title2={""} title3={"Redesign"} title4={"Services to Empower Your Business Again"} description={"It's time to give your website a facelift and take your business to new heights. With the right website redesign services, you can create a memorable online presence that attracts more customers and increases sales."}/>
        <WhatsTheNeed title1={"Our Enhanced Website Redesigning Services - "} title2={"your bridge to a new beginning"} title3={"over the World Wide Web"} description={"We realize that the company's needs are as diverse as they are, and its goals, principles, and customers are different. This is why we strive to provide you with particular customized services aimed at solving your individual tasks. We're ready to revitalize your website so it can not only look visually appealing but also work perfectly on any device. From the shape and looks to the comfort and functionality of an online platform, we draw out all the stops to help it achieve the best you have in mind."}/>
        <CallToAction title={"Outdated Designs and Interfaces Lose Traffic"} title2={"and Fail to Showcase Your Services Effectively"} description={"Our Website Redesigning Services Provide Personalized Solutions Tailored Specifically for Every Business Needs."}/>
        <WebsiteProcess/>
        <OurRecentRelease title={""}/>
        <WebsiteStrategies/>
        <Testimonials title={'Appreciation from Clients'}/>
        <WebsiteFAQs/>

        </Suspense>
    </>
  )
}

export default Website_Redesign
