import React from 'react'
const MBHeroSection = React.lazy(()=> import('../MicroBlogPosts/MBHeroSection.jsx'))
const HireListicleWritingExperts = React.lazy(()=> import('./HireListicleWritingExperts.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const HireListicleWriters = React.lazy(()=> import('./HireListicleWriters.jsx'))
const WhatWeDo = React.lazy(()=> import('./WhatWeDo.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))



function ListicleWriting() {
  return (
    <>
    <MBHeroSection title1={"Premier"} title2={"Listicle "} title3={"Writing"} title4={"Services"} description={"We are home to a proficient team of writers who can produce high-quality and engaging listicles for you."}/>
    <HireListicleWritingExperts/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <HireListicleWriters/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <WhatWeDo/>
    <Testimonials title={'Appreciation from Clients'}/>


    </>
  )
}

export default ListicleWriting
