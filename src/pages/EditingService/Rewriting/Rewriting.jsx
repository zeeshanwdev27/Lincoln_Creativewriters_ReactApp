import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const RewritingStrategies  = React.lazy(()=> import('./RewritingStrategies.jsx'))
const RewritingContent  = React.lazy(()=> import('./RewritingContent.jsx'))
const RewritingProposals  = React.lazy(()=> import('./RewritingProposals.jsx'))


function Rewriting() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Online Paraphrasing and"} title2={""} title3={"Rewriting"} title4={"Services"} description={"Allow us to rewrite an article without plagiarism for you to improve your outreach"}/>
        <RewritingStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <RewritingContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <RewritingProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default Rewriting
