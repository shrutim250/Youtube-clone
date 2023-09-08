import React from 'react';
import "./ChannelRow.css";
import Avatar  from '@mui/material/Avatar';
import Verification from "@mui/icons-material/CheckCircleOutlineRounded"


function ChannelRow({image,Channel,verified,subs,noOfVedios,Description}) {
  return (
    <div className='ChannelRow'>
        <Avatar className="ChannelRow_Logo" alt={Channel} src={image}/>
        <div className='ChannelRow_Text'>
           <h3>{Channel} { verified &&<Verification/>}</h3>
           <p> <h3>@{Channel}</h3> {subs} subscribers.{noOfVedios} Vedios</p>
           <p>{Description}</p>
           <br/> 
        </div>
        </div>
  )
}

export default ChannelRow