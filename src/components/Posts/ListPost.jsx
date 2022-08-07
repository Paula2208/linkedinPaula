import React, {useEffect, useState} from 'react';
import './index.css'
import Post from './Post'

function ListPost() {
    const [posts, setPosts] = useState([1,2,3,4,5,6,7]);

    return (
        <div className="listPosts">
            {posts.map((post) => (
                <Post post={post}/>
            ))}
        </div>
    );
}

export default ListPost;