import React, {useEffect, useState} from 'react';
import './index.css'
import CardConnections from '../CardConnections/CardConnections';
import CardCourses from '../CardCourses/CardCourses';
import CardAds from '../CardAds/CardAds';

function RigthFeedCard() {

    return (
        <div className="whiteR">
            <CardConnections />
            <CardCourses />
            <CardAds />
        </div>
    );
}

export default RigthFeedCard;