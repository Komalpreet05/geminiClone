import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { Context } from '../../context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    return (
        <div className='sidebar'>

            <div className="top">
                <img className='menu' onClick={() => setExtended((prev) => !prev)} src={assets.menu_icon} alt="menu_icon" />
                <div className='new-chat' onClick={() => newChat()}>
                    <img src={assets.plus_icon} alt="plus_icon" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended &&
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>

                        {
                            prevPrompt.map((prompt, index) => {
                                return (
                                    <div className="recent-entry" key={index} onClick={() => loadPrompt(prompt)}>
                                        <img src={assets.message_icon} alt="message_icon" />
                                        {
                                            prompt.length > 18 ? <p>{prompt.slice(0, 15)}...</p> : <p>{prompt}</p>
                                        }

                                        {/* or */}
                                        {/* <p>{prompt.substring(0, 15)}...</p> */}


                                    </div>
                                )
                            })
                        }

                    </div>}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="question_icon" />
                    {extended && <p>Help</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="history_icon" />
                    {extended && <p>Activity</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="setting_icon" />
                    {extended && <p>Settings</p>}
                </div>
            </div>
        </div >
    )
}

export default Sidebar