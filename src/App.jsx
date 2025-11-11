import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const MainHome = React.lazy(()=> import('./pages/Home/MainHome.jsx'))
const Article = React.lazy(()=> import('./pages/ArticlesAndBlogs/Article/Article.jsx'))



const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainHome />} />
        <Route path="/article-writing" element={<Article />} />
      </Route>
    </>
  )
)

export default App