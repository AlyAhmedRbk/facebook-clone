import React from 'react'
import Topbar from '../../Components/Topbar/Topbar';
import Sidebar from "../../Components/Sidebar/Sidebar";
import Rightbar from '../../Components/Rightbar/Rightbar';
import Feed from '../../Components/Feed/Feed';
import "./home.css";

const Home = () => {
  return (
    <div>
        <Topbar />
        <div className="homeContainer">
        <Sidebar />
        <Feed />
        <Rightbar/>
        </div>
    </div>
  )
}

export default Home
