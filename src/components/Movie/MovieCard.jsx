import React from 'react'
import { Link } from 'react-router-dom';
import "./Movie.scss"
export const MovieCard = ({ movie, token }) => {
  const random =Math.floor(Math.random() * (9 - 5 + 1)) + 5;
  const random2 =Math.floor(Math.random() * (9 - 0 + 1)) + 0;
  const rating = random+"."+random2;
  const quality=[
    "FullHD",
    "1080p",
    "720p",
    "4K"
  ]
  const genres=[
    ["Accion","Aventure","Suspense"],
    ["Horror","Drama"],
    ["Comedy","Fantasy","Adventure"],
    ["Supernatural","Jungle","Hairpin"],
    ["Western","Fantasy","Adventure"]
  ]
  const qualityRandom = Math.floor(Math.random() * quality.length);
  const genresRandom = Math.floor(Math.random() * genres.length);
  return (
    <div className='movie-card'>
      <img src={movie.thumb} />
      <div className='movie-info'>
        <p><span>{quality[qualityRandom]}</span></p>
        <div className="movie-data">
          <p className="data">{movie.type == "season" ? "Serie " : "Movie "}{movie.Year || movie.parentYear}</p>
          <h3 className="data">{movie.type == "season" ? movie.parentTitle : movie.title}</h3>
        <div className="genre-rating">
          <p className="genre">{
            genres[genresRandom].join(", ")
          }</p>
          <div className="rating">
            <i class="fa-brands fa-imdb"></i>
            {random}.{random2}
          </div>
        </div>
        </div>
      </div>
      <div className='image-play'>
        <Link to={`/movie/${movie.ratingKey}`} state={
          {
            ...movie,
            rating,
            genre:genres[genresRandom],
            quality:quality[qualityRandom]
          }
          } className="btn btn-play"><p><i class="fa-solid fa-play"></i></p></Link>
        <small>PLAY: {movie.type == "season" ? movie.parentTitle : movie.title}</small>
        <p className="summary">
          {movie.summary || movie.parentSummary}
        </p>
      </div>
    </div>
  )
}
