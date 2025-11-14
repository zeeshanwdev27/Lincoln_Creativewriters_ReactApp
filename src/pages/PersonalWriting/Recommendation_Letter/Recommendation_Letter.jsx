import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const RecommendationStrategies  = React.lazy(()=> import('./RecommendationStrategies.jsx'))
const RecommendationContent  = React.lazy(()=> import('./RecommendationContent.jsx'))
const RecommendationProposals  = React.lazy(()=> import('./RecommendationProposals.jsx'))





function Recommendation_Letter() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Quality Letter of"} title2={""} title3={"Recommendation"} title4={"Services"} description={"Lincoln Creative understands that nothing is more valuable than a perfectly written reference letter when applying for a job, higher education, or internship to satisfy the expectation of admission or hiring committees."}/>
        <RecommendationStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <RecommendationContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <RecommendationProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default Recommendation_Letter
