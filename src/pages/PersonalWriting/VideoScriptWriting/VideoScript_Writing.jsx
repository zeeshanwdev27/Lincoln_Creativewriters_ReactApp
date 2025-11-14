import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const VideoScriptProcess  = React.lazy(()=> import('./VideoScriptProcess.jsx'))
const VideoScriptStrategies  = React.lazy(()=> import('./VideoScriptStrategies.jsx'))
const VideoScriptiFAQs  = React.lazy(()=> import('./VideoScriptiFAQs.jsx'))







function VideoScript_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"3,2,1…"} title2={""} title3={"Action!"} title4={"Shoot Videos That Inspire!"} description={"Our Video Script Writing Services Are Just What You Need!"}/>
        <WhatsTheNeed title1={"Receive Quality"} title2={"Video Scripts That Connect"} title3={"with Audiences by Professional Video Script Writer"} description={"Videos are among the best mediums to send messages over through. Research even indicates that a video message has a higher retention chance than reading it verbally. If you wish to promote your products or provide insight regarding your industry to your intended audience, then videos are the way to go."}/>
        <CallToAction title={"Lincoln Creative Writers turns your ideas into"} title2={"engaging video scripts that connect with your audience."} description={"We Don’t Have a Team of Generic Video Scriptwriters. But Instead, They're Storytellers with A Keen Understanding of What Makes an Audience Tick"}/>
        <VideoScriptProcess/>
        <OurRecentRelease title={"VideoScript"}/>
        <VideoScriptStrategies/>
        <Testimonials title={'Appreciation from Clients'}/>
        <VideoScriptiFAQs/>




        </Suspense>
    </>
  )
}

export default VideoScript_Writing
