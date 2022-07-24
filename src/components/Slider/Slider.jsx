import React, { useEffect, useRef, useState } from 'react'
import { useFetchMovies } from '../../hooks/useFetchMovies';
import { MovieCard } from '../Movie/MovieCard';
import "./slider.scss"
export const Slider = () => {
const [getMovies,movies,loading] = useFetchMovies({url:"/library/recentlyAdded"})
const token="SU8Uv-Z_aBqcvQKPYB4x";
const slide =useRef("")

useEffect(()=>{
    getMovies()
},[])

const next=()=>{
  slide.current.scrollLeft+=350;
}

const prev=()=>{
  slide.current.scrollLeft-=350;

}
  return (
    // <!-- Scrollable -->
    <div className="slide-container container">

     
        <div className="slide" ref={slide}>
        <div className="control prev" onClick={prev}><i class="fa-solid fa-arrow-left"></i></div>
            {movies.map(movie=>{
              return (
               <MovieCard movie={movie} token={token}/>
              )
            })}
           
        <div className="control next" onClick={next}><i class="fa-solid fa-arrow-right"></i></div>

        </div>
    </div>
  )
}
