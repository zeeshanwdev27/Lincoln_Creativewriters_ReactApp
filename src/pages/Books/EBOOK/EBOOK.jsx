import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))
const WhatsTheNeed = React.lazy(()=> import('./WhatsTheNeed.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const EbookWritingProcess  = React.lazy(()=> import('./EbookWritingProcess.jsx'))
const OurRecentRelease  = React.lazy(()=> import('./OurRecentRelease.jsx'))
const PerfectionIsOurMoto  = React.lazy(()=> import('./PerfectionIsOurMoto.jsx'))
const EbookFAQ  = React.lazy(()=> import('./EbookFAQ.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

function EBOOK() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          
          <MBHeroSection title1={"Turn Ideas into Bestsellers "} title2={"with Professional"} title3={"EBook"} title4={"Ghostwriting Services"} description={"Let Lincoln creative writers be your guide for your next book release. Get the expert ebook writing services from the experts."}/>
          <WhatsTheNeed/>
          <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
          <EbookWritingProcess/>
          <OurRecentRelease/>
          <PerfectionIsOurMoto/>
          <EbookFAQ/>
          <Testimonials title={'Appreciation from Clients'}/>

        
        
        </Suspense>
    </>
  )
}

export default EBOOK
