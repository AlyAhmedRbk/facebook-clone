import React from 'react';
import "./topbar.css";
import {Search, Person, Chat, Notifications} from "@material-ui/icons";

const Topbar = () => {
  return (
    <>
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className='logo'>XSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                <Search className="searchIcon"/>
                <input placeholder='Search for friends,post or any video' className="searchInput" />
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <span className="topbarLink">Home</span>
                    <span className="topbarLink">Timeline</span>
                </div>

                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications />
                        <span className='topbarIconBadge'>1</span>
                    </div>
                </div>
                <img src="assets/person/1.jpeg" alt="" className='topbarImg'/>
            </div>
        </div>
    </>
  )
}

export default Topbar
