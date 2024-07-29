import { useDispatch } from "react-redux"
import { addnowPlayingMovies } from "../Utils/movieSlice"
import { options } from "../Utils/url"
import { useEffect } from "react"
const useNowPlayingMovies=()=>{

    const dispatch=useDispatch()

    async function movies(){
      const data= await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1`,options)
      const json= await data.json()
      console.log(json.results)
    
      dispatch(addnowPlayingMovies(json.results))
    }
    
    
    
      useEffect(()=>{
    movies()
      },[])
}


export default useNowPlayingMovies
