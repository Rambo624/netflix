import { useDispatch } from "react-redux"
import { addPopularMovies } from "../Utils/movieSlice"
import { options } from "../Utils/url"
import { useEffect } from "react"
const usePopularMovies=()=>{
    const dispatch=useDispatch()

    async function movies(){
      const data= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',options)
      const json= await data.json()
     // console.log(json.results)//
    
      dispatch(addPopularMovies(json.results))
    }
    
    
    
      useEffect(()=>{
    movies()
      },[])
}


export default usePopularMovies
