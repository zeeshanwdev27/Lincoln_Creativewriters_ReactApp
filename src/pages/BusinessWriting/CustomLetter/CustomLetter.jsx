import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const CustomLetterStrategies  = React.lazy(()=> import('./CustomLetterStrategies.jsx'))
const CustomLetterContent  = React.lazy(()=> import('./CustomLetterContent.jsx'))
const CustomLetterProposals  = React.lazy(()=> import('./CustomLetterProposals.jsx'))




function CustomLetter() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Professional Letter"} title2={""} title3={"Writing"} title4={"Services for Everyone"} description={"Our presentation writers can help you convey your message through powerful PowerPoint presentations."}/>
        <CustomLetterStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <CustomLetterContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <CustomLetterProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default CustomLetter
