import React from 'react'
import Header from './Common/Header'
import { Outlet } from 'react-router'
import Footer from './Common/Footer'

export default function RootLayout() {
  return (
    <>

      <Header/>

      <Outlet/>

      <Footer/>
      
    </>
  )
}
