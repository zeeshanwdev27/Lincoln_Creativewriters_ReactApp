import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const InfographicStrategies  = React.lazy(()=> import('./InfographicStrategies.jsx'))
const InfographicContent  = React.lazy(()=> import('./InfographicContent.jsx'))
const InfograhicSamples  = React.lazy(()=> import('./InfograhicSamples.jsx'))
const InfographicPackages  = React.lazy(()=> import('./InfographicPackages.jsx'))
const InfographicProposals  = React.lazy(()=> import('./InfographicProposals.jsx'))



function Infographic_Main() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Infographics"} title2={""} title3={"Writing"} title4={"Services That Appeal"} description={"Use our creative infographic design to foster the audience's trust in your brand's message."}/>
        <InfographicStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <InfographicContent/>
        <InfograhicSamples/>
        <InfographicPackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <InfographicProposals/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default Infographic_Main
