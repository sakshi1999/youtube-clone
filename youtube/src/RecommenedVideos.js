import React from 'react';
import "./RecommenedVideos.css";
import VideoCard from './VideoCard';

function RecommenedVideos() {
    return (
        <div className="recommenedvideos">
          <h2>Recommended</h2> 
          <div className="recommenedvideos__videos">

          <VideoCard
            title="No Border No Nation"
            views="10k views"
            timestamp="3 days ago"
            image="https://images.pexels.com/photos/4970477/pexels-photo-4970477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          <VideoCard
            title="Love is beyond the gender"
            views="10k views"
            timestamp="15 days ago"
            image="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          <VideoCard
            title="No Justice No Peace"
            views="10k views"
            timestamp="1 days ago"
            image="https://images.pexels.com/photos/4767452/pexels-photo-4767452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          <VideoCard
                title="Let's Do Some Fanshion Therapy "
                views="10k views"
                timestamp="1 days ago"
                image="https://images.pexels.com/photos/2740964/pexels-photo-2740964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                channel="loony.fille"
                channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
         
         <VideoCard
            title="No Border No Nation"
            views="10k views"
            timestamp="3 days ago"
            image="https://images.pexels.com/photos/4970477/pexels-photo-4970477.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          <VideoCard
            title="Love is beyond the gender"
            views="10k views"
            timestamp="15 days ago"
            image="https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          <VideoCard
            title="No Justice No Peace"
            views="10k views"
            timestamp="1 days ago"
            image="https://images.pexels.com/photos/4767452/pexels-photo-4767452.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            channel="loony.fille"
            channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          <VideoCard
                title="Let's Do Some Fanshion Therapy "
                views="10k views"
                timestamp="1 days ago"
                image="https://images.pexels.com/photos/2740964/pexels-photo-2740964.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                channel="loony.fille"
                channelImage="https://lh3.googleusercontent.com/a-/AOh14GiKF--InoxwtvRQgyYq9kv_HxqFPtFh4dBA3fjJ0w=s88-c-k-c0x00ffffff-no-rj-mo"
          /> 
          </div>
        </div>
    )
}

export default RecommenedVideos;
