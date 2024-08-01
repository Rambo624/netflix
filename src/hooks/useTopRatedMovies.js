import { useDispatch } from "react-redux"
import { addTopRatedMovies } from "../Utils/movieSlice"
import { options } from "../Utils/url"
import { useEffect } from "react"
import { useSelector } from "react-redux"
const useTopRatedMovies=()=>{
    const dispatch=useDispatch()
    const topRatedMovies=useSelector((store)=>store.movies.topRatedMovies)
    async function movies(){
      const data= await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',options)
      const json= await data.json()
     // console.log(json.results)//
    
      dispatch(addTopRatedMovies(json.results))
    }
    
    
    
      useEffect(()=>{
   if(!topRatedMovies) movies()
      },[])
}


export default useTopRatedMovies
