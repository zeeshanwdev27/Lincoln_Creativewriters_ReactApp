import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))
const WhatsTheNeed  = React.lazy(()=> import('../EBOOK/WhatsTheNeed.jsx'))
const OurSixSteps  = React.lazy(()=> import('./OurSixSteps.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../EBOOK/OurRecentRelease.jsx'))
const AudioBookSpecilist  = React.lazy(()=> import('./AudioBookSpecilist.jsx'))
const AudioBookFAQ  = React.lazy(()=> import('./AudioBookFAQ.jsx'))


function AUDIO_BOOKS() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          
          <MBHeroSection title1={"Expand Your"} title2={"Audience Through"} title3={"Audiobook "} title4={"Production"} description={"Reaching new listeners should be easy. Let our audio services bring your written work to life, increasing channel engagement and sales."}/>
          <WhatsTheNeed title1={"Elevate"} title2={"Your Storytelling"} title3={"Through Strategic Narration"} description={"Beyond individual styles, our guidance helps determine the ideal approach based on your content, target audience, and goals. Leverage our full-service expertise and industry relationships—partner with us to elevate your audiobook to all-new heights through the power of strategic narration."}/>
          <CallToAction title={"Realize Your Story's Greatest Potential and Take"} title2={"Your Audience and Career to All New Heights"} description={"Publish and spread your creative work in this engaging new audio format, reaching broader audiences than ever before."}/>
          <OurSixSteps/>
          <OurRecentRelease title={"AudioBook"}/>
          <AudioBookSpecilist/>
          <Testimonials title={'Appreciation from Clients'}/>
          <AudioBookFAQ/>


        
        </Suspense>
    </>
  )
}

export default AUDIO_BOOKS
