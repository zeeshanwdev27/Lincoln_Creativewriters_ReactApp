import React, { Suspense } from 'react';
const MBHeroSection = React.lazy(()=> import('../MicroBlogPosts/MBHeroSection.jsx'))
const PowerYourMarketing = React.lazy(()=> import('./PowerYourMarketing.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const PowerBloggingServices = React.lazy(()=> import('./PowerBloggingServices.jsx'))
const WhyChoosePowerPostBlog = React.lazy(()=> import('./WhyChoosePowerPostBlog.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

function PowerBlogPosts() {
  return (
    <>
    <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
    
    <MBHeroSection title1={"Boost Your"} title2={"Marketing"} title3={"Efforts"} title4={"With Our Power Posts"} description={"Our writers are ready to work with you to deliver blogs that will make a difference."}/>
    <PowerYourMarketing />
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <PowerBloggingServices/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <WhyChoosePowerPostBlog/>
    <Testimonials title={'Appreciation from Clients'}/>
    
    </Suspense>
    </>
  )
}

export default PowerBlogPosts
