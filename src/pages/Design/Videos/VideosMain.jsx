import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const VideoStrategies  = React.lazy(()=> import('./VideoStrategies.jsx'))
const VideoContent  = React.lazy(()=> import('./VideoContent.jsx'))
const VideoProposals  = React.lazy(()=> import('./VideoProposals.jsx'))









function VideosMain() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Professional"} title2={""} title3={"Video"} title4={"Services for Your Brand"} description={"We can tell your brand story with our industry-leading video creation expertise helping you narrate your tale in style."}/>
        <VideoStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <VideoContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <VideoProposals/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default VideosMain
