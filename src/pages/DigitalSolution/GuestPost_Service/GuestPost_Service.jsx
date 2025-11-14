import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const GuestPostStrategies  = React.lazy(()=> import('./GuestPostStrategies.jsx'))
const GuestPostContent  = React.lazy(()=> import('./GuestPostContent.jsx'))
const GuestPostSample  = React.lazy(()=> import('./GuestPostSample.jsx'))
const GuestPostPackages  = React.lazy(()=> import('./GuestPostPackages.jsx'))

const GuestPostProposal  = React.lazy(()=> import('./GuestPostProposal.jsx'))






function GuestPost_Service() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Top-notch"} title2={''} title3={'Guest'} title4={'Post Writing Service'} description={"We help your business extend its reach to a broad audience with our blog posting services!"} amount={"75"}/>
        <GuestPostStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <GuestPostContent/>
        <GuestPostSample/>
        <GuestPostPackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <GuestPostProposal/>
        <Testimonials title={'Appreciation from Clients'}/>


        </Suspense>
    </>
  )
}

export default GuestPost_Service
