import React, { useState } from 'react';
import "./Header.css";
import MenuIcon from '@mui/icons-material/Menu';
import pic from "./img/pic1.png";
import SearchIcon from "@mui/icons-material/Search"
import VideoCallIcon from "@mui/icons-material/VideoCall"
import AppsIcon from '@mui/icons-material/Apps';
import NotificationIcons from '@mui/icons-material/Notifications';
import  Avatar from '@mui/material/Avatar';
import img2 from "./img/shruti-img.jpg";
import {Link} from "react-router-dom";

function Header() {
  const[inputSearch,setInputSearch]=useState("")
  return (
    <div className='header'>
     <div className='header_left'>
        <MenuIcon/>
     <Link to={"/"}>
        <img className='header_logo' src= {pic} alt="youtube"/>
      </Link>
      
      </div>

      <div className='header_input'>
      <input onChange={e=>setInputSearch(e.target.value)}  value={inputSearch} type='text' placeholder='Search'/>
      
      <Link to={`/search/${inputSearch}`}>
      <SearchIcon className='header_inputButton' />
      </Link>
      </div>

      <div className='header_icons'>
      <VideoCallIcon className='header_icon'/>
      <AppsIcon className='header_icon'/>
      <NotificationIcons className='header_icon'/>
      <Avatar src= {img2} alt="shruti"/>
      </div>
    </div>
  )
}

export default Header  