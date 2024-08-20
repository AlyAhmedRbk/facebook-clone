import React from 'react';
import "./closefriends.css";

const CloseFriends = ({user}) => {
  return (
    <div className='closeFriends'>
        <li className="sidebarFriend">
            <img className='sidebarFriendImg' src={user.profilePicture}alt="" />
            <span className='sidebarFriendName'>{user.username}</span>
        </li>
    </div>
  )
}

export default CloseFriends
