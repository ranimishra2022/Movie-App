import React from 'react';
import './Style.css';
import { Routes, Route} from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import MovieDetails from './components/moviedetails/MovieDetails';
import PageNotFound from './components/pagenotfound/PageoNotFound';
// import Moviecard from './components/moviecard/Moviecard';
// import MovieListing from './components/movielisting/MovieListing'

function App() {
  return (
   <>
 
  <Header/>
  <div className="container">
  <Routes>
   <Route exact path="/" element={<Home/>}/>
 <Route path="/movie/:imdbID" element={<MovieDetails/>}/>
 {/* <Route path="/moviecard" element = {<Moviecard/>}/> */}
 {/* <Route path="/movielisting"  element={<MovieListing/>}/> */}
 <Route element={<PageNotFound/>}/>
</Routes>
</div>
  <Footer/>
  
  
   </>
  );
}

export default App;
