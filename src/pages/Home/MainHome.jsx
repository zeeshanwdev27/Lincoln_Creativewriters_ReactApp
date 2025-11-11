import React from 'react'
import HeroSection from './HeroSection.jsx'
import HowWeProvide from './HowWeProvide.jsx'
import WhatWeCreate from './WhatWeCreate.jsx'
import CallToAction from './CallToAction.jsx'
import Features from './Features.jsx'
import CollabrateWithUs from './CollabrateWithUs.jsx'
import WritingServicesSteps from './WritingServicesSteps.jsx'
import ContentWithoutWorry from './ContentWithoutWorry.jsx'
import WhyChooseUs from './WhyChooseUs.jsx'
import Testimonials from './Testimonials.jsx'
import FAQS from './FAQS.jsx'

function MainHome() {
  return (
    <>
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
      
    </>
  )
}

export default MainHome
