import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))
const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const BusinessPlanProcess  = React.lazy(()=> import('./BusinessPlanProcess.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))
const BusinessPlanStrategies  = React.lazy(()=> import('./BusinessPlanStrategies.jsx'))
const BusinessPlanFAQs  = React.lazy(()=> import('./BusinessPlanFAQs.jsx'))


function BusinessPlan() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Achieve Success with"} title2={"Professional"} title3={"BusinessPlan"} title4={"Writing Services"} description={"Speak more confidently by having a plan crafted by professional business plan writing services."}/>
         <WhatsTheNeed title1={"Why Go for"} title2={"Business Plan"} title3={"Writing Service?"} description={"Monetary funds are a crucial aspect of business success. More than half of businesses fail due to lack of funds. It’s why you may want to prepare the necessary business to help it get on its feet. Fundraising can be trivial and slow. It’s why most business owners consider lending it from the bank or other vendors. But how exactly would you convince the lender to provide the necessary funds? That is where persuasive business plans come in. They can help convince the lender. Hiring a business plan writing company is the best way to craft one."}/>
         <CallToAction title={"Professional Business Plan Writing Services"} title2={"Can Help Craft Compelling Business Proposals"} description={"Among business plan writing service providers, Lincoln creative writers is also one that can offer compelling business plans for your business."}/>
         <BusinessPlanProcess/>
         <OurRecentRelease title={"Business Plan"}/>
         <BusinessPlanStrategies/>
         <BusinessPlanFAQs/>
         <Testimonials title={'Appreciation from Clients'}/>


        
        
        
        </Suspense>
    </>
  )
}

export default BusinessPlan
