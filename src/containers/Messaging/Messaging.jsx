import React, {useEffect, useState} from 'react';
import {RiMessage2Fill} from "react-icons/ri";
import './index.css'

function Messaging() {

    return (
        <div>
            <RiMessage2Fill className="imageMessage"/>
            <h1>¡Pronto podrás leer tus mensajes aquí!</h1>
        </div>
    );
}

export default Messaging;