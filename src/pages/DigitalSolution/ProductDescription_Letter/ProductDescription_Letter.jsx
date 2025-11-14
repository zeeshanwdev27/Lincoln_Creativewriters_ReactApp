import React, { Suspense } from 'react';

const MBHeroSection = React.lazy(()=> import('../../ArticlesAndBlogs/MicroBlogPosts/MBHeroSection.jsx'))

const WhatsTheNeed = React.lazy(()=> import('../../Books/EBOOK/WhatsTheNeed.jsx'))
const OurRecentRelease  = React.lazy(()=> import('../../Books/EBOOK/OurRecentRelease.jsx'))

const CallToAction  = React.lazy(()=> import('../../Home/CallToAction.jsx'))
const Testimonials  = React.lazy(()=> import('../../Home/Testimonials.jsx'))

const ProductDescriptionProcess  = React.lazy(()=> import('./ProductDescriptionProcess.jsx'))
const ProductDescriptionStrategies  = React.lazy(()=> import('./ProductDescriptionStrategies.jsx'))
const ProductDescriptionFAQs  = React.lazy(()=> import('./ProductDescriptionFAQs.jsx'))





function ProductDescription_Letter() {
  return (
    <>
        <Suspense fallback={ <div className="flex items-center justify-center mt-80"> <div className="w-12 h-12 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin"></div></div>}>
        
        <MBHeroSection title1={"Expressive"} title2={""} title3={"Product"} title4={"Description Services"} description={"Our Product Description Writers Are Your Answer to Boosting Your Online Store."}/>
        <WhatsTheNeed title1={"Boost eCommerce with Unique"} title2={"Product Description"} title3={"Writing Services."} description={"Did you know that the number of grant proposals you send boosts your chances of funding your project? Recent data revealed that applicants who sent proposals to multiple private and federal foundations had a higher acceptance rate (almost double). Although most grant proposal acceptance is based on the foundation and project mission and vision alignment, the fact remains that the more tailored grants you send, the better your chances of grant acceptance. Tailoring each grant to their respective organization can be quite trivial. It’s the reason why you should consider professional grant writing services."}/>
        <CallToAction title={"Turn Online Store Visitors into"} title2={"Customers with Product Description Services"} description={"At Our dedicated grant writing company, we write compelling letters of intent that cover each point of your project. Our best yet affordable grant writing services include every aspect of the grant proposal."}/>
        <ProductDescriptionProcess/>
        <OurRecentRelease title={"Product Description"}/>
        <ProductDescriptionStrategies/>
        <ProductDescriptionFAQs/>
        <Testimonials title={'Appreciation from Clients'}/>



        </Suspense>
    </>
  )
}

export default ProductDescription_Letter
