import React, { Suspense } from 'react';
const ArticleWriting = React.lazy(()=> import('../../ArticlesAndBlogs/Article/ArticleWriting.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))
const RedefiningNewsletter  = React.lazy(()=> import('./RedefiningNewsletter.jsx'))
const ContentForEveryNiche  = React.lazy(()=> import('./ContentForEveryNiche.jsx'))
const Newsletter_Samples  = React.lazy(()=> import('./Newsletter_Samples.jsx'))
const NewsLetterPackages  = React.lazy(()=> import('./NewsLetterPackages.jsx'))
const NewsLetterProposal  = React.lazy(()=> import('./NewsLetterProposal.jsx'))



function Newsletter_Writing() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
             
             <ArticleWriting title1={'Market Competitive'} title2={''} title3={'Newsletter'} title4={'Services'} description={"Writing a newsletter article was never as easy as it is with our professional writers."} amount={"70"}/>
             <RedefiningNewsletter/>
            <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
            <ContentForEveryNiche/>
            <Newsletter_Samples/>
            <NewsLetterPackages />
            <CallToAction title={"Top Notch Creative Writing Service"} title2={"Get Impactful Content That Matters"} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
            <NewsLetterProposal/>
            <Testimonials title={'Appreciation from Clients'}/>
        </Suspense>
    </>
  )
}

export default Newsletter_Writing
