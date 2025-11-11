import React from 'react'
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
    <ArticleWriting/>
    <HireExpert/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <ArticleWritingService/>
    <CheckSampleArticle/>
    <ChoosePackage/>
    <CallToAction title={'Lincoln Marketing Agency'} title2={'A One-Stop Shop for All Your Content Needs'} description={"Sit back and relax. Our writers will take care of your needs."}/>
    <DistinctiveFeatures/>
    <Testimonials title={'Appreciation from Clients'}/>

    
    </>
  )
}

export default Article
