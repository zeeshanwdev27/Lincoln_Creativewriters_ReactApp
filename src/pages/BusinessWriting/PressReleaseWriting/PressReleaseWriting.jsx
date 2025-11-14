import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const PressReleaseStrategies  = React.lazy(()=> import('./PressReleaseStrategies.jsx'))
const PressReleaseContent  = React.lazy(()=> import('./PressReleaseContent.jsx'))
const PressReleaseSamples  = React.lazy(()=> import('./PressReleaseSamples.jsx'))
const PressReleasePackages  = React.lazy(()=> import('./PressReleasePackages.jsx'))
const PressReleaseProposals  = React.lazy(()=> import('./PressReleaseProposals.jsx'))


function PressReleaseWriting() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Productive Press Release"} title2={''} title3={'Writing'} title4={'Services'} description={"Our press release copywriting and distribution service will assist you in reaching out to journalists and media outlets."} amount={"35"}/>
        <PressReleaseStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <PressReleaseContent/>
        <PressReleaseSamples/>
        <PressReleasePackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <PressReleaseProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default PressReleaseWriting
