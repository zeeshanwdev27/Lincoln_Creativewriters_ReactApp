import React from 'react'
const MBHeroSection = React.lazy(()=> import('../MicroBlogPosts/MBHeroSection.jsx'))
const PowerYourMarketing = React.lazy(()=> import('./PowerYourMarketing.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const PowerBloggingServices = React.lazy(()=> import('./PowerBloggingServices.jsx'))
const WhyChoosePowerPostBlog = React.lazy(()=> import('./WhyChoosePowerPostBlog.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

function PowerBlogPosts() {
  return (
    <>
    <MBHeroSection title1={"Boost Your"} title2={"Marketing"} title3={"Efforts"} title4={"With Our Power Posts"} description={"Our writers are ready to work with you to deliver blogs that will make a difference."}/>
    <PowerYourMarketing />
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <PowerBloggingServices/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <WhyChoosePowerPostBlog/>
    <Testimonials title={'Appreciation from Clients'}/>
    </>
  )
}

export default PowerBlogPosts
