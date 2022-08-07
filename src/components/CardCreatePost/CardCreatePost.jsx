import React, {useEffect, useState} from 'react';
import './index.css'
import { IoBriefcase } from "react-icons/io5";
import {BsImage} from "react-icons/bs"
import {RiVideoFill} from "react-icons/ri";
import {BiNews} from "react-icons/bi"

function CardCreatePost() {

    return (
        <div className="cardCreatePost">
            <div className="gridInput">
                <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                    className="round-avatar avatarCreatePost"></img>
                <div className="startPosts">
                    Start a Post
                </div>
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