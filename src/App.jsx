import React from "react"
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom"
import Layout from "./Layout/Layout.jsx"

const MainHome = React.lazy(()=> import('./pages/Home/MainHome.jsx'))



const App = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainHome />} />
      </Route>
    </>
  )
)

export default App