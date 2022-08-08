import React, {useEffect, useState} from 'react';
import './index.css'
import {BsDot} from 'react-icons/bs'
import {BiWorld, BiLike, BiMessageDetail} from 'react-icons/bi'
import {AiFillLike, AiFillHeart} from 'react-icons/ai';
import {FaHandHoldingHeart, FaTrashAlt} from 'react-icons/fa';
import {TbArrowForwardUp} from 'react-icons/tb';
import {RiSendPlaneFill} from 'react-icons/ri';

function Post(props) {

    

    return (
        <div className="post">
            
            <div className="gridInfoUserPost">
                <img src={props.post.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                     className="round-avatar avatarPost"></img>
                
                <div className="infoPost">
                    <div className="userRelation">
                        <div className="name">
                            {props.post.name || ''}
                        </div>
                        <BsDot />
                        <div>
                            {props.post.status}
                        </div>
                    </div>

                    <div className="bio">
                        {props.post.bio}
                    </div>

                    <div className="timePost">
                        <div>
                            {props.post.time}
                        </div>
                        <BsDot />
                        <div>
                            {props.post.status_post}
                        </div>
                        <BiWorld />
                    </div>
                </div>

                <FaTrashAlt className="dots" onClick={() => props.deletePost(props.post.post_id)}/>
            </div>

            <div>
                <div className="text-content">
                    {props.post.content}
                </div>
                <img src={props.post.file || ''} className="files"></img>
            </div>

            <div className="infoReactionPost">
                <div className="reactions">
                    <AiFillLike className="imageColorLike"/>
                    <AiFillHeart className="imageColorLove"/>
                    <FaHandHoldingHeart className="imageColorHelp"/>
                    <div className="numReactions">
                        {props.post.totalReactions}
                    </div>
                </div>
                
                <div className="infoReactions">
                    <div className="totalComments">
                        {props.post.totalComments} comments
                    </div>
                    <BsDot />
                    <div className="totalComments">
                        {props.post.totalShares} shares
                    </div>
                </div>

            </div>

            <div className="separatorLinePost"></div>

            <div className="activeOptions">

                <div className={`iconOptions`}
                >
                    <BiLike />
                    <span>Like</span>
                </div>

                <div className={`iconOptions`}
                >
                    <BiMessageDetail />
                    <span>Comment</span>
                </div>

                <div className={`iconOptions`}
                >
                    <TbArrowForwardUp />
                    <span>Share</span>
                </div>

                <div className={`iconOptions`}
                >
                    <RiSendPlaneFill />
                    <span>Send</span>
                </div>

            </div>
        </div>
    );
}

export default Post;