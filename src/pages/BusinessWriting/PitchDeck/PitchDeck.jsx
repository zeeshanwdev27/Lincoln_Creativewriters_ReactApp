import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const PitchDeckStrategies  = React.lazy(()=> import('./PitchDeckStrategies.jsx'))
const PitchDeckContent  = React.lazy(()=> import('./PitchDeckContent.jsx'))
const PitchDeckSamples  = React.lazy(()=> import('./PitchDeckSamples.jsx'))
const PitchDeckPackages  = React.lazy(()=> import('./PitchDeckPackages.jsx'))
const PitchDeckProposals  = React.lazy(()=> import('./PitchDeckProposals.jsx'))



function PitchDeck() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Pitch Deck"} title2={''} title3={'Design'} title4={'Services'} description={"An impactful tool for delivering ideas and gravitating stakeholders toward your business model."} amount={"675"}/>
        <PitchDeckStrategies/>
        <CallToAction title={"Receive Custom-Made"} title2={"Presentations"} description={"Create a concise yet detailed snapshot of your company to attract potential investors."}/>
        <PitchDeckContent/>
        <PitchDeckSamples/>
        <PitchDeckPackages/>
        <CallToAction title={"You’re Winning the Next Bet!"} title2={""} description={"Showcase your business model in the right light with pitch deck designers."}/>
        <PitchDeckProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default PitchDeck
