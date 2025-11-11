import React from 'react'
const MBHeroSection = React.lazy(()=> import('../MicroBlogPosts/MBHeroSection.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const ReachOutToUs  = React.lazy(()=> import('./ReachOutToUs.jsx'))
const NewsjackingServices  = React.lazy(()=> import('./NewsjackingServices.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))
const LookingtoRevolutionize  = React.lazy(()=> import('./LookingtoRevolutionize.jsx'))

function NewsJacking() {
  return (
    <>
      <MBHeroSection title1={"The Rise Of"} title2={"News"} title3={"Jacking"} title4={"In Modern Content Marketing"} description={"We offer services to help you use promo campaigns for marketing supremacy."}/>
      <ReachOutToUs />
      <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
      <NewsjackingServices />
      <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
      <LookingtoRevolutionize />
      <Testimonials title={'Appreciation from Clients'}/>
    </>
  )
}

export default NewsJacking
