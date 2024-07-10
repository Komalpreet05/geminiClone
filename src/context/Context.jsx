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

    const onSent = async () => {
        setResultData("");
        setLoading(true);
        setShowResult(true);
        setRecentPrompt(input)
        const res = await run(input);
        setResultData(res);
        setLoading(false);
        setInput("");

    }
    // onSent("What is react js");
    const contextValue = {
        input, setInput, recentPrompt, setRecentPrompt, prevPrompt, setPrevPrompt, showResult, setShowResult, loading, setLoading, resultData, setResultData, onSent
    }

    return (
        <Context.Provider value={contextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider