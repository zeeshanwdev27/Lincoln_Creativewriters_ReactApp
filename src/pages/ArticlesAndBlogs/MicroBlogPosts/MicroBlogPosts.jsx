import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('./MBHeroSection.jsx'))
const ExpandYourReach = React.lazy(()=> import('./ExpandYourReach.jsx'))
const CallToAction = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const MicroBloggingService = React.lazy(()=> import('./MicroBloggingService.jsx'))
const MakeADifference = React.lazy(()=> import('./MakeADifference.jsx'))
const Testimonials = React.lazy(()=> import('../../Home/Testimonials.jsx'))


function MicroBlogPosts() {
  return (
    <>
      <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
      <MBHeroSection title1={"We Take"} title2={"Micro"} title3={"blogging"} title4={"To The Next Level"} description={"Our microbloggers keep your audience engaged with just the right words."}/>
      <ExpandYourReach/>
      <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
      <MicroBloggingService/>
      <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
      <MakeADifference/>
      <Testimonials title={'Appreciation from Clients'}/>
      </Suspense>
    </>
  )
}

export default MicroBlogPosts
