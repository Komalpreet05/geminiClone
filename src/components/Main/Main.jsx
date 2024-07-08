import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'

const Main = () => {
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user_icon" />
            </div>
            <div className="main-container">
                <div className="greet">
                    <p><span>Hello, Komal</span></p>
                    <p>How can I help you today</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Give me a walkthrough of The Byzantine Empire</p>
                        <img src={assets.compass_icon} alt="compass" />
                    </div>

                    <div className="card">
                        <p>Create a list of power phrases for my resume</p>
                        <img src={assets.bulb_icon} alt="bulb" />
                    </div>

                    <div className="card">
                        <p>Briefly summarize this concept: urban planning</p>
                        <img src={assets.message_icon} alt="message" />
                    </div>

                    <div className="card">
                        <p>Compare the differences between pickleball and tennis</p>
                        <img src={assets.code_icon} alt="code" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
