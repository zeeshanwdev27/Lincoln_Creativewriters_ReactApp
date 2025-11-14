import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const EmailWritingStrategies  = React.lazy(()=> import('./EmailWritingStrategies.jsx'))
const EmailContent  = React.lazy(()=> import('./EmailContent.jsx'))
const EmailWritingSamples  = React.lazy(()=> import('./EmailWritingSamples.jsx'))
const EmailWritingPackages  = React.lazy(()=> import('./EmailWritingPackages.jsx'))
const EmailWritingProposal  = React.lazy(()=> import('./EmailWritingProposal.jsx'))



function EmailWriting() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        <ArticleWriting title1={"Impactful marketing with"} title2={''} title3={'EmailWriting'} title4={'Service'} description={"Need a strong whitepaper? Hire our white paper copywriter to benefit from an industry-leading whitepaper."} amount={"150"}/>
        <EmailWritingStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <EmailContent/>
        <EmailWritingSamples/>
        <EmailWritingPackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={" for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <EmailWritingProposal/>
        <Testimonials title={'Appreciation from Clients'}/>

        
        
        
        </Suspense>
    </>
  )
}

export default EmailWriting
