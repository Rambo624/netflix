import { useState,useEffect } from "react"
import { options } from "../Utils/url"




const useMovieTrailer=(id)=>{
    const [movieTrailer, setMovieTrailer] = useState(null)
    async function trailerFetch() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
        const json = await data.json()
       
        const trailer = json.results.filter((obj) => {
            return obj.type == "Trailer"
        })
        trailer.length? setMovieTrailer(trailer):setMovieTrailer(json.results)
      
    }




    useEffect(() => {
        trailerFetch()
    }, [])
return movieTrailer
}

export default useMovieTrailer