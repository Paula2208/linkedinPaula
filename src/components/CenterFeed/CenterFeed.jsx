import React, {useEffect, useState} from 'react';
import './index.css'
import CardCreatePost from '../CardCreatePost/CardCreatePost'
import SortPosts from '../SortPosts/SortPosts'
import ListPost from '../Posts/ListPost'

function CenterFeed() {

    return (
        <div className="whiteC">
            <CardCreatePost />
            <SortPosts />
            <ListPost />
        </div>
    );
}

export default CenterFeed;