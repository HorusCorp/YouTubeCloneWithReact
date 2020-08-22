import React, { useState } from 'react'
import MenuIcon from '@material-ui/icons/Menu'
import SearchIcon from '@material-ui/icons/Search'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import AppsIcon from '@material-ui/icons/Apps'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Avatar from "@material-ui/core/Avatar"
import { Link } from "react-router-dom";

function Header() {

    const [inputSearch, setinputSearch] = useState("");

    return (
        <div className="header">
            <div className='header__left'>
                <MenuIcon />
                <Link to='/'>
                    <img 
                        className='header__logo' 
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Logo_of_YouTube_%282005-2011%29.svg/800px-Logo_of_YouTube_%282005-2011%29.svg.png' 
                        alt='youtube-logo'
                    />
                </Link>
            </div>
            <div className='header__input'>
                <input type='text' value={inputSearch} onChange={(e) => setinputSearch(e.target.value)} placeholder='Search'></input>
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='header__inputButton'/>
                </Link>
            </div>
            <div className='header__icons'> 
                <VideoCallIcon className='header___icon'/>
                <AppsIcon className='header___icon' />
                <NotificationsIcon className='header___icon' />
                <Avatar 
                    alt="rey arnaud" 
                    src="https://res.cloudinary.com/dzqfghzga/image/upload/v1598010823/sp3sycj1idzbr1tsgixc.jpg" 
                />
            </div>  
        </div>
    )
}

export default Header
