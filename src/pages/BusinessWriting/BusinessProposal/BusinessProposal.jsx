import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const BusinessProposalProcess  = React.lazy(()=> import('./BusinessProposalProcess.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))
const BusinessProposalStrategies  = React.lazy(()=> import('./BusinessProposalStrategies.jsx'))




function businessProposal() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Let"} title2={"Our"} title3={"Business Proposal"} title4={"Experts Help You Succeed"} description={"As a leading provider of business proposal writing services, we understand that your submission is often a client or investor's first impression of your business."}/>
        <WhatsTheNeed title1={"What Our"} title2={"Business Proposal Writers"} title3={"Provide to Help Companies in Various Industries"} description={"For RFPs, bids, and other formally solicited opportunities, we craft compelling proposals, applications, and reports tailored to the specific requirements. We've helped clients informally solicit interest and sell complex solutions through white papers, case studies, one-pagers and other documents. We develop high-quality public relations, thought leadership, and inbound marketing content like articles, bylines, blog posts, and social media updates. We can assist with drafting and placing press releases, op-eds, and feature stories in industry publications to build awareness and credibility and establish your brand as a thought leader."}/>
        <CallToAction title={"Bring Your Vision to Life Through"} title2={"Strategic, Results-Driven Content"} description={"We use focused discovery to deeply understand your business and create customized content to meet your goals."}/>
        <BusinessProposalProcess/>
        <OurRecentRelease title={"Business Proposal"}/>
        <BusinessProposalStrategies/>
        <Testimonials title={'Appreciation from Clients'}/>
        
        
        
        </Suspense>
    </>
  )
}

export default businessProposal
