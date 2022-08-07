import React, {useEffect, useState} from 'react';
import './index.css';
import LeftFeedMenu from '../../components/LeftFeedMenu/LeftFeedMenu';
import RightFeedMenu from '../../components/RightFeedMenu/RightFeedMenu';
import CenterFeed from '../../components/CenterFeed/CenterFeed';

function Feed() {

    return (
        <div className="feed-container">
            <div className="GridGeneralFeed">
                <LeftFeedMenu className="gridGeneral1"/>
                <CenterFeed className="gridGeneral2"/>
                <RightFeedMenu className="gridGeneral3"/>
            </div>
        </div>
    );
}

export default Feed;