import React, {useEffect, useState} from 'react';
import './index.css'
import {AiOutlinePlus} from 'react-icons/ai';

function CardDiscover() {

    return (
        <div className="cardDiscover">
            <div className="discover-text">
                <div className="toHover">Groups</div>
                <div className={`iconDiscover toHover`}>
                    <div>Events</div>
                    <AiOutlinePlus className="imageGray"/>
                </div>
                <div className="toHover">Followed Hashtags</div>
            </div>
            
            <div className="separatorLineProfile"></div>
            <div className="discoverMore">Discover more</div>
        </div>
    );
}

export default CardDiscover;