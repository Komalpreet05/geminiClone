import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'

const Main = () => {
    const { onSent, setInput, input, recentPrompt, showResult, loading, resultData } = useContext(Context);
    return (
        <div className='main'>
            <div className="nav">
                <p>Gemini</p>
                <img src={assets.user_icon} alt="user_icon" />
            </div>
            <div className="main-container">
                {!showResult ? (<>
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
                </>) : (
                    <>
                        <div className='result'>
                            <div className="title">
                                <img src={assets.user_icon} alt="user" />
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="resultData">
                                <img src={assets.gemini_icon} alt="gemini" />
                                {loading ? <div className='loader'><hr />
                                    <hr />
                                    <hr /></div> :
                                    <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>
                    </>
                )}


                <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery" />
                            <img src={assets.mic_icon} alt="mic" />
                            <img src={assets.send_icon} onClick={() => onSent()} alt="send" />
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main
