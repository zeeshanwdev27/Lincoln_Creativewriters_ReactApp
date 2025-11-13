import React, { Suspense } from 'react';
const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))
const ProficientWriters  = React.lazy(()=> import('./ProficientWriters.jsx'))
const EffectiveWhitepaperWriting  = React.lazy(()=> import('./EffectiveWhitepaperWriting.jsx'))
const WhitepaperSamples  = React.lazy(()=> import('./WhitepaperSamples.jsx'))
const WhitePaperPackages  = React.lazy(()=> import('./WhitePaperPackages.jsx'))
const WhitepaperProposal  = React.lazy(()=> import('./WhitepaperProposal.jsx'))


function Whitepaper_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
             
             <ArticleWriting title1={"America's Leading"} title2={''} title3={'Whitepaper'} title4={'Writing Service'} description={"Need a strong whitepaper? Hire our white paper copywriter to benefit from an industry-leading whitepaper."} amount={"199"}/>
             <ProficientWriters/>
             <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
             <EffectiveWhitepaperWriting/>
             <WhitepaperSamples/>
             <WhitePaperPackages/>
             <CallToAction title={"Lincoln Marketing Agency"} title2={"A One-Stop Shop for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
             <WhitepaperProposal/>
             <Testimonials title={'Appreciation from Clients'}/>
        
        
        
        </Suspense>
    </>
  )
}

export default Whitepaper_Writing
