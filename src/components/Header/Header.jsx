import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import './index.css'
import { ImHome3} from "react-icons/im";
import { IoBriefcase } from "react-icons/io5";
import {HiUsers, HiSearch} from "react-icons/hi";
import {BsBellFill} from "react-icons/bs";
import {RiMessage2Fill} from "react-icons/ri";
import {MdArrowDropDown} from "react-icons/md";
import {CgMenuGridR} from "react-icons/cg";
import {BiBullseye} from "react-icons/bi";

function Header() {

    const [tabActive, setTabActive] = useState(1);
    const [user, setUser] = useState(undefined);
    const [showMe, setShowMe] = useState(false);
    const [showProducts, setShowProducts] = useState(false);
    const [showPublic, setShowPublic] = useState(false);

    useEffect(() => {
        if(tabActive === 1){
            navigate('./feed')
        }
    } ,[])

    const navigate = useNavigate();

    const changeTab = (number) => {
        setTabActive(number);

        let active = '';

        if(number === 1){
            navigate('./feed')
        }

        if(number === 2){
            navigate('./mynetwork');
        }

        if(number === 3){
            navigate('./jobs');
        }

        if(number === 4){
            navigate('./messaging');
        }

        if(number === 5){
            navigate('./notifications');
        }
    }

    return (
        <div className="header">
            <img src={"android-chrome-192x192.png"} className="header-logo"></img>

            <div className="icon-search totalInput"> 
                <input className="icon-search-input" type="search" placeholder="Search"></input>
                <HiSearch className="searchImage"/>
            </div>

            <div className="principal-header-grid">
                <div className={`icon ${(tabActive === 1) && 'active'} div1`}
                    onClick={() => changeTab(1)}
                >
                    <ImHome3 className="image"/>
                    <span>Home</span>
                    {(tabActive === 1)&&(<div className="line"></div>)}
                </div>

                <div className={`icon ${(tabActive === 2) && 'active'} div2`}
                    onClick={() => changeTab(2)}
                >
                    <HiUsers className="image"/>
                    <span>My Network</span>
                    {(tabActive === 2)&&(<div className="line"></div>)}
                </div>

                <div className={`icon ${(tabActive === 3) && 'active'} div3`}
                    onClick={() => changeTab(3)}
                >
                    <IoBriefcase className="image"/>
                    <span>Jobs</span>
                    {(tabActive === 3)&&(<div className="line"></div>)}
                </div>

                <div className={`icon ${(tabActive === 4) && 'active'} div4`}
                    onClick={() => changeTab(4)}
                >
                    <RiMessage2Fill className="image"/>
                    <span>Messaging</span>
                    {(tabActive === 4)&&(<div className="line"></div>)}
                </div>

                <div className={`icon ${(tabActive === 5) && 'active'} div5`}
                    onClick={() => changeTab(5)}
                >
                    <BsBellFill className="image"/>
                    <span>Notifications</span>
                    {(tabActive === 5)&&(<div className="line"></div>)}
                </div>

                <div className={`icon ${(tabActive === 6) && 'active'} div6`}
                    onClick={() => setShowMe(true)}
                >
                    <img src={'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                         className="round-avatar avatar"></img>
                    <div className="arrow">
                        <span>Me</span>
                        <MdArrowDropDown className="image"/>
                    </div>
                </div>

                <div className={`icon ${(tabActive === 7) && 'active'} div7 `}
                    onClick={() => setShowProducts(true)}
                >
                    <div className="line-vertical"></div>
                    <CgMenuGridR className="image gridLine2"/>
                    <div className="arrow gridLine3">
                        <span>Work</span>
                        <MdArrowDropDown className="image"/>
                    </div>
                </div>

                <div className={`icon ${(tabActive === 8) && 'active'} div8`}
                    onClick={() => setShowPublic(true)}
                >
                    <BiBullseye className="image"/>
                    <span>Advertise</span>
                </div>

            </div>

            
        </div>
    );
}

export default Header;