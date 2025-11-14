import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const CompliantStrategies  = React.lazy(()=> import('./CompliantStrategies.jsx'))
const CompliantContent  = React.lazy(()=> import('./CompliantContent.jsx'))
const CompliantProposals  = React.lazy(()=> import('./CompliantProposals.jsx'))




function Compliant_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Writing Customized"} title2={""} title3={"Complaint"} title4={"Letters Was Never This Easy"} description={"Are you planning on drafting a formal complaint? Our professional complaint letter service can help you prepare a concise complaint letter that presents your concerns correctly."}/>
         <CompliantStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <CompliantContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <CompliantProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default Compliant_Writing
