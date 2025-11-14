import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const BusinessStrategies  = React.lazy(()=> import('./BusinessStrategies.jsx'))
const BusinessContent  = React.lazy(()=> import('./BusinessContent.jsx'))
const BusinessProposals  = React.lazy(()=> import('./BusinessProposals.jsx'))





function Business_Card() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"We’re All in for a Powerful"} title2={""} title3={"Business"} title4={"Impression"} description={"Ready to build that powerful impression? Get the best business card design services."}/>
        <BusinessStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <BusinessContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <BusinessProposals/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default Business_Card
