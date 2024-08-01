import { useDispatch } from "react-redux"
import { addUpcomingMovies } from "../Utils/movieSlice"
import { options } from "../Utils/url"
import { useEffect } from "react"
import { useSelector } from "react-redux"
const useUpcomingMovies=()=>{
    const dispatch=useDispatch()
    const UpcomingMovies=useSelector((store)=>store.movies.UpcomingMovies)
    async function movies(){
      const data= await fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',options)
      const json= await data.json()
     // console.log(json.results)//
    
      dispatch(addUpcomingMovies(json.results))
    }
    
    
    
      useEffect(()=>{
   if(!UpcomingMovies) movies()
      },[])
}


export default useUpcomingMovies
