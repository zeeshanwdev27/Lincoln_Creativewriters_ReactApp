import React from 'react'
const MBHeroSection = React.lazy(()=> import('../MicroBlogPosts/MBHeroSection.jsx'))
const HireArticleWriters = React.lazy(()=> import('./HireArticleWriters.jsx'))
const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const PremiumMagazineContent = React.lazy(()=> import('./PremiumMagazineContent.jsx'))
const WhyOurMagazineArticle = React.lazy(()=> import('./WhyOurMagazineArticle.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


function MagazineArticles() {
  return (
    <>
    <MBHeroSection title1={"Award-Winning"} title2={"Magazine"} title3={"Writing"} title4={"Services"} description={"We have a team of writing experts who can help you produce original and quality content for your magazine."}/>
    <HireArticleWriters/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <PremiumMagazineContent/>
    <CallToAction title={'Top Notch Creative Writing Service'} title2={'Get Impactful Content That Matters'} description={"Our creative writing services are top-notch, backed by solid research, and completely free from plagiarism. It's all about quality you can count on!"}/>
    <WhyOurMagazineArticle/>
    <Testimonials title={'Appreciation from Clients'}/>

      
    </>
  )
}

export default MagazineArticles
