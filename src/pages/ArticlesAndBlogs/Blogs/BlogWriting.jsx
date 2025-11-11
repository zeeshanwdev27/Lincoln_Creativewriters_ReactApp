import React, { Suspense } from 'react';
const ArticleWriting = React.lazy(()=> import('../Article/ArticleWriting.jsx'))
const CallToAction = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const HireProfessionalBlogWriter = React.lazy(()=> import('./HireProfessionalBlogWriter.jsx'))
const BlogWritingService = React.lazy(()=> import('./BlogWritingService.jsx'))
const CheckSampleBlogs = React.lazy(()=> import('./CheckSampleBlogs.jsx'))
const ChoosePackage = React.lazy(()=> import('../Article/ChoosePackage.jsx'))
const ProminentFeatures = React.lazy(()=> import('./ProminentFeatures.jsx'))
const Testimonials = React.lazy(()=> import('../../Home/Testimonials.jsx'))

function BlogWriting() {
  return (
    <>
    <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
    <ArticleWriting title1={'Premium'} title2={'Blog'} title3={'Writing'} title4={'Services For Everyone'} description={"Our expert blog post writers excel in maintaining the audience's interest with unique writing styles."}/>
    <HireProfessionalBlogWriter/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <BlogWritingService/>
    <CheckSampleBlogs/>
    <ChoosePackage header={'Blog'}/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <ProminentFeatures/>
     <Testimonials title={'Appreciation from Clients'}/>
     </Suspense>
    </>
  )
}

export default BlogWriting
