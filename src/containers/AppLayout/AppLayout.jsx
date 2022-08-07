import {Outlet } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import Header from '../../components/Header/Header';
import './index.css'

function AppLayout() {

    return (
        <div className="App-header">
            <Header />
            <Outlet/>
        </div>
    );
}

export default AppLayout;