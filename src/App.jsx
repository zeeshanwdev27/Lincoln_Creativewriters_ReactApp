import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const MainHome = React.lazy(()=> import('./pages/Home/MainHome.jsx'))
const Article = React.lazy(()=> import('./pages/ArticlesAndBlogs/Article/Article.jsx'))
const BlogWriting = React.lazy(()=> import('./pages/ArticlesAndBlogs/Blogs/BlogWriting.jsx'))
const MicroBlogPosts = React.lazy(()=> import('./pages/ArticlesAndBlogs/MicroBlogPosts/MicroBlogPosts.jsx'))
const NewsJacking = React.lazy(()=> import('./pages/ArticlesAndBlogs/NewsJacking/NewsJacking.jsx'))
const PowerBlogPosts = React.lazy(()=> import('./pages/ArticlesAndBlogs/PowerBlogPosts/PowerBlogPosts.jsx'))
const MagazineArticles = React.lazy(()=> import('./pages/ArticlesAndBlogs/MagazineArticles/MagazineArticles.jsx'))
const ListicleWriting = React.lazy(()=> import('./pages/ArticlesAndBlogs/ListicleWriting/ListicleWriting.jsx'))

const EBOOK = React.lazy(()=> import('./pages/Books/EBOOK/EBOOK.jsx'))



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
      </Route>
    </>
  )
)

export default App