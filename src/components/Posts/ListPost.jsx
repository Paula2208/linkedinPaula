import React, {useEffect, useState} from 'react';
import './index.css'
import Post from './Post'

function ListPost(props) {

    const deletePost= (id) =>{
        const p = props.posts.filter((post) => (post.post_id !== id) );
        props.setPosts(p);
    }

    return (
        <div className="listPosts">
            {props.posts.map((post) => (
                <Post post={post} setUpPosts={props.setPosts} deletePost={deletePost}/>
            ))}
        </div>
    );
}

export default ListPost;