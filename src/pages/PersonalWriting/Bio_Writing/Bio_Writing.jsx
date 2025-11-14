import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const BioWritingStrategies  = React.lazy(()=> import('./BioWritingStrategies.jsx'))
const BioWritingContent  = React.lazy(()=> import('./BioWritingContent.jsx'))
const BioWritingSamples  = React.lazy(()=> import('./BioWritingSamples.jsx'))
const BioWritingPackages  = React.lazy(()=> import('./BioWritingPackages.jsx'))
const BioWritingProposals  = React.lazy(()=> import('./BioWritingProposals.jsx'))




function Bio_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Professional"} title2={''} title3={'Biography '} title4={'Writing Service'} description={"Allow us to make your life an inspiration to others with our top-notch bio-writing services"} amount={"30"}/>
        <BioWritingStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <BioWritingContent/>
        <BioWritingSamples/>
        <BioWritingPackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <BioWritingProposals/>
        <Testimonials title={'Appreciation from Clients'}/>


        </Suspense>
    </>
  )
}

export default Bio_Writing
