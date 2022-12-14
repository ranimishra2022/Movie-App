import React, {useEffect} from 'react';
import MovieListing from '../movielisting/MovieListing';
// import {ApiKey} from '../../common/apis/MovieApiKey';
// import axios from 'axios';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice';
// import { addMovies } from '../../features/movieSlice';
const Home = ()=>{
    const dispatch = useDispatch();
    const movieText = "mission";
    const showText = "friends";
useEffect(()=>{
//     const movieText = "harry";
// const api = async()=>{
    // const response = await axios.get(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${movieText}&type=movie`)
    // .catch((error)=>{console.log(error)});
    // console.log(response);
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));


//  api();
}, [dispatch]);
    return(<>
    <div className="home-container">
   {/* <div></div> */}
   <MovieListing/>
    </div>
    </>)
}
export default Home;