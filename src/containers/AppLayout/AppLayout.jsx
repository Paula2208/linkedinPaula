import {Outlet,  useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import './index.css'

function AppLayout(props) {

    const navigate = useNavigate()

    useEffect(() => {
        navigate('./feed');
    }, [])

    return (
        <div className="App-header">
            <Header user={props.user}/>
            <Outlet/>
        </div>
    );
}

export default AppLayout;