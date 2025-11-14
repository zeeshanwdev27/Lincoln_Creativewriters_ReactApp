import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const PresentationStrategies  = React.lazy(()=> import('./PresentationStrategies.jsx'))
const PresentationContent  = React.lazy(()=> import('./PresentationContent.jsx'))
const PresentationProposal  = React.lazy(()=> import('./PresentationProposal.jsx'))



function PresentationsWriting() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Developing Presentations"} title2={"That Can"} title3={"Create"} title4={"an Impact"} description={"Our presentation writers can help you convey your message through powerful PowerPoint presentations."}/>
        <PresentationStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <PresentationContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <PresentationProposal/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default PresentationsWriting
