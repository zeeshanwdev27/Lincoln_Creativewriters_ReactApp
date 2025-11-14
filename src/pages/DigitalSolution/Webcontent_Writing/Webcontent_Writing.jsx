import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const WebcontentStrategies  = React.lazy(()=> import('./WebcontentStrategies.jsx'))
const WebcontentContent  = React.lazy(()=> import('./WebcontentContent.jsx'))
const WebcontentSamples  = React.lazy(()=> import('./WebcontentSamples.jsx'))
const WebcontentPackages  = React.lazy(()=> import('./WebcontentPackages.jsx'))
const WebcontentProposals  = React.lazy(()=> import('./WebcontentProposals.jsx'))




function Webcontent_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Dedicated"} title2={''} title3={'WebContent'} title4={'Writing Company'} description={"We offer tailored web content writing services helping our clients develop a prominent online presence."} amount={"36"}/>
        <WebcontentStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <WebcontentContent/>
        <WebcontentSamples/>
        <WebcontentPackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <WebcontentProposals/>
        <Testimonials title={'Appreciation from Clients'}/>




        </Suspense>
    </>
  )
}

export default Webcontent_Writing
