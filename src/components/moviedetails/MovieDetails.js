import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMoiesOrShowsDetails, getAllMoviesOrShows, removedSelectedMoviesorShows } from '../../features/movieSlice';
import StarIcon from '@mui/icons-material/Star';
import RecommendIcon from '@mui/icons-material/Recommend';
import MovieIcon from '@mui/icons-material/Movie';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import './MovieDetails.css';

const MovieDetails = ()=>{
    const {imdbID} = useParams();
    const dispatch = useDispatch();
    const data = useSelector(getAllMoviesOrShows);
    useEffect(()=>{dispatch(fetchAsyncMoiesOrShowsDetails(imdbID))
    return ()=>{dispatch(removedSelectedMoviesorShows())}
    },[dispatch, imdbID]);
return(<>
  <div className="movie-section">
    {Object.keys(data)===0?(<div>...Loading</div>):(<>
    <div className="section-left">
<div className="movie-title">{data.Title}</div>
<div className="movie-rating">
    <span>Imdb rating <StarIcon/>:{data.imdbRating}</span>
    <span>Imdb votes <RecommendIcon/>:{data.imdbVotes}</span>
    <span>Runtime <MovieIcon/>:{data.Runtime}</span>
    <span>Year <CalendarMonthIcon/>:{data.Year}</span>
</div>
<div className="movie-plot">{data.Plot}</div>
<div className="movie-info">
    <div> <span>Director</span><span>{data.Director}</span> </div>
    <div> <span>Star</span><span>{data.Actor}</span> </div>
    <div> <span>Generes</span><span>{data.Genre}</span> </div>
    <div> <span>Languages</span><span>{data.Language}</span> </div>
    <div> <span>Awards</span><span>{data.Awards}</span> </div>
</div>
    </div>
    <div className="section-right">
        <img src={data.Poster} alt={data.Title}/>
    </div>
    </>)}
  </div>
</>)
}
export default MovieDetails;