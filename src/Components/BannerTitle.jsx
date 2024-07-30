import React from 'react'

function BannerTitle(props) {
    const{title,overview}=props
  return (
    <div className="pt-[24%] w-screen h-[110%] absolute text-white pl-14 bg-gradient-to-r from-black">
        <h1 className='font-bold  text-6xl'>{title}</h1>
        <h2 className='text-xl w-[30%]' >{overview}</h2>
    </div>
  )
}

export default BannerTitle