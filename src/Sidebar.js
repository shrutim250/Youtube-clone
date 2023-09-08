import React from 'react';
import "./Sidebar.css";
import Sidebarrow from './Sidebarrow';
import WhatShotIcon from "@mui/icons-material/Whatshot";
import HomeIcon from "@mui/icons-material/Home";
import SubscriptionIcon from "@mui/icons-material/Subscriptions";
import VideoLIbraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import ondemandvedio from "@mui/icons-material/OndemandVideo";
import watchlatericon from "@mui/icons-material/WatchLater";
import thumbhupaltoutlinedicon from "@mui/icons-material/ThumbUpAltOutlined";
import expandmoreoutlinedouticon from "@mui/icons-material/ExpandMoreOutlined";
function Sidebar() {
  return (
    <div className='Sidebar'>
    <Sidebarrow  Selected Icon ={HomeIcon}title="Home"/>
    <Sidebarrow  Icon={WhatShotIcon}title="Trending"/>
    <Sidebarrow  Icon={SubscriptionIcon}title="Subscription"/>
 <hr/>
 <Sidebarrow  Icon ={VideoLIbraryIcon}title="VideoLibrary"/>
 <Sidebarrow  Icon ={HistoryIcon}title="History"/>
 <Sidebarrow  Icon ={ondemandvedio}title="OnDemandVideo"/>
 <Sidebarrow  Icon ={watchlatericon}title="WatchLater"/>
 <Sidebarrow  Icon ={thumbhupaltoutlinedicon}title="ThumbUpAltOutLined"/>
 <Sidebarrow  Icon ={expandmoreoutlinedouticon}title="ExpandMoreOutLined"/>

    </div>
  )
}

export default Sidebar;