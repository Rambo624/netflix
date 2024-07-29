import React from 'react'
import { useEffect,useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/usenowPlayingMovies'
import Banner from './Banner'
function Browse() {

useNowPlayingMovies()

  return (
    
    <div>
        <Header/>
<Banner/>
    </div>
  )
}

export default Browse