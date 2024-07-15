import { createContext, useState } from "react";
import run from "../config/Gemini";

export const Context = createContext();
const ContextProvider = (props) => {
    const [input, setInput] = useState("");
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompt, setPrevPrompt] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState(false);
    const [resultData, setResultData] = useState("");
    const [cardText, setCardText] = useState("");

    const delayPara = (index, nextWord) => {
        setTimeout(function () {
            setResultData(prev => prev + nextWord);
        }, 75 * index)
    }

    const newChat = () => {
        setLoading(false)
        setShowResult(false)

    }

    const onSent = async (prompt) => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        let res;
        if (prompt !== undefined) {
            res = await run(prompt)
            setRecentPrompt(prompt)
        }
        else {
            setPrevPrompt(prev => [...prev, input])
            // localStorage.setItem("recents", JSON.stringify(prevPrompt));
            setRecentPrompt(input)
            res = await run(input)
        }

        let newResArray = res.split("**");
        console.log(newResArray);
        let newString = "";
        // console.log(5 % 2)

        for (let i = 0; i < newResArray.length; i++) {
            if (i === 0 || i % 2 !== 1) {
                newString += newResArray[i];

            }
            else {
                newString += "<b>" + newResArray[i] + "</b>"
            }
        }

        // let newRes2 = newString.split("*").join("</br>")
        //or
        let newRes2 = newString.replaceAll("*", "</br>")

        // setResultData(newRes2);
        let newResArr = newRes2.split(" ");
        for (let i = 0; i < newResArr.length; i++) {
            const nextWord = newResArr[i];
            delayPara(i, nextWord + " ");
        }
        setLoading(false);
        setInput("");



    }
    // onSent("What is react js");
    const contextValue = {
        input, setInput, recentPrompt, setRecentPrompt, prevPrompt, setPrevPrompt, showResult, setShowResult, loading, setLoading, resultData, setResultData, onSent, newChat, setCardText, cardText
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider