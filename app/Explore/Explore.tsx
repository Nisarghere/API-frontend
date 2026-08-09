import React from 'react'
import SearchBar from './SearchBar'
import APicard from './APicard'

const Explore = () => {
  return (
    <div>
        
        <div className='grid grid-cols-[1fr_3fr] min-h-screen border border-[#E4E4E7]'>
          <div className='border border-t-0 border-b-0 border-[#c9c9fa] border-l-0  h-full'>
    <div className='flex flex-col p-6'>
      <h2 className='text-sm font-bold text-[#71717A]'>Categories</h2>
    </div>
            <div className=' border border-[#E4E4E7] ml-2 mr-2 shrink ' />

            <div className='h-full p-6  mt-5  justify-start text-left'>

            <ul className='text-left  flex flex-col  '>
              <li className='text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2'>Cybersecurity</li>
              <li className='text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2'>Finance</li>
              <li className='text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2'>Weather</li>
              <li className='text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2'>Translator</li>
              <li className='text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2'>Movies</li>
              <li className='text-sm font-semibold hover:bg-[#e9fae9] cursor-pointer hover:-translate-y-0.5 transition duration-300 py-3 px-2'>Cryptography</li>
            </ul>
            </div>
          </div>
          {/* <div className='border'>
            <SearchBar/>
            <div className='flex'>
              <APicard/>
              <APicard/>
              <APicard/>
            </div> */}
          {/* </div> */}
        </div>
    </div>
  )
}

export default Explore
{/* <div className='min-h-screen border border-[#E4E4E7] m-10 rounded-xl mt-10'>
 <div className='flex justify-between p-10 items-center'>
     <h2>APIs: 25</h2>
     <h3>│  Popular: Weather  Payments  Maps  AI  Finance         │
</h3>
     <button>Category</button>
 </div>
 <div className='flex justify-center '>
     <div className='grid grid-cols-4 gap-4'>

     <APicard/>
     <APicard/>
     <APicard/>
     <APicard/>
     </div>
 </div>
</div> */}