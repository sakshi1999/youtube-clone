import React from 'react';
import "./ChannelRow.css";
import Avatar from "@material-ui/core/Avatar";
import CheckCircleOutlineSharp from '@material-ui/icons/CheckCircleOutlineSharp';
import VideoRow from './VideoRow';

function ChannelRow({image,channel,subs,verified,noOfVideos,description}) {
    return (
        <div className="channelRow">
            <div className="channelRow__wrap">
                <Avatar className="channelRow__logo"
                alt={channel} src={image}/>
                <div className="channelRow__text">
                <h4>
                    {channel} {verified && <CheckCircleOutlineSharp/>}
                    </h4>
                    <p>
                        {subs} subscribers . {noOfVideos} videos
                    </p>
                    <p>{description}</p>

                
                </div>
            </div>
             <hr/>
            <VideoRow
            title="Summer-vlog"
            subs="60k"
            views="10k views"
            timestamp="5 months ago"
            image="https://images.pexels.com/photos/4526712/pexels-photo-4526712.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            description="Do you want to listen something crazy about the summer"
          /> 
           <VideoRow
            title="No Justice No Peace"
            subs="60k"
            views="10k views"
            timestamp="1 days ago"
            image="https://images.pexels.com/photos/4767452/pexels-photo-4767452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            description="Do you want to listen something crazy about the quote"
          /> 
           <VideoRow
            title="How to manage time durning exam"
            subs="60k"
            views="10k views"
            timestamp="6 months ago"
            image="https://images.pexels.com/photos/3853300/pexels-photo-3853300.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            description="Do you want to listen some crazy time planning during exams"
          /> 
           <VideoRow
            title="Study material"
            subs="60k"
            views="10k views"
            timestamp="1 month ago"
            image="https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            description="let's get back to studies it high time"
          /> 
           <VideoRow
            title="Peacefull"
            subs="60k"
            views="10k views"
            timestamp="1 year ago"
            image="https://images.pexels.com/photos/4075086/pexels-photo-4075086.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            description="Do you want to listen something crazy about the quote"
          /> 
           <VideoRow
            title="No Border No Nation"
            subs="60k"
            views="10k views"
            timestamp="1 days ago"
            image="https://images.pexels.com/photos/4970477/pexels-photo-4970477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            description="Do you want to listen something crazy about the quote"
          /> 
        </div>
    )
}

export default ChannelRow;