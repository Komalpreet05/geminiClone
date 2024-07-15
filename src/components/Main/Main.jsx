import React from 'react'
import "./Main.css"
import { assets } from '../../assets/assets'
import { useContext } from 'react'
import { Context } from '../../context/Context'
import Typewriter from './Typewriter'
import { BiSolidImageAdd } from "react-icons/bi";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSend } from "react-icons/ai";
import { useRef } from 'react';

const Main = () => {
    const { onSent, setInput, input, recentPrompt, prevPrompt, showResult, loading, resultData, cardText, setCardText } = useContext(Context);
    console.log(cardText)
    const myRef = useRef(0);
    function submitHandler(e) {
        e.preventDefault();
        onSent();
        setCardText("");
    }
    const cardData = [
        {
            text: "Give me a walkthrough of The Byzantine Empire",
            link: assets.compass_icon,
            altText: "Compass"
        },
        {
            text: "Create a list of power phrases for my resume",
            link: assets.bulb_icon,
            altText: "Bulb"
        },
        {
            text: "Briefly summarize this concept: urban planning",
            link: assets.message_icon,
            altText: "message"
        },
        {
            text: "Compare the differences between pickleball and tennis",
            link: assets.code_icon,
            altText: "code_icon"
        }
    ]

    const cardSearch = (text) => {
        setCardText(text);
        setInput(text);
        myRef.current.focus();

        // onSent();
    }
    let x = document.getElementsByClassName('input');
    console.log(x)

    // console.log(test)
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
                        {
                            cardData.map((cardItem, index) => {
                                return (
                                    <div className="card" onClick={() => cardSearch(cardItem.text)} key={index}>
                                        <p>{cardItem.text}</p>
                                        <img src={cardItem.link} alt={cardItem.altText} />
                                    </div>
                                )
                            })
                        }
                        {/* <div className="card">
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
                        </div> */}
                    </div>
                </>) : (
                    <>
                        <div className='result'>
                            <div className="result-title">
                                <img src={assets.user_icon} alt="user" />
                                {/* <p>{prevPrompt[prevPrompt.length - 1]}</p> */}
                                <p>{recentPrompt}</p>
                            </div>
                            <div className="result-data">
                                <img src={assets.gemini_icon} alt="gemini" />
                                {loading ? <div className='loader'><hr />
                                    <hr />
                                    <hr /></div> :
                                    <div>
                                        <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                        {/* <Typewriter text={resultData} delay={3}></Typewriter> */}
                                    </div>
                                }
                            </div>
                        </div>
                    </>
                )}


                <form onSubmit={submitHandler} className="main-bottom">
                    <div className="search-box" >
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={cardText ? cardText : input} placeholder='Enter a prompt here' ref={myRef} className='input-text' />
                        <div className='searchboxDiv'>
                            <div className='form-icon-con'>
                                <BiSolidImageAdd className='form-icons' fontSize={'25px'} />
                            </div>
                            <div className='form-icon-con'>
                                <BiMicrophone className='form-icons' fontSize={'25px'} />
                            </div>

                            {
                                input &&
                                <div>
                                    <button className='btn-send form-icon-con'>
                                        <AiOutlineSend className='form-icons' fontSize={'25px'} />
                                    </button>
                                </div>
                            }
                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </form>

                {/* <div className="main-bottom">
                    <div className="search-box">
                        <input type="text" onChange={(e) => setInput(e.target.value)} value={input} placeholder='Enter a prompt here' />
                        <div>
                            <img src={assets.gallery_icon} alt="gallery" />
                            <img src={assets.mic_icon} alt="mic" />
                            {input && <img src={assets.send_icon} onClick={() => onSent()} alt="send" />}

                        </div>
                    </div>
                    <p className='bottom-info'>
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div> */}
            </div>
        </div>
    )
}

export default Main
