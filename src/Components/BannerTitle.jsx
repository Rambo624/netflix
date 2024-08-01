import React from 'react'

function BannerTitle(props) {
    const{title,overview}=props
  return (
    <div className="pt-[24%] w-screen h-[110%] absolute text-white pl-14 md:bg-gradient-to-r md:from-black">
        <h1 className='font-bold text-red-700 text-2xl md:text-6xl mb-2'>{title}</h1>
        <h2 className='hidden md:inline-block text-xl w-[30%]' >{overview}</h2>
        <div className='mt-4'>
          <button className='bg-white p-1 text-black md:p-3 font-bold rounded-lg md:px-7 md:mr-3'>▶ Play</button>
          <button className=' hidden md:inline-block bg-gray-500 text-white p-3 font-bold rounded-lg px-7'>More Info</button>
        </div>
    </div>
  )
}

export default BannerTitle