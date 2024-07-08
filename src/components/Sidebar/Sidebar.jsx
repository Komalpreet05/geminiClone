import React, { useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'

const Sidebar = () => {
    const [extended, setExtended] = useState(false);

    return (
        <div className='sidebar'>

            <div className="top">
                <img className='menu' onClick={() => setExtended((prev) => !prev)} src={assets.menu_icon} alt="menu_icon" />
                <div className='new-chat'>
                    <img src={assets.plus_icon} alt="plus_icon" />
                    {extended && <p>New Chat</p>}
                </div>
                {extended &&
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>
                        <div className="recent-entry">
                            <img src={assets.message_icon} alt="message_icon" />
                            <p>What is react....</p>
                        </div>
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
        </div>
    )
}

export default Sidebar