import React, {useEffect, useState} from 'react';
import './index.css'
import CardProfile from '../CardProfile/CardProfile';
import CardDiscover from '../CardDiscover/CardDiscover';
import CardPages from '../CardPages/CardPages';

function LeftFeedCard() {

    return (
        <div className="whiteL">
            <CardProfile />
            <CardPages />
            <CardDiscover />
        </div>
    );
}

export default LeftFeedCard;