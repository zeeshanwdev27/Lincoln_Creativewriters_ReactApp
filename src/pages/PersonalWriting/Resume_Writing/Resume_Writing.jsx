import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const ResumeWritingProcess  = React.lazy(()=> import('./ResumeWritingProcess.jsx'))
const ResumeStrategies  = React.lazy(()=> import('./ResumeStrategies.jsx'))

const ResumeWritingFAQs  = React.lazy(()=> import('./ResumeWritingFAQs.jsx'))



function Resume_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Level Up Your Career with"} title2={""} title3={"24-Hour"} title4={"Resume Writing Services"} description={"Our talented resume writers for creative writing resumes, crafts compelling narratives tailored to highlight your unique experiences, skills and value proposition."}/>
        <WhatsTheNeed title1={"Hire An Expert"} title2={"for Killer Resume"} title3={"Writing Service"} description={"Searching for that perfect next step in your career? Stand out from the crowd with resumes designed by top-rated career experts. Gone are the days of stuffy, bland resumes – our resume writing service specialize in eye-catching formats proven to capture hiring manager attention. It's time your resume reflected your true potential - let our pros bring that vision to life."}/>
        <CallToAction title={"Exceptional Creative Writing Services"} title2={"Elevate Your Content with Meaningful Impact"} description={"Experience our unmatched killer resume services, driven by meticulous research and a commitment to originality. Trust us to deliver quality that distinguishes you from the rest!"}/>
        <ResumeWritingProcess/>
        <OurRecentRelease title={""}/>
        <ResumeStrategies/>
        <Testimonials title={'Appreciation from Clients'}/>
        <ResumeWritingFAQs/>







        </Suspense>
    </>
  )
}

export default Resume_Writing
