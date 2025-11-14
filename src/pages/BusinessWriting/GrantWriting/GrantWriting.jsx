import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const GrantWritingProcess  = React.lazy(()=> import('./GrantWritingProcess.jsx'))
const GrantWritingStrategies  = React.lazy(()=> import('./GrantWritingStrategies.jsx'))
const GrantWritingFAQs  = React.lazy(()=> import('./GrantWritingFAQs.jsx'))



function GrantWriting() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Secure Funds"} title2={"with Compelling "} title3={"Grant"} title4={"Proposals"} description={"Choose professional grant writing services to unlock your doors to private and government funds."}/>
        <WhatsTheNeed title1={"Why Go for "} title2={"Grant Proposal"} title3={"Writing Services?"} description={"Did you know that the number of grant proposals you send boosts your chances of funding your project? Recent data revealed that applicants who sent proposals to multiple private and federal foundations had a higher acceptance rate (almost double). Although most grant proposal acceptance is based on the foundation and project mission and vision alignment, the fact remains that the more tailored grants you send, the better your chances of grant acceptance. Tailoring each grant to their respective organization can be quite trivial. It’s the reason why you should consider professional grant writing services."}/>
        <CallToAction title={"Count On Our Grant Writer Services to"} title2={"Take Care of Your Proposal Needs"} description={"At Our dedicated grant writing company, we write compelling letters of intent that cover each point of your project. Our best yet affordable grant writing services include every aspect of the grant proposal."}/>
        <GrantWritingProcess/>
        <OurRecentRelease title={"Grant Writing"}/>
        <GrantWritingStrategies/>
        <GrantWritingFAQs/>
        <Testimonials title={'Appreciation from Clients'}/>




        
        
        </Suspense>
    </>
  )
}

export default GrantWriting
