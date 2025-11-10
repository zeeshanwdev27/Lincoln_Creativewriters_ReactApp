import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

function Layout() {
  return (
    <>

    <Navbar/>
    <div className='min-h-screen'>
        <Outlet/>
    </div>

    <Footer/>
    </>
  )
}

export default Layout
