import React from 'react';
import Slider from 'react-slick';
import { settings } from '../../common/settings';
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows } from '../../features/movieSlice';
import Moviecard from '../moviecard/Moviecard';
import './MovieListing.css';
const MovieListing = ()=>{
    
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    let rendermovies = "";
    let rendershows = "";
    rendermovies = movies.Response==="True"?(
        movies.Search.map((movie, index)=>{
    return  <Moviecard key={index} data={movie}/>
        })
    ):(<div className="movie-error"><h3>{movies.Error}</h3></div>)

    rendershows = shows.Response==="True"?(
        shows.Search.map((shows, index)=>{
    return  <Moviecard key={index} data={shows}/>
        })
    ):(<div className="movie-error"><h3>{shows.Error}</h3></div>)
    
    return(<>
    <div className="movie-wrapper">
    <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
            <Slider {...settings}>{rendermovies}</Slider>
            </div>
        </div>
       

        <div className="shows-list">
        <h2>Shows</h2>
        <div className="movie-container">
            <Slider {...settings}>{rendershows}</Slider>
            </div>
        </div>
    </div>
    </>)
}
export default MovieListing;