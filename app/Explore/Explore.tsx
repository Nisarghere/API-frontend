import React from 'react'
import SearchBar from './SearchBar'
import APicard from './APicard'

const Explore = () => {
  return (
    <div>
        
        <div className='grid grid-cols-[1fr_3fr] min-h-screen'>
          <div className='border border-t-0 border-b-0 border-l-0  h-full'>
            section 1
          </div>
          <div className='border'>
            <SearchBar/>
            <div className='flex'>
              <APicard/>
              <APicard/>
              <APicard/>
            </div>
          </div>
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