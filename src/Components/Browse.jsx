import React from 'react'
import usePopularMovies from '../hooks/usePopularMovies'
import Header from './Header'
import useNowPlayingMovies from '../hooks/usenowPlayingMovies'
import Banner from './Banner'
import Cards from './Cards'
import { useSelector } from 'react-redux'
import { toggleGptSearch } from '../Utils/GptSlice'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpcomingMovies from '../hooks/useUpcomingMovies'
import Gpt from './Gpt'
function Browse() {
const gpt=useSelector((Store)=>Store.gpt.showGptSearch)

useNowPlayingMovies()
usePopularMovies()
useTopRatedMovies()
useUpcomingMovies()
  return (
    
    <div>
        <Header/>
{gpt? <Gpt/>:<>
  <Banner/>
  <Cards/>
</>}
       

    </div>
  )
}

export default Browse