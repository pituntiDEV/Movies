import React, { useEffect, useState } from 'react'
import { useFetchMovies } from '../../hooks/useFetchMovies'
import { MovieCard } from '../Movie/MovieCard'
import "./LastesMovies.scss";
export const LastesMovies = () => {
    const [getMovies,movies ,loading ] = useFetchMovies({url:"/library/onDeck"})
    useEffect(()=>{
        getMovies();
    },[])
  return (
    <div className='lastes-movies container'>
        <h2>Lastes Movies</h2>
        <div className='movies'>
            {
                movies.map(movie=>{
                    return <MovieCard movie={movie}/>
                })
            }
        </div>
    </div>
  )
}
