import React from 'react'
import "./VideoRow.css"
function VideoRow({
    views,subs,description,timestamp,channel,title,image
}) {
  return (
    <div className='VideoRow'>
        <img src={image} alt="image"/>
        <div className='VideoRow_Text'>
            <h3>{title}</h3>
            <p className='VideoRow_Headline'>{channel}.<span className='VideoRow_subNumber'>{subs}</span> subscribers {views} views .{timestamp}</p>
            <p className='VideoRow_description'>{description}</p>

        </div>
    </div>
  )
}

export default VideoRow