import React, {useState } from 'react';
import "./Header.css";
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';


function Header() {

    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className="header">
           <div className="header__left">
           <MenuIcon/>
           <Link to="/">
           <img className="header__logo"
            src="https://1000logos.net/wp-content/uploads/2017/05/logo-youtube.png"
            alt=""/>
           </Link>
         
            </div> 
            
            <div className="header__input">
            <input
              onChange={(e) => setInputSearch(e.target.value)}  
              value={inputSearch} 
              placeholder="search" 
              type="text"
             />
             <Link to={`/search/${inputSearch}`}>
               <SearchIcon className="header__inputButton"/>
             </Link>
            
            </div>

            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar
             alt=""
             src="https://images.pexels.com/photos/2440799/pexels-photo-2440799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            />
            </div> 

        </div>
    )
}

export default Header;
