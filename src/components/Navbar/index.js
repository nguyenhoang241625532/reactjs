import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

/**
* @author
* @function Navbar
**/

const Navbar = (props) => {

    const [search, setSearch] = useState(false);


    const submitSearch = (e) => {
        e.preventDefault();
        alert('Searhed');

    }


    const openSearch = () => {
        setSearch(true);
    }


    const searchClass = search ? 'searchInput active' : 'searchInput';

  return(
    <div className="navbar">
    

    <img src= { require('../../img/instagram_profile_image.png')} height="150px" width="150px" ></img>
        <ul className="navbarMenu">
            <li><NavLink to="/">Trang Chủ</NavLink></li>
            <li><NavLink to="/about-us">Giới Thiệu</NavLink></li>
            <li><NavLink to="/post">Bài Viết</NavLink></li>
            <li><NavLink to="/new">Tin Tức</NavLink></li>
            <li><NavLink to="/contact-us">Liên Hệ</NavLink></li>
        </ul>



        <div className="search">
            <form onSubmit={submitSearch}>
                <input type="text" className={searchClass} placeholder="Search" />
                <img onClick={openSearch} className="searchIcon" src={require('../../assets/icons/search.png')} alt="Search" />
            </form>
            
        </div>
    </div>
   )

 }

export default Navbar