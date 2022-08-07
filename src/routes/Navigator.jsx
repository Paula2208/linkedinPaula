import {Routes, Route, Navigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Feed from '../containers/Feed/Feed'
import Login from '../containers/Login/Login'
import Signup from '../containers/Signup/Signup'
import Network from '../containers/Network/Network'
import Jobs from '../containers/Jobs/Jobs'
import Messaging from '../containers/Messaging/Messaging'
import Notifications from '../containers/Notifications/Notifications'
import AppLayout from '../containers/AppLayout/AppLayout'

function Navigator() {
    const [userLogged, setUserLogged] = useState(true);

    const mockupUser = {
        username: 'vfernandez',
        name: 'Rodolfo Fernandez Quintero',
        bio: 'Ganador del IX Festival de la Canción | Músico Profesional | Grupo Los Atómicos',
        connections: 13,
        pending: 2,
        avatar: 'https://cdn.pixabay.com/photo/2014/01/24/10/40/singer-250933__340.jpg',
        cover: 'https://cdn.pixabay.com/photo/2015/03/30/12/29/skulls-698436__340.jpg'
    };

    const [user, setUser] = useState(mockupUser);

    if(!userLogged){
        return (
            <Routes>
                <Route path="/" element={<Login />}/>
                <Route path="/sing-up" element={<Signup />}/>
                <Route path="*" element={<Login />}/>
            </Routes>
        );
    }

    return (
        <Routes>
            <Route path="/" element={<AppLayout user={user}/>}>
                <Route path="/feed" element={<Feed user={user}/>}/>
                <Route path="/mynetwork" element={<Network />}/>
                <Route path="/jobs" element={<Jobs />}/>
                <Route path="/messaging" element={<Messaging />}/>
                <Route path="/notifications" element={<Notifications />}/>
                <Route path="*" element={<Navigate to="/feed" />}/>
            </Route>
        </Routes>
    );
}

export default Navigator;
