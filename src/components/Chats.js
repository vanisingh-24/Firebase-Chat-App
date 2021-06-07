import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import {auth} from '../firebase';

const Chats = () => {
    const history = useHistory();

    const handleLogout = async () => {
        await auth.signOut();

        history.push('/');
    }
    
    return (
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine height="calc(100vh - 66px)" projectId="61a044ed-4a69-4252-b0ed-f9e3c7033d99" userName="." userSecret="."/>
        </div>
    )
}

export default Chats;
