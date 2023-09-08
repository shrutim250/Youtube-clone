import React from 'react';
import "./VideoCard.css";
import  Avatar  from '@mui/material/Avatar';
 
function VideoCard({image,title,channel,views,timestamp,channelImage}) {
  return (
    <div className='VideoCard'>
        <img  className="VideoCard_Thumbnail"src={image} alt="image"/>
        <div className='VideoCard_Info'>
<Avatar  className="VideoCard_Avatar" src={channelImage} alt={channel}  />
<div className='VideoCard_text'>
    <h4>{title}</h4>
    <p>{channel}</p>
    <p>{views}.{timestamp}</p>
</div>
        </div>
    </div>
  )
}

export default VideoCard