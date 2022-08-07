import React, {useEffect, useState} from 'react';
import './index.css'
import {AiOutlinePlus} from 'react-icons/ai';


function CardRecomendation(props) {

    return (
        <div className="cardRecomendation">

            <img src={props.rec.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                className="round-avatar avatarRecomendation div1-rec"></img>
            
            <div className="div2-rec">
                <div className="recName">
                    {props.rec.name}
                </div>

                <div className="recBio">
                    {props.rec.bio}
                </div>

                <div className={`iconFollow`}>
                    <AiOutlinePlus className="plusRec"/>
                    <div>Follow</div>
                </div>
            </div>
        </div>
    );
}

export default CardRecomendation;