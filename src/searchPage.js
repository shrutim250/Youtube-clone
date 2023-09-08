import React from 'react';
import "./searchPage.css";
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';
function SearchPage() {
  return (
    <div className='SearchPage'>
        <ChannelRow 
            ChannelImage="https://media.istockphoto.com/id/1408387701/photo/social-media-marketing-digitally-generated-image-engagement.webp?b=1&s=170667a&w=0&k=20&c=udzg1fifSWZqXvkBJyEAPe2iFGiEi9NxasBCpBAdogo="
            image="https://media.istockphoto.com/id/1460853312/photo/abstract-connected-dots-and-lines-concept-of-ai-technology-motion-of-digital-data-flow.jpg?s=2048x2048&w=is&k=20&c=7yqKsEDy7_n6bG1jOFFFmYGYDa0MiSjJjYH_JvbxuWs="
            Channel="Programmer"
            verified
            subs="660k"
            noOfVedios={367}
            Description="You can find awesome projects here. 
            This channel is free of cost and is basically made to help the developers
             out there in the world and is also helpful to those who want to learn and 
             explore more in this field... "     
        />
         <br/>
         <hr/>
      <h2>Latest Updated From This Channel</h2>
      <br/>
      
         <div>
       <VideoRow
       title="Come out, come out wherever you are.
       Not the most comfortable of talents."
      views="3.6k"
      timestamp="1 week ago"
      image="https://media.istockphoto.com/id/1163132207/photo/teamwork-process-young-designers-planning-work-together-on-website-ux-app-development.jpg?s=2048x2048&w=is&k=20&c=WoKV76mBsnUQGVbwuHts8Zo1VzrZLqAjnmtUT4rR8Tc="
      channel="Happy Homies"
      description="This is the best channel to learn web and explore your field.."
       subs="667k subscribers"/>
       </div>
         
         <div>
            <VideoRow title="Scary stories, to make you paranoid!"
      views="2.3M views"
      timestamp="5days ago"
      image="https://cdn.pixabay.com/photo/2015/12/22/08/06/face-1103708_1280.jpg"
      channel="Sleepy Shy"
      description="This is the best channel to explore your field.."
       subs="667k subscribers"/>
         </div>

         <div>
         <VideoRow
      title="When a goal finally becomes a reality... smile."
      views="5.3M"
      timestamp=" 2 months ago"
      image="https://media.istockphoto.com/id/1401461124/photo/hand-of-businessman-using-smart-phone-with-coin-icon.webp?b=1&s=612x612&w=0&k=20&c=pH3gcm-II_fUgsMexn2HD5YjySF3_mf_2GqPCan3y1c="
      channel="MasteraMind Gamers"
      description="This is the best channel to explore your field.."
       subs="667k subscribers"
     />
     <div>
        <VideoRow
             title="The little things in life are the ones that will save the day."
      views="2.3M"
      timestamp="3days ago"
      image="https://cdn.pixabay.com/photo/2022/01/17/22/20/add-6945894_640.png"
      channel="Singh In USA"
      description="This is the best channel to explore your field.."
       subs="667k subscribers"
/>
       
     </div>
         </div>

    </div>
    
    
  )
}

export default SearchPage