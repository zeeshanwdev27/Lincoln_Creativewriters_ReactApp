import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const WikipediaWritingProcess  = React.lazy(()=> import('./WikipediaWritingProcess.jsx'))
const WikipediaWritingStrategies  = React.lazy(()=> import('./WikipediaWritingStrategies.jsx'))



function Wikipedia_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Data-Driven"} title2={""} title3={"Wikipedia"} title4={"Writing Services to Represent Your Brand"} description={"Wikipedia writing services that focus on thorough research, meticulous editing, and compelling content optimized for search visibility."}/>
        <WhatsTheNeed title1={"Hire A"} title2={"Wikipedia Writer"} title3={"and Elevate Your Online Authority with Expert Wikipedia Writing Services"} description={"Our Wikipedia writing services are designed to create a credible and well-maintained Wikipedia presence for individuals, organizations, and brands. Contact us today to get started on your Wikipedia page and ensure it meets the highest standards of accuracy and reliability."}/>
        <CallToAction title={"As The Best Wikipedia Page Creation Service"} title2={"We Represent All Businesses And Organizations"} description={"Contact Us to Discuss Representing Your Notable Brand or Career Through an Impactful Custom Wikipedia Page"}/>
        <WikipediaWritingProcess/>
        <OurRecentRelease title={"Wikipedia"}/>
        <WikipediaWritingStrategies/>
        <Testimonials title={'Appreciation from Clients'}/>






        </Suspense>
    </>
  )
}

export default Wikipedia_Writing
