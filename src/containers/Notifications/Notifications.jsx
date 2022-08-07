import React, {useEffect, useState} from 'react';
import {BsBellFill} from "react-icons/bs";
import './index.css'

function Notifications() {

    return (
        <div className="notifications-container">
            <BsBellFill className="imageNotification"/>
            <h1>¡Pronto podrás ver tus notificaciones aquí!</h1>
        </div>
    );
}

export default Notifications;