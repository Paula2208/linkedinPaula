import React, {useEffect, useState} from 'react';
import './index.css'
import {MdArrowDropDown} from "react-icons/md";

function ChangeTop(props) {

    const changeType = (type) => {
        props.setTypeSort(type);
        props.setShowSort(false);
    }

    return (
        <div className="changeTop">
            <div className="changeText" onClick={() => changeType('Top')}>
                Top
            </div>
            <div className="changeText" onClick={() => changeType('Recent')}>
                Recent
            </div>
        </div>
    );
}

export default ChangeTop;