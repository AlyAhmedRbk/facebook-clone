import React from 'react';
import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";

const Shared = () => {
  return (
    <div className='share'>
       <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/person/1.jpeg" alt="" className="shareProfileImg" />
                <input 
                 placeholder='What is in your mind?'
                 className="shareInput"
                  />
            </div>
            <hr className='shareHr'/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>Photo or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue'  className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green'  className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div   className="shareOption">
                        <EmojiEmotions htmlColor='goldenrod' className='shareIcon'/>
                        <span className='shareOptionText'>Feelings</span>
                    </div>
                <button className="shareBtn">Share</button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Shared
