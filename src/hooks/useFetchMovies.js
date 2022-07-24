import { useState } from "react";

export const useFetchMovies=({url})=>{
    const token="SU8Uv-Z_aBqcvQKPYB4x";
    const [movies ,setMovies ] = useState([]);
    const [loading, setLoading] = useState(true);
    const req=()=>{
        setLoading(true);
        fetch(`http://tecnoplex.net:32400${url}?X-Plex-Token=${token}`,{
            headers:{
                accept: 'application/json'
            }
        })
        .then(data=>data.json())
        .then(data=>{
            const movies=data.MediaContainer.Metadata;
            const setData=movies.map(movie=>{
                movie.thumb=`http://tecnoplex.net:32400${movie.thumb}?X-Plex-Token=${token}`
                movie.art = movie.art? `http://tecnoplex.net:32400${movie.art}?X-Plex-Token=${token}`:null
                return movie
            })
            setMovies(setData);
        })
        .catch(error=>{
            setMovies([]);
        })
        .finally(()=>{
            setLoading(false);
        })
    }
   return [req,movies,loading]
}
