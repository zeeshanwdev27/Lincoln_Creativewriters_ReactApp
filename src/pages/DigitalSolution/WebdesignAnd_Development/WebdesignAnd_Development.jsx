import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))


const WebdesignDevProcess  = React.lazy(()=> import('./WebdesignDevProcess.jsx'))
const WebdesignDevStrategies  = React.lazy(()=> import('./WebdesignDevStrategies.jsx'))







function WebdesignAnd_Development() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Finding a"} title2={""} title3={"Webapps"} title4={"Development Company Made Easy"} description={"No more! Get professional services for website design for your business. Big or small business, a web design service that provides SEO web design services equally to all"}/>
        <WhatsTheNeed title1={"Let Us Help You Optimize"} title2={"Your Website"} title3={"and Achieve Your Business Goals"} description={"We provide a comprehensive SEO service tailored to your specific needs, whether you're looking for professional services, website design, small business web design services, or expert web development consultancy. Our comprehensive SEO process ensures that your website attracts high-quality traffic and ranks well on search engines."}/>
        <CallToAction title={"Our Best Rated Web Service Company,"} title2={"Provide Nothing but The Best"} description={"Web development consultancy, SEO, and web design services (no more plagiarism on your website)."}/>
        <WebdesignDevProcess/>
        <OurRecentRelease title={""}/>
        <WebdesignDevStrategies />
        <Testimonials title={'Appreciation from Clients'}/>


        </Suspense>
    </>
  )
}

export default WebdesignAnd_Development
