import React, { useEffect, useState } from 'react'
import "./Sidebar.css"
import { assets } from '../../assets/assets'
import { useContext } from 'react';
import { Context } from '../../context/Context';
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegQuestionCircle, FaPlus } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { MdOutlineSettings } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import MyLocation from '../MyLocation';

const Sidebar = ({ darkMode, setDarkMode }) => {
    const [extended, setExtended] = useState(false);
    const [items, setItems] = useState([]);
    const { onSent, prevPrompt, setRecentPrompt, newChat } = useContext(Context);
    console.log(typeof (prevPrompt))
    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt)
        await onSent(prompt)
    }

    useEffect(() => {
        setItems(prevPrompt)
        localStorage.setItem('items', JSON.stringify(items));
    }, [items]);
    console.log(items);

    return (
        <div className='sidebar'>
            <div className="top">
                {/* <img className='menu' onClick={() => setExtended((prev) => !prev)} src={assets.menu_icon} alt="menu_icon" /> */}
                <div className='hamburger' onClick={() => setExtended((prev) => !prev)}>
                    <RxHamburgerMenu className='menu' fontSize={"20px"} ></RxHamburgerMenu>
                </div>
                <div className='new-chat' onClick={() => newChat()}>
                    {/* <img src={assets.plus_icon} alt="plus_icon" /> */}
                    <FaPlus fontSize={'20px'} />
                    {extended && <p>New Chat</p>}
                </div>
                {extended &&
                    <div className='recent'>
                        <p className='recent-title'>Recent</p>

                        {
                            prevPrompt.map((prompt, index) => {
                                return (
                                    <div className={extended ? "recent-entry items-center justify-start" : "recent-entry items-center justify-center"} key={index} onClick={() => loadPrompt(prompt)}>
                                        <FaRegMessage fontSize={'15px'} className='bottom-icon' />
                                        {
                                            prompt.length > 18 ? <p className='recent-search'>{prompt.slice(0, 15)}...</p> : <p className='recent-search'>{prompt}</p>
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
                <div className={extended ? "bottom-item recent-entry justify-start items-center" : "bottom-item recent-entry items-center justify-center"} onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <MdLightMode fontSize="20px" className='modeLight' /> : <MdDarkMode fontSize="20px" className='modeDark' />}
                    {extended && <p className='side-item'>{darkMode ? "Light-Mode" : "Dark-Mode"}</p>}
                </div>
                <div className={extended ? "bottom-item recent-entry justify-start items-center" : "bottom-item recent-entry items-center justify-center"}>
                    {/* <img src={assets.question_icon} alt="question_icon" /> */}
                    <FaRegQuestionCircle fontSize="20px" className='bottom-icon' />
                    {extended && <p className='side-item'>Help</p>}
                </div>

                <div className={extended ? "bottom-item recent-entry justify-start items-center" : "bottom-item recent-entry items-center justify-center"}>
                    {/* <img src={assets.history_icon} alt="history_icon" /> */}
                    <FaHistory fontSize={"18px"} className='bottom-icon' />
                    {extended && <p className='side-item' >Activity</p>}
                </div>

                <div className={extended ? "bottom-item recent-entry justify-start items-center" : "bottom-item recent-entry items-center justify-center"}>
                    {/* <img src={assets.setting_icon} alt="setting_icon" /> */}
                    <MdOutlineSettings fontSize={"22px"} className='bottom-icon' />
                    {extended && <p className='side-item'>Settings</p>}
                </div>

                {/* <MyLocation />   */}
            </div>

        </div>
    )
}

export default Sidebar