import React, {useEffect, useState} from 'react';
import './index.css'
import CardRecomendation from './CardRecomendation';
import {BsInfoSquareFill} from 'react-icons/bs';
import {ImArrowRight2} from 'react-icons/im';

function CardConnections() {

    const mockupRecomendation = [
        {
            avatar: 'https://cdn.pixabay.com/photo/2015/03/03/18/58/woman-657753__340.jpg',
            username: 'lmarin',
            name: 'Lorena Botero',
            bio: 'Director at Engage | Digital Agency'
        },
        {
            avatar: 'https://cdn.pixabay.com/photo/2016/03/23/08/34/woman-1274361__340.jpg',
            username: 'jgutierrez',
            name: 'Natalia Agudelo Marín',
            bio: 'Hiring for Electronic Arts across Europe'
        },
        {
            avatar: 'https://cdn.pixabay.com/photo/2016/11/23/00/57/adult-1851571__340.jpg',
            username: 'fbonilla',
            name: 'Fernando Bonilla Rivero',
            bio: 'Talent Acquisition IT | Tecnical Recruiter IT | Outsourcing'
        },
    ];

    const [recs, setRecs] = useState(mockupRecomendation);

    return (
        <div className="cardConnections">
            <div className={`iconInfoAddFeed`}>
                <div>Add to your feed</div>
                <BsInfoSquareFill className="infoImage"/>
            </div>

            {recs.map((rec) => (
                <CardRecomendation rec={rec}/>
            ))}

            <div className={`iconViewAllRec`}>
                <div>View all recommendations</div>
                <ImArrowRight2 className="infoRowRec"/>
            </div>
        </div>
    );
}

export default CardConnections;