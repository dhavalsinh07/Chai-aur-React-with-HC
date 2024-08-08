import React from 'react'
import Header from './Componemts/Header/Header'
import Footer from './Componemts/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet />
    <Footer />


    </>
  )
}

export default Layout