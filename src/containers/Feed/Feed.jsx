import React, {useEffect, useState} from 'react';
import './index.css';
import LeftFeedMenu from '../../components/LeftFeedMenu/LeftFeedMenu';
import RightFeedMenu from '../../components/RightFeedMenu/RightFeedMenu';
import CenterFeed from '../../components/CenterFeed/CenterFeed';

function Feed(props) {

    const [user, setUser] = useState(props.user);
    const [posts, setPosts] = useState(props.posts);

    return (
        <div className="feed-container">
            <div className="GridGeneralFeed">
                <LeftFeedMenu user={user} className="gridGeneral1"/>
                <CenterFeed user={user} posts={posts} setPosts={setPosts} className="gridGeneral2"/>
                <RightFeedMenu user={user} className="gridGeneral3"/>
            </div>
        </div>
    );
}

export default Feed;