import React, { Suspense } from 'react';

const HeroSection = React.lazy(()=> import('./HeroSection.jsx'))
const HowWeProvide = React.lazy(()=> import('./HowWeProvide.jsx'))
const WhatWeCreate = React.lazy(()=> import('./WhatWeCreate.jsx'))
const CallToAction = React.lazy(()=> import('./CallToAction.jsx'))
const Features = React.lazy(()=> import('./Features.jsx'))
const CollabrateWithUs = React.lazy(()=> import('./CollabrateWithUs.jsx'))
const WritingServicesSteps = React.lazy(()=> import('./WritingServicesSteps.jsx'))
const ContentWithoutWorry = React.lazy(()=> import('./ContentWithoutWorry.jsx'))
const WhyChooseUs = React.lazy(()=> import('./WhyChooseUs.jsx'))
const Testimonials = React.lazy(()=> import('./Testimonials.jsx'))
const FAQS = React.lazy(()=> import('./FAQS.jsx'))

function MainHome() {
  return (
    <>
    <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
    <HeroSection/>
    <HowWeProvide/>
    <WhatWeCreate/>
    <CallToAction title={'Our Creative Writing Professionals'} title2={'Take Content Creation to the Next Level'} description={'Get professionals to provide top-notch writing services to get exactly what you need. Give us a call and join our exclusive list of satisfied clients.'}/>
    <Features/>
    <CollabrateWithUs/>
    <WritingServicesSteps/>
    <ContentWithoutWorry/>
    <WhyChooseUs/>
    <Testimonials title={'Happy Clients'}/>
    <FAQS/>
    </Suspense>
    </>
  )
}

export default MainHome
