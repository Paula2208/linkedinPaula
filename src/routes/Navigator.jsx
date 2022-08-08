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

    const mockupPosts = [
        {
            post_id: '1',
            name: 'Victoria del Pilar Santamaría',
            avatar: 'https://cdn.pixabay.com/photo/2015/07/09/00/29/woman-837156_1280.jpg',
            status: 'Following',
            bio: 'UI/UX | Figma | SCRUM Master',
            time: '3d',
            status_post:'Edited',
            content: 'Es una gran oportunidad para avanzar en mi carrera. Me emociona contarles que he sido asignada como Scrum Master de mi empresa.',
            file: '',
            totalReactions: 26,
            totalComments: 47,
            totalShares: 2
        },
        {
            post_id: '2',
            name: 'Amanda Carolina Castañeda',
            avatar: 'https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959__340.jpg',
            status: 'Following',
            bio: 'Co Founder de TPC | Diseñadora Gráfica',
            time: '1w',
            status_post:'',
            content: 'Les comparto uno de mis últimos diseños para niños.',
            file: 'https://cdn.pixabay.com/photo/2019/03/22/09/38/unicorn-4072862__340.png',
            totalReactions:12,
            totalComments: 29,
            totalShares: 2
        },
        {
            post_id: '3',
            name: 'Diego Torres',
            avatar: 'https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358__340.jpg',
            status: 'Following',
            bio: 'Profesor | Egresado de la Universidad Nacional de Colombia',
            time: '2hrs',
            status_post:'',
            content: 'La enseñanza es el pilar fundamental del crecimiento universal.',
            file: 'https://cdn.pixabay.com/photo/2018/10/22/18/02/teacher-3765909__340.jpg',
            totalReactions: 1200,
            totalComments: 2,
            totalShares: 24
        }
    ]

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
    const [posts, setPosts] = useState(mockupPosts);

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
                <Route path="/feed" element={<Feed user={user} posts={posts} />}/>
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
