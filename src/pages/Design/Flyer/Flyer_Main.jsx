import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const FlyerStrategies  = React.lazy(()=> import('./FlyerStrategies.jsx'))
const FlyerContent  = React.lazy(()=> import('./FlyerContent.jsx'))
const FlyerSample  = React.lazy(()=> import('./FlyerSample.jsx'))
const FlyerPackage  = React.lazy(()=> import('./FlyerPackage.jsx'))
const FlyerProposals  = React.lazy(()=> import('./FlyerProposals.jsx'))



function Flyer_Main() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Highly impactful"} title2={''} title3={'Flyer'} title4={'Writing Services'} description={"Make an instant positive impression on employers with an attractive resume writing flyer? Call us now!"} amount={"199"}/>
        <FlyerStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <FlyerContent/>
        <FlyerSample/>
        <FlyerPackage/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <FlyerProposals/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default Flyer_Main
