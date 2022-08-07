import React, {useEffect, useState} from 'react';
import './index.css'
import CardProfile from '../CardProfile/CardProfile';
import CardDiscover from '../CardDiscover/CardDiscover';
import CardPages from '../CardPages/CardPages';

function LeftFeedCard(props) {

    return (
        <div className="whiteL">
            <CardProfile user={props.user}/>
            <CardDiscover />
        </div>
    );
}

export default LeftFeedCard;