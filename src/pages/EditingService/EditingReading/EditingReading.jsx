import React, { Suspense } from 'react';

const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const EditReadingStrategies  = React.lazy(()=> import('./EditReadingStrategies.jsx'))
const EditingReadingContent  = React.lazy(()=> import('./EditingReadingContent.jsx'))
const EditingReadingPackages  = React.lazy(()=> import('./EditingReadingPackages.jsx'))
const EditingReadingProposals  = React.lazy(()=> import('./EditingReadingProposals.jsx'))


function EditingReading() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <ArticleWriting title1={"Editing And"} title2={''} title3={'Proofreading'} title4={'Services'} description={"Curate a powerful, error-free literary masterpiece with the best professional book editing and publishing services"} amount={"5"}/>
        <EditReadingStrategies/>
        <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
        <EditingReadingContent/>
        <EditingReadingPackages/>
        <CallToAction title={"Lincoln Marketing Agency – A One-Stop Shop"} title2={"for All Your Content Needs"} description={"Sit back and relax. Our writers will take care of your needs."}/>
        <EditingReadingProposals/>
        <Testimonials title={'Appreciation from Clients'}/>

        </Suspense>
    </>
  )
}

export default EditingReading
