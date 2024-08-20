import React from 'react'
import "./feed.css";
import Shared from '../Share/Shared';
import Post from '../Post/Post';
import {Posts} from "../../dummyData";

const Feed = () => {
  return (
    <div className='feed'>
        <Shared />
        {Posts.map((p)=>{
          return(
            <Post key={p.id} post={p}/>
          )
        })}
    </div>
  )
}

export default Feed
