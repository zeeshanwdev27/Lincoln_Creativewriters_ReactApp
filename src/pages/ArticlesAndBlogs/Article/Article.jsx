import React, { Suspense } from 'react';
const CallToAction = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const ArticleWriting = React.lazy(()=> import('./ArticleWriting.jsx'))
const HireExpert = React.lazy(()=> import('./HireExpert.jsx'))
const ArticleWritingService = React.lazy(()=> import('./ArticleWritingService.jsx'))
const CheckSampleArticle = React.lazy(()=> import('./CheckSampleArticle.jsx'))
const ChoosePackage = React.lazy(()=> import('./ChoosePackage.jsx'))
const DistinctiveFeatures = React.lazy(()=> import('./DistinctiveFeatures.jsx'))
const Testimonials = React.lazy(()=> import('../../Home/Testimonials.jsx'))

function Article() {
  return (
    <>
    <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
    <ArticleWriting title1={'Premium'} title2={'Article'} title3={'Writing'} title4={'Services'} description={"Hire article writers who can provide you with results helping you boost your business."}/>
    <HireExpert/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <ArticleWritingService/>
    <CheckSampleArticle/>
    <ChoosePackage header={'Article'}/>
    <CallToAction title={'Lincoln Marketing Agency'} title2={'A One-Stop Shop for All Your Content Needs'} description={"Sit back and relax. Our writers will take care of your needs."}/>
    <DistinctiveFeatures/>
    <Testimonials title={'Appreciation from Clients'}/>
    </Suspense>
    </>
  )
}

export default Article
