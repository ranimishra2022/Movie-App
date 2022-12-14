import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import usericon from '../../images/usericon.png';
import './Header.css'
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movieSlice';

const Header = ()=>{
    const [term, setterm] = useState("");
    const dispatch = useDispatch();
    const submitHandler = (event)=>{
        event.preventDefault();
        if(term==="") {return alert("Please enter Movie or Show name")}
        dispatch(fetchAsyncMovies(term));
        dispatch(fetchAsyncShows(term));
        setterm("");
    }
    const changeHandler= (event)=>{
        setterm(event.target.value);

    }
    return(<>
    <div className="header">
        <div className="logo"><Link to="/">MovieApp</Link></div>
        <div className="search-bar">
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Search Movies or Shows" value={term} onChange={changeHandler}/>
                <button type="submit"><SearchIcon/></button>
            </form>
        </div>
        <div className="img"><img src={usericon} alt="img"/></div>
    </div>
    </>)
}
export default Header;