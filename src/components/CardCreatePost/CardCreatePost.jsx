import React, {useEffect, useState} from 'react';
import './index.css'
import { IoBriefcase } from "react-icons/io5";
import {BsImage} from "react-icons/bs"
import {RiVideoFill} from "react-icons/ri";
import {BiNews} from "react-icons/bi";
const timestamp = require('timestamp');

function CardCreatePost(props) {

    const [user, setUser] = useState(props.user);
    const [inp, setInp] = useState('');

    useEffect(() => {
        console.log(inp)
    }, [inp])

    const createPost = (e) => {
        if(e.key === 'Enter'){
            console.log('entro')
            const p = {
                post_id: timestamp(),
                name: user.name,
                avatar: user.avatar,
                status: '',
                bio: user.bio,
                time: 'Now',
                status_post:'',
                content: inp,
                file: '',
                totalReactions: 0,
                totalComments: 0,
                totalShares: 0
            };

            props.setPosts([p,...props.posts]);
            setInp('');
        }
        
    }

    return (
        <div className="cardCreatePost">
            <div className="gridInput">
                <img src={user.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                    className="round-avatar avatarCreatePost"></img>
                <input className="startPosts" type="text" value={inp} placeholder="Start a Post" onKeyPress={(f) => createPost(f)} onChange={(e) => setInp(e.target.value)}></input>
            </div>

            <div className="gridOptions">

                <div className={`iconPost`}
                >
                    <BsImage className="photo"/>
                    <span>Photo</span>
                </div>

                <div className={`iconPost`}
                >
                    <RiVideoFill className="video"/>
                    <span>Video</span>
                </div>

                <div className={`iconPost`}
                >
                    <IoBriefcase className="job"/>
                    <span>Job</span>
                </div>

                <div className={`iconPost`}
                >
                    <BiNews className="article"/>
                    <span>Write article</span>
                </div>

            </div>
        </div>
    );
}

export default CardCreatePost;