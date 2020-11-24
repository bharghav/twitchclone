import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="header__left">
                <img className="header__leftlogo" 
                src="http://pngimg.com/uploads/twitch/twitch_PNG6.png" 
                alt="twitchlogo" />
                <h2>Following</h2>
                <h2>Browse</h2>
                <div className="header_vl"></div>
                <h2>Esports</h2>
                <h2>Music</h2>
                <i class="fas fa-ellipsis-h fa-1x"></i>
            </div>
            <div className="header__center">
                <input type="text" name="Search" placeholder="Search" />
                <div className="header__centerLogoContainer">
                    <i class="fas fa-search"></i>
                </div>
            </div>
            <div className="header__right">
                <div className="header__rightContainer">
                <i class="fas fa-crown"></i>
                <i class="fas fa-inbox"></i>
                <i class="fas fa-comment-alt"></i>

                <div className="header__rightBits">
                    <i class="fas fa-gem"></i>
                    <h4>Get Bits</h4>

                    
                </div>
                <Avatar />
                </div>
            </div>
        </div>
    )
}

export default Header
