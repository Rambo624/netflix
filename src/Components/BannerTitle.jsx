import React from 'react'

function BannerTitle(props) {
    const{title,overview}=props
  return (
    <div className="pt-[24%] w-screen h-[110%] absolute text-white pl-14 bg-gradient-to-r from-black">
        <h1 className='font-bold text-red-700  text-6xl mb-2'>{title}</h1>
        <h2 className='text-xl w-[30%]' >{overview}</h2>
        <div className='mt-4'>
          <button className='bg-white text-black p-3 font-bold rounded-lg px-7 mr-3'>▶ Play</button>
          <button className='bg-gray-500 text-white p-3 font-bold rounded-lg px-7'>More Info</button>
        </div>
    </div>
  )
}

export default BannerTitle