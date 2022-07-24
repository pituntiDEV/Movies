import React, { useState } from 'react'
import {useLocation, useParams } from 'react-router-dom';
import { Dowload } from '../Dowload/Dowload';
import { ScreeShot } from '../ScreenShot/ScreeShot';
import './MovieView.scss'
export const MovieView = () => {
    const [showPlayer ,setShowPlayer] = useState(false);
 const {id} =useParams();
 const location = useLocation();
 const movie =  location.state;

  return (
    <>
        {showPlayer && <div className='video-player'>
           <div className='video'>
            <div className="bnt-close" onClick={()=>setShowPlayer(false)}>
                X
            </div>
            <video src="/assets/Movie.mp4" controls/>
           </div>
        </div>}
    <div className='movie-container container'>
        <div className='hero'  style={{
            background:`url(${movie.art || movie.thumb} )`,
            opacity: "0.3"
        }}></div>



          <div className='movie-info '>

            <div className='data'>
            <h2>{movie.type=="season" ? `${movie.parentTitle} - ${movie.title}`:movie.title} </h2>
               <div className="data-info">
               <p><span className="quality"> {movie.quality}</span></p>
                {/* {movie.summary || movie.parentSummary} */}
                <span>{movie.rating} <i class="fa-brands fa-imdb"></i></span>
                <span>{movie.year || movie.parentYear}</span>
                <span>87 min.</span>
               </div>
            <p><span className="lang">English</span></p>
            </div>
            <div className='bottom-content'>
               <p className='genre'>
                  <span>Category:</span>
                  <span>{movie.genre.join(",")}</span>
               </p>
               <div className="trailer">
                WATCH TRAILER
               </div>
            </div>
       
        </div>

        <div className="btn-play" onClick={()=>setShowPlayer(true)}>
        <i class="fa-solid fa-circle-play"></i>
        </div>

    </div>
        <div className="summary">
            <h3 className="title">
                {movie.type=="season" ? `${movie.parentTitle} - ${movie.title}`:movie.title}:
            </h3>
            <p>
                {movie.summary || movie.parentSummary}
            </p>
        </div>
         <ScreeShot/>
         <Dowload/>
        </>
  ) 
}
