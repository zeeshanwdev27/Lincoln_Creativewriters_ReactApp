import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))
const TurnYourImagination  = React.lazy(()=> import('./TurnYourImagination.jsx'))
const HireFictionGhostWriter  = React.lazy(()=> import('./HireFictionGhostWriter.jsx'))
const WhatMakesOurService  = React.lazy(()=> import('./WhatMakesOurService.jsx'))


function FICTION_BOOKS() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          
          <MBHeroSection title1={"Critically"} title2={"Acclaimed"} title3={"Fiction"} title4={"Writing Services"} description={"Lincoln Creative Writers offer professional fiction writing services to help you narrate stories that create an astounding impact on your readers."}/>
          <TurnYourImagination/>
          <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
          <HireFictionGhostWriter/>
          <CallToAction title={"Lincoln Marketing Agency – A One-Stop"} title2={"Shop for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
          <WhatMakesOurService/>
          <Testimonials title={'Appreciation from Clients'}/>
        
        </Suspense>
    </>
  )
}

export default FICTION_BOOKS
