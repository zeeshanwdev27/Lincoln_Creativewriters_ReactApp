import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const LetterStrategies  = React.lazy(()=> import('./LetterStrategies.jsx'))
const LetterContent  = React.lazy(()=> import('./LetterContent.jsx'))
const LetterProposals  = React.lazy(()=> import('./LetterProposals.jsx'))






function Letter_Head() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Get Creative"} title2={""} title3={"Letterhead "} title4={"Design Services"} description={"We offer industry-leading letterhead design services to enable businesses create an impression that reflects their ideas and vision on a broader canvas helping them establish credibility and integrity."}/>
        <LetterStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <LetterContent/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <LetterProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default Letter_Head
