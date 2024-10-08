import { useDispatch } from "react-redux"
import { addPopularMovies } from "../Utils/movieSlice"
import { options } from "../Utils/url"
import { useEffect } from "react"
import { useSelector } from "react-redux"
const usePopularMovies=()=>{
    const dispatch=useDispatch()
    const popularMovies=useSelector((store)=>store.movies.popularMovies)
    async function movies(){
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
      const json= await data.json()
     // console.log(json.results)//
    
      dispatch(addPopularMovies(json.results))
    }
    
    
    
      useEffect(()=>{
   if(!popularMovies) movies()
      },[])
}


export default usePopularMovies
