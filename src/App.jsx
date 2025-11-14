import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const MainHome = React.lazy(()=> import('./pages/Home/MainHome.jsx'))

// Article Pages
const Article = React.lazy(()=> import('./pages/ArticlesAndBlogs/Article/Article.jsx'))
const BlogWriting = React.lazy(()=> import('./pages/ArticlesAndBlogs/Blogs/BlogWriting.jsx'))
const MicroBlogPosts = React.lazy(()=> import('./pages/ArticlesAndBlogs/MicroBlogPosts/MicroBlogPosts.jsx'))
const NewsJacking = React.lazy(()=> import('./pages/ArticlesAndBlogs/NewsJacking/NewsJacking.jsx'))
const PowerBlogPosts = React.lazy(()=> import('./pages/ArticlesAndBlogs/PowerBlogPosts/PowerBlogPosts.jsx'))
const MagazineArticles = React.lazy(()=> import('./pages/ArticlesAndBlogs/MagazineArticles/MagazineArticles.jsx'))
const ListicleWriting = React.lazy(()=> import('./pages/ArticlesAndBlogs/ListicleWriting/ListicleWriting.jsx'))

// Books Pages
const EBOOK = React.lazy(()=> import('./pages/Books/EBOOK/EBOOK.jsx'))
const AUTOBIOGRAPHY_WRITING = React.lazy(()=> import('./pages/Books/AUTOBIOGRAPHY_WRITING/AUTOBIOGRAPHY_WRITING.jsx'))
const FICTION_BOOKS = React.lazy(()=> import('./pages/Books/FICTION_BOOKS/FICTION_BOOKS.jsx'))
const AUDIO_BOOKS = React.lazy(()=> import('./pages/Books/AUDIO_BOOKS/AUDIO_BOOKS.jsx'))

// Business Writing
const Newsletter_Writing = React.lazy(()=> import('./pages/BusinessWriting/Newsletter_Writing/Newsletter_Writing.jsx'))
const Whitepaper_Writing = React.lazy(()=> import('./pages/BusinessWriting/Whitepaper_Writing/Whitepaper_Writing.jsx'))
const BusinessProposal = React.lazy(()=> import('./pages/BusinessWriting/BusinessProposal/BusinessProposal.jsx'))
const BusinessPlan = React.lazy(()=> import('./pages/BusinessWriting/BusinessPlan/BusinessPlan.jsx'))
const GrantWriting = React.lazy(()=> import('./pages/BusinessWriting/GrantWriting/GrantWriting.jsx'))
const EmailWriting = React.lazy(()=> import('./pages/BusinessWriting/EmailWriting/EmailWriting.jsx'))
const PitchDeck = React.lazy(()=> import('./pages/BusinessWriting/PitchDeck/PitchDeck.jsx'))
const PressReleaseWriting = React.lazy(()=> import('./pages/BusinessWriting/PressReleaseWriting/PressReleaseWriting.jsx'))
const PresentationsWriting = React.lazy(()=> import('./pages/BusinessWriting/PresentationsWriting/PresentationsWriting.jsx'))
const CustomLetter = React.lazy(()=> import('./pages/BusinessWriting/CustomLetter/CustomLetter.jsx'))

// Editing&Reading
const EditingReading = React.lazy(()=> import('./pages/EditingService/EditingReading/EditingReading.jsx'))
const Rewriting = React.lazy(()=> import('./pages/EditingService/Rewriting/Rewriting.jsx'))

// PersonalWriting
const Transcription_Service = React.lazy(()=> import('./pages/PersonalWriting/Transcription_Service/Transcription_Service.jsx'))
const VideoScript_Writing = React.lazy(()=> import('./pages/PersonalWriting/VideoScriptWriting/VideoScript_Writing.jsx'))
const Bio_Writing = React.lazy(()=> import('./pages/PersonalWriting/Bio_Writing/Bio_Writing.jsx'))
const Resume_Writing = React.lazy(()=> import('./pages/PersonalWriting/Resume_Writing/Resume_Writing.jsx'))
const Wikipedia_Writing = React.lazy(()=> import('./pages/PersonalWriting/Wikipedia_Writing/Wikipedia_Writing.jsx'))
const Compliant_Writing = React.lazy(()=> import('./pages/PersonalWriting/Compliant_Writing/Compliant_Writing.jsx'))
const Recommendation_Letter = React.lazy(()=> import('./pages/PersonalWriting/Recommendation_Letter/Recommendation_Letter.jsx'))    // *

// DigitalSolution
const GuestPost_Service = React.lazy(()=> import('./pages/DigitalSolution/GuestPost_Service/GuestPost_Service.jsx'))
const LandingPage_Writing = React.lazy(()=> import('./pages/DigitalSolution/LandingPage_Writing/LandingPage_Writing.jsx'))
const ProductDescription_Letter = React.lazy(()=> import('./pages/DigitalSolution/ProductDescription_Letter/ProductDescription_Letter.jsx'))
const Webcontent_Writing = React.lazy(()=> import('./pages/DigitalSolution/Webcontent_Writing/Webcontent_Writing.jsx'))
const WebdesignAnd_Development = React.lazy(()=> import('./pages/DigitalSolution/WebdesignAnd_Development/WebdesignAnd_Development.jsx'))

// Design
const VideosMain = React.lazy(()=> import('./pages/Design/Videos/VideosMain.jsx'))
const Logo_Design = React.lazy(()=> import('./pages/Design/Logo_Design/Logo_Design.jsx'))
const Business_Card = React.lazy(()=> import('./pages/Design/Business_Card/Business_Card.jsx'))
const Infographic_Main = React.lazy(()=> import('./pages/Design/Infographic/Infographic_Main.jsx'))
const Flyer_Main = React.lazy(()=> import('./pages/Design/Flyer/Flyer_Main.jsx'))
const Website_Redesign = React.lazy(()=> import('./pages/Design/Website_Redesign/Website_Redesign.jsx'))
const Letter_Head = React.lazy(()=> import('./pages/Design/Letter_Head/Letter_Head.jsx'))
const Ebook_Cover = React.lazy(()=> import('./pages/Design/Ebook_Cover/Ebook_Cover.jsx'))


const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>

        <Route index element={<MainHome />} />
        <Route path="/article-writing" element={<Article />} />
        <Route path="/blogs-writing" element={<BlogWriting />} />
        <Route path="/microblog-posts" element={<MicroBlogPosts />} />
        <Route path="/newsjacking-posts" element={<NewsJacking />} />
        <Route path="/power-blog-posts" element={<PowerBlogPosts />} />
        <Route path="/magazine-articles" element={<MagazineArticles />} />
        <Route path="/listicles" element={<ListicleWriting />} />
        <Route path="/ebook-writing-services" element={<EBOOK />} />
        <Route path="/autobiography-writing-services" element={<AUTOBIOGRAPHY_WRITING />} />
        <Route path="/fiction-books" element={<FICTION_BOOKS />} />
        <Route path="/audio-book-services" element={<AUDIO_BOOKS />} />
        <Route path="/newsletter-writing" element={<Newsletter_Writing />} />
        <Route path="/whitepaper-writing-service" element={<Whitepaper_Writing />} />
        <Route path="/business-proposal" element={<BusinessProposal />} />
        <Route path="/business-plan-writing-services" element={<BusinessPlan />} />
        <Route path="/grant-writing-services" element={<GrantWriting />} />
        <Route path="/email-writing" element={<EmailWriting />} />
        <Route path="/pitch-deck-design-services" element={<PitchDeck />} />
        <Route path="/press-release-writing-service" element={<PressReleaseWriting />} />
        <Route path="/presentations-writing" element={<PresentationsWriting />} />
        <Route path="/customer-letters" element={<CustomLetter />} />
        <Route path="/editing-and-proofreading-services" element={<EditingReading />} />
        <Route path="/rewriting" element={<Rewriting />} />

        <Route path="/transcription-service" element={<Transcription_Service />} />
        <Route path="/video-script-writing-services" element={<VideoScript_Writing />} />
        <Route path="/bio-writing" element={<Bio_Writing />} />
        <Route path="/resume-writing-services" element={<Resume_Writing />} />
        <Route path="/wikipedia-writing" element={<Wikipedia_Writing />} />
        <Route path="/complaint-letters" element={<Compliant_Writing />} />
        <Route path="/recommendation-letters" element={<Recommendation_Letter />} />


        <Route path="/guest-post-service" element={<GuestPost_Service />} />
        <Route path="/landing-page-writing-service" element={<LandingPage_Writing />} />
        <Route path="/product-description-writing-services" element={<ProductDescription_Letter />} />
        <Route path="/web-content-writing" element={<Webcontent_Writing />} />
        <Route path="/website-design-and-development-services" element={<WebdesignAnd_Development />} />


        <Route path="/videos" element={<VideosMain />} />
        <Route path="/logo-design" element={<Logo_Design />} />
        <Route path="/business-card" element={<Business_Card />} />
        <Route path="/infographic" element={<Infographic_Main />} />
        <Route path="/flyer" element={<Flyer_Main />} />
        <Route path="/website-redesign" element={<Website_Redesign />} />
        <Route path="/letter-head" element={<Letter_Head />} />
        <Route path="/ebook-cover" element={<Ebook_Cover />} />

      </Route>
    </>
  )
)

export default App