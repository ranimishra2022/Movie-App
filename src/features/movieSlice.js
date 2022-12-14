import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {ApiKey} from '../common/apis/MovieApiKey';


export const fetchAsyncMovies = createAsyncThunk(
    'movies/fetchAsyncMovies',
    async(term)=>{
        // const movieText = "harry";
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${term}&type=movie`);
        return response.data;
    }
);
export const fetchAsyncShows = createAsyncThunk(
    'movies/fetchAsyncShows',
    async(term)=>{
        // const seriesText = "friends";
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${ApiKey}&s=${term}&type=series`);
        return response.data;
    }
);

export const fetchAsyncMoiesOrShowsDetails = createAsyncThunk(
    'movies/fetchAsyncMoviesOrShowsDetails',
     async (id)=>{
        const response = await axios.get(`http://www.omdbapi.com/?apikey=${ApiKey}&i=${id}&Plot=full`);
        return response.data;
    }
)

const initialState = {
    movies: {},
    shows: {},
    selectedMoviesOrShows:{}
}
const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        addMovies : (state, {payload})=>{
            state.movies = payload;
        },
        removedSelectedMoviesorShows:(state)=>{
            state.selectedMoviesOrShows={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]: ()=>{console.log("pending")},
        [fetchAsyncMovies.fulfilled]:(state, {payload})=>{
            console.log("fulfilled")
return {...state,movies:payload}
        },
        [fetchAsyncMovies.rejected]:()=>{console.log("rejected")},
        [fetchAsyncShows.fulfilled]:(state, {payload})=>{
            console.log("fulfilled")
return {...state,shows:payload}
        },
[fetchAsyncMoiesOrShowsDetails.fulfilled]:(state, {payload})=>{
    return {...state, selectedMoviesOrShows:payload}
}
    }

})
export const {removedSelectedMoviesorShows} = movieSlice.actions;
export const getAllMovies = (state)=>state.movies.movies;
export const getAllShows = (state)=>state.movies.shows;
export const getAllMoviesOrShows = (state)=> state.movies.selectedMoviesOrShows;

export default movieSlice.reducer;