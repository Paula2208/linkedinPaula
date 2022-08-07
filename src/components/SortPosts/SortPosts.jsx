import React, {useEffect, useState} from 'react';
import './index.css'
import {MdArrowDropDown} from "react-icons/md";
import ChangeTop from './ChangeTop'
import OutsideClickHandler from 'react-outside-click-handler'

function SortPosts() {

    const [typeSort, setTypeSort] = useState('Top');
    const [showSort, setShowSort] = useState(false);

    return (
        <div className="sortPosts">
            <div className="line-sort"></div>
            <div className="text-sort">Sort by:</div>
            <div className="display-type" onClick={() => setShowSort(!showSort)}>
                <div className="text-type">{typeSort}</div>
                <MdArrowDropDown className="image"/>
            </div>
            {(showSort) && (
            <OutsideClickHandler
                onOutsideClick={() => setShowSort(false)}
            >
                <ChangeTop setTypeSort={setTypeSort} setShowSort={setShowSort}/>
            </OutsideClickHandler>
            )}
        </div>
    );
}

export default SortPosts;