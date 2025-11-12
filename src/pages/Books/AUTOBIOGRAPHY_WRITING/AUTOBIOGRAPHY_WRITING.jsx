import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const WhatsTheNeed  = React.lazy(()=> import('../EBOOK/WhatsTheNeed.jsx'))
const HowWeWork  = React.lazy(()=> import('./HowWeWork.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../EBOOK/OurRecentRelease.jsx'))
const AutobiographyWritingServices  = React.lazy(()=> import('./AutobiographyWritingServices.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))
const AutoBioGraphyFAQ  = React.lazy(()=> import('./AutoBioGraphyFAQ.jsx'))


function AUTOBIOGRAPHY_WRITING() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          
          <MBHeroSection title1={"With Staller, Craft"} title2={"Your"} title3={"Autobiography"} title4={"With Our Writing Services!"} description={"Let Lincoln creative writers be your guide for your next book release. Get the expert ebook writing services from the experts."}/>
          <WhatsTheNeed title1={"Tailored"} title2={"Autobiography Writing Services"} title3={"Just for You!"} description={"Starting a journey to capture your life story is a thrilling adventure, but the thought of finding the perfect words to weave your narrative can be daunting. Our Autobiography Writing Services are meticulously tailored just for you, ensuring that every chapter unfolds with authenticity and resonance. We believe that your life deserves to be narrated with the same passion and uniqueness that defines you. Your story is waiting to be told, and we're here to make it unforgettable."}/>
          <CallToAction title={"Don't Settle for Any Less Than"} title2={"Autobiography with Extraordinary Depth"} description={"At Lincoln Creative Writers, our expert ghostwriters craft a masterpiece reflecting your experiences, triumphs, and unique quirks."}/>
          <HowWeWork/>
          <OurRecentRelease title={"Autobiography"}/>
          <AutobiographyWritingServices/>
          <Testimonials title={'Appreciation from Clients'}/>
          <AutoBioGraphyFAQ/>


        
        
        </Suspense>
    </>
  )
}

export default AUTOBIOGRAPHY_WRITING
