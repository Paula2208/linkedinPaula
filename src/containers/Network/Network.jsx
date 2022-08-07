import React, {useEffect, useState} from 'react';
import {HiUsers} from "react-icons/hi";
import './index.css'

function Network() {

    return (
        <div className="network">
            <HiUsers className="image"/>
            <h1>¡Pronto encontrarás tus conecciones aquí!</h1>
        </div>
    );
}

export default Network;