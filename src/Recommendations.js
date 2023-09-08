import React from 'react'
import "./Recommendations.css"
import VideoCard from './VideoCard';

function Recommendations() {
  return (
    <div className='Recommendations'><h2>Recommended</h2>
    <div className='Recommendations_Videos'>
     <VideoCard 
     title="Scary stories, to make you paranoid!"
      views="2.3M views"
      timestamp="5days ago"
      channelImage="https://cdn.pixabay.com/photo/2015/12/22/08/06/face-1103708_1280.jpg"
      channel="Sleepy Shy"
      image="https://cdn.pixabay.com/photo/2013/02/01/18/14/url-77169_640.jpg"

     />
     <VideoCard
      title="I was expecting something a bit better, to be honest."
      views="2.3M"
      timestamp="3days ago"
      channelImage="https://media.istockphoto.com/id/1496085825/photo/online-degree-e-learning-education-concept-learning-online.webp?b=1&s=612x612&w=0&k=20&c=w0LXtTWli-VoPwaHvkjxD0x5Buyd7t1ZphdoisVqjOk="
      channel="Made In India"
      image="https://media.istockphoto.com/id/1446806057/photo/young-happy-woman-student-using-laptop-watching-webinar-writing-at-home.webp?b=1&s=612x612&w=0&k=20&c=xrSBe4eiZ9LHEC1_ZqleGLOBaeRmIi74VZVS9Kl4VLk="
     />
     <VideoCard title="Come out, come out wherever you are.
       Not the most comfortable of talents."
      views="3.6k"
      timestamp="1 week ago"
      channelImage="https://media.istockphoto.com/id/1163132207/photo/teamwork-process-young-designers-planning-work-together-on-website-ux-app-development.jpg?s=2048x2048&w=is&k=20&c=WoKV76mBsnUQGVbwuHts8Zo1VzrZLqAjnmtUT4rR8Tc="
      channel="Happy Homies"
      image="https://media.istockphoto.com/id/1413249425/photo/human-hands-use-laptops-in-the-morning-to-watch-online-streaming-watch-video-on-the-internet.webp?b=1&s=612x612&w=0&k=20&c=RHhrUokCf-64dAsBi-ga2_GzgeU64TSToFTUtbNn5lU="
/>
     <VideoCard title="Challenging Google's Top Feeder College Students? Ft. UC Berkeley!"
      views="2.34M"
      timestamp="13days ago"
      channelImage="https://media.istockphoto.com/id/1451864705/photo/e-learning-online-class-on-virtual-screen-watching-video-on-internet-webinar-online-education.webp?b=1&s=612x612&w=0&k=20&c=a0w2m1x9aoWiJ5SPNjVoK29QGyKNvF24m8gZzERGxZI="
      channel="Singh In USA"
      image="https://cdn.pixabay.com/photo/2014/09/20/23/44/website-454460_640.jpg"
/>
     <VideoCard
      title="When a goal finally becomes a reality... smile."
      views="5.3M"
      timestamp=" 2 months ago"
      channelImage="https://media.istockphoto.com/id/1401461124/photo/hand-of-businessman-using-smart-phone-with-coin-icon.webp?b=1&s=612x612&w=0&k=20&c=pH3gcm-II_fUgsMexn2HD5YjySF3_mf_2GqPCan3y1c="
      channel="MasteraMind Gamers"
      image="https://cdn.pixabay.com/photo/2016/10/26/19/00/domain-names-1772242_640.jpg"
     />
     <VideoCard title="The little things in life are the ones that will save the day."
      views="2.3M"
      timestamp="3days ago"
      channelImage="https://cdn.pixabay.com/photo/2022/01/17/22/20/add-6945894_640.png"
      channel="Singh In USA"
      image="https://cdn.pixabay.com/photo/2022/01/11/21/48/link-6931554_640.png"
/>
     <VideoCard title="An emerald that hasn't been discovered."
      views="3.3M"
      timestamp="7days ago"
      channelImage="https://cdn.pixabay.com/photo/2015/09/30/01/48/turkey-964831_640.jpg"
      channel="Sonny Kukreja"
     image="https://cdn.pixabay.com/photo/2018/04/26/12/14/travel-3351825_640.jpg"
/>
     <VideoCard title="Adventure is worthwhile. Ft. UC Berkeley!"
      views="1.3M"
      timestamp="30days ago"
      channelImage="https://cdn.pixabay.com/photo/2013/03/01/18/40/crispus-87928_640.jpg"
      channel="Saume sehil"
      image="https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_640.jpg"


/>
    </div>
    </div>
  )
}

export default Recommendations