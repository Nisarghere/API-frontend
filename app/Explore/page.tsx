import React from 'react'
import Explore from './Explore'
import Navbar from '../Navbar/Navbar'


const page = () => {
  return (
    <div className='bg-[#FAFAFF] min-h-screen'>
        <Navbar/>
        <Explore />
    </div>
  )
}

export default page