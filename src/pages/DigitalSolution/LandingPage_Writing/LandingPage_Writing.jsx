import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const LandingPageStrategies  = React.lazy(()=> import('./LandingPageStrategies.jsx'))
const LandingPageContent  = React.lazy(()=> import('./LandingPageContent.jsx'))
const LandingPageSamples  = React.lazy(()=> import('./LandingPageSamples.jsx'))
const LandingPagePackages  = React.lazy(()=> import('./LandingPagePackages.jsx'))
const LandingPageProposals  = React.lazy(()=> import('./LandingPageProposals.jsx'))




function LandingPage_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Outstanding"} title2={''} title3={'Landing'} title4={'Page Writing Services'} description={"Do you want to stop writing landing page copy? Well, don't worry; we're here to help. Call us now!"} amount={"150"}/>
        <LandingPageStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <LandingPageContent/>
        <LandingPageSamples/>
        <LandingPagePackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <LandingPageProposals/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default LandingPage_Writing
