import React, {useEffect, useState} from 'react';
import './index.css'
import {FaPiedPiperSquare, FaBookmark} from 'react-icons/fa'

function CardProfile(props) {

    const [user, setUser] = useState(props.user);

    return (
        <div className="cardProfile">
            <div className="principal-profile">

                <div className="photo-profile">
                    <img src={user.cover || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                        className="cover"></img>

                    <img src={user.avatar || 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'}
                         className="round-avatar avatarProfile"></img>
                </div>

                <div className="principal-name">
                    {user.name}
                </div>

                <div className="principal-bio">
                    {user.bio}
                </div>
            </div>

            <div className="separatorLineProfile"></div>

            <div className="connections-profile">
                <div className="subConnections">
                    <p className="div1Con">Connections</p>
                    <div className="div2Con">{user.connections}</div>
                    <span className="div3Con">Grow your network</span>
                </div>
                
                <div className="subConnections2">
                    <p>Invitation</p>
                    <div>{user.pending}</div>
                </div>
            </div>

            <div className="separatorLineProfile"></div>

            <div className="access-profile">
                <span className="principal-bio">Access exclusive tools & insights</span>
                <div className={`iconProfile`}
                >
                    <FaPiedPiperSquare className="orangeProfile"/>
                    <div className="boldGeneral">Try Premium for free</div>
                </div>
            </div>

            <div className="separatorLineProfile"></div>
            <div className="toHoverProfile">
                <div className={`iconProfile justify`}>
                    <FaBookmark />
                    <div className="boldGeneral">My items</div>
                </div>
            </div>
            
        </div>
    );
}

export default CardProfile;