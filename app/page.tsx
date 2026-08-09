import React from 'react'
import Navbar from './Navbar/Navbar'
import Homepage from './components/Homepage'
import Footer from './Footer/Footer'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Footer/>
    </div>
  )
}

export default page