import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const TranscriptionStrategies  = React.lazy(()=> import('./TranscriptionStrategies.jsx'))
const TranscriptionContent  = React.lazy(()=> import('./TranscriptionContent.jsx'))
const TranscriptionProposal  = React.lazy(()=> import('./TranscriptionProposal.jsx'))



function Transcription_Service() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"We Provide Professional"} title2={""} title3={"Transcription"} title4={"Services"} description={"Our transcription services team handles all kinds of challenging audio and video transcriptions."}/>
        <TranscriptionStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <TranscriptionContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <TranscriptionProposal/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default Transcription_Service
