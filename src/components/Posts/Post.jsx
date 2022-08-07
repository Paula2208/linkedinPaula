import React, {useEffect, useState} from 'react';
import './index.css'

function Post(props) {

    return (
        <div className="post">
            <h1>{props.post}</h1>
        </div>
    );
}

export default Post;