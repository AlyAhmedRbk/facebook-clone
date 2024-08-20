import React from 'react'
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Rightbar from '../../Components/Rightbar/Rightbar';
import Feed from '../../Components/Feed/Feed';
import "./profile.css";

const Profile = () => {
  return (
    <div>
        <Topbar />
        <div className="profile">
            <Sidebar />
            <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img src="/assets/post/3.jpeg" className='profileCoverImg' alt="" />
                        <img src="/assets/person/7.jpeg" className='profileUserImg' alt="" />
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Aly Ahmed</h4>
                        <span className="profileInfoDesc">🖥️ Exploring the Wonders of Computer Science! 💻✨ Welcome to my corner where I dive into the fascinating world of algorithms, coding, and problem-solving. 🚀 From crafting intricate programs to unlocking the secrets of software development, join me on this journey through the realms of Computer Science. 🌐🔍 Let's unravel the magic behind technology, embrace the power of logical thinking, and navigate the ever-evolving landscape of CS together. 🌟 Whether you're a fellow enthusiast, a coding wizard, or just curious about the digital universe, let's connect, share insights, and embark on this exciting adventure in the realm of 0s and 1s! 🚀💬 #CodeExplorer #CSAdventures #DigitalFrontiers #TechEnthusiast 🤖🚀</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile
