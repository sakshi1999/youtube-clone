import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
              <TuneIcon/>
              <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
              image="https://images.pexels.com/photos/2440799/pexels-photo-2440799.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              channel="Loony Fille"
              verified
              subs="660k"
              noOfVideos={382}
              description="you can find all types of videos here"
            />
            
        </div>
    )
}

export default SearchPage;