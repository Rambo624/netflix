import React, { useEffect, useState } from 'react'

import useMovieTrailer from '../hooks/useMovieTrailer'

function BannerVideo(props) {

 const trailer=  useMovieTrailer(props.id)
 
    
if(!trailer) return <h1>Loading....</h1>

    
     return (
        <div >
          
     <iframe className='w-screen aspect-video'    src={`https://www.youtube.com/embed/${trailer[0].key}?autoplay=1&mute=1&rel=0&showinfo=0&si=fceonrU052Wp8tvE`}  allow='autoplay' allowFullScreen  title="YouTube video player" frameBorder="0"  ></iframe>
        </div>
      )
}

export default BannerVideo